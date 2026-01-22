l.d(i, { default: () => h }), l(896048);
var a = l(627968);
l(64700);
var n = l(284009),
    e = l.n(n),
    r = l(158954),
    s = l(397927),
    c = l(608461),
    d = l(915089),
    u = l(493540),
    o = l(652215),
    p = l(985018);
function h(t) {
    let { transitionState: i, guild: l, onClose: n } = t,
        h = (0, d.GV)(),
        [m, { loading: g, error: x }] = (0, c.A)(u.ms),
        b = async () => {
            e()(null != l, "no guild"), null != (await m(l.id)) && n();
        };
    return (0, a.jsx)(r.Modal, {
        transitionState: i,
        "aria-labelledby": h,
        actions: [
            {
                variant: "critical-primary",
                text: p.intl.string(p.t["R3BPH+"]),
                loading: g,
                onClick: b,
            },
        ],
        title: p.intl.string(p.t.rRpcE1),
        subtitle: p.intl.format(p.t.Oa5P6w, {
            guildName: l.name,
            url: o.X7G.DEVELOPER_PORTAL_TEAMS,
        }),
        onClose: n,
        children:
            null != x
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(s.wx6, {
                              type: "critical",
                              children: x.message,
                          }),
                          (0, a.jsx)(s.hKd, { size: 24 }),
                      ],
                  })
                : null,
    });
}
