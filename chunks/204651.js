n.d(t, { l: () => b, A: () => I });
var l = n(477900),
    r = n(582128),
    i = n(503698),
    s = n.n(i),
    a = n(319354),
    u = n(614820),
    o = n(862482),
    c = n(866665),
    d = n(939249),
    f = n(241524),
    h = n(147925),
    m = n(461782),
    p = n(447404),
    g = n(17928),
    y = n(462887),
    v = n(736653),
    A = n(198052),
    E = n(309010),
    x = n(652215),
    C = n(375708),
    S = n(609142);
function I(e) {
    let {
            label: t,
            onClick: n,
            onKeyDown: r,
            onMouseEnter: i,
            onMouseLeave: d,
            onContextMenu: f,
            className: h,
            wrapperClassName: m,
            iconClassName: g,
            iconColor: y = "currentColor",
            iconComponent: v,
            themeable: A = !1,
            disabled: E = !1,
            isActive: x = !1,
            tooltipPosition: C = "top",
            shouldShowTooltip: I = !0,
            forceTooltipOpen: T = !1,
            buttonRef: R,
            grow: b,
            "aria-label": w,
            look: N,
            buttonText: _,
            size: k,
            color: j,
        } = e,
        L = (0, u.O)(t);
    return (0, l.jsx)(p.A, {
        children: (0, l.jsx)(c.m, {
            position: C,
            __unsupportedReactNodeAsText: t,
            ariaHidden: !0,
            shouldShow: I,
            forceOpen: T,
            children: (0, l.jsxs)(o.$n, {
                "data-migration-pending": !0,
                look: N ?? o.$n.Looks.BLANK,
                size: k ?? o.$n.Sizes.NONE,
                color: j,
                onKeyDown: (e) => {
                    r?.(e);
                },
                onMouseDown: (e) => {
                    e.preventDefault();
                },
                onClick: n,
                onMouseEnter: i,
                onMouseLeave: d,
                onContextMenu: f ?? void 0,
                onFocus: (e) => {
                    i?.(e);
                },
                onBlur: d,
                disabled: E,
                innerClassName: s()(S.NL, { [S.eq]: null != _ }),
                className: s()({ [S.vu]: x }, h),
                wrapperClassName: m,
                buttonRef: R,
                grow: b,
                "aria-label": w ?? L,
                children: [
                    (0, l.jsx)(v, {
                        size: a.E.md,
                        className: s()(g, { [S.pd]: null == _, [S.IW]: A, [S.vu]: x }),
                        color: y,
                    }),
                    _,
                ],
            }),
        }),
    });
}
let T = {
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
    R = {
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
function b(e) {
    let t,
        n,
        i,
        {
            ref: a,
            color: u,
            caretColor: o,
            caretAriaLabel: c,
            isActive: b = !1,
            className: w,
            iconClassName: N,
            onPopoutClick: _,
            popoutOpen: k = !1,
            popoutDisabled: j = !1,
            isTrayButton: L,
            applyStyles: O = !1,
            ...D
        } = e,
        P =
            ((t = (0, g.bG)([E.Ay], () => E.Ay.getVoiceChannelId())),
            (n = (0, g.bG)([A.A], () => (null != t ? A.A.getMode(t) : null))),
            (i = (0, v.Ay)()),
            null != u
                ? u
                : n === x._Of.VOICE && (0, y.q)(i)
                  ? b
                      ? "activeLight"
                      : "primaryLight"
                  : b
                    ? "white"
                    : "primaryDark"),
        W = (0, f.A)("(max-width: 456px)"),
        M = r.useRef(null),
        F = r.useContext(m.vG);
    r.useEffect(() => {
        null != M.current && (F ? M.current.pause() : M.current.play());
    }, [F]);
    let G = D.onContextMenu ?? _,
        U = null == _ && !L,
        K = null != _ && !L,
        V = (0, l.jsx)(I, {
            ...D,
            grow: !1,
            onContextMenu: G,
            iconClassName: s()(N, S.LF, U && S.Ns),
            className: s()(W || O ? w : null, b && S.vu, S.wh, R[P], U && S.Sy, L && null != _ && !W && S.hA),
        });
    return W
        ? V
        : (0, l.jsxs)("div", {
              ref: a,
              className: s()(S.re, k && S.q6, w, K && [S.TD, T[P]]),
              children: [
                  V,
                  null != _
                      ? (0, l.jsx)(p.A, {
                            children: (0, l.jsx)(d.D, {
                                "aria-label": c ?? C.intl.string(C.t.PdRCRg),
                                onClick: j ? void 0 : _,
                                className: s()(S.cd, L && S.Ml, R[o ?? P], k && [S.q6, S.vu], j && S.r9),
                                children: (0, l.jsx)(h.A, { className: s()(S.gG, k && S.ho, j && S.r9) }),
                            }),
                        })
                      : null,
              ],
          });
}
