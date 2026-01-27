n.d(e, {
    Gf: () => o,
    Yn: () => S,
    d: () => c,
    hH: () => s,
    k9: () => U,
});
var E = n(562465),
    i = n(73153),
    _ = n(77350),
    l = n(961350),
    A = n(207913),
    r = n(393033),
    a = n(239093),
    u = n(652215);
async function S() {
    i.h.dispatch({
        type: "SAFETY_HUB_FETCH_START",
    });
    let t = l.default.getSuspendedUserToken(),
        e = null != t ? u.Rsh.SAFETY_HUB_SUSPENDED : u.Rsh.SAFETY_HUB,
        n =
            null != t
                ? E.Bo.post({
                      url: e,
                      body: {
                          token: t,
                      },
                      rejectWithError: !1,
                  })
                : E.Bo.get({
                      url: e,
                      rejectWithError: !1,
                  });
    await n
        .then((t) => {
            let { body: e } = t,
                {
                    classifications: n,
                    guild_classifications: E,
                    account_standing: _,
                    is_dsa_eligible: l,
                    username: A,
                    is_appeal_eligible: r,
                    appeal_eligibility: a,
                } = e,
                u = n.map((t) => (T(t), t));
            i.h.dispatch({
                type: "SAFETY_HUB_FETCH_SUCCESS",
                classifications: u.concat(null != E ? E : []),
                accountStanding: _,
                isDsaEligible: l,
                username: A,
                isAppealEligible: r,
                appealEligibility: null != a ? a : [],
            });
        })
        .catch((t) => {
            var e, n;
            i.h.dispatch({
                type: "SAFETY_HUB_FETCH_FAILURE",
                error: null != (e = null == t || null == (n = t.body) ? void 0 : n.message) ? e : "Unknown error",
            });
        });
}
async function s(t) {
    i.h.dispatch({
        type: "SAFETY_HUB_FETCH_CLASSIFICATION_START",
        classificationId: t,
    });
    let e = l.default.getSuspendedUserToken(),
        n = null != e ? u.Rsh.SAFETY_HUB_SUSPENDED : u.Rsh.SAFETY_HUB,
        _ =
            null != e
                ? E.Bo.post({
                      url: n,
                      body: {
                          token: e,
                      },
                      rejectWithError: !1,
                  })
                : E.Bo.get({
                      url: n,
                      rejectWithError: !1,
                  });
    await _.then((e) => {
        let { body: n } = e,
            { classifications: E, account_standing: _, is_dsa_eligible: l, username: A, is_appeal_eligible: r } = n,
            a = E.find((e) => e.id === t);
        null != a
            ? (T(a),
              i.h.dispatch({
                  type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS",
                  classification: a,
                  accountStanding: _,
                  isDsaEligible: l,
                  username: A,
                  isAppealEligible: r,
              }))
            : i.h.dispatch({
                  type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
                  error: "Classification not found.",
                  classificationId: t,
              });
    }).catch((e) => {
        var n, E;
        i.h.dispatch({
            type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
            error: null != (n = null == e || null == (E = e.body) ? void 0 : E.message) ? n : "Unknown error",
            classificationId: t,
        });
    });
}

function T(t) {
    if (null != t.flagged_content && t.flagged_content.length > 0) {
        let e = t.flagged_content[0];
        (e.attachments = e.attachments.filter((t) => {
            let { filename: e } = t;
            return (0, _.u)(e) || (0, _.AE)(e);
        })),
            (t.flagged_content = (0, r.Jn)(e) ? [] : [e]);
    }
}
async function o(t, e, n) {
    let _ = l.default.getSuspendedUserToken(),
        A = null != _ ? u.Rsh.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(t) : u.Rsh.SAFETY_HUB_REQUEST_REVIEW(t),
        r =
            null != _
                ? E.Bo.put({
                      url: A,
                      body: {
                          signal: e,
                          user_input: n,
                          token: _,
                      },
                      rejectWithError: !1,
                  })
                : E.Bo.put({
                      url: A,
                      body: {
                          signal: e,
                          user_input: n,
                      },
                      rejectWithError: !1,
                  });
    i.h.dispatch({
        type: "SAFETY_HUB_REQUEST_REVIEW_START",
    }),
        await r
            .then(() => {
                i.h.dispatch({
                    type: "SAFETY_HUB_REQUEST_REVIEW_SUCCESS",
                    classificationId: t,
                });
            })
            .catch((t) => {
                var e, n;
                throw (
                    (i.h.dispatch({
                        type: "SAFETY_HUB_REQUEST_REVIEW_FAILURE",
                        error:
                            null != (e = null == t || null == (n = t.body) ? void 0 : n.message) ? e : "Unknown error",
                    }),
                    t)
                );
            });
}
async function U(t) {
    i.h.dispatch({
        type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START",
    });
    let e = l.default.getSuspendedUserToken(),
        n = u.Rsh.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION,
        _ = E.Bo.post({
            url: n,
            body: {
                token: e,
                from_classification_id: t,
            },
            rejectWithError: !1,
        });
    await _.then((t) => {
        let { body: e } = t,
            { verification_request_id: n, verification_webview_url: E } = e;
        i.h.dispatch({
            type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS",
            verificationRequestId: n,
            verificationWebviewUrl: E,
        });
    }).catch((t) => {
        var e, n;
        i.h.dispatch({
            type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE",
            error: null != (e = null == t || null == (n = t.body) ? void 0 : n.message) ? e : "Unknown error",
        });
    });
}
async function c() {
    i.h.dispatch({
        type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START",
    });
    let t = l.default.getSuspendedUserToken(),
        e = A.A.getAgeCheckAttempts(),
        n = u.Rsh.SAFETY_HUB_CHECK_SUSPENDED_AGE_VERIFICATION,
        _ = E.Bo.post({
            url: n,
            body: {
                token: t,
            },
            rejectWithError: !1,
        });
    await _.then((t) => {
        let { body: n } = t,
            { success: E } = n;
        !E && e < a.ti && setTimeout(() => c(), a.Eb),
            i.h.dispatch({
                type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS",
                success: E,
            });
    }).catch((t) => {
        var e, n;
        i.h.dispatch({
            type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE",
            error: null != (e = null == t || null == (n = t.body) ? void 0 : n.message) ? e : "Unknown error",
        });
    });
}
