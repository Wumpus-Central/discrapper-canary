n.d(t, { Z: () => r });
var i = n(981631);
function r(e) {
    let { CDN_HOST: t, PROJECT_ENV: n } = window.GLOBAL_ENV;
    return 'development' !== n ? ''.concat(location.protocol, '//').concat(t).concat(i.ANM.SOUNDBOARD_SOUND(e)) : ''.concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(i.ANM.SOUNDBOARD_SOUND(e));
}
