n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(780384),
    o = n(481060),
    c = n(410030),
    d = n(686546),
    u = n(372769),
    m = n(134432),
    h = n(768581),
    g = n(624138),
    x = n(388032),
    p = n(965624),
    f = n(129512),
    C = n(330065);
let v = [16, 16, 14, 14, 12, 10, 8];
t.Z = function (e) {
    var t, n;
    let { guild: l, disabled: _, small: I, loading: N = !1, description: T, memberCount: j, presenceCount: b, className: S } = e,
        E = (0, c.ZP)(),
        [R, y] = r.useState(!1);
    if (null == l || N)
        return (0, i.jsx)('div', {
            className: a()(S, p.card, p.cardPlaceholder, {
                [p.cardSmall]: I,
                [p.cardDisabled]: _
            })
        });
    let { name: A } = l,
        Z =
            null != l.discoverySplash && /^data:/.test(l.discoverySplash)
                ? l.discoverySplash
                : h.ZP.getGuildDiscoverySplashURL({
                      id: l.id,
                      splash: l.discoverySplash,
                      size: 240 * (0, m.x_)()
                  }),
        L = (0, s.wj)(E) ? f : C,
        D =
            null !==
                (t = h.ZP.getGuildIconURL({
                    id: l.id,
                    icon: l.icon,
                    size: 40
                })) && void 0 !== t
                ? t
                : void 0,
        O = null != l.description ? l.description : T,
        P = null != j ? j : null == l ? void 0 : l.memberCount,
        k = null != b ? b : null == l ? void 0 : l.presenceCount,
        M = null;
    if (null != D)
        M = (0, i.jsx)('img', {
            src: D,
            alt: '',
            className: p.avatar
        });
    else {
        let e = (0, g.Zg)(l.name);
        M = (0, i.jsx)('div', {
            className: p.defaultIcon,
            children: (0, i.jsx)(o.Text, {
                className: p.acronym,
                style: { fontSize: null !== (n = v[e.length]) && void 0 !== n ? n : v[v.length - 1] },
                variant: 'text-sm/normal',
                children: e
            })
        });
    }
    return (0, i.jsxs)('div', {
        className: a()(S, p.card, {
            [p.cardSmall]: I,
            [p.cardDisabled]: _,
            [p.splashLoaded]: R
        }),
        children: [
            (0, i.jsxs)('div', {
                className: p.cardHeader,
                children: [
                    (0, i.jsx)('div', {
                        className: p.splash,
                        children: (0, i.jsx)('img', {
                            src: null != Z ? Z : L,
                            alt: '',
                            className: p.splashImage,
                            onLoad: () => y(!0)
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: p.guildIcon,
                        children: (0, i.jsx)(d.ZP, {
                            mask: d.ZP.Masks.SQUIRCLE,
                            width: 48,
                            height: 48,
                            children: (0, i.jsx)('div', {
                                className: p.iconMask,
                                children: (0, i.jsx)(d.ZP, {
                                    mask: d.ZP.Masks.SQUIRCLE,
                                    width: 40,
                                    height: 40,
                                    children: null != M ? M : null
                                })
                            })
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: p.guildInfo,
                children: [
                    (0, i.jsxs)('div', {
                        className: p.title,
                        children: [
                            (0, i.jsx)(u.Z, {
                                className: p.verifiedIcon,
                                guild: l,
                                tooltipColor: o.Tooltip.Colors.PRIMARY
                            }),
                            (0, i.jsx)(o.Text, {
                                className: p.guildName,
                                variant: 'text-md/normal',
                                children: (0, i.jsx)('span', { children: A })
                            })
                        ]
                    }),
                    (0, i.jsx)(o.Text, {
                        className: p.description,
                        variant: 'text-sm/normal',
                        children: (0, i.jsx)('span', { children: O })
                    }),
                    (0, i.jsxs)('div', {
                        className: p.memberInfo,
                        children: [
                            null != k &&
                                (0, i.jsxs)('div', {
                                    className: p.memberCount,
                                    children: [
                                        (0, i.jsx)('div', { className: p.dotOnline }),
                                        (0, i.jsx)(o.Text, {
                                            variant: 'text-xs/normal',
                                            children: I ? x.intl.formatToPlainString(x.t.YMor7u, { count: k }) : x.intl.formatToPlainString(x.t['LC+S+v'], { membersOnline: k })
                                        })
                                    ]
                                }),
                            null != P &&
                                (0, i.jsxs)('div', {
                                    className: p.memberCount,
                                    children: [
                                        (0, i.jsx)('div', { className: p.dotOffline }),
                                        (0, i.jsx)(o.Text, {
                                            variant: 'text-xs/normal',
                                            children: I ? x.intl.formatToPlainString(x.t.YMor7u, { count: P }) : x.intl.formatToPlainString(x.t.zRl6XV, { count: P })
                                        })
                                    ]
                                })
                        ]
                    })
                ]
            })
        ]
    });
};
