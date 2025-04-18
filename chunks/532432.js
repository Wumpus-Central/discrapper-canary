n.d(t, { Z: () => E }), n(539854), n(388685);
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
    _ = n(388032),
    N = n(316999);
let x = [
    {
        name: 'gif',
        extensions: ['gif']
    }
];
function E(e) {
    let { showRemoveAvatarButton: t, errors: n, onAvatarChange: s, sectionTitle: E, changeAvatarButtonText: j, guildId: C, className: O, disabled: S = !1, isTryItOutFlow: v = !1, forcedDivider: T, withHighlight: I = !1 } = e,
        y = I ? o.gtL : o.zxk,
        A = (0, u.T)({ location: 'AvatarSection' }),
        P = [];
    A && P.push(l.z.RECENT_AVATARS_SETTINGS_PROFILE_PAGE_NEW_BADGE);
    let [R, D] = (0, c.US)(P),
        Z = R === l.z.RECENT_AVATARS_SETTINGS_PROFILE_PAGE_NEW_BADGE,
        w = (0, m._)(),
        { recentAvatarsLimit: k } = (0, d.pC)(w),
        W = i.useCallback(() => {
            D(f.L.TAKE_ACTION), (0, p.$r)(b.pC.AVATAR, C, v, v ? x : void 0);
        }, [C, v, D]);
    return (0, r.jsx)(h.Z, {
        className: O,
        title: E,
        titleIcon: Z ? (0, r.jsx)(g.Z, { className: N.newBadge }) : void 0,
        description: A
            ? _.NW.format(_.t.U4tZfX, {
                  recentAvatarsLimit: k,
                  onClick: W
              })
            : void 0,
        errors: n,
        disabled: S,
        forcedDivider: T,
        children: (0, r.jsxs)('div', {
            className: N.buttonsContainer,
            children: [
                (0, r.jsx)(y, {
                    className: a()({ [N.buttonHighlighted]: I }),
                    size: o.zxk.Sizes.SMALL,
                    onClick: W,
                    children: null != j ? j : _.NW.string(_.t['4OynCA'])
                }),
                t &&
                    (0, r.jsx)(o.zxk, {
                        className: N.removeButton,
                        color: o.zxk.Colors.PRIMARY,
                        look: o.zxk.Looks.LINK,
                        size: o.zxk.Sizes.SMALL,
                        onClick: () => s(null),
                        children: null != C ? _.NW.string(_.t.TDjKDg) : _.NW.string(_.t.twB3f3)
                    })
            ]
        })
    });
}
