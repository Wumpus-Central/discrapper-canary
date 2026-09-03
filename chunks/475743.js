n.d(t, { Ay: () => r, p0: () => a });
var i = n(582128);
function r(e) {
    let t = (0, i.useRef)(null);
    return (
        (0, i.useEffect)(() => {
            t.current = e;
        }, [e]),
        t.current
    );
}
function a(e) {
    let { value: t, shouldUpdate: n } = e,
        r = (0, i.useRef)(null);
    return (
        (0, i.useEffect)(() => {
            n && (r.current = t);
        }, [t, n]),
        n ? t : r.current
    );
}
