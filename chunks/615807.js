n.d(t, { G: () => a });
var r = n(64700),
    u = n(849269);
function a(e) {
    let [t, n] = r.useState(e);
    return (
        r.useLayoutEffect(() => {
            if (e === u.o6.LEAVE) {
                let t = setTimeout(() => n(e), 100);
                return () => clearTimeout(t);
            }
            n(e);
        }, [e]),
        t
    );
}
