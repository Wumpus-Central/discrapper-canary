n.d(t, { A: () => a });
var i = n(627968);
n(64700);
var l = n(676283);
function a(e) {
    let { games: t, renderGame: n } = e;
    return (0, i.jsx)("ul", {
        className: l.G,
        children: t.map((e, t) => (0, i.jsx)("li", { children: n(e, t) }, e.applicationId)),
    });
}
