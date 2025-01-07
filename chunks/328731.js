t.d(n, {
    Z: function () {
        return h;
    }
});
var l = t(200651),
    i = t(120356),
    r = t.n(i),
    a = t(481060),
    o = t(318374),
    s = t(5192),
    c = t(192918),
    u = t(256139),
    d = t(91907),
    m = t(866040),
    f = t(388032),
    p = t(633942);
function h(e) {
    let { entry: n, channel: t, className: i } = e,
        { displayParticipants: h, participant1: x, participant2: v, numOtherParticipants: C, orderedParticipants: g } = (0, c.Z)(n),
        _ = [x, v];
    return (0, l.jsxs)('div', {
        className: r()(p.container, i),
        children: [
            h.length > 0
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(m.Z, {
                              participants: g,
                              channel: t,
                              children: (e) =>
                                  (0, l.jsx)(a.Clickable, {
                                      className: p.clickable,
                                      ...e,
                                      children: (0, l.jsx)(o.Z, {
                                          maxUsers: 3,
                                          users: h,
                                          size: a.AvatarSizes.SIZE_20,
                                          avatarClassName: p.stackedAvatar,
                                          hideOverflowCount: !0,
                                          disableUsernameTooltip: !0
                                      })
                                  })
                          }),
                          (0, l.jsx)(a.Spacer, {
                              size: 6,
                              horizontal: !0
                          })
                      ]
                  })
                : null,
            (0, l.jsx)(a.Heading, {
                variant: 'text-sm/semibold',
                color: 'text-secondary',
                className: r()(p.truncatedText, p.usersHeader),
                scaleFontToUserSetting: !0,
                children: f.intl.format(f.t.rH95Gh, {
                    user0: s.ZP.getName(t.guild_id, t.id, _[0]),
                    user1: s.ZP.getName(t.guild_id, t.id, _[1]),
                    countOthers: C,
                    name0Hook: (e, n) =>
                        (0, l.jsx)(
                            d.Z,
                            {
                                text: e,
                                user: _[0],
                                channel: t
                            },
                            n
                        ),
                    name1Hook: (e, n) =>
                        (0, l.jsx)(
                            d.Z,
                            {
                                text: e,
                                user: _[1],
                                channel: t
                            },
                            n
                        ),
                    countOthersHook: (e, n) =>
                        (0, l.jsx)(
                            m.Z,
                            {
                                participants: g,
                                channel: t,
                                children: (n) =>
                                    (0, l.jsx)(u.Z, {
                                        ...n,
                                        tag: 'span',
                                        children: (0, l.jsx)(a.Text, {
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
