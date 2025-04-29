n.d(t, { Z: () => E }), n(539854), n(388685);
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(704215),
    o = n(481060),
    c = n(906732),
    d = n(243778),
    u = n(373230),
    m = n(654904),
    p = n(993413),
    g = n(921944),
    h = n(486324),
    f = n(485696),
    b = n(388032),
    _ = n(24085);
let x = [
    {
        name: 'gif',
        extensions: ['gif']
    }
];
function E(e) {
    let { showRemoveAvatarButton: t, errors: n, onAvatarChange: s, sectionTitle: E, changeAvatarButtonText: j, guildId: C, className: O, disabled: S = !1, isTryItOutFlow: v = !1, forcedDivider: T, withHighlight: N = !1 } = e,
        { newestAnalyticsLocation: I } = (0, c.ZP)(),
        y = N ? o.gtL : o.zxk,
        A = (0, u.T)({ location: 'AvatarSection' }),
        P = [];
    A && P.push(a.z.RECENT_AVATARS_SETTINGS_PROFILE_PAGE_NEW_BADGE);
    let [R, D] = (0, d.US)(P),
        Z = R === a.z.RECENT_AVATARS_SETTINGS_PROFILE_PAGE_NEW_BADGE,
        w = r.useCallback(() => {
            D(g.L.TAKE_ACTION),
                (0, m.$r)({
                    uploadType: h.pC.AVATAR,
                    analyticsSource: I,
                    filters: v ? x : void 0,
                    guildId: C,
                    isTryItOutFlow: v
                });
        }, [C, I, v, D]);
    return (0, i.jsx)(p.Z, {
        className: O,
        title: E,
        titleIcon: Z
            ? (0, i.jsx)(o.IGR, {
                  text: b.intl.string(b.t.y2b7CA),
                  className: _.newBadge
              })
            : void 0,
        description: A
            ? b.intl.format(b.t.U4tZfX, {
                  recentAvatarsLimit: f.iZ,
                  onClick: w
              })
            : void 0,
        errors: n,
        disabled: S,
        forcedDivider: T,
        children: (0, i.jsxs)('div', {
            className: _.buttonsContainer,
            children: [
                (0, i.jsx)(y, {
                    className: l()({ [_.buttonHighlighted]: N }),
                    size: o.zxk.Sizes.SMALL,
                    onClick: w,
                    children: null != j ? j : b.intl.string(b.t['4OynCA'])
                }),
                t &&
                    (0, i.jsx)(o.zxk, {
                        className: _.removeButton,
                        color: o.zxk.Colors.PRIMARY,
                        look: o.zxk.Looks.LINK,
                        size: o.zxk.Sizes.SMALL,
                        onClick: () => s(null),
                        children: null != C ? b.intl.string(b.t.TDjKDg) : b.intl.string(b.t.twB3f3)
                    })
            ]
        })
    });
}
