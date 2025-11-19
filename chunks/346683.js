n.d(t, { Q: () => a }), n(388685);
var r = n(473749),
    i = n(542094);
function a(e) {
    let [t, n] = r.useState(e);
    return (
        r.useLayoutEffect(() => {
            if (e === i.JS.LEAVE) {
                let t = setTimeout(() => n(e), 100);
                return () => clearTimeout(t);
            }
            n(e);
        }, [e]),
        t
    );
}
