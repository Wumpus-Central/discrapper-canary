n.d(e, { B: () => a, p: () => r });
var s = n(582128),
    i = n(206692);
let l = {};
function a(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        a = (0, s.useRef)(null),
        r = (0, s.useRef)(null),
        o = (0, s.useRef)(t);
    return (
        (0, s.useEffect)(() => {
            o.current = t;
        }, [t]),
        (0, s.useEffect)(() => {
            if (!n) return;
            null == r.current && (r.current = (0, i.e)(e));
            let t = a.current,
                s = r.current;
            if (null != t && null != s)
                return (
                    (0, i.wB)(s, t, o.current),
                    () => {
                        (0, i.$v)(s, t), (r.current = null);
                    }
                );
        }, [n, e]),
        a
    );
}
function r() {
    let [t, e] = (0, s.useState)(!1);
    return {
        ref: a(
            (0, s.useCallback)((t) => {
                e(t.isIntersecting);
            }, []),
        ),
        inViewport: t,
    };
}
