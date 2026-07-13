r.d(t, { F: () => a, wL: () => u }), r(321073), r(627968);
var l,
    n = r(64700),
    u = (((l = {})[(l.MOUNTED = 0)] = "MOUNTED"), (l[(l.ENTERED = 1)] = "ENTERED"), (l[(l.YEETED = 2)] = "YEETED"), l);
let s = {};
function c(e) {
    return e;
}
function a(e) {
    let { items: t, renderItem: r, getItemKey: l, wrapChildren: u = c, lazyCleanUpDelay: a } = e,
        i = n.useRef(-1);
    n.useLayoutEffect(() => {
        -1 !== i.current && clearTimeout(i.current);
    }, []);
    let [, o] = n.useState(s),
        f = n.useRef(null),
        E = n.useMemo(() => {
            let e = new Set(f.current?.keys()),
                n = new Map(f.current);
            for (let u of t) {
                let t = l(u),
                    s = n.get(t);
                if (null == s) {
                    let e = +(null != f.current),
                        l = () => {
                            let e = f.current?.get(t);
                            null == e ||
                                (2 === e.state
                                    ? (f.current?.delete(t),
                                      null != a
                                          ? (clearTimeout(i.current), (i.current = setTimeout(() => o({}), a)))
                                          : o({}))
                                    : __DEV__ &&
                                      console.warn(
                                          `SimpleTransitionGroup.cleanUp: Attempted to remove an item that isn't yeetable: ${t}`,
                                      ));
                        },
                        n = r(t, u, e, l);
                    s = { item: u, children: n, state: e, cleanUp: l, renderItem: r };
                } else if (s.item !== u || s.renderItem !== r || 2 === s.state) {
                    let { cleanUp: e } = s,
                        l = 2 === s.state ? 1 : s.state,
                        n = r(t, u, l, s.cleanUp);
                    s = { item: u, children: n, state: l, cleanUp: e, renderItem: r };
                }
                n.set(t, s), e.delete(t);
            }
            for (let t of e) {
                let e = n.get(t);
                if (null != e)
                    if (2 !== e.state || e.renderItem !== r) {
                        let { item: l, cleanUp: u } = e;
                        null !=
                        (e = { item: l, children: r(t, e.item, 2, e.cleanUp), state: 2, cleanUp: u, renderItem: r })
                            .children
                            ? n.set(t, e)
                            : n.delete(t);
                    } else n.set(t, e);
            }
            return n;
        }, [t, l, r, a]);
    n.useInsertionEffect(() => ((f.current = E), () => f.current?.clear()), [E]);
    let p = [];
    for (let [, e] of E) p.push(e.children);
    return p.length > 0 ? u(p, t) : null;
}
