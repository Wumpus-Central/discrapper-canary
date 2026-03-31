"use strict";
s.d(t, { A: () => i });
var r = s(64700);
let i = function (e, t) {
    let [s, i] = r.useState(e);
    return (
        r.useEffect(() => {
            let s = setTimeout(() => {
                i(e);
            }, t);
            return () => {
                clearTimeout(s);
            };
        }, [e, t]),
        s
    );
};
