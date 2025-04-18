n.d(t, { Q: () => a }), n(388685);
var i = n(192379),
    r = n(542094);
function a(e) {
    let [t, n] = i.useState(e);
    return (
        i.useLayoutEffect(() => {
            if (e === r.JS.LEAVE) {
                let t = setTimeout(() => n(e), 100);
                return () => clearTimeout(t);
            }
            n(e);
        }, [e]),
        t
    );
}
