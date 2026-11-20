var l = i(477900),
    t = i(582128),
    o = i(192308),
    r = i(477782),
    c = i(328162),
    a = i(194261),
    d = i(585510),
    s = i(834409),
    u = i(903093),
    g = i(652215),
    v = i(792996);
i.d(
    n,
    {},
    {
        A: function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                { shouldShowIncidentActions: b, isUnderLockdown: p, incidentData: y } = (0, d.Li)(e.id),
                k = t.useCallback(() => {
                    let n = { source: s.Eo.CONTEXT_MENU, alertType: (0, u.$5)(y) };
                    (0, o.mM)(async () => {
                        let { default: t } = await Promise.all([
                            i.e(3942),
                            i.e(660608),
                            i.e(940258),
                            i.e(710727),
                            i.e(346313),
                            i.e(343233),
                        ]).then(i.bind(i, 671576));
                        return (i) => (0, l.jsx)(t, { ...i, guildId: e.id, analyticsData: n });
                    });
                }, [e.id, y]);
            return e.features.has(g.GuildFeatures.COMMUNITY) && b
                ? (0, l.jsx)(r.Dr, {
                      id: "server-lockdown",
                      label: p ? v.intl.string(v.t["+tSVi3"]) : v.intl.string(v.t.EPlEdu),
                      icon: n ? (p ? c.LockUnlockedIcon : a.LockIcon) : void 0,
                      leadingAccessory: n ? { type: "icon", icon: p ? c.LockUnlockedIcon : a.LockIcon } : void 0,
                      action: k,
                      color: "danger",
                  })
                : null;
        },
    },
);
