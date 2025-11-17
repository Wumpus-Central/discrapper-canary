n.d(t, { E: () => m });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    s = n(768581),
    o = n(723047),
    c = n(570533),
    d = n(388032),
    u = n(562337);
function g(e) {
    let { emoji: t, onRemoveEmoji: n, disabled: i = !1 } = e,
        o = s.ZP.getEmojiURL({
            id: t.id,
            animated: t.animated,
            size: 32,
        });
    return (0, r.jsxs)("div", {
        className: l()(u.emojiRow, { [u.disabled]: i }),
        children: [
            (0, r.jsx)("img", {
                className: u.emojiImage,
                src: o,
                alt: t.name,
            }),
            (0, r.jsx)(a.Text, {
                color: "header-primary",
                variant: "text-md/medium",
                className: u.emojiAlias,
                children: t.name,
            }),
            (0, r.jsx)("div", {
                className: u.deleteButton,
                children: (0, r.jsx)(a.hU, {
                    variant: "secondary",
                    icon: a.XHJ,
                    onClick: () => n(t),
                    "aria-label": d.intl.string(d.t.dVS92c),
                    disabled: i,
                }),
            }),
        ],
    });
}
function m(e) {
    let { tierEmojiIds: t, guildId: n, onRemoveEmoji: i } = e,
        l = (0, c.Z)(n),
        a = null != t ? l.filter((e) => t.has(e.id)) : [],
        s = (0, o.mY)();
    return (0, r.jsx)("div", {
        className: u.container,
        children: a.map((e) =>
            (0, r.jsx)(
                g,
                {
                    emoji: e,
                    onRemoveEmoji: () => i(e),
                    disabled: s,
                },
                e.id,
            ),
        ),
    });
}
