n(653041);
var i = n(200651);
n(192379);
var r = n(392711),
    l = n.n(r),
    a = n(481060),
    o = n(100527),
    s = n(184301),
    c = n(347475),
    d = n(463618),
    u = n(823379),
    m = n(413861);
let h = (e) => {
    let { member: t, empty: n, guildId: r } = e;
    return n
        ? (0, i.jsx)('div', { className: m.partyMemberEmpty })
        : null == t
          ? (0, i.jsx)('div', {
                className: m.partyMemberUnknown,
                children: (0, i.jsx)(d.Z, { className: m.partyMemberUnknownIcon })
            })
          : (0, i.jsx)('div', {
                className: m.partyMemberKnown,
                children: (0, i.jsx)(a.Popout, {
                    preload: () => (0, s.Z)(t.id, t.getAvatarURL(r, 80), { guildId: r }),
                    renderPopout: (e) =>
                        (0, i.jsx)(c.Z, {
                            ...e,
                            userId: t.id,
                            guildId: r,
                            newAnalyticsLocations: [o.Z.AVATAR]
                        }),
                    position: 'left',
                    children: (e) =>
                        (0, i.jsx)(a.Avatar, {
                            ...e,
                            src: t.getAvatarURL(r, 24),
                            'aria-label': t.username,
                            size: a.AvatarSizes.SIZE_24,
                            className: m.partyMember
                        })
                })
            });
};
t.Z = (e) => {
    let { partySize: t, members: n, minAvatarsShown: r = 1, maxAvatarsShown: a = 2, guildId: o } = e,
        { unknownSize: s, totalSize: c, knownSize: d } = t;
    if (c < r) return null;
    let f = l()(n)
        .filter(u.lm)
        .take(a)
        .map((e) =>
            (0, i.jsx)(
                h,
                {
                    member: e,
                    guildId: o
                },
                e.id
            )
        )
        .value();
    for (let e = 0; e < s && f.length < a; e++) f.push((0, i.jsx)(h, { guildId: o }, 'unknown-member-'.concat(e)));
    let p = c - d - s;
    for (let e = 0; e < p && f.length < a; e++)
        f.push(
            (0, i.jsx)(
                h,
                {
                    empty: !0,
                    guildId: o
                },
                'empty-member-'.concat(e)
            )
        );
    let _ = Math.max(Math.min(c - f.length, 99), 0);
    if (1 === _) {
        let e = n[a];
        f.push(
            (0, i.jsx)(
                h,
                {
                    member: e,
                    guildId: o
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
                f,
                _ > 1
                    ? (0, i.jsxs)('div', {
                          className: m.partyMemberOverflow,
                          children: ['+', _]
                      })
                    : null
            ]
        })
    });
};
