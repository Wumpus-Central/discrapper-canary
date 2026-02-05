"use strict";
n.d(t, { A: () => o, o: () => s });
var r = n(627968),
    i = n(64700),
    a = n(461782);
function s(e) {
    let { onPreventIdle: t, onAllowIdle: n, onActive: r } = i.useContext(a.k3);
    return {
        preventIdle: i.useCallback(() => {
            t(e);
        }, [e, t]),
        allowIdle: i.useCallback(() => {
            n(e);
        }, [e, n]),
        onActive: r,
    };
}
function o(e) {
    let { children: t, className: n } = e,
        { onForceIdle: o, onActive: l } = i.useContext(a.k3),
        { preventIdle: u, allowIdle: c } = s("interact");
    i.useEffect(() => () => c(), [c]);
    let d = i.useCallback(
        (e) => {
            let t = e.target.ownerDocument ?? document;
            e.currentTarget.contains(t.activeElement) || o();
        },
        [o],
    );
    return (0, r.jsx)("div", { className: n, onMouseEnter: u, onMouseLeave: c, onFocus: l, onBlur: d, children: t });
}
