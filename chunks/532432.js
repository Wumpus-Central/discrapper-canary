n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(481060),
    a = n(654904),
    o = n(993413),
    c = n(486324),
    d = n(388032),
    u = n(780132);
let m = [
    {
        name: 'gif',
        extensions: ['gif']
    }
];
function h(e) {
    let { showRemoveAvatarButton: t, errors: n, onAvatarChange: s, sectionTitle: h, changeAvatarButtonText: g, guildId: x, className: _, disabled: p = !1, isTryItOutFlow: E = !1, forcedDivider: C, withHighlight: f = !1 } = e,
        T = f ? l.gtL : l.zxk;
    return (0, i.jsx)(o.Z, {
        className: _,
        title: h,
        errors: n,
        disabled: p,
        forcedDivider: C,
        children: (0, i.jsxs)('div', {
            className: u.buttonsContainer,
            children: [
                (0, i.jsx)(T, {
                    className: r()({ [u.buttonHighlighted]: f }),
                    size: l.zxk.Sizes.SMALL,
                    onClick: () => (0, a.$r)(c.pC.AVATAR, x, E, E ? m : void 0),
                    children: null != g ? g : d.intl.string(d.t['4OynCA'])
                }),
                t &&
                    (0, i.jsx)(l.zxk, {
                        className: u.removeButton,
                        color: l.zxk.Colors.PRIMARY,
                        look: l.zxk.Looks.LINK,
                        size: l.zxk.Sizes.SMALL,
                        onClick: () => s(null),
                        children: null != x ? d.intl.string(d.t.TDjKDg) : d.intl.string(d.t.twB3f3)
                    })
            ]
        })
    });
}
