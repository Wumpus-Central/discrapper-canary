n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    s = n(607399),
    a = n(397927),
    r = n(308528),
    o = n(928658),
    c = n(957283),
    d = n(963009),
    u = n(985018);
function h(e) {
    let { channel: t, user: n } = e,
        h = !0 === n.bot,
        { message: m, isReportable: A, isLoaded: g } = (0, d.R)(t, n.id, h),
        { channelId: p } = (0, c.N)(),
        f = t.id === p,
        _ = !s.Fr && !f,
        E = l.useCallback(() => {
            null != m &&
                (0, o.b8)(m, () => {
                    r.A.closePrivateChannel(t.id, _);
                });
        }, [t.id, m, _]);
    return !A || (null == m && g)
        ? null
        : (0, i.jsx)(a.Button, {
              size: "sm",
              variant: "critical-primary",
              disabled: null == m,
              onClick: E,
              text: u.intl.string(u.t.HHZmDn),
          });
}
