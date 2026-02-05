"use strict";
n.d(t, { Y0: () => o, gf: () => l, nQ: () => u });
var r = n(64700),
    i = n(353640),
    a = n(121894);
let s = Object.freeze({ id: null, activeDescendant: null }),
    o = (0, i.v)(() => s);
function l(e, t, n) {
    (0, r.useEffect)(() => {
        (0, a.r)(() => {
            t ? o.setState({ id: e, activeDescendant: n }) : o.setState({ id: null, activeDescendant: null });
        });
    }, [e, t, n]);
}
function u() {
    (0, a.r)(() => o.setState(() => s));
}
