n.d(t, { A: () => h }), n(321073);
var i = n(627968),
    a = n(64700),
    r = n(735438),
    l = n.n(r),
    s = n(397927),
    o = n(793574),
    d = n(342296),
    c = n(988647),
    u = n(403362),
    _ = n(456447);
let m = (e) => {
        let { member: t, empty: n, guildId: r } = e,
            l = a.useRef(null);
        return n
            ? (0, i.jsx)("div", { className: _._b })
            : null == t
              ? (0, i.jsx)("div", { className: _.j7, children: (0, i.jsx)(c.A, { className: _.s$ }) })
              : (0, i.jsx)("div", {
                    className: _.sR,
                    children: (0, i.jsx)(d.A, {
                        targetElementRef: l,
                        userId: t.id,
                        guildId: r,
                        newAnalyticsLocations: [o.A.AVATAR],
                        position: "left",
                        clickTrap: !0,
                        children: (e) =>
                            (0, i.jsx)(s.euF, {
                                ...e,
                                ref: l,
                                src: t.getAvatarURL(r, 24),
                                "aria-label": t.username,
                                size: s._3J.SIZE_24,
                                className: _.pO,
                            }),
                    }),
                });
    },
    h = (e) => {
        let { partySize: t, members: n, minAvatarsShown: a = 1, maxAvatarsShown: r = 2, guildId: s } = e,
            { unknownSize: o, totalSize: d, knownSize: c } = t;
        if (d < a) return null;
        let h = l()(n)
            .filter(u.Vq)
            .take(r)
            .map((e) => (0, i.jsx)(m, { member: e, guildId: s }, e.id))
            .value();
        for (let e = 0; e < o && h.length < r; e++) h.push((0, i.jsx)(m, { guildId: s }, `unknown-member-${e}`));
        let p = d - c - o;
        for (let e = 0; e < p && h.length < r; e++)
            h.push((0, i.jsx)(m, { empty: !0, guildId: s }, `empty-member-${e}`));
        let g = Math.max(Math.min(d - h.length, 99), 0);
        if (1 === g) {
            let e = n[r];
            h.push((0, i.jsx)(m, { member: e, guildId: s }, e.id));
        }
        return (0, i.jsx)("div", {
            className: _.iE,
            children: (0, i.jsxs)("div", {
                className: _.S3,
                children: [h, g > 1 ? (0, i.jsxs)("div", { className: _.Hi, children: ["+", g] }) : null],
            }),
        });
    };
