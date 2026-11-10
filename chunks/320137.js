var l = n(582128),
    o = n(855986),
    i = n(121681),
    r = n(492494);
let u = [];
n.d(
    t,
    {},
    {
        A: function (e) {
            let t = (0, o.bG)([i.Ay], () => i.Ay.getGuildEmoji(e), [e]);
            return l.useMemo(() => (null == t ? u : t.filter((t) => (0, r.Eg)(t, e))), [t, e]);
        },
    },
);
