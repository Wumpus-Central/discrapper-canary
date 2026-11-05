var l = i(477900),
    o = i(582128),
    c = i(192308),
    t = i(477782),
    a = i(328162),
    r = i(194261),
    d = i(585510),
    s = i(834409),
    u = i(903093),
    v = i(652215),
    y = i(792996);
i.d(
    n,
    {},
    {
        A: function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                { shouldShowIncidentActions: g, isUnderLockdown: k, incidentData: p } = (0, d.Li)(e.id),
                b = o.useCallback(() => {
                    let n = { source: s.Eo.CONTEXT_MENU, alertType: (0, u.$5)(p) };
                    (0, c.mM)(async () => {
                        let { default: o } = await Promise.all([
                            i.e(231541),
                            i.e(660608),
                            i.e(940258),
                            i.e(710727),
                            i.e(346313),
                            i.e(343233),
                        ]).then(i.bind(i, 671576));
                        return (i) => (0, l.jsx)(o, { ...i, guildId: e.id, analyticsData: n });
                    });
                }, [e.id, p]);
            return e.features.has(v.GuildFeatures.COMMUNITY) && g
                ? (0, l.jsx)(t.Dr, {
                      id: "server-lockdown",
                      label: k ? y.intl.string(y.t["+tSVi3"]) : y.intl.string(y.t.EPlEdu),
                      icon: n ? (k ? a.LockUnlockedIcon : r.LockIcon) : void 0,
                      leadingAccessory: n ? { type: "icon", icon: k ? a.LockUnlockedIcon : r.LockIcon } : void 0,
                      action: b,
                      color: "danger",
                  })
                : null;
        },
    },
);
