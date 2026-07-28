"use strict";
n.d(t, { A: () => l, o: () => s });
var i = n(477900),
    r = n(582128),
    a = n(461782);
function s(e) {
    let { onPreventIdle: t, onAllowIdle: n, onActive: i } = r.useContext(a.k3);
    return {
        preventIdle: r.useCallback(() => {
            t(e);
        }, [e, t]),
        allowIdle: r.useCallback(() => {
            n(e);
        }, [e, n]),
        onActive: i,
    };
}
function l(e) {
    let { children: t, className: n } = e,
        { preventIdle: a, allowIdle: l } = s("interact-hover"),
        { preventIdle: o, allowIdle: d } = s("interact-focus");
    r.useEffect(
        () => () => {
            l(), d();
        },
        [l, d],
    );
    let c = r.useCallback(
        (e) => {
            let t = e.target.ownerDocument ?? document;
            e.currentTarget.contains(t.activeElement) || d();
        },
        [d],
    );
    return (0, i.jsx)("div", { className: n, onMouseEnter: a, onMouseLeave: l, onFocus: o, onBlur: c, children: t });
}
