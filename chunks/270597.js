(n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162));
var i = n(477900),
    r = n(582128),
    a = n(971940),
    s = n(844222),
    l = n(116711),
    o = n(611361);
let d = (e, t) => e.number(t),
    c = (e, t) => e.string(t),
    u = (e, t) => e.boolean(t),
    _ = (e, t) => e.color(t),
    E = (e, t) => e.enum(t),
    A = (e, t) => e.trigger(t);
function f(e, t, n, i, a) {
    let s = r.useRef(a);
    r.useEffect(() => {
        s.current = a;
    }, [a]);
    let l = r.useRef(i);
    r.useEffect(() => {
        l.current = i;
    }, [i]);
    let o = null != a;
    r.useEffect(() => {
        let i = null != e && o ? n(e, t) : null;
        if (null == i) return;
        let r = () => s.current?.(l.current(i));
        return (r(), i.on(r), () => i.off(r));
    }, [e, t, n, o]);
}
function h(e) {
    return e.value;
}
function I(e, t, n, i, a) {
    (r.useEffect(() => {
        let i = null == t || null == n ? null : d(t, e);
        null != i && null != n && ((i.value = n), a?.());
    }, [n, a, e, t]),
        f(t, e, d, h, i));
}
function p(e, t, n, i, a) {
    (r.useEffect(() => {
        let i = null == t || null == n ? null : c(t, e);
        null != i && null != n && ((i.value = n), a?.());
    }, [n, a, e, t]),
        f(t, e, c, h, i));
}
function m(e, t, n, i, a) {
    (r.useEffect(() => {
        let i = null == t || null == n ? null : u(t, e);
        null != i && null != n && ((i.value = n), a?.());
    }, [n, a, e, t]),
        f(t, e, u, h, i));
}
function T(e, t, n, i, a) {
    let { theme: o, saturation: d } = (0, l.G9)(),
        { highContrastModeEnabled: c } = r.useContext(s.C);
    (r.useEffect(() => {
        let i = null == t || null == n ? null : _(t, e);
        if (null != i && null != n) {
            if ("number" == typeof n) i.value = n;
            else if ("resolve" in n) {
                let [e, t, r, a] = n.resolve({ theme: o, saturation: d, highContrastModeEnabled: c }).rgba();
                i.rgba(e, t, r, 255 * a);
            } else i.rgba(n.r, n.g, n.b, (n.a ?? 1) * 255);
            a?.();
        }
    }, [n, o, d, c, a, e, t]),
        f(t, e, _, h, i));
}
function g(e, t, n, i, a) {
    (r.useEffect(() => {
        let i = null == t || null == n ? null : E(t, e);
        null != i && null != n && ((i.value = n), a?.());
    }, [n, a, e, t]),
        f(t, e, E, h, i));
}
function S(e, t, n, i, a) {
    var s, l, o, d;
    let c,
        u,
        _ = r.useRef(null);
    (r.useEffect(() => {
        if (null == t) return;
        let i = _.current;
        (i?.instance === t && i.value === n) ||
            ((_.current = { instance: t, value: n }),
            ("boolean" == typeof n ? n : null != n && 0 !== n) && (A(t, e)?.trigger(), a?.()));
    }, [n, a, e, t]),
        (s = t),
        (l = e),
        (o = A),
        (d = r.useMemo(() => (null == i ? void 0 : () => i()), [i])),
        (c = r.useRef(d)),
        r.useEffect(() => {
            c.current = d;
        }, [d]),
        (u = null != d),
        r.useEffect(() => {
            let e = null != s && u ? o(s, l) : null;
            if (null == e) return;
            let t = () => c.current?.();
            return (e.on(t), () => e.off(t));
        }, [s, l, o, u]));
}
function N(e, t, n, i, s) {
    let l = r.useRef({}),
        o = r.useRef(i);
    r.useEffect(() => {
        o.current = i;
    }, [i]);
    let d = r.useRef(s);
    (r.useEffect(() => {
        d.current = s;
    }, [s]),
        r.useEffect(() => {
            if (null == t || null == n) return;
            let i = new AbortController(),
                { signal: r } = i;
            return (
                !(async function (t, n) {
                    let i = await (async function (e) {
                        let t = l.current[e];
                        if (null != t) return t;
                        try {
                            let t = await fetch(e, { signal: r });
                            if (!t.ok) return null;
                            let n = await (0, a.decodeImage)(new Uint8Array(await t.arrayBuffer()));
                            if (null == n) return null;
                            return ((l.current[e] = n), n);
                        } catch {
                            return null;
                        }
                    })(n);
                    if (r.aborted) return;
                    let s = "failed",
                        c = t.image(e);
                    (null != i && null != c && ((c.value = i), d.current?.(), (s = "loaded")), o.current?.(n, s));
                })(t, n),
                () => i.abort("New image value applied.")
            );
        }, [n, e, t]));
}
function C(e, t, n, i, a) {
    r.useEffect(() => {
        if (null == t || null == n || null == i) return;
        let r = t.artboard(e),
            s = n.getBindableArtboard(i);
        null != r && null != s && ((r.value = s), a?.());
    }, [n, i, a, e, t]);
}
function O(e) {
    let { path: t, value: n } = e,
        { instance: i, playIfNeeded: r } = (0, o.o)();
    return (I(t, i, n, void 0, r), null);
}
function R(e) {
    let { path: t, value: n } = e,
        { instance: i, playIfNeeded: r } = (0, o.o)();
    return (p(t, i, n, void 0, r), null);
}
function L(e) {
    let { path: t, value: n } = e,
        { instance: i, playIfNeeded: r } = (0, o.o)();
    return (m(t, i, n, void 0, r), null);
}
function y(e) {
    let { path: t, value: n } = e,
        { instance: i, playIfNeeded: r } = (0, o.o)();
    return (T(t, i, n, void 0, r), null);
}
function D(e) {
    let { path: t, value: n } = e,
        { instance: i, playIfNeeded: r } = (0, o.o)();
    return (g(t, i, n, void 0, r), null);
}
function b(e) {
    let { path: t, value: n } = e,
        { instance: i, playIfNeeded: r } = (0, o.o)();
    return (S(t, i, n, void 0, r), null);
}
function v(e) {
    let { path: t, value: n } = e,
        { instance: i, playIfNeeded: r } = (0, o.o)();
    return (N(t, i, n, void 0, r), null);
}
function P(e) {
    let { path: t, value: n } = e,
        { instance: i, rive: r, playIfNeeded: a } = (0, o.o)();
    return (C(t, i, r, n, a), null);
}
function M(e) {
    let { path: t, binding: n } = e;
    switch (n.type) {
        case "number":
            return (0, i.jsx)(O, { path: t, value: n.value });
        case "string":
            return (0, i.jsx)(R, { path: t, value: n.value });
        case "boolean":
            return (0, i.jsx)(L, { path: t, value: n.value });
        case "color":
            return (0, i.jsx)(y, { path: t, value: n.value });
        case "enum":
            return (0, i.jsx)(D, { path: t, value: n.value });
        case "trigger":
            return (0, i.jsx)(b, { path: t, value: n.value });
        case "image":
            return (0, i.jsx)(v, { path: t, value: n.value });
        case "artboard":
            return (0, i.jsx)(P, { path: t, value: n.value });
        default:
            return null;
    }
}
function U() {
    let { instance: e, reducedMotionEnabled: t, playIfNeeded: n } = (0, o.o)();
    return (m("reducedMotion", e, t, void 0, n), null);
}
n.d(
    t,
    {},
    {
        Dr: m,
        Of: I,
        QJ: T,
        SX: N,
        Yn: function (e) {
            let { dynamicDataBinding: t } = e,
                n = Object.entries(t ?? {});
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    t?.reducedMotion == null ? (0, i.jsx)(U, {}) : null,
                    n.map((e) => {
                        let [t, n] = e;
                        return null == n ? null : (0, i.jsx)(M, { path: t, binding: n }, `${t}:${n.type}`);
                    }),
                ],
            });
        },
        gl: C,
        k6: p,
        u9: g,
        zJ: S,
    },
);
