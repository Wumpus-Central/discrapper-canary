var E = _(620632),
    i = _(73153),
    a = _(273185),
    n = _(46653),
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
                manual_review_fallback_enabled: T,
                manual_review_decided_underage: d,
            } = t,
            S = _.map((e) => (c(e), e));
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
            manualReviewFallbackEnabled: T ?? !1,
            manualReviewDecidedUnderage: d ?? !1,
        });
    }).catch((e) => {
        i.h.dispatch({ type: "SAFETY_HUB_FETCH_FAILURE", error: e?.body?.message ?? "Unknown error" });
    });
}
function c(e) {
    if (null != e.flagged_content && e.flagged_content.length > 0) {
        let t = e.flagged_content[0];
        ((t.attachments = t.attachments.filter((e) => {
            let { filename: t } = e;
            return (0, a.u)(t) || (0, a.AE)(t);
        })),
            (e.flagged_content = (0, s.Jn)(t) ? [] : [t]));
    }
}
function T() {
    i.h.dispatch({ type: "SAFETY_HUB_RESET_AGE_CHECK_STATUS" });
}
_.d(
    t,
    {},
    {
        Gf: async function (e, t, _) {
            let a = n.default.getSuspendedUserToken(),
                r = null != a ? l.Rsh.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(e) : l.Rsh.SAFETY_HUB_REQUEST_REVIEW(e),
                s =
                    null != a
                        ? E.Bo.put({
                              url: r,
                              body: { signal: t, user_input: _, token: a },
                              rejectWithError: (0, E.fT)(),
                          })
                        : E.Bo.put({ url: r, body: { signal: t, user_input: _ }, rejectWithError: (0, E.fT)() });
            (i.h.dispatch({ type: "SAFETY_HUB_REQUEST_REVIEW_START" }),
                await s
                    .then(() => {
                        i.h.dispatch({ type: "SAFETY_HUB_REQUEST_REVIEW_SUCCESS", classificationId: e });
                    })
                    .catch((e) => {
                        throw (
                            i.h.dispatch({
                                type: "SAFETY_HUB_REQUEST_REVIEW_FAILURE",
                                error: e?.body?.message ?? "Unknown error",
                            }),
                            e
                        );
                    }));
        },
        Yn: o,
        d: async function e() {
            i.h.dispatch({ type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START" });
            let t = n.default.getSuspendedUserToken(),
                _ = r.A.getAgeCheckAttempts(),
                a = l.Rsh.SAFETY_HUB_CHECK_SUSPENDED_AGE_VERIFICATION,
                s = E.Bo.post({ url: a, body: { token: t }, rejectWithError: (0, E.fT)() });
            await s
                .then((t) => {
                    let { body: E } = t,
                        { success: a } = E;
                    (!a && _ < 5 && setTimeout(() => e(), 15e3),
                        i.h.dispatch({ type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS", success: a }));
                })
                .catch((e) => {
                    i.h.dispatch({
                        type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE",
                        error: e?.body?.message ?? "Unknown error",
                    });
                });
        },
        hH: async function (e) {
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
                        {
                            classifications: E,
                            account_standing: a,
                            is_dsa_eligible: n,
                            username: r,
                            is_appeal_eligible: s,
                        } = _,
                        A = E.find((t) => t.id === e);
                    null != A
                        ? (c(A),
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
        },
        hn: T,
        k9: async function (e) {
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
        },
        vN: async function e(t) {
            i.h.dispatch({ type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START" });
            let _ = n.default.getSuspendedUserToken(),
                a = r.A.getAgeCheckAttempts(),
                s = l.Rsh.SAFETY_HUB_CHECK_SUSPENDED_AGE_VERIFICATION_V2,
                c = E.Bo.post({ url: s, body: { token: _, requested_at: t }, rejectWithError: (0, E.fT)() });
            await c
                .then((_) => {
                    let { body: E } = _,
                        { status: n } = E;
                    n === A.aC.PENDING
                        ? a < 5
                            ? setTimeout(() => e(t), 15e3)
                            : T()
                        : ((n === A.aC.UNBANNED || n === A.aC.VERIFIED_OTHER_VIOLATIONS_REMAIN) && o(),
                          i.h.dispatch({ type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS_V2", status: n }));
                })
                .catch((e) => {
                    i.h.dispatch({
                        type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE",
                        error: e?.body?.message ?? "Unknown error",
                    });
                });
        },
    },
);
