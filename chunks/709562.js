"use strict";
n.d(t, { A: () => A, l: () => S });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(319354),
    l = n(435371),
    u = n(614820),
    c = n(421380),
    d = n(397927),
    _ = n(241524),
    f = n(147925),
    p = n(461782),
    h = n(447404),
    m = n(722776),
    E = n(985018),
    g = n(874802);
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
            iconClassName: m,
            iconColor: E = "currentColor",
            iconComponent: A,
            themeable: I = !1,
            disabled: T = !1,
            isActive: S = !1,
            tooltipPosition: y = "top",
            shouldShowTooltip: v = !0,
            forceTooltipOpen: N = !1,
            buttonRef: C,
            grow: R,
            "aria-label": O,
            look: b,
            buttonText: D,
            size: L,
            color: w,
        } = e,
        M = (0, u.O)(t);
    return (0, r.jsx)(h.A, {
        children: (0, r.jsx)(l.m_, {
            position: y,
            __unsupportedReactNodeAsText: t,
            ariaHidden: !0,
            shouldShow: v,
            forceOpen: N,
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
                grow: R,
                "aria-label": O ?? M,
                children: [
                    (0, r.jsx)(A, {
                        size: o.E.md,
                        className: a()(m, { [g.pd]: null == D, [g.IW]: I, [g.vu]: S }),
                        color: E,
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
            isActive: o = !1,
            className: l,
            iconClassName: u,
            onPopoutClick: c,
            popoutOpen: S = !1,
            popoutDisabled: y = !1,
            isTrayButton: v,
            applyStyles: N = !1,
            ...C
        } = e,
        R = (0, m.A)(n, o),
        O = s ?? R,
        b = (0, _.A)("(max-width: 456px)"),
        D = i.useRef(null),
        L = i.useContext(p.vG);
    i.useEffect(() => {
        null != D.current && (L ? D.current.pause() : D.current.play());
    }, [L]);
    let w = C.onContextMenu ?? c,
        M = null == c && !v,
        x = null != c && !v,
        P = v && null != c && !b,
        k = (0, r.jsx)(A, {
            ...C,
            grow: !1,
            onContextMenu: w,
            iconClassName: a()(u, g.LF, M && g.Ns),
            className: a()(b || N ? l : null, o && g.vu, g.wh, T[R], M && g.Sy, P && g.hA),
        });
    return b
        ? k
        : (0, r.jsxs)("div", {
              ref: t,
              className: a()(g.re, S && g.q6, l, x && [g.TD, I[R]]),
              children: [
                  k,
                  null != c
                      ? (0, r.jsx)(h.A, {
                            children: (0, r.jsx)(d.DUT, {
                                "aria-label": E.intl.string(E.t.PdRCRg),
                                onClick: y ? void 0 : c,
                                className: a()(g.cd, v && g.Ml, T[O], S && [g.q6, g.vu], y && g.r9),
                                children: (0, r.jsx)(f.A, { className: a()(g.gG, S && g.ho, y && g.r9) }),
                            }),
                        })
                      : null,
              ],
          });
}
