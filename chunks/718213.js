u.d(t, { A: () => r });
var s = u(64700);
let r = function (e, t) {
    let [u, r] = s.useState(e);
    return (
        s.useEffect(() => {
            let u = setTimeout(() => {
                r(e);
            }, t);
            return () => {
                clearTimeout(u);
            };
        }, [e, t]),
        u
    );
};
