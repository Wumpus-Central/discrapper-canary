t.d(i, { Z: () => N }), t(266796), t(47120), t(301563);
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
    I = t(768581),
    f = t(624138),
    _ = t(388032),
    h = t(434713),
    S = t(129512),
    g = t(330065);
let m = [16, 16, 14, 14, 12, 10, 8],
    N = function (e) {
        var i, t;
        let { guild: r, disabled: N, small: v, loading: A = !1, description: T, memberCount: p, presenceCount: C, className: D } = e,
            L = (0, o.ZP)(),
            [P, y] = l.useState(!1);
        if (null == r || A)
            return (0, n.jsx)('div', {
                className: a()(D, h.card, h.cardPlaceholder, {
                    [h.cardSmall]: v,
                    [h.cardDisabled]: N
                })
            });
        let { name: O } = r,
            R =
                null != r.discoverySplash && /^data:/.test(r.discoverySplash)
                    ? r.discoverySplash
                    : I.ZP.getGuildDiscoverySplashURL({
                          id: r.id,
                          splash: r.discoverySplash,
                          size: 240 * (0, E.x_)()
                      }),
            b = (0, s.wj)(L) ? S : g,
            j =
                null !==
                    (i = I.ZP.getGuildIconURL({
                        id: r.id,
                        icon: r.icon,
                        size: 40
                    })) && void 0 !== i
                    ? i
                    : void 0,
            V = null != r.description ? r.description : T,
            x = null != p ? p : null == r ? void 0 : r.memberCount,
            F = null != C ? C : null == r ? void 0 : r.presenceCount,
            G = null;
        if (null != j)
            G = (0, n.jsx)('img', {
                src: j,
                alt: '',
                className: h.avatar
            });
        else {
            let e = (0, f.Zg)(r.name);
            G = (0, n.jsx)('div', {
                className: h.defaultIcon,
                children: (0, n.jsx)(u.Text, {
                    className: h.acronym,
                    style: { fontSize: null !== (t = m[e.length]) && void 0 !== t ? t : m[m.length - 1] },
                    variant: 'text-sm/normal',
                    children: e
                })
            });
        }
        return (0, n.jsxs)('div', {
            className: a()(D, h.card, {
                [h.cardSmall]: v,
                [h.cardDisabled]: N,
                [h.splashLoaded]: P
            }),
            children: [
                (0, n.jsxs)('div', {
                    className: h.cardHeader,
                    children: [
                        (0, n.jsx)('div', {
                            className: h.splash,
                            children: (0, n.jsx)('img', {
                                src: null != R ? R : b,
                                alt: '',
                                className: h.splashImage,
                                onLoad: () => y(!0)
                            })
                        }),
                        (0, n.jsx)('div', {
                            className: h.guildIcon,
                            children: (0, n.jsx)(c.ZP, {
                                mask: c.ZP.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, n.jsx)('div', {
                                    className: h.iconMask,
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
                    className: h.guildInfo,
                    children: [
                        (0, n.jsxs)('div', {
                            className: h.title,
                            children: [
                                (0, n.jsx)(d.Z, {
                                    className: h.verifiedIcon,
                                    guild: r,
                                    tooltipColor: u.ua7.Colors.PRIMARY
                                }),
                                (0, n.jsx)(u.Text, {
                                    className: h.guildName,
                                    variant: 'text-md/normal',
                                    children: (0, n.jsx)('span', { children: O })
                                })
                            ]
                        }),
                        (0, n.jsx)('div', {
                            className: h.descriptionContainer,
                            children: (0, n.jsx)(u.Text, {
                                lineClamp: 3,
                                className: h.description,
                                variant: 'text-sm/normal',
                                tag: 'span',
                                children: V
                            })
                        }),
                        (0, n.jsxs)('div', {
                            className: h.memberInfo,
                            children: [
                                null != F &&
                                    (0, n.jsxs)('div', {
                                        className: h.memberCount,
                                        children: [
                                            (0, n.jsx)('div', { className: h.dotOnline }),
                                            (0, n.jsx)(u.Text, {
                                                variant: 'text-xs/normal',
                                                children: v ? _.NW.formatToPlainString(_.t.YMor7u, { count: F }) : _.NW.formatToPlainString(_.t['LC+S+v'], { membersOnline: F })
                                            })
                                        ]
                                    }),
                                null != x &&
                                    (0, n.jsxs)('div', {
                                        className: h.memberCount,
                                        children: [
                                            (0, n.jsx)('div', { className: h.dotOffline }),
                                            (0, n.jsx)(u.Text, {
                                                variant: 'text-xs/normal',
                                                children: v ? _.NW.formatToPlainString(_.t.YMor7u, { count: x }) : _.NW.formatToPlainString(_.t.zRl6XV, { count: x })
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
