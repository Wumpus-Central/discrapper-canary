t.d(i, { Z: () => N }), t(953529), t(388685), t(35282);
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
    h = t(192639),
    S = t(129512),
    g = t(330065);
let m = [16, 16, 14, 14, 12, 10, 8],
    N = function (e) {
        var i, t;
        let { guild: r, disabled: N, small: p, loading: A = !1, description: T, memberCount: v, presenceCount: C, className: D } = e,
            P = (0, o.ZP)(),
            [y, L] = l.useState(!1);
        if (null == r || A)
            return (0, n.jsx)('div', {
                className: a()(D, h.card, h.cardPlaceholder, {
                    [h.cardSmall]: p,
                    [h.cardDisabled]: N
                })
            });
        let { name: O } = r,
            R =
                null != r.discoverySplash && /^data:/.test(r.discoverySplash)
                    ? r.discoverySplash
                    : f.ZP.getGuildDiscoverySplashURL({
                          id: r.id,
                          splash: r.discoverySplash,
                          size: 240 * (0, E.x_)()
                      }),
            b = (0, s.wj)(P) ? S : g,
            j =
                null !=
                (i = f.ZP.getGuildIconURL({
                    id: r.id,
                    icon: r.icon,
                    size: 40
                }))
                    ? i
                    : void 0,
            V = null != r.description ? r.description : T,
            x = null != v ? v : null == r ? void 0 : r.memberCount,
            G = null != C ? C : null == r ? void 0 : r.presenceCount,
            F = null;
        if (null != j)
            F = (0, n.jsx)('img', {
                src: j,
                alt: '',
                className: h.avatar
            });
        else {
            let e = (0, I.Zg)(r.name);
            F = (0, n.jsx)('div', {
                className: h.defaultIcon,
                children: (0, n.jsx)(u.Text, {
                    className: h.acronym,
                    style: { fontSize: null != (t = m[e.length]) ? t : m[m.length - 1] },
                    variant: 'text-sm/normal',
                    children: e
                })
            });
        }
        return (0, n.jsxs)('div', {
            className: a()(D, h.card, {
                [h.cardSmall]: p,
                [h.cardDisabled]: N,
                [h.splashLoaded]: y
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
                                onLoad: () => L(!0)
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
                                        children: null != F ? F : null
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
                                null != G &&
                                    (0, n.jsxs)('div', {
                                        className: h.memberCount,
                                        children: [
                                            (0, n.jsx)('div', { className: h.dotOnline }),
                                            (0, n.jsx)(u.Text, {
                                                variant: 'text-xs/normal',
                                                children: p ? _.NW.formatToPlainString(_.t.YMor7u, { count: G }) : _.NW.formatToPlainString(_.t['LC+S+v'], { membersOnline: G })
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
                                                children: p ? _.NW.formatToPlainString(_.t.YMor7u, { count: x }) : _.NW.formatToPlainString(_.t.zRl6XV, { count: x })
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
