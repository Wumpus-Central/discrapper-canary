n.d(t, {
    A: () => O,
    M: () => g,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(172218),
    l = n(397927),
    c = n(832604),
    u = n(263063),
    d = n(776231),
    f = n(611010),
    p = n(486020),
    _ = n(788868),
    h = n(985018),
    m = n(103467);
let g = {
    XXSMALL: m.W6,
    XSMALL: m.s,
    SMALL: m.EX,
    MEDIUM: m.Y,
    MEDIUM_LARGE: m.rZ,
    LARGE: m.as,
    XLARGE: m.AQ,
};

function E(e) {
    switch (e) {
        case g.XXSMALL:
            return 16;
        case g.XSMALL:
            return 24;
        case g.SMALL:
            return 30;
        case g.MEDIUM:
            return 40;
        case g.MEDIUM_LARGE:
            return 48;
        case g.LARGE:
            return 60;
        default:
            return 80;
    }
}

function y(e) {
    if (null == e) return null;
    switch (e) {
        case _.pe.GUILD:
            return n(664419);
        case _.pe.TIER_0:
            return n(31427);
        case _.pe.TIER_1:
            return n(831180);
        case _.pe.TIER_2:
        case _.pe.LEGACY:
            return n(29873);
        default:
            return null;
    }
}

function b(e) {
    switch (e) {
        case g.XSMALL:
            return u.A.Sizes.SMALLER;
        case g.SMALL:
            return u.A.Sizes.SMALL;
        case g.LARGE:
            return u.A.Sizes.LARGE;
        default:
        case g.MEDIUM:
            return u.A.Sizes.MEDIUM;
    }
}
let O = i.forwardRef(function (e, t) {
    let n,
        {
            game: a,
            guild: _,
            skuId: O,
            pid: v,
            className: A,
            guildClassName: I,
            size: S = g.MEDIUM,
            allowUnknownGameIcon: T = !0,
            unknownGameIconFallback: C,
        } = e,
        [N, w] = i.useState(null),
        [R, P] = i.useState(!1),
        D = i.useCallback((e) => {
            P(e);
        }, []),
        L = i.useRef(null);
    i.useEffect(() => {
        null != L.current && R && (cancelIdleCallback(L.current), (L.current = null));
    }, [R]);
    let x = (0, s.K)(D);
    if (
        (null != O && (n = y(O)),
        null != a &&
            null == n &&
            (a instanceof f.Ay
                ? (n = a.getIconURL(E(S)))
                : null != a.icon &&
                  (n = p.Ay.getApplicationIconURL({
                      id: a.id,
                      icon: a.icon,
                  }))),
        (n = (0, c.A)(v, n)),
        i.useEffect(() => {
            if (null == n || "" === n) return;
            if ((0, p.V0)(n) || (0, d.LE)(n)) return void w(n);
            let e = () =>
                (0, d.yt)(n, (e, t) => {
                    w(n);
                });
            if (R) return e();
            let t = requestIdleCallback(() => {
                (L.current = null), e();
            });
            return (
                (L.current = t),
                () => {
                    null != L.current && (cancelIdleCallback(L.current), (L.current = null));
                }
            );
        }, [n, R]),
        void 0 === n && null != _)
    ) {
        let e = b(S);
        return (0, r.jsx)(u.A, {
            className: o()(m.Gt, I, A),
            guild: _,
            size: e,
        });
    }
    if (null == n || "" === n)
        return T
            ? null != C
                ? C
                : (0, r.jsx)(l._7Z, {
                      size: "md",
                      color: "currentColor",
                      className: o()(m.Gt, S, A),
                  })
            : null;
    let M = null == a ? void 0 : a.name,
        j =
            null != M && "" !== M
                ? h.intl.formatToPlainString(h.t.tiKyYg, {
                      applicationName: M,
                  })
                : h.intl.string(h.t["2B/phM"]),
        k = (0, p.V0)(n),
        U = (0, d.LE)(n),
        G = N === n || k || U;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            G
                ? null
                : (0, r.jsx)("div", {
                      className: o()(m.qD, S, A),
                  }),
            (0, r.jsx)("img", {
                ref: t,
                alt: j,
                src: n,
                className: o()(m.Gt, S, A),
                style: G
                    ? void 0
                    : {
                          display: "none",
                      },
            }),
            (0, r.jsx)("div", {
                className: m.Xc,
                children: (0, r.jsx)("div", {
                    ref: x,
                    className: m.Pr,
                }),
            }),
        ],
    });
});
