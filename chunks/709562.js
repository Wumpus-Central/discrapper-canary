"use strict";
n.d(t, { A: () => A, l: () => y });
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
    g = n(35204);
function A(e) {
    let {
            label: t,
            onClick: n,
            onKeyDown: i,
            onMouseEnter: s,
            onMouseLeave: o,
            onContextMenu: d,
            className: _,
            wrapperClassName: f,
            iconClassName: p,
            iconColor: m = "currentColor",
            iconComponent: E,
            themeable: A = !1,
            disabled: T = !1,
            isActive: S = !1,
            tooltipPosition: y = "top",
            shouldShowTooltip: v = !0,
            forceTooltipOpen: N = !1,
            buttonRef: C,
            grow: b,
            "aria-label": R,
            look: O,
            buttonText: D,
            size: L,
            color: w,
        } = e,
        x = (0, u.O)(t);
    return (0, r.jsx)(h.A, {
        children: (0, r.jsx)(l.m_, {
            position: y,
            __unsupportedReactNodeAsText: t,
            ariaHidden: !0,
            shouldShow: v,
            forceOpen: N,
            children: (0, r.jsxs)(c.$n, {
                "data-migration-pending": !0,
                look: O ?? c.$n.Looks.BLANK,
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
                onMouseLeave: o,
                onContextMenu: d ?? void 0,
                onFocus: (e) => {
                    s?.(e);
                },
                onBlur: o,
                disabled: T,
                innerClassName: a()(g.NL, { [g.eq]: null != D }),
                className: a()({ [g.vu]: S }, _),
                wrapperClassName: f,
                buttonRef: C,
                grow: b,
                "aria-label": R ?? x,
                children: [
                    (0, r.jsx)(I, {
                        iconComponent: E,
                        iconClassName: p,
                        themeable: A,
                        isActive: S,
                        iconColor: m,
                        buttonText: D,
                    }),
                    D,
                ],
            }),
        }),
    });
}
function I(e) {
    let { iconComponent: t, iconClassName: n, themeable: s, isActive: l, iconColor: u, buttonText: c } = e,
        d = i.useMemo(
            () => ({ size: o.E.md, className: a()(n, { [g.pd]: null == c, [g.IW]: s, [g.vu]: l }) }),
            [n, s, l, c],
        );
    return "function" == typeof t ? (0, r.jsx)(t, { ...d, color: u }) : (0, r.jsx)("div", { ...d, children: t });
}
let T = {
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
    S = {
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
function y(e) {
    let {
            ref: t,
            color: n,
            caretColor: s,
            isActive: o = !1,
            className: l,
            iconClassName: u,
            onPopoutClick: c,
            popoutOpen: I = !1,
            popoutDisabled: y = !1,
            isTrayButton: v,
            applyStyles: N = !1,
            ...C
        } = e,
        b = (0, m.A)(n, o),
        R = s ?? b,
        O = (0, _.A)("(max-width: 456px)"),
        D = i.useRef(null),
        L = i.useContext(p.vG);
    i.useEffect(() => {
        null != D.current && (L ? D.current.pause() : D.current.play());
    }, [L]);
    let w = C.onContextMenu ?? c,
        x = null == c && !v,
        M = null != c && !v,
        P = v && null != c && !O,
        k = (0, r.jsx)(A, {
            ...C,
            grow: !1,
            onContextMenu: w,
            iconClassName: a()(u, g.LF, x && g.Ns),
            className: a()(O || N ? l : null, o && g.vu, g.wh, S[b], x && g.Sy, P && g.hA),
        });
    return O
        ? k
        : (0, r.jsxs)("div", {
              ref: t,
              className: a()(g.re, I && g.q6, l, M && [g.TD, T[b]]),
              children: [
                  k,
                  null != c
                      ? (0, r.jsx)(h.A, {
                            children: (0, r.jsx)(d.DUT, {
                                "aria-label": E.intl.string(E.t.PdRCRg),
                                onClick: y ? void 0 : c,
                                className: a()(g.cd, v && g.Ml, S[R], I && [g.q6, g.vu], y && g.r9),
                                children: (0, r.jsx)(f.A, { className: a()(g.gG, I && g.ho, y && g.r9) }),
                            }),
                        })
                      : null,
              ],
          });
}
