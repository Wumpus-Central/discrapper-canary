n.d(t, { Z: () => N }), n(266796), n(47120), n(301563);
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
    h = n(388032),
    f = n(192639),
    b = n(129512),
    x = n(330065);
let j = [16, 16, 14, 14, 12, 10, 8],
    N = function (e) {
        var t, n;
        let { guild: s, disabled: N, small: _, loading: v = !1, description: C, memberCount: O, presenceCount: y, className: I } = e,
            E = (0, c.ZP)(),
            [S, T] = i.useState(!1);
        if (null == s || v)
            return (0, r.jsx)('div', {
                className: a()(I, f.card, f.cardPlaceholder, {
                    [f.cardSmall]: _,
                    [f.cardDisabled]: N
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
            Z =
                null !=
                (t = g.ZP.getGuildIconURL({
                    id: s.id,
                    icon: s.icon,
                    size: 40
                }))
                    ? t
                    : void 0,
            D = null != s.description ? s.description : C,
            A = null != O ? O : null == s ? void 0 : s.memberCount,
            k = null != y ? y : null == s ? void 0 : s.presenceCount,
            W = null;
        if (null != Z)
            W = (0, r.jsx)('img', {
                src: Z,
                alt: '',
                className: f.avatar
            });
        else {
            let e = (0, p.Zg)(s.name);
            W = (0, r.jsx)('div', {
                className: f.defaultIcon,
                children: (0, r.jsx)(o.Text, {
                    className: f.acronym,
                    style: { fontSize: null != (n = j[e.length]) ? n : j[j.length - 1] },
                    variant: 'text-sm/normal',
                    children: e
                })
            });
        }
        return (0, r.jsxs)('div', {
            className: a()(I, f.card, {
                [f.cardSmall]: _,
                [f.cardDisabled]: N,
                [f.splashLoaded]: S
            }),
            children: [
                (0, r.jsxs)('div', {
                    className: f.cardHeader,
                    children: [
                        (0, r.jsx)('div', {
                            className: f.splash,
                            children: (0, r.jsx)('img', {
                                src: null != w ? w : R,
                                alt: '',
                                className: f.splashImage,
                                onLoad: () => T(!0)
                            })
                        }),
                        (0, r.jsx)('div', {
                            className: f.guildIcon,
                            children: (0, r.jsx)(d.ZP, {
                                mask: d.ZP.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, r.jsx)('div', {
                                    className: f.iconMask,
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
                    className: f.guildInfo,
                    children: [
                        (0, r.jsxs)('div', {
                            className: f.title,
                            children: [
                                (0, r.jsx)(u.Z, {
                                    className: f.verifiedIcon,
                                    guild: s,
                                    tooltipColor: o.ua7.Colors.PRIMARY
                                }),
                                (0, r.jsx)(o.Text, {
                                    className: f.guildName,
                                    variant: 'text-md/normal',
                                    children: (0, r.jsx)('span', { children: P })
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: f.descriptionContainer,
                            children: (0, r.jsx)(o.Text, {
                                lineClamp: 3,
                                className: f.description,
                                variant: 'text-sm/normal',
                                tag: 'span',
                                children: D
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: f.memberInfo,
                            children: [
                                null != k &&
                                    (0, r.jsxs)('div', {
                                        className: f.memberCount,
                                        children: [
                                            (0, r.jsx)('div', { className: f.dotOnline }),
                                            (0, r.jsx)(o.Text, {
                                                variant: 'text-xs/normal',
                                                children: _ ? h.NW.formatToPlainString(h.t.YMor7u, { count: k }) : h.NW.formatToPlainString(h.t['LC+S+v'], { membersOnline: k })
                                            })
                                        ]
                                    }),
                                null != A &&
                                    (0, r.jsxs)('div', {
                                        className: f.memberCount,
                                        children: [
                                            (0, r.jsx)('div', { className: f.dotOffline }),
                                            (0, r.jsx)(o.Text, {
                                                variant: 'text-xs/normal',
                                                children: _ ? h.NW.formatToPlainString(h.t.YMor7u, { count: A }) : h.NW.formatToPlainString(h.t.zRl6XV, { count: A })
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
