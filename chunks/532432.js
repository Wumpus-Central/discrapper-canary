n.d(t, { Z: () => E }), n(653041), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(704215),
    o = n(481060),
    c = n(243778),
    d = n(643879),
    u = n(373230),
    m = n(598989),
    g = n(87478),
    p = n(654904),
    h = n(993413),
    f = n(921944),
    b = n(486324),
    N = n(388032),
    x = n(24085);
let _ = [
    {
        name: 'gif',
        extensions: ['gif']
    }
];
function E(e) {
    let { showRemoveAvatarButton: t, errors: n, onAvatarChange: s, sectionTitle: E, changeAvatarButtonText: j, guildId: O, className: C, disabled: S = !1, isTryItOutFlow: v = !1, forcedDivider: T, withHighlight: I = !1 } = e,
        y = I ? o.gtL : o.zxk,
        A = (0, u.Tq)({ location: 'AvatarSection' }),
        P = [];
    A && P.push(l.z.RECENT_AVATARS_SETTINGS_PROFILE_PAGE_NEW_BADGE);
    let [R, D] = (0, c.US)(P),
        Z = R === l.z.RECENT_AVATARS_SETTINGS_PROFILE_PAGE_NEW_BADGE,
        w = (0, m._)(),
        { recentAvatarsLimit: k } = (0, d.pC)(w),
        W = i.useCallback(() => {
            D(f.L.TAKE_ACTION), (0, p.$r)(b.pC.AVATAR, O, v, v ? _ : void 0);
        }, [O, v, D]);
    return (0, r.jsx)(h.Z, {
        className: C,
        title: E,
        titleIcon: Z ? (0, r.jsx)(g.Z, { className: x.newBadge }) : void 0,
        description: A
            ? N.NW.format(N.t.U4tZfX, {
                  recentAvatarsLimit: k,
                  onClick: W
              })
            : void 0,
        errors: n,
        disabled: S,
        forcedDivider: T,
        children: (0, r.jsxs)('div', {
            className: x.buttonsContainer,
            children: [
                (0, r.jsx)(y, {
                    className: a()({ [x.buttonHighlighted]: I }),
                    size: o.zxk.Sizes.SMALL,
                    onClick: W,
                    children: null != j ? j : N.NW.string(N.t['4OynCA'])
                }),
                t &&
                    (0, r.jsx)(o.zxk, {
                        className: x.removeButton,
                        color: o.zxk.Colors.PRIMARY,
                        look: o.zxk.Looks.LINK,
                        size: o.zxk.Sizes.SMALL,
                        onClick: () => s(null),
                        children: null != O ? N.NW.string(N.t.TDjKDg) : N.NW.string(N.t.twB3f3)
                    })
            ]
        })
    });
}
