n.d(t, { A: () => C });
var l = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    i = n(342952),
    o = n(397927),
    c = n(562153),
    d = n(576757),
    u = n(291594),
    m = n(22869),
    p = n(959),
    A = n(985018),
    h = n(25117);
function C(e) {
    let { entry: t, channel: n, className: r } = e,
        C = a.useRef(null),
        E = a.useRef(null),
        {
            displayParticipants: x,
            participant1: N,
            participant2: I,
            numOtherParticipants: f,
            orderedParticipants: _,
        } = (0, d.A)(t),
        g = [N, I];
    return (0, l.jsxs)("div", {
        className: s()(h.kL, r),
        children: [
            x.length > 0
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(p.A, {
                              targetElementRef: C,
                              participants: _,
                              channel: n,
                              children: (e) =>
                                  (0, l.jsx)(o.DUT, {
                                      innerRef: C,
                                      className: h.vk,
                                      ...e,
                                      children: (0, l.jsx)(i.A, {
                                          maxUsers: 3,
                                          users: x,
                                          size: o._3J.SIZE_20,
                                          hideOverflowCount: !0,
                                          disableUsernameTooltip: !0,
                                      }),
                                  }),
                          }),
                          (0, l.jsx)(o.hKd, { size: 6, horizontal: !0 }),
                      ],
                  })
                : null,
            (0, l.jsx)(o.Heading, {
                variant: "text-sm/semibold",
                color: "text-subtle",
                className: s()(h.IY, h.Io),
                scaleFontToUserSetting: !0,
                children: A.intl.format(A.t.rH95Gu, {
                    user0: c.Ay.getName(n.guild_id, n.id, g[0]),
                    user1: c.Ay.getName(n.guild_id, n.id, g[1]),
                    countOthers: f,
                    name0Hook: (e, t) => (0, l.jsx)(m.A, { text: e, user: g[0], channel: n }, t),
                    name1Hook: (e, t) => (0, l.jsx)(m.A, { text: e, user: g[1], channel: n }, t),
                    countOthersHook: (e, t) =>
                        (0, l.jsx)(
                            p.A,
                            {
                                targetElementRef: E,
                                participants: _,
                                channel: n,
                                children: (t) =>
                                    (0, l.jsx)(u.A, {
                                        ...t,
                                        tag: "span",
                                        children: (0, l.jsx)(o.Text, {
                                            ref: E,
                                            variant: "text-sm/semibold",
                                            color: "text-strong",
                                            lineClamp: 1,
                                            scaleFontToUserSetting: !0,
                                            children: e,
                                        }),
                                    }),
                            },
                            t,
                        ),
                }),
            }),
        ],
    });
}
