n.d(t, { A: () => A }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(735438),
    s = n.n(a),
    r = n(990078),
    o = n(97808),
    d = n(778712),
    c = n(793574),
    u = n(342296),
    m = n(988647),
    _ = n(403362),
    h = n(562153),
    p = n(656318);
let g = (e) => {
        let { member: t, empty: n, guildId: a } = e,
            s = l.useRef(null);
        return n
            ? (0, i.jsx)("div", { className: p._b })
            : null == t
              ? (0, i.jsx)("div", { className: p.j7, children: (0, i.jsx)(m.A, { className: p.s$ }) })
              : (0, i.jsx)("div", {
                    className: p.sR,
                    children: (0, i.jsx)(u.A, {
                        targetElementRef: s,
                        userId: t.id,
                        guildId: a,
                        newAnalyticsLocations: [c.A.AVATAR],
                        position: "left",
                        clickTrap: !0,
                        children: (e) =>
                            (0, i.jsx)(r.m, {
                                text: h.Ay.getName(a, void 0, t),
                                children: (0, i.jsx)(o.eu, {
                                    ...e,
                                    ref: s,
                                    src: t.getAvatarURL(a, 24),
                                    "aria-label": t.username,
                                    size: d._3.SIZE_24,
                                    className: p.pO,
                                }),
                            }),
                    }),
                });
    },
    A = (e) => {
        let {
                partySize: t,
                members: n,
                minAvatarsShown: l = 1,
                maxAvatarsShown: a = 2,
                guildId: r,
                overflowRef: o,
            } = e,
            { unknownSize: d, totalSize: c, knownSize: u } = t;
        if (c < l) return null;
        let m = s()(n)
            .filter(_.Vq)
            .take(a)
            .map((e) => (0, i.jsx)(g, { member: e, guildId: r }, e.id))
            .value();
        for (let e = 0; e < d && m.length < a; e++) m.push((0, i.jsx)(g, { guildId: r }, `unknown-member-${e}`));
        let h = c - u - d;
        for (let e = 0; e < h && m.length < a; e++)
            m.push((0, i.jsx)(g, { empty: !0, guildId: r }, `empty-member-${e}`));
        let A = Math.max(Math.min(c - m.length, 99), 0);
        if (1 === A) {
            let e = n[a];
            m.push((0, i.jsx)(g, { member: e, guildId: r }, e.id));
        }
        return (0, i.jsx)("div", {
            className: p.iE,
            children: (0, i.jsxs)("div", {
                className: p.S3,
                children: [m, A > 1 ? (0, i.jsxs)("div", { className: p.Hi, ref: o, children: ["+", A] }) : null],
            }),
        });
    };
