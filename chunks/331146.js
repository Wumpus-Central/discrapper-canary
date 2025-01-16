n.d(t, {
    E: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    s = n(481060),
    a = n(768581),
    o = n(723047),
    c = n(570533),
    d = n(388032),
    u = n(642250);
function m(e) {
    let { emoji: t, onRemoveEmoji: n, disabled: r = !1 } = e,
        o = a.ZP.getEmojiURL({
            id: t.id,
            animated: t.animated,
            size: 32
        });
    return (0, i.jsxs)('div', {
        className: l()(u.emojiRow, { [u.disabled]: r }),
        children: [
            (0, i.jsx)('img', {
                className: u.emojiImage,
                src: o,
                alt: t.name
            }),
            (0, i.jsx)(s.Text, {
                color: 'header-primary',
                variant: 'text-md/medium',
                className: u.emojiAlias,
                children: t.name
            }),
            (0, i.jsx)(s.Button, {
                look: s.Button.Looks.BLANK,
                size: s.Button.Sizes.ICON,
                className: u.deleteButton,
                onClick: () => n(t),
                'aria-label': d.intl.string(d.t.dVS92d),
                disabled: r,
                children: (0, i.jsx)(s.TrashIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: u.trashIcon
                })
            })
        ]
    });
}
function h(e) {
    let { tierEmojiIds: t, guildId: n, onRemoveEmoji: r } = e,
        l = (0, c.Z)(n),
        s = null != t ? l.filter((e) => t.has(e.id)) : [],
        a = (0, o.mY)();
    return (0, i.jsx)('div', {
        className: u.container,
        children: s.map((e) =>
            (0, i.jsx)(
                m,
                {
                    emoji: e,
                    onRemoveEmoji: () => r(e),
                    disabled: a
                },
                e.id
            )
        )
    });
}
