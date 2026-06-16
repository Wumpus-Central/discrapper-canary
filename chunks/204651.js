"use strict";
n.d(t, { l: () => R, A: () => C });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(319354),
    l = n(990078),
    u = n(614820),
    c = n(862482),
    d = n(939249),
    _ = n(241524),
    h = n(147925),
    f = n(461782),
    p = n(447404),
    E = n(17928),
    m = n(462887),
    g = n(736653),
    A = n(313961),
    I = n(309010),
    T = n(652215),
    S = n(375708),
    y = n(329333);
function C(e) {
    let {
            label: t,
            onClick: n,
            onKeyDown: r,
            onMouseEnter: s,
            onMouseLeave: d,
            onContextMenu: _,
            className: h,
            wrapperClassName: f,
            iconClassName: E,
            iconColor: m = "currentColor",
            iconComponent: g,
            themeable: A = !1,
            disabled: I = !1,
            isActive: T = !1,
            tooltipPosition: S = "top",
            shouldShowTooltip: C = !0,
            forceTooltipOpen: N = !1,
            buttonRef: v,
            grow: R,
            "aria-label": O,
            look: b,
            buttonText: D,
            size: L,
            color: w,
        } = e,
        M = (0, u.O)(t);
    return (0, i.jsx)(p.A, {
        children: (0, i.jsx)(l.m, {
            position: S,
            __unsupportedReactNodeAsText: t,
            ariaHidden: !0,
            shouldShow: C,
            forceOpen: N,
            children: (0, i.jsxs)(c.$n, {
                "data-migration-pending": !0,
                look: b ?? c.$n.Looks.BLANK,
                size: L ?? c.$n.Sizes.NONE,
                color: w,
                onKeyDown: (e) => {
                    r?.(e);
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
                disabled: I,
                innerClassName: a()(y.NL, { [y.eq]: null != D }),
                className: a()({ [y.vu]: T }, h),
                wrapperClassName: f,
                buttonRef: v,
                grow: R,
                "aria-label": O ?? M,
                children: [
                    (0, i.jsx)(g, {
                        size: o.E.md,
                        className: a()(E, { [y.pd]: null == D, [y.IW]: A, [y.vu]: T }),
                        color: m,
                    }),
                    D,
                ],
            }),
        }),
    });
}
let N = {
        disconnect: y.Zf,
        join: y.fj,
        red: y.wv,
        white: y.ON,
        green: y.wL,
        yellow: y.D9,
        primaryDark: y.Zq,
        primaryLight: y.Zq,
        activeLight: y.H3,
        premiumGradient: y.ck,
    },
    v = {
        disconnect: y.Zf,
        join: y.fj,
        red: y.Xr,
        white: y.ON,
        green: y.Vu,
        yellow: y.D9,
        primaryDark: y.Zq,
        primaryLight: y.Zq,
        activeLight: y.H3,
        premiumGradient: y.ck,
    };
function R(e) {
    let t,
        n,
        s,
        {
            ref: o,
            color: l,
            caretColor: u,
            caretAriaLabel: c,
            isActive: R = !1,
            className: O,
            iconClassName: b,
            onPopoutClick: D,
            popoutOpen: L = !1,
            popoutDisabled: w = !1,
            isTrayButton: M,
            applyStyles: P = !1,
            ...x
        } = e,
        k =
            ((t = (0, E.bG)([I.A], () => I.A.getVoiceChannelId())),
            (n = (0, E.bG)([A.A], () => (null != t ? A.A.getMode(t) : null))),
            (s = (0, g.Ay)()),
            null != l
                ? l
                : n === T._Of.VOICE && (0, m.q)(s)
                  ? R
                      ? "activeLight"
                      : "primaryLight"
                  : R
                    ? "white"
                    : "primaryDark"),
        U = (0, _.A)("(max-width: 456px)"),
        G = r.useRef(null),
        F = r.useContext(f.vG);
    r.useEffect(() => {
        null != G.current && (F ? G.current.pause() : G.current.play());
    }, [F]);
    let V = x.onContextMenu ?? D,
        B = null == D && !M,
        j = null != D && !M,
        H = (0, i.jsx)(C, {
            ...x,
            grow: !1,
            onContextMenu: V,
            iconClassName: a()(b, y.LF, B && y.Ns),
            className: a()(U || P ? O : null, R && y.vu, y.wh, v[k], B && y.Sy, M && null != D && !U && y.hA),
        });
    return U
        ? H
        : (0, i.jsxs)("div", {
              ref: o,
              className: a()(y.re, L && y.q6, O, j && [y.TD, N[k]]),
              children: [
                  H,
                  null != D
                      ? (0, i.jsx)(p.A, {
                            children: (0, i.jsx)(d.D, {
                                "aria-label": c ?? S.intl.string(S.t.PdRCRg),
                                onClick: w ? void 0 : D,
                                className: a()(y.cd, M && y.Ml, v[u ?? k], L && [y.q6, y.vu], w && y.r9),
                                children: (0, i.jsx)(h.A, { className: a()(y.gG, L && y.ho, w && y.r9) }),
                            }),
                        })
                      : null,
              ],
          });
}
