n.d(i, { default: () => m });
var l = n(627968);
n(64700);
var a = n(284009),
    e = n.n(a),
    r = n(189213),
    s = n(683071),
    c = n(696986),
    u = n(608461),
    d = n(915089),
    o = n(493540),
    p = n(652215),
    h = n(375708);
function m(t) {
    let { transitionState: i, guild: n, onClose: a } = t,
        m = (0, d.GV)(),
        [g, { loading: b, error: k }] = (0, u.A)(o.ms);
    async function w() {
        e()(null != n, "no guild"), null != (await g(n.id)) && a();
    }
    return (0, l.jsx)(r.Modal, {
        transitionState: i,
        "aria-labelledby": m,
        actions: [{ variant: "critical-primary", text: h.intl.string(h.t["R3BPH+"]), loading: b, onClick: w }],
        title: h.intl.string(h.t.rRpcE1),
        subtitle: h.intl.format(h.t.Oa5P6w, { guildName: n.name, url: p.X7G.DEVELOPER_PORTAL_TEAMS }),
        onClose: a,
        children:
            null != k
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(s.w, { type: "critical", children: k.message }),
                          (0, l.jsx)(c.h, { size: 24 }),
                      ],
                  })
                : null,
    });
}
