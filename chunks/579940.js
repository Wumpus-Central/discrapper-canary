"use strict";
n.d(t, { Y0: () => l, gf: () => o, nQ: () => d });
var i = n(582128),
    r = n(196765),
    a = n(121894);
let s = Object.freeze({ id: null, activeDescendant: null }),
    l = (0, r.v)(() => s);
function o(e, t, n) {
    (0, i.useEffect)(() => {
        (0, a.r)(() => {
            t ? l.setState({ id: e, activeDescendant: n }) : l.setState({ id: null, activeDescendant: null });
        });
    }, [e, t, n]);
}
function d() {
    (0, a.r)(() => l.setState(() => s));
}
