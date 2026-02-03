n.d(t, {
    A: () => i,
});
var l = n(627968);
n(64700);
var r = n(651930),
    a = n(554311);

function i(e) {
    let { selectedGame: t, setSelectedGame: n, placeholder: i } = e,
        u = (0, a.Un)(),
        o = (0, a.qo)(t);
    return (0, l.jsx)(r.i, {
        games: u,
        selectedGame: null != o ? o : null,
        onGameSelected: (e) => {
            null != e ? n((0, a.Xm)(e)) : n(null);
        },
        placeholder: i,
    });
}
