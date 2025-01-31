t.d(n, { Z: () => u });
var i = t(200651),
    l = t(192379),
    a = t(481060),
    r = t(528011),
    d = t(666657),
    s = t(533244),
    o = t(388032);
function u(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { shouldShowIncidentActions: u, isUnderLockdown: c, incidentData: g } = (0, r.mI)(e.id),
        h = l.useCallback(() => {
            let n = {
                source: d.Zu.CONTEXT_MENU,
                alertType: (0, s.T1)(g)
            };
            (0, a.ZDy)(async () => {
                let { default: l } = await t.e('61536').then(t.bind(t, 664452));
                return (t) =>
                    (0, i.jsx)(l, {
                        ...t,
                        guildId: e.id,
                        analyticsData: n
                    });
            });
        }, [e.id, g]);
    return e.isCommunity() && u
        ? (0, i.jsx)(a.sNh, {
              id: 'server-lockdown',
              label: c ? o.intl.string(o.t['+tSVi4']) : o.intl.string(o.t.EPlEdn),
              icon: n ? (c ? a.d$P : a.mBM) : void 0,
              action: h,
              color: 'danger'
          })
        : null;
}
