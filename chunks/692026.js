n.d(t, { A: () => N });
var l = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(47167),
    d = n(713654),
    c = n(857071),
    o = n(734057),
    u = n(71393),
    x = n(287809),
    h = n(794782),
    m = n(9448),
    g = n(691012),
    v = n(672821),
    j = n(985018),
    A = n(404562);
function N(e) {
    var t;
    let { guildId: n, guildEvent: N, guildEventId: f, error: E } = e,
        p = i.useMemo(() => (0, h.hQ)(N, n), [N, n]),
        { channel_id: C, name: T, image: y, description: b } = p,
        I = (0, s.bG)([o.A], () => o.A.getChannel(C), [C]),
        S = (0, s.bG)([u.A], () => u.A.getGuild(n), [n]),
        G = (0, m.oF)(p),
        k = (0, s.bG)(
            [x.default],
            () => (null != N.creatorId ? x.default.getUser(N.creatorId) : x.default.getCurrentUser()),
            [N.creatorId],
        ),
        _ = (0, s.bG)([c.A], () => c.A.isLurking(n), [n]),
        R = (0, r.Ay)(I),
        D = (0, d.gU)(I, S);
    return (0, l.jsxs)("div", {
        className: A.Qs,
        children: [
            (0, l.jsx)(v.A, {
                className: A.B0,
                guild: S,
                channel: I,
                location: G ?? void 0,
                creator: k,
                name: T,
                description: b,
                imageSource:
                    ((t = (0, h.hQ)(N, n, f)),
                    null == y && null == t.image ? null : null != y && /^data:/.test(y) ? y : (0, g.A)(t)),
                isActive: !1,
                isUserLurking: _,
                speakers: [],
                speakerCount: 0,
                rsvped: !0,
                guildEvent: p,
                eventPreview: p,
                hideAgeVerificationNotice: !0,
            }),
            (0, l.jsxs)("div", {
                className: A.FS,
                children: [
                    (0, l.jsx)(a.Heading, { variant: "heading-xl/semibold", children: j.intl.string(j.t.yBsFE3) }),
                    (0, l.jsx)(a.Text, {
                        color: "text-subtle",
                        variant: "text-md/normal",
                        className: A.m_,
                        children:
                            null != location
                                ? j.intl.string(j.t.KDPFi9)
                                : j.intl.format(j.t.f55NX0, {
                                      channelName: R ?? "",
                                      channelHook: () =>
                                          (0, l.jsxs)("div", {
                                              className: A.HA,
                                              children: [
                                                  null != D
                                                      ? (0, l.jsx)(D, {
                                                            size: "custom",
                                                            color: "currentColor",
                                                            width: 20,
                                                            height: 20,
                                                            className: A.Kk,
                                                        })
                                                      : (0, l.jsx)(a.BT6, {
                                                            size: "custom",
                                                            color: "currentColor",
                                                            height: 18,
                                                            width: 18,
                                                            className: A.NR,
                                                        }),
                                                  R ?? G,
                                              ],
                                          }),
                                  }),
                    }),
                    null != E &&
                        (0, l.jsx)(a.Text, {
                            color: "text-feedback-critical",
                            variant: "text-xs/normal",
                            className: A.m_,
                            children: E.getAnyErrorMessage(),
                        }),
                ],
            }),
        ],
    });
}
