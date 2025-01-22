var i = r(653041);
var a = r(200651);
r(192379);
var o = r(392711),
    s = r.n(o),
    l = r(481060),
    u = r(730749),
    c = r(823379),
    d = r(126539);
let f = 99,
    p = (e) => {
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
    h = (0, u.Z)(p),
    _ = (e) => {
        let { partySize: n, members: r, minAvatarsShown: i = 1, maxAvatarsShown: o = 2, guildId: l } = e,
            { totalSize: u, knownSize: p } = n;
        if (u < i) return null;
        let _ = s()(r)
                .filter(c.lm)
                .take(o)
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
            m = u - p;
        for (let e = 0; e < m && _.length < o; e++)
            _.push(
                (0, a.jsx)(
                    h,
                    {
                        empty: !0,
                        guildId: l
                    },
                    'empty-member-'.concat(e)
                )
            );
        let g = Math.max(Math.min(u - _.length, f), 0);
        if (1 === g) {
            let e = r[o];
            _.push(
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
                    _,
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
n.Z = _;
