n.d(t, { A: () => O, l: () => C });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    _ = n(319354),
    l = n(990078),
    o = n(614820),
    E = n(862482),
    d = n(939249),
    c = n(241524),
    u = n(147925),
    I = n(461782),
    A = n(447404),
    T = n(722776),
    S = n(985018),
    N = n(329333);
function O(e) {
    let {
            label: t,
            onClick: n,
            onKeyDown: r,
            onMouseEnter: a,
            onMouseLeave: d,
            onContextMenu: c,
            className: u,
            wrapperClassName: I,
            iconClassName: T,
            iconColor: S = "currentColor",
            iconComponent: O,
            themeable: R = !1,
            disabled: f = !1,
            isActive: C = !1,
            tooltipPosition: p = "top",
            shouldShowTooltip: m = !0,
            forceTooltipOpen: L = !1,
            buttonRef: D,
            grow: h,
            "aria-label": g,
            look: b,
            buttonText: U,
            size: P,
            color: M,
        } = e,
        y = (0, o.O)(t);
    return (0, i.jsx)(A.A, {
        children: (0, i.jsx)(l.m, {
            position: p,
            __unsupportedReactNodeAsText: t,
            ariaHidden: !0,
            shouldShow: m,
            forceOpen: L,
            children: (0, i.jsxs)(E.$n, {
                "data-migration-pending": !0,
                look: b ?? E.$n.Looks.BLANK,
                size: P ?? E.$n.Sizes.NONE,
                color: M,
                onKeyDown: (e) => {
                    r?.(e);
                },
                onMouseDown: (e) => {
                    e.preventDefault();
                },
                onClick: n,
                onMouseEnter: a,
                onMouseLeave: d,
                onContextMenu: c ?? void 0,
                onFocus: (e) => {
                    a?.(e);
                },
                onBlur: d,
                disabled: f,
                innerClassName: s()(N.NL, { [N.eq]: null != U }),
                className: s()({ [N.vu]: C }, u),
                wrapperClassName: I,
                buttonRef: D,
                grow: h,
                "aria-label": g ?? y,
                children: [
                    (0, i.jsx)(O, {
                        size: _.E.md,
                        className: s()(T, { [N.pd]: null == U, [N.IW]: R, [N.vu]: C }),
                        color: S,
                    }),
                    U,
                ],
            }),
        }),
    });
}
let R = {
        disconnect: N.Zf,
        join: N.fj,
        red: N.wv,
        white: N.ON,
        green: N.wL,
        yellow: N.D9,
        primaryDark: N.Zq,
        primaryLight: N.Zq,
        activeLight: N.H3,
        premiumGradient: N.ck,
    },
    f = {
        disconnect: N.Zf,
        join: N.fj,
        red: N.Xr,
        white: N.ON,
        green: N.Vu,
        yellow: N.D9,
        primaryDark: N.Zq,
        primaryLight: N.Zq,
        activeLight: N.H3,
        premiumGradient: N.ck,
    };
function C(e) {
    let {
            ref: t,
            color: n,
            caretColor: a,
            caretAriaLabel: _,
            isActive: l = !1,
            className: o,
            iconClassName: E,
            onPopoutClick: C,
            popoutOpen: p = !1,
            popoutDisabled: m = !1,
            isTrayButton: L,
            applyStyles: D = !1,
            ...h
        } = e,
        g = (0, T.A)(n, l),
        b = (0, c.A)("(max-width: 456px)"),
        U = r.useRef(null),
        P = r.useContext(I.vG);
    r.useEffect(() => {
        null != U.current && (P ? U.current.pause() : U.current.play());
    }, [P]);
    let M = h.onContextMenu ?? C,
        y = null == C && !L,
        G = null != C && !L,
        v = (0, i.jsx)(O, {
            ...h,
            grow: !1,
            onContextMenu: M,
            iconClassName: s()(E, N.LF, y && N.Ns),
            className: s()(b || D ? o : null, l && N.vu, N.wh, f[g], y && N.Sy, L && null != C && !b && N.hA),
        });
    return b
        ? v
        : (0, i.jsxs)("div", {
              ref: t,
              className: s()(N.re, p && N.q6, o, G && [N.TD, R[g]]),
              children: [
                  v,
                  null != C
                      ? (0, i.jsx)(A.A, {
                            children: (0, i.jsx)(d.D, {
                                "aria-label": _ ?? S.intl.string(S.t.PdRCRg),
                                onClick: m ? void 0 : C,
                                className: s()(N.cd, L && N.Ml, f[a ?? g], p && [N.q6, N.vu], m && N.r9),
                                children: (0, i.jsx)(u.A, { className: s()(N.gG, p && N.ho, m && N.r9) }),
                            }),
                        })
                      : null,
              ],
          });
}
