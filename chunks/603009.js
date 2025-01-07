n.d(t, {
    Z: function () {
        return P;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(666912),
    o = n(704215),
    c = n(481060),
    d = n(442837),
    u = n(493773),
    h = n(410030),
    p = n(607070),
    m = n(645041),
    f = n(430824),
    g = n(914010),
    C = n(594174),
    x = n(626135),
    v = n(645896),
    _ = n(905362),
    I = n(603368),
    E = n(353093),
    b = n(940725),
    Z = n(114487),
    N = n(979264),
    S = n(981631),
    T = n(921944),
    j = n(388032),
    A = n(431972);
function y(e) {
    var t;
    let { guild: n, showToast: r, onConfirm: o, onDismiss: u } = e,
        [m, f] = l.useState(!1),
        g = l.useRef(null),
        x = (0, v.Cc)(n.id),
        _ = (0, h.ZP)(),
        b = (0, d.e7)([p.Z], () => p.Z.useReducedMotion),
        S = (0, I.nP)(null == x ? void 0 : null === (t = x.branding) || void 0 === t ? void 0 : t.primaryColor, [c.tokens.colors.BG_BRAND, 0.5]),
        T = c.tokens.colors.BG_SURFACE_OVERLAY.resolve({
            theme: _,
            saturation: 1
        }).hex(),
        y = (0, I.nj)(S, T, 'top left', 0.3, '30%'),
        P = (0, d.e7)(
            [C.default],
            () => {
                var e;
                return null === (e = C.default.getCurrentUser()) || void 0 === e ? void 0 : e.primaryGuild;
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
    let M = l.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), u();
            },
            [u]
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
        k = (0, E.Zp)(n, P),
        O = k ? j.intl.formatToPlainString(j.t.qFqINz, { guildName: n.name }) : j.intl.formatToPlainString(j.t.bFwASk, { guildName: n.name }),
        D = k ? j.intl.string(j.t.eA1ymp) : j.intl.string(j.t.MF0Ntb),
        w = k ? j.intl.formatToPlainString(j.t['60PXOz'], { guildName: n.name }) : j.intl.formatToPlainString(j.t.i27ioq, { guildName: n.name });
    return L((e, t) => {
        var l, r;
        return (
            t &&
            (0, i.jsx)(s.animated.div, {
                onMouseEnter: () => f(!0),
                onMouseLeave: () => f(!1),
                className: a()(A.wrapper),
                style: {
                    ...e,
                    ...y
                },
                ref: g,
                children: (0, i.jsx)(c.ClickableContainer, {
                    'aria-label': w,
                    onClick: R,
                    children: (0, i.jsxs)('div', {
                        className: a()(A.toastContainerInner, m ? A.hovered : null),
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
                                            clanBadge: null === (r = n.profile) || void 0 === r ? void 0 : r.badge,
                                            className: A.guildClanTag
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
                                    className: A.toastButton,
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
function P(e) {
    let {} = e,
        t = (0, d.e7)([g.Z], () => g.Z.getGuildId()),
        n = (0, b.h)(t),
        r = (0, d.e7)([f.Z], () => f.Z.getGuild(t), [t]),
        [a, s] = l.useState(!1),
        c = l.useRef(null);
    (0, u.Z)(
        () => (
            n &&
                (c.current = window.setTimeout(() => {
                    s(!0),
                        x.default.track(S.rMx.DISMISSIBLE_CONTENT_SHOWN, {
                            type: o.C[o.C.ADOPT_CLAN_IDENTITY_NOTICE],
                            guild_id: null != t ? t : S.lds
                        });
                }, 2500)),
            () => {
                null != c.current && window.clearTimeout(c.current);
            }
        )
    );
    let h = l.useCallback(() => {
            if ((s(!1), null != t)) (0, _.SJ)(t);
        }, [, t]),
        p = l.useCallback(() => {
            if ((s(!1), null != t)) (0, m.Qd)(o.C.ADOPT_CLAN_IDENTITY_NOTICE, null != t ? t : S.lds, !0, T.L.DISMISS);
        }, [t]);
    return n && null != t && null != r
        ? (0, i.jsx)(y, {
              guild: r,
              onConfirm: h,
              onDismiss: p,
              showToast: a
          })
        : null;
}
