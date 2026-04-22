"use strict";
n.d(t, { F: () => l, wL: () => s }), n(321073), n(627968);
var r,
    i = n(64700),
    s = (((r = {})[(r.MOUNTED = 0)] = "MOUNTED"), (r[(r.ENTERED = 1)] = "ENTERED"), (r[(r.YEETED = 2)] = "YEETED"), r);
let a = {};
function o(e) {
    return e;
}
function l(e) {
    let { items: t, renderItem: n, getItemKey: r, wrapChildren: s = o, lazyCleanUpDelay: l } = e,
        u = i.useRef(-1);
    i.useLayoutEffect(() => {
        -1 !== u.current && clearTimeout(u.current);
    }, []);
    let [, d] = i.useState(a),
        c = i.useRef(null),
        _ = i.useMemo(() => {
            let e = new Set(c.current?.keys()),
                i = new Map(c.current);
            for (let s of t) {
                let t = r(s),
                    a = i.get(t);
                if (null == a) {
                    let e = +(null != c.current),
                        r = () => {
                            let e = c.current?.get(t);
                            null == e ||
                                (2 === e.state
                                    ? (c.current?.delete(t),
                                      null != l
                                          ? (clearTimeout(u.current), (u.current = setTimeout(() => d({}), l)))
                                          : d({}))
                                    : __DEV__ &&
                                      console.warn(
                                          `SimpleTransitionGroup.cleanUp: Attempted to remove an item that isn't yeetable: ${t}`,
                                      ));
                        },
                        i = n(t, s, e, r);
                    a = { item: s, children: i, state: e, cleanUp: r, renderItem: n };
                } else if (a.item !== s || a.renderItem !== n || 2 === a.state) {
                    let { cleanUp: e } = a,
                        r = 2 === a.state ? 1 : a.state,
                        i = n(t, s, r, a.cleanUp);
                    a = { item: s, children: i, state: r, cleanUp: e, renderItem: n };
                }
                i.set(t, a), e.delete(t);
            }
            for (let t of e) {
                let e = i.get(t);
                if (null != e)
                    if (2 !== e.state || e.renderItem !== n) {
                        let { item: r, cleanUp: s } = e;
                        null !=
                        (e = { item: r, children: n(t, e.item, 2, e.cleanUp), state: 2, cleanUp: s, renderItem: n })
                            .children
                            ? i.set(t, e)
                            : i.delete(t);
                    } else i.set(t, e);
            }
            return i;
        }, [t, r, n, l]);
    i.useInsertionEffect(() => ((c.current = _), () => c.current?.clear()), [_]);
    let f = [];
    for (let [, e] of _) f.push(e.children);
    return f.length > 0 ? s(f, t) : null;
}
