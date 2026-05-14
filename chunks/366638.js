c.d(e, { default: () => o });
var s = c(627968),
    d = c(676279),
    a = c(39423),
    i = c(632150),
    n = c(831318),
    r = c(466919),
    b = c(375708);
let o = (t) => {
    let { handleLearnMore: e, ...c } = t,
        o = (0, d.TM)()
            ? "https://cdn.discordapp.com/assets/content/e9f3bfe2ad22ab1d7d5b5fb99c6c4af10b09eba8465b7afab2edc902fdf5feb5.mov"
            : "https://cdn.discordapp.com/assets/content/92bd776fc004d4445d41b22f81ac70136b015e10345cfce32767c0c59245eca0.webm",
        p = (0, a.O9)();
    return (0, s.jsx)(n.A, {
        title: b.intl.string(b.t.ewxv3J),
        subtitle: b.intl.string(b.t.qlsCDB),
        graphic: { type: "video", src: o, loop: !0, loopAt: 5 },
        secondaryCTA: b.intl.string(b.t.ZnqyZ2),
        onSecondaryClick: e,
        ...c,
        children: p && (0, s.jsx)(i.A, { subtitle: b.intl.string(r.default.Z4xttr) }),
    });
};
