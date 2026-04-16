"use strict";
n.d(t, { A: () => I, l: () => v });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(612324),
    l = n(319354),
    u = n(435371),
    c = n(614820),
    d = n(421380),
    _ = n(397927),
    f = n(241524),
    p = n(147925),
    h = n(461782),
    m = n(447404),
    E = n(722776),
    g = n(985018),
    A = n(329333);
function I(e) {
    let {
            label: t,
            onClick: n,
            onKeyDown: i,
            onMouseEnter: s,
            onMouseLeave: l,
            onContextMenu: _,
            className: f,
            wrapperClassName: p,
            iconClassName: h,
            iconColor: E = "currentColor",
            iconComponent: g,
            themeable: I = !1,
            disabled: S = !1,
            isActive: y = !1,
            tooltipPosition: v = "top",
            shouldShowTooltip: N = !0,
            forceTooltipOpen: C = !1,
            buttonRef: R,
            grow: O,
            "aria-label": b,
            look: D,
            buttonText: L,
            size: w,
            color: M,
            ref: P,
        } = e,
        x = (0, c.O)(t),
        k = (0, o.A)(R, P);
    return (0, r.jsx)(m.A, {
        children: (0, r.jsx)(u.m_, {
            position: v,
            __unsupportedReactNodeAsText: t,
            ariaHidden: !0,
            shouldShow: N,
            forceOpen: C,
            children: (0, r.jsxs)(d.$n, {
                "data-migration-pending": !0,
                look: D ?? d.$n.Looks.BLANK,
                size: w ?? d.$n.Sizes.NONE,
                color: M,
                onKeyDown: (e) => {
                    i?.(e);
                },
                onMouseDown: (e) => {
                    e.preventDefault();
                },
                onClick: n,
                onMouseEnter: s,
                onMouseLeave: l,
                onContextMenu: _ ?? void 0,
                onFocus: (e) => {
                    s?.(e);
                },
                onBlur: l,
                disabled: S,
                innerClassName: a()(A.NL, { [A.eq]: null != L }),
                className: a()({ [A.vu]: y }, f),
                wrapperClassName: p,
                buttonRef: k,
                grow: O,
                "aria-label": b ?? x,
                children: [
                    (0, r.jsx)(T, {
                        iconComponent: g,
                        iconClassName: h,
                        themeable: I,
                        isActive: y,
                        iconColor: E,
                        buttonText: L,
                    }),
                    L,
                ],
            }),
        }),
    });
}
function T(e) {
    let { iconComponent: t, iconClassName: n, themeable: s, isActive: o, iconColor: u, buttonText: c } = e,
        d = i.useMemo(
            () => ({ size: l.E.md, className: a()(n, { [A.pd]: null == c, [A.IW]: s, [A.vu]: o }) }),
            [n, s, o, c],
        );
    return "function" == typeof t ? (0, r.jsx)(t, { ...d, color: u }) : (0, r.jsx)("div", { ...d, children: t });
}
let S = {
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
function v(e) {
    let {
            ref: t,
            color: n,
            caretColor: s,
            caretAriaLabel: o,
            isActive: l = !1,
            className: u,
            iconClassName: c,
            onPopoutClick: d,
            popoutOpen: T = !1,
            popoutDisabled: v = !1,
            isTrayButton: N,
            applyStyles: C = !1,
            ...R
        } = e,
        O = (0, E.A)(n, l),
        b = s ?? O,
        D = (0, f.A)("(max-width: 456px)"),
        L = i.useRef(null),
        w = i.useContext(h.vG);
    i.useEffect(() => {
        null != L.current && (w ? L.current.pause() : L.current.play());
    }, [w]);
    let M = R.onContextMenu ?? d,
        P = null == d && !N,
        x = null != d && !N,
        k = N && null != d && !D,
        U = (0, r.jsx)(I, {
            ...R,
            ref: D ? t : void 0,
            grow: !1,
            onContextMenu: M,
            iconClassName: a()(c, A.LF, P && A.Ns),
            className: a()(D || C ? u : null, l && A.vu, A.wh, y[O], P && A.Sy, k && A.hA),
        });
    return D
        ? U
        : (0, r.jsxs)("div", {
              ref: t,
              className: a()(A.re, T && A.q6, u, x && [A.TD, S[O]]),
              children: [
                  U,
                  null != d
                      ? (0, r.jsx)(m.A, {
                            children: (0, r.jsx)(_.DUT, {
                                "aria-label": o ?? g.intl.string(g.t.PdRCRg),
                                onClick: v ? void 0 : d,
                                className: a()(A.cd, N && A.Ml, y[b], T && [A.q6, A.vu], v && A.r9),
                                children: (0, r.jsx)(p.A, { className: a()(A.gG, T && A.ho, v && A.r9) }),
                            }),
                        })
                      : null,
              ],
          });
}
