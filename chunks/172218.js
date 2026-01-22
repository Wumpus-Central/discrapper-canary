n.d(t, {
    B: () => o,
    K: () => u,
}),
    n(896048);
var r = n(64700),
    i = n(66455),
    a = n(206692);
let s = {};

function o(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        o = (0, r.useRef)(null),
        l = (0, i.A)(null != t ? t : s),
        c = (0, r.useRef)(null);
    return (
        (0, r.useLayoutEffect)(() => {
            if (!n) return;
            null == c.current && (c.current = (0, a.e)(l.current));
            let t = o.current,
                r = c.current;
            null != t && null != r && (0, a.wB)(r, t, e);
        }, [n, e, l]),
        (0, r.useEffect)(() => {
            if (!n) return;
            let e = o.current,
                t = c.current;
            if (null != e && null != t)
                return () => {
                    (0, a.$v)(t, e);
                };
        }, [n, t]),
        o
    );
}
let l = new Map([
    [
        1,
        {
            threshold: 1,
        },
    ],
]);

function c(e) {
    let t = l.get(e);
    return (
        null != t ||
            ((t = {
                threshold: e,
            }),
            l.set(e, t)),
        t
    );
}

function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        a = (0, i.A)((t) => {
            e(t.isIntersecting);
        }),
        s = (0, r.useMemo)(() => c(t), [t]);
    return o(a.current, s, n);
}
