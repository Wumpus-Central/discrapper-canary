n.d(t, { E: () => p });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    s = n(755721),
    a = n(481060),
    o = n(768581),
    c = n(723047),
    d = n(570533),
    u = n(388032),
    m = n(294916);
function g(e) {
    let { emoji: t, onRemoveEmoji: n, disabled: i = !1 } = e,
        c = o.ZP.getEmojiURL({
            id: t.id,
            animated: t.animated,
            size: 32
        });
    return (0, r.jsxs)('div', {
        className: l()(m.emojiRow, { [m.disabled]: i }),
        children: [
            (0, r.jsx)('img', {
                className: m.emojiImage,
                src: c,
                alt: t.name
            }),
            (0, r.jsx)(a.Text, {
                color: 'header-primary',
                variant: 'text-md/medium',
                className: m.emojiAlias,
                children: t.name
            }),
            (0, r.jsx)(s.zx, {
                look: s.zx.Looks.BLANK,
                size: s.zx.Sizes.ICON,
                className: m.deleteButton,
                onClick: () => n(t),
                'aria-label': u.intl.string(u.t.dVS92d),
                disabled: i,
                children: (0, r.jsx)(a.XHJ, {
                    size: 'md',
                    color: 'currentColor',
                    className: m.trashIcon
                })
            })
        ]
    });
}
function p(e) {
    let { tierEmojiIds: t, guildId: n, onRemoveEmoji: i } = e,
        l = (0, d.Z)(n),
        s = null != t ? l.filter((e) => t.has(e.id)) : [],
        a = (0, c.mY)();
    return (0, r.jsx)('div', {
        className: m.container,
        children: s.map((e) =>
            (0, r.jsx)(
                g,
                {
                    emoji: e,
                    onRemoveEmoji: () => i(e),
                    disabled: a
                },
                e.id
            )
        )
    });
}
