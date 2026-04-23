"use strict";
n.d(t, { A: () => A, l: () => S });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(319354),
    l = n(990078),
    u = n(614820),
    c = n(862482),
    d = n(939249),
    _ = n(241524),
    f = n(147925),
    p = n(461782),
    h = n(447404),
    E = n(722776),
    m = n(985018),
    g = n(329333);
function A(e) {
    let {
            label: t,
            onClick: n,
            onKeyDown: i,
            onMouseEnter: s,
            onMouseLeave: d,
            onContextMenu: _,
            className: f,
            wrapperClassName: p,
            iconClassName: E,
            iconColor: m = "currentColor",
            iconComponent: A,
            themeable: I = !1,
            disabled: T = !1,
            isActive: S = !1,
            tooltipPosition: y = "top",
            shouldShowTooltip: N = !0,
            forceTooltipOpen: v = !1,
            buttonRef: C,
            grow: O,
            "aria-label": R,
            look: b,
            buttonText: D,
            size: L,
            color: w,
        } = e,
        M = (0, u.O)(t);
    return (0, r.jsx)(h.A, {
        children: (0, r.jsx)(l.m, {
            position: y,
            __unsupportedReactNodeAsText: t,
            ariaHidden: !0,
            shouldShow: N,
            forceOpen: v,
            children: (0, r.jsxs)(c.$n, {
                "data-migration-pending": !0,
                look: b ?? c.$n.Looks.BLANK,
                size: L ?? c.$n.Sizes.NONE,
                color: w,
                onKeyDown: (e) => {
                    i?.(e);
                },
                onMouseDown: (e) => {
                    e.preventDefault();
                },
                onClick: n,
                onMouseEnter: s,
                onMouseLeave: d,
                onContextMenu: _ ?? void 0,
                onFocus: (e) => {
                    s?.(e);
                },
                onBlur: d,
                disabled: T,
                innerClassName: a()(g.NL, { [g.eq]: null != D }),
                className: a()({ [g.vu]: S }, f),
                wrapperClassName: p,
                buttonRef: C,
                grow: O,
                "aria-label": R ?? M,
                children: [
                    (0, r.jsx)(A, {
                        size: o.E.md,
                        className: a()(E, { [g.pd]: null == D, [g.IW]: I, [g.vu]: S }),
                        color: m,
                    }),
                    D,
                ],
            }),
        }),
    });
}
let I = {
        disconnect: g.Zf,
        join: g.fj,
        red: g.wv,
        white: g.ON,
        green: g.wL,
        yellow: g.D9,
        primaryDark: g.Zq,
        primaryLight: g.Zq,
        activeLight: g.H3,
        premiumGradient: g.ck,
    },
    T = {
        disconnect: g.Zf,
        join: g.fj,
        red: g.Xr,
        white: g.ON,
        green: g.Vu,
        yellow: g.D9,
        primaryDark: g.Zq,
        primaryLight: g.Zq,
        activeLight: g.H3,
        premiumGradient: g.ck,
    };
function S(e) {
    let {
            ref: t,
            color: n,
            caretColor: s,
            caretAriaLabel: o,
            isActive: l = !1,
            className: u,
            iconClassName: c,
            onPopoutClick: S,
            popoutOpen: y = !1,
            popoutDisabled: N = !1,
            isTrayButton: v,
            applyStyles: C = !1,
            ...O
        } = e,
        R = (0, E.A)(n, l),
        b = (0, _.A)("(max-width: 456px)"),
        D = i.useRef(null),
        L = i.useContext(p.vG);
    i.useEffect(() => {
        null != D.current && (L ? D.current.pause() : D.current.play());
    }, [L]);
    let w = O.onContextMenu ?? S,
        M = null == S && !v,
        P = null != S && !v,
        x = (0, r.jsx)(A, {
            ...O,
            grow: !1,
            onContextMenu: w,
            iconClassName: a()(c, g.LF, M && g.Ns),
            className: a()(b || C ? u : null, l && g.vu, g.wh, T[R], M && g.Sy, v && null != S && !b && g.hA),
        });
    return b
        ? x
        : (0, r.jsxs)("div", {
              ref: t,
              className: a()(g.re, y && g.q6, u, P && [g.TD, I[R]]),
              children: [
                  x,
                  null != S
                      ? (0, r.jsx)(h.A, {
                            children: (0, r.jsx)(d.D, {
                                "aria-label": o ?? m.intl.string(m.t.PdRCRg),
                                onClick: N ? void 0 : S,
                                className: a()(g.cd, v && g.Ml, T[s ?? R], y && [g.q6, g.vu], N && g.r9),
                                children: (0, r.jsx)(f.A, { className: a()(g.gG, y && g.ho, N && g.r9) }),
                            }),
                        })
                      : null,
              ],
          });
}
