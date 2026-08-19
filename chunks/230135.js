n.d(t, { O: () => a, u: () => s });
var i = n(228366);
function s(e, t) {
    i.h.wait(() => {
        i.h.dispatch({ type: "APPLIED_GUILD_BOOST_COUNT_UPDATE", guildId: e, premiumCount: t });
    });
}
function a() {
    i.h.dispatch({ type: "APPLIED_GUILD_BOOST_COUNT_RESET" });
}
