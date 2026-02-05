n.d(t, { A: () => l });
var i = n(64700);
let l = function (e, t) {
    let [n, l] = i.useState(e);
    return (
        i.useEffect(() => {
            let n = setTimeout(() => {
                l(e);
            }, t);
            return () => {
                clearTimeout(n);
            };
        }, [e, t]),
        n
    );
};
