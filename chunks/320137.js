var l = t(582128),
    n = t(855986),
    r = t(121681),
    s = t(492494);
let i = [];
t.d(
    a,
    {},
    {
        A: function (e) {
            let a = (0, n.bG)([r.Ay], () => r.Ay.getGuildEmoji(e), [e]);
            return l.useMemo(() => (null == a ? i : a.filter((a) => (0, s.Eg)(a, e))), [a, e]);
        },
    },
);
