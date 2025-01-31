l.d(n, { Z: () => x });
var t = l(200651),
    i = l(120356),
    r = l.n(i),
    a = l(481060),
    s = l(318374),
    o = l(5192),
    u = l(192918),
    c = l(256139),
    d = l(91907),
    m = l(866040),
    h = l(388032),
    p = l(633942);
function x(e) {
    let { entry: n, channel: l, className: i } = e,
        { displayParticipants: x, participant1: v, participant2: f, numOtherParticipants: C, orderedParticipants: g } = (0, u.Z)(n),
        j = [v, f];
    return (0, t.jsxs)('div', {
        className: r()(p.container, i),
        children: [
            x.length > 0
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)(m.Z, {
                              participants: g,
                              channel: l,
                              children: (e) =>
                                  (0, t.jsx)(a.P3F, {
                                      className: p.clickable,
                                      ...e,
                                      children: (0, t.jsx)(s.Z, {
                                          maxUsers: 3,
                                          users: x,
                                          size: a.EFr.SIZE_20,
                                          avatarClassName: p.stackedAvatar,
                                          hideOverflowCount: !0,
                                          disableUsernameTooltip: !0
                                      })
                                  })
                          }),
                          (0, t.jsx)(a.LZC, {
                              size: 6,
                              horizontal: !0
                          })
                      ]
                  })
                : null,
            (0, t.jsx)(a.X6q, {
                variant: 'text-sm/semibold',
                color: 'text-secondary',
                className: r()(p.truncatedText, p.usersHeader),
                scaleFontToUserSetting: !0,
                children: h.intl.format(h.t.rH95Gh, {
                    user0: o.ZP.getName(l.guild_id, l.id, j[0]),
                    user1: o.ZP.getName(l.guild_id, l.id, j[1]),
                    countOthers: C,
                    name0Hook: (e, n) =>
                        (0, t.jsx)(
                            d.Z,
                            {
                                text: e,
                                user: j[0],
                                channel: l
                            },
                            n
                        ),
                    name1Hook: (e, n) =>
                        (0, t.jsx)(
                            d.Z,
                            {
                                text: e,
                                user: j[1],
                                channel: l
                            },
                            n
                        ),
                    countOthersHook: (e, n) =>
                        (0, t.jsx)(
                            m.Z,
                            {
                                participants: g,
                                channel: l,
                                children: (n) =>
                                    (0, t.jsx)(c.Z, {
                                        ...n,
                                        tag: 'span',
                                        children: (0, t.jsx)(a.Text, {
                                            variant: 'text-sm/semibold',
                                            color: 'text-primary',
                                            lineClamp: 1,
                                            scaleFontToUserSetting: !0,
                                            children: e
                                        })
                                    })
                            },
                            n
                        )
                })
            })
        ]
    });
}
