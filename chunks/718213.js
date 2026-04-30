"use strict";
n.d(t, { A: () => r });
var i = n(64700);
let r = function (e, t) {
    let [n, r] = i.useState(e);
    return (
        i.useEffect(() => {
            let n = setTimeout(() => {
                r(e);
            }, t);
            return () => {
                clearTimeout(n);
            };
        }, [e, t]),
        n
    );
};
