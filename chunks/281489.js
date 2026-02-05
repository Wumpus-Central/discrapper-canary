n.d(t, { A: () => _ }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(735438),
    l = n.n(a),
    s = n(397927),
    o = n(793574),
    d = n(342296),
    c = n(988647),
    u = n(403362),
    A = n(641017);
let h = (e) => {
        let { member: t, empty: n, guildId: a } = e,
            l = r.useRef(null);
        return n
            ? (0, i.jsx)("div", { className: A._b })
            : null == t
              ? (0, i.jsx)("div", { className: A.j7, children: (0, i.jsx)(c.A, { className: A.s$ }) })
              : (0, i.jsx)("div", {
                    className: A.sR,
                    children: (0, i.jsx)(d.A, {
                        targetElementRef: l,
                        userId: t.id,
                        guildId: a,
                        newAnalyticsLocations: [o.A.AVATAR],
                        position: "left",
                        clickTrap: !0,
                        children: (e) =>
                            (0, i.jsx)(s.euF, {
                                ...e,
                                ref: l,
                                src: t.getAvatarURL(a, 24),
                                "aria-label": t.username,
                                size: s._3J.SIZE_24,
                                className: A.pO,
                            }),
                    }),
                });
    },
    _ = (e) => {
        let { partySize: t, members: n, minAvatarsShown: r = 1, maxAvatarsShown: a = 2, guildId: s } = e,
            { unknownSize: o, totalSize: d, knownSize: c } = t;
        if (d < r) return null;
        let _ = l()(n)
            .filter(u.Vq)
            .take(a)
            .map((e) => (0, i.jsx)(h, { member: e, guildId: s }, e.id))
            .value();
        for (let e = 0; e < o && _.length < a; e++) _.push((0, i.jsx)(h, { guildId: s }, `unknown-member-${e}`));
        let m = d - c - o;
        for (let e = 0; e < m && _.length < a; e++)
            _.push((0, i.jsx)(h, { empty: !0, guildId: s }, `empty-member-${e}`));
        let p = Math.max(Math.min(d - _.length, 99), 0);
        if (1 === p) {
            let e = n[a];
            _.push((0, i.jsx)(h, { member: e, guildId: s }, e.id));
        }
        return (0, i.jsx)("div", {
            className: A.iE,
            children: (0, i.jsxs)("div", {
                className: A.S3,
                children: [_, p > 1 ? (0, i.jsxs)("div", { className: A.Hi, children: ["+", p] }) : null],
            }),
        });
    };
