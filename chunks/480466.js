r(47120);
var s = r(192379);
t.Z = function (e, t) {
    let [r, i] = s.useState(e);
    return (
        s.useEffect(() => {
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
