c.d(e, { default: () => p });
var a = c(627968),
    d = c(676279),
    n = c(802705),
    o = c(612669),
    s = c(632150),
    l = c(831318),
    i = c(466919),
    r = c(985018),
    b = c(389420),
    f = c(150225);
let p = (t) => {
    let { handleLearnMore: e, ...c } = t,
        p = (0, d.TM)() ? b.A : f.A,
        A = (0, n.M)({ location: "hd_streaming_roadblock" }),
        u = (0, o.O9)();
    return (0, a.jsx)(l.A, {
        title: r.intl.string(r.t.ewxv3J),
        subtitle: r.intl.string(r.t.qlsCDB),
        graphic: { type: "video", src: p, loop: !0, loopAt: 5 },
        secondaryCTA: r.intl.string(r.t.ZnqyZ2),
        onSecondaryClick: e,
        ...c,
        children: A && u && (0, a.jsx)(s.A, { subtitle: r.intl.string(i.default.Z4xttr) }),
    });
};
