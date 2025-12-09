n.d(t, {
    Xq: () => u,
    g8: () => p,
    hZ: () => d,
    wk: () => f,
});
var r = n(990547),
    i = n(283693),
    a = n(570140),
    o = n(558724),
    s = n(626135),
    l = n(573261),
    c = n(981631);
function u(e) {
    a.Z.dispatch({
        type: "SURVEY_OVERRIDE",
        id: e,
    });
}
function d(e, t) {
    a.Z.dispatch({
        type: "SURVEY_HIDE",
        key: e,
    }),
        t
            ? s.default.track(c.rMx.APP_NOTICE_CLOSED, {
                  notice_type: c.kVF.SURVEY,
                  survey_id: e,
                  dismissed: t,
              })
            : s.default.track(c.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, { notice_type: c.kVF.SURVEY });
}
function f(e, t) {
    var n = {};
    return (
        null != e && (n.survey_override = e),
        null != t && (n.disable_auto_seen = t),
        l.Z.get({
            url: c.ANM.USER_SURVEY,
            query: n,
            trackedActionData: {
                event: r.NetworkActionNames.USER_SURVEY_FETCH,
                properties: (e) => {
                    var t;
                    let n = null == e || null == (t = e.body) ? void 0 : t.survey;
                    return (0, i.iG)({ key: null == n ? void 0 : n.key });
                },
            },
            rejectWithError: !1,
        }).then(
            (e) => {
                var t;
                a.Z.dispatch({
                    type: "SURVEY_FETCHED",
                    survey: null == e || null == (t = e.body) ? void 0 : t.survey,
                });
            },
            () => {
                a.Z.dispatch({
                    type: "SURVEY_FETCHED",
                    survey: null,
                });
            },
        )
    );
}
function p(e) {
    let t = o.ZP.getLastSeenTimestamp();
    if (null === t || (null != t && Date.now() - t >= o.Jd))
        return (
            a.Z.dispatch({
                type: "SURVEY_SEEN",
                key: e,
            }),
            l.Z.post({
                url: c.ANM.USER_SURVEY_SEEN(e),
                trackedActionData: {
                    event: r.NetworkActionNames.USER_SURVEY_SEEN,
                    properties: (t) => (0, i.iG)({ key: e }),
                },
                rejectWithError: !1,
            })
        );
}
