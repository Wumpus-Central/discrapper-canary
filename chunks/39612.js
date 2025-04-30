function r(e) {
    return ''.concat(location.protocol, '//').concat(window.GLOBAL_ENV.INVITE_HOST, '/').concat(e);
}
function i(e) {
    return ''.concat(location.protocol, '//').concat(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST, '/').concat(e);
}
function a() {
    return ''.concat(location.protocol, '//').concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT, '/channels/@me');
}
n.d(t, {
    Gk: () => a,
    Oh: () => i,
    z0: () => r
});
