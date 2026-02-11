n.d(t, { A: () => A });
var l = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(713654),
    d = n(857071),
    c = n(734057),
    o = n(71393),
    u = n(287809),
    x = n(794782),
    h = n(9448),
    m = n(691012),
    g = n(895202),
    v = n(985018),
    j = n(6754);
function A(e) {
    var t;
    let { guildId: n, guildEvent: A, guildEventId: N, error: f } = e,
        E = i.useMemo(() => (0, x.hQ)(A, n), [A, n]),
        { channel_id: p, name: C, image: T, description: y } = E,
        b = (0, s.bG)([c.A], () => c.A.getChannel(p), [p]),
        I = (0, s.bG)([o.A], () => o.A.getGuild(n), [n]),
        S = (0, h.oF)(E),
        G = (0, s.bG)(
            [u.default],
            () => (null != A.creatorId ? u.default.getUser(A.creatorId) : u.default.getCurrentUser()),
            [A.creatorId],
        ),
        k = (0, s.bG)([d.A], () => d.A.isLurking(n), [n]),
        _ = (0, r.gU)(b, I);
    return (0, l.jsxs)("div", {
        className: j.Qs,
        children: [
            (0, l.jsx)(g.A, {
                className: j.B0,
                guild: I,
                channel: b,
                location: S ?? void 0,
                creator: G,
                name: C,
                description: y,
                imageSource:
                    ((t = (0, x.hQ)(A, n, N)),
                    null == T && null == t.image ? null : null != T && /^data:/.test(T) ? T : (0, m.A)(t)),
                isActive: !1,
                isUserLurking: k,
                speakers: [],
                speakerCount: 0,
                rsvped: !0,
                guildEvent: E,
                eventPreview: E,
                hideAgeVerificationNotice: !0,
            }),
            (0, l.jsxs)("div", {
                className: j.FS,
                children: [
                    (0, l.jsx)(a.Heading, { variant: "heading-xl/semibold", children: v.intl.string(v.t.yBsFE3) }),
                    (0, l.jsx)(a.Text, {
                        color: "text-subtle",
                        variant: "text-md/normal",
                        className: j.m_,
                        children:
                            null != location
                                ? v.intl.string(v.t.KDPFi9)
                                : v.intl.format(v.t.f55NX0, {
                                      channelName: b?.name ?? "",
                                      channelHook: () =>
                                          (0, l.jsxs)("div", {
                                              className: j.HA,
                                              children: [
                                                  null != _
                                                      ? (0, l.jsx)(_, {
                                                            size: "custom",
                                                            color: "currentColor",
                                                            width: 20,
                                                            height: 20,
                                                            className: j.Kk,
                                                        })
                                                      : (0, l.jsx)(a.BT6, {
                                                            size: "custom",
                                                            color: "currentColor",
                                                            height: 18,
                                                            width: 18,
                                                            className: j.NR,
                                                        }),
                                                  b?.name ?? S,
                                              ],
                                          }),
                                  }),
                    }),
                    null != f &&
                        (0, l.jsx)(a.Text, {
                            color: "text-feedback-critical",
                            variant: "text-xs/normal",
                            className: j.m_,
                            children: f.getAnyErrorMessage(),
                        }),
                ],
            }),
        ],
    });
}
