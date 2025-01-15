t.d(e, {
    Z: function () {
        return c;
    }
});
var i = t(200651),
    l = t(192379),
    a = t(481060),
    r = t(528011),
    o = t(666657),
    u = t(533244),
    d = t(388032);
function c(n) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { shouldShowIncidentActions: c, isUnderLockdown: s, incidentData: g } = (0, r.mI)(n.id),
        I = l.useCallback(() => {
            let e = {
                source: o.Zu.CONTEXT_MENU,
                alertType: (0, u.T1)(g)
            };
            (0, a.openModalLazy)(async () => {
                let { default: l } = await t.e('61536').then(t.bind(t, 664452));
                return (t) =>
                    (0, i.jsx)(l, {
                        ...t,
                        guildId: n.id,
                        analyticsData: e
                    });
            });
        }, [n.id, g]);
    return n.isCommunity() && c
        ? (0, i.jsx)(a.MenuItem, {
              id: 'server-lockdown',
              label: s ? d.intl.string(d.t['+tSVi4']) : d.intl.string(d.t.EPlEdn),
              icon: e ? (s ? a.LockUnlockedIcon : a.LockIcon) : void 0,
              action: I,
              color: 'danger'
          })
        : null;
}
