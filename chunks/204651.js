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
    C = l(17928),
    f = l(462887),
    w = l(736653),
    k = l(198052),
    x = l(309010),
    g = l(652215),
    y = l(375708),
    N = l(609142);
function A(e) {
    let {
            label: n,
            onClick: l,
            onKeyDown: t,
            onMouseEnter: a,
            onMouseLeave: d,
            onContextMenu: p,
            className: h,
            wrapperClassName: v,
            iconClassName: C,
            iconColor: f = "currentColor",
            iconComponent: w,
            themeable: k = !1,
            disabled: x = !1,
            isActive: g = !1,
            tooltipPosition: y = "top",
            shouldShowTooltip: A = !0,
            forceTooltipOpen: b = !1,
            buttonRef: j,
            grow: L,
            "aria-label": I,
            look: D,
            buttonText: M,
            size: E,
            color: q,
        } = e,
        G = (0, c.O)(n);
    return (0, r.jsx)(m.A, {
        children: (0, r.jsx)(i.m, {
            position: y,
            __unsupportedReactNodeAsText: n,
            ariaHidden: !0,
            shouldShow: A,
            forceOpen: b,
            children: (0, r.jsxs)(s.$n, {
                "data-migration-pending": !0,
                look: D ?? s.$n.Looks.BLANK,
                size: E ?? s.$n.Sizes.NONE,
                color: q,
                onKeyDown: (e) => {
                    t?.(e);
                },
                onMouseDown: (e) => {
                    e.preventDefault();
                },
                onClick: l,
                onMouseEnter: a,
                onMouseLeave: d,
                onContextMenu: p ?? void 0,
                onFocus: (e) => {
                    a?.(e);
                },
                onBlur: d,
                disabled: x,
                innerClassName: u()(N.NL, { [N.eq]: null != M }),
                className: u()({ [N.vu]: g }, h),
                wrapperClassName: v,
                buttonRef: j,
                grow: L,
                "aria-label": I ?? G,
                children: [
                    (0, r.jsx)(w, {
                        size: o.E.md,
                        className: u()(C, { [N.pd]: null == M, [N.IW]: k, [N.vu]: g }),
                        color: f,
                    }),
                    M,
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
        S = t.useContext(v.vG);
    t.useEffect(() => {
        null != _.current && (S ? _.current.pause() : _.current.play());
    }, [S]);
    let F = R.onContextMenu ?? M,
        P = null == M && !G,
        B = null != M && !G,
        H = (0, r.jsx)(A, {
            ...R,
            grow: !1,
            onContextMenu: F,
            iconClassName: u()(D, N.LF, P && N.Ns),
            className: u()(Z || O ? I : null, L && N.vu, N.wh, j[z], P && N.Sy, G && null != M && !Z && N.hA),
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
