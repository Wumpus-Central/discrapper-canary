n.d(t, { d: () => g });
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(397927),
    a = n(486020),
    c = n(11351),
    o = n(320137),
    d = n(985018),
    u = n(86045);
function f(e) {
    let { emoji: t, onRemoveEmoji: n, disabled: i = !1 } = e,
        c = a.Ay.getEmojiURL({
            id: t.id,
            animated: t.animated,
            size: 32,
        });
    return (0, r.jsxs)("div", {
        className: l()(u.nI, { [u.r9]: i }),
        children: [
            (0, r.jsx)("img", {
                className: u.mp,
                src: c,
                alt: t.name,
            }),
            (0, r.jsx)(s.Text, {
                color: "text-strong",
                variant: "text-md/medium",
                className: u.JN,
                children: t.name,
            }),
            (0, r.jsx)("div", {
                className: u.G5,
                children: (0, r.jsx)(s.K0, {
                    variant: "secondary",
                    icon: s.ucK,
                    onClick: () => n(t),
                    "aria-label": d.intl.string(d.t.dVS92c),
                    disabled: i,
                }),
            }),
        ],
    });
}
function g(e) {
    let { tierEmojiIds: t, guildId: n, onRemoveEmoji: i } = e,
        l = (0, o.A)(n),
        s = null != t ? l.filter((e) => t.has(e.id)) : [],
        a = (0, c.gN)();
    return (0, r.jsx)("div", {
        className: u.kL,
        children: s.map((e) =>
            (0, r.jsx)(
                f,
                {
                    emoji: e,
                    onRemoveEmoji: () => i(e),
                    disabled: a,
                },
                e.id,
            ),
        ),
    });
}
