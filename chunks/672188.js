n.d(t, {
    S: () => i,
    a: () => l,
}),
    n(388685);
var r = n(647438),
    s = n(872175),
    o = n(963307);
let a = {};
function i(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = (0, r.useRef)(null),
        l = (0, s.Z)(null != t ? t : a),
        c = (0, r.useRef)(null),
        d = (0, r.useRef)(e);
    return (
        (0, r.useEffect)(() => {
            d.current = e;
        }, [e]),
        (0, r.useEffect)(() => {
            if (!n) return;
            null == c.current && (c.current = (0, o.c)(l.current));
            let e = i.current,
                t = c.current;
            if (null != e && null != t)
                return (
                    (0, o.YP)(t, e, d.current),
                    () => {
                        (0, o.UC)(t, e);
                    }
                );
        }, [n, l]),
        i
    );
}
function l() {
    let [e, t] = (0, r.useState)(!1);
    return {
        ref: i(
            (0, r.useCallback)((e) => {
                t(e.isIntersecting);
            }, []),
        ),
        inViewport: e,
    };
}
