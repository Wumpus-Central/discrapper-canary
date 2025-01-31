n.d(t, {
    Xq: () => u,
    g8: () => _,
    hZ: () => E,
    wk: () => d
});
var i = n(990547),
    l = n(283693),
    r = n(570140),
    a = n(558724),
    s = n(626135),
    o = n(573261),
    c = n(981631);
function u(e) {
    r.Z.dispatch({
        type: 'SURVEY_OVERRIDE',
        id: e
    });
}
function E(e, t) {
    r.Z.dispatch({
        type: 'SURVEY_HIDE',
        key: e
    }),
        t
            ? s.default.track(c.rMx.APP_NOTICE_CLOSED, {
                  notice_type: c.kVF.SURVEY,
                  survey_id: e,
                  dismissed: t
              })
            : s.default.track(c.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, { notice_type: c.kVF.SURVEY });
}
function d(e, t) {
    var n = {};
    return (
        null != e && (n.survey_override = e),
        null != t && (n.disable_auto_seen = t),
        o.Z.get({
            url: c.ANM.USER_SURVEY,
            query: n,
            trackedActionData: {
                event: i.NetworkActionNames.USER_SURVEY_FETCH,
                properties: (e) => {
                    var t;
                    let n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.survey;
                    return (0, l.iG)({ key: null == n ? void 0 : n.key });
                }
            },
            rejectWithError: !1
        }).then(
            (e) => {
                var t;
                r.Z.dispatch({
                    type: 'SURVEY_FETCHED',
                    survey: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.survey
                });
            },
            () => {
                r.Z.dispatch({
                    type: 'SURVEY_FETCHED',
                    survey: null
                });
            }
        )
    );
}
function _(e) {
    let t = a.Z.getLastSeenTimestamp();
    if (null === t || (null != t && Date.now() - t >= a.J))
        return (
            r.Z.dispatch({
                type: 'SURVEY_SEEN',
                key: e
            }),
            o.Z.post({
                url: c.ANM.USER_SURVEY_SEEN(e),
                trackedActionData: {
                    event: i.NetworkActionNames.USER_SURVEY_SEEN,
                    properties: (t) => (0, l.iG)({ key: e })
                },
                rejectWithError: !1
            })
        );
}
