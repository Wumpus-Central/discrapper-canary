r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(122289),
    s = r(622999);
function l() {
    let [e, n] = a.useState(null);
    return (
        a.useEffect(() => {
            (0, s.d2)()
                .then((e) => n(e))
                .catch((e) => {
                    (0, o.q2)(e);
                });
        }, []),
        e
    );
}
