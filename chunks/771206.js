n.d(t, { Z: () => s }), n(47120);
var i = n(192379),
    r = n(122289),
    a = n(622999);
function s() {
    let [e, t] = i.useState(null);
    return (
        i.useEffect(() => {
            (0, a.d2)()
                .then((e) => t(e))
                .catch((e) => {
                    (0, r.q2)(e);
                });
        }, []),
        e
    );
}
