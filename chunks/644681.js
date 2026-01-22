n.d(t, { A: () => O }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(310784),
    s = n.n(a),
    o = n(735438),
    l = n(582754),
    c = n(397927),
    u = n(736653),
    d = n(654107),
    f = n(998304),
    p = n(735991),
    _ = n(278597),
    h = n(645725),
    m = n(541781);
let g = 20;
function E(e, t, n) {
    return t === n ? 1 : (0, o.clamp)((e - t) / (n - t), 0, 1);
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
    let { application: t, context: n, name: a, iconURL: O, scrollerRef: A, sectionName: v } = e,
        S = (0, l.qB)((0, u.Ay)()),
        I = i.useRef(null),
        T = i.useRef(null),
        C = i.useRef(null),
        N = i.useRef(null),
        R = (0, c.rdh)(c.LU0.colors.BACKGROUND_BASE_LOW).hex(),
        w = (0, d.Ay)("number" == typeof O ? "" : O, null != R ? R : ""),
        P = i.useMemo(() => {
            var e, t;
            return null !=
                (e =
                    null ==
                    (t = (0, f.lZ)({
                        foreground: s()(w),
                        background: s()(S ? "#000000" : "#ffffff"),
                        ratio: 5,
                        saturationFactor: 0.6,
                    }))
                        ? void 0
                        : t.hex())
                ? e
                : w;
        }, [w, S]),
        D = y(I),
        x = y(T),
        L = i.useCallback(() => {
            var e, t, n;
            let r = A.current,
                i = I.current,
                a = C.current,
                s = null == N ? void 0 : N.current,
                l = parseInt(null != (e = null == D ? void 0 : D.height) ? e : ""),
                c = parseInt(null != (t = null == x ? void 0 : x.height) ? t : "");
            if (null != r && null != i && null != a && !isNaN(l) && !isNaN(c)) {
                let e = null != (n = r.scrollTop) ? n : 0,
                    t = 0 !== r.scrollHeight ? r.scrollHeight : c + g,
                    u = 0 !== r.clientHeight ? r.clientHeight : c + g,
                    d = c - l,
                    f = (0, o.clamp)(t - u, d + 1, c + g),
                    p = E(e, d, f);
                (i.style.filter = "brightness(".concat(b(1, S ? 1.4 : 0.6, p), ")")),
                    (i.style.backgroundColor = "color-mix(in oklab,"
                        .concat(w, " ")
                        .concat((1 - p) * 100, "%, ")
                        .concat(P, ")")),
                    (a.style.opacity = "".concat(b(0, 1, p))),
                    (a.style.transform = "translateY(".concat(b(l / 4, 0, p), "px)")),
                    null != s && (s.style.opacity = "".concat(b(1, 0, p)));
            }
        }, [P, w, null == x ? void 0 : x.height, S, A, null == D ? void 0 : D.height]);
    return (
        i.useEffect(() => {
            L();
        }, [L, S]),
        i.useEffect(() => {
            let e = A.current,
                t = () => {
                    L();
                };
            return (
                null == e || e.addEventListener("scroll", t),
                () => {
                    null == e || e.removeEventListener("scroll", t);
                }
            );
        }, [A, L]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: m.Xp,
                    children: [
                        (0, r.jsx)("div", {
                            className: m.LO,
                            children: (0, r.jsx)("div", {
                                className: m.If,
                                ref: I,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: m.FY,
                            children: (0, r.jsx)(_.A, { className: m.aY }),
                        }),
                        (0, r.jsx)("div", {
                            className: m.VW,
                            children: (0, r.jsx)(c.Heading, {
                                ref: C,
                                className: m.n,
                                variant: "heading-lg/extrabold",
                                children: a,
                            }),
                        }),
                    ],
                }),
                (0, p.$B)(t)
                    ? (0, r.jsx)("div", {
                          ref: N,
                          className: m.Ch,
                          children: (0, r.jsx)(h.A, {
                              application: t,
                              context: n,
                              className: m.aY,
                              sectionName: v,
                          }),
                      })
                    : null,
                (0, r.jsx)("div", {
                    ref: T,
                    className: m.b8,
                    style: { backgroundColor: w },
                }),
            ],
        })
    );
}
