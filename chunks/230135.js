h.d(t, { O: () => c, u: () => _ });
var i = h(228366);
function _(p, t) {
    i.h.wait(() => {
        i.h.dispatch({ type: "APPLIED_GUILD_BOOST_COUNT_UPDATE", guildId: p, premiumCount: t });
    });
}
function c() {
    i.h.dispatch({ type: "APPLIED_GUILD_BOOST_COUNT_RESET" });
}
