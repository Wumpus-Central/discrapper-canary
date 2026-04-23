n.d(t, { A: () => i });
var a = n(627968);
n(64700);
var l = n(651930),
    r = n(554311);
function i(e) {
    let { selectedGame: t, setSelectedGame: n, placeholder: i } = e,
        s = (0, r.Un)(),
        o = (0, r.qo)(t);
    return (0, a.jsx)(l.i, {
        games: s,
        selectedGame: o ?? null,
        onGameSelected: (e) => {
            null != e ? n((0, r.Xm)(e)) : n(null);
        },
        placeholder: i,
    });
}
