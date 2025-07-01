n.d(t, {
    Xq: () => d,
    g8: () => E,
    hZ: () => u,
    wk: () => _
});
var i = n(990547),
    r = n(283693),
    l = n(570140),
    o = n(558724),
    s = n(626135),
    a = n(573261),
    c = n(981631);
function d(e) {
    l.Z.dispatch({
        type: 'SURVEY_OVERRIDE',
        id: e
    });
}
function u(e, t) {
    (l.Z.dispatch({
        type: 'SURVEY_HIDE',
        key: e
    }),
        t
            ? s.default.track(c.rMx.APP_NOTICE_CLOSED, {
                  notice_type: c.kVF.SURVEY,
                  survey_id: e,
                  dismissed: t
              })
            : s.default.track(c.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, { notice_type: c.kVF.SURVEY }));
}
function _(e, t) {
    var n = {};
    return (
        null != e && (n.survey_override = e),
        null != t && (n.disable_auto_seen = t),
        a.Z.get({
            url: c.ANM.USER_SURVEY,
            query: n,
            trackedActionData: {
                event: i.NetworkActionNames.USER_SURVEY_FETCH,
                properties: (e) => {
                    var t;
                    let n = null == e || null == (t = e.body) ? void 0 : t.survey;
                    return (0, r.iG)({ key: null == n ? void 0 : n.key });
                }
            },
            rejectWithError: !1
        }).then(
            (e) => {
                var t;
                l.Z.dispatch({
                    type: 'SURVEY_FETCHED',
                    survey: null == e || null == (t = e.body) ? void 0 : t.survey
                });
            },
            () => {
                l.Z.dispatch({
                    type: 'SURVEY_FETCHED',
                    survey: null
                });
            }
        )
    );
}
function E(e) {
    let t = o.Z.getLastSeenTimestamp();
    if (null === t || (null != t && Date.now() - t >= o.J))
        return (
            l.Z.dispatch({
                type: 'SURVEY_SEEN',
                key: e
            }),
            a.Z.post({
                url: c.ANM.USER_SURVEY_SEEN(e),
                trackedActionData: {
                    event: i.NetworkActionNames.USER_SURVEY_SEEN,
                    properties: (t) => (0, r.iG)({ key: e })
                },
                rejectWithError: !1
            })
        );
}
