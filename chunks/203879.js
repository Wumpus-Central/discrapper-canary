n.d(t, {
    B: () => s,
    p: () => o,
}),
    n(896048);
var a = n(64700),
    l = n(66455),
    i = n(206692);
let r = {};
function s(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        s = (0, a.useRef)(null),
        o = (0, l.A)(null != t ? t : r),
        c = (0, a.useRef)(null),
        d = (0, a.useRef)(e);
    return (
        (0, a.useEffect)(() => {
            d.current = e;
        }, [e]),
        (0, a.useEffect)(() => {
            if (!n) return;
            null == c.current && (c.current = (0, i.e)(o.current));
            let e = s.current,
                t = c.current;
            if (null != e && null != t)
                return (
                    (0, i.wB)(t, e, d.current),
                    () => {
                        (0, i.$v)(t, e);
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
