"use strict";
n.d(t, { A: () => T });
var r = n(627968),
    i = n(64700),
    a = n(310784),
    s = n.n(a),
    o = n(735438),
    l = n(582754),
    u = n(397927),
    c = n(736653),
    d = n(654107),
    _ = n(998304),
    f = n(735991),
    p = n(278597),
    h = n(645725),
    m = n(541781);
let g = 20;
function E(e, t, n) {
    return t === n ? 1 : (0, o.clamp)((e - t) / (n - t), 0, 1);
}
function A(e, t, n) {
    return e + (t - e) * n;
}
function I(e) {
    let [t, n] = i.useState(void 0);
    return (
        i.useEffect(() => {
            null != e.current && n(getComputedStyle(e.current));
        }, [e]),
        t
    );
}
function T(e) {
    let { application: t, context: n, name: a, iconURL: T, scrollerRef: y, sectionName: S } = e,
        v = (0, l.qB)((0, c.Ay)()),
        C = i.useRef(null),
        b = i.useRef(null),
        N = i.useRef(null),
        R = i.useRef(null),
        O = (0, u.rdh)(u.LU0.colors.BACKGROUND_BASE_LOW).hex(),
        D = (0, d.Ay)("number" == typeof T ? "" : T, O ?? ""),
        L = i.useMemo(
            () =>
                (0, _.lZ)({
                    foreground: s()(D),
                    background: s()(v ? "#000000" : "#ffffff"),
                    ratio: 5,
                    saturationFactor: 0.6,
                })?.hex() ?? D,
            [D, v],
        ),
        w = I(C),
        x = I(b),
        P = i.useCallback(() => {
            let e = y.current,
                t = C.current,
                n = N.current,
                r = R?.current,
                i = parseInt(w?.height ?? ""),
                a = parseInt(x?.height ?? "");
            if (null != e && null != t && null != n && !isNaN(i) && !isNaN(a)) {
                let s = e.scrollTop ?? 0,
                    l = 0 !== e.scrollHeight ? e.scrollHeight : a + g,
                    u = 0 !== e.clientHeight ? e.clientHeight : a + g,
                    c = a - i,
                    d = (0, o.clamp)(l - u, c + 1, a + g),
                    _ = E(s, c, d);
                (t.style.filter = `brightness(${A(1, v ? 1.4 : 0.6, _)})`),
                    (t.style.backgroundColor = `color-mix(in oklab,${D} ${(1 - _) * 100}%, ${L})`),
                    (n.style.opacity = `${A(0, 1, _)}`),
                    (n.style.transform = `translateY(${A(i / 4, 0, _)}px)`),
                    null != r && (r.style.opacity = `${A(1, 0, _)}`);
            }
        }, [L, D, x?.height, v, y, w?.height]);
    return (
        i.useEffect(() => {
            P();
        }, [P, v]),
        i.useEffect(() => {
            let e = y.current,
                t = () => {
                    P();
                };
            return (
                e?.addEventListener("scroll", t),
                () => {
                    e?.removeEventListener("scroll", t);
                }
            );
        }, [y, P]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: m.Xp,
                    children: [
                        (0, r.jsx)("div", {
                            className: m.LO,
                            children: (0, r.jsx)("div", { className: m.If, ref: C }),
                        }),
                        (0, r.jsx)("div", { className: m.FY, children: (0, r.jsx)(p.A, { className: m.aY }) }),
                        (0, r.jsx)("div", {
                            className: m.VW,
                            children: (0, r.jsx)(u.Heading, {
                                ref: N,
                                className: m.n,
                                variant: "heading-lg/extrabold",
                                children: a,
                            }),
                        }),
                    ],
                }),
                (0, f.$B)(t)
                    ? (0, r.jsx)("div", {
                          ref: R,
                          className: m.Ch,
                          children: (0, r.jsx)(h.A, { application: t, context: n, className: m.aY, sectionName: S }),
                      })
                    : null,
                (0, r.jsx)("div", { ref: b, className: m.b8, style: { backgroundColor: D } }),
            ],
        })
    );
}
