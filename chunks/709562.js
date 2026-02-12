"use strict";
n.d(t, { A: () => I, l: () => S });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(319354),
    l = n(435371),
    u = n(614820),
    c = n(421380),
    d = n(397927),
    _ = n(241524),
    f = n(147925),
    h = n(461782),
    p = n(447404),
    g = n(722776),
    E = n(985018),
    A = n(35204);
function I(e) {
    let {
            label: t,
            onClick: n,
            onKeyDown: i,
            onMouseEnter: a,
            onMouseLeave: d,
            onContextMenu: _,
            className: f,
            wrapperClassName: h,
            iconClassName: g,
            iconColor: E = "currentColor",
            iconComponent: I,
            themeable: T = !1,
            disabled: y = !1,
            isActive: S = !1,
            tooltipPosition: v = "top",
            shouldShowTooltip: C = !0,
            forceTooltipOpen: b = !1,
            buttonRef: N,
            grow: R,
            "aria-label": O,
            look: D,
            buttonText: L,
            size: w,
            color: x,
        } = e,
        P = (0, u.O)(t);
    return (0, r.jsx)(p.A, {
        children: (0, r.jsx)(l.m_, {
            position: v,
            __unsupportedReactNodeAsText: t,
            ariaHidden: !0,
            shouldShow: C,
            forceOpen: b,
            children: (0, r.jsxs)(c.$n, {
                "data-migration-pending": !0,
                look: D ?? c.$n.Looks.BLANK,
                size: w ?? c.$n.Sizes.NONE,
                color: x,
                onKeyDown: (e) => {
                    i?.(e);
                },
                onMouseDown: (e) => {
                    e.preventDefault();
                },
                onClick: n,
                onMouseEnter: a,
                onMouseLeave: d,
                onContextMenu: _ ?? void 0,
                onFocus: (e) => {
                    a?.(e);
                },
                onBlur: d,
                disabled: y,
                innerClassName: s()(A.NL, { [A.eq]: null != L }),
                className: s()({ [A.vu]: S }, f),
                wrapperClassName: h,
                buttonRef: N,
                grow: R,
                "aria-label": O ?? P,
                children: [
                    (0, r.jsx)(I, {
                        size: o.E.md,
                        className: s()(g, { [A.pd]: null == L, [A.IW]: T, [A.vu]: S }),
                        color: E,
                    }),
                    L,
                ],
            }),
        }),
    });
}
let T = {
        disconnect: A.Zf,
        join: A.fj,
        red: A.wv,
        white: A.ON,
        green: A.wL,
        yellow: A.D9,
        primaryDark: A.Zq,
        primaryLight: A.Zq,
        activeLight: A.H3,
        premiumGradient: A.ck,
    },
    y = {
        disconnect: A.Zf,
        join: A.fj,
        red: A.Xr,
        white: A.ON,
        green: A.Vu,
        yellow: A.D9,
        primaryDark: A.Zq,
        primaryLight: A.Zq,
        activeLight: A.H3,
        premiumGradient: A.ck,
    };
function S(e) {
    let {
            ref: t,
            color: n,
            caretColor: a,
            isActive: o = !1,
            className: l,
            iconClassName: u,
            onPopoutClick: c,
            popoutOpen: S = !1,
            popoutDisabled: v = !1,
            isTrayButton: C,
            applyStyles: b = !1,
            ...N
        } = e,
        R = (0, g.A)(n, o),
        O = a ?? R,
        D = (0, _.A)("(max-width: 456px)"),
        L = i.useRef(null),
        w = i.useContext(h.vG);
    i.useEffect(() => {
        null != L.current && (w ? L.current.pause() : L.current.play());
    }, [w]);
    let x = N.onContextMenu ?? c,
        P = null == c && !C,
        M = null != c && !C,
        k = C && null != c && !D,
        U = (0, r.jsx)(I, {
            ...N,
            grow: !1,
            onContextMenu: x,
            iconClassName: s()(u, A.LF, P && A.Ns),
            className: s()(D || b ? l : null, o && A.vu, A.wh, y[R], P && A.Sy, k && A.hA),
        });
    return D
        ? U
        : (0, r.jsxs)("div", {
              ref: t,
              className: s()(A.re, S && A.q6, l, M && [A.TD, T[R]]),
              children: [
                  U,
                  null != c
                      ? (0, r.jsx)(p.A, {
                            children: (0, r.jsx)(d.DUT, {
                                "aria-label": E.intl.string(E.t.PdRCRg),
                                onClick: v ? void 0 : c,
                                className: s()(A.cd, C && A.Ml, y[O], S && [A.q6, A.vu], v && A.r9),
                                children: (0, r.jsx)(f.A, { className: s()(A.gG, S && A.ho, v && A.r9) }),
                            }),
                        })
                      : null,
              ],
          });
}
