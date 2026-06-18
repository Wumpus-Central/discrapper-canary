s.d(t, { B: () => l, p: () => r });
var n = s(64700),
    i = s(206692);
let a = {};
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        s = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        l = (0, n.useRef)(null),
        r = (0, n.useRef)(null),
        o = (0, n.useRef)(e);
    return (
        (0, n.useEffect)(() => {
            o.current = e;
        }, [e]),
        (0, n.useEffect)(() => {
            if (!s) return;
            null == r.current && (r.current = (0, i.e)(t));
            let e = l.current,
                n = r.current;
            if (null != e && null != n)
                return (
                    (0, i.wB)(n, e, o.current),
                    () => {
                        (0, i.$v)(n, e), (r.current = null);
                    }
                );
        }, [s, t]),
        l
    );
}
function r() {
    let [e, t] = (0, n.useState)(!1);
    return {
        ref: l(
            (0, n.useCallback)((e) => {
                t(e.isIntersecting);
            }, []),
        ),
        inViewport: e,
    };
}
