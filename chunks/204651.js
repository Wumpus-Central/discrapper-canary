n.d(t, { l: () => w, A: () => I });
var l = n(477900),
    r = n(582128),
    i = n(503698),
    a = n.n(i),
    s = n(319354),
    u = n(614820),
    o = n(862482),
    c = n(866665),
    d = n(939249),
    f = n(241524),
    h = n(147925),
    p = n(461782),
    m = n(447404),
    g = n(17928),
    y = n(462887),
    v = n(736653),
    E = n(198052),
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
            iconComponent: v,
            themeable: E = !1,
            disabled: A = !1,
            isActive: C = !1,
            tooltipPosition: x = "top",
            shouldShowTooltip: I = !0,
            forceTooltipOpen: T = !1,
            buttonRef: R,
            grow: w,
            "aria-label": b,
            look: N,
            buttonText: _,
            size: L,
            color: k,
        } = e,
        j = (0, u.O)(t);
    return (0, l.jsx)(m.A, {
        children: (0, l.jsx)(c.m, {
            position: x,
            __unsupportedReactNodeAsText: t,
            ariaHidden: !0,
            shouldShow: I,
            forceOpen: T,
            children: (0, l.jsxs)(o.$n, {
                "data-migration-pending": !0,
                look: N ?? o.$n.Looks.BLANK,
                size: L ?? o.$n.Sizes.NONE,
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
                grow: w,
                "aria-label": b ?? j,
                children: [
                    (0, l.jsx)(v, {
                        size: s.E.md,
                        className: a()(g, { [S.pd]: null == _, [S.IW]: E, [S.vu]: C }),
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
function w(e) {
    let t,
        n,
        i,
        {
            ref: s,
            color: u,
            caretColor: o,
            caretAriaLabel: c,
            isActive: w = !1,
            className: b,
            iconClassName: N,
            onPopoutClick: _,
            popoutOpen: L = !1,
            popoutDisabled: k = !1,
            isTrayButton: j,
            applyStyles: O = !1,
            ...W
        } = e,
        D =
            ((t = (0, g.bG)([A.Ay], () => A.Ay.getVoiceChannelId())),
            (n = (0, g.bG)([E.A], () => (null != t ? E.A.getMode(t) : null))),
            (i = (0, v.Ay)()),
            null != u
                ? u
                : n === C._Of.VOICE && (0, y.q)(i)
                  ? w
                      ? "activeLight"
                      : "primaryLight"
                  : w
                    ? "white"
                    : "primaryDark"),
        P = (0, f.A)("(max-width: 456px)"),
        M = r.useRef(null),
        F = r.useContext(p.vG);
    r.useEffect(() => {
        null != M.current && (F ? M.current.pause() : M.current.play());
    }, [F]);
    let G = W.onContextMenu ?? _,
        K = null == _ && !j,
        U = null != _ && !j,
        H = (0, l.jsx)(I, {
            ...W,
            grow: !1,
            onContextMenu: G,
            iconClassName: a()(N, S.LF, K && S.Ns),
            className: a()(P || O ? b : null, w && S.vu, S.wh, R[D], K && S.Sy, j && null != _ && !P && S.hA),
        });
    return P
        ? H
        : (0, l.jsxs)("div", {
              ref: s,
              className: a()(S.re, L && S.q6, b, U && [S.TD, T[D]]),
              children: [
                  H,
                  null != _
                      ? (0, l.jsx)(m.A, {
                            children: (0, l.jsx)(d.D, {
                                "aria-label": c ?? x.intl.string(x.t.PdRCRg),
                                onClick: k ? void 0 : _,
                                className: a()(S.cd, j && S.Ml, R[o ?? D], L && [S.q6, S.vu], k && S.r9),
                                children: (0, l.jsx)(h.A, { className: a()(S.gG, L && S.ho, k && S.r9) }),
                            }),
                        })
                      : null,
              ],
          });
}
