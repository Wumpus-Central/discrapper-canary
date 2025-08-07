s.d(t, { Z: () => n }), s(388685);
var r = s(73800);
let n = function (e, t) {
    let [s, n] = r.useState(e);
    return (
        r.useEffect(() => {
            let s = setTimeout(() => {
                n(e);
            }, t);
            return () => {
                clearTimeout(s);
            };
        }, [e, t]),
        s
    );
};
