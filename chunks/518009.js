"use strict";
n.d(t, { F: () => l, wL: () => s }), n(321073), n(627968);
var i,
    r = n(64700),
    s = (((i = {})[(i.MOUNTED = 0)] = "MOUNTED"), (i[(i.ENTERED = 1)] = "ENTERED"), (i[(i.YEETED = 2)] = "YEETED"), i);
let a = {};
function o(e) {
    return e;
}
function l(e) {
    let { items: t, renderItem: n, getItemKey: i, wrapChildren: s = o, lazyCleanUpDelay: l } = e,
        u = r.useRef(-1);
    r.useLayoutEffect(() => {
        -1 !== u.current && clearTimeout(u.current);
    }, []);
    let [, c] = r.useState(a),
        d = r.useRef(null),
        _ = r.useMemo(() => {
            let e = new Set(d.current?.keys()),
                r = new Map(d.current);
            for (let s of t) {
                let t = i(s),
                    a = r.get(t);
                if (null == a) {
                    let e = +(null != d.current),
                        i = () => {
                            let e = d.current?.get(t);
                            null == e ||
                                (2 === e.state
                                    ? (d.current?.delete(t),
                                      null != l
                                          ? (clearTimeout(u.current), (u.current = setTimeout(() => c({}), l)))
                                          : c({}))
                                    : __DEV__ &&
                                      console.warn(
                                          `SimpleTransitionGroup.cleanUp: Attempted to remove an item that isn't yeetable: ${t}`,
                                      ));
                        },
                        r = n(t, s, e, i);
                    a = { item: s, children: r, state: e, cleanUp: i, renderItem: n };
                } else if (a.item !== s || a.renderItem !== n || 2 === a.state) {
                    let { cleanUp: e } = a,
                        i = 2 === a.state ? 1 : a.state,
                        r = n(t, s, i, a.cleanUp);
                    a = { item: s, children: r, state: i, cleanUp: e, renderItem: n };
                }
                r.set(t, a), e.delete(t);
            }
            for (let t of e) {
                let e = r.get(t);
                if (null != e)
                    if (2 !== e.state || e.renderItem !== n) {
                        let { item: i, cleanUp: s } = e;
                        null !=
                        (e = { item: i, children: n(t, e.item, 2, e.cleanUp), state: 2, cleanUp: s, renderItem: n })
                            .children
                            ? r.set(t, e)
                            : r.delete(t);
                    } else r.set(t, e);
            }
            return r;
        }, [t, i, n, l]);
    r.useInsertionEffect(() => ((d.current = _), () => d.current?.clear()), [_]);
    let h = [];
    for (let [, e] of _) h.push(e.children);
    return h.length > 0 ? s(h, t) : null;
}
