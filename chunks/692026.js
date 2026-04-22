n.d(t, { A: () => N });
var l = n(627968),
    i = n(64700),
    s = n(311907),
    r = n(116085),
    a = n(534514),
    d = n(834730),
    o = n(47167),
    c = n(713654),
    u = n(857071),
    x = n(734057),
    h = n(71393),
    m = n(287809),
    g = n(794782),
    v = n(9448),
    j = n(691012),
    A = n(895202),
    E = n(985018),
    p = n(439437);
function N(e) {
    var t;
    let { guildId: n, guildEvent: N, guildEventId: C, error: f } = e,
        y = i.useMemo(() => (0, g.hQ)(N, n), [N, n]),
        { channel_id: b, name: S, image: I, description: T } = y,
        R = (0, s.bG)([x.A], () => x.A.getChannel(b), [b]),
        _ = (0, s.bG)([h.A], () => h.A.getGuild(n), [n]),
        k = (0, v.oF)(y),
        D = (0, s.bG)(
            [m.default],
            () => (null != N.creatorId ? m.default.getUser(N.creatorId) : m.default.getCurrentUser()),
            [N.creatorId],
        ),
        G = (0, s.bG)([u.A], () => u.A.isLurking(n), [n]),
        L = (0, o.Ay)(R),
        M = (0, c.gU)(R, _);
    return (0, l.jsxs)("div", {
        className: p.Qs,
        children: [
            (0, l.jsx)(A.A, {
                className: p.B0,
                guild: _,
                channel: R,
                location: k ?? void 0,
                creator: D,
                name: S,
                description: T,
                imageSource:
                    ((t = (0, g.hQ)(N, n, C)),
                    null == I && null == t.image ? null : null != I && /^data:/.test(I) ? I : (0, j.A)(t)),
                isActive: !1,
                isUserLurking: G,
                speakers: [],
                speakerCount: 0,
                rsvped: !0,
                guildEvent: y,
                eventPreview: y,
                hideAgeVerificationNotice: !0,
            }),
            (0, l.jsxs)("div", {
                className: p.FS,
                children: [
                    (0, l.jsx)(a.D, { variant: "heading-xl/semibold", children: E.intl.string(E.t.yBsFE3) }),
                    (0, l.jsx)(d.E, {
                        color: "text-subtle",
                        variant: "text-md/normal",
                        className: p.m_,
                        children:
                            null != location
                                ? E.intl.string(E.t.KDPFi9)
                                : E.intl.format(E.t.f55NX0, {
                                      channelName: L ?? "",
                                      channelHook: () =>
                                          (0, l.jsxs)("div", {
                                              className: p.HA,
                                              children: [
                                                  null != M
                                                      ? (0, l.jsx)(M, {
                                                            size: "custom",
                                                            color: "currentColor",
                                                            width: 20,
                                                            height: 20,
                                                            className: p.Kk,
                                                        })
                                                      : (0, l.jsx)(r.B, {
                                                            size: "custom",
                                                            color: "currentColor",
                                                            height: 18,
                                                            width: 18,
                                                            className: p.NR,
                                                        }),
                                                  L ?? k,
                                              ],
                                          }),
                                  }),
                    }),
                    null != f &&
                        (0, l.jsx)(d.E, {
                            color: "text-feedback-critical",
                            variant: "text-xs/normal",
                            className: p.m_,
                            children: f.getAnyErrorMessage(),
                        }),
                ],
            }),
        ],
    });
}
