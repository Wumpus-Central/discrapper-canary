n.d(t, { K: () => u });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(213305),
    l = n(775030),
    c = n(268831);
function u(e) {
    let { className: t } = e,
        { reducedMotion: a } = i.useContext(s.S);
    async function u() {
        let { default: e } = await n.e("70691").then(n.t.bind(n, 222673, 19));
        return e;
    }
    return (0, r.jsx)(l.F, {
        importData: u,
        shouldAnimate: !a.enabled,
        className: o()(c.sparkles, t),
    });
}
