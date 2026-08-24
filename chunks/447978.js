"use strict";
r.d(t, { p: () => i });
var n = r(582128);
function i(e) {
    let { children: t, items: r, idScope: i, addIdAndValue: o, dependencies: a = [] } = e,
        s = (0, n.useMemo)(() => new WeakMap(), a);
    return (0, n.useMemo)(() => {
        if (r && "function" == typeof t) {
            let l = [];
            for (let u of r) {
                let r = s.get(u);
                if (!r) {
                    var e, a;
                    let l = null != (a = null != (e = (r = t(u)).props.id) ? e : u.key) ? a : u.id;
                    if (null == l) throw Error("Could not determine key for item");
                    i && (l = i + ":" + l),
                        (r = (0, n.cloneElement)(r, o ? { key: l, id: l, value: u } : { key: l })),
                        s.set(u, r);
                }
                l.push(r);
            }
            return l;
        }
        if ("function" != typeof t) return t;
    }, [t, r, s, i, o]);
}
