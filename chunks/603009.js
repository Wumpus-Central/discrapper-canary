n.d(t, { Z: () => T }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(642128),
    s = n(704215),
    c = n(481060),
    u = n(442837),
    d = n(493773),
    p = n(410030),
    h = n(607070),
    f = n(645041),
    m = n(430824),
    g = n(914010),
    b = n(594174),
    _ = n(626135),
    C = n(645896),
    y = n(905362),
    x = n(603368),
    v = n(353093),
    j = n(940725),
    O = n(114487),
    E = n(979264),
    N = n(981631),
    I = n(921944),
    P = n(388032),
    S = n(129163);
function Z(e) {
    var t;
    let { guild: n, showToast: l, onConfirm: s, onDismiss: d } = e,
        [f, m] = i.useState(!1),
        g = i.useRef(null),
        _ = (0, C.Cc)(n.id),
        y = (0, p.ZP)(),
        j = (0, u.e7)([h.Z], () => h.Z.useReducedMotion),
        N = (0, x.nP)(null == _ || null == (t = _.branding) ? void 0 : t.primaryColor, [c.TVs.colors.BG_BRAND, 0.5]),
        I = c.TVs.colors.BG_SURFACE_OVERLAY.resolve({
            theme: y,
            saturation: 1
        }).hex(),
        Z = (0, x.nj)(N, I, 'top left', 0.3, '30%'),
        T = (0, u.e7)(
            [b.default],
            () => {
                var e;
                return null == (e = b.default.getCurrentUser()) ? void 0 : e.primaryGuild;
            },
            []
        );
    i.useLayoutEffect(() => {
        var e;
        if (null == g.current) return;
        let t = null == (e = g.current) ? void 0 : e.parentNode;
        return (
            null != t && (t.style.zIndex = '1003'),
            () => {
                null != t && (t.style.zIndex = '1002');
            }
        );
    }, []);
    let A = i.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), d();
            },
            [d]
        ),
        w = i.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), s();
            },
            [s]
        ),
        R = (0, c.Yzy)(
            l,
            {
                from: {
                    transform: j ? 'translateY(0)' : 'translateY(16px)',
                    opacity: 0,
                    pointerEvents: 'none'
                },
                enter: {
                    transform: 'translateY(0)',
                    opacity: 1,
                    pointerEvents: 'all'
                },
                leave: {
                    transform: j ? 'translateY(0)' : 'translateY(16px)',
                    opacity: 0,
                    pointerEvents: 'none'
                },
                config: {
                    mass: 1,
                    tension: 500,
                    friction: 18,
                    clamp: !0
                },
                delay: 200
            },
            'animate-always'
        ),
        M = (0, v.Zp)(n, T),
        k = M ? P.NW.formatToPlainString(P.t.qFqINz, { guildName: n.name }) : P.NW.formatToPlainString(P.t.bFwASk, { guildName: n.name }),
        L = M ? P.NW.string(P.t.eA1ymp) : P.NW.string(P.t.MF0Ntb),
        D = M ? P.NW.formatToPlainString(P.t['60PXOz'], { guildName: n.name }) : P.NW.formatToPlainString(P.t.i27ioq, { guildName: n.name });
    return R((e, t) => {
        var i, l;
        return (
            t &&
            (0, r.jsx)(a.animated.div, {
                onMouseEnter: () => m(!0),
                onMouseLeave: () => m(!1),
                className: S.wrapper,
                style: (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, e, Z),
                ref: g,
                children: (0, r.jsx)(c.kL8, {
                    'aria-label': D,
                    onClick: w,
                    children: (0, r.jsxs)('div', {
                        className: o()(S.toastContainerInner, f ? S.hovered : null),
                        children: [
                            (0, r.jsxs)('div', {
                                className: S.guildIconContainer,
                                children: [
                                    (0, r.jsx)(O.Z, {
                                        guild: n,
                                        iconSize: 64
                                    }),
                                    (0, r.jsx)('div', {
                                        className: S.guildTagContainer,
                                        children: (0, r.jsx)(E.aG, {
                                            guildId: n.id,
                                            clanTag: null == (i = n.profile) ? void 0 : i.tag,
                                            clanBadge: null == (l = n.profile) ? void 0 : l.badge,
                                            className: S.guildClanTag
                                        })
                                    })
                                ]
                            }),
                            (0, r.jsxs)('div', {
                                children: [
                                    (0, r.jsx)('div', {
                                        children: (0, r.jsx)(c.X6q, {
                                            variant: 'heading-md/bold',
                                            color: 'header-primary',
                                            children: k
                                        })
                                    }),
                                    (0, r.jsx)('div', {
                                        children: (0, r.jsx)(c.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'header-secondary',
                                            children: L
                                        })
                                    })
                                ]
                            }),
                            (0, r.jsx)('div', {
                                children: (0, r.jsx)(c.P3F, {
                                    className: S.toastButton,
                                    onClick: A,
                                    children: (0, r.jsx)(c.P$X, {
                                        size: 'custom',
                                        width: 20,
                                        height: 20
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        );
    });
}
function T(e) {
    let {} = e,
        t = (0, u.e7)([g.Z], () => g.Z.getGuildId()),
        n = (0, j.h)(t),
        l = (0, u.e7)([m.Z], () => m.Z.getGuild(t), [t]),
        [o, a] = i.useState(!1),
        c = i.useRef(null);
    (0, d.ZP)(
        () => (
            n &&
                (c.current = window.setTimeout(() => {
                    a(!0),
                        _.default.track(N.rMx.DISMISSIBLE_CONTENT_SHOWN, {
                            type: s.C[s.C.ADOPT_CLAN_IDENTITY_NOTICE],
                            guild_id: null != t ? t : N.lds
                        });
                }, 2500)),
            () => {
                null != c.current && window.clearTimeout(c.current);
            }
        )
    );
    let p = i.useCallback(() => {
            a(!1), null != t && (0, y.SJ)(t);
        }, [, t]),
        h = i.useCallback(() => {
            a(!1), null != t && (0, f.Qd)(s.C.ADOPT_CLAN_IDENTITY_NOTICE, null != t ? t : N.lds, !0, I.L.DISMISS);
        }, [t]);
    return n && null != t && null != l
        ? (0, r.jsx)(Z, {
              guild: l,
              onConfirm: p,
              onDismiss: h,
              showToast: o
          })
        : null;
}
