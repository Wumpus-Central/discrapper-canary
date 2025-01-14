n.d(e, {
    FN: function () {
        return T;
    },
    NA: function () {
        return S;
    },
    _w: function () {
        return U;
    },
    uR: function () {
        return s;
    },
    yq: function () {
        return o;
    }
});
var i = n(544891),
    E = n(570140),
    _ = n(406432),
    l = n(314897),
    r = n(236289),
    A = n(788080),
    u = n(800530),
    a = n(981631);
async function o() {
    E.Z.dispatch({ type: 'SAFETY_HUB_FETCH_START' });
    let t = l.default.getSuspendedUserToken(),
        e = null != t ? a.ANM.SAFETY_HUB_SUSPENDED : a.ANM.SAFETY_HUB,
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
                { classifications: n, guild_classifications: i, account_standing: _, is_dsa_eligible: l, username: r, is_appeal_eligible: A, appeal_eligibility: u } = e,
                a = n.map((t) => (c(t), t));
            E.Z.dispatch({
                type: 'SAFETY_HUB_FETCH_SUCCESS',
                classifications: a.concat(null != i ? i : []),
                accountStanding: _,
                isDsaEligible: l,
                username: r,
                isAppealEligible: A,
                appealEligibility: null != u ? u : []
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
async function S(t) {
    E.Z.dispatch({
        type: 'SAFETY_HUB_FETCH_CLASSIFICATION_START',
        classificationId: t
    });
    let e = l.default.getSuspendedUserToken(),
        n = null != e ? a.ANM.SAFETY_HUB_SUSPENDED : a.ANM.SAFETY_HUB,
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
            { classifications: i, account_standing: _, is_dsa_eligible: l, username: r, is_appeal_eligible: A } = n,
            u = i.find((e) => e.id === t);
        null != u
            ? (c(u),
              E.Z.dispatch({
                  type: 'SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS',
                  classification: u,
                  accountStanding: _,
                  isDsaEligible: l,
                  username: r,
                  isAppealEligible: A
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
            error: null !== (i = null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.message) && void 0 !== i ? i : 'Unknown error',
            classificationId: t
        });
    });
}
function c(t) {
    if (null != t.flagged_content && t.flagged_content.length > 0) {
        let e = t.flagged_content[0];
        (e.attachments = e.attachments.filter((t) => {
            let { filename: e } = t;
            return (0, _.CO)(e) || (0, _.NU)(e);
        })),
            (t.flagged_content = (0, A.Vt)(e) ? [] : [e]);
    }
}
async function s(t, e, n) {
    let _ = l.default.getSuspendedUserToken(),
        r = null != _ ? a.ANM.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(t) : a.ANM.SAFETY_HUB_REQUEST_REVIEW(t),
        A =
            null != _
                ? i.tn.put({
                      url: r,
                      body: {
                          signal: e,
                          user_input: n,
                          token: _
                      },
                      rejectWithError: !1
                  })
                : i.tn.put({
                      url: r,
                      body: {
                          signal: e,
                          user_input: n
                      },
                      rejectWithError: !1
                  });
    E.Z.dispatch({ type: 'SAFETY_HUB_REQUEST_REVIEW_START' }),
        await A.then(() => {
            E.Z.dispatch({
                type: 'SAFETY_HUB_REQUEST_REVIEW_SUCCESS',
                classificationId: t
            });
        }).catch((t) => {
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
async function T() {
    E.Z.dispatch({ type: 'SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START' });
    let t = l.default.getSuspendedUserToken(),
        e = a.ANM.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION,
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
async function U() {
    E.Z.dispatch({ type: 'SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START' });
    let t = l.default.getSuspendedUserToken(),
        e = r.Z.getAgeCheckAttempts(),
        n = a.ANM.SAFETY_HUB_CHECK_SUSPENDED_AGE_VERIFICATION,
        _ = i.tn.post({
            url: n,
            body: { token: t },
            rejectWithError: !1
        });
    await _.then((t) => {
        let { body: n } = t,
            { success: i } = n;
        !i && e < u.o6 && setTimeout(() => U(), u.Cp),
            E.Z.dispatch({
                type: 'SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS',
                success: i
            });
    }).catch((t) => {
        var e, n;
        E.Z.dispatch({
            type: 'SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE',
            error: null !== (n = null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.message) && void 0 !== n ? n : 'Unknown error'
        });
    });
}
