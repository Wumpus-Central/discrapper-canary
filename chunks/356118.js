n.d(t, { Ay: () => E, F2: () => d, Qs: () => f, Z_: () => g });
var r = n(627968),
    l = n(64700),
    a = n(835245),
    s = n(152858),
    i = n(973125),
    c = n(790219),
    o = n(879923);
function u(e, t) {
    return e.children.map((e) =>
        (function e(t, n) {
            if ("string" == typeof t) return t;
            let l = "Any" === t.block && "string" == typeof t.tag ? `Any:${t.tag}` : t.block,
                { block: i, ...c } = t,
                o = n[l] ?? n[i];
            if (null == o) return null;
            let u = (() => {
                    if ("children" in t) {
                        if (!Array.isArray(t.children) && null != t.children) return e(t.children, n);
                        if (null != t.children && t.children.length > 0) return t.children.map((t) => e(t, n));
                    }
                    return null;
                })(),
                d = s.E6.has(i) ? { ...c, componentMap: n } : c;
            return (0, r.jsx)(o, { ...d, children: u }, (0, a.A)());
        })(e, t),
    );
}
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.E;
    try {
        return u(e, t), !0;
    } catch (e) {
        return !1;
    }
}
class h extends l.Component {
    state = { hasError: !1 };
    static getDerivedStateFromError() {
        return { hasError: !0 };
    }
    componentDidCatch() {
        this.props.onError?.();
    }
    render() {
        return this.state.hasError ? null : this.props.children;
    }
}
function m(e) {
    let { layout: t, Components: n } = e;
    return l.useMemo(() => u(t, n), [t, n]);
}
function p(e) {
    let { layout: t, overrides: n, onError: a, onEmptyLayout: s } = e,
        c = (0, i.e)({ overrides: n });
    return (
        l.useEffect(() => {
            0 === t.children.length && s?.();
        }, [t, s]),
        (0, r.jsx)(h, { onError: a, children: (0, r.jsx)(m, { layout: t, Components: c }) })
    );
}
function f(e) {
    let { layoutId: t, tenantId: n, overrides: a, onError: s, onEmptyLayout: i } = e,
        { layout: o, error: u } = (0, c.A)(n, t);
    return (l.useEffect(() => {
        null != u && s?.();
    }, [u, s]),
    null == o)
        ? null
        : (0, r.jsx)(p, { layout: o, overrides: a, onError: s, onEmptyLayout: i });
}
function g(e) {
    let { templateId: t, tenantId: n, overrides: a, onError: s, onEmptyLayout: i, requestParams: c } = e,
        { layout: u, error: d } = (0, o.A)(n, t, c);
    return (l.useEffect(() => {
        null != d && s?.();
    }, [d, s]),
    null == u)
        ? null
        : (0, r.jsx)(p, { layout: u, overrides: a, onError: s, onEmptyLayout: i });
}
let E = p;
