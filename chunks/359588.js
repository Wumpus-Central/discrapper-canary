n.d(t, {
    A: () => h,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    a = n(735438),
    i = n.n(a),
    s = n(311907),
    o = n(397927),
    c = n(775602),
    u = n(998304),
    d = n(854987),
    m = n(40333),
    f = n(745174);

function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function h(e) {
    let { start: t = 0, end: n, alignment: a = "left" } = e,
        h = (0, l.useRef)(Date.now()),
        b = (0, l.useRef)(0),
        g = (0, l.useContext)(d.P),
        x = (0, o.rdh)(g.primaryColor).hex(),
        y = (0, m.A)(x),
        v = (0, u.j5)(y),
        [j, C] = (0, l.useState)(t),
        _ = (0, s.bG)([c.A], () => c.A.useReducedMotion);
    (0, l.useEffect)(() => {
        let e = i().throttle(() => {
            let r = Math.min((Date.now() - h.current) / 500, 1);
            C(Math.round((n - t) * r + t)), r < 1 && (b.current = requestAnimationFrame(e));
        }, 32);
        return (
            (b.current = requestAnimationFrame(e)),
            () => {
                cancelAnimationFrame(b.current), e.cancel();
            }
        );
    }, [t, n, C]);
    let A = {
        className: f.l,
        dataBinding: {
            DisplayValue: j,
            TextColor: {
                r: v.r,
                g: v.g,
                b: v.b,
                a: 255 * v.a,
            },
            reducedMotion: _,
        },
        fit: "layout",
        withReducedMotion: "play",
    };
    return "left" === a ? (0, r.jsx)(o.wWi, p({}, A)) : (0, r.jsx)(o.mfv, p({}, A));
}
