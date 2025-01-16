n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    a = n(481060),
    l = n(654904),
    o = n(993413),
    c = n(486324),
    d = n(388032),
    u = n(881483);
let m = [
    {
        name: 'gif',
        extensions: ['gif']
    }
];
function g(e) {
    let { showRemoveAvatarButton: t, errors: n, onAvatarChange: r, sectionTitle: g, changeAvatarButtonText: h, guildId: p, className: x, disabled: f = !1, isTryItOutFlow: _ = !1, forcedDivider: E, withHighlight: C = !1 } = e,
        T = C ? a.ShinyButton : a.Button;
    return (0, i.jsx)(o.Z, {
        className: x,
        title: g,
        errors: n,
        disabled: f,
        forcedDivider: E,
        children: (0, i.jsxs)('div', {
            className: u.buttonsContainer,
            children: [
                (0, i.jsx)(T, {
                    className: s()({ [u.buttonHighlighted]: C }),
                    size: a.Button.Sizes.SMALL,
                    onClick: () => (0, l.$r)(c.pC.AVATAR, p, _, _ ? m : void 0),
                    children: null != h ? h : d.intl.string(d.t['4OynCA'])
                }),
                t &&
                    (0, i.jsx)(a.Button, {
                        className: u.removeButton,
                        color: a.Button.Colors.PRIMARY,
                        look: a.Button.Looks.LINK,
                        size: a.Button.Sizes.SMALL,
                        onClick: () => r(null),
                        children: null != p ? d.intl.string(d.t.TDjKDg) : d.intl.string(d.t.twB3f3)
                    })
            ]
        })
    });
}
