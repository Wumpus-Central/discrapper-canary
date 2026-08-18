"use strict";
n.d(t, { A: () => a, o: () => r });
var l = n(477900),
    i = n(582128),
    s = n(461782);
function r(e) {
    let { onPreventIdle: t, onAllowIdle: n, onActive: l } = i.useContext(s.k3);
    return {
        preventIdle: i.useCallback(() => {
            t(e);
        }, [e, t]),
        allowIdle: i.useCallback(() => {
            n(e);
        }, [e, n]),
        onActive: l,
    };
}
function a(e) {
    let { children: t, className: n } = e,
        { preventIdle: s, allowIdle: a } = r("interact-hover"),
        { preventIdle: o, allowIdle: u } = r("interact-focus");
    i.useEffect(
        () => () => {
            a(), u();
        },
        [a, u],
    );
    let c = i.useCallback(
        (e) => {
            let t = e.target.ownerDocument ?? document;
            e.currentTarget.contains(t.activeElement) || u();
        },
        [u],
    );
    return (0, l.jsx)("div", { className: n, onMouseEnter: s, onMouseLeave: a, onFocus: o, onBlur: c, children: t });
}
