e.d(c, { default: () => l });
var s = e(627968),
    d = e(676279),
    a = e(802705),
    i = e(612669),
    n = e(632150),
    o = e(831318),
    r = e(466919),
    b = e(985018);
let l = (t) => {
    let { handleLearnMore: c, ...e } = t,
        l = (0, d.TM)()
            ? "https://cdn.discordapp.com/assets/content/e9f3bfe2ad22ab1d7d5b5fb99c6c4af10b09eba8465b7afab2edc902fdf5feb5.mov"
            : "https://cdn.discordapp.com/assets/content/92bd776fc004d4445d41b22f81ac70136b015e10345cfce32767c0c59245eca0.webm",
        p = (0, a.M)({ location: "hd_streaming_roadblock" }),
        f = (0, i.O9)();
    return (0, s.jsx)(o.A, {
        title: b.intl.string(b.t.ewxv3J),
        subtitle: b.intl.string(b.t.qlsCDB),
        graphic: { type: "video", src: l, loop: !0, loopAt: 5 },
        secondaryCTA: b.intl.string(b.t.ZnqyZ2),
        onSecondaryClick: c,
        ...e,
        children: p && f && (0, s.jsx)(n.A, { subtitle: b.intl.string(r.default.Z4xttr) }),
    });
};
