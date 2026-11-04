var i = n(652215);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { CDN_HOST: t, PROJECT_ENV: n } = window.GLOBAL_ENV;
            return "development" !== n
                ? `https://${t}${i.Rsh.SOUNDBOARD_SOUND(e)}`
                : `${location.protocol}${window.GLOBAL_ENV.API_ENDPOINT}${i.Rsh.SOUNDBOARD_SOUND(e)}`;
        },
    },
);
