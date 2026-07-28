"use strict";
n.d(t, { p: () => i });
var r = n(582128);
function i(e) {
    let { children: t, items: n, idScope: i, addIdAndValue: a, dependencies: o = [] } = e,
        s = (0, r.useMemo)(() => new WeakMap(), o);
    return (0, r.useMemo)(() => {
        if (n && "function" == typeof t) {
            let l = [];
            for (let u of n) {
                let n = s.get(u);
                if (!n) {
                    var e, o;
                    let l = null != (o = null != (e = (n = t(u)).props.id) ? e : u.key) ? o : u.id;
                    if (null == l) throw Error("Could not determine key for item");
                    i && (l = i + ":" + l),
                        (n = (0, r.cloneElement)(n, a ? { key: l, id: l, value: u } : { key: l })),
                        s.set(u, n);
                }
                l.push(n);
            }
            return l;
        }
        if ("function" != typeof t) return t;
    }, [t, n, s, i, a]);
}
