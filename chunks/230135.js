n.d(t, { O: () => a, u: () => s });
var l = n(73153);
let s = (e, t) => {
    l.h.wait(() => {
        l.h.dispatch({ type: "APPLIED_GUILD_BOOST_COUNT_UPDATE", guildId: e, premiumCount: t });
    });
};
function a() {
    l.h.dispatch({ type: "APPLIED_GUILD_BOOST_COUNT_RESET" });
}
