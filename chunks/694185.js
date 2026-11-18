var t = n(951178),
    a = n(191850),
    u = n(792996);
let r = [
        [t.q7.APP_CHANNEL, a.default.bHLrO8],
        [t.q7.ACTIVITY, a.default["hp+8nc"]],
        [t.q7.VOICE_CHANNEL, a.default["4V2QWl"]],
        [t.q7.PROFILE_WIDGET, a.default.oJ06Po],
        [t.q7.OVERLAY, a.default.Qbnej2],
        [t.q7.APPLICATION_COMMANDS, a.default.pEwndv],
        [t.q7.BOT, a.default.HWOzBW],
        [t.q7.AUTOMOD, a.default.gsIXM9],
    ],
    i = [
        ["app", [t.q7.APP_CHANNEL, t.q7.ACTIVITY, t.q7.VOICE_CHANNEL]],
        ["overlay", [t.q7.OVERLAY]],
        ["profile_widget", [t.q7.PROFILE_WIDGET]],
        ["bot", [t.q7.BOT, t.q7.APPLICATION_COMMANDS]],
        ["automod", [t.q7.AUTOMOD]],
    ],
    s = {
        app: a.default.BM4Ymz,
        overlay: a.default["0mGHfU"],
        profile_widget: a.default.Jipr29,
        bot: a.default.EbvC13,
        automod: a.default.tiMvei,
    };
n.d(
    e,
    {},
    {
        T8: function (l) {
            return u.intl.string(s[l]);
        },
        Y$: function (l) {
            return i
                .filter((e) => {
                    let [, n] = e;
                    return n.some((e) => l.includes(e));
                })
                .map((l) => {
                    let [e] = l;
                    return e;
                });
        },
        nX: function (l) {
            return r
                .filter((e) => {
                    let [n] = e;
                    return l.includes(n);
                })
                .map((l) => {
                    let [, e] = l;
                    return u.intl.string(e);
                });
        },
    },
);
