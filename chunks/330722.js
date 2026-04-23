"use strict";
r.d(t, { G: () => o });
var n = r(64700);
class a {
    build(e, t) {
        return (this.context = t), s(() => this.iterateCollection(e));
    }
    *iterateCollection(e) {
        let { children: t, items: r } = e;
        if (n.isValidElement(t) && t.type === n.Fragment)
            yield* this.iterateCollection({ children: t.props.children, items: r });
        else if ("function" == typeof t) {
            if (!r) throw Error("props.children was a function but props.items is missing");
            let e = 0;
            for (let n of r) yield* this.getFullNode({ value: n, index: e }, { renderer: t }), e++;
        } else {
            let e = [];
            n.Children.forEach(t, (t) => {
                t && e.push(t);
            });
            let r = 0;
            for (let t of e) for (let e of this.getFullNode({ element: t, index: r }, {})) r++, yield e;
        }
    }
    getKey(e, t, r, n) {
        if (null != e.key) return e.key;
        if ("cell" === t.type && null != t.key) return `${n}${t.key}`;
        let a = t.value;
        if (null != a) {
            var s;
            let e = null != (s = a.key) ? s : a.id;
            if (null == e) throw Error("No key found for item");
            return e;
        }
        return n ? `${n}.${t.index}` : `$.${t.index}`;
    }
    getChildState(e, t) {
        return { renderer: t.renderer || e.renderer };
    }
    *getFullNode(e, t, r, a) {
        var o, l, u, c, d, f, p, h;
        if (n.isValidElement(e.element) && e.element.type === n.Fragment) {
            let s = [];
            n.Children.forEach(e.element.props.children, (e) => {
                s.push(e);
            });
            let i = null != (o = e.index) ? o : 0;
            for (let e of s) yield* this.getFullNode({ element: e, index: i++ }, t, r, a);
            return;
        }
        let m = e.element;
        if (!m && e.value && t && t.renderer) {
            let r = this.cache.get(e.value);
            if (r && (!r.shouldInvalidate || !r.shouldInvalidate(this.context))) {
                (r.index = e.index), (r.parentKey = a ? a.key : null), yield r;
                return;
            }
            m = t.renderer(e.value);
        }
        if (n.isValidElement(m)) {
            let n = m.type;
            if ("function" != typeof n && "function" != typeof n.getCollectionNode) {
                let e = m.type;
                throw Error(`Unknown element <${e}> in collection.`);
            }
            let s = n.getCollectionNode(m.props, this.context),
                o = null != (l = e.index) ? l : 0,
                p = s.next();
            for (; !p.done && p.value; ) {
                let n = p.value;
                e.index = o;
                let l = null != (u = n.key) ? u : null;
                null == l && (l = n.element ? null : this.getKey(m, e, t, r));
                let h = [
                    ...this.getFullNode(
                        {
                            ...n,
                            key: l,
                            index: o,
                            wrapper: (function (e, t) {
                                return e && t ? (r) => e(t(r)) : e || t || void 0;
                            })(e.wrapper, n.wrapper),
                        },
                        this.getChildState(t, n),
                        r ? `${r}${m.key}` : m.key,
                        a,
                    ),
                ];
                for (let t of h) {
                    if (
                        ((t.value = null != (d = null != (c = n.value) ? c : e.value) ? d : null),
                        t.value && this.cache.set(t.value, t),
                        e.type && t.type !== e.type)
                    )
                        throw Error(
                            `Unsupported type <${i(t.type)}> in <${i(null != (f = null == a ? void 0 : a.type) ? f : "unknown parent type")}>. Only <${i(e.type)}> is supported.`,
                        );
                    o++, yield t;
                }
                p = s.next(h);
            }
            return;
        }
        if (null == e.key || null == e.type) return;
        let _ = this,
            g = {
                type: e.type,
                props: e.props,
                key: e.key,
                parentKey: a ? a.key : null,
                value: null != (p = e.value) ? p : null,
                level: a ? a.level + 1 : 0,
                index: e.index,
                rendered: e.rendered,
                textValue: null != (h = e.textValue) ? h : "",
                "aria-label": e["aria-label"],
                wrapper: e.wrapper,
                shouldInvalidate: e.shouldInvalidate,
                hasChildNodes: e.hasChildNodes || !1,
                childNodes: s(function* () {
                    if (!e.hasChildNodes || !e.childNodes) return;
                    let r = 0;
                    for (let n of e.childNodes())
                        for (let e of (null != n.key && (n.key = `${g.key}${n.key}`),
                        _.getFullNode({ ...n, index: r }, _.getChildState(t, n), g.key, g)))
                            r++, yield e;
                }),
            };
        yield g;
    }
    constructor() {
        this.cache = new WeakMap();
    }
}
function s(e) {
    let t = [],
        r = null;
    return {
        *[Symbol.iterator]() {
            for (let e of t) yield e;
            for (let n of (r || (r = e()), r)) t.push(n), yield n;
        },
    };
}
function i(e) {
    return e[0].toUpperCase() + e.slice(1);
}
function o(e, t, r) {
    let s = (0, n.useMemo)(() => new a(), []),
        { children: i, items: o, collection: l } = e;
    return (0, n.useMemo)(() => l || t(s.build({ children: i, items: o }, r)), [s, i, o, l, r, t]);
}
