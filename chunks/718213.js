n.d(t, { A: () => i }), n(896048);
var r = n(64700);
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
