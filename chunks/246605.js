var l = n(613412),
    r = n(620632),
    i = n(933681),
    s = n(73153),
    a = n(274184),
    o = n(129230),
    c = n(499785),
    u = n(652215);
n.d(
    t,
    {},
    {
        oX: function (e) {
            let t = a.Ay.getLastSeenTimestamp();
            if (null === t || (null != t && Date.now() - t >= a.bh))
                return (
                    s.h.dispatch({ type: "SURVEY_SEEN", key: e }),
                    c.A.post({
                        url: u.Rsh.USER_SURVEY_SEEN(e),
                        trackedActionData: {
                            event: l.NetworkActionNames.USER_SURVEY_SEEN,
                            properties: (t) => (0, i.e0)({ key: e }),
                        },
                        rejectWithError: (0, r.fT)(),
                    })
                );
        },
        pX: function (e, t) {
            (s.h.dispatch({ type: "SURVEY_HIDE", key: e }),
                t
                    ? o.default.track(u.HAw.APP_NOTICE_CLOSED, {
                          notice_type: u.kqX.SURVEY,
                          survey_id: e,
                          dismissed: t,
                      })
                    : o.default.track(u.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, { notice_type: u.kqX.SURVEY }));
        },
        xr: function (e, t) {
            s.h.dispatch({ type: "SURVEY_OVERRIDE", id: e, isActionTriggered: t });
        },
    },
);
