n.d(t, {
    E: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(481060),
    s = n(768581),
    o = n(723047),
    c = n(570533),
    d = n(388032),
    u = n(642250);
function m(e) {
    let { emoji: t, onRemoveEmoji: n, disabled: r = !1 } = e,
        o = s.ZP.getEmojiURL({
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
            (0, i.jsx)(a.Text, {
                color: 'header-primary',
                variant: 'text-md/medium',
                className: u.emojiAlias,
                children: t.name
            }),
            (0, i.jsx)(a.Button, {
                look: a.Button.Looks.BLANK,
                size: a.Button.Sizes.ICON,
                className: u.deleteButton,
                onClick: () => n(t),
                'aria-label': d.intl.string(d.t.dVS92d),
                disabled: r,
                children: (0, i.jsx)(a.TrashIcon, {
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
        a = null != t ? l.filter((e) => t.has(e.id)) : [],
        s = (0, o.mY)();
    return (0, i.jsx)('div', {
        className: u.container,
        children: a.map((e) =>
            (0, i.jsx)(
                m,
                {
                    emoji: e,
                    onRemoveEmoji: () => r(e),
                    disabled: s
                },
                e.id
            )
        )
    });
}
