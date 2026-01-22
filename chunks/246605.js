n.d(t, {
    BC: () => f,
    oX: () => p,
    pX: () => d,
    xr: () => u,
});
var r = n(110259),
    i = n(933681),
    a = n(73153),
    s = n(274184),
    o = n(954571),
    l = n(499785),
    c = n(652215);

function u(e) {
    a.h.dispatch({
        type: "SURVEY_OVERRIDE",
        id: e,
    });
}

function d(e, t) {
    a.h.dispatch({
        type: "SURVEY_HIDE",
        key: e,
    }),
        t
            ? o.default.track(c.HAw.APP_NOTICE_CLOSED, {
                  notice_type: c.kqX.SURVEY,
                  survey_id: e,
                  dismissed: t,
              })
            : o.default.track(c.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                  notice_type: c.kqX.SURVEY,
              });
}

function f(e, t) {
    var n = {};
    return (
        null != e && (n.survey_override = e),
        null != t && (n.disable_auto_seen = t),
        l.A.get({
            url: c.Rsh.USER_SURVEY,
            query: n,
            trackedActionData: {
                event: r.NetworkActionNames.USER_SURVEY_FETCH,
                properties: (e) => {
                    var t;
                    let n = null == e || null == (t = e.body) ? void 0 : t.survey;
                    return (0, i.e0)({
                        key: null == n ? void 0 : n.key,
                    });
                },
            },
            rejectWithError: !1,
        }).then(
            (e) => {
                var t, n;
                return (
                    a.h.dispatch({
                        type: "SURVEY_FETCHED",
                        survey: null == e || null == (t = e.body) ? void 0 : t.survey,
                    }),
                    null == e || null == (n = e.body) ? void 0 : n.survey
                );
            },
            () => {
                a.h.dispatch({
                    type: "SURVEY_FETCHED",
                    survey: null,
                });
            },
        )
    );
}

function p(e) {
    let t = s.Ay.getLastSeenTimestamp();
    if (null === t || (null != t && Date.now() - t >= s.bh))
        return (
            a.h.dispatch({
                type: "SURVEY_SEEN",
                key: e,
            }),
            l.A.post({
                url: c.Rsh.USER_SURVEY_SEEN(e),
                trackedActionData: {
                    event: r.NetworkActionNames.USER_SURVEY_SEEN,
                    properties: (t) =>
                        (0, i.e0)({
                            key: e,
                        }),
                },
                rejectWithError: !1,
            })
        );
}
