t.d(n, {
    Q: function () {
        return a;
    }
}),
    t(47120);
var i = t(192379),
    l = t(542094);
function a(e) {
    let [n, t] = i.useState(e);
    return (
        i.useLayoutEffect(() => {
            if (e === l.JS.LEAVE) {
                let n = setTimeout(() => t(e), 100);
                return () => clearTimeout(n);
            }
            t(e);
        }, [e]),
        n
    );
}
