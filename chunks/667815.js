n.d(t, {
    q: () => i,
    v: () => l,
});
var r = n(570140);
let l = (e, t) => {
    r.Z.wait(() => {
        r.Z.dispatch({
            type: "APPLIED_GUILD_BOOST_COUNT_UPDATE",
            guildId: e,
            premiumCount: t,
        });
    });
};
function i() {
    r.Z.dispatch({ type: "APPLIED_GUILD_BOOST_COUNT_RESET" });
}
