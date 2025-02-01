r.d(t, { Z: () => s }), r(47120);
var a = r(192379);
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
