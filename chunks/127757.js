"use strict";
n.d(t, { d: () => g });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(397927),
    a = n(486020),
    o = n(11351),
    d = n(320137),
    c = n(985018),
    u = n(156508);
function m(e) {
    let { emoji: t, onRemoveEmoji: n, disabled: s = !1 } = e,
        o = a.Ay.getEmojiURL({ id: t.id, animated: t.animated, size: 32 });
    return (0, i.jsxs)("div", {
        className: l()(u.nI, { [u.r9]: s }),
        children: [
            (0, i.jsx)("img", { className: u.mp, src: o, alt: t.name }),
            (0, i.jsx)(r.Text, { color: "text-strong", variant: "text-md/medium", className: u.JN, children: t.name }),
            (0, i.jsx)("div", {
                className: u.G5,
                children: (0, i.jsx)(r.K0, {
                    variant: "secondary",
                    icon: r.ucK,
                    onClick: () => n(t),
                    "aria-label": c.intl.string(c.t.dVS92c),
                    disabled: s,
                }),
            }),
        ],
    });
}
function g(e) {
    let { tierEmojiIds: t, guildId: n, onRemoveEmoji: s } = e,
        l = (0, d.A)(n),
        r = null != t ? l.filter((e) => t.has(e.id)) : [],
        a = (0, o.gN)();
    return (0, i.jsx)("div", {
        className: u.kL,
        children: r.map((e) => (0, i.jsx)(m, { emoji: e, onRemoveEmoji: () => s(e), disabled: a }, e.id)),
    });
}
