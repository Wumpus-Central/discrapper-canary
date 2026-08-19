"use strict";
r.d(t, { p: () => o });
var n = r(582128);
function o(e) {
    let { children: t, items: r, idScope: o, addIdAndValue: i, dependencies: a = [] } = e,
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
                    o && (l = o + ":" + l),
                        (r = (0, n.cloneElement)(r, i ? { key: l, id: l, value: u } : { key: l })),
                        s.set(u, r);
                }
                l.push(r);
            }
            return l;
        }
        if ("function" != typeof t) return t;
    }, [t, r, s, o, i]);
}
