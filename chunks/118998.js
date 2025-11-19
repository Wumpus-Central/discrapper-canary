t.d(n, {
    H: () => i,
    T: () => r,
});
let i = (e) => {
    let { guildId: n, guildEventId: t } = e;
    return "https://discord.com/events/".concat(n, "/").concat(t);
};
function r(e, n, t) {
    return e && n && null != t;
}
