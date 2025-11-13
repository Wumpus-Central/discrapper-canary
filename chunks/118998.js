t.d(n, {
    H: () => i,
    T: () => l,
});
let i = (e) => {
    let { guildId: n, guildEventId: t } = e;
    return "https://discord.com/events/".concat(n, "/").concat(t);
};
function l(e, n, t) {
    return e && n && null != t;
}
