s.d(e, { B: () => a, p: () => r });
var n = s(582128),
    i = s(206692);
let l = {};
function a(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
        s = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        a = (0, n.useRef)(null),
        r = (0, n.useRef)(null),
        o = (0, n.useRef)(t);
    return (
        (0, n.useEffect)(() => {
            o.current = t;
        }, [t]),
        (0, n.useEffect)(() => {
            if (!s) return;
            null == r.current && (r.current = (0, i.e)(e));
            let t = a.current,
                n = r.current;
            if (null != t && null != n)
                return (
                    (0, i.wB)(n, t, o.current),
                    () => {
                        (0, i.$v)(n, t), (r.current = null);
                    }
                );
        }, [s, e]),
        a
    );
}
function r() {
    let [t, e] = (0, n.useState)(!1);
    return {
        ref: a(
            (0, n.useCallback)((t) => {
                e(t.isIntersecting);
            }, []),
        ),
        inViewport: t,
    };
}
