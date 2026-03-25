n.d(t, { Z: () => s });
var i = n(64700);
function s(e) {
    i.useEffect(() => {
        let t = e?.();
        return () => {
            t?.();
        };
    }, [e]);
}
