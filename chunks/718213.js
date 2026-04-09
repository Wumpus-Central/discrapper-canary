s.d(t, { A: () => r });
var a = s(64700);
let r = function (e, t) {
    let [s, r] = a.useState(e);
    return (
        a.useEffect(() => {
            let s = setTimeout(() => {
                r(e);
            }, t);
            return () => {
                clearTimeout(s);
            };
        }, [e, t]),
        s
    );
};
