t.d(n, { Z: () => r });
var l = t(64700);
function r(e) {
    l.useEffect(() => {
        let n = e?.();
        return () => {
            n?.();
        };
    }, [e]);
}
