n.d(t, { Z: () => i });
var r = n(647438);
function i(e) {
    let t = (0, r.useRef)(null);
    return (
        (0, r.useEffect)(() => {
            t.current = e;
        }, [e]),
        t.current
    );
}
