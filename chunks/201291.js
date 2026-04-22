l.d(i, { default: () => m });
var a = l(627968);
l(64700);
var n = l(284009),
    e = l.n(n),
    r = l(189213),
    s = l(683071),
    c = l(696986),
    u = l(608461),
    d = l(915089),
    o = l(493540),
    p = l(652215),
    h = l(985018);
function m(t) {
    let { transitionState: i, guild: l, onClose: n } = t,
        m = (0, d.GV)(),
        [g, { loading: b, error: k }] = (0, u.A)(o.ms),
        w = async () => {
            e()(null != l, "no guild"), null != (await g(l.id)) && n();
        };
    return (0, a.jsx)(r.Modal, {
        transitionState: i,
        "aria-labelledby": m,
        actions: [{ variant: "critical-primary", text: h.intl.string(h.t["R3BPH+"]), loading: b, onClick: w }],
        title: h.intl.string(h.t.rRpcE1),
        subtitle: h.intl.format(h.t.Oa5P6w, { guildName: l.name, url: p.X7G.DEVELOPER_PORTAL_TEAMS }),
        onClose: n,
        children:
            null != k
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(s.w, { type: "critical", children: k.message }),
                          (0, a.jsx)(c.h, { size: 24 }),
                      ],
                  })
                : null,
    });
}
