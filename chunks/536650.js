n.d(t, { Z: () => y }), n(388685);
var l = n(951288),
    i = n(647438),
    r = n(688619),
    a = n.n(r),
    o = n(392711),
    s = n(780384),
    c = n(481060),
    u = n(410030),
    d = n(220082),
    p = n(302221),
    m = n(783097),
    f = n(772606),
    h = n(488977),
    v = n(236050);
function x(e) {
    let [t, n] = i.useState(void 0);
    return (
        i.useEffect(() => {
            null != e.current && n(getComputedStyle(e.current));
        }, [e]),
        t
    );
}
function y(e) {
    let { application: t, context: n, name: r, iconURL: y, scrollerRef: g, sectionName: b } = e,
        N = (0, s.ap)((0, u.ZP)()),
        j = i.useRef(null),
        C = i.useRef(null),
        E = i.useRef(null),
        P = i.useRef(null),
        A = (0, c.dQu)(c.TVs.colors.BACKGROUND_BASE_LOW).hex(),
        _ = (0, d.ZP)("number" == typeof y ? "" : y, null != A ? A : ""),
        O = i.useMemo(() => {
            var e, t;
            return null !=
                (t =
                    null ==
                    (e = (0, p.wh)({
                        foreground: a()(_),
                        background: a()(N ? "#000000" : "#ffffff"),
                        ratio: 5,
                        saturationFactor: 0.6,
                    }))
                        ? void 0
                        : e.hex())
                ? t
                : _;
        }, [_, N]),
        I = x(j),
        S = x(C),
        T = i.useCallback(() => {
            var e, t, n, l;
            let i = g.current,
                r = j.current,
                a = E.current,
                s = null == P ? void 0 : P.current,
                c = parseInt(null != (e = null == I ? void 0 : I.height) ? e : ""),
                u = parseInt(null != (t = null == S ? void 0 : S.height) ? t : "");
            if (null != i && null != r && null != a && !isNaN(c) && !isNaN(u)) {
                let e = null != (n = i.scrollTop) ? n : 0,
                    t = 0 !== i.scrollHeight ? i.scrollHeight : u + 20,
                    d = 0 !== i.clientHeight ? i.clientHeight : u + 20,
                    p = u - c,
                    m = (0, o.clamp)(t - d, p + 1, u + 20),
                    f = p === m ? 1 : (0, o.clamp)((e - p) / (m - p), 0, 1);
                (r.style.filter = "brightness(".concat(1 + ((N ? 1.4 : 0.6) - 1) * f, ")")),
                    (r.style.backgroundColor = "color-mix(in oklab,"
                        .concat(_, " ")
                        .concat((1 - f) * 100, "%, ")
                        .concat(O, ")")),
                    (a.style.opacity = "".concat(0 + +f)),
                    (a.style.transform = "translateY(".concat((l = c / 4) + (0 - l) * f, "px)")),
                    null != s && (s.style.opacity = "".concat(1 + -1 * f));
            }
        }, [O, _, null == S ? void 0 : S.height, N, g, null == I ? void 0 : I.height]);
    return (
        i.useEffect(() => {
            T();
        }, [T, N]),
        i.useEffect(() => {
            let e = g.current,
                t = () => {
                    T();
                };
            return (
                null == e || e.addEventListener("scroll", t),
                () => {
                    null == e || e.removeEventListener("scroll", t);
                }
            );
        }, [g, T]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)("div", {
                    className: v.stickyContainer,
                    children: [
                        (0, l.jsx)("div", {
                            className: v.stickyBannerContainer,
                            children: (0, l.jsx)("div", {
                                className: v.stickyBanner,
                                ref: j,
                            }),
                        }),
                        (0, l.jsx)("div", {
                            className: v.backButtonContainer,
                            children: (0, l.jsx)(f.Z, { className: v.headerButton }),
                        }),
                        (0, l.jsx)("div", {
                            className: v.nameContainer,
                            children: (0, l.jsx)(c.X6q, {
                                ref: E,
                                className: v.textApplicationName,
                                variant: "heading-lg/extrabold",
                                children: r,
                            }),
                        }),
                    ],
                }),
                (0, m.BQ)(t)
                    ? (0, l.jsx)("div", {
                          ref: P,
                          className: v.moreMenuButtonContainer,
                          children: (0, l.jsx)(h.Z, {
                              application: t,
                              context: n,
                              className: v.headerButton,
                              sectionName: b,
                          }),
                      })
                    : null,
                (0, l.jsx)("div", {
                    ref: C,
                    className: v.bannerBackground,
                    style: { backgroundColor: _ },
                }),
            ],
        })
    );
}
