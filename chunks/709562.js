"use strict";
n.d(t, { A: () => A, l: () => y });
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
    p = n(461782),
    h = n(447404),
    m = n(722776),
    g = n(985018),
    E = n(35204);
function A(e) {
    let {
            label: t,
            onClick: n,
            onKeyDown: i,
            onMouseEnter: a,
            onMouseLeave: d,
            onContextMenu: _,
            className: f,
            wrapperClassName: p,
            iconClassName: m,
            iconColor: g = "currentColor",
            iconComponent: A,
            themeable: I = !1,
            disabled: T = !1,
            isActive: y = !1,
            tooltipPosition: S = "top",
            shouldShowTooltip: v = !0,
            forceTooltipOpen: C = !1,
            buttonRef: b,
            grow: N,
            "aria-label": R,
            look: O,
            buttonText: D,
            size: L,
            color: w,
        } = e,
        x = (0, u.O)(t);
    return (0, r.jsx)(h.A, {
        children: (0, r.jsx)(l.m_, {
            position: S,
            __unsupportedReactNodeAsText: t,
            ariaHidden: !0,
            shouldShow: v,
            forceOpen: C,
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
                onMouseEnter: a,
                onMouseLeave: d,
                onContextMenu: _ ?? void 0,
                onFocus: (e) => {
                    a?.(e);
                },
                onBlur: d,
                disabled: T,
                innerClassName: s()(E.NL, { [E.eq]: null != D }),
                className: s()({ [E.vu]: y }, f),
                wrapperClassName: p,
                buttonRef: b,
                grow: N,
                "aria-label": R ?? x,
                children: [
                    (0, r.jsx)(A, {
                        size: o.E.md,
                        className: s()(m, { [E.pd]: null == D, [E.IW]: I, [E.vu]: y }),
                        color: g,
                    }),
                    D,
                ],
            }),
        }),
    });
}
let I = {
        disconnect: E.Zf,
        join: E.fj,
        red: E.wv,
        white: E.ON,
        green: E.wL,
        yellow: E.D9,
        primaryDark: E.Zq,
        primaryLight: E.Zq,
        activeLight: E.H3,
        premiumGradient: E.ck,
    },
    T = {
        disconnect: E.Zf,
        join: E.fj,
        red: E.Xr,
        white: E.ON,
        green: E.Vu,
        yellow: E.D9,
        primaryDark: E.Zq,
        primaryLight: E.Zq,
        activeLight: E.H3,
        premiumGradient: E.ck,
    };
function y(e) {
    let {
            ref: t,
            color: n,
            caretColor: a,
            isActive: o = !1,
            className: l,
            iconClassName: u,
            onPopoutClick: c,
            popoutOpen: y = !1,
            popoutDisabled: S = !1,
            isTrayButton: v,
            applyStyles: C = !1,
            ...b
        } = e,
        N = (0, m.A)(n, o),
        R = a ?? N,
        O = (0, _.A)("(max-width: 456px)"),
        D = i.useRef(null),
        L = i.useContext(p.vG);
    i.useEffect(() => {
        null != D.current && (L ? D.current.pause() : D.current.play());
    }, [L]);
    let w = b.onContextMenu ?? c,
        x = null == c && !v,
        P = null != c && !v,
        M = v && null != c && !O,
        k = (0, r.jsx)(A, {
            ...b,
            grow: !1,
            onContextMenu: w,
            iconClassName: s()(u, E.LF, x && E.Ns),
            className: s()(O || C ? l : null, o && E.vu, E.wh, T[N], x && E.Sy, M && E.hA),
        });
    return O
        ? k
        : (0, r.jsxs)("div", {
              ref: t,
              className: s()(E.re, y && E.q6, l, P && [E.TD, I[N]]),
              children: [
                  k,
                  null != c
                      ? (0, r.jsx)(h.A, {
                            children: (0, r.jsx)(d.DUT, {
                                "aria-label": g.intl.string(g.t.PdRCRg),
                                onClick: S ? void 0 : c,
                                className: s()(E.cd, v && E.Ml, T[R], y && [E.q6, E.vu], S && E.r9),
                                children: (0, r.jsx)(f.A, { className: s()(E.gG, y && E.ho, S && E.r9) }),
                            }),
                        })
                      : null,
              ],
          });
}
