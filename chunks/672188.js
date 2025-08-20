n.d(t, {
    S: () => s,
    a: () => l,
}),
    n(388685);
var r = n(647438),
    i = n(237617),
    a = n(266338);
let o = {};
function s(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        s = (0, r.useRef)(null),
        l = (0, i.Z)(null != t ? t : o),
        c = (0, r.useRef)(null),
        u = (0, r.useRef)(e);
    return (
        (0, r.useEffect)(() => {
            u.current = e;
        }, [e]),
        (0, r.useEffect)(() => {
            if (!n) return;
            null == c.current && (c.current = (0, a.c)(l.current));
            let e = s.current,
                t = c.current;
            if (null != e && null != t)
                return (
                    (0, a.YP)(t, e, u.current),
                    () => {
                        (0, a.UC)(t, e);
                    }
                );
        }, [n, l]),
        s
    );
}
function l() {
    let [e, t] = (0, r.useState)(!1);
    return {
        ref: s(
            (0, r.useCallback)((e) => {
                t(e.isIntersecting);
            }, []),
        ),
        inViewport: e,
    };
}
