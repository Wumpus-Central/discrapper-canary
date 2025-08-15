s.d(t, { Z: () => r }), s(388685);
var n = s(647438);
let r = function (e, t) {
    let [s, r] = n.useState(e);
    return (
        n.useEffect(() => {
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
