n.d(t, { Q: () => l }), n(388685);
var r = n(647438),
    i = n(542094);
function l(e) {
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
