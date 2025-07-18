(n.d(t, {
    S: () => i,
    a: () => l
}),
    n(388685));
var r = n(73800),
    o = n(237617),
    s = n(266338);
let a = {};
function i(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = (0, r.useRef)(null),
        l = (0, o.Z)(null != t ? t : a),
        c = (0, r.useRef)(null),
        u = (0, r.useRef)(e);
    return (
        (0, r.useEffect)(() => {
            u.current = e;
        }, [e]),
        (0, r.useEffect)(() => {
            if (!n) return;
            null == c.current && (c.current = (0, s.c)(l.current));
            let e = i.current,
                t = c.current;
            if (null != e && null != t)
                return (
                    (0, s.YP)(t, e, u.current),
                    () => {
                        (0, s.UC)(t, e);
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
            }, [])
        ),
        inViewport: e
    };
}
