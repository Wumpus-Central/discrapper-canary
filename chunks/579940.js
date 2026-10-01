n.d(t, { Y0: () => a, gf: () => o, nQ: () => u });
var l = n(582128),
    i = n(196765),
    r = n(121894);
let s = Object.freeze({ id: null, activeDescendant: null }),
    a = (0, i.v)(() => s);
function o(e, t, n) {
    (0, l.useEffect)(() => {
        (0, r.r)(() => {
            t ? a.setState({ id: e, activeDescendant: n }) : a.setState({ id: null, activeDescendant: null });
        });
    }, [e, t, n]);
}
function u() {
    (0, r.r)(() => a.setState(() => s));
}
