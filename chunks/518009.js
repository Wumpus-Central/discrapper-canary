n.d(e, { F: () => u, wL: () => a }), n(321073), n(627968);
var i,
    r = n(64700),
    a = (((i = {})[(i.MOUNTED = 0)] = "MOUNTED"), (i[(i.ENTERED = 1)] = "ENTERED"), (i[(i.YEETED = 2)] = "YEETED"), i);
let l = {};
function s(t) {
    return t;
}
function u(t) {
    let { items: e, renderItem: n, getItemKey: i, wrapChildren: a = s, lazyCleanUpDelay: u } = t,
        o = r.useRef(-1);
    r.useLayoutEffect(() => {
        -1 !== o.current && clearTimeout(o.current);
    }, []);
    let [, c] = r.useState(l),
        g = r.useRef(null),
        h = r.useMemo(() => {
            let t = new Set(g.current?.keys()),
                r = new Map(g.current);
            for (let a of e) {
                let e = i(a),
                    l = r.get(e);
                if (null == l) {
                    let t = +(null != g.current),
                        i = () => {
                            let t = g.current?.get(e);
                            null == t ||
                                (2 === t.state
                                    ? (g.current?.delete(e),
                                      null != u
                                          ? (clearTimeout(o.current), (o.current = setTimeout(() => c({}), u)))
                                          : c({}))
                                    : __DEV__ &&
                                      console.warn(
                                          `SimpleTransitionGroup.cleanUp: Attempted to remove an item that isn't yeetable: ${e}`,
                                      ));
                        },
                        r = n(e, a, t, i);
                    l = { item: a, children: r, state: t, cleanUp: i, renderItem: n };
                } else if (l.item !== a || l.renderItem !== n || 2 === l.state) {
                    let { cleanUp: t } = l,
                        i = 2 === l.state ? 1 : l.state,
                        r = n(e, a, i, l.cleanUp);
                    l = { item: a, children: r, state: i, cleanUp: t, renderItem: n };
                }
                r.set(e, l), t.delete(e);
            }
            for (let e of t) {
                let t = r.get(e);
                if (null != t)
                    if (2 !== t.state || t.renderItem !== n) {
                        let { item: i, cleanUp: a } = t;
                        null !=
                        (t = { item: i, children: n(e, t.item, 2, t.cleanUp), state: 2, cleanUp: a, renderItem: n })
                            .children
                            ? r.set(e, t)
                            : r.delete(e);
                    } else r.set(e, t);
            }
            return r;
        }, [e, i, n, u]);
    r.useInsertionEffect(() => ((g.current = h), () => g.current?.clear()), [h]);
    let d = [];
    for (let [, t] of h) d.push(t.children);
    return d.length > 0 ? a(d, e) : null;
}
