n.d(t, {
    S: () => s,
    a: () => o,
}),
    n(388685);
var a = n(473749),
    r = n(872175),
    l = n(963307);
let i = {};
function s(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        s = (0, a.useRef)(null),
        o = (0, r.Z)(null != t ? t : i),
        c = (0, a.useRef)(null),
        d = (0, a.useRef)(e);
    return (
        (0, a.useEffect)(() => {
            d.current = e;
        }, [e]),
        (0, a.useEffect)(() => {
            if (!n) return;
            null == c.current && (c.current = (0, l.c)(o.current));
            let e = s.current,
                t = c.current;
            if (null != e && null != t)
                return (
                    (0, l.YP)(t, e, d.current),
                    () => {
                        (0, l.UC)(t, e);
                    }
                );
        }, [n, o]),
        s
    );
}
function o() {
    let [e, t] = (0, a.useState)(!1);
    return {
        ref: s(
            (0, a.useCallback)((e) => {
                t(e.isIntersecting);
            }, []),
        ),
        inViewport: e,
    };
}
