n.d(t, { B: () => r, p: () => o });
var a = n(64700),
    s = n(66455),
    i = n(206692);
let l = {};
function r(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = (0, a.useRef)(null),
        o = (0, s.A)(t ?? l),
        d = (0, a.useRef)(null),
        c = (0, a.useRef)(e);
    return (
        (0, a.useEffect)(() => {
            c.current = e;
        }, [e]),
        (0, a.useEffect)(() => {
            if (!n) return;
            null == d.current && (d.current = (0, i.e)(o.current));
            let e = r.current,
                t = d.current;
            if (null != e && null != t)
                return (
                    (0, i.wB)(t, e, c.current),
                    () => {
                        (0, i.$v)(t, e);
                    }
                );
        }, [n, o]),
        r
    );
}
function o() {
    let [e, t] = (0, a.useState)(!1);
    return {
        ref: r(
            (0, a.useCallback)((e) => {
                t(e.isIntersecting);
            }, []),
        ),
        inViewport: e,
    };
}
