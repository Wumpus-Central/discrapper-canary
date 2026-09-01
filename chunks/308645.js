i.d(t, { Gf: () => S, Yn: () => o, d: () => u, hH: () => c, k9: () => d });
var n = i(636537),
    _ = i(228366),
    E = i(59318),
    a = i(280450),
    r = i(207913),
    s = i(393033),
    l = i(239093),
    A = i(652215);
async function o() {
    _.h.dispatch({ type: "SAFETY_HUB_FETCH_START" });
    let e = a.default.getSuspendedUserToken(),
        t = null != e ? A.Rsh.SAFETY_HUB_SUSPENDED : A.Rsh.SAFETY_HUB,
        i =
            null != e
                ? n.Bo.post({ url: t, body: { token: e }, rejectWithError: (0, n.fT)() })
                : n.Bo.get({ url: t, rejectWithError: (0, n.fT)() });
    await i
        .then((e) => {
            let { body: t } = e,
                {
                    classifications: i,
                    guild_classifications: n,
                    account_standing: E,
                    is_dsa_eligible: a,
                    username: r,
                    is_appeal_eligible: s,
                    appeal_eligibility: l,
                    expressive_modal_v2_enabled: A,
                } = t,
                o = i.map((e) => (T(e), e));
            _.h.dispatch({
                type: "SAFETY_HUB_FETCH_SUCCESS",
                classifications: o.concat(n ?? []),
                accountStanding: E,
                isDsaEligible: a,
                username: r,
                isAppealEligible: s,
                appealEligibility: l ?? [],
                expressiveModalV2Enabled: A ?? !1,
            });
        })
        .catch((e) => {
            _.h.dispatch({ type: "SAFETY_HUB_FETCH_FAILURE", error: e?.body?.message ?? "Unknown error" });
        });
}
async function c(e) {
    _.h.dispatch({ type: "SAFETY_HUB_FETCH_CLASSIFICATION_START", classificationId: e });
    let t = a.default.getSuspendedUserToken(),
        i = null != t ? A.Rsh.SAFETY_HUB_SUSPENDED : A.Rsh.SAFETY_HUB,
        E =
            null != t
                ? n.Bo.post({ url: i, body: { token: t }, rejectWithError: (0, n.fT)() })
                : n.Bo.get({ url: i, rejectWithError: (0, n.fT)() });
    await E.then((t) => {
        let { body: i } = t,
            { classifications: n, account_standing: E, is_dsa_eligible: a, username: r, is_appeal_eligible: s } = i,
            l = n.find((t) => t.id === e);
        null != l
            ? (T(l),
              _.h.dispatch({
                  type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS",
                  classification: l,
                  accountStanding: E,
                  isDsaEligible: a,
                  username: r,
                  isAppealEligible: s,
              }))
            : _.h.dispatch({
                  type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
                  error: "Classification not found.",
                  classificationId: e,
              });
    }).catch((t) => {
        _.h.dispatch({
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
            return (0, E.u)(t) || (0, E.AE)(t);
        })),
            (e.flagged_content = (0, s.Jn)(t) ? [] : [t]);
    }
}
async function S(e, t, i) {
    let E = a.default.getSuspendedUserToken(),
        r = null != E ? A.Rsh.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(e) : A.Rsh.SAFETY_HUB_REQUEST_REVIEW(e),
        s =
            null != E
                ? n.Bo.put({ url: r, body: { signal: t, user_input: i, token: E }, rejectWithError: (0, n.fT)() })
                : n.Bo.put({ url: r, body: { signal: t, user_input: i }, rejectWithError: (0, n.fT)() });
    _.h.dispatch({ type: "SAFETY_HUB_REQUEST_REVIEW_START" }),
        await s
            .then(() => {
                _.h.dispatch({ type: "SAFETY_HUB_REQUEST_REVIEW_SUCCESS", classificationId: e });
            })
            .catch((e) => {
                throw (
                    (_.h.dispatch({
                        type: "SAFETY_HUB_REQUEST_REVIEW_FAILURE",
                        error: e?.body?.message ?? "Unknown error",
                    }),
                    e)
                );
            });
}
async function d(e) {
    _.h.dispatch({ type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START" });
    let t = a.default.getSuspendedUserToken(),
        i = A.Rsh.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION,
        E = n.Bo.post({ url: i, body: { token: t, from_classification_id: e }, rejectWithError: (0, n.fT)() });
    await E.then((e) => {
        let { body: t } = e,
            { verification_request_id: i, verification_webview_url: n } = t;
        _.h.dispatch({
            type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS",
            verificationRequestId: i,
            verificationWebviewUrl: n,
        });
    }).catch((e) => {
        _.h.dispatch({
            type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE",
            error: e?.body?.message ?? "Unknown error",
        });
    });
}
async function u() {
    _.h.dispatch({ type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START" });
    let e = a.default.getSuspendedUserToken(),
        t = r.A.getAgeCheckAttempts(),
        i = A.Rsh.SAFETY_HUB_CHECK_SUSPENDED_AGE_VERIFICATION,
        E = n.Bo.post({ url: i, body: { token: e }, rejectWithError: (0, n.fT)() });
    await E.then((e) => {
        let { body: i } = e,
            { success: n } = i;
        !n && t < l.ti && setTimeout(() => u(), l.Eb),
            _.h.dispatch({ type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS", success: n });
    }).catch((e) => {
        _.h.dispatch({
            type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE",
            error: e?.body?.message ?? "Unknown error",
        });
    });
}
