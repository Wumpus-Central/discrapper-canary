n.d(t, { A: () => r });
var a = n(627968);
n(64700);
var l = n(651930),
    i = n(554311);
function r(e) {
    let { selectedGame: t, setSelectedGame: n, placeholder: r } = e,
        s = (0, i.Un)(),
        u = (0, i.qo)(t);
    return (0, a.jsx)(l.i, {
        games: s,
        selectedGame: u ?? null,
        onGameSelected: (e) => {
            null != e ? n((0, i.Xm)(e)) : n(null);
        },
        placeholder: r,
    });
}
