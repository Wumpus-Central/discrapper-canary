var s = n(582128),
    i = n(206692);
let l = {};
function r(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = (0, s.useRef)(null),
        a = (0, s.useRef)(null),
        o = (0, s.useRef)(e);
    return (
        (0, s.useEffect)(() => {
            o.current = e;
        }, [e]),
        (0, s.useEffect)(() => {
            if (!n) return;
            null == a.current && (a.current = (0, i.e)(t));
            let e = r.current,
                s = a.current;
            if (null != e && null != s)
                return (
                    (0, i.wB)(s, e, o.current),
                    () => {
                        ((0, i.$v)(s, e), (a.current = null));
                    }
                );
        }, [n, t]),
        r
    );
}
n.d(
    t,
    {},
    {
        B: r,
        p: function () {
            let [e, t] = (0, s.useState)(!1);
            return {
                ref: r(
                    (0, s.useCallback)((e) => {
                        t(e.isIntersecting);
                    }, []),
                ),
                inViewport: e,
            };
        },
    },
);
