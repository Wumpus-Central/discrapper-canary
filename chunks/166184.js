r(47120);
var n = r(200651),
    i = r(192379),
    a = r(120356),
    l = r.n(a),
    s = r(780384),
    o = r(481060),
    c = r(410030),
    d = r(686546),
    u = r(372769),
    _ = r(134432),
    E = r(768581),
    p = r(624138),
    I = r(388032),
    m = r(965624),
    h = r(129512),
    T = r(330065);
let A = [16, 16, 14, 14, 12, 10, 8];
t.Z = function (e) {
    var t, r;
    let { guild: a, disabled: S, small: N, loading: C = !1, description: D, memberCount: O, presenceCount: f, className: y } = e,
        v = (0, c.ZP)(),
        [M, g] = i.useState(!1);
    if (null == a || C)
        return (0, n.jsx)('div', {
            className: l()(y, m.card, m.cardPlaceholder, {
                [m.cardSmall]: N,
                [m.cardDisabled]: S
            })
        });
    let { name: R } = a,
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
        Z = null != f ? f : null == a ? void 0 : a.presenceCount,
        U = null;
    if (null != G)
        U = (0, n.jsx)('img', {
            src: G,
            alt: '',
            className: m.avatar
        });
    else {
        let e = (0, p.Zg)(a.name);
        U = (0, n.jsx)('div', {
            className: m.defaultIcon,
            children: (0, n.jsx)(o.Text, {
                className: m.acronym,
                style: { fontSize: null !== (r = A[e.length]) && void 0 !== r ? r : A[A.length - 1] },
                variant: 'text-sm/normal',
                children: e
            })
        });
    }
    return (0, n.jsxs)('div', {
        className: l()(y, m.card, {
            [m.cardSmall]: N,
            [m.cardDisabled]: S,
            [m.splashLoaded]: M
        }),
        children: [
            (0, n.jsxs)('div', {
                className: m.cardHeader,
                children: [
                    (0, n.jsx)('div', {
                        className: m.splash,
                        children: (0, n.jsx)('img', {
                            src: null != j ? j : x,
                            alt: '',
                            className: m.splashImage,
                            onLoad: () => g(!0)
                        })
                    }),
                    (0, n.jsx)('div', {
                        className: m.guildIcon,
                        children: (0, n.jsx)(d.ZP, {
                            mask: d.ZP.Masks.SQUIRCLE,
                            width: 48,
                            height: 48,
                            children: (0, n.jsx)('div', {
                                className: m.iconMask,
                                children: (0, n.jsx)(d.ZP, {
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
            (0, n.jsxs)('div', {
                className: m.guildInfo,
                children: [
                    (0, n.jsxs)('div', {
                        className: m.title,
                        children: [
                            (0, n.jsx)(u.Z, {
                                className: m.verifiedIcon,
                                guild: a,
                                tooltipColor: o.Tooltip.Colors.PRIMARY
                            }),
                            (0, n.jsx)(o.Text, {
                                className: m.guildName,
                                variant: 'text-md/normal',
                                children: (0, n.jsx)('span', { children: R })
                            })
                        ]
                    }),
                    (0, n.jsx)(o.Text, {
                        className: m.description,
                        variant: 'text-sm/normal',
                        children: (0, n.jsx)('span', { children: b })
                    }),
                    (0, n.jsxs)('div', {
                        className: m.memberInfo,
                        children: [
                            null != Z &&
                                (0, n.jsxs)('div', {
                                    className: m.memberCount,
                                    children: [
                                        (0, n.jsx)('div', { className: m.dotOnline }),
                                        (0, n.jsx)(o.Text, {
                                            variant: 'text-xs/normal',
                                            children: N ? I.intl.formatToPlainString(I.t.YMor7u, { count: Z }) : I.intl.formatToPlainString(I.t['LC+S+v'], { membersOnline: Z })
                                        })
                                    ]
                                }),
                            null != L &&
                                (0, n.jsxs)('div', {
                                    className: m.memberCount,
                                    children: [
                                        (0, n.jsx)('div', { className: m.dotOffline }),
                                        (0, n.jsx)(o.Text, {
                                            variant: 'text-xs/normal',
                                            children: N ? I.intl.formatToPlainString(I.t.YMor7u, { count: L }) : I.intl.formatToPlainString(I.t.zRl6XV, { count: L })
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
