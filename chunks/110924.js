n.d(t, { Z: () => r });
var i = n(192379);
function r(e) {
    let t = (0, i.useRef)();
    return (
        (0, i.useEffect)(() => {
            t.current = e;
        }, [e]),
        t.current
    );
}
