i.d(t, { A: () => s });
var n = i(627968);
i(64700);
var l = i(281050);
function s(e) {
    let { games: t, renderGame: i } = e;
    return (0, n.jsx)("ul", {
        className: l.V,
        children: t.map((e, t) => (0, n.jsx)("li", { children: i(e, t) }, e.applicationId)),
    });
}
