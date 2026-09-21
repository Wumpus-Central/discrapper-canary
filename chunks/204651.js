n.d(t, { l: () => T, A: () => g });
var r = n(477900),
    l = n(582128),
    u = n(503698),
    a = n.n(u),
    i = n(319354),
    s = n(84571),
    c = n(862482),
    o = n(866665),
    d = n(939249),
    f = n(241524),
    h = n(147925),
    p = n(461782),
    C = n(447404),
    E = n(17928),
    m = n(462887),
    v = n(736653),
    S = n(198052),
    y = n(309010),
    I = n(652215),
    A = n(375708),
    _ = n(609142);
function g(e) {
    let {
            label: t,
            onClick: n,
            onKeyDown: l,
            onMouseEnter: u,
            onMouseLeave: d,
            onContextMenu: f,
            className: h,
            wrapperClassName: p,
            iconClassName: E,
            iconColor: m = "currentColor",
            iconComponent: v,
            themeable: S = !1,
            disabled: y = !1,
            isActive: I = !1,
            tooltipPosition: A = "top",
            shouldShowTooltip: g = !0,
            forceTooltipOpen: R = !1,
            buttonRef: L,
            grow: T,
            "aria-label": w,
            look: b,
            buttonText: k,
            size: N,
            color: x,
        } = e,
        P = (0, s.O)(t);
    return (0, r.jsx)(C.A, {
        children: (0, r.jsx)(o.m, {
            position: A,
            __unsupportedReactNodeAsText: t,
            ariaHidden: !0,
            shouldShow: g,
            forceOpen: R,
            children: (0, r.jsxs)(c.$n, {
                "data-migration-pending": !0,
                look: b ?? c.$n.Looks.BLANK,
                size: N ?? c.$n.Sizes.NONE,
                color: x,
                onKeyDown: (e) => {
                    l?.(e);
                },
                onMouseDown: (e) => {
                    e.preventDefault();
                },
                onClick: n,
                onMouseEnter: u,
                onMouseLeave: d,
                onContextMenu: f ?? void 0,
                onFocus: (e) => {
                    u?.(e);
                },
                onBlur: d,
                disabled: y,
                innerClassName: a()(_.NL, { [_.eq]: null != k }),
                className: a()({ [_.vu]: I }, h),
                wrapperClassName: p,
                buttonRef: L,
                grow: T,
                "aria-label": w ?? P,
                children: [
                    (0, r.jsx)(v, {
                        size: i.E.md,
                        className: a()(E, { [_.pd]: null == k, [_.IW]: S, [_.vu]: I }),
                        color: m,
                    }),
                    k,
                ],
            }),
        }),
    });
}
let R = {
        disconnect: _.Zf,
        join: _.fj,
        red: _.wv,
        white: _.ON,
        green: _.wL,
        yellow: _.D9,
        primaryDark: _.Zq,
        primaryLight: _.Zq,
        activeLight: _.H3,
        premiumGradient: _.ck,
    },
    L = {
        disconnect: _.Zf,
        join: _.fj,
        red: _.Xr,
        white: _.ON,
        green: _.Vu,
        yellow: _.D9,
        primaryDark: _.Zq,
        primaryLight: _.Zq,
        activeLight: _.H3,
        premiumGradient: _.ck,
    };
function T(e) {
    let t,
        n,
        u,
        {
            ref: i,
            color: s,
            caretColor: c,
            caretAriaLabel: o,
            isActive: T = !1,
            className: w,
            iconClassName: b,
            onPopoutClick: k,
            popoutOpen: N = !1,
            popoutDisabled: x = !1,
            isTrayButton: P,
            applyStyles: D = !1,
            ...O
        } = e,
        j =
            ((t = (0, E.bG)([y.Ay], () => y.Ay.getVoiceChannelId())),
            (n = (0, E.bG)([S.A], () => (null != t ? S.A.getMode(t) : null))),
            (u = (0, v.Ay)()),
            null != s
                ? s
                : n === I._Of.VOICE && (0, m.q)(u)
                  ? T
                      ? "activeLight"
                      : "primaryLight"
                  : T
                    ? "white"
                    : "primaryDark"),
        K = (0, f.A)("(max-width: 456px)"),
        G = l.useRef(null),
        M = l.useContext(p.vG);
    l.useEffect(() => {
        null != G.current && (M ? G.current.pause() : G.current.play());
    }, [M]);
    let U = O.onContextMenu ?? k,
        F = null == k && !P,
        H = null != k && !P,
        W = (0, r.jsx)(g, {
            ...O,
            grow: !1,
            onContextMenu: U,
            iconClassName: a()(b, _.LF, F && _.Ns),
            className: a()(K || D ? w : null, T && _.vu, _.wh, L[j], F && _.Sy, P && null != k && !K && _.hA),
        });
    return K
        ? W
        : (0, r.jsxs)("div", {
              ref: i,
              className: a()(_.re, N && _.q6, w, H && [_.TD, R[j]]),
              children: [
                  W,
                  null != k
                      ? (0, r.jsx)(C.A, {
                            children: (0, r.jsx)(d.D, {
                                "aria-label": o ?? A.intl.string(A.t.PdRCRg),
                                onClick: x ? void 0 : k,
                                className: a()(_.cd, P && _.Ml, L[c ?? j], N && [_.q6, _.vu], x && _.r9),
                                children: (0, r.jsx)(h.A, { className: a()(_.gG, N && _.ho, x && _.r9) }),
                            }),
                        })
                      : null,
              ],
          });
}
