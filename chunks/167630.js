"use strict";
i.d(t, { A: () => p });
var n = i(627968),
    r = i(64700),
    l = i(834730),
    a = i(939249),
    s = i(435328),
    o = i(427080),
    d = i(515115),
    c = i(988794),
    u = i(985018),
    _ = i(904015);
function p(e) {
    let { guildScheduledEvent: t, channel: i, onClose: p } = e,
        h = t.entity_type === c.Ps.EXTERNAL,
        f = r.useCallback((e) => (0, o.GI)(t, p)(e), [t, p]),
        g = (0, d.L)(t, i);
    if (null == g) return null;
    let { IconComponent: m, locationName: b } = g,
        v = (0, n.jsxs)(n.Fragment, {
            children: [
                null != m &&
                    (0, n.jsx)(m, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                        className: _.p,
                        "aria-label": u.intl.string(u.t.gwSn4I),
                    }),
                (0, n.jsx)(l.E, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    className: _.fN,
                    children: (0, s.l)(b, !0),
                }),
            ],
        });
    return (0, n.jsx)("div", {
        className: _.nM,
        children: null != f ? (0, n.jsx)(a.D, { className: h ? _.dC : _.h7, onClick: f, children: v }) : v,
    });
}
