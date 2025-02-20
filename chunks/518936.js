function r() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
        t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = window.GLOBAL_ENV.GUILD_TEMPLATE_HOST;
    return ''
        .concat(t ? ''.concat(location.protocol) : '', '//')
        .concat(n)
        .concat('/'.concat(e));
}
n.d(t, { Z: () => r });
