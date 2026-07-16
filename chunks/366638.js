e.d(c, { default: () => b });
var s = e(627968),
    d = e(676279),
    n = e(862990),
    i = e(632150),
    a = e(831318),
    o = e(466919),
    r = e(375708);
let b = function (t) {
    let { handleLearnMore: c, ...e } = t,
        b = (0, d.TM)()
            ? "https://cdn.discordapp.com/assets/content/e9f3bfe2ad22ab1d7d5b5fb99c6c4af10b09eba8465b7afab2edc902fdf5feb5.mov"
            : "https://cdn.discordapp.com/assets/content/92bd776fc004d4445d41b22f81ac70136b015e10345cfce32767c0c59245eca0.webm",
        p = (0, n.O9)();
    return (0, s.jsx)(a.A, {
        title: r.intl.string(r.t.ewxv3J),
        subtitle: r.intl.string(r.t.qlsCDB),
        graphic: { type: "video", src: b, loop: !0, loopAt: 5 },
        secondaryCTA: r.intl.string(r.t.ZnqyZ2),
        onSecondaryClick: c,
        ...e,
        children: p && (0, s.jsx)(i.A, { subtitle: r.intl.string(o.default.Z4xttr) }),
    });
};
