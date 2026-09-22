t.d(s, { A: () => l });
var a = t(582128);
let l = function (e, s) {
    let [t, l] = a.useState(e);
    return (
        a.useEffect(() => {
            let t = setTimeout(() => {
                l(e);
            }, s);
            return () => {
                clearTimeout(t);
            };
        }, [e, s]),
        t
    );
};
