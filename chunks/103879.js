n.d(e, {
    FN: () => c,
    NA: () => S,
    _w: () => U,
    uR: () => T,
    yq: () => o
});
var i = n(544891),
    E = n(570140),
    _ = n(406432),
    l = n(314897),
    A = n(236289),
    a = n(788080),
    r = n(800530),
    u = n(981631);
async function o() {
    E.Z.dispatch({ type: 'SAFETY_HUB_FETCH_START' });
    let t = l.default.getSuspendedUserToken(),
        e = null != t ? u.ANM.SAFETY_HUB_SUSPENDED : u.ANM.SAFETY_HUB,
        n =
            null != t
                ? i.tn.post({
                      url: e,
                      body: { token: t },
                      rejectWithError: !1
                  })
                : i.tn.get({
                      url: e,
                      rejectWithError: !1
                  });
    await n
        .then((t) => {
            let { body: e } = t,
                { classifications: n, guild_classifications: i, account_standing: _, is_dsa_eligible: l, username: A, is_appeal_eligible: a, appeal_eligibility: r } = e,
                u = n.map((t) => (s(t), t));
            E.Z.dispatch({
                type: 'SAFETY_HUB_FETCH_SUCCESS',
                classifications: u.concat(null != i ? i : []),
                accountStanding: _,
                isDsaEligible: l,
                username: A,
                isAppealEligible: a,
                appealEligibility: null != r ? r : []
            });
        })
        .catch((t) => {
            var e, n;
            E.Z.dispatch({
                type: 'SAFETY_HUB_FETCH_FAILURE',
                error: null != (n = null == t || null == (e = t.body) ? void 0 : e.message) ? n : 'Unknown error'
            });
        });
}
async function S(t) {
    E.Z.dispatch({
        type: 'SAFETY_HUB_FETCH_CLASSIFICATION_START',
        classificationId: t
    });
    let e = l.default.getSuspendedUserToken(),
        n = null != e ? u.ANM.SAFETY_HUB_SUSPENDED : u.ANM.SAFETY_HUB,
        _ =
            null != e
                ? i.tn.post({
                      url: n,
                      body: { token: e },
                      rejectWithError: !1
                  })
                : i.tn.get({
                      url: n,
                      rejectWithError: !1
                  });
    await _.then((e) => {
        let { body: n } = e,
            { classifications: i, account_standing: _, is_dsa_eligible: l, username: A, is_appeal_eligible: a } = n,
            r = i.find((e) => e.id === t);
        null != r
            ? (s(r),
              E.Z.dispatch({
                  type: 'SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS',
                  classification: r,
                  accountStanding: _,
                  isDsaEligible: l,
                  username: A,
                  isAppealEligible: a
              }))
            : E.Z.dispatch({
                  type: 'SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE',
                  error: 'Classification not found.',
                  classificationId: t
              });
    }).catch((e) => {
        var n, i;
        E.Z.dispatch({
            type: 'SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE',
            error: null != (i = null == e || null == (n = e.body) ? void 0 : n.message) ? i : 'Unknown error',
            classificationId: t
        });
    });
}
function s(t) {
    if (null != t.flagged_content && t.flagged_content.length > 0) {
        let e = t.flagged_content[0];
        (e.attachments = e.attachments.filter((t) => {
            let { filename: e } = t;
            return (0, _.CO)(e) || (0, _.NU)(e);
        })),
            (t.flagged_content = (0, a.Vt)(e) ? [] : [e]);
    }
}
async function T(t, e, n) {
    let _ = l.default.getSuspendedUserToken(),
        A = null != _ ? u.ANM.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(t) : u.ANM.SAFETY_HUB_REQUEST_REVIEW(t),
        a =
            null != _
                ? i.tn.put({
                      url: A,
                      body: {
                          signal: e,
                          user_input: n,
                          token: _
                      },
                      rejectWithError: !1
                  })
                : i.tn.put({
                      url: A,
                      body: {
                          signal: e,
                          user_input: n
                      },
                      rejectWithError: !1
                  });
    E.Z.dispatch({ type: 'SAFETY_HUB_REQUEST_REVIEW_START' }),
        await a
            .then(() => {
                E.Z.dispatch({
                    type: 'SAFETY_HUB_REQUEST_REVIEW_SUCCESS',
                    classificationId: t
                });
            })
            .catch((t) => {
                var e, n;
                throw (
                    (E.Z.dispatch({
                        type: 'SAFETY_HUB_REQUEST_REVIEW_FAILURE',
                        error: null != (n = null == t || null == (e = t.body) ? void 0 : e.message) ? n : 'Unknown error'
                    }),
                    t)
                );
            });
}
async function c(t) {
    E.Z.dispatch({ type: 'SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START' });
    let e = l.default.getSuspendedUserToken(),
        n = u.ANM.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION,
        _ = i.tn.post({
            url: n,
            body: {
                token: e,
                from_classification_id: t
            },
            rejectWithError: !1
        });
    await _.then((t) => {
        let { body: e } = t,
            { verification_request_id: n, verification_webview_url: i } = e;
        E.Z.dispatch({
            type: 'SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS',
            verificationRequestId: n,
            verificationWebviewUrl: i
        });
    }).catch((t) => {
        var e, n;
        E.Z.dispatch({
            type: 'SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE',
            error: null != (n = null == t || null == (e = t.body) ? void 0 : e.message) ? n : 'Unknown error'
        });
    });
}
async function U() {
    E.Z.dispatch({ type: 'SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START' });
    let t = l.default.getSuspendedUserToken(),
        e = A.Z.getAgeCheckAttempts(),
        n = u.ANM.SAFETY_HUB_CHECK_SUSPENDED_AGE_VERIFICATION,
        _ = i.tn.post({
            url: n,
            body: { token: t },
            rejectWithError: !1
        });
    await _.then((t) => {
        let { body: n } = t,
            { success: i } = n;
        !i && e < r.o6 && setTimeout(() => U(), r.Cp),
            E.Z.dispatch({
                type: 'SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS',
                success: i
            });
    }).catch((t) => {
        var e, n;
        E.Z.dispatch({
            type: 'SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE',
            error: null != (n = null == t || null == (e = t.body) ? void 0 : e.message) ? n : 'Unknown error'
        });
    });
}
