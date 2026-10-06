a.d(i, { default: () => m });
var l = a(477900);
a(582128);
var n = a(284009),
    e = a.n(n),
    s = a(189213),
    r = a(683071),
    c = a(696986),
    u = a(608461),
    d = a(915089),
    o = a(493540),
    p = a(652215),
    h = a(375708);
function m(t) {
    let { transitionState: i, guild: a, onClose: n } = t,
        m = (0, d.GV)(),
        [g, { loading: b, error: k }] = (0, u.A)(o.ms);
    async function w() {
        (e()(null != a, "no guild"), null != (await g(a.id)) && n());
    }
    return (0, l.jsx)(s.a, {
        transitionState: i,
        "aria-labelledby": m,
        actions: [{ variant: "critical-primary", text: h.intl.string(h.t["R3BPH+"]), loading: b, onClick: w }],
        title: h.intl.string(h.t.rRpcE1),
        subtitle: h.intl.format(h.t.Oa5P6w, { guildName: a.name, url: p.X7G.DEVELOPER_PORTAL_TEAMS }),
        onClose: n,
        children:
            null != k
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(r.w, { type: "critical", message: k.message, role: "alert" }),
                          (0, l.jsx)(c.h, { size: 24 }),
                      ],
                  })
                : null,
    });
}
