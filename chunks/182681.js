c.d(e, { default: () => f });
var d = c(627968),
    s = c(676279),
    a = c(802705),
    i = c(612669),
    n = c(632150),
    o = c(831318),
    r = c(519412),
    l = c(985018),
    b = c(389420),
    p = c(150225);
let f = (t) => {
    let { handleLearnMore: e, ...c } = t,
        f = (0, s.TM)() ? b.A : p.A,
        h = (0, a.M)({ location: "hd_streaming_roadblock" }),
        u = (0, i.O9)();
    return (0, d.jsx)(o.A, {
        gradientColor: "nitro-pink",
        title: l.intl.string(l.t.ewxv3J),
        subtitle: l.intl.string(l.t.qlsCDB),
        videoSrc: f,
        loopAt: 5,
        onSecondaryClick: e,
        ...c,
        children: h && u && (0, d.jsx)(n.A, { subtitle: l.intl.string(r.default.Z4xttr) }),
    });
};
