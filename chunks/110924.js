n.d(t, { Z: () => i });
var r = n(192379);
function i(e) {
    let t = (0, r.useRef)();
    return (
        (0, r.useEffect)(() => {
            t.current = e;
        }, [e]),
        t.current
    );
}
