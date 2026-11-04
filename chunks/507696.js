var n = t(662090);
let l = Array.from([n.rD.USER, n.rD.TEXT_CHANNEL, n.rD.VOICE_CHANNEL, n.rD.GROUP_DM]);
t.d(
    r,
    {},
    {
        D: l,
        N: function (e) {
            return l.includes(e.type);
        },
    },
);
