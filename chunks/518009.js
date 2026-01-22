n.d(t, {
    F: () => o,
    wL: () => i,
}),
    n(896048),
    n(321073),
    n(627968);
var r = n(64700),
    i = (function (e) {
        return (e[(e.MOUNTED = 0)] = "MOUNTED"), (e[(e.ENTERED = 1)] = "ENTERED"), (e[(e.YEETED = 2)] = "YEETED"), e;
    })({});
let a = {};
function s(e) {
    return e;
}
function o(e) {
    let { items: t, renderItem: n, getItemKey: i, wrapChildren: o = s, lazyCleanUpDelay: l } = e,
        c = r.useRef(-1);
    r.useLayoutEffect(() => {
        -1 !== c.current && clearTimeout(c.current);
    }, []);
    let [, u] = r.useState(a),
        d = r.useRef(null),
        f = r.useMemo(() => {
            var e;
            let r = new Set(null == (e = d.current) ? void 0 : e.keys()),
                a = new Map(d.current);
            for (let e of t) {
                let t = i(e),
                    s = a.get(t);
                if (null == s) {
                    let r = +(null != d.current),
                        i = () => {
                            var e, n;
                            let r = null == (e = d.current) ? void 0 : e.get(t);
                            null == r ||
                                (2 === r.state
                                    ? (null == (n = d.current) || n.delete(t),
                                      null != l
                                          ? (clearTimeout(c.current), (c.current = setTimeout(() => u({}), l)))
                                          : u({}))
                                    : __DEV__ &&
                                      console.warn(
                                          "SimpleTransitionGroup.cleanUp: Attempted to remove an item that isn't yeetable: ".concat(
                                              t,
                                          ),
                                      ));
                        },
                        a = n(t, e, r, i);
                    s = {
                        item: e,
                        children: a,
                        state: r,
                        cleanUp: i,
                        renderItem: n,
                    };
                } else if (s.item !== e || s.renderItem !== n || 2 === s.state) {
                    let { cleanUp: r } = s,
                        i = 2 === s.state ? 1 : s.state,
                        a = n(t, e, i, s.cleanUp);
                    s = {
                        item: e,
                        children: a,
                        state: i,
                        cleanUp: r,
                        renderItem: n,
                    };
                }
                a.set(t, s), r.delete(t);
            }
            for (let e of r) {
                let t = a.get(e);
                if (null != t)
                    if (2 !== t.state || t.renderItem !== n) {
                        let { item: r, cleanUp: i } = t;
                        null !=
                        (t = {
                            item: r,
                            children: n(e, t.item, 2, t.cleanUp),
                            state: 2,
                            cleanUp: i,
                            renderItem: n,
                        }).children
                            ? a.set(e, t)
                            : a.delete(e);
                    } else a.set(e, t);
            }
            return a;
        }, [t, i, n, l]);
    r.useInsertionEffect(
        () => (
            (d.current = f),
            () => {
                var e;
                return null == (e = d.current) ? void 0 : e.clear();
            }
        ),
        [f],
    );
    let p = [];
    for (let [, e] of f) p.push(e.children);
    return p.length > 0 ? o(p, t) : null;
}
