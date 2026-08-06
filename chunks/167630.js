e.d(s, { A: () => p });
var t = e(477900),
    n = e(582128),
    a = e(834730),
    r = e(939249),
    i = e(435328),
    c = e(427080),
    u = e(515115),
    d = e(988794),
    h = e(375708),
    o = e(800791);
function p(l) {
    let { guildScheduledEvent: s, channel: e, onClose: p } = l,
        m = s.entity_type === d.Ps.EXTERNAL,
        x = n.useCallback((l) => (0, c.GI)(s, p)(l), [s, p]),
        k = (0, u.L)(s, e);
    if (null == k) return null;
    let { IconComponent: C, locationName: N } = k,
        j = (0, t.jsxs)(t.Fragment, {
            children: [
                null != C &&
                    (0, t.jsx)(C, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                        className: o.p,
                        "aria-label": h.intl.string(h.t.gwSn4I),
                    }),
                (0, t.jsx)(a.E, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    className: o.fN,
                    children: m ? (0, i.y)(N, !0) : N,
                }),
            ],
        });
    return (0, t.jsx)("div", {
        className: o.nM,
        children: null != x ? (0, t.jsx)(r.D, { className: m ? o.dC : o.h7, onClick: x, children: j }) : j,
    });
}
