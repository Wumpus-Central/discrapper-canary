_.d(t, { Gf: () => S, Yn: () => o, d: () => U, hH: () => c, hn: () => u, k9: () => d, vN: () => p });
var E = _(636537),
    i = _(228366),
    a = _(59318),
    n = _(280450),
    r = _(207913),
    s = _(393033),
    A = _(239093),
    l = _(652215);
async function o() {
    i.h.dispatch({ type: "SAFETY_HUB_FETCH_START" });
    let e = n.default.getSuspendedUserToken(),
        t = null != e ? l.Rsh.SAFETY_HUB_SUSPENDED : l.Rsh.SAFETY_HUB,
        _ =
            null != e
                ? E.Bo.post({ url: t, body: { token: e }, rejectWithError: (0, E.fT)() })
                : E.Bo.get({ url: t, rejectWithError: (0, E.fT)() });
    await _.then((e) => {
        let { body: t } = e,
            {
                classifications: _,
                guild_classifications: E,
                account_standing: a,
                is_dsa_eligible: n,
                username: r,
                is_appeal_eligible: s,
                appeal_eligibility: A,
                expressive_modal_v2_enabled: l,
                show_expressive_modal_subtitle_alt: o,
                manual_review_fallback_enabled: c,
            } = t,
            S = _.map((e) => (T(e), e));
        i.h.dispatch({
            type: "SAFETY_HUB_FETCH_SUCCESS",
            classifications: S.concat(E ?? []),
            accountStanding: a,
            isDsaEligible: n,
            username: r,
            isAppealEligible: s,
            appealEligibility: A ?? [],
            expressiveModalV2Enabled: l ?? !1,
            showExpressiveModalSubtitleAlt: o ?? !1,
            manualReviewFallbackEnabled: c ?? !1,
        });
    }).catch((e) => {
        i.h.dispatch({ type: "SAFETY_HUB_FETCH_FAILURE", error: e?.body?.message ?? "Unknown error" });
    });
}
async function c(e) {
    i.h.dispatch({ type: "SAFETY_HUB_FETCH_CLASSIFICATION_START", classificationId: e });
    let t = n.default.getSuspendedUserToken(),
        _ = null != t ? l.Rsh.SAFETY_HUB_SUSPENDED : l.Rsh.SAFETY_HUB,
        a =
            null != t
                ? E.Bo.post({ url: _, body: { token: t }, rejectWithError: (0, E.fT)() })
                : E.Bo.get({ url: _, rejectWithError: (0, E.fT)() });
    await a
        .then((t) => {
            let { body: _ } = t,
                { classifications: E, account_standing: a, is_dsa_eligible: n, username: r, is_appeal_eligible: s } = _,
                A = E.find((t) => t.id === e);
            null != A
                ? (T(A),
                  i.h.dispatch({
                      type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS",
                      classification: A,
                      accountStanding: a,
                      isDsaEligible: n,
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
function T(e) {
    if (null != e.flagged_content && e.flagged_content.length > 0) {
        let t = e.flagged_content[0];
        (t.attachments = t.attachments.filter((e) => {
            let { filename: t } = e;
            return (0, a.u)(t) || (0, a.AE)(t);
        })),
            (e.flagged_content = (0, s.Jn)(t) ? [] : [t]);
    }
}
async function S(e, t, _) {
    let a = n.default.getSuspendedUserToken(),
        r = null != a ? l.Rsh.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(e) : l.Rsh.SAFETY_HUB_REQUEST_REVIEW(e),
        s =
            null != a
                ? E.Bo.put({ url: r, body: { signal: t, user_input: _, token: a }, rejectWithError: (0, E.fT)() })
                : E.Bo.put({ url: r, body: { signal: t, user_input: _ }, rejectWithError: (0, E.fT)() });
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
async function d(e) {
    i.h.dispatch({ type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START" });
    let t = n.default.getSuspendedUserToken(),
        _ = l.Rsh.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION,
        a = E.Bo.post({ url: _, body: { token: t, from_classification_id: e }, rejectWithError: (0, E.fT)() });
    await a
        .then((e) => {
            let { body: t } = e,
                { verification_request_id: _, verification_webview_url: E } = t;
            i.h.dispatch({
                type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS",
                verificationRequestId: _,
                verificationWebviewUrl: E,
            });
        })
        .catch((e) => {
            i.h.dispatch({
                type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE",
                error: e?.body?.message ?? "Unknown error",
            });
        });
}
async function U() {
    i.h.dispatch({ type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START" });
    let e = n.default.getSuspendedUserToken(),
        t = r.A.getAgeCheckAttempts(),
        _ = l.Rsh.SAFETY_HUB_CHECK_SUSPENDED_AGE_VERIFICATION,
        a = E.Bo.post({ url: _, body: { token: e }, rejectWithError: (0, E.fT)() });
    await a
        .then((e) => {
            let { body: _ } = e,
                { success: E } = _;
            !E && t < A.ti && setTimeout(() => U(), A.Eb),
                i.h.dispatch({ type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS", success: E });
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
    let t = n.default.getSuspendedUserToken(),
        _ = r.A.getAgeCheckAttempts(),
        a = l.Rsh.SAFETY_HUB_CHECK_SUSPENDED_AGE_VERIFICATION_V2,
        s = E.Bo.post({ url: a, body: { token: t, requested_at: e }, rejectWithError: (0, E.fT)() });
    await s
        .then((t) => {
            let { body: E } = t,
                { status: a } = E;
            a === A.aC.PENDING
                ? _ < A.ti
                    ? setTimeout(() => p(e), A.Eb)
                    : u()
                : ((a === A.aC.UNBANNED || a === A.aC.VERIFIED_OTHER_VIOLATIONS_REMAIN) && o(),
                  i.h.dispatch({ type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS_V2", status: a }));
        })
        .catch((e) => {
            i.h.dispatch({
                type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE",
                error: e?.body?.message ?? "Unknown error",
            });
        });
}
function u() {
    i.h.dispatch({ type: "SAFETY_HUB_RESET_AGE_CHECK_STATUS" });
}
