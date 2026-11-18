var l = n(582128),
    i = n(855986),
    o = n(121681),
    r = n(492494);
let a = [];
n.d(
    t,
    {},
    {
        A: function (e) {
            let t = (0, i.bG)([o.Ay], () => o.Ay.getGuildEmoji(e), [e]);
            return l.useMemo(() => (null == t ? a : t.filter((t) => (0, r.Eg)(t, e))), [t, e]);
        },
    },
);
