var i = n(839214);
let r = { timeToLiveMs: 5e3, reappearTimeMs: 1e4 },
    l = (0, i.D)(() => r);
n.d(
    t,
    {},
    {
        Ay: l,
        g_: function (e) {
            l.setState({ reappearTimeMs: e });
        },
        nj: function (e) {
            l.setState({ timeToLiveMs: e });
        },
    },
);
