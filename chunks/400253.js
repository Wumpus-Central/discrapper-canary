n.d(
    t,
    {},
    {
        BH: function () {
            return `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/channels/@me`;
        },
        FH: function (e) {
            return `${location.protocol}//${window.GLOBAL_ENV.GUILD_TEMPLATE_HOST}/${e}`;
        },
        jN: function (e) {
            return `${location.protocol}//${window.GLOBAL_ENV.INVITE_HOST}/${e}`;
        },
    },
);
