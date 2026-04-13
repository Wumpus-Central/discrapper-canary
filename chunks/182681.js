c.d(e, { default: () => f });
var d = c(627968),
    s = c(676279),
    a = c(802705),
    i = c(612669),
    n = c(632150),
    o = c(831318),
    l = c(782965),
    r = c(985018),
    b = c(389420),
    p = c(150225);
let f = (t) => {
    let { handleLearnMore: e, ...c } = t,
        f = (0, s.TM)() ? b.A : p.A,
        h = (0, a.M)({ location: "hd_streaming_roadblock" }),
        u = (0, i.O9)();
    return (0, d.jsx)(o.A, {
        title: r.intl.string(r.t.ewxv3J),
        subtitle: r.intl.string(r.t.qlsCDB),
        graphic: { type: "video", src: f, loop: !0, loopAt: 5 },
        secondaryCTA: r.intl.string(r.t.ZnqyZ2),
        onSecondaryClick: e,
        ...c,
        children: h && u && (0, d.jsx)(n.A, { subtitle: r.intl.string(l.default.Z4xttr) }),
    });
};
