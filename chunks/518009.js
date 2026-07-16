"use strict";
n.d(t, { F: () => o, wL: () => a }), n(321073), n(627968);
var i,
    r = n(64700),
    a = (((i = {})[(i.MOUNTED = 0)] = "MOUNTED"), (i[(i.ENTERED = 1)] = "ENTERED"), (i[(i.YEETED = 2)] = "YEETED"), i);
let s = {};
function l(e) {
    return e;
}
function o(e) {
    let { items: t, renderItem: n, getItemKey: i, wrapChildren: a = l, lazyCleanUpDelay: o } = e,
        d = r.useRef(-1);
    r.useLayoutEffect(() => {
        -1 !== d.current && clearTimeout(d.current);
    }, []);
    let [, c] = r.useState(s),
        u = r.useRef(null),
        _ = r.useMemo(() => {
            let e = new Set(u.current?.keys()),
                r = new Map(u.current);
            for (let a of t) {
                let t = i(a),
                    s = r.get(t);
                if (null == s) {
                    let e = +(null != u.current),
                        i = () => {
                            let e = u.current?.get(t);
                            null == e ||
                                (2 === e.state
                                    ? (u.current?.delete(t),
                                      null != o
                                          ? (clearTimeout(d.current), (d.current = setTimeout(() => c({}), o)))
                                          : c({}))
                                    : __DEV__ &&
                                      console.warn(
                                          `SimpleTransitionGroup.cleanUp: Attempted to remove an item that isn't yeetable: ${t}`,
                                      ));
                        },
                        r = n(t, a, e, i);
                    s = { item: a, children: r, state: e, cleanUp: i, renderItem: n };
                } else if (s.item !== a || s.renderItem !== n || 2 === s.state) {
                    let { cleanUp: e } = s,
                        i = 2 === s.state ? 1 : s.state,
                        r = n(t, a, i, s.cleanUp);
                    s = { item: a, children: r, state: i, cleanUp: e, renderItem: n };
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
        }, [t, i, n, o]);
    r.useInsertionEffect(() => ((u.current = _), () => u.current?.clear()), [_]);
    let E = [];
    for (let [, e] of _) E.push(e.children);
    return E.length > 0 ? a(E, t) : null;
}
