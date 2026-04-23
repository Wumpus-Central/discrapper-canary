"use strict";
n.d(t, { G: () => i });
var r = n(64700);
class i {
    build(e, t) {
        return (this.context = t), s(() => this.iterateCollection(e));
    }
    *iterateCollection(e) {
        let { children: t, items: n } = e;
        if (r.isValidElement(t) && t.type === r.Fragment)
            yield* this.iterateCollection({ children: t.props.children, items: n });
        else if ("function" == typeof t) {
            if (!n) throw Error("props.children was a function but props.items is missing");
            let e = 0;
            for (let r of n) yield* this.getFullNode({ value: r, index: e }, { renderer: t }), e++;
        } else {
            let e = [];
            r.Children.forEach(t, (t) => {
                t && e.push(t);
            });
            let n = 0;
            for (let t of e) for (let e of this.getFullNode({ element: t, index: n }, {})) n++, yield e;
        }
    }
    getKey(e, t, n, r) {
        if (null != e.key) return e.key;
        if ("cell" === t.type && null != t.key) return `${r}${t.key}`;
        let i = t.value;
        if (null != i) {
            var s;
            let e = null != (s = i.key) ? s : i.id;
            if (null == e) throw Error("No key found for item");
            return e;
        }
        return r ? `${r}.${t.index}` : `$.${t.index}`;
    }
    getChildState(e, t) {
        return { renderer: t.renderer || e.renderer };
    }
    *getFullNode(e, t, n, i) {
        var o, l, u, c, d, _, f, p;
        if (r.isValidElement(e.element) && e.element.type === r.Fragment) {
            let s = [];
            r.Children.forEach(e.element.props.children, (e) => {
                s.push(e);
            });
            let a = null != (o = e.index) ? o : 0;
            for (let e of s) yield* this.getFullNode({ element: e, index: a++ }, t, n, i);
            return;
        }
        let h = e.element;
        if (!h && e.value && t && t.renderer) {
            let n = this.cache.get(e.value);
            if (n && (!n.shouldInvalidate || !n.shouldInvalidate(this.context))) {
                (n.index = e.index), (n.parentKey = i ? i.key : null), yield n;
                return;
            }
            h = t.renderer(e.value);
        }
        if (r.isValidElement(h)) {
            let r = h.type;
            if ("function" != typeof r && "function" != typeof r.getCollectionNode) {
                let e = h.type;
                throw Error(`Unknown element <${e}> in collection.`);
            }
            let s = r.getCollectionNode(h.props, this.context),
                o = null != (l = e.index) ? l : 0,
                f = s.next();
            for (; !f.done && f.value; ) {
                let r = f.value;
                e.index = o;
                let l = null != (u = r.key) ? u : null;
                null == l && (l = r.element ? null : this.getKey(h, e, t, n));
                let p = [
                    ...this.getFullNode(
                        {
                            ...r,
                            key: l,
                            index: o,
                            wrapper: (function (e, t) {
                                return e && t ? (n) => e(t(n)) : e || t || void 0;
                            })(e.wrapper, r.wrapper),
                        },
                        this.getChildState(t, r),
                        n ? `${n}${h.key}` : h.key,
                        i,
                    ),
                ];
                for (let t of p) {
                    if (
                        ((t.value = null != (d = null != (c = r.value) ? c : e.value) ? d : null),
                        t.value && this.cache.set(t.value, t),
                        e.type && t.type !== e.type)
                    )
                        throw Error(
                            `Unsupported type <${a(t.type)}> in <${a(null != (_ = null == i ? void 0 : i.type) ? _ : "unknown parent type")}>. Only <${a(e.type)}> is supported.`,
                        );
                    o++, yield t;
                }
                f = s.next(p);
            }
            return;
        }
        if (null == e.key || null == e.type) return;
        let E = this,
            m = {
                type: e.type,
                props: e.props,
                key: e.key,
                parentKey: i ? i.key : null,
                value: null != (f = e.value) ? f : null,
                level: i ? i.level + 1 : 0,
                index: e.index,
                rendered: e.rendered,
                textValue: null != (p = e.textValue) ? p : "",
                "aria-label": e["aria-label"],
                wrapper: e.wrapper,
                shouldInvalidate: e.shouldInvalidate,
                hasChildNodes: e.hasChildNodes || !1,
                childNodes: s(function* () {
                    if (!e.hasChildNodes || !e.childNodes) return;
                    let n = 0;
                    for (let r of e.childNodes())
                        for (let e of (null != r.key && (r.key = `${m.key}${r.key}`),
                        E.getFullNode({ ...r, index: n }, E.getChildState(t, r), m.key, m)))
                            n++, yield e;
                }),
            };
        yield m;
    }
    constructor() {
        this.cache = new WeakMap();
    }
}
function s(e) {
    let t = [],
        n = null;
    return {
        *[Symbol.iterator]() {
            for (let e of t) yield e;
            for (let r of (n || (n = e()), n)) t.push(r), yield r;
        },
    };
}
function a(e) {
    return e[0].toUpperCase() + e.slice(1);
}
