function r(e) {
    return `${location.protocol}//${window.GLOBAL_ENV.INVITE_HOST}/${e}`;
}
function i(e) {
    return `${location.protocol}//${window.GLOBAL_ENV.GUILD_TEMPLATE_HOST}/${e}`;
}
function a() {
    return `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/channels/@me`;
}
n.d(t, { BH: () => a, FH: () => i, jN: () => r });
