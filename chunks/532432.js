n.d(t, { Z: () => m });
var i = n(200651);
n(192379);
var s = n(120356),
    l = n.n(s),
    r = n(481060),
    a = n(654904),
    o = n(993413),
    c = n(486324),
    d = n(388032),
    u = n(780132);
let h = [
    {
        name: 'gif',
        extensions: ['gif']
    }
];
function m(e) {
    let { showRemoveAvatarButton: t, errors: n, onAvatarChange: s, sectionTitle: m, changeAvatarButtonText: g, guildId: x, className: _, disabled: p = !1, isTryItOutFlow: E = !1, forcedDivider: C, withHighlight: N = !1 } = e,
        f = N ? r.gtL : r.zxk;
    return (0, i.jsx)(o.Z, {
        className: _,
        title: m,
        errors: n,
        disabled: p,
        forcedDivider: C,
        children: (0, i.jsxs)('div', {
            className: u.buttonsContainer,
            children: [
                (0, i.jsx)(f, {
                    className: l()({ [u.buttonHighlighted]: N }),
                    size: r.zxk.Sizes.SMALL,
                    onClick: () => (0, a.$r)(c.pC.AVATAR, x, E, E ? h : void 0),
                    children: null != g ? g : d.intl.string(d.t['4OynCA'])
                }),
                t &&
                    (0, i.jsx)(r.zxk, {
                        className: u.removeButton,
                        color: r.zxk.Colors.PRIMARY,
                        look: r.zxk.Looks.LINK,
                        size: r.zxk.Sizes.SMALL,
                        onClick: () => s(null),
                        children: null != x ? d.intl.string(d.t.TDjKDg) : d.intl.string(d.t.twB3f3)
                    })
            ]
        })
    });
}
