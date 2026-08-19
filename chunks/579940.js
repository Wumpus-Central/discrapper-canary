"use strict";
n.d(t, { Y0: () => a, gf: () => o, nQ: () => u });
var l = n(582128),
    i = n(196765),
    s = n(121894);
let r = Object.freeze({ id: null, activeDescendant: null }),
    a = (0, i.v)(() => r);
function o(e, t, n) {
    (0, l.useEffect)(() => {
        (0, s.r)(() => {
            t ? a.setState({ id: e, activeDescendant: n }) : a.setState({ id: null, activeDescendant: null });
        });
    }, [e, t, n]);
}
function u() {
    (0, s.r)(() => a.setState(() => r));
}
