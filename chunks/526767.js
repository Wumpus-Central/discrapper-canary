var i = l(855986),
    n = l(945810),
    r = l(71393),
    s = l(246338);
l.d(
    t,
    {},
    {
        a: function (e) {
            return [
                "Build a profile card (an application profile widget) for my Discord profile.\nRead the data from the public source below \u2014 it must be reachable without a login.\nRecommend which fields the card should show and ask me to confirm or edit them before you build.\n",
                e,
            ].join("\n");
        },
        r: function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            return (0, i.bG)([r.A, n.Bt], () => t && (0, s.XF)(r.A.getGuildsArray(), e), [e, t]);
        },
    },
);
