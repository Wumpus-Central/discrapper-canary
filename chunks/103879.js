n.d(e, {
    FN: () => s,
    NA: () => u,
    uR: () => S,
    yq: () => r
});
var i = n(544891),
    E = n(570140),
    l = n(406432),
    _ = n(314897);
n(236289);
var a = n(788080);
n(800530);
var A = n(981631);
async function r() {
    E.Z.dispatch({ type: 'SAFETY_HUB_FETCH_START' });
    let t = _.default.getSuspendedUserToken(),
        e = null != t ? A.ANM.SAFETY_HUB_SUSPENDED : A.ANM.SAFETY_HUB,
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
                { classifications: n, guild_classifications: i, account_standing: l, is_dsa_eligible: _, username: a, is_appeal_eligible: A, appeal_eligibility: r } = e,
                u = n.map((t) => (o(t), t));
            E.Z.dispatch({
                type: 'SAFETY_HUB_FETCH_SUCCESS',
                classifications: u.concat(null != i ? i : []),
                accountStanding: l,
                isDsaEligible: _,
                username: a,
                isAppealEligible: A,
                appealEligibility: null != r ? r : []
            });
        })
        .catch((t) => {
            var e, n;
            E.Z.dispatch({
                type: 'SAFETY_HUB_FETCH_FAILURE',
                error: null !== (n = null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.message) && void 0 !== n ? n : 'Unknown error'
            });
        });
}
async function u(t) {
    E.Z.dispatch({
        type: 'SAFETY_HUB_FETCH_CLASSIFICATION_START',
        classificationId: t
    });
    let e = _.default.getSuspendedUserToken(),
        n = null != e ? A.ANM.SAFETY_HUB_SUSPENDED : A.ANM.SAFETY_HUB,
        l =
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
    await l
        .then((e) => {
            let { body: n } = e,
                { classifications: i, account_standing: l, is_dsa_eligible: _, username: a, is_appeal_eligible: A } = n,
                r = i.find((e) => e.id === t);
            null != r
                ? (o(r),
                  E.Z.dispatch({
                      type: 'SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS',
                      classification: r,
                      accountStanding: l,
                      isDsaEligible: _,
                      username: a,
                      isAppealEligible: A
                  }))
                : E.Z.dispatch({
                      type: 'SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE',
                      error: 'Classification not found.',
                      classificationId: t
                  });
        })
        .catch((e) => {
            var n, i;
            E.Z.dispatch({
                type: 'SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE',
                error: null !== (i = null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.message) && void 0 !== i ? i : 'Unknown error',
                classificationId: t
            });
        });
}
function o(t) {
    if (null != t.flagged_content && t.flagged_content.length > 0) {
        let e = t.flagged_content[0];
        (e.attachments = e.attachments.filter((t) => {
            let { filename: e } = t;
            return (0, l.CO)(e) || (0, l.NU)(e);
        })),
            (t.flagged_content = (0, a.Vt)(e) ? [] : [e]);
    }
}
async function S(t, e, n) {
    let l = _.default.getSuspendedUserToken(),
        a = null != l ? A.ANM.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(t) : A.ANM.SAFETY_HUB_REQUEST_REVIEW(t),
        r =
            null != l
                ? i.tn.put({
                      url: a,
                      body: {
                          signal: e,
                          user_input: n,
                          token: l
                      },
                      rejectWithError: !1
                  })
                : i.tn.put({
                      url: a,
                      body: {
                          signal: e,
                          user_input: n
                      },
                      rejectWithError: !1
                  });
    E.Z.dispatch({ type: 'SAFETY_HUB_REQUEST_REVIEW_START' }),
        await r
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
                        error: null !== (n = null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.message) && void 0 !== n ? n : 'Unknown error'
                    }),
                    t)
                );
            });
}
async function s() {
    E.Z.dispatch({ type: 'SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START' });
    let t = _.default.getSuspendedUserToken(),
        e = A.ANM.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION,
        n = i.tn.post({
            url: e,
            body: { token: t },
            rejectWithError: !1
        });
    await n
        .then((t) => {
            let { body: e } = t,
                { verification_request_id: n, verification_webview_url: i } = e;
            E.Z.dispatch({
                type: 'SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS',
                verificationRequestId: n,
                verificationWebviewUrl: i
            });
        })
        .catch((t) => {
            var e, n;
            E.Z.dispatch({
                type: 'SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE',
                error: null !== (n = null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.message) && void 0 !== n ? n : 'Unknown error'
            });
        });
}
