t.d(i, { Z: () => p }), t(953529), t(388685), t(35282);
var n = t(200651),
    l = t(192379),
    r = t(120356),
    a = t.n(r),
    s = t(780384),
    u = t(481060),
    o = t(410030),
    c = t(686546),
    d = t(372769),
    E = t(134432),
    f = t(768581),
    I = t(624138),
    _ = t(388032),
    m = t(192639),
    S = t(129512),
    h = t(330065);
let g = [16, 16, 14, 14, 12, 10, 8],
    p = function (e) {
        var i, t;
        let { guild: r, disabled: p, small: v, loading: A = !1, description: T, memberCount: N, presenceCount: C, className: P } = e,
            y = (0, o.ZP)(),
            [O, D] = l.useState(!1);
        if (null == r || A)
            return (0, n.jsx)('div', {
                className: a()(P, m.card, m.cardPlaceholder, {
                    [m.cardSmall]: v,
                    [m.cardDisabled]: p
                })
            });
        let { name: L } = r,
            b =
                null != r.discoverySplash && /^data:/.test(r.discoverySplash)
                    ? r.discoverySplash
                    : f.ZP.getGuildDiscoverySplashURL({
                          id: r.id,
                          splash: r.discoverySplash,
                          size: 240 * (0, E.x_)()
                      }),
            R = (0, s.wj)(y) ? S : h,
            j =
                null !=
                (i = f.ZP.getGuildIconURL({
                    id: r.id,
                    icon: r.icon,
                    size: 40
                }))
                    ? i
                    : void 0,
            F = null != r.description ? r.description : T,
            V = null != N ? N : null == r ? void 0 : r.memberCount,
            x = null != C ? C : null == r ? void 0 : r.presenceCount,
            G = null;
        if (null != j)
            G = (0, n.jsx)('img', {
                src: j,
                alt: '',
                className: m.avatar
            });
        else {
            let e = (0, I.Zg)(r.name);
            G = (0, n.jsx)('div', {
                className: m.defaultIcon,
                children: (0, n.jsx)(u.Text, {
                    className: m.acronym,
                    style: { fontSize: null != (t = g[e.length]) ? t : g[g.length - 1] },
                    variant: 'text-sm/normal',
                    children: e
                })
            });
        }
        return (0, n.jsxs)('div', {
            className: a()(P, m.card, {
                [m.cardSmall]: v,
                [m.cardDisabled]: p,
                [m.splashLoaded]: O
            }),
            children: [
                (0, n.jsxs)('div', {
                    className: m.cardHeader,
                    children: [
                        (0, n.jsx)('div', {
                            className: m.splash,
                            children: (0, n.jsx)('img', {
                                src: null != b ? b : R,
                                alt: '',
                                className: m.splashImage,
                                onLoad: () => D(!0)
                            })
                        }),
                        (0, n.jsx)('div', {
                            className: m.guildIcon,
                            children: (0, n.jsx)(c.ZP, {
                                mask: c.ZP.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, n.jsx)('div', {
                                    className: m.iconMask,
                                    children: (0, n.jsx)(c.ZP, {
                                        mask: c.ZP.Masks.SQUIRCLE,
                                        width: 40,
                                        height: 40,
                                        children: null != G ? G : null
                                    })
                                })
                            })
                        })
                    ]
                }),
                (0, n.jsxs)('div', {
                    className: m.guildInfo,
                    children: [
                        (0, n.jsxs)('div', {
                            className: m.title,
                            children: [
                                (0, n.jsx)(d.Z, {
                                    className: m.verifiedIcon,
                                    guild: r,
                                    tooltipColor: u.ua7.Colors.PRIMARY
                                }),
                                (0, n.jsx)(u.Text, {
                                    className: m.guildName,
                                    variant: 'text-md/normal',
                                    children: (0, n.jsx)('span', { children: L })
                                })
                            ]
                        }),
                        (0, n.jsx)('div', {
                            className: m.descriptionContainer,
                            children: (0, n.jsx)(u.Text, {
                                lineClamp: 3,
                                className: m.description,
                                variant: 'text-sm/normal',
                                tag: 'span',
                                children: F
                            })
                        }),
                        (0, n.jsxs)('div', {
                            className: m.memberInfo,
                            children: [
                                null != x &&
                                    (0, n.jsxs)('div', {
                                        className: m.memberCount,
                                        children: [
                                            (0, n.jsx)('div', { className: m.dotOnline }),
                                            (0, n.jsx)(u.Text, {
                                                variant: 'text-xs/normal',
                                                children: v ? _.intl.formatToPlainString(_.t.YMor7u, { count: x }) : _.intl.formatToPlainString(_.t['LC+S+v'], { membersOnline: x })
                                            })
                                        ]
                                    }),
                                null != V &&
                                    (0, n.jsxs)('div', {
                                        className: m.memberCount,
                                        children: [
                                            (0, n.jsx)('div', { className: m.dotOffline }),
                                            (0, n.jsx)(u.Text, {
                                                variant: 'text-xs/normal',
                                                children: v ? _.intl.formatToPlainString(_.t.YMor7u, { count: V }) : _.intl.formatToPlainString(_.t.zRl6XV, { count: V })
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
