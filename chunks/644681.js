n.d(t, { A: () => N });
var l = n(627968),
    i = n(64700),
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
    let [t, n] = i.useState(void 0);
    return (
        i.useEffect(() => {
            null != e.current && n(getComputedStyle(e.current));
        }, [e]),
        t
    );
}
function N(e) {
    let { application: t, context: n, name: a, iconURL: N, scrollerRef: g, sectionName: E } = e,
        v = (0, o.q)((0, m.Ay)()),
        b = i.useRef(null),
        I = i.useRef(null),
        y = i.useRef(null),
        j = i.useRef(null),
        P = (0, c.r)(d.A.colors.BACKGROUND_BASE_LOW).hex(),
        T = (0, p.Ay)("number" == typeof N ? "" : N, P ?? ""),
        L = i.useMemo(
            () =>
                (0, _.lZ)({
                    foreground: s()(T),
                    background: s()(v ? "#000000" : "#ffffff"),
                    ratio: 5,
                    saturationFactor: 0.6,
                })?.hex() ?? T,
            [T, v],
        ),
        S = C(b),
        R = C(I),
        O = i.useCallback(() => {
            let e = g.current,
                t = b.current,
                n = y.current,
                l = j?.current,
                i = parseInt(S?.height ?? ""),
                a = parseInt(R?.height ?? "");
            if (null != e && null != t && null != n && !isNaN(i) && !isNaN(a)) {
                var s;
                let o = e.scrollTop ?? 0,
                    c = 0 !== e.scrollHeight ? e.scrollHeight : a + 20,
                    d = 0 !== e.clientHeight ? e.clientHeight : a + 20,
                    u = a - i,
                    m = (0, r.clamp)(c - d, u + 1, a + 20),
                    p = u === m ? 1 : (0, r.clamp)((o - u) / (m - u), 0, 1);
                (t.style.filter = `brightness(${1 + ((v ? 1.4 : 0.6) - 1) * p})`),
                    (t.style.backgroundColor = `color-mix(in oklab,${T} ${(1 - p) * 100}%, ${L})`),
                    (n.style.opacity = `${0 + +p}`),
                    (n.style.transform = `translateY(${(s = i / 4) + (0 - s) * p}px)`),
                    null != l && (l.style.opacity = `${1 + -1 * p}`);
            }
        }, [L, T, R?.height, v, g, S?.height]);
    return (
        i.useEffect(() => {
            O();
        }, [O, v]),
        i.useEffect(() => {
            let e = g.current,
                t = () => {
                    O();
                };
            return (
                e?.addEventListener("scroll", t),
                () => {
                    e?.removeEventListener("scroll", t);
                }
            );
        }, [g, O]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)("div", {
                    className: x.Xp,
                    children: [
                        (0, l.jsx)("div", {
                            className: x.LO,
                            children: (0, l.jsx)("div", { className: x.If, ref: b }),
                        }),
                        (0, l.jsx)("div", { className: x.FY, children: (0, l.jsx)(h.A, { className: x.aY }) }),
                        (0, l.jsx)("div", {
                            className: x.VW,
                            children: (0, l.jsx)(u.D, {
                                ref: y,
                                className: x.n,
                                variant: "heading-lg/extrabold",
                                children: a,
                            }),
                        }),
                    ],
                }),
                (0, A.$B)(t)
                    ? (0, l.jsx)("div", {
                          ref: j,
                          className: x.Ch,
                          children: (0, l.jsx)(f.A, { application: t, context: n, className: x.aY, sectionName: E }),
                      })
                    : null,
                (0, l.jsx)("div", { ref: I, className: x.b8, style: { backgroundColor: T } }),
            ],
        })
    );
}
