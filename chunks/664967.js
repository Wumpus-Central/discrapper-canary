t.d(n, { A: () => g });
var l = t(627968),
    i = t(64700),
    a = t(192308),
    r = t(477782),
    s = t(328162),
    o = t(194261),
    d = t(585510),
    c = t(834409),
    u = t(903093),
    v = t(652215),
    A = t(985018);
function g(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { shouldShowIncidentActions: g, isUnderLockdown: h, incidentData: p } = (0, d.Li)(e.id),
        y = i.useCallback(() => {
            let n = { source: c.Eo.CONTEXT_MENU, alertType: (0, u.$5)(p) };
            (0, a.openModalLazy)(async () => {
                let { default: i } = await t.e("65614").then(t.bind(t, 671576));
                return (t) => (0, l.jsx)(i, { ...t, guildId: e.id, analyticsData: n });
            });
        }, [e.id, p]);
    return e.features.has(v.GuildFeatures.COMMUNITY) && g
        ? (0, l.jsx)(r.Dr, {
              id: "server-lockdown",
              label: h ? A.intl.string(A.t["+tSVi3"]) : A.intl.string(A.t.EPlEdu),
              icon: n ? (h ? s.w : o.X) : void 0,
              leadingAccessory: n ? { type: "icon", icon: h ? s.w : o.X } : void 0,
              action: y,
              color: "danger",
          })
        : null;
}
