var i = r(653041);
var a = r(200651);
r(192379);
var s = r(392711),
    o = r.n(s),
    l = r(481060),
    u = r(730749),
    c = r(823379),
    d = r(126539);
let f = 99,
    _ = (e) => {
        let { member: n, empty: r, guildId: i } = e;
        return r || null == n
            ? (0, a.jsx)('div', { className: d.partyMember })
            : (0, a.jsx)('div', {
                  className: d.partyMember,
                  children: (0, a.jsx)(l.Avatar, {
                      src: n.getAvatarURL(i, 16),
                      'aria-label': n.username,
                      size: l.AvatarSizes.SIZE_16,
                      className: d.partyMember
                  })
              });
    },
    h = (0, u.Z)(_),
    p = (e) => {
        let { partySize: n, members: r, minAvatarsShown: i = 1, maxAvatarsShown: s = 2, guildId: l } = e,
            { totalSize: u, knownSize: _ } = n;
        if (u < i) return null;
        let p = o()(r)
                .filter(c.lm)
                .take(s)
                .map((e) =>
                    (0, a.jsx)(
                        h,
                        {
                            member: e,
                            guildId: l
                        },
                        e.id
                    )
                )
                .value(),
            m = u - _;
        for (let e = 0; e < m && p.length < s; e++)
            p.push(
                (0, a.jsx)(
                    h,
                    {
                        empty: !0,
                        guildId: l
                    },
                    'empty-member-'.concat(e)
                )
            );
        let g = Math.max(Math.min(u - p.length, f), 0);
        if (1 === g) {
            let e = r[s];
            p.push(
                (0, a.jsx)(
                    h,
                    {
                        member: e,
                        guildId: l
                    },
                    e.id
                )
            );
        }
        return (0, a.jsx)('div', {
            className: d.wrapper,
            children: (0, a.jsxs)('div', {
                className: d.partyMembers,
                children: [
                    p,
                    g > 1
                        ? (0, a.jsxs)('div', {
                              className: d.partyMemberOverflow,
                              children: ['+', g]
                          })
                        : null
                ]
            })
        });
    };
n.Z = p;
