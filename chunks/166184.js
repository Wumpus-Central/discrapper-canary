n.d(i, { Z: () => A }), n(47120);
var l = n(200651),
    t = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(780384),
    u = n(481060),
    d = n(410030),
    o = n(686546),
    c = n(372769),
    E = n(134432),
    I = n(768581),
    _ = n(624138),
    f = n(388032),
    h = n(745870),
    S = n(129512),
    m = n(330065);
let g = [16, 16, 14, 14, 12, 10, 8],
    A = function (e) {
        var i, n;
        let { guild: r, disabled: A, small: v, loading: N = !1, description: T, memberCount: C, presenceCount: L, className: D } = e,
            R = (0, d.ZP)(),
            [p, P] = t.useState(!1);
        if (null == r || N)
            return (0, l.jsx)('div', {
                className: a()(D, h.card, h.cardPlaceholder, {
                    [h.cardSmall]: v,
                    [h.cardDisabled]: A
                })
            });
        let { name: y } = r,
            V =
                null != r.discoverySplash && /^data:/.test(r.discoverySplash)
                    ? r.discoverySplash
                    : I.ZP.getGuildDiscoverySplashURL({
                          id: r.id,
                          splash: r.discoverySplash,
                          size: 240 * (0, E.x_)()
                      }),
            O = (0, s.wj)(R) ? S : m,
            x =
                null !==
                    (i = I.ZP.getGuildIconURL({
                        id: r.id,
                        icon: r.icon,
                        size: 40
                    })) && void 0 !== i
                    ? i
                    : void 0,
            j = null != r.description ? r.description : T,
            F = null != C ? C : null == r ? void 0 : r.memberCount,
            G = null != L ? L : null == r ? void 0 : r.presenceCount,
            b = null;
        if (null != x)
            b = (0, l.jsx)('img', {
                src: x,
                alt: '',
                className: h.avatar
            });
        else {
            let e = (0, _.Zg)(r.name);
            b = (0, l.jsx)('div', {
                className: h.defaultIcon,
                children: (0, l.jsx)(u.Text, {
                    className: h.acronym,
                    style: { fontSize: null !== (n = g[e.length]) && void 0 !== n ? n : g[g.length - 1] },
                    variant: 'text-sm/normal',
                    children: e
                })
            });
        }
        return (0, l.jsxs)('div', {
            className: a()(D, h.card, {
                [h.cardSmall]: v,
                [h.cardDisabled]: A,
                [h.splashLoaded]: p
            }),
            children: [
                (0, l.jsxs)('div', {
                    className: h.cardHeader,
                    children: [
                        (0, l.jsx)('div', {
                            className: h.splash,
                            children: (0, l.jsx)('img', {
                                src: null != V ? V : O,
                                alt: '',
                                className: h.splashImage,
                                onLoad: () => P(!0)
                            })
                        }),
                        (0, l.jsx)('div', {
                            className: h.guildIcon,
                            children: (0, l.jsx)(o.ZP, {
                                mask: o.ZP.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, l.jsx)('div', {
                                    className: h.iconMask,
                                    children: (0, l.jsx)(o.ZP, {
                                        mask: o.ZP.Masks.SQUIRCLE,
                                        width: 40,
                                        height: 40,
                                        children: null != b ? b : null
                                    })
                                })
                            })
                        })
                    ]
                }),
                (0, l.jsxs)('div', {
                    className: h.guildInfo,
                    children: [
                        (0, l.jsxs)('div', {
                            className: h.title,
                            children: [
                                (0, l.jsx)(c.Z, {
                                    className: h.verifiedIcon,
                                    guild: r,
                                    tooltipColor: u.ua7.Colors.PRIMARY
                                }),
                                (0, l.jsx)(u.Text, {
                                    className: h.guildName,
                                    variant: 'text-md/normal',
                                    children: (0, l.jsx)('span', { children: y })
                                })
                            ]
                        }),
                        (0, l.jsx)('div', {
                            className: h.descriptionContainer,
                            children: (0, l.jsx)(u.Text, {
                                lineClamp: 3,
                                className: h.description,
                                variant: 'text-sm/normal',
                                tag: 'span',
                                children: j
                            })
                        }),
                        (0, l.jsxs)('div', {
                            className: h.memberInfo,
                            children: [
                                null != G &&
                                    (0, l.jsxs)('div', {
                                        className: h.memberCount,
                                        children: [
                                            (0, l.jsx)('div', { className: h.dotOnline }),
                                            (0, l.jsx)(u.Text, {
                                                variant: 'text-xs/normal',
                                                children: v ? f.intl.formatToPlainString(f.t.YMor7u, { count: G }) : f.intl.formatToPlainString(f.t['LC+S+v'], { membersOnline: G })
                                            })
                                        ]
                                    }),
                                null != F &&
                                    (0, l.jsxs)('div', {
                                        className: h.memberCount,
                                        children: [
                                            (0, l.jsx)('div', { className: h.dotOffline }),
                                            (0, l.jsx)(u.Text, {
                                                variant: 'text-xs/normal',
                                                children: v ? f.intl.formatToPlainString(f.t.YMor7u, { count: F }) : f.intl.formatToPlainString(f.t.zRl6XV, { count: F })
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
