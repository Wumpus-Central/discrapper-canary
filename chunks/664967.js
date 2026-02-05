i.d(t, { A: () => u });
var n = i(627968),
    l = i(64700),
    s = i(397927),
    r = i(585510),
    a = i(834409),
    d = i(903093),
    o = i(652215),
    c = i(985018);
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { shouldShowIncidentActions: u, isUnderLockdown: A, incidentData: g } = (0, r.Li)(e.id),
        E = l.useCallback(() => {
            let t = { source: a.Eo.CONTEXT_MENU, alertType: (0, d.$5)(g) };
            (0, s.mMO)(async () => {
                let { default: l } = await i.e("43233").then(i.bind(i, 671576));
                return (i) => (0, n.jsx)(l, { ...i, guildId: e.id, analyticsData: t });
            });
        }, [e.id, g]);
    return e.features.has(o.GuildFeatures.COMMUNITY) && u
        ? (0, n.jsx)(s.Drp, {
              id: "server-lockdown",
              label: A ? c.intl.string(c.t["+tSVi3"]) : c.intl.string(c.t.EPlEdu),
              icon: t ? (A ? s.wUM : s.XAi) : void 0,
              leadingAccessory: t ? { type: "icon", icon: A ? s.wUM : s.XAi } : void 0,
              action: E,
              color: "danger",
          })
        : null;
}
