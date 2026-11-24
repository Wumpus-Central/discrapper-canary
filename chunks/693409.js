l.d(n, { l: () => L, A: () => A });
var r = l(477900),
    t = l(582128),
    a = l(503698),
    u = l.n(a),
    o = l(319354),
    c = l(84571),
    s = l(862482),
    i = l(866665),
    d = l(939249),
    p = l(241524),
    h = l(147925),
    v = l(461782),
    m = l(447404),
    C = l(855986),
    f = l(462887),
    w = l(736653),
    k = l(628983),
    x = l(309010),
    g = l(652215),
    y = l(792996),
    N = l(609142);
function A(e) {
    let {
            label: n,
            focusProps: l,
            onClick: t,
            onKeyDown: a,
            onMouseEnter: d,
            onMouseLeave: p,
            onContextMenu: h,
            className: v,
            wrapperClassName: C,
            iconClassName: f,
            iconColor: w = "currentColor",
            iconComponent: k,
            themeable: x = !1,
            disabled: g = !1,
            isActive: y = !1,
            tooltipPosition: A = "top",
            shouldShowTooltip: b = !0,
            forceTooltipOpen: j = !1,
            buttonRef: L,
            grow: I,
            "aria-label": D,
            look: M,
            buttonText: E,
            size: q,
            color: G,
        } = e,
        O = (0, c.O)(n);
    return (0, r.jsx)(m.A, {
        children: (0, r.jsx)(i.m, {
            position: A,
            __unsupportedReactNodeAsText: n,
            ariaHidden: !0,
            shouldShow: b,
            forceOpen: j,
            children: (0, r.jsxs)(s.$n, {
                focusProps: l,
                "data-migration-pending": !0,
                look: M ?? s.$n.Looks.BLANK,
                size: q ?? s.$n.Sizes.NONE,
                color: G,
                onKeyDown: (e) => {
                    a?.(e);
                },
                onMouseDown: (e) => {
                    e.preventDefault();
                },
                onClick: t,
                onMouseEnter: d,
                onMouseLeave: p,
                onContextMenu: h ?? void 0,
                onFocus: (e) => {
                    d?.(e);
                },
                onBlur: p,
                disabled: g,
                innerClassName: u()(N.NL, { [N.eq]: null != E }),
                className: u()({ [N.vu]: y }, v),
                wrapperClassName: C,
                buttonRef: L,
                grow: I,
                "aria-label": D ?? O,
                children: [
                    (0, r.jsx)(k, {
                        size: o.E.md,
                        className: u()(f, { [N.pd]: null == E, [N.IW]: x, [N.vu]: y }),
                        color: w,
                    }),
                    E,
                ],
            }),
        }),
    });
}
let b = {
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
    j = {
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
    let n,
        l,
        a,
        {
            ref: o,
            color: c,
            caretColor: s,
            caretAriaLabel: i,
            isActive: L = !1,
            className: I,
            iconClassName: D,
            onPopoutClick: M,
            popoutOpen: E = !1,
            popoutDisabled: q = !1,
            isTrayButton: G,
            applyStyles: O = !1,
            ...R
        } = e,
        z =
            ((n = (0, C.bG)([x.Ay], () => x.Ay.getVoiceChannelId())),
            (l = (0, C.bG)([k.A], () => (null != n ? k.A.getMode(n) : null))),
            (a = (0, w.Ay)()),
            null != c
                ? c
                : l === g._Of.VOICE && (0, f.q)(a)
                  ? L
                      ? "activeLight"
                      : "primaryLight"
                  : L
                    ? "white"
                    : "primaryDark"),
        Z = (0, p.A)("(max-width: 456px)"),
        _ = t.useRef(null),
        P = t.useContext(v.vG);
    t.useEffect(() => {
        null != _.current && (P ? _.current.pause() : _.current.play());
    }, [P]);
    let S = R.onContextMenu ?? M,
        F = null == M && !G,
        B = null != M && !G,
        H = (0, r.jsx)(A, {
            ...R,
            grow: !1,
            onContextMenu: S,
            iconClassName: u()(D, N.LF, F && N.Ns),
            className: u()(Z || O ? I : null, L && N.vu, N.wh, j[z], F && N.Sy, G && null != M && !Z && N.hA),
        });
    return Z
        ? H
        : (0, r.jsxs)("div", {
              ref: o,
              className: u()(N.re, E && N.q6, I, B && [N.TD, b[z]]),
              children: [
                  H,
                  null != M
                      ? (0, r.jsx)(m.A, {
                            children: (0, r.jsx)(d.D, {
                                "aria-label": i ?? y.intl.string(y.t.PdRCRg),
                                onClick: q ? void 0 : M,
                                className: u()(N.cd, G && N.Ml, j[s ?? z], E && [N.q6, N.vu], q && N.r9),
                                children: (0, r.jsx)(h.A, { className: u()(N.gG, E && N.ho, q && N.r9) }),
                            }),
                        })
                      : null,
              ],
          });
}
