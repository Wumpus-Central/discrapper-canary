n.d(t, { Z: () => _ }), n(653041);
var i = n(200651);
n(192379);
var r = n(392711),
    a = n.n(r),
    s = n(481060),
    o = n(730749),
    l = n(823379),
    u = n(207394);
let c = 99,
    d = (e) => {
        let { member: t, empty: n, guildId: r } = e;
        return n || null == t
            ? (0, i.jsx)('div', { className: u.partyMember })
            : (0, i.jsx)('div', {
                  className: u.partyMember,
                  children: (0, i.jsx)(s.qEK, {
                      src: t.getAvatarURL(r, 16),
                      'aria-label': t.username,
                      size: s.EFr.SIZE_16,
                      className: u.partyMember
                  })
              });
    },
    f = (0, o.Z)(d),
    _ = (e) => {
        let { partySize: t, members: n, minAvatarsShown: r = 1, maxAvatarsShown: s = 2, guildId: o } = e,
            { totalSize: d, knownSize: _ } = t;
        if (d < r) return null;
        let p = a()(n)
                .filter(l.lm)
                .take(s)
                .map((e) =>
                    (0, i.jsx)(
                        f,
                        {
                            member: e,
                            guildId: o
                        },
                        e.id
                    )
                )
                .value(),
            h = d - _;
        for (let e = 0; e < h && p.length < s; e++)
            p.push(
                (0, i.jsx)(
                    f,
                    {
                        empty: !0,
                        guildId: o
                    },
                    'empty-member-'.concat(e)
                )
            );
        let m = Math.max(Math.min(d - p.length, c), 0);
        if (1 === m) {
            let e = n[s];
            p.push(
                (0, i.jsx)(
                    f,
                    {
                        member: e,
                        guildId: o
                    },
                    e.id
                )
            );
        }
        return (0, i.jsx)('div', {
            className: u.wrapper,
            children: (0, i.jsxs)('div', {
                className: u.partyMembers,
                children: [
                    p,
                    m > 1
                        ? (0, i.jsxs)('div', {
                              className: u.partyMemberOverflow,
                              children: ['+', m]
                          })
                        : null
                ]
            })
        });
    };
