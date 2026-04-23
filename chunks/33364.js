n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    a = n(607399),
    s = n(821609),
    r = n(308528),
    o = n(928658),
    c = n(957283),
    d = n(963009),
    u = n(985018);
function h(e) {
    let { channel: t, user: n } = e,
        h = !0 === n.bot,
        { message: m, isReportable: A, isLoaded: g } = (0, d.R)(t, n.id, h),
        { channelId: _ } = (0, c.N)(),
        p = t.id === _,
        f = !a.Fr && !p,
        E = l.useCallback(() => {
            null != m &&
                (0, o.b8)(m, () => {
                    r.A.closePrivateChannel(t.id, f);
                });
        }, [t.id, m, f]);
    return !A || (null == m && g)
        ? null
        : (0, i.jsx)(s.$, {
              size: "sm",
              variant: "critical-primary",
              disabled: null == m,
              onClick: E,
              text: u.intl.string(u.t.HHZmDn),
          });
}
