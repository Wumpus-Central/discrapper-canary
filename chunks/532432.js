(n.d(t, { Z: () => O }), n(539854), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(704215),
    o = n(755721),
    c = n(481060),
    d = n(906732),
    u = n(243778),
    m = n(373230),
    p = n(654904),
    g = n(993413),
    h = n(921944),
    f = n(486324),
    b = n(485696),
    x = n(388032),
    _ = n(24085);
let j = [
    {
        name: 'gif',
        extensions: ['gif']
    }
];
function O(e) {
    let { showRemoveAvatarButton: t, errors: n, onAvatarChange: s, sectionTitle: O, changeAvatarButtonText: E, guildId: C, className: v, disabled: S = !1, isTryItOutFlow: T = !1, forcedDivider: N, withHighlight: I = !1 } = e,
        { newestAnalyticsLocation: y } = (0, d.ZP)(),
        A = I ? c.gtL : o.zx,
        P = (0, m.T)({ location: 'AvatarSection' }),
        R = [];
    P && R.push(l.z.RECENT_AVATARS_SETTINGS_PROFILE_PAGE_NEW_BADGE);
    let [D, Z] = (0, u.US)(R),
        w = D === l.z.RECENT_AVATARS_SETTINGS_PROFILE_PAGE_NEW_BADGE,
        k = r.useCallback(() => {
            (Z(h.L.TAKE_ACTION),
                (0, p.$r)({
                    uploadType: f.pC.AVATAR,
                    analyticsSource: y,
                    filters: T ? j : void 0,
                    guildId: C,
                    isTryItOutFlow: T
                }));
        }, [C, y, T, Z]);
    return (0, i.jsx)(g.Z, {
        className: v,
        title: O,
        titleIcon: w
            ? (0, i.jsx)(c.IGR, {
                  text: x.intl.string(x.t.y2b7CA),
                  className: _.newBadge
              })
            : void 0,
        description: P
            ? x.intl.format(x.t.U4tZfX, {
                  recentAvatarsLimit: b.iZ,
                  onClick: k
              })
            : void 0,
        errors: n,
        disabled: S,
        forcedDivider: N,
        children: (0, i.jsxs)('div', {
            className: _.buttonsContainer,
            children: [
                (0, i.jsx)(A, {
                    className: a()({ [_.buttonHighlighted]: I }),
                    size: o.zx.Sizes.SMALL,
                    onClick: k,
                    children: null != E ? E : x.intl.string(x.t['4OynCA'])
                }),
                t &&
                    (0, i.jsx)('div', {
                        'data-button-hoisted-classname-wrapper': !0,
                        className: _.removeButton,
                        children: (0, i.jsx)(c.zxk, {
                            variant: 'secondary',
                            size: 'sm',
                            text: null != C ? x.intl.string(x.t.TDjKDg) : x.intl.string(x.t.twB3f3),
                            onClick: () => s(null)
                        })
                    })
            ]
        })
    });
}
