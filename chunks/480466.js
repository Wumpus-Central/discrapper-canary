r.d(t, { Z: () => i }), r(388685);
var a = r(192379);
let i = function (e, t) {
    let [r, i] = a.useState(e);
    return (
        a.useEffect(() => {
            let r = setTimeout(() => {
                i(e);
            }, t);
            return () => {
                clearTimeout(r);
            };
        }, [e, t]),
        r
    );
};
