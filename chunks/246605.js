var i = n(613412),
    s = n(620632),
    r = n(933681),
    l = n(73153),
    a = n(274184),
    o = n(129230),
    c = n(499785),
    d = n(652215);
n.d(
    t,
    {},
    {
        oX: function (e) {
            let t = a.Ay.getLastSeenTimestamp();
            if (null === t || (null != t && Date.now() - t >= a.bh))
                return (
                    l.h.dispatch({ type: "SURVEY_SEEN", key: e }),
                    c.A.post({
                        url: d.Rsh.USER_SURVEY_SEEN(e),
                        trackedActionData: {
                            event: i.NetworkActionNames.USER_SURVEY_SEEN,
                            properties: (t) => (0, r.e0)({ key: e }),
                        },
                        rejectWithError: (0, s.fT)(),
                    })
                );
        },
        pX: function (e, t) {
            (l.h.dispatch({ type: "SURVEY_HIDE", key: e }),
                t
                    ? o.default.track(d.HAw.APP_NOTICE_CLOSED, {
                          notice_type: d.kqX.SURVEY,
                          survey_id: e,
                          dismissed: t,
                      })
                    : o.default.track(d.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, { notice_type: d.kqX.SURVEY }));
        },
        xr: function (e, t) {
            l.h.dispatch({ type: "SURVEY_OVERRIDE", id: e, isActionTriggered: t });
        },
    },
);
