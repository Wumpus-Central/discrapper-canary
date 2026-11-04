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
    A = (e, t) => e.trigger(t),
    h = (e, t) => e.image(t);
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
function I(e) {
    return e.value;
}
function p(e, t, n, i, a) {
    (r.useEffect(() => {
        let i = null == t || null == n ? null : d(t, e);
        null != i && null != n && ((i.value = n), a?.());
    }, [n, a, e, t]),
        f(t, e, d, I, i));
}
function m(e, t, n, i, a) {
    (r.useEffect(() => {
        let i = null == t || null == n ? null : c(t, e);
        null != i && null != n && ((i.value = n), a?.());
    }, [n, a, e, t]),
        f(t, e, c, I, i));
}
function g(e, t, n, i, a) {
    (r.useEffect(() => {
        let i = null == t || null == n ? null : u(t, e);
        null != i && null != n && ((i.value = n), a?.());
    }, [n, a, e, t]),
        f(t, e, u, I, i));
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
        f(t, e, _, I, i));
}
function S(e, t, n, i, a) {
    (r.useEffect(() => {
        let i = null == t || null == n ? null : E(t, e);
        null != i && null != n && ((i.value = n), a?.());
    }, [n, a, e, t]),
        f(t, e, E, I, i));
}
function N(e, t, n, i, a) {
    let s = r.useRef(null);
    (r.useEffect(() => {
        if (null == t) return;
        let i = s.current;
        (i?.instance === t && i.value === n) ||
            ((s.current = { instance: t, value: n }),
            ("boolean" == typeof n ? n : null != n && 0 !== n) && (A(t, e)?.trigger(), a?.()));
    }, [n, a, e, t]),
        C(
            t,
            e,
            A,
            r.useMemo(() => (null == i ? void 0 : () => i()), [i]),
        ));
}
function C(e, t, n, i) {
    let a = r.useRef(i);
    r.useEffect(() => {
        a.current = i;
    }, [i]);
    let s = null != i;
    r.useEffect(() => {
        let i = null != e && s ? n(e, t) : null;
        if (null == i) return;
        let r = () => a.current?.();
        return (i.on(r), () => i.off(r));
    }, [e, t, n, s]);
}
function O(e, t, n, i, s) {
    let l = r.useRef({});
    (r.useEffect(() => {
        if (null == t || null == n) return;
        let i = new AbortController(),
            { signal: r } = i;
        return (
            !(async function (t, n) {
                let i = l.current[n];
                if (null == i) {
                    try {
                        let e = await fetch(n, { signal: r });
                        i = await (0, a.decodeImage)(new Uint8Array(await e.arrayBuffer()));
                    } catch (e) {
                        if (r.aborted) return;
                        throw e;
                    }
                    l.current[n] = i;
                }
                if (r.aborted) return;
                let o = h(t, e);
                null != o && ((o.value = i), s?.());
            })(t, n),
            () => i.abort("New image value applied.")
        );
    }, [n, s, e, t]),
        C(t, e, h, i));
}
function R(e, t, n, i, a) {
    r.useEffect(() => {
        if (null == t || null == n || null == i) return;
        let r = t.artboard(e),
            s = n.getBindableArtboard(i);
        null != r && null != s && ((r.value = s), a?.());
    }, [n, i, a, e, t]);
}
function L(e) {
    let { path: t, value: n } = e,
        { instance: i, playIfNeeded: r } = (0, o.o)();
    return (p(t, i, n, void 0, r), null);
}
function y(e) {
    let { path: t, value: n } = e,
        { instance: i, playIfNeeded: r } = (0, o.o)();
    return (m(t, i, n, void 0, r), null);
}
function D(e) {
    let { path: t, value: n } = e,
        { instance: i, playIfNeeded: r } = (0, o.o)();
    return (g(t, i, n, void 0, r), null);
}
function b(e) {
    let { path: t, value: n } = e,
        { instance: i, playIfNeeded: r } = (0, o.o)();
    return (T(t, i, n, void 0, r), null);
}
function v(e) {
    let { path: t, value: n } = e,
        { instance: i, playIfNeeded: r } = (0, o.o)();
    return (S(t, i, n, void 0, r), null);
}
function P(e) {
    let { path: t, value: n } = e,
        { instance: i, playIfNeeded: r } = (0, o.o)();
    return (N(t, i, n, void 0, r), null);
}
function M(e) {
    let { path: t, value: n } = e,
        { instance: i, playIfNeeded: r } = (0, o.o)();
    return (O(t, i, n, void 0, r), null);
}
function U(e) {
    let { path: t, value: n } = e,
        { instance: i, rive: r, playIfNeeded: a } = (0, o.o)();
    return (R(t, i, r, n, a), null);
}
function w(e) {
    let { path: t, binding: n } = e;
    switch (n.type) {
        case "number":
            return (0, i.jsx)(L, { path: t, value: n.value });
        case "string":
            return (0, i.jsx)(y, { path: t, value: n.value });
        case "boolean":
            return (0, i.jsx)(D, { path: t, value: n.value });
        case "color":
            return (0, i.jsx)(b, { path: t, value: n.value });
        case "enum":
            return (0, i.jsx)(v, { path: t, value: n.value });
        case "trigger":
            return (0, i.jsx)(P, { path: t, value: n.value });
        case "image":
            return (0, i.jsx)(M, { path: t, value: n.value });
        case "artboard":
            return (0, i.jsx)(U, { path: t, value: n.value });
        default:
            return null;
    }
}
function G() {
    let { instance: e, reducedMotionEnabled: t, playIfNeeded: n } = (0, o.o)();
    return (g("reducedMotion", e, t, void 0, n), null);
}
n.d(
    t,
    {},
    {
        Dr: g,
        Of: p,
        QJ: T,
        SX: O,
        Yn: function (e) {
            let { dynamicDataBinding: t } = e,
                n = Object.entries(t ?? {});
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    t?.reducedMotion == null ? (0, i.jsx)(G, {}) : null,
                    n.map((e) => {
                        let [t, n] = e;
                        return null == n ? null : (0, i.jsx)(w, { path: t, binding: n }, `${t}:${n.type}`);
                    }),
                ],
            });
        },
        gl: R,
        k6: m,
        u9: S,
        zJ: N,
    },
);
