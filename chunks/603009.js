n.d(t, {
    Z: function () {
        return y;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(752877),
    o = n(704215),
    c = n(481060),
    d = n(442837),
    u = n(410030),
    h = n(607070),
    p = n(645041),
    m = n(430824),
    f = n(914010),
    g = n(594174),
    C = n(626135),
    x = n(645896),
    v = n(905362),
    _ = n(603368),
    I = n(353093),
    E = n(940725),
    b = n(114487),
    Z = n(979264),
    N = n(981631),
    S = n(921944),
    T = n(388032),
    j = n(431972);
function A(e) {
    var t;
    let { guild: n, showToast: r, onConfirm: o, onDismiss: p } = e,
        [m, f] = l.useState(!1),
        C = l.useRef(null),
        v = (0, x.Cc)(n.id),
        E = (0, u.ZP)(),
        N = (0, d.e7)([h.Z], () => h.Z.useReducedMotion),
        S = (0, _.nP)(null == v ? void 0 : null === (t = v.branding) || void 0 === t ? void 0 : t.primaryColor, [c.tokens.colors.BG_BRAND, 0.5]),
        A = c.tokens.colors.BG_SURFACE_OVERLAY.resolve({
            theme: E,
            saturation: 1
        }).hex(),
        y = (0, _.nj)(S, A, 'top left', 0.3, '30%'),
        P = (0, d.e7)(
            [g.default],
            () => {
                var e;
                return null === (e = g.default.getCurrentUser()) || void 0 === e ? void 0 : e.primaryGuild;
            },
            []
        );
    l.useLayoutEffect(() => {
        var e;
        if (null == C.current) return;
        let t = null === (e = C.current) || void 0 === e ? void 0 : e.parentNode;
        return (
            null != t && (t.style.zIndex = '1003'),
            () => {
                null != t && (t.style.zIndex = '1002');
            }
        );
    }, []);
    let M = l.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), p();
            },
            [p]
        ),
        R = l.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), o();
            },
            [o]
        ),
        L = (0, c.useTransition)(
            r,
            {
                from: {
                    transform: N ? 'translateY(0)' : 'translateY(16px)',
                    opacity: 0,
                    pointerEvents: 'none'
                },
                enter: {
                    transform: 'translateY(0)',
                    opacity: 1,
                    pointerEvents: 'all'
                },
                leave: {
                    transform: N ? 'translateY(0)' : 'translateY(16px)',
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
        O = k ? T.intl.formatToPlainString(T.t.qFqINz, { guildName: n.name }) : T.intl.formatToPlainString(T.t.bFwASk, { guildName: n.name }),
        D = k ? T.intl.string(T.t.eA1ymp) : T.intl.string(T.t.MF0Ntb),
        w = k ? T.intl.formatToPlainString(T.t['60PXOz'], { guildName: n.name }) : T.intl.formatToPlainString(T.t.i27ioq, { guildName: n.name });
    return L((e, t) => {
        var l, r;
        return (
            t &&
            (0, i.jsx)(s.animated.div, {
                onMouseEnter: () => f(!0),
                onMouseLeave: () => f(!1),
                className: a()(j.wrapper),
                style: {
                    ...e,
                    ...y
                },
                ref: C,
                children: (0, i.jsx)(c.ClickableContainer, {
                    'aria-label': w,
                    onClick: R,
                    children: (0, i.jsxs)('div', {
                        className: a()(j.toastContainerInner, m ? j.hovered : null),
                        children: [
                            (0, i.jsxs)('div', {
                                className: j.guildIconContainer,
                                children: [
                                    (0, i.jsx)(b.Z, {
                                        guild: n,
                                        iconSize: 64
                                    }),
                                    (0, i.jsx)('div', {
                                        className: j.guildTagContainer,
                                        children: (0, i.jsx)(Z.aG, {
                                            guildId: n.id,
                                            clanTag: null === (l = n.profile) || void 0 === l ? void 0 : l.tag,
                                            clanBadge: null === (r = n.profile) || void 0 === r ? void 0 : r.badge,
                                            className: j.guildClanTag
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                children: [
                                    (0, i.jsx)('div', {
                                        children: (0, i.jsx)(c.Heading, {
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
                                children: (0, i.jsx)(c.Clickable, {
                                    className: j.toastButton,
                                    onClick: M,
                                    children: (0, i.jsx)(c.XSmallBoldIcon, {
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
function y(e) {
    let {} = e,
        t = (0, d.e7)([f.Z], () => f.Z.getGuildId()),
        n = (0, E.h)(t),
        r = (0, d.e7)([m.Z], () => m.Z.getGuild(t), [t]),
        [a, s] = l.useState(!1),
        c = l.useRef(null);
    l.useEffect(
        () => (
            n &&
                (c.current = window.setTimeout(() => {
                    s(!0),
                        C.default.track(N.rMx.DISMISSIBLE_CONTENT_SHOWN, {
                            type: o.C[o.C.ADOPT_CLAN_IDENTITY_NOTICE],
                            guild_id: null != t ? t : N.lds
                        });
                }, 2500)),
            () => {
                null != c.current && window.clearTimeout(c.current);
            }
        ),
        []
    );
    let u = l.useCallback(() => {
            if ((s(!1), null != t)) (0, v.SJ)(t);
        }, [, t]),
        h = l.useCallback(() => {
            if ((s(!1), null != t)) (0, p.Qd)(o.C.ADOPT_CLAN_IDENTITY_NOTICE, null != t ? t : N.lds, !0, S.L.DISMISS);
        }, [t]);
    return n && null != t && null != r
        ? (0, i.jsx)(A, {
              guild: r,
              onConfirm: u,
              onDismiss: h,
              showToast: a
          })
        : null;
}
