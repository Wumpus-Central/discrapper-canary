n.d(t, { Z: () => P }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(642128),
    o = n(704215),
    c = n(481060),
    d = n(442837),
    u = n(493773),
    h = n(410030),
    p = n(607070),
    m = n(645041),
    f = n(430824),
    g = n(914010),
    _ = n(594174),
    C = n(626135),
    x = n(645896),
    v = n(905362),
    E = n(603368),
    I = n(353093),
    b = n(940725),
    Z = n(114487),
    N = n(979264),
    T = n(981631),
    S = n(921944),
    j = n(388032),
    A = n(431972);
function y(e) {
    var t;
    let { guild: n, showToast: a, onConfirm: o, onDismiss: u } = e,
        [m, f] = l.useState(!1),
        g = l.useRef(null),
        C = (0, x.Cc)(n.id),
        v = (0, h.ZP)(),
        b = (0, d.e7)([p.Z], () => p.Z.useReducedMotion),
        T = (0, E.nP)(null == C ? void 0 : null === (t = C.branding) || void 0 === t ? void 0 : t.primaryColor, [c.TVs.colors.BG_BRAND, 0.5]),
        S = c.TVs.colors.BG_SURFACE_OVERLAY.resolve({
            theme: v,
            saturation: 1
        }).hex(),
        y = (0, E.nj)(T, S, 'top left', 0.3, '30%'),
        P = (0, d.e7)(
            [_.default],
            () => {
                var e;
                return null === (e = _.default.getCurrentUser()) || void 0 === e ? void 0 : e.primaryGuild;
            },
            []
        );
    l.useLayoutEffect(() => {
        var e;
        if (null == g.current) return;
        let t = null === (e = g.current) || void 0 === e ? void 0 : e.parentNode;
        return (
            null != t && (t.style.zIndex = '1003'),
            () => {
                null != t && (t.style.zIndex = '1002');
            }
        );
    }, []);
    let R = l.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), u();
            },
            [u]
        ),
        M = l.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), o();
            },
            [o]
        ),
        L = (0, c.Yzy)(
            a,
            {
                from: {
                    transform: b ? 'translateY(0)' : 'translateY(16px)',
                    opacity: 0,
                    pointerEvents: 'none'
                },
                enter: {
                    transform: 'translateY(0)',
                    opacity: 1,
                    pointerEvents: 'all'
                },
                leave: {
                    transform: b ? 'translateY(0)' : 'translateY(16px)',
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
        k = (0, I.Zp)(n, P),
        O = k ? j.intl.formatToPlainString(j.t.qFqINz, { guildName: n.name }) : j.intl.formatToPlainString(j.t.bFwASk, { guildName: n.name }),
        D = k ? j.intl.string(j.t.eA1ymp) : j.intl.string(j.t.MF0Ntb),
        w = k ? j.intl.formatToPlainString(j.t['60PXOz'], { guildName: n.name }) : j.intl.formatToPlainString(j.t.i27ioq, { guildName: n.name });
    return L((e, t) => {
        var l, a;
        return (
            t &&
            (0, i.jsx)(s.animated.div, {
                onMouseEnter: () => f(!0),
                onMouseLeave: () => f(!1),
                className: r()(A.wrapper),
                style: {
                    ...e,
                    ...y
                },
                ref: g,
                children: (0, i.jsx)(c.kL8, {
                    'aria-label': w,
                    onClick: M,
                    children: (0, i.jsxs)('div', {
                        className: r()(A.toastContainerInner, m ? A.hovered : null),
                        children: [
                            (0, i.jsxs)('div', {
                                className: A.guildIconContainer,
                                children: [
                                    (0, i.jsx)(Z.Z, {
                                        guild: n,
                                        iconSize: 64
                                    }),
                                    (0, i.jsx)('div', {
                                        className: A.guildTagContainer,
                                        children: (0, i.jsx)(N.aG, {
                                            guildId: n.id,
                                            clanTag: null === (l = n.profile) || void 0 === l ? void 0 : l.tag,
                                            clanBadge: null === (a = n.profile) || void 0 === a ? void 0 : a.badge,
                                            className: A.guildClanTag
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                children: [
                                    (0, i.jsx)('div', {
                                        children: (0, i.jsx)(c.X6q, {
                                            variant: 'heading-md/bold',
                                            color: 'header-primary',
                                            children: O
                                        })
                                    }),
                                    (0, i.jsx)('div', {
                                        children: (0, i.jsx)(c.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'header-secondary',
                                            children: D
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsx)('div', {
                                children: (0, i.jsx)(c.P3F, {
                                    className: A.toastButton,
                                    onClick: R,
                                    children: (0, i.jsx)(c.P$X, {
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
function P(e) {
    let {} = e,
        t = (0, d.e7)([g.Z], () => g.Z.getGuildId()),
        n = (0, b.h)(t),
        a = (0, d.e7)([f.Z], () => f.Z.getGuild(t), [t]),
        [r, s] = l.useState(!1),
        c = l.useRef(null);
    (0, u.ZP)(
        () => (
            n &&
                (c.current = window.setTimeout(() => {
                    s(!0),
                        C.default.track(T.rMx.DISMISSIBLE_CONTENT_SHOWN, {
                            type: o.C[o.C.ADOPT_CLAN_IDENTITY_NOTICE],
                            guild_id: null != t ? t : T.lds
                        });
                }, 2500)),
            () => {
                null != c.current && window.clearTimeout(c.current);
            }
        )
    );
    let h = l.useCallback(() => {
            s(!1), null != t && (0, v.SJ)(t);
        }, [, t]),
        p = l.useCallback(() => {
            s(!1), null != t && (0, m.Qd)(o.C.ADOPT_CLAN_IDENTITY_NOTICE, null != t ? t : T.lds, !0, S.L.DISMISS);
        }, [t]);
    return n && null != t && null != a
        ? (0, i.jsx)(y, {
              guild: a,
              onConfirm: h,
              onDismiss: p,
              showToast: r
          })
        : null;
}
