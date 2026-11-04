var t = n(350835),
    s = n(818348);
n.d(
    l,
    {},
    {
        A: function (e) {
            let { activities: l, status: n, applicationStream: a, voiceChannel: i } = e;
            if (n === s.cl.OFFLINE || n === s.cl.INVISIBLE) return !1;
            let r = l?.filter((e) => e.type !== t.$.HANG_STATUS);
            return null != a || null != i || (r?.length ?? 0) > 0;
        },
    },
);
