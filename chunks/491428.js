n.d(t, {
    Xq: function () {
        return u;
    },
    g8: function () {
        return h;
    },
    hZ: function () {
        return d;
    },
    wk: function () {
        return m;
    }
});
var i = n(990547),
    r = n(283693),
    l = n(570140),
    a = n(558724),
    o = n(626135),
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
            ? o.default.track(c.rMx.APP_NOTICE_CLOSED, {
                  notice_type: c.kVF.SURVEY,
                  survey_id: e,
                  dismissed: t
              })
            : o.default.track(c.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, { notice_type: c.kVF.SURVEY });
}
function m(e, t) {
    var n = {};
    return (
        null != e && (n.survey_override = e),
        null != t && (n.disable_auto_seen = t),
        s.Z.get({
            url: c.ANM.USER_SURVEY,
            query: n,
            trackedActionData: {
                event: i.NetworkActionNames.USER_SURVEY_FETCH,
                properties: (e) => {
                    var t;
                    let n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.survey;
                    return (0, r.iG)({ key: null == n ? void 0 : n.key });
                }
            },
            rejectWithError: !1
        }).then(
            (e) => {
                var t;
                l.Z.dispatch({
                    type: 'SURVEY_FETCHED',
                    survey: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.survey
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
function h(e) {
    let t = a.Z.getLastSeenTimestamp();
    if (null === t || (null != t && Date.now() - t >= a.J))
        return (
            l.Z.dispatch({
                type: 'SURVEY_SEEN',
                key: e
            }),
            s.Z.post({
                url: c.ANM.USER_SURVEY_SEEN(e),
                trackedActionData: {
                    event: i.NetworkActionNames.USER_SURVEY_SEEN,
                    properties: (t) => (0, r.iG)({ key: e })
                },
                rejectWithError: !1
            })
        );
}
