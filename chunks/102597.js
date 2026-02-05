"use strict";
n.d(t, { A: () => i });
var r = n(652215);
function i(e) {
    let { CDN_HOST: t, PROJECT_ENV: n } = window.GLOBAL_ENV;
    return "development" !== n
        ? `https://${t}${r.Rsh.SOUNDBOARD_SOUND(e)}`
        : `${location.protocol}${window.GLOBAL_ENV.API_ENDPOINT}${r.Rsh.SOUNDBOARD_SOUND(e)}`;
}
