n.d(t, { Z: () => N }), n(953529), n(388685), n(35282);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(780384),
    o = n(481060),
    c = n(410030),
    d = n(686546),
    u = n(372769),
    m = n(134432),
    g = n(768581),
    p = n(624138),
    f = n(388032),
    h = n(192639),
    b = n(129512),
    x = n(330065);
let j = [16, 16, 14, 14, 12, 10, 8],
    N = function (e) {
        var t, n;
        let { guild: s, disabled: N, small: v, loading: _ = !1, description: y, memberCount: O, presenceCount: C, className: I } = e,
            E = (0, c.ZP)(),
            [S, T] = i.useState(!1);
        if (null == s || _)
            return (0, r.jsx)('div', {
                className: a()(I, h.card, h.cardPlaceholder, {
                    [h.cardSmall]: v,
                    [h.cardDisabled]: N
                })
            });
        let { name: P } = s,
            w =
                null != s.discoverySplash && /^data:/.test(s.discoverySplash)
                    ? s.discoverySplash
                    : g.ZP.getGuildDiscoverySplashURL({
                          id: s.id,
                          splash: s.discoverySplash,
                          size: 240 * (0, m.x_)()
                      }),
            R = (0, l.wj)(E) ? b : x,
            D =
                null !=
                (t = g.ZP.getGuildIconURL({
                    id: s.id,
                    icon: s.icon,
                    size: 40
                }))
                    ? t
                    : void 0,
            Z = null != s.description ? s.description : y,
            k = null != O ? O : null == s ? void 0 : s.memberCount,
            A = null != C ? C : null == s ? void 0 : s.presenceCount,
            W = null;
        if (null != D)
            W = (0, r.jsx)('img', {
                src: D,
                alt: '',
                className: h.avatar
            });
        else {
            let e = (0, p.Zg)(s.name);
            W = (0, r.jsx)('div', {
                className: h.defaultIcon,
                children: (0, r.jsx)(o.Text, {
                    className: h.acronym,
                    style: { fontSize: null != (n = j[e.length]) ? n : j[j.length - 1] },
                    variant: 'text-sm/normal',
                    children: e
                })
            });
        }
        return (0, r.jsxs)('div', {
            className: a()(I, h.card, {
                [h.cardSmall]: v,
                [h.cardDisabled]: N,
                [h.splashLoaded]: S
            }),
            children: [
                (0, r.jsxs)('div', {
                    className: h.cardHeader,
                    children: [
                        (0, r.jsx)('div', {
                            className: h.splash,
                            children: (0, r.jsx)('img', {
                                src: null != w ? w : R,
                                alt: '',
                                className: h.splashImage,
                                onLoad: () => T(!0)
                            })
                        }),
                        (0, r.jsx)('div', {
                            className: h.guildIcon,
                            children: (0, r.jsx)(d.ZP, {
                                mask: d.ZP.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, r.jsx)('div', {
                                    className: h.iconMask,
                                    children: (0, r.jsx)(d.ZP, {
                                        mask: d.ZP.Masks.SQUIRCLE,
                                        width: 40,
                                        height: 40,
                                        children: null != W ? W : null
                                    })
                                })
                            })
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: h.guildInfo,
                    children: [
                        (0, r.jsxs)('div', {
                            className: h.title,
                            children: [
                                (0, r.jsx)(u.Z, {
                                    className: h.verifiedIcon,
                                    guild: s,
                                    tooltipColor: o.ua7.Colors.PRIMARY
                                }),
                                (0, r.jsx)(o.Text, {
                                    className: h.guildName,
                                    variant: 'text-md/normal',
                                    children: (0, r.jsx)('span', { children: P })
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: h.descriptionContainer,
                            children: (0, r.jsx)(o.Text, {
                                lineClamp: 3,
                                className: h.description,
                                variant: 'text-sm/normal',
                                tag: 'span',
                                children: Z
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: h.memberInfo,
                            children: [
                                null != A &&
                                    (0, r.jsxs)('div', {
                                        className: h.memberCount,
                                        children: [
                                            (0, r.jsx)('div', { className: h.dotOnline }),
                                            (0, r.jsx)(o.Text, {
                                                variant: 'text-xs/normal',
                                                children: v ? f.NW.formatToPlainString(f.t.YMor7u, { count: A }) : f.NW.formatToPlainString(f.t['LC+S+v'], { membersOnline: A })
                                            })
                                        ]
                                    }),
                                null != k &&
                                    (0, r.jsxs)('div', {
                                        className: h.memberCount,
                                        children: [
                                            (0, r.jsx)('div', { className: h.dotOffline }),
                                            (0, r.jsx)(o.Text, {
                                                variant: 'text-xs/normal',
                                                children: v ? f.NW.formatToPlainString(f.t.YMor7u, { count: k }) : f.NW.formatToPlainString(f.t.zRl6XV, { count: k })
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
