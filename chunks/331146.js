n.d(t, { E: () => g });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    s = n(481060),
    a = n(768581),
    o = n(723047),
    c = n(570533),
    u = n(388032),
    d = n(294916);
function m(e) {
    let { emoji: t, onRemoveEmoji: n, disabled: i = !1 } = e,
        o = a.ZP.getEmojiURL({
            id: t.id,
            animated: t.animated,
            size: 32
        });
    return (0, r.jsxs)('div', {
        className: l()(d.emojiRow, { [d.disabled]: i }),
        children: [
            (0, r.jsx)('img', {
                className: d.emojiImage,
                src: o,
                alt: t.name
            }),
            (0, r.jsx)(s.Text, {
                color: 'header-primary',
                variant: 'text-md/medium',
                className: d.emojiAlias,
                children: t.name
            }),
            (0, r.jsx)(s.zxk, {
                look: s.zxk.Looks.BLANK,
                size: s.zxk.Sizes.ICON,
                className: d.deleteButton,
                onClick: () => n(t),
                'aria-label': u.intl.string(u.t.dVS92d),
                disabled: i,
                children: (0, r.jsx)(s.XHJ, {
                    size: 'md',
                    color: 'currentColor',
                    className: d.trashIcon
                })
            })
        ]
    });
}
function g(e) {
    let { tierEmojiIds: t, guildId: n, onRemoveEmoji: i } = e,
        l = (0, c.Z)(n),
        s = null != t ? l.filter((e) => t.has(e.id)) : [],
        a = (0, o.mY)();
    return (0, r.jsx)('div', {
        className: d.container,
        children: s.map((e) =>
            (0, r.jsx)(
                m,
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
