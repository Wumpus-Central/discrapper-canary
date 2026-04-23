n.d(t, { A: () => g });
var i = n(627968),
    l = n(64700),
    a = n(310784),
    s = n.n(a),
    r = n(735438),
    o = n(462887),
    c = n(602853),
    d = n(827734),
    u = n(534514),
    m = n(736653),
    p = n(654107),
    _ = n(998304),
    A = n(735991),
    h = n(278597),
    f = n(645725),
    x = n(379106);
function C(e) {
    let [t, n] = l.useState(void 0);
    return (
        l.useEffect(() => {
            null != e.current && n(getComputedStyle(e.current));
        }, [e]),
        t
    );
}
function g(e) {
    let { application: t, context: n, name: a, iconURL: g, scrollerRef: N, sectionName: E } = e,
        b = (0, o.q)((0, m.Ay)()),
        I = l.useRef(null),
        v = l.useRef(null),
        y = l.useRef(null),
        j = l.useRef(null),
        P = (0, c.r)(d.A.colors.BACKGROUND_BASE_LOW).hex(),
        L = (0, p.Ay)("number" == typeof g ? "" : g, P ?? ""),
        T = l.useMemo(
            () =>
                (0, _.lZ)({
                    foreground: s()(L),
                    background: s()(b ? "#000000" : "#ffffff"),
                    ratio: 5,
                    saturationFactor: 0.6,
                })?.hex() ?? L,
            [L, b],
        ),
        S = C(I),
        R = C(v),
        O = l.useCallback(() => {
            let e = N.current,
                t = I.current,
                n = y.current,
                i = j?.current,
                l = parseInt(S?.height ?? ""),
                a = parseInt(R?.height ?? "");
            if (null != e && null != t && null != n && !isNaN(l) && !isNaN(a)) {
                var s;
                let o = e.scrollTop ?? 0,
                    c = 0 !== e.scrollHeight ? e.scrollHeight : a + 20,
                    d = 0 !== e.clientHeight ? e.clientHeight : a + 20,
                    u = a - l,
                    m = (0, r.clamp)(c - d, u + 1, a + 20),
                    p = u === m ? 1 : (0, r.clamp)((o - u) / (m - u), 0, 1);
                (t.style.filter = `brightness(${1 + ((b ? 1.4 : 0.6) - 1) * p})`),
                    (t.style.backgroundColor = `color-mix(in oklab,${L} ${(1 - p) * 100}%, ${T})`),
                    (n.style.opacity = `${0 + +p}`),
                    (n.style.transform = `translateY(${(s = l / 4) + (0 - s) * p}px)`),
                    null != i && (i.style.opacity = `${1 + -1 * p}`);
            }
        }, [T, L, R?.height, b, N, S?.height]);
    return (
        l.useEffect(() => {
            O();
        }, [O, b]),
        l.useEffect(() => {
            let e = N.current,
                t = () => {
                    O();
                };
            return (
                e?.addEventListener("scroll", t),
                () => {
                    e?.removeEventListener("scroll", t);
                }
            );
        }, [N, O]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: x.Xp,
                    children: [
                        (0, i.jsx)("div", {
                            className: x.LO,
                            children: (0, i.jsx)("div", { className: x.If, ref: I }),
                        }),
                        (0, i.jsx)("div", { className: x.FY, children: (0, i.jsx)(h.A, { className: x.aY }) }),
                        (0, i.jsx)("div", {
                            className: x.VW,
                            children: (0, i.jsx)(u.D, {
                                ref: y,
                                className: x.n,
                                variant: "heading-lg/extrabold",
                                children: a,
                            }),
                        }),
                    ],
                }),
                (0, A.$B)(t)
                    ? (0, i.jsx)("div", {
                          ref: j,
                          className: x.Ch,
                          children: (0, i.jsx)(f.A, { application: t, context: n, className: x.aY, sectionName: E }),
                      })
                    : null,
                (0, i.jsx)("div", { ref: v, className: x.b8, style: { backgroundColor: L } }),
            ],
        })
    );
}
