e.d(s, { A: () => p });
var n = e(477900),
    t = e(582128),
    a = e(834730),
    r = e(939249),
    i = e(435328),
    c = e(427080),
    u = e(515115),
    d = e(988794),
    h = e(105292),
    o = e(32374);
function p(l) {
    let { guildScheduledEvent: s, channel: e, onClose: p } = l,
        m = s.entity_type === d.Ps.EXTERNAL,
        k = t.useCallback((l) => (0, c.GI)(s, p)(l), [s, p]),
        x = (0, u.L)(s, e);
    if (null == x) return null;
    let { IconComponent: C, locationName: N } = x,
        b = (0, n.jsxs)(n.Fragment, {
            children: [
                null != C &&
                    (0, n.jsx)(C, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                        className: o.p,
                        "aria-label": h.intl.string(h.t.gwSn4I),
                    }),
                (0, n.jsx)(a.E, {
                    color: "text-default",
                    variant: "body-sm/normal",
                    className: o.fN,
                    children: m ? (0, i.y)(N, !0) : N,
                }),
            ],
        });
    return (0, n.jsx)("div", {
        className: o.nM,
        children: null != k ? (0, n.jsx)(r.D, { className: m ? o.dC : o.h7, onClick: k, children: b }) : b,
    });
}
