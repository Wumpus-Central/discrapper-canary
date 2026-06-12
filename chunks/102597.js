"use strict";
n.d(t, { A: () => r });
var i = n(652215);
function r(e) {
    let { CDN_HOST: t, PROJECT_ENV: n } = window.GLOBAL_ENV;
    return "development" !== n
        ? `https://${t}${i.Rsh.SOUNDBOARD_SOUND(e)}`
        : `${location.protocol}${window.GLOBAL_ENV.API_ENDPOINT}${i.Rsh.SOUNDBOARD_SOUND(e)}`;
}
