i.d(t, { Z: () => N }), i(47120);
var r = i(200651),
    n = i(192379),
    a = i(120356),
    l = i.n(a),
    s = i(780384),
    o = i(481060),
    c = i(410030),
    d = i(686546),
    u = i(372769),
    _ = i(134432),
    E = i(768581),
    p = i(624138),
    I = i(388032),
    m = i(965624),
    h = i(129512),
    T = i(330065);
let A = [16, 16, 14, 14, 12, 10, 8],
    N = function (e) {
        var t, i;
        let { guild: a, disabled: N, small: S, loading: C = !1, description: D, memberCount: O, presenceCount: y, className: M } = e,
            v = (0, c.ZP)(),
            [R, g] = n.useState(!1);
        if (null == a || C)
            return (0, r.jsx)('div', {
                className: l()(M, m.card, m.cardPlaceholder, {
                    [m.cardSmall]: S,
                    [m.cardDisabled]: N
                })
            });
        let { name: f } = a,
            j =
                null != a.discoverySplash && /^data:/.test(a.discoverySplash)
                    ? a.discoverySplash
                    : E.ZP.getGuildDiscoverySplashURL({
                          id: a.id,
                          splash: a.discoverySplash,
                          size: 240 * (0, _.x_)()
                      }),
            x = (0, s.wj)(v) ? h : T,
            G =
                null !==
                    (t = E.ZP.getGuildIconURL({
                        id: a.id,
                        icon: a.icon,
                        size: 40
                    })) && void 0 !== t
                    ? t
                    : void 0,
            b = null != a.description ? a.description : D,
            L = null != O ? O : null == a ? void 0 : a.memberCount,
            Z = null != y ? y : null == a ? void 0 : a.presenceCount,
            U = null;
        if (null != G)
            U = (0, r.jsx)('img', {
                src: G,
                alt: '',
                className: m.avatar
            });
        else {
            let e = (0, p.Zg)(a.name);
            U = (0, r.jsx)('div', {
                className: m.defaultIcon,
                children: (0, r.jsx)(o.Text, {
                    className: m.acronym,
                    style: { fontSize: null !== (i = A[e.length]) && void 0 !== i ? i : A[A.length - 1] },
                    variant: 'text-sm/normal',
                    children: e
                })
            });
        }
        return (0, r.jsxs)('div', {
            className: l()(M, m.card, {
                [m.cardSmall]: S,
                [m.cardDisabled]: N,
                [m.splashLoaded]: R
            }),
            children: [
                (0, r.jsxs)('div', {
                    className: m.cardHeader,
                    children: [
                        (0, r.jsx)('div', {
                            className: m.splash,
                            children: (0, r.jsx)('img', {
                                src: null != j ? j : x,
                                alt: '',
                                className: m.splashImage,
                                onLoad: () => g(!0)
                            })
                        }),
                        (0, r.jsx)('div', {
                            className: m.guildIcon,
                            children: (0, r.jsx)(d.ZP, {
                                mask: d.ZP.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, r.jsx)('div', {
                                    className: m.iconMask,
                                    children: (0, r.jsx)(d.ZP, {
                                        mask: d.ZP.Masks.SQUIRCLE,
                                        width: 40,
                                        height: 40,
                                        children: null != U ? U : null
                                    })
                                })
                            })
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: m.guildInfo,
                    children: [
                        (0, r.jsxs)('div', {
                            className: m.title,
                            children: [
                                (0, r.jsx)(u.Z, {
                                    className: m.verifiedIcon,
                                    guild: a,
                                    tooltipColor: o.ua7.Colors.PRIMARY
                                }),
                                (0, r.jsx)(o.Text, {
                                    className: m.guildName,
                                    variant: 'text-md/normal',
                                    children: (0, r.jsx)('span', { children: f })
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: m.descriptionContainer,
                            children: (0, r.jsx)(o.Text, {
                                lineClamp: 3,
                                className: m.description,
                                variant: 'text-sm/normal',
                                tag: 'span',
                                children: b
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: m.memberInfo,
                            children: [
                                null != Z &&
                                    (0, r.jsxs)('div', {
                                        className: m.memberCount,
                                        children: [
                                            (0, r.jsx)('div', { className: m.dotOnline }),
                                            (0, r.jsx)(o.Text, {
                                                variant: 'text-xs/normal',
                                                children: S ? I.intl.formatToPlainString(I.t.YMor7u, { count: Z }) : I.intl.formatToPlainString(I.t['LC+S+v'], { membersOnline: Z })
                                            })
                                        ]
                                    }),
                                null != L &&
                                    (0, r.jsxs)('div', {
                                        className: m.memberCount,
                                        children: [
                                            (0, r.jsx)('div', { className: m.dotOffline }),
                                            (0, r.jsx)(o.Text, {
                                                variant: 'text-xs/normal',
                                                children: S ? I.intl.formatToPlainString(I.t.YMor7u, { count: L }) : I.intl.formatToPlainString(I.t.zRl6XV, { count: L })
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
