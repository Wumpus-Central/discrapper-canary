"use strict";
n.d(t, { A: () => o, o: () => a });
var i = n(627968),
    r = n(64700),
    s = n(461782);
function a(e) {
    let { onPreventIdle: t, onAllowIdle: n, onActive: i } = r.useContext(s.k3);
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
function o(e) {
    let { children: t, className: n } = e,
        { preventIdle: s, allowIdle: o } = a("interact-hover"),
        { preventIdle: l, allowIdle: u } = a("interact-focus");
    r.useEffect(
        () => () => {
            o(), u();
        },
        [o, u],
    );
    let c = r.useCallback(
        (e) => {
            let t = e.target.ownerDocument ?? document;
            e.currentTarget.contains(t.activeElement) || u();
        },
        [u],
    );
    return (0, i.jsx)("div", { className: n, onMouseEnter: s, onMouseLeave: o, onFocus: l, onBlur: c, children: t });
}
