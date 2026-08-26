n.d(t, { l: () => b, A: () => S });
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
    C = n(652215),
    x = n(375708),
    I = n(609142);
function S(e) {
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
            isActive: C = !1,
            tooltipPosition: x = "top",
            shouldShowTooltip: S = !0,
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
            position: x,
            __unsupportedReactNodeAsText: t,
            ariaHidden: !0,
            shouldShow: S,
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
                innerClassName: s()(I.NL, { [I.eq]: null != _ }),
                className: s()({ [I.vu]: C }, h),
                wrapperClassName: m,
                buttonRef: R,
                grow: b,
                "aria-label": w ?? L,
                children: [
                    (0, l.jsx)(v, {
                        size: a.E.md,
                        className: s()(g, { [I.pd]: null == _, [I.IW]: A, [I.vu]: C }),
                        color: y,
                    }),
                    _,
                ],
            }),
        }),
    });
}
let T = {
        disconnect: I.Zf,
        join: I.fj,
        red: I.wv,
        white: I.ON,
        green: I.wL,
        yellow: I.D9,
        primaryDark: I.Zq,
        primaryLight: I.Zq,
        activeLight: I.H3,
        premiumGradient: I.ck,
    },
    R = {
        disconnect: I.Zf,
        join: I.fj,
        red: I.Xr,
        white: I.ON,
        green: I.Vu,
        yellow: I.D9,
        primaryDark: I.Zq,
        primaryLight: I.Zq,
        activeLight: I.H3,
        premiumGradient: I.ck,
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
                : n === C._Of.VOICE && (0, y.q)(i)
                  ? b
                      ? "activeLight"
                      : "primaryLight"
                  : b
                    ? "white"
                    : "primaryDark"),
        M = (0, f.A)("(max-width: 456px)"),
        W = r.useRef(null),
        F = r.useContext(m.vG);
    r.useEffect(() => {
        null != W.current && (F ? W.current.pause() : W.current.play());
    }, [F]);
    let U = D.onContextMenu ?? _,
        G = null == _ && !L,
        H = null != _ && !L,
        K = (0, l.jsx)(S, {
            ...D,
            grow: !1,
            onContextMenu: U,
            iconClassName: s()(N, I.LF, G && I.Ns),
            className: s()(M || O ? w : null, b && I.vu, I.wh, R[P], G && I.Sy, L && null != _ && !M && I.hA),
        });
    return M
        ? K
        : (0, l.jsxs)("div", {
              ref: a,
              className: s()(I.re, k && I.q6, w, H && [I.TD, T[P]]),
              children: [
                  K,
                  null != _
                      ? (0, l.jsx)(p.A, {
                            children: (0, l.jsx)(d.D, {
                                "aria-label": c ?? x.intl.string(x.t.PdRCRg),
                                onClick: j ? void 0 : _,
                                className: s()(I.cd, L && I.Ml, R[o ?? P], k && [I.q6, I.vu], j && I.r9),
                                children: (0, l.jsx)(h.A, { className: s()(I.gG, k && I.ho, j && I.r9) }),
                            }),
                        })
                      : null,
              ],
          });
}
