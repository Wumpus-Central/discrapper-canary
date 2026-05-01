n.d(t, { A: () => N, l: () => m });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    l = n(319354),
    o = n(990078),
    d = n(614820),
    c = n(862482),
    _ = n(939249),
    E = n(241524),
    u = n(147925),
    A = n(461782),
    I = n(447404),
    T = n(722776),
    h = n(985018),
    S = n(329333);
function N(e) {
    let {
            label: t,
            onClick: n,
            onKeyDown: a,
            onMouseEnter: r,
            onMouseLeave: _,
            onContextMenu: E,
            className: u,
            wrapperClassName: A,
            iconClassName: T,
            iconColor: h = "currentColor",
            iconComponent: N,
            themeable: f = !1,
            disabled: p = !1,
            isActive: m = !1,
            tooltipPosition: O = "top",
            shouldShowTooltip: C = !0,
            forceTooltipOpen: R = !1,
            buttonRef: g,
            grow: L,
            "aria-label": D,
            look: b,
            buttonText: M,
            size: P,
            color: U,
        } = e,
        v = (0, d.O)(t);
    return (0, i.jsx)(I.A, {
        children: (0, i.jsx)(o.m, {
            position: O,
            __unsupportedReactNodeAsText: t,
            ariaHidden: !0,
            shouldShow: C,
            forceOpen: R,
            children: (0, i.jsxs)(c.$n, {
                "data-migration-pending": !0,
                look: b ?? c.$n.Looks.BLANK,
                size: P ?? c.$n.Sizes.NONE,
                color: U,
                onKeyDown: (e) => {
                    a?.(e);
                },
                onMouseDown: (e) => {
                    e.preventDefault();
                },
                onClick: n,
                onMouseEnter: r,
                onMouseLeave: _,
                onContextMenu: E ?? void 0,
                onFocus: (e) => {
                    r?.(e);
                },
                onBlur: _,
                disabled: p,
                innerClassName: s()(S.NL, { [S.eq]: null != M }),
                className: s()({ [S.vu]: m }, u),
                wrapperClassName: A,
                buttonRef: g,
                grow: L,
                "aria-label": D ?? v,
                children: [
                    (0, i.jsx)(N, {
                        size: l.E.md,
                        className: s()(T, { [S.pd]: null == M, [S.IW]: f, [S.vu]: m }),
                        color: h,
                    }),
                    M,
                ],
            }),
        }),
    });
}
let f = {
        disconnect: S.Zf,
        join: S.fj,
        red: S.wv,
        white: S.ON,
        green: S.wL,
        yellow: S.D9,
        primaryDark: S.Zq,
        primaryLight: S.Zq,
        activeLight: S.H3,
        premiumGradient: S.ck,
    },
    p = {
        disconnect: S.Zf,
        join: S.fj,
        red: S.Xr,
        white: S.ON,
        green: S.Vu,
        yellow: S.D9,
        primaryDark: S.Zq,
        primaryLight: S.Zq,
        activeLight: S.H3,
        premiumGradient: S.ck,
    };
function m(e) {
    let {
            ref: t,
            color: n,
            caretColor: r,
            caretAriaLabel: l,
            isActive: o = !1,
            className: d,
            iconClassName: c,
            onPopoutClick: m,
            popoutOpen: O = !1,
            popoutDisabled: C = !1,
            isTrayButton: R,
            applyStyles: g = !1,
            ...L
        } = e,
        D = (0, T.A)(n, o),
        b = (0, E.A)("(max-width: 456px)"),
        M = a.useRef(null),
        P = a.useContext(A.vG);
    a.useEffect(() => {
        null != M.current && (P ? M.current.pause() : M.current.play());
    }, [P]);
    let U = L.onContextMenu ?? m,
        v = null == m && !R,
        y = null != m && !R,
        G = (0, i.jsx)(N, {
            ...L,
            grow: !1,
            onContextMenu: U,
            iconClassName: s()(c, S.LF, v && S.Ns),
            className: s()(b || g ? d : null, o && S.vu, S.wh, p[D], v && S.Sy, R && null != m && !b && S.hA),
        });
    return b
        ? G
        : (0, i.jsxs)("div", {
              ref: t,
              className: s()(S.re, O && S.q6, d, y && [S.TD, f[D]]),
              children: [
                  G,
                  null != m
                      ? (0, i.jsx)(I.A, {
                            children: (0, i.jsx)(_.D, {
                                "aria-label": l ?? h.intl.string(h.t.PdRCRg),
                                onClick: C ? void 0 : m,
                                className: s()(S.cd, R && S.Ml, p[r ?? D], O && [S.q6, S.vu], C && S.r9),
                                children: (0, i.jsx)(u.A, { className: s()(S.gG, O && S.ho, C && S.r9) }),
                            }),
                        })
                      : null,
              ],
          });
}
