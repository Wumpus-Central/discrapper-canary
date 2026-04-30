"use strict";
n.d(t, { l: () => O, A: () => y });
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
    f = n(147925),
    h = n(461782),
    p = n(447404),
    E = n(17928),
    m = n(462887),
    g = n(736653),
    A = n(313961),
    I = n(309010),
    T = n(652215),
    S = n(375708),
    N = n(329333);
function y(e) {
    let {
            label: t,
            onClick: n,
            onKeyDown: r,
            onMouseEnter: s,
            onMouseLeave: d,
            onContextMenu: _,
            className: f,
            wrapperClassName: h,
            iconClassName: E,
            iconColor: m = "currentColor",
            iconComponent: g,
            themeable: A = !1,
            disabled: I = !1,
            isActive: T = !1,
            tooltipPosition: S = "top",
            shouldShowTooltip: y = !0,
            forceTooltipOpen: C = !1,
            buttonRef: v,
            grow: O,
            "aria-label": R,
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
            shouldShow: y,
            forceOpen: C,
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
                innerClassName: a()(N.NL, { [N.eq]: null != D }),
                className: a()({ [N.vu]: T }, f),
                wrapperClassName: h,
                buttonRef: v,
                grow: O,
                "aria-label": R ?? M,
                children: [
                    (0, i.jsx)(g, {
                        size: o.E.md,
                        className: a()(E, { [N.pd]: null == D, [N.IW]: A, [N.vu]: T }),
                        color: m,
                    }),
                    D,
                ],
            }),
        }),
    });
}
let C = {
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
    v = {
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
function O(e) {
    let t,
        n,
        s,
        {
            ref: o,
            color: l,
            caretColor: u,
            caretAriaLabel: c,
            isActive: O = !1,
            className: R,
            iconClassName: b,
            onPopoutClick: D,
            popoutOpen: L = !1,
            popoutDisabled: w = !1,
            isTrayButton: M,
            applyStyles: P = !1,
            ...x
        } = e,
        U =
            ((t = (0, E.bG)([I.A], () => I.A.getVoiceChannelId())),
            (n = (0, E.bG)([A.A], () => (null != t ? A.A.getMode(t) : null))),
            (s = (0, g.Ay)()),
            null != l
                ? l
                : n === T._Of.VOICE && (0, m.q)(s)
                  ? O
                      ? "activeLight"
                      : "primaryLight"
                  : O
                    ? "white"
                    : "primaryDark"),
        k = (0, _.A)("(max-width: 456px)"),
        G = r.useRef(null),
        F = r.useContext(h.vG);
    r.useEffect(() => {
        null != G.current && (F ? G.current.pause() : G.current.play());
    }, [F]);
    let V = x.onContextMenu ?? D,
        B = null == D && !M,
        H = null != D && !M,
        j = (0, i.jsx)(y, {
            ...x,
            grow: !1,
            onContextMenu: V,
            iconClassName: a()(b, N.LF, B && N.Ns),
            className: a()(k || P ? R : null, O && N.vu, N.wh, v[U], B && N.Sy, M && null != D && !k && N.hA),
        });
    return k
        ? j
        : (0, i.jsxs)("div", {
              ref: o,
              className: a()(N.re, L && N.q6, R, H && [N.TD, C[U]]),
              children: [
                  j,
                  null != D
                      ? (0, i.jsx)(p.A, {
                            children: (0, i.jsx)(d.D, {
                                "aria-label": c ?? S.intl.string(S.t.PdRCRg),
                                onClick: w ? void 0 : D,
                                className: a()(N.cd, M && N.Ml, v[u ?? U], L && [N.q6, N.vu], w && N.r9),
                                children: (0, i.jsx)(f.A, { className: a()(N.gG, L && N.ho, w && N.r9) }),
                            }),
                        })
                      : null,
              ],
          });
}
