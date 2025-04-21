n.d(t, { Z: () => x }), n(539854), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(704215),
    o = n(481060),
    c = n(243778),
    d = n(373230),
    u = n(654904),
    m = n(993413),
    g = n(921944),
    p = n(486324),
    h = n(485696),
    f = n(388032),
    b = n(24085);
let _ = [
    {
        name: 'gif',
        extensions: ['gif']
    }
];
function x(e) {
    let { showRemoveAvatarButton: t, errors: n, onAvatarChange: s, sectionTitle: x, changeAvatarButtonText: E, guildId: j, className: C, disabled: O = !1, isTryItOutFlow: S = !1, forcedDivider: v, withHighlight: T = !1 } = e,
        I = T ? o.gtL : o.zxk,
        N = (0, d.T)({ location: 'AvatarSection' }),
        y = [];
    N && y.push(a.z.RECENT_AVATARS_SETTINGS_PROFILE_PAGE_NEW_BADGE);
    let [A, P] = (0, c.US)(y),
        R = A === a.z.RECENT_AVATARS_SETTINGS_PROFILE_PAGE_NEW_BADGE,
        D = r.useCallback(() => {
            P(g.L.TAKE_ACTION), (0, u.$r)(p.pC.AVATAR, j, S, S ? _ : void 0);
        }, [j, S, P]);
    return (0, i.jsx)(m.Z, {
        className: C,
        title: x,
        titleIcon: R
            ? (0, i.jsx)(o.IGR, {
                  text: f.intl.string(f.t.y2b7CA),
                  className: b.newBadge
              })
            : void 0,
        description: N
            ? f.intl.format(f.t.U4tZfX, {
                  recentAvatarsLimit: h.iZ,
                  onClick: D
              })
            : void 0,
        errors: n,
        disabled: O,
        forcedDivider: v,
        children: (0, i.jsxs)('div', {
            className: b.buttonsContainer,
            children: [
                (0, i.jsx)(I, {
                    className: l()({ [b.buttonHighlighted]: T }),
                    size: o.zxk.Sizes.SMALL,
                    onClick: D,
                    children: null != E ? E : f.intl.string(f.t['4OynCA'])
                }),
                t &&
                    (0, i.jsx)(o.zxk, {
                        className: b.removeButton,
                        color: o.zxk.Colors.PRIMARY,
                        look: o.zxk.Looks.LINK,
                        size: o.zxk.Sizes.SMALL,
                        onClick: () => s(null),
                        children: null != j ? f.intl.string(f.t.TDjKDg) : f.intl.string(f.t.twB3f3)
                    })
            ]
        })
    });
}
