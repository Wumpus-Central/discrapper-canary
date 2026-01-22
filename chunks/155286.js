n.d(t, {
    A: () => E,
    e: () => b,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(311907),
    c = n(397927),
    u = n(775602),
    d = n(998304),
    f = n(854987),
    p = n(40333),
    _ = n(398225),
    h = n(532294),
    m = n(79020);
let g = {
    [h.P7.WELCOME]: "Entry",
    [h.P7.MESSAGES]: "Messages",
    [h.P7.EMOJIS]: "Emojis",
    [h.P7.VOICE]: "Voice",
    [h.P7.GUILDS]: "Servers",
    [h.P7.FRIENDS]: "Friends",
    [h.P7.GAMING]: "Games",
    [h.P7.QUESTS]: "Quests",
    [h.P7.END]: "Entry",
};

function E(e) {
    let { slide: t, className: n } = e,
        a = i.useContext(f.P),
        _ = (0, p.A)((0, c.rdh)(a.primaryColor).hex()),
        h = (0, d.j5)(_),
        E = (0, l.bG)([u.A], () => u.A.useReducedMotion);
    return (0, r.jsx)("div", {
        className: s()(m.k, n),
        children: (0, r.jsx)(o.UR3, {
            artboard: g[t],
            dataBinding: {
                iconColor: {
                    r: h.r,
                    g: h.g,
                    b: h.b,
                    a: 255 * h.a,
                },
                reducedMotion: E,
            },
            fit: "layout",
            withReducedMotion: "short-loop",
        }),
    });
}

function b(e) {
    let { slide: t, className: n } = e,
        i = (0, _.vy)();
    return (0, r.jsx)(_.vw, {
        spring: i,
        children: (0, r.jsx)(E, {
            slide: t,
            className: n,
        }),
    });
}
