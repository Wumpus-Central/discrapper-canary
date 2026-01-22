n.d(t, {
    Gf: () => _,
    Yn: () => d,
    d: () => m,
    hH: () => f,
    k9: () => h,
});
var r = n(562465),
    i = n(73153),
    a = n(77350),
    s = n(961350),
    o = n(207913),
    l = n(393033),
    c = n(239093),
    u = n(652215);
async function d() {
    i.h.dispatch({
        type: "SAFETY_HUB_FETCH_START",
    });
    let e = s.default.getSuspendedUserToken(),
        t = null != e ? u.Rsh.SAFETY_HUB_SUSPENDED : u.Rsh.SAFETY_HUB,
        n =
            null != e
                ? r.Bo.post({
                      url: t,
                      body: {
                          token: e,
                      },
                      rejectWithError: !1,
                  })
                : r.Bo.get({
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
                    is_dsa_eligible: s,
                    username: o,
                    is_appeal_eligible: l,
                    appeal_eligibility: c,
                } = t,
                u = n.map((e) => (p(e), e));
            i.h.dispatch({
                type: "SAFETY_HUB_FETCH_SUCCESS",
                classifications: u.concat(null != r ? r : []),
                accountStanding: a,
                isDsaEligible: s,
                username: o,
                isAppealEligible: l,
                appealEligibility: null != c ? c : [],
            });
        })
        .catch((e) => {
            var t, n;
            i.h.dispatch({
                type: "SAFETY_HUB_FETCH_FAILURE",
                error: null != (t = null == e || null == (n = e.body) ? void 0 : n.message) ? t : "Unknown error",
            });
        });
}
async function f(e) {
    i.h.dispatch({
        type: "SAFETY_HUB_FETCH_CLASSIFICATION_START",
        classificationId: e,
    });
    let t = s.default.getSuspendedUserToken(),
        n = null != t ? u.Rsh.SAFETY_HUB_SUSPENDED : u.Rsh.SAFETY_HUB,
        a =
            null != t
                ? r.Bo.post({
                      url: n,
                      body: {
                          token: t,
                      },
                      rejectWithError: !1,
                  })
                : r.Bo.get({
                      url: n,
                      rejectWithError: !1,
                  });
    await a
        .then((t) => {
            let { body: n } = t,
                { classifications: r, account_standing: a, is_dsa_eligible: s, username: o, is_appeal_eligible: l } = n,
                c = r.find((t) => t.id === e);
            null != c
                ? (p(c),
                  i.h.dispatch({
                      type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS",
                      classification: c,
                      accountStanding: a,
                      isDsaEligible: s,
                      username: o,
                      isAppealEligible: l,
                  }))
                : i.h.dispatch({
                      type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
                      error: "Classification not found.",
                      classificationId: e,
                  });
        })
        .catch((t) => {
            var n, r;
            i.h.dispatch({
                type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
                error: null != (n = null == t || null == (r = t.body) ? void 0 : r.message) ? n : "Unknown error",
                classificationId: e,
            });
        });
}

function p(e) {
    if (null != e.flagged_content && e.flagged_content.length > 0) {
        let t = e.flagged_content[0];
        (t.attachments = t.attachments.filter((e) => {
            let { filename: t } = e;
            return (0, a.u)(t) || (0, a.AE)(t);
        })),
            (e.flagged_content = (0, l.Jn)(t) ? [] : [t]);
    }
}
async function _(e, t, n) {
    let a = s.default.getSuspendedUserToken(),
        o = null != a ? u.Rsh.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(e) : u.Rsh.SAFETY_HUB_REQUEST_REVIEW(e),
        l =
            null != a
                ? r.Bo.put({
                      url: o,
                      body: {
                          signal: t,
                          user_input: n,
                          token: a,
                      },
                      rejectWithError: !1,
                  })
                : r.Bo.put({
                      url: o,
                      body: {
                          signal: t,
                          user_input: n,
                      },
                      rejectWithError: !1,
                  });
    i.h.dispatch({
        type: "SAFETY_HUB_REQUEST_REVIEW_START",
    }),
        await l
            .then(() => {
                i.h.dispatch({
                    type: "SAFETY_HUB_REQUEST_REVIEW_SUCCESS",
                    classificationId: e,
                });
            })
            .catch((e) => {
                var t, n;
                throw (
                    (i.h.dispatch({
                        type: "SAFETY_HUB_REQUEST_REVIEW_FAILURE",
                        error:
                            null != (t = null == e || null == (n = e.body) ? void 0 : n.message) ? t : "Unknown error",
                    }),
                    e)
                );
            });
}
async function h(e) {
    i.h.dispatch({
        type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START",
    });
    let t = s.default.getSuspendedUserToken(),
        n = u.Rsh.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION,
        a = r.Bo.post({
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
            i.h.dispatch({
                type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS",
                verificationRequestId: n,
                verificationWebviewUrl: r,
            });
        })
        .catch((e) => {
            var t, n;
            i.h.dispatch({
                type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE",
                error: null != (t = null == e || null == (n = e.body) ? void 0 : n.message) ? t : "Unknown error",
            });
        });
}
async function m() {
    i.h.dispatch({
        type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START",
    });
    let e = s.default.getSuspendedUserToken(),
        t = o.A.getAgeCheckAttempts(),
        n = u.Rsh.SAFETY_HUB_CHECK_SUSPENDED_AGE_VERIFICATION,
        a = r.Bo.post({
            url: n,
            body: {
                token: e,
            },
            rejectWithError: !1,
        });
    await a
        .then((e) => {
            let { body: n } = e,
                { success: r } = n;
            !r && t < c.ti && setTimeout(() => m(), c.Eb),
                i.h.dispatch({
                    type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS",
                    success: r,
                });
        })
        .catch((e) => {
            var t, n;
            i.h.dispatch({
                type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE",
                error: null != (t = null == e || null == (n = e.body) ? void 0 : n.message) ? t : "Unknown error",
            });
        });
}
