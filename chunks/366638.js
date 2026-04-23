c.d(e, { default: () => b });
var a = c(627968),
    n = c(676279),
    o = c(802705),
    s = c(612669),
    d = c(632150),
    l = c(831318),
    i = c(466919),
    r = c(985018);
let b = (t) => {
    let { handleLearnMore: e, ...c } = t,
        b = (0, n.TM)()
            ? "https://cdn.discordapp.com/assets/content/e9f3bfe2ad22ab1d7d5b5fb99c6c4af10b09eba8465b7afab2edc902fdf5feb5.mov"
            : "https://cdn.discordapp.com/assets/content/92bd776fc004d4445d41b22f81ac70136b015e10345cfce32767c0c59245eca0.webm",
        f = (0, o.M)({ location: "hd_streaming_roadblock" }),
        p = (0, s.O9)();
    return (0, a.jsx)(l.A, {
        title: r.intl.string(r.t.ewxv3J),
        subtitle: r.intl.string(r.t.qlsCDB),
        graphic: { type: "video", src: b, loop: !0, loopAt: 5 },
        secondaryCTA: r.intl.string(r.t.ZnqyZ2),
        onSecondaryClick: e,
        ...c,
        children: f && p && (0, a.jsx)(d.A, { subtitle: r.intl.string(i.default.Z4xttr) }),
    });
};
