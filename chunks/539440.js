n.d(t, { A: () => i });
function i() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = window.GLOBAL_ENV.GUILD_TEMPLATE_HOST,
        i = `/${e}`;
    return `${t ? `${location.protocol}` : ""}//${n}${i}`;
}
