n.d(t, { A: () => g }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n.n(s),
    r = n(435371),
    o = n(397927),
    d = n(793574),
    c = n(342296),
    u = n(988647),
    _ = n(403362),
    m = n(562153),
    h = n(456447);
let p = (e) => {
        let { member: t, empty: n, guildId: s } = e,
            a = l.useRef(null);
        return n
            ? (0, i.jsx)("div", { className: h._b })
            : null == t
              ? (0, i.jsx)("div", { className: h.j7, children: (0, i.jsx)(u.A, { className: h.s$ }) })
              : (0, i.jsx)("div", {
                    className: h.sR,
                    children: (0, i.jsx)(c.A, {
                        targetElementRef: a,
                        userId: t.id,
                        guildId: s,
                        newAnalyticsLocations: [d.A.AVATAR],
                        position: "left",
                        clickTrap: !0,
                        children: (e) =>
                            (0, i.jsx)(r.m_, {
                                text: m.Ay.getName(s, void 0, t),
                                children: (0, i.jsx)(o.euF, {
                                    ...e,
                                    ref: a,
                                    src: t.getAvatarURL(s, 24),
                                    "aria-label": t.username,
                                    size: o._3J.SIZE_24,
                                    className: h.pO,
                                }),
                            }),
                    }),
                });
    },
    g = (e) => {
        let {
                partySize: t,
                members: n,
                minAvatarsShown: l = 1,
                maxAvatarsShown: s = 2,
                guildId: r,
                overflowRef: o,
            } = e,
            { unknownSize: d, totalSize: c, knownSize: u } = t;
        if (c < l) return null;
        let m = a()(n)
            .filter(_.Vq)
            .take(s)
            .map((e) => (0, i.jsx)(p, { member: e, guildId: r }, e.id))
            .value();
        for (let e = 0; e < d && m.length < s; e++) m.push((0, i.jsx)(p, { guildId: r }, `unknown-member-${e}`));
        let g = c - u - d;
        for (let e = 0; e < g && m.length < s; e++)
            m.push((0, i.jsx)(p, { empty: !0, guildId: r }, `empty-member-${e}`));
        let A = Math.max(Math.min(c - m.length, 99), 0);
        if (1 === A) {
            let e = n[s];
            m.push((0, i.jsx)(p, { member: e, guildId: r }, e.id));
        }
        return (0, i.jsx)("div", {
            className: h.iE,
            children: (0, i.jsxs)("div", {
                className: h.S3,
                children: [m, A > 1 ? (0, i.jsxs)("div", { className: h.Hi, ref: o, children: ["+", A] }) : null],
            }),
        });
    };
