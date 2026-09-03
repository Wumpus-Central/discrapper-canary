r.d(t, { p: () => i });
var n = r(582128);
function i(e) {
    let { children: t, items: r, idScope: i, addIdAndValue: o, dependencies: a = [] } = e,
        s = (0, n.useMemo)(() => void 0, [t]),
        l = (0, n.useMemo)(() => new WeakMap(), [...a, s]);
    return (0, n.useMemo)(() => {
        if (r && "function" == typeof t) {
            let e = [];
            for (let a of r) {
                let r = !(function (e) {
                        switch (typeof e) {
                            case "object":
                                return null != e;
                            case "function":
                            case "symbol":
                                return !0;
                            default:
                                return !1;
                        }
                    })(a)
                        ? null
                        : a,
                    s = r ? l.get(r) : null;
                if (!s) {
                    let u = (s = t(a)).props.id ?? a?.key ?? a?.id;
                    null != i && null == s.props.id && null != u && (u = i + ":" + u);
                    let c = u ?? e.length;
                    (s = (0, n.cloneElement)(s, o ? { key: c, id: u, value: a } : { key: c })), r && l.set(r, s);
                }
                e.push(s);
            }
            return e;
        }
        if ("function" != typeof t) return t;
    }, [t, r, l, i, o]);
}
