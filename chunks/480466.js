(r.d(t, { Z: () => s }), r(388685));
var a = r(73800);
let s = function (e, t) {
    let [r, s] = a.useState(e);
    return (
        a.useEffect(() => {
            let r = setTimeout(() => {
                s(e);
            }, t);
            return () => {
                clearTimeout(r);
            };
        }, [e, t]),
        r
    );
};
