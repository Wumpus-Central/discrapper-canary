t.d(n, {
    H: () => a,
    T: () => i,
});
let a = (e) => {
    let { guildId: n, guildEventId: t } = e;
    return "https://discord.com/events/".concat(n, "/").concat(t);
};
function i(e, n, t) {
    return e && n && null != t;
}
