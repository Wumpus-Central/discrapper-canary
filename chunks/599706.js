n.d(t, { Z: () => h }), n(653041);
var i = n(200651);
n(192379);
var l = n(392711),
    a = n.n(l),
    r = n(481060),
    s = n(100527),
    o = n(184301),
    c = n(347475),
    d = n(463618),
    u = n(823379),
    m = n(327193);
let _ = (e) => {
        let { member: t, empty: n, guildId: l } = e;
        return n
            ? (0, i.jsx)('div', { className: m.partyMemberEmpty })
            : null == t
              ? (0, i.jsx)('div', {
                    className: m.partyMemberUnknown,
                    children: (0, i.jsx)(d.Z, { className: m.partyMemberUnknownIcon })
                })
              : (0, i.jsx)('div', {
                    className: m.partyMemberKnown,
                    children: (0, i.jsx)(r.yRy, {
                        preload: () => (0, o.Z)(t.id, t.getAvatarURL(l, 80), { guildId: l }),
                        renderPopout: (e) =>
                            (0, i.jsx)(c.Z, {
                                ...e,
                                userId: t.id,
                                guildId: l,
                                newAnalyticsLocations: [s.Z.AVATAR]
                            }),
                        position: 'left',
                        children: (e) =>
                            (0, i.jsx)(r.qEK, {
                                ...e,
                                src: t.getAvatarURL(l, 24),
                                'aria-label': t.username,
                                size: r.EFr.SIZE_24,
                                className: m.partyMember
                            })
                    })
                });
    },
    h = (e) => {
        let { partySize: t, members: n, minAvatarsShown: l = 1, maxAvatarsShown: r = 2, guildId: s } = e,
            { unknownSize: o, totalSize: c, knownSize: d } = t;
        if (c < l) return null;
        let h = a()(n)
            .filter(u.lm)
            .take(r)
            .map((e) =>
                (0, i.jsx)(
                    _,
                    {
                        member: e,
                        guildId: s
                    },
                    e.id
                )
            )
            .value();
        for (let e = 0; e < o && h.length < r; e++) h.push((0, i.jsx)(_, { guildId: s }, 'unknown-member-'.concat(e)));
        let p = c - d - o;
        for (let e = 0; e < p && h.length < r; e++)
            h.push(
                (0, i.jsx)(
                    _,
                    {
                        empty: !0,
                        guildId: s
                    },
                    'empty-member-'.concat(e)
                )
            );
        let g = Math.max(Math.min(c - h.length, 99), 0);
        if (1 === g) {
            let e = n[r];
            h.push(
                (0, i.jsx)(
                    _,
                    {
                        member: e,
                        guildId: s
                    },
                    e.id
                )
            );
        }
        return (0, i.jsx)('div', {
            className: m.wrapper,
            children: (0, i.jsxs)('div', {
                className: m.partyMembers,
                children: [
                    h,
                    g > 1
                        ? (0, i.jsxs)('div', {
                              className: m.partyMemberOverflow,
                              children: ['+', g]
                          })
                        : null
                ]
            })
        });
    };
