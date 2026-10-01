l.d(n, { A: () => o, o: () => u });
var r = l(477900),
    t = l(582128),
    a = l(461782);
function u(e) {
    let { onPreventIdle: n, onAllowIdle: l, onActive: r } = t.useContext(a.k3);
    return {
        preventIdle: t.useCallback(() => {
            n(e);
        }, [e, n]),
        allowIdle: t.useCallback(() => {
            l(e);
        }, [e, l]),
        onActive: r,
    };
}
function o(e) {
    let { children: n, className: l } = e,
        { preventIdle: a, allowIdle: o } = u("interact-hover"),
        { preventIdle: c, allowIdle: s } = u("interact-focus");
    t.useEffect(
        () => () => {
            (o(), s());
        },
        [o, s],
    );
    let i = t.useCallback(
        (e) => {
            let n = e.target.ownerDocument ?? document;
            e.currentTarget.contains(n.activeElement) || s();
        },
        [s],
    );
    return (0, r.jsx)("div", { className: l, onMouseEnter: a, onMouseLeave: o, onFocus: c, onBlur: i, children: n });
}
