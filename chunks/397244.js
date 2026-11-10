var t = n(350835),
    a = n(818348);
n.d(
    l,
    {},
    {
        A: function (e) {
            let { activities: l, status: n, applicationStream: s, voiceChannel: i } = e;
            if (n === a.cl.OFFLINE || n === a.cl.INVISIBLE) return !1;
            let r = l?.filter((e) => e.type !== t.$.HANG_STATUS);
            return null != s || null != i || (r?.length ?? 0) > 0;
        },
    },
);
