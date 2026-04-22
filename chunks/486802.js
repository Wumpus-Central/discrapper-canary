n.d(t, { A: () => l });
var i = n(736456);
function l() {
    let { createGuildApplication: e, submitting: t, error: n } = (0, i.A)();
    return { enableGuildMonetizationForTeam: (t, n, i) => e(t, n, i, `guildcr${t.id}`), submitting: t, error: n };
}
