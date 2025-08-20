n.d(t, { Z: () => i }), n(388685);
var r = n(647438);
let i = function (e, t) {
    let [n, i] = r.useState(e);
    return (
        r.useEffect(() => {
            let n = setTimeout(() => {
                i(e);
            }, t);
            return () => {
                clearTimeout(n);
            };
        }, [e, t]),
        n
    );
};
