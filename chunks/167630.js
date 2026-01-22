n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    s = n(397927),
    l = n(435328),
    a = n(427080),
    o = n(515115),
    c = n(988794),
    u = n(888804);
function d(e) {
    let { guildScheduledEvent: t, channel: n, onClose: d } = e,
        h = t.entity_type === c.Ps.EXTERNAL,
        f = i.useCallback((e) => (0, a.GI)(t, d)(e), [t, d]),
        p = (0, o.L)(t, n);
    if (null == p) return null;
    let { IconComponent: g, locationName: m } = p,
        A = (0, r.jsxs)(r.Fragment, {
            children: [
                null != g &&
                    (0, r.jsx)(g, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                        className: u.p,
                    }),
                (0, r.jsx)(s.Text, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    className: u.fN,
                    children: (0, l.l)(m, !0),
                }),
            ],
        });
    return (0, r.jsx)("div", {
        className: u.nM,
        children:
            null != f
                ? (0, r.jsx)(s.DUT, {
                      className: h ? u.dC : u.h7,
                      onClick: f,
                      children: A,
                  })
                : A,
    });
}
