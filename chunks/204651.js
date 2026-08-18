"use strict";
n.d(t, { l: () => T, A: () => v });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(319354),
    o = n(614820),
    u = n(862482),
    c = n(866665),
    d = n(939249),
    h = n(241524),
    m = n(147925),
    f = n(461782),
    p = n(447404),
    g = n(17928),
    x = n(462887),
    A = n(736653),
    E = n(198052),
    C = n(309010),
    I = n(652215),
    y = n(375708),
    S = n(486205);
function v(e) {
    let {
            label: t,
            onClick: n,
            onKeyDown: i,
            onMouseEnter: s,
            onMouseLeave: d,
            onContextMenu: h,
            className: m,
            wrapperClassName: f,
            iconClassName: g,
            iconColor: x = "currentColor",
            iconComponent: A,
            themeable: E = !1,
            disabled: C = !1,
            isActive: I = !1,
            tooltipPosition: y = "top",
            shouldShowTooltip: v = !0,
            forceTooltipOpen: _ = !1,
            buttonRef: N,
            grow: T,
            "aria-label": j,
            look: b,
            buttonText: R,
            size: L,
            color: O,
        } = e,
        M = (0, o.O)(t);
    return (0, l.jsx)(p.A, {
        children: (0, l.jsx)(c.m, {
            position: y,
            __unsupportedReactNodeAsText: t,
            ariaHidden: !0,
            shouldShow: v,
            forceOpen: _,
            children: (0, l.jsxs)(u.$n, {
                "data-migration-pending": !0,
                look: b ?? u.$n.Looks.BLANK,
                size: L ?? u.$n.Sizes.NONE,
                color: O,
                onKeyDown: (e) => {
                    i?.(e);
                },
                onMouseDown: (e) => {
                    e.preventDefault();
                },
                onClick: n,
                onMouseEnter: s,
                onMouseLeave: d,
                onContextMenu: h ?? void 0,
                onFocus: (e) => {
                    s?.(e);
                },
                onBlur: d,
                disabled: C,
                innerClassName: r()(S.NL, { [S.eq]: null != R }),
                className: r()({ [S.vu]: I }, m),
                wrapperClassName: f,
                buttonRef: N,
                grow: T,
                "aria-label": j ?? M,
                children: [
                    (0, l.jsx)(A, {
                        size: a.E.md,
                        className: r()(g, { [S.pd]: null == R, [S.IW]: E, [S.vu]: I }),
                        color: x,
                    }),
                    R,
                ],
            }),
        }),
    });
}
let _ = {
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
    N = {
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
function T(e) {
    let t,
        n,
        s,
        {
            ref: a,
            color: o,
            caretColor: u,
            caretAriaLabel: c,
            isActive: T = !1,
            className: j,
            iconClassName: b,
            onPopoutClick: R,
            popoutOpen: L = !1,
            popoutDisabled: O = !1,
            isTrayButton: M,
            applyStyles: w = !1,
            ...k
        } = e,
        P =
            ((t = (0, g.bG)([C.Ay], () => C.Ay.getVoiceChannelId())),
            (n = (0, g.bG)([E.A], () => (null != t ? E.A.getMode(t) : null))),
            (s = (0, A.Ay)()),
            null != o
                ? o
                : n === I._Of.VOICE && (0, x.q)(s)
                  ? T
                      ? "activeLight"
                      : "primaryLight"
                  : T
                    ? "white"
                    : "primaryDark"),
        D = (0, h.A)("(max-width: 456px)"),
        U = i.useRef(null),
        G = i.useContext(f.vG);
    i.useEffect(() => {
        null != U.current && (G ? U.current.pause() : U.current.play());
    }, [G]);
    let V = k.onContextMenu ?? R,
        F = null == R && !M,
        H = null != R && !M,
        B = (0, l.jsx)(v, {
            ...k,
            grow: !1,
            onContextMenu: V,
            iconClassName: r()(b, S.LF, F && S.Ns),
            className: r()(D || w ? j : null, T && S.vu, S.wh, N[P], F && S.Sy, M && null != R && !D && S.hA),
        });
    return D
        ? B
        : (0, l.jsxs)("div", {
              ref: a,
              className: r()(S.re, L && S.q6, j, H && [S.TD, _[P]]),
              children: [
                  B,
                  null != R
                      ? (0, l.jsx)(p.A, {
                            children: (0, l.jsx)(d.D, {
                                "aria-label": c ?? y.intl.string(y.t.PdRCRg),
                                onClick: O ? void 0 : R,
                                className: r()(S.cd, M && S.Ml, N[u ?? P], L && [S.q6, S.vu], O && S.r9),
                                children: (0, l.jsx)(m.A, { className: r()(S.gG, L && S.ho, O && S.r9) }),
                            }),
                        })
                      : null,
              ],
          });
}
