n.d(t, { Z: () => o }), n(388685);
var r = n(73800),
    i = n(122289),
    a = n(622999);
function o() {
    let [e, t] = r.useState(null);
    return (
        r.useEffect(() => {
            (0, a.d2)()
                .then((e) => t(e))
                .catch((e) => {
                    (0, i.q2)(e);
                });
        }, []),
        e
    );
}
