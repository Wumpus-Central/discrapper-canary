"use strict";
n.d(t, { F: () => o, wL: () => i }), n(321073), n(627968);
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
        u = r.useRef(-1);
    r.useLayoutEffect(() => {
        -1 !== u.current && clearTimeout(u.current);
    }, []);
    let [, c] = r.useState(a),
        d = r.useRef(null),
        _ = r.useMemo(() => {
            let e = new Set(d.current?.keys()),
                r = new Map(d.current);
            for (let a of t) {
                let t = i(a),
                    s = r.get(t);
                if (null == s) {
                    let e = +(null != d.current),
                        r = () => {
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
                        i = n(t, a, e, r);
                    s = { item: a, children: i, state: e, cleanUp: r, renderItem: n };
                } else if (s.item !== a || s.renderItem !== n || 2 === s.state) {
                    let { cleanUp: e } = s,
                        r = 2 === s.state ? 1 : s.state,
                        i = n(t, a, r, s.cleanUp);
                    s = { item: a, children: i, state: r, cleanUp: e, renderItem: n };
                }
                r.set(t, s), e.delete(t);
            }
            for (let t of e) {
                let e = r.get(t);
                if (null != e)
                    if (2 !== e.state || e.renderItem !== n) {
                        let { item: i, cleanUp: a } = e;
                        null !=
                        (e = { item: i, children: n(t, e.item, 2, e.cleanUp), state: 2, cleanUp: a, renderItem: n })
                            .children
                            ? r.set(t, e)
                            : r.delete(t);
                    } else r.set(t, e);
            }
            return r;
        }, [t, i, n, l]);
    r.useInsertionEffect(() => ((d.current = _), () => d.current?.clear()), [_]);
    let f = [];
    for (let [, e] of _) f.push(e.children);
    return f.length > 0 ? o(f, t) : null;
}
