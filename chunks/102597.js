n.d(t, { A: () => i });
var r = n(652215);
function i(e) {
    let { CDN_HOST: t, PROJECT_ENV: n } = window.GLOBAL_ENV;
    return "development" !== n
        ? "https://".concat(t).concat(r.Rsh.SOUNDBOARD_SOUND(e))
        : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(r.Rsh.SOUNDBOARD_SOUND(e));
}
