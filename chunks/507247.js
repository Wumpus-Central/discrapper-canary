n.d(t, { A: () => i });
var r = n(627968);
n(64700);
var l = n(676283);
function i(e) {
    let { games: t, renderGame: n } = e;
    return (0, r.jsx)("ul", {
        className: l.G,
        children: t.map((e, t) => (0, r.jsx)("li", { children: n(e, t) }, e.applicationId)),
    });
}
