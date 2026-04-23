n.d(t, { G: () => a });
var i = n(64700),
    r = n(849269);
function a(e) {
    let [t, n] = i.useState(e);
    return (
        i.useLayoutEffect(() => {
            if (e === r.o6.LEAVE) {
                let t = setTimeout(() => n(e), 100);
                return () => clearTimeout(t);
            }
            n(e);
        }, [e]),
        t
    );
}
