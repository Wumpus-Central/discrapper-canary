n(205816);
var i = n(723702),
    r = n(191850),
    a = n(792996);
let s = {
        screen_capture: { isSupported: i.xl, getLabel: () => a.intl.string(r.default["2KIefJ"]) },
        connect_user_to_voice: { isSupported: () => !0, getLabel: () => a.intl.string(r.default["5Hp3Nx"]) },
    },
    l = Object.keys(s);
n.d(
    t,
    {},
    {
        Et: function (e) {
            return a.intl.formatToPlainString(r.default.vBSfKU, { app: e });
        },
        Us: function (e) {
            return s[e].getLabel();
        },
        de: function (e) {
            return "string" == typeof e && Object.hasOwn(s, e);
        },
        jQ: l,
        yG: function (e) {
            return s[e].isSupported();
        },
    },
);
