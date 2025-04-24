n.d(t, { Q: () => o }), n(388685);
var i = n(192379),
    a = n(542094);
function o(e) {
    let [t, n] = i.useState(e);
    return (
        i.useLayoutEffect(() => {
            if (e === a.JS.LEAVE) {
                let t = setTimeout(() => n(e), 100);
                return () => clearTimeout(t);
            }
            n(e);
        }, [e]),
        t
    );
}
