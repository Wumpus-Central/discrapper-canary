n.d(t, {
    Xq: () => u,
    g8: () => _,
    hZ: () => d,
    wk: () => E
});
var r = n(990547),
    i = n(283693),
    l = n(570140),
    o = n(558724),
    a = n(626135),
    s = n(573261),
    c = n(981631);
function u(e) {
    l.Z.dispatch({
        type: 'SURVEY_OVERRIDE',
        id: e
    });
}
function d(e, t) {
    l.Z.dispatch({
        type: 'SURVEY_HIDE',
        key: e
    }),
        t
            ? a.default.track(c.rMx.APP_NOTICE_CLOSED, {
                  notice_type: c.kVF.SURVEY,
                  survey_id: e,
                  dismissed: t
              })
            : a.default.track(c.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, { notice_type: c.kVF.SURVEY });
}
function E(e, t) {
    var n = {};
    return (
        null != e && (n.survey_override = e),
        null != t && (n.disable_auto_seen = t),
        s.Z.get({
            url: c.ANM.USER_SURVEY,
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
function _(e) {
    let t = o.Z.getLastSeenTimestamp();
    if (null === t || (null != t && Date.now() - t >= o.J))
        return (
            l.Z.dispatch({
                type: 'SURVEY_SEEN',
                key: e
            }),
            s.Z.post({
                url: c.ANM.USER_SURVEY_SEEN(e),
                trackedActionData: {
                    event: r.NetworkActionNames.USER_SURVEY_SEEN,
                    properties: (t) => (0, i.iG)({ key: e })
                },
                rejectWithError: !1
            })
        );
}
