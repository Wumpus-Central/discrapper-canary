n.d(t, {
    d: () => l,
    y: () => a,
});
let l = (e) => {
    let { guildId: t, guildEventId: n } = e;
    return "https://discord.com/events/".concat(t, "/").concat(n);
};
function a(e, t, n) {
    return e && t && null != n;
}
