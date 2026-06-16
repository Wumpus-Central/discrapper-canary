"use strict";
function i(e) {
    return `${location.protocol}//${window.GLOBAL_ENV.INVITE_HOST}/${e}`;
}
function r(e) {
    return `${location.protocol}//${window.GLOBAL_ENV.GUILD_TEMPLATE_HOST}/${e}`;
}
function s() {
    return `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/channels/@me`;
}
n.d(t, { BH: () => s, FH: () => r, jN: () => i });
