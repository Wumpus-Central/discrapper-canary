E.d(e, { Gf: () => o, Yn: () => S, d: () => c, hH: () => T, k9: () => U });
var n = E(636537),
    _ = E(228366),
    i = E(77350),
    A = E(495544),
    l = E(207913),
    a = E(393033),
    r = E(239093),
    s = E(652215);
async function S() {
    _.h.dispatch({ type: "SAFETY_HUB_FETCH_START" });
    let t = A.default.getSuspendedUserToken(),
        e = null != t ? s.Rsh.SAFETY_HUB_SUSPENDED : s.Rsh.SAFETY_HUB,
        E =
            null != t
                ? n.Bo.post({ url: e, body: { token: t }, rejectWithError: !1 })
                : n.Bo.get({ url: e, rejectWithError: !1 });
    await E.then((t) => {
        let { body: e } = t,
            {
                classifications: E,
                guild_classifications: n,
                account_standing: i,
                is_dsa_eligible: A,
                username: l,
                is_appeal_eligible: a,
                appeal_eligibility: r,
            } = e,
            s = E.map((t) => (u(t), t));
        _.h.dispatch({
            type: "SAFETY_HUB_FETCH_SUCCESS",
            classifications: s.concat(n ?? []),
            accountStanding: i,
            isDsaEligible: A,
            username: l,
            isAppealEligible: a,
            appealEligibility: r ?? [],
        });
    }).catch((t) => {
        _.h.dispatch({ type: "SAFETY_HUB_FETCH_FAILURE", error: t?.body?.message ?? "Unknown error" });
    });
}
async function T(t) {
    _.h.dispatch({ type: "SAFETY_HUB_FETCH_CLASSIFICATION_START", classificationId: t });
    let e = A.default.getSuspendedUserToken(),
        E = null != e ? s.Rsh.SAFETY_HUB_SUSPENDED : s.Rsh.SAFETY_HUB,
        i =
            null != e
                ? n.Bo.post({ url: E, body: { token: e }, rejectWithError: !1 })
                : n.Bo.get({ url: E, rejectWithError: !1 });
    await i
        .then((e) => {
            let { body: E } = e,
                { classifications: n, account_standing: i, is_dsa_eligible: A, username: l, is_appeal_eligible: a } = E,
                r = n.find((e) => e.id === t);
            null != r
                ? (u(r),
                  _.h.dispatch({
                      type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS",
                      classification: r,
                      accountStanding: i,
                      isDsaEligible: A,
                      username: l,
                      isAppealEligible: a,
                  }))
                : _.h.dispatch({
                      type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
                      error: "Classification not found.",
                      classificationId: t,
                  });
        })
        .catch((e) => {
            _.h.dispatch({
                type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
                error: e?.body?.message ?? "Unknown error",
                classificationId: t,
            });
        });
}
function u(t) {
    if (null != t.flagged_content && t.flagged_content.length > 0) {
        let e = t.flagged_content[0];
        (e.attachments = e.attachments.filter((t) => {
            let { filename: e } = t;
            return (0, i.u)(e) || (0, i.AE)(e);
        })),
            (t.flagged_content = (0, a.Jn)(e) ? [] : [e]);
    }
}
async function o(t, e, E) {
    let i = A.default.getSuspendedUserToken(),
        l = null != i ? s.Rsh.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(t) : s.Rsh.SAFETY_HUB_REQUEST_REVIEW(t),
        a =
            null != i
                ? n.Bo.put({ url: l, body: { signal: e, user_input: E, token: i }, rejectWithError: !1 })
                : n.Bo.put({ url: l, body: { signal: e, user_input: E }, rejectWithError: !1 });
    _.h.dispatch({ type: "SAFETY_HUB_REQUEST_REVIEW_START" }),
        await a
            .then(() => {
                _.h.dispatch({ type: "SAFETY_HUB_REQUEST_REVIEW_SUCCESS", classificationId: t });
            })
            .catch((t) => {
                throw (
                    (_.h.dispatch({
                        type: "SAFETY_HUB_REQUEST_REVIEW_FAILURE",
                        error: t?.body?.message ?? "Unknown error",
                    }),
                    t)
                );
            });
}
async function U(t) {
    _.h.dispatch({ type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START" });
    let e = A.default.getSuspendedUserToken(),
        E = s.Rsh.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION,
        i = n.Bo.post({ url: E, body: { token: e, from_classification_id: t }, rejectWithError: !1 });
    await i
        .then((t) => {
            let { body: e } = t,
                { verification_request_id: E, verification_webview_url: n } = e;
            _.h.dispatch({
                type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS",
                verificationRequestId: E,
                verificationWebviewUrl: n,
            });
        })
        .catch((t) => {
            _.h.dispatch({
                type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE",
                error: t?.body?.message ?? "Unknown error",
            });
        });
}
async function c() {
    _.h.dispatch({ type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START" });
    let t = A.default.getSuspendedUserToken(),
        e = l.A.getAgeCheckAttempts(),
        E = s.Rsh.SAFETY_HUB_CHECK_SUSPENDED_AGE_VERIFICATION,
        i = n.Bo.post({ url: E, body: { token: t }, rejectWithError: !1 });
    await i
        .then((t) => {
            let { body: E } = t,
                { success: n } = E;
            !n && e < r.ti && setTimeout(() => c(), r.Eb),
                _.h.dispatch({ type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS", success: n });
        })
        .catch((t) => {
            _.h.dispatch({
                type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE",
                error: t?.body?.message ?? "Unknown error",
            });
        });
}
