n.d(t, { Q: () => o }), n(47120);
var i = n(192379),
    r = n(542094);
function o(e) {
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
