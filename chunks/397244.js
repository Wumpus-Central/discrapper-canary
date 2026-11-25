var l = n(350835),
    i = n(818348);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { activities: t, status: n, applicationStream: a, voiceChannel: r } = e;
            if (n === i.cl.OFFLINE || n === i.cl.INVISIBLE) return !1;
            let s = t?.filter((e) => e.type !== l.$.HANG_STATUS);
            return null != a || null != r || (s?.length ?? 0) > 0;
        },
    },
);
