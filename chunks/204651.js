n.d(t, { l: () => T, A: () => I });
var l = n(477900),
    r = n(582128),
    i = n(503698),
    a = n.n(i),
    s = n(319354),
    u = n(84571),
    o = n(862482),
    c = n(866665),
    d = n(939249),
    f = n(241524),
    h = n(147925),
    p = n(461782),
    m = n(447404),
    g = n(17928),
    y = n(462887),
    E = n(736653),
    v = n(198052),
    A = n(309010),
    C = n(652215),
    x = n(375708),
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
            wrapperClassName: p,
            iconClassName: g,
            iconColor: y = "currentColor",
            iconComponent: E,
            themeable: v = !1,
            disabled: A = !1,
            isActive: C = !1,
            tooltipPosition: x = "top",
            shouldShowTooltip: I = !0,
            forceTooltipOpen: w = !1,
            buttonRef: R,
            grow: T,
            "aria-label": N,
            look: L,
            buttonText: _,
            size: b,
            color: k,
        } = e,
        j = (0, u.O)(t);
    return (0, l.jsx)(m.A, {
        children: (0, l.jsx)(c.m, {
            position: x,
            __unsupportedReactNodeAsText: t,
            ariaHidden: !0,
            shouldShow: I,
            forceOpen: w,
            children: (0, l.jsxs)(o.$n, {
                "data-migration-pending": !0,
                look: L ?? o.$n.Looks.BLANK,
                size: b ?? o.$n.Sizes.NONE,
                color: k,
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
                disabled: A,
                innerClassName: a()(S.NL, { [S.eq]: null != _ }),
                className: a()({ [S.vu]: C }, h),
                wrapperClassName: p,
                buttonRef: R,
                grow: T,
                "aria-label": N ?? j,
                children: [
                    (0, l.jsx)(E, {
                        size: s.E.md,
                        className: a()(g, { [S.pd]: null == _, [S.IW]: v, [S.vu]: C }),
                        color: y,
                    }),
                    _,
                ],
            }),
        }),
    });
}
let w = {
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
function T(e) {
    let t,
        n,
        i,
        {
            ref: s,
            color: u,
            caretColor: o,
            caretAriaLabel: c,
            isActive: T = !1,
            className: N,
            iconClassName: L,
            onPopoutClick: _,
            popoutOpen: b = !1,
            popoutDisabled: k = !1,
            isTrayButton: j,
            applyStyles: O = !1,
            ...P
        } = e,
        W =
            ((t = (0, g.bG)([A.Ay], () => A.Ay.getVoiceChannelId())),
            (n = (0, g.bG)([v.A], () => (null != t ? v.A.getMode(t) : null))),
            (i = (0, E.Ay)()),
            null != u
                ? u
                : n === C._Of.VOICE && (0, y.q)(i)
                  ? T
                      ? "activeLight"
                      : "primaryLight"
                  : T
                    ? "white"
                    : "primaryDark"),
        D = (0, f.A)("(max-width: 456px)"),
        M = r.useRef(null),
        U = r.useContext(p.vG);
    r.useEffect(() => {
        null != M.current && (U ? M.current.pause() : M.current.play());
    }, [U]);
    let F = P.onContextMenu ?? _,
        G = null == _ && !j,
        K = null != _ && !j,
        V = (0, l.jsx)(I, {
            ...P,
            grow: !1,
            onContextMenu: F,
            iconClassName: a()(L, S.LF, G && S.Ns),
            className: a()(D || O ? N : null, T && S.vu, S.wh, R[W], G && S.Sy, j && null != _ && !D && S.hA),
        });
    return D
        ? V
        : (0, l.jsxs)("div", {
              ref: s,
              className: a()(S.re, b && S.q6, N, K && [S.TD, w[W]]),
              children: [
                  V,
                  null != _
                      ? (0, l.jsx)(m.A, {
                            children: (0, l.jsx)(d.D, {
                                "aria-label": c ?? x.intl.string(x.t.PdRCRg),
                                onClick: k ? void 0 : _,
                                className: a()(S.cd, j && S.Ml, R[o ?? W], b && [S.q6, S.vu], k && S.r9),
                                children: (0, l.jsx)(h.A, { className: a()(S.gG, b && S.ho, k && S.r9) }),
                            }),
                        })
                      : null,
              ],
          });
}
