var l = i(477900),
    t = i(582128),
    o = i(192308),
    c = i(477782),
    r = i(328162),
    a = i(194261),
    s = i(585510),
    d = i(834409),
    u = i(903093),
    p = i(652215),
    v = i(792996);
i.d(
    n,
    {},
    {
        A: function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                { shouldShowIncidentActions: y, isUnderLockdown: g, incidentData: b } = (0, s.Li)(e.id),
                k = t.useCallback(() => {
                    let n = { source: d.Eo.CONTEXT_MENU, alertType: (0, u.$5)(b) };
                    (0, o.mM)(async () => {
                        let { default: t } = await Promise.all([
                            i.e(231541),
                            i.e(660608),
                            i.e(940258),
                            i.e(710727),
                            i.e(346313),
                            i.e(343233),
                        ]).then(i.bind(i, 671576));
                        return (i) => (0, l.jsx)(t, { ...i, guildId: e.id, analyticsData: n });
                    });
                }, [e.id, b]);
            return e.features.has(p.GuildFeatures.COMMUNITY) && y
                ? (0, l.jsx)(c.Dr, {
                      id: "server-lockdown",
                      label: g ? v.intl.string(v.t["+tSVi3"]) : v.intl.string(v.t.EPlEdu),
                      icon: n ? (g ? r.w : a.LockIcon) : void 0,
                      leadingAccessory: n ? { type: "icon", icon: g ? r.w : a.LockIcon } : void 0,
                      action: k,
                      color: "danger",
                  })
                : null;
        },
    },
);
