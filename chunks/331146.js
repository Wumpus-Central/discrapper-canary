n.d(t, { E: () => g });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(481060),
    l = n(768581),
    o = n(723047),
    c = n(570533),
    d = n(388032),
    u = n(294916);
function m(e) {
    let { emoji: t, onRemoveEmoji: n, disabled: i = !1 } = e,
        o = l.ZP.getEmojiURL({
            id: t.id,
            animated: t.animated,
            size: 32
        });
    return (0, r.jsxs)('div', {
        className: s()(u.emojiRow, { [u.disabled]: i }),
        children: [
            (0, r.jsx)('img', {
                className: u.emojiImage,
                src: o,
                alt: t.name
            }),
            (0, r.jsx)(a.Text, {
                color: 'header-primary',
                variant: 'text-md/medium',
                className: u.emojiAlias,
                children: t.name
            }),
            (0, r.jsx)(a.zxk, {
                look: a.zxk.Looks.BLANK,
                size: a.zxk.Sizes.ICON,
                className: u.deleteButton,
                onClick: () => n(t),
                'aria-label': d.NW.string(d.t.dVS92d),
                disabled: i,
                children: (0, r.jsx)(a.XHJ, {
                    size: 'md',
                    color: 'currentColor',
                    className: u.trashIcon
                })
            })
        ]
    });
}
function g(e) {
    let { tierEmojiIds: t, guildId: n, onRemoveEmoji: i } = e,
        s = (0, c.Z)(n),
        a = null != t ? s.filter((e) => t.has(e.id)) : [],
        l = (0, o.mY)();
    return (0, r.jsx)('div', {
        className: u.container,
        children: a.map((e) =>
            (0, r.jsx)(
                m,
                {
                    emoji: e,
                    onRemoveEmoji: () => i(e),
                    disabled: l
                },
                e.id
            )
        )
    });
}
