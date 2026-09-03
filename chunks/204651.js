n.d(t, { l: () => w, A: () => I });
var l = n(477900),
    r = n(582128),
    i = n(503698),
    a = n.n(i),
    s = n(319354),
    o = n(84571),
    u = n(862482),
    c = n(866665),
    d = n(939249),
    f = n(241524),
    h = n(147925),
    m = n(461782),
    p = n(447404),
    g = n(17928),
    y = n(462887),
    v = n(736653),
    C = n(198052),
    E = n(309010),
    x = n(652215),
    S = n(375708),
    A = n(609142);
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
            themeable: C = !1,
            disabled: E = !1,
            isActive: x = !1,
            tooltipPosition: S = "top",
            shouldShowTooltip: I = !0,
            forceTooltipOpen: T = !1,
            buttonRef: R,
            grow: w,
            "aria-label": N,
            look: b,
            buttonText: _,
            size: k,
            color: L,
        } = e,
        j = (0, o.O)(t);
    return (0, l.jsx)(p.A, {
        children: (0, l.jsx)(c.m, {
            position: S,
            __unsupportedReactNodeAsText: t,
            ariaHidden: !0,
            shouldShow: I,
            forceOpen: T,
            children: (0, l.jsxs)(u.$n, {
                "data-migration-pending": !0,
                look: b ?? u.$n.Looks.BLANK,
                size: k ?? u.$n.Sizes.NONE,
                color: L,
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
                innerClassName: a()(A.NL, { [A.eq]: null != _ }),
                className: a()({ [A.vu]: x }, h),
                wrapperClassName: m,
                buttonRef: R,
                grow: w,
                "aria-label": N ?? j,
                children: [
                    (0, l.jsx)(v, {
                        size: s.E.md,
                        className: a()(g, { [A.pd]: null == _, [A.IW]: C, [A.vu]: x }),
                        color: y,
                    }),
                    _,
                ],
            }),
        }),
    });
}
let T = {
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
    R = {
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
function w(e) {
    let t,
        n,
        i,
        {
            ref: s,
            color: o,
            caretColor: u,
            caretAriaLabel: c,
            isActive: w = !1,
            className: N,
            iconClassName: b,
            onPopoutClick: _,
            popoutOpen: k = !1,
            popoutDisabled: L = !1,
            isTrayButton: j,
            applyStyles: O = !1,
            ...D
        } = e,
        P =
            ((t = (0, g.bG)([E.Ay], () => E.Ay.getVoiceChannelId())),
            (n = (0, g.bG)([C.A], () => (null != t ? C.A.getMode(t) : null))),
            (i = (0, v.Ay)()),
            null != o
                ? o
                : n === x._Of.VOICE && (0, y.q)(i)
                  ? w
                      ? "activeLight"
                      : "primaryLight"
                  : w
                    ? "white"
                    : "primaryDark"),
        W = (0, f.A)("(max-width: 456px)"),
        M = r.useRef(null),
        H = r.useContext(m.vG);
    r.useEffect(() => {
        null != M.current && (H ? M.current.pause() : M.current.play());
    }, [H]);
    let V = D.onContextMenu ?? _,
        K = null == _ && !j,
        F = null != _ && !j,
        G = (0, l.jsx)(I, {
            ...D,
            grow: !1,
            onContextMenu: V,
            iconClassName: a()(b, A.LF, K && A.Ns),
            className: a()(W || O ? N : null, w && A.vu, A.wh, R[P], K && A.Sy, j && null != _ && !W && A.hA),
        });
    return W
        ? G
        : (0, l.jsxs)("div", {
              ref: s,
              className: a()(A.re, k && A.q6, N, F && [A.TD, T[P]]),
              children: [
                  G,
                  null != _
                      ? (0, l.jsx)(p.A, {
                            children: (0, l.jsx)(d.D, {
                                "aria-label": c ?? S.intl.string(S.t.PdRCRg),
                                onClick: L ? void 0 : _,
                                className: a()(A.cd, j && A.Ml, R[u ?? P], k && [A.q6, A.vu], L && A.r9),
                                children: (0, l.jsx)(h.A, { className: a()(A.gG, k && A.ho, L && A.r9) }),
                            }),
                        })
                      : null,
              ],
          });
}
