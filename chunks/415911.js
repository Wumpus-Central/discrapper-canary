"use strict";
r.d(t, { G: () => s });
var n = r(582128);
class i {
    build(e, t) {
        return (this.context = t), o(() => this.iterateCollection(e));
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
        let i = t.value;
        if (null != i) {
            var o;
            let e = null != (o = i.key) ? o : i.id;
            if (null == e) throw Error("No key found for item");
            return e;
        }
        return n ? `${n}.${t.index}` : `$.${t.index}`;
    }
    getChildState(e, t) {
        return { renderer: t.renderer || e.renderer };
    }
    *getFullNode(e, t, r, i) {
        var s, l, u, c, f, d, p, h;
        if (n.isValidElement(e.element) && e.element.type === n.Fragment) {
            let o = [];
            n.Children.forEach(e.element.props.children, (e) => {
                o.push(e);
            });
            let a = null != (s = e.index) ? s : 0;
            for (let e of o) yield* this.getFullNode({ element: e, index: a++ }, t, r, i);
            return;
        }
        let m = e.element;
        if (!m && e.value && t && t.renderer) {
            let r = this.cache.get(e.value);
            if (r && (!r.shouldInvalidate || !r.shouldInvalidate(this.context))) {
                (r.index = e.index), (r.parentKey = i ? i.key : null), yield r;
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
            let o = n.getCollectionNode(m.props, this.context),
                s = null != (l = e.index) ? l : 0,
                p = o.next();
            for (; !p.done && p.value; ) {
                let n = p.value;
                e.index = s;
                let l = null != (u = n.key) ? u : null;
                null == l && (l = n.element ? null : this.getKey(m, e, t, r));
                let h = [
                    ...this.getFullNode(
                        {
                            ...n,
                            key: l,
                            index: s,
                            wrapper: (function (e, t) {
                                return e && t ? (r) => e(t(r)) : e || t || void 0;
                            })(e.wrapper, n.wrapper),
                        },
                        this.getChildState(t, n),
                        r ? `${r}${m.key}` : m.key,
                        i,
                    ),
                ];
                for (let t of h) {
                    if (
                        ((t.value = null != (f = null != (c = n.value) ? c : e.value) ? f : null),
                        t.value && this.cache.set(t.value, t),
                        e.type && t.type !== e.type)
                    )
                        throw Error(
                            `Unsupported type <${a(t.type)}> in <${a(null != (d = null == i ? void 0 : i.type) ? d : "unknown parent type")}>. Only <${a(e.type)}> is supported.`,
                        );
                    s++, yield t;
                }
                p = o.next(h);
            }
            return;
        }
        if (null == e.key || null == e.type) return;
        let v = this,
            y = {
                type: e.type,
                props: e.props,
                key: e.key,
                parentKey: i ? i.key : null,
                value: null != (p = e.value) ? p : null,
                level: i ? i.level + 1 : 0,
                index: e.index,
                rendered: e.rendered,
                textValue: null != (h = e.textValue) ? h : "",
                "aria-label": e["aria-label"],
                wrapper: e.wrapper,
                shouldInvalidate: e.shouldInvalidate,
                hasChildNodes: e.hasChildNodes || !1,
                childNodes: o(function* () {
                    if (!e.hasChildNodes || !e.childNodes) return;
                    let r = 0;
                    for (let n of e.childNodes())
                        for (let e of (null != n.key && (n.key = `${y.key}${n.key}`),
                        v.getFullNode({ ...n, index: r }, v.getChildState(t, n), y.key, y)))
                            r++, yield e;
                }),
            };
        yield y;
    }
    constructor() {
        this.cache = new WeakMap();
    }
}
function o(e) {
    let t = [],
        r = null;
    return {
        *[Symbol.iterator]() {
            for (let e of t) yield e;
            for (let n of (r || (r = e()), r)) t.push(n), yield n;
        },
    };
}
function a(e) {
    return e[0].toUpperCase() + e.slice(1);
}
function s(e, t, r) {
    let o = (0, n.useMemo)(() => new i(), []),
        { children: a, items: s, collection: l } = e;
    return (0, n.useMemo)(() => l || t(o.build({ children: a, items: s }, r)), [o, a, s, l, r, t]);
}
