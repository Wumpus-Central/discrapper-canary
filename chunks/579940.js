"use strict";
n.d(t, { Y0: () => r, gf: () => o, nQ: () => c });
var l = n(64700),
    i = n(353640),
    s = n(121894);
let a = Object.freeze({ id: null, activeDescendant: null }),
    r = (0, i.v)(() => a);
function o(e, t, n) {
    (0, l.useEffect)(() => {
        (0, s.r)(() => {
            t ? r.setState({ id: e, activeDescendant: n }) : r.setState({ id: null, activeDescendant: null });
        });
    }, [e, t, n]);
}
function c() {
    (0, s.r)(() => r.setState(() => a));
}
