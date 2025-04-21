n.d(t, { Z: () => j }), n(539854), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(704215),
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
    x = n(24085);
let E = [
    {
        name: 'gif',
        extensions: ['gif']
    }
];
function j(e) {
    let { showRemoveAvatarButton: t, errors: n, onAvatarChange: s, sectionTitle: j, changeAvatarButtonText: C, guildId: O, className: S, disabled: v = !1, isTryItOutFlow: T = !1, forcedDivider: I, withHighlight: N = !1 } = e,
        y = N ? o.gtL : o.zxk,
        A = (0, u.T)({ location: 'AvatarSection' }),
        P = [];
    A && P.push(a.z.RECENT_AVATARS_SETTINGS_PROFILE_PAGE_NEW_BADGE);
    let [R, D] = (0, c.US)(P),
        Z = R === a.z.RECENT_AVATARS_SETTINGS_PROFILE_PAGE_NEW_BADGE,
        w = (0, m._)(),
        { recentAvatarsLimit: k } = (0, d.pC)(w),
        L = r.useCallback(() => {
            D(f.L.TAKE_ACTION), (0, p.$r)(b.pC.AVATAR, O, T, T ? E : void 0);
        }, [O, T, D]);
    return (0, i.jsx)(h.Z, {
        className: S,
        title: j,
        titleIcon: Z ? (0, i.jsx)(g.Z, { className: x.newBadge }) : void 0,
        description: A
            ? _.intl.format(_.t.U4tZfX, {
                  recentAvatarsLimit: k,
                  onClick: L
              })
            : void 0,
        errors: n,
        disabled: v,
        forcedDivider: I,
        children: (0, i.jsxs)('div', {
            className: x.buttonsContainer,
            children: [
                (0, i.jsx)(y, {
                    className: l()({ [x.buttonHighlighted]: N }),
                    size: o.zxk.Sizes.SMALL,
                    onClick: L,
                    children: null != C ? C : _.intl.string(_.t['4OynCA'])
                }),
                t &&
                    (0, i.jsx)(o.zxk, {
                        className: x.removeButton,
                        color: o.zxk.Colors.PRIMARY,
                        look: o.zxk.Looks.LINK,
                        size: o.zxk.Sizes.SMALL,
                        onClick: () => s(null),
                        children: null != O ? _.intl.string(_.t.TDjKDg) : _.intl.string(_.t.twB3f3)
                    })
            ]
        })
    });
}
