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
    _ = n(783097),
    p = n(772606),
    h = n(488977),
    m = n(236050);
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
    let { application: t, context: n, name: a, iconURL: O, scrollerRef: v, sectionName: I } = e,
        T = (0, l.ap)((0, u.ZP)()),
        S = i.useRef(null),
        A = i.useRef(null),
        C = i.useRef(null),
        N = i.useRef(null),
        R = (0, c.dQu)(c.TVs.colors.BACKGROUND_BASE_LOW).hex(),
        P = (0, d.ZP)("number" == typeof O ? "" : O, null != R ? R : ""),
        D = i.useMemo(() => {
            var e, t;
            return null !=
                (t =
                    null ==
                    (e = (0, f.wh)({
                        foreground: o()(P),
                        background: o()(T ? "#000000" : "#ffffff"),
                        ratio: 5,
                        saturationFactor: 0.6,
                    }))
                        ? void 0
                        : e.hex())
                ? t
                : P;
        }, [P, T]),
        w = y(S),
        L = y(A),
        x = i.useCallback(() => {
            var e, t, n;
            let r = v.current,
                i = S.current,
                a = C.current,
                o = null == N ? void 0 : N.current,
                l = parseInt(null != (e = null == w ? void 0 : w.height) ? e : ""),
                c = parseInt(null != (t = null == L ? void 0 : L.height) ? t : "");
            if (null != r && null != i && null != a && !isNaN(l) && !isNaN(c)) {
                let e = null != (n = r.scrollTop) ? n : 0,
                    t = 0 !== r.scrollHeight ? r.scrollHeight : c + g,
                    u = 0 !== r.clientHeight ? r.clientHeight : c + g,
                    d = c - l,
                    f = (0, s.clamp)(t - u, d + 1, c + g),
                    _ = E(e, d, f);
                (i.style.filter = "brightness(".concat(b(1, T ? 1.4 : 0.6, _), ")")),
                    (i.style.backgroundColor = "color-mix(in oklab,"
                        .concat(P, " ")
                        .concat((1 - _) * 100, "%, ")
                        .concat(D, ")")),
                    (a.style.opacity = "".concat(b(0, 1, _))),
                    (a.style.transform = "translateY(".concat(b(l / 4, 0, _), "px)")),
                    null != o && (o.style.opacity = "".concat(b(1, 0, _)));
            }
        }, [D, P, null == L ? void 0 : L.height, T, v, null == w ? void 0 : w.height]);
    return (
        i.useEffect(() => {
            x();
        }, [x, T]),
        i.useEffect(() => {
            let e = v.current,
                t = () => {
                    x();
                };
            return (
                null == e || e.addEventListener("scroll", t),
                () => {
                    null == e || e.removeEventListener("scroll", t);
                }
            );
        }, [v, x]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: m.stickyContainer,
                    children: [
                        (0, r.jsx)("div", {
                            className: m.stickyBannerContainer,
                            children: (0, r.jsx)("div", {
                                className: m.stickyBanner,
                                ref: S,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: m.backButtonContainer,
                            children: (0, r.jsx)(p.Z, { className: m.headerButton }),
                        }),
                        (0, r.jsx)("div", {
                            className: m.nameContainer,
                            children: (0, r.jsx)(c.Heading, {
                                ref: C,
                                className: m.textApplicationName,
                                variant: "heading-lg/extrabold",
                                children: a,
                            }),
                        }),
                    ],
                }),
                (0, _.BQ)(t)
                    ? (0, r.jsx)("div", {
                          ref: N,
                          className: m.moreMenuButtonContainer,
                          children: (0, r.jsx)(h.Z, {
                              application: t,
                              context: n,
                              className: m.headerButton,
                              sectionName: I,
                          }),
                      })
                    : null,
                (0, r.jsx)("div", {
                    ref: A,
                    className: m.bannerBackground,
                    style: { backgroundColor: P },
                }),
            ],
        })
    );
}
