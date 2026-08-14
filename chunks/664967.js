i.d(n, { A: () => v });
var l = i(477900),
    t = i(582128),
    o = i(192308),
    a = i(477782),
    r = i(328162),
    c = i(194261),
    s = i(585510),
    d = i(834409),
    u = i(903093),
    p = i(652215),
    y = i(375708);
function v(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { shouldShowIncidentActions: v, isUnderLockdown: g, incidentData: b } = (0, s.Li)(e.id),
        A = t.useCallback(() => {
            let n = { source: d.Eo.CONTEXT_MENU, alertType: (0, u.$5)(b) };
            (0, o.openModalLazy)(async () => {
                let { default: t } = await Promise.all([
                    i.e("454546"),
                    i.e("400102"),
                    i.e("940258"),
                    i.e("273669"),
                    i.e("346313"),
                    i.e("343233"),
                ]).then(i.bind(i, 671576));
                return (i) => (0, l.jsx)(t, { ...i, guildId: e.id, analyticsData: n });
            });
        }, [e.id, b]);
    return e.features.has(p.GuildFeatures.COMMUNITY) && v
        ? (0, l.jsx)(a.Dr, {
              id: "server-lockdown",
              label: g ? y.intl.string(y.t["+tSVi3"]) : y.intl.string(y.t.EPlEdu),
              icon: n ? (g ? r.w : c.X) : void 0,
              leadingAccessory: n ? { type: "icon", icon: g ? r.w : c.X } : void 0,
              action: A,
              color: "danger",
          })
        : null;
}
