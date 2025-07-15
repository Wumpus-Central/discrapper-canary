n.d(t, {
    Xq: () => u,
    g8: () => E,
    hZ: () => d,
    wk: () => _
});
var r = n(990547),
    i = n(283693),
    l = n(570140),
    a = n(558724),
    o = n(626135),
    c = n(573261),
    s = n(981631);
function u(e) {
    l.Z.dispatch({
        type: 'SURVEY_OVERRIDE',
        id: e
    });
}
function d(e, t) {
    (l.Z.dispatch({
        type: 'SURVEY_HIDE',
        key: e
    }),
        t
            ? o.default.track(s.rMx.APP_NOTICE_CLOSED, {
                  notice_type: s.kVF.SURVEY,
                  survey_id: e,
                  dismissed: t
              })
            : o.default.track(s.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, { notice_type: s.kVF.SURVEY }));
}
function _(e, t) {
    var n = {};
    return (
        null != e && (n.survey_override = e),
        null != t && (n.disable_auto_seen = t),
        c.Z.get({
            url: s.ANM.USER_SURVEY,
            query: n,
            trackedActionData: {
                event: r.NetworkActionNames.USER_SURVEY_FETCH,
                properties: (e) => {
                    var t;
                    let n = null == e || null == (t = e.body) ? void 0 : t.survey;
                    return (0, i.iG)({ key: null == n ? void 0 : n.key });
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
    let t = a.Z.getLastSeenTimestamp();
    if (null === t || (null != t && Date.now() - t >= a.J))
        return (
            l.Z.dispatch({
                type: 'SURVEY_SEEN',
                key: e
            }),
            c.Z.post({
                url: s.ANM.USER_SURVEY_SEEN(e),
                trackedActionData: {
                    event: r.NetworkActionNames.USER_SURVEY_SEEN,
                    properties: (t) => (0, i.iG)({ key: e })
                },
                rejectWithError: !1
            })
        );
}
