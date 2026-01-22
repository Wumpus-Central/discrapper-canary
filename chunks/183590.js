n.d(t, { p: () => i });
var r = n(64700);
function i(e) {
    let { children: t, items: n, idScope: i, addIdAndValue: a, dependencies: s = [] } = e,
        o = (0, r.useMemo)(() => new WeakMap(), s);
    return (0, r.useMemo)(() => {
        if (n && "function" == typeof t) {
            let l = [];
            for (let c of n) {
                let n = o.get(c);
                if (!n) {
                    var e, s;
                    let l = null != (s = null != (e = (n = t(c)).props.id) ? e : c.key) ? s : c.id;
                    if (null == l) throw Error("Could not determine key for item");
                    i && (l = i + ":" + l),
                        (n = (0, r.cloneElement)(
                            n,
                            a
                                ? {
                                      key: l,
                                      id: l,
                                      value: c,
                                  }
                                : { key: l },
                        )),
                        o.set(c, n);
                }
                l.push(n);
            }
            return l;
        }
        if ("function" != typeof t) return t;
    }, [t, n, o, i, a]);
}
