"use strict";
function r(e) {
    return `${location.protocol}//${window.GLOBAL_ENV.INVITE_HOST}/${e}`;
}
function i(e) {
    return `${location.protocol}//${window.GLOBAL_ENV.GUILD_TEMPLATE_HOST}/${e}`;
}
function s() {
    return `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/channels/@me`;
}
n.d(t, { BH: () => s, FH: () => i, jN: () => r });
