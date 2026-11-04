var i = n(991690),
    r = n(951178);
let a = [
        { type: i.U.APP_CHANNEL, declaredBy: r.q7.APP_CHANNEL },
        { type: i.U.VOICE_CHANNEL, declaredBy: r.q7.VOICE_CHANNEL },
        { type: i.U.MAIN, declaredBy: r.q7.ACTIVITY },
    ],
    s = [i.U.APP_CHANNEL, i.U.VOICE_CHANNEL],
    l = [i.U.APP_CHANNEL];
n.d(
    t,
    {},
    {
        BR: function (e) {
            return e === i.U.MAIN ? i.U.APP_CHANNEL : e;
        },
        Eb: s,
        Hc: function (e) {
            return a.some((t) => {
                let { declaredBy: n } = t;
                return e.includes(n);
            });
        },
        PH: function (e, t) {
            return null != e && t.includes(e) ? e : (t[0] ?? i.U.APP_CHANNEL);
        },
        hR: function (e) {
            let t = a
                .filter((t) => {
                    let { declaredBy: n } = t;
                    return e?.includes(n) === !0;
                })
                .map((e) => {
                    let { type: t } = e;
                    return t;
                });
            return t.length > 0 ? t : l;
        },
    },
);
