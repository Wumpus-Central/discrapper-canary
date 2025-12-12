n.d(t, { Z: () => O }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(688619),
    o = n.n(a),
    s = n(392711),
    l = n(780384),
    c = n(481060),
    u = n(410030),
    d = n(220082),
    f = n(302221),
    p = n(783097),
    _ = n(772606),
    m = n(488977),
    h = n(438959);
let g = 20;
function E(e, t, n) {
    return t === n ? 1 : (0, s.clamp)((e - t) / (n - t), 0, 1);
}
function b(e, t, n) {
    return e + (t - e) * n;
}
function y(e) {
    let [t, n] = i.useState(void 0);
    return (
        i.useEffect(() => {
            null != e.current && n(getComputedStyle(e.current));
        }, [e]),
        t
    );
}
function O(e) {
    let { application: t, context: n, name: a, iconURL: O, scrollerRef: v, sectionName: S } = e,
        I = (0, l.ap)((0, u.ZP)()),
        T = i.useRef(null),
        C = i.useRef(null),
        A = i.useRef(null),
        N = i.useRef(null),
        P = (0, c.dQu)(c.TVs.colors.BACKGROUND_BASE_LOW).hex(),
        R = (0, d.ZP)("number" == typeof O ? "" : O, null != P ? P : ""),
        w = i.useMemo(() => {
            var e, t;
            return null !=
                (t =
                    null ==
                    (e = (0, f.wh)({
                        foreground: o()(R),
                        background: o()(I ? "#000000" : "#ffffff"),
                        ratio: 5,
                        saturationFactor: 0.6,
                    }))
                        ? void 0
                        : e.hex())
                ? t
                : R;
        }, [R, I]),
        D = y(T),
        x = y(C),
        L = i.useCallback(() => {
            var e, t, n;
            let r = v.current,
                i = T.current,
                a = A.current,
                o = null == N ? void 0 : N.current,
                l = parseInt(null != (e = null == D ? void 0 : D.height) ? e : ""),
                c = parseInt(null != (t = null == x ? void 0 : x.height) ? t : "");
            if (null != r && null != i && null != a && !isNaN(l) && !isNaN(c)) {
                let e = null != (n = r.scrollTop) ? n : 0,
                    t = 0 !== r.scrollHeight ? r.scrollHeight : c + g,
                    u = 0 !== r.clientHeight ? r.clientHeight : c + g,
                    d = c - l,
                    f = (0, s.clamp)(t - u, d + 1, c + g),
                    p = E(e, d, f);
                (i.style.filter = "brightness(".concat(b(1, I ? 1.4 : 0.6, p), ")")),
                    (i.style.backgroundColor = "color-mix(in oklab,"
                        .concat(R, " ")
                        .concat((1 - p) * 100, "%, ")
                        .concat(w, ")")),
                    (a.style.opacity = "".concat(b(0, 1, p))),
                    (a.style.transform = "translateY(".concat(b(l / 4, 0, p), "px)")),
                    null != o && (o.style.opacity = "".concat(b(1, 0, p)));
            }
        }, [w, R, null == x ? void 0 : x.height, I, v, null == D ? void 0 : D.height]);
    return (
        i.useEffect(() => {
            L();
        }, [L, I]),
        i.useEffect(() => {
            let e = v.current,
                t = () => {
                    L();
                };
            return (
                null == e || e.addEventListener("scroll", t),
                () => {
                    null == e || e.removeEventListener("scroll", t);
                }
            );
        }, [v, L]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: h.stickyContainer,
                    children: [
                        (0, r.jsx)("div", {
                            className: h.stickyBannerContainer,
                            children: (0, r.jsx)("div", {
                                className: h.stickyBanner,
                                ref: T,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: h.backButtonContainer,
                            children: (0, r.jsx)(_.Z, { className: h.headerButton }),
                        }),
                        (0, r.jsx)("div", {
                            className: h.nameContainer,
                            children: (0, r.jsx)(c.Heading, {
                                ref: A,
                                className: h.textApplicationName,
                                variant: "heading-lg/extrabold",
                                children: a,
                            }),
                        }),
                    ],
                }),
                (0, p.BQ)(t)
                    ? (0, r.jsx)("div", {
                          ref: N,
                          className: h.moreMenuButtonContainer,
                          children: (0, r.jsx)(m.Z, {
                              application: t,
                              context: n,
                              className: h.headerButton,
                              sectionName: S,
                          }),
                      })
                    : null,
                (0, r.jsx)("div", {
                    ref: C,
                    className: h.bannerBackground,
                    style: { backgroundColor: R },
                }),
            ],
        })
    );
}
