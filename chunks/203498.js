n.d(t, { Z: () => r });
var i = n(2070);
function r() {
    let { createGuildApplication: e, submitting: t, error: n } = (0, i.Z)();
    return {
        enableGuildMonetizationForTeam: (t, n, i) => e(t, n, i, 'guildcr'.concat(t.id)),
        submitting: t,
        error: n
    };
}
