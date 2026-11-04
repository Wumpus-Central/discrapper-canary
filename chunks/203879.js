var s = n(582128),
    i = n(206692);
let l = {};
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        a = (0, s.useRef)(null),
        r = (0, s.useRef)(null),
        o = (0, s.useRef)(e);
    return (
        (0, s.useEffect)(() => {
            o.current = e;
        }, [e]),
        (0, s.useEffect)(() => {
            if (!n) return;
            null == r.current && (r.current = (0, i.e)(t));
            let e = a.current,
                s = r.current;
            if (null != e && null != s)
                return (
                    (0, i.wB)(s, e, o.current),
                    () => {
                        ((0, i.$v)(s, e), (r.current = null));
                    }
                );
        }, [n, t]),
        a
    );
}
n.d(
    t,
    {},
    {
        B: a,
        p: function () {
            let [e, t] = (0, s.useState)(!1);
            return {
                ref: a(
                    (0, s.useCallback)((e) => {
                        t(e.isIntersecting);
                    }, []),
                ),
                inViewport: e,
            };
        },
    },
);
