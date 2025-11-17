n.d(t, { y: () => i });
var r = n(473749);
class i {
    build(e, t) {
        return (this.context = t), a(() => this.iterateCollection(e));
    }
    *iterateCollection(e) {
        let { children: t, items: n } = e;
        if (r.isValidElement(t) && t.type === r.Fragment)
            yield* this.iterateCollection({
                children: t.props.children,
                items: n,
            });
        else if ("function" == typeof t) {
            if (!n) throw Error("props.children was a function but props.items is missing");
            let e = 0;
            for (let r of n)
                yield* this.getFullNode(
                    {
                        value: r,
                        index: e,
                    },
                    { renderer: t },
                ),
                    e++;
        } else {
            let e = [];
            r.Children.forEach(t, (t) => {
                t && e.push(t);
            });
            let n = 0;
            for (let t of e)
                for (let e of this.getFullNode(
                    {
                        element: t,
                        index: n,
                    },
                    {},
                ))
                    n++, yield e;
        }
    }
    getKey(e, t, n, r) {
        if (null != e.key) return e.key;
        if ("cell" === t.type && null != t.key) return `${r}${t.key}`;
        let i = t.value;
        if (null != i) {
            var a;
            let e = null != (a = i.key) ? a : i.id;
            if (null == e) throw Error("No key found for item");
            return e;
        }
        return r ? `${r}.${t.index}` : `$.${t.index}`;
    }
    getChildState(e, t) {
        return { renderer: t.renderer || e.renderer };
    }
    *getFullNode(e, t, n, i) {
        var l, c, u, d, f, _, p, h;
        if (r.isValidElement(e.element) && e.element.type === r.Fragment) {
            let a = [];
            r.Children.forEach(e.element.props.children, (e) => {
                a.push(e);
            });
            let o = null != (l = e.index) ? l : 0;
            for (let e of a)
                yield* this.getFullNode(
                    {
                        element: e,
                        index: o++,
                    },
                    t,
                    n,
                    i,
                );
            return;
        }
        let m = e.element;
        if (!m && e.value && t && t.renderer) {
            let n = this.cache.get(e.value);
            if (n && (!n.shouldInvalidate || !n.shouldInvalidate(this.context))) {
                (n.index = e.index), (n.parentKey = i ? i.key : null), yield n;
                return;
            }
            m = t.renderer(e.value);
        }
        if (r.isValidElement(m)) {
            let r = m.type;
            if ("function" != typeof r && "function" != typeof r.getCollectionNode) {
                let e = m.type;
                throw Error(`Unknown element <${e}> in collection.`);
            }
            let a = r.getCollectionNode(m.props, this.context),
                l = null != (c = e.index) ? c : 0,
                p = a.next();
            for (; !p.done && p.value; ) {
                let r = p.value;
                e.index = l;
                let c = null != (u = r.key) ? u : null;
                null == c && (c = r.element ? null : this.getKey(m, e, t, n));
                let h = [
                    ...this.getFullNode(
                        {
                            ...r,
                            key: c,
                            index: l,
                            wrapper: o(e.wrapper, r.wrapper),
                        },
                        this.getChildState(t, r),
                        n ? `${n}${m.key}` : m.key,
                        i,
                    ),
                ];
                for (let t of h) {
                    if (
                        ((t.value = null != (f = null != (d = r.value) ? d : e.value) ? f : null),
                        t.value && this.cache.set(t.value, t),
                        e.type && t.type !== e.type)
                    )
                        throw Error(
                            `Unsupported type <${s(t.type)}> in <${s(null != (_ = null == i ? void 0 : i.type) ? _ : "unknown parent type")}>. Only <${s(e.type)}> is supported.`,
                        );
                    l++, yield t;
                }
                p = a.next(h);
            }
            return;
        }
        if (null == e.key || null == e.type) return;
        let g = this,
            E = {
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
                childNodes: a(function* () {
                    if (!e.hasChildNodes || !e.childNodes) return;
                    let n = 0;
                    for (let r of e.childNodes())
                        for (let e of (null != r.key && (r.key = `${E.key}${r.key}`),
                        g.getFullNode(
                            {
                                ...r,
                                index: n,
                            },
                            g.getChildState(t, r),
                            E.key,
                            E,
                        )))
                            n++, yield e;
                }),
            };
        yield E;
    }
    constructor() {
        this.cache = new WeakMap();
    }
}
function a(e) {
    let t = [],
        n = null;
    return {
        *[Symbol.iterator]() {
            for (let e of t) yield e;
            for (let r of (n || (n = e()), n)) t.push(r), yield r;
        },
    };
}
function o(e, t) {
    return e && t ? (n) => e(t(n)) : e || t || void 0;
}
function s(e) {
    return e[0].toUpperCase() + e.slice(1);
}
