n.d(t, { O: () => l, u: () => r });
var a = n(228366);
let r = (e, t) => {
    a.h.wait(() => {
        a.h.dispatch({ type: "APPLIED_GUILD_BOOST_COUNT_UPDATE", guildId: e, premiumCount: t });
    });
};
function l() {
    a.h.dispatch({ type: "APPLIED_GUILD_BOOST_COUNT_RESET" });
}
