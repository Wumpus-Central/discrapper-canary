E.d(t, { Gf: () => S, Yn: () => l, d: () => d, hH: () => T, hn: () => h, k9: () => U, vN: () => p });
var _ = E(636537),
    i = E(228366),
    n = E(59318),
    a = E(280450),
    r = E(207913),
    s = E(393033),
    A = E(239093),
    o = E(652215);
async function l() {
    i.h.dispatch({ type: "SAFETY_HUB_FETCH_START" });
    let e = a.default.getSuspendedUserToken(),
        t = null != e ? o.Rsh.SAFETY_HUB_SUSPENDED : o.Rsh.SAFETY_HUB,
        E =
            null != e
                ? _.Bo.post({ url: t, body: { token: e }, rejectWithError: (0, _.fT)() })
                : _.Bo.get({ url: t, rejectWithError: (0, _.fT)() });
    await E.then((e) => {
        let { body: t } = e,
            {
                classifications: E,
                guild_classifications: _,
                account_standing: n,
                is_dsa_eligible: a,
                username: r,
                is_appeal_eligible: s,
                appeal_eligibility: A,
                expressive_modal_v2_enabled: o,
                show_expressive_modal_subtitle_alt: l,
            } = t,
            T = E.map((e) => (c(e), e));
        i.h.dispatch({
            type: "SAFETY_HUB_FETCH_SUCCESS",
            classifications: T.concat(_ ?? []),
            accountStanding: n,
            isDsaEligible: a,
            username: r,
            isAppealEligible: s,
            appealEligibility: A ?? [],
            expressiveModalV2Enabled: o ?? !1,
            showExpressiveModalSubtitleAlt: l ?? !1,
        });
    }).catch((e) => {
        i.h.dispatch({ type: "SAFETY_HUB_FETCH_FAILURE", error: e?.body?.message ?? "Unknown error" });
    });
}
async function T(e) {
    i.h.dispatch({ type: "SAFETY_HUB_FETCH_CLASSIFICATION_START", classificationId: e });
    let t = a.default.getSuspendedUserToken(),
        E = null != t ? o.Rsh.SAFETY_HUB_SUSPENDED : o.Rsh.SAFETY_HUB,
        n =
            null != t
                ? _.Bo.post({ url: E, body: { token: t }, rejectWithError: (0, _.fT)() })
                : _.Bo.get({ url: E, rejectWithError: (0, _.fT)() });
    await n
        .then((t) => {
            let { body: E } = t,
                { classifications: _, account_standing: n, is_dsa_eligible: a, username: r, is_appeal_eligible: s } = E,
                A = _.find((t) => t.id === e);
            null != A
                ? (c(A),
                  i.h.dispatch({
                      type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS",
                      classification: A,
                      accountStanding: n,
                      isDsaEligible: a,
                      username: r,
                      isAppealEligible: s,
                  }))
                : i.h.dispatch({
                      type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
                      error: "Classification not found.",
                      classificationId: e,
                  });
        })
        .catch((t) => {
            i.h.dispatch({
                type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
                error: t?.body?.message ?? "Unknown error",
                classificationId: e,
            });
        });
}
function c(e) {
    if (null != e.flagged_content && e.flagged_content.length > 0) {
        let t = e.flagged_content[0];
        (t.attachments = t.attachments.filter((e) => {
            let { filename: t } = e;
            return (0, n.u)(t) || (0, n.AE)(t);
        })),
            (e.flagged_content = (0, s.Jn)(t) ? [] : [t]);
    }
}
async function S(e, t, E) {
    let n = a.default.getSuspendedUserToken(),
        r = null != n ? o.Rsh.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(e) : o.Rsh.SAFETY_HUB_REQUEST_REVIEW(e),
        s =
            null != n
                ? _.Bo.put({ url: r, body: { signal: t, user_input: E, token: n }, rejectWithError: (0, _.fT)() })
                : _.Bo.put({ url: r, body: { signal: t, user_input: E }, rejectWithError: (0, _.fT)() });
    i.h.dispatch({ type: "SAFETY_HUB_REQUEST_REVIEW_START" }),
        await s
            .then(() => {
                i.h.dispatch({ type: "SAFETY_HUB_REQUEST_REVIEW_SUCCESS", classificationId: e });
            })
            .catch((e) => {
                throw (
                    (i.h.dispatch({
                        type: "SAFETY_HUB_REQUEST_REVIEW_FAILURE",
                        error: e?.body?.message ?? "Unknown error",
                    }),
                    e)
                );
            });
}
async function U(e) {
    i.h.dispatch({ type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START" });
    let t = a.default.getSuspendedUserToken(),
        E = o.Rsh.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION,
        n = _.Bo.post({ url: E, body: { token: t, from_classification_id: e }, rejectWithError: (0, _.fT)() });
    await n
        .then((e) => {
            let { body: t } = e,
                { verification_request_id: E, verification_webview_url: _ } = t;
            i.h.dispatch({
                type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS",
                verificationRequestId: E,
                verificationWebviewUrl: _,
            });
        })
        .catch((e) => {
            i.h.dispatch({
                type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE",
                error: e?.body?.message ?? "Unknown error",
            });
        });
}
async function d() {
    i.h.dispatch({ type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START" });
    let e = a.default.getSuspendedUserToken(),
        t = r.A.getAgeCheckAttempts(),
        E = o.Rsh.SAFETY_HUB_CHECK_SUSPENDED_AGE_VERIFICATION,
        n = _.Bo.post({ url: E, body: { token: e }, rejectWithError: (0, _.fT)() });
    await n
        .then((e) => {
            let { body: E } = e,
                { success: _ } = E;
            !_ && t < A.ti && setTimeout(() => d(), A.Eb),
                i.h.dispatch({ type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS", success: _ });
        })
        .catch((e) => {
            i.h.dispatch({
                type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE",
                error: e?.body?.message ?? "Unknown error",
            });
        });
}
async function p(e) {
    i.h.dispatch({ type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START" });
    let t = a.default.getSuspendedUserToken(),
        E = r.A.getAgeCheckAttempts(),
        n = o.Rsh.SAFETY_HUB_CHECK_SUSPENDED_AGE_VERIFICATION_V2,
        s = _.Bo.post({ url: n, body: { token: t, requested_at: e }, rejectWithError: (0, _.fT)() });
    await s
        .then((t) => {
            let { body: _ } = t,
                { status: n } = _;
            n === A.aC.PENDING
                ? E < A.ti
                    ? setTimeout(() => p(e), A.Eb)
                    : h()
                : ((n === A.aC.UNBANNED || n === A.aC.VERIFIED_OTHER_VIOLATIONS_REMAIN) && l(),
                  i.h.dispatch({ type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS_V2", status: n }));
        })
        .catch((e) => {
            i.h.dispatch({
                type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE",
                error: e?.body?.message ?? "Unknown error",
            });
        });
}
function h() {
    i.h.dispatch({ type: "SAFETY_HUB_RESET_AGE_CHECK_STATUS" });
}
