n.d(t, {
    FN: () => m,
    NA: () => f,
    _w: () => h,
    uR: () => _,
    yq: () => d,
});
var r = n(544891),
    i = n(570140),
    a = n(406432),
    o = n(314897),
    s = n(236289),
    l = n(788080),
    c = n(800530),
    u = n(981631);
async function d() {
    i.Z.dispatch({ type: "SAFETY_HUB_FETCH_START" });
    let e = o.default.getSuspendedUserToken(),
        t = null != e ? u.ANM.SAFETY_HUB_SUSPENDED : u.ANM.SAFETY_HUB,
        n =
            null != e
                ? r.tn.post({
                      url: t,
                      body: { token: e },
                      rejectWithError: !1,
                  })
                : r.tn.get({
                      url: t,
                      rejectWithError: !1,
                  });
    await n
        .then((e) => {
            let { body: t } = e,
                {
                    classifications: n,
                    guild_classifications: r,
                    account_standing: a,
                    is_dsa_eligible: o,
                    username: s,
                    is_appeal_eligible: l,
                    appeal_eligibility: c,
                } = t,
                u = n.map((e) => (p(e), e));
            i.Z.dispatch({
                type: "SAFETY_HUB_FETCH_SUCCESS",
                classifications: u.concat(null != r ? r : []),
                accountStanding: a,
                isDsaEligible: o,
                username: s,
                isAppealEligible: l,
                appealEligibility: null != c ? c : [],
            });
        })
        .catch((e) => {
            var t, n;
            i.Z.dispatch({
                type: "SAFETY_HUB_FETCH_FAILURE",
                error: null != (n = null == e || null == (t = e.body) ? void 0 : t.message) ? n : "Unknown error",
            });
        });
}
async function f(e) {
    i.Z.dispatch({
        type: "SAFETY_HUB_FETCH_CLASSIFICATION_START",
        classificationId: e,
    });
    let t = o.default.getSuspendedUserToken(),
        n = null != t ? u.ANM.SAFETY_HUB_SUSPENDED : u.ANM.SAFETY_HUB,
        a =
            null != t
                ? r.tn.post({
                      url: n,
                      body: { token: t },
                      rejectWithError: !1,
                  })
                : r.tn.get({
                      url: n,
                      rejectWithError: !1,
                  });
    await a
        .then((t) => {
            let { body: n } = t,
                { classifications: r, account_standing: a, is_dsa_eligible: o, username: s, is_appeal_eligible: l } = n,
                c = r.find((t) => t.id === e);
            null != c
                ? (p(c),
                  i.Z.dispatch({
                      type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS",
                      classification: c,
                      accountStanding: a,
                      isDsaEligible: o,
                      username: s,
                      isAppealEligible: l,
                  }))
                : i.Z.dispatch({
                      type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
                      error: "Classification not found.",
                      classificationId: e,
                  });
        })
        .catch((t) => {
            var n, r;
            i.Z.dispatch({
                type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
                error: null != (r = null == t || null == (n = t.body) ? void 0 : n.message) ? r : "Unknown error",
                classificationId: e,
            });
        });
}
function p(e) {
    if (null != e.flagged_content && e.flagged_content.length > 0) {
        let t = e.flagged_content[0];
        (t.attachments = t.attachments.filter((e) => {
            let { filename: t } = e;
            return (0, a.CO)(t) || (0, a.NU)(t);
        })),
            (e.flagged_content = (0, l.Vt)(t) ? [] : [t]);
    }
}
async function _(e, t, n) {
    let a = o.default.getSuspendedUserToken(),
        s = null != a ? u.ANM.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(e) : u.ANM.SAFETY_HUB_REQUEST_REVIEW(e),
        l =
            null != a
                ? r.tn.put({
                      url: s,
                      body: {
                          signal: t,
                          user_input: n,
                          token: a,
                      },
                      rejectWithError: !1,
                  })
                : r.tn.put({
                      url: s,
                      body: {
                          signal: t,
                          user_input: n,
                      },
                      rejectWithError: !1,
                  });
    i.Z.dispatch({ type: "SAFETY_HUB_REQUEST_REVIEW_START" }),
        await l
            .then(() => {
                i.Z.dispatch({
                    type: "SAFETY_HUB_REQUEST_REVIEW_SUCCESS",
                    classificationId: e,
                });
            })
            .catch((e) => {
                var t, n;
                throw (
                    (i.Z.dispatch({
                        type: "SAFETY_HUB_REQUEST_REVIEW_FAILURE",
                        error:
                            null != (n = null == e || null == (t = e.body) ? void 0 : t.message) ? n : "Unknown error",
                    }),
                    e)
                );
            });
}
async function m(e) {
    i.Z.dispatch({ type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START" });
    let t = o.default.getSuspendedUserToken(),
        n = u.ANM.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION,
        a = r.tn.post({
            url: n,
            body: {
                token: t,
                from_classification_id: e,
            },
            rejectWithError: !1,
        });
    await a
        .then((e) => {
            let { body: t } = e,
                { verification_request_id: n, verification_webview_url: r } = t;
            i.Z.dispatch({
                type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS",
                verificationRequestId: n,
                verificationWebviewUrl: r,
            });
        })
        .catch((e) => {
            var t, n;
            i.Z.dispatch({
                type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE",
                error: null != (n = null == e || null == (t = e.body) ? void 0 : t.message) ? n : "Unknown error",
            });
        });
}
async function h() {
    i.Z.dispatch({ type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START" });
    let e = o.default.getSuspendedUserToken(),
        t = s.Z.getAgeCheckAttempts(),
        n = u.ANM.SAFETY_HUB_CHECK_SUSPENDED_AGE_VERIFICATION,
        a = r.tn.post({
            url: n,
            body: { token: e },
            rejectWithError: !1,
        });
    await a
        .then((e) => {
            let { body: n } = e,
                { success: r } = n;
            !r && t < c.o6 && setTimeout(() => h(), c.Cp),
                i.Z.dispatch({
                    type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS",
                    success: r,
                });
        })
        .catch((e) => {
            var t, n;
            i.Z.dispatch({
                type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE",
                error: null != (n = null == e || null == (t = e.body) ? void 0 : t.message) ? n : "Unknown error",
            });
        });
}
