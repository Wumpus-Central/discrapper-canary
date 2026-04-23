n.d(t, { A: () => E });
var a = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(342952),
    o = n(939249),
    d = n(778712),
    c = n(696986),
    u = n(534514),
    m = n(834730),
    _ = n(562153),
    p = n(576757),
    h = n(291594),
    A = n(22869),
    C = n(959),
    x = n(985018),
    f = n(811597);
function E(e) {
    let { entry: t, channel: n, className: r } = e,
        E = l.useRef(null),
        I = l.useRef(null),
        {
            displayParticipants: N,
            participant1: g,
            participant2: v,
            numOtherParticipants: T,
            orderedParticipants: b,
        } = (0, p.A)(t),
        S = [g, v];
    return (0, a.jsxs)("div", {
        className: i()(f.kL, r),
        children: [
            N.length > 0
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(C.A, {
                              targetElementRef: E,
                              participants: b,
                              channel: n,
                              children: (e) =>
                                  (0, a.jsx)(o.D, {
                                      innerRef: E,
                                      className: f.vk,
                                      ...e,
                                      children: (0, a.jsx)(s.A, {
                                          maxUsers: 3,
                                          users: N,
                                          size: d._3.SIZE_20,
                                          hideOverflowCount: !0,
                                          disableUsernameTooltip: !0,
                                      }),
                                  }),
                          }),
                          (0, a.jsx)(c.h, { size: 6, horizontal: !0 }),
                      ],
                  })
                : null,
            (0, a.jsx)(u.D, {
                variant: "text-sm/semibold",
                color: "text-subtle",
                className: i()(f.IY, f.Io),
                scaleFontToUserSetting: !0,
                children: x.intl.format(x.t.rH95Gu, {
                    user0: _.Ay.getName(n.guild_id, n.id, S[0]),
                    user1: _.Ay.getName(n.guild_id, n.id, S[1]),
                    countOthers: T,
                    name0Hook: (e, t) => (0, a.jsx)(A.A, { text: e, user: S[0], channel: n }, t),
                    name1Hook: (e, t) => (0, a.jsx)(A.A, { text: e, user: S[1], channel: n }, t),
                    countOthersHook: (e, t) =>
                        (0, a.jsx)(
                            C.A,
                            {
                                targetElementRef: I,
                                participants: b,
                                channel: n,
                                children: (t) =>
                                    (0, a.jsx)(h.A, {
                                        ...t,
                                        tag: "span",
                                        children: (0, a.jsx)(m.E, {
                                            ref: I,
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
