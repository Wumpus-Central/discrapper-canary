n.d(t, { Z: () => g }), n(388685);
var i = n(951288),
    l = n(647438),
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
function y(e) {
    let [t, n] = l.useState(void 0);
    return (
        l.useEffect(() => {
            null != e.current && n(getComputedStyle(e.current));
        }, [e]),
        t
    );
}
function g(e) {
    let { application: t, context: n, name: r, iconURL: g, scrollerRef: x, sectionName: b } = e,
        N = (0, s.ap)((0, u.ZP)()),
        j = l.useRef(null),
        C = l.useRef(null),
        E = l.useRef(null),
        P = l.useRef(null),
        A = (0, c.dQu)(c.TVs.colors.BACKGROUND_BASE_LOW).hex(),
        _ = (0, d.ZP)("number" == typeof g ? "" : g, null != A ? A : ""),
        O = l.useMemo(() => {
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
        I = y(j),
        S = y(C),
        T = l.useCallback(() => {
            var e, t, n, i;
            let l = x.current,
                r = j.current,
                a = E.current,
                s = null == P ? void 0 : P.current,
                c = parseInt(null != (e = null == I ? void 0 : I.height) ? e : ""),
                u = parseInt(null != (t = null == S ? void 0 : S.height) ? t : "");
            if (null != l && null != r && null != a && !isNaN(c) && !isNaN(u)) {
                let e = null != (n = l.scrollTop) ? n : 0,
                    t = 0 !== l.scrollHeight ? l.scrollHeight : u + 20,
                    d = 0 !== l.clientHeight ? l.clientHeight : u + 20,
                    p = u - c,
                    m = (0, o.clamp)(t - d, p + 1, u + 20),
                    f = p === m ? 1 : (0, o.clamp)((e - p) / (m - p), 0, 1);
                (r.style.filter = "brightness(".concat(1 + ((N ? 1.4 : 0.6) - 1) * f, ")")),
                    (r.style.backgroundColor = "color-mix(in oklab,"
                        .concat(_, " ")
                        .concat((1 - f) * 100, "%, ")
                        .concat(O, ")")),
                    (a.style.opacity = "".concat(0 + +f)),
                    (a.style.transform = "translateY(".concat((i = c / 4) + (0 - i) * f, "px)")),
                    null != s && (s.style.opacity = "".concat(1 + -1 * f));
            }
        }, [O, _, null == S ? void 0 : S.height, N, x, null == I ? void 0 : I.height]);
    return (
        l.useEffect(() => {
            T();
        }, [T, N]),
        l.useEffect(() => {
            let e = x.current,
                t = () => {
                    T();
                };
            return (
                null == e || e.addEventListener("scroll", t),
                () => {
                    null == e || e.removeEventListener("scroll", t);
                }
            );
        }, [x, T]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: v.stickyContainer,
                    children: [
                        (0, i.jsx)("div", {
                            className: v.stickyBannerContainer,
                            children: (0, i.jsx)("div", {
                                className: v.stickyBanner,
                                ref: j,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: v.backButtonContainer,
                            children: (0, i.jsx)(f.Z, { className: v.headerButton }),
                        }),
                        (0, i.jsx)("div", {
                            className: v.nameContainer,
                            children: (0, i.jsx)(c.Heading, {
                                ref: E,
                                className: v.textApplicationName,
                                variant: "heading-lg/extrabold",
                                children: r,
                            }),
                        }),
                    ],
                }),
                (0, m.BQ)(t)
                    ? (0, i.jsx)("div", {
                          ref: P,
                          className: v.moreMenuButtonContainer,
                          children: (0, i.jsx)(h.Z, {
                              application: t,
                              context: n,
                              className: v.headerButton,
                              sectionName: b,
                          }),
                      })
                    : null,
                (0, i.jsx)("div", {
                    ref: C,
                    className: v.bannerBackground,
                    style: { backgroundColor: _ },
                }),
            ],
        })
    );
}
