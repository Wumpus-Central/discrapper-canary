"use strict";
n.d(t, { l: () => L, A: () => C });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(319354),
    o = n(614820),
    d = n(862482),
    c = n(866665),
    u = n(939249),
    _ = n(241524),
    E = n(147925),
    A = n(461782),
    h = n(447404),
    I = n(17928),
    f = n(462887),
    p = n(736653),
    T = n(313961),
    m = n(309010),
    g = n(652215),
    S = n(375708),
    N = n(329333);
function C(e) {
    let {
            label: t,
            onClick: n,
            onKeyDown: r,
            onMouseEnter: a,
            onMouseLeave: u,
            onContextMenu: _,
            className: E,
            wrapperClassName: A,
            iconClassName: I,
            iconColor: f = "currentColor",
            iconComponent: p,
            themeable: T = !1,
            disabled: m = !1,
            isActive: g = !1,
            tooltipPosition: S = "top",
            shouldShowTooltip: C = !0,
            forceTooltipOpen: R = !1,
            buttonRef: O,
            grow: L,
            "aria-label": y,
            look: D,
            buttonText: v,
            size: b,
            color: M,
        } = e,
        P = (0, o.O)(t);
    return (0, i.jsx)(h.A, {
        children: (0, i.jsx)(c.m, {
            position: S,
            __unsupportedReactNodeAsText: t,
            ariaHidden: !0,
            shouldShow: C,
            forceOpen: R,
            children: (0, i.jsxs)(d.$n, {
                "data-migration-pending": !0,
                look: D ?? d.$n.Looks.BLANK,
                size: b ?? d.$n.Sizes.NONE,
                color: M,
                onKeyDown: (e) => {
                    r?.(e);
                },
                onMouseDown: (e) => {
                    e.preventDefault();
                },
                onClick: n,
                onMouseEnter: a,
                onMouseLeave: u,
                onContextMenu: _ ?? void 0,
                onFocus: (e) => {
                    a?.(e);
                },
                onBlur: u,
                disabled: m,
                innerClassName: s()(N.NL, { [N.eq]: null != v }),
                className: s()({ [N.vu]: g }, E),
                wrapperClassName: A,
                buttonRef: O,
                grow: L,
                "aria-label": y ?? P,
                children: [
                    (0, i.jsx)(p, {
                        size: l.E.md,
                        className: s()(I, { [N.pd]: null == v, [N.IW]: T, [N.vu]: g }),
                        color: f,
                    }),
                    v,
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
    O = {
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
function L(e) {
    let t,
        n,
        a,
        {
            ref: l,
            color: o,
            caretColor: d,
            caretAriaLabel: c,
            isActive: L = !1,
            className: y,
            iconClassName: D,
            onPopoutClick: v,
            popoutOpen: b = !1,
            popoutDisabled: M = !1,
            isTrayButton: P,
            applyStyles: U = !1,
            ...w
        } = e,
        G =
            ((t = (0, I.bG)([m.Ay], () => m.Ay.getVoiceChannelId())),
            (n = (0, I.bG)([T.A], () => (null != t ? T.A.getMode(t) : null))),
            (a = (0, p.Ay)()),
            null != o
                ? o
                : n === g._Of.VOICE && (0, f.q)(a)
                  ? L
                      ? "activeLight"
                      : "primaryLight"
                  : L
                    ? "white"
                    : "primaryDark"),
        x = (0, _.A)("(max-width: 456px)"),
        k = r.useRef(null),
        F = r.useContext(A.vG);
    r.useEffect(() => {
        null != k.current && (F ? k.current.pause() : k.current.play());
    }, [F]);
    let V = w.onContextMenu ?? v,
        B = null == v && !P,
        H = null != v && !P,
        j = (0, i.jsx)(C, {
            ...w,
            grow: !1,
            onContextMenu: V,
            iconClassName: s()(D, N.LF, B && N.Ns),
            className: s()(x || U ? y : null, L && N.vu, N.wh, O[G], B && N.Sy, P && null != v && !x && N.hA),
        });
    return x
        ? j
        : (0, i.jsxs)("div", {
              ref: l,
              className: s()(N.re, b && N.q6, y, H && [N.TD, R[G]]),
              children: [
                  j,
                  null != v
                      ? (0, i.jsx)(h.A, {
                            children: (0, i.jsx)(u.D, {
                                "aria-label": c ?? S.intl.string(S.t.PdRCRg),
                                onClick: M ? void 0 : v,
                                className: s()(N.cd, P && N.Ml, O[d ?? G], b && [N.q6, N.vu], M && N.r9),
                                children: (0, i.jsx)(E.A, { className: s()(N.gG, b && N.ho, M && N.r9) }),
                            }),
                        })
                      : null,
              ],
          });
}
