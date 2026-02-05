"use strict";
n.d(t, { A: () => i }), n(321073);
var r = n(7584);
function i(e) {
    let t = [];
    return (
        e.forEach((e) => {
            let n = r.Ay.getByName(e);
            if (null != n && (t.push({ src: n.url, colorize: !1 }), n.hasDiversity))
                for (let e in n.diversityChildren) {
                    let r = n.diversityChildren[e];
                    t.push({ src: r.url, colorize: !1 });
                }
        }),
        t
    );
}
