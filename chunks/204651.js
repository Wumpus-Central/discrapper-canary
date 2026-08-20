n.d(t, { l: () => _, A: () => S });
var l = n(477900),
    r = n(582128),
    s = n(503698),
    i = n.n(s),
    a = n(319354),
    u = n(614820),
    c = n(862482),
    o = n(866665),
    d = n(939249),
    f = n(241524),
    h = n(147925),
    m = n(461782),
    p = n(447404),
    g = n(17928),
    A = n(462887),
    v = n(736653),
    C = n(198052),
    E = n(309010),
    I = n(652215),
    y = n(375708),
    x = n(609142);
function S(e) {
    let {
            label: t,
            onClick: n,
            onKeyDown: r,
            onMouseEnter: s,
            onMouseLeave: d,
            onContextMenu: f,
            className: h,
            wrapperClassName: m,
            iconClassName: g,
            iconColor: A = "currentColor",
            iconComponent: v,
            themeable: C = !1,
            disabled: E = !1,
            isActive: I = !1,
            tooltipPosition: y = "top",
            shouldShowTooltip: S = !0,
            forceTooltipOpen: T = !1,
            buttonRef: R,
            grow: _,
            "aria-label": b,
            look: w,
            buttonText: N,
            size: j,
            color: k,
        } = e,
        L = (0, u.O)(t);
    return (0, l.jsx)(p.A, {
        children: (0, l.jsx)(o.m, {
            position: y,
            __unsupportedReactNodeAsText: t,
            ariaHidden: !0,
            shouldShow: S,
            forceOpen: T,
            children: (0, l.jsxs)(c.$n, {
                "data-migration-pending": !0,
                look: w ?? c.$n.Looks.BLANK,
                size: j ?? c.$n.Sizes.NONE,
                color: k,
                onKeyDown: (e) => {
                    r?.(e);
                },
                onMouseDown: (e) => {
                    e.preventDefault();
                },
                onClick: n,
                onMouseEnter: s,
                onMouseLeave: d,
                onContextMenu: f ?? void 0,
                onFocus: (e) => {
                    s?.(e);
                },
                onBlur: d,
                disabled: E,
                innerClassName: i()(x.NL, { [x.eq]: null != N }),
                className: i()({ [x.vu]: I }, h),
                wrapperClassName: m,
                buttonRef: R,
                grow: _,
                "aria-label": b ?? L,
                children: [
                    (0, l.jsx)(v, {
                        size: a.E.md,
                        className: i()(g, { [x.pd]: null == N, [x.IW]: C, [x.vu]: I }),
                        color: A,
                    }),
                    N,
                ],
            }),
        }),
    });
}
let T = {
        disconnect: x.Zf,
        join: x.fj,
        red: x.wv,
        white: x.ON,
        green: x.wL,
        yellow: x.D9,
        primaryDark: x.Zq,
        primaryLight: x.Zq,
        activeLight: x.H3,
        premiumGradient: x.ck,
    },
    R = {
        disconnect: x.Zf,
        join: x.fj,
        red: x.Xr,
        white: x.ON,
        green: x.Vu,
        yellow: x.D9,
        primaryDark: x.Zq,
        primaryLight: x.Zq,
        activeLight: x.H3,
        premiumGradient: x.ck,
    };
function _(e) {
    let t,
        n,
        s,
        {
            ref: a,
            color: u,
            caretColor: c,
            caretAriaLabel: o,
            isActive: _ = !1,
            className: b,
            iconClassName: w,
            onPopoutClick: N,
            popoutOpen: j = !1,
            popoutDisabled: k = !1,
            isTrayButton: L,
            applyStyles: D = !1,
            ...P
        } = e,
        O =
            ((t = (0, g.bG)([E.Ay], () => E.Ay.getVoiceChannelId())),
            (n = (0, g.bG)([C.A], () => (null != t ? C.A.getMode(t) : null))),
            (s = (0, v.Ay)()),
            null != u
                ? u
                : n === I._Of.VOICE && (0, A.q)(s)
                  ? _
                      ? "activeLight"
                      : "primaryLight"
                  : _
                    ? "white"
                    : "primaryDark"),
        M = (0, f.A)("(max-width: 456px)"),
        F = r.useRef(null),
        G = r.useContext(m.vG);
    r.useEffect(() => {
        null != F.current && (G ? F.current.pause() : F.current.play());
    }, [G]);
    let K = P.onContextMenu ?? N,
        U = null == N && !L,
        H = null != N && !L,
        W = (0, l.jsx)(S, {
            ...P,
            grow: !1,
            onContextMenu: K,
            iconClassName: i()(w, x.LF, U && x.Ns),
            className: i()(M || D ? b : null, _ && x.vu, x.wh, R[O], U && x.Sy, L && null != N && !M && x.hA),
        });
    return M
        ? W
        : (0, l.jsxs)("div", {
              ref: a,
              className: i()(x.re, j && x.q6, b, H && [x.TD, T[O]]),
              children: [
                  W,
                  null != N
                      ? (0, l.jsx)(p.A, {
                            children: (0, l.jsx)(d.D, {
                                "aria-label": o ?? y.intl.string(y.t.PdRCRg),
                                onClick: k ? void 0 : N,
                                className: i()(x.cd, L && x.Ml, R[c ?? O], j && [x.q6, x.vu], k && x.r9),
                                children: (0, l.jsx)(h.A, { className: i()(x.gG, j && x.ho, k && x.r9) }),
                            }),
                        })
                      : null,
              ],
          });
}
