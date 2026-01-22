n.d(t, {
    A: () => p,
}),
    n(228524),
    n(747238);
var l = n(627968),
    r = n(64700),
    i = n(311907),
    s = n(397927),
    a = n(713654),
    o = n(857071),
    c = n(734057),
    u = n(71393),
    d = n(287809),
    g = n(794782),
    x = n(9448),
    m = n(691012),
    h = n(895202),
    j = n(985018),
    v = n(330156);

function p(e) {
    var t, n;
    let { guildId: p, guildEvent: f, guildEventId: b, error: y } = e,
        O = r.useMemo(() => (0, g.hQ)(f, p), [f, p]),
        { channel_id: A, name: N, image: E, description: C } = O,
        P = (0, i.bG)([c.A], () => c.A.getChannel(A), [A]),
        S = (0, i.bG)([u.A], () => u.A.getGuild(p), [p]),
        T = (0, x.oF)(O),
        w = (0, i.bG)(
            [d.default],
            () => (null != f.creatorId ? d.default.getUser(f.creatorId) : d.default.getCurrentUser()),
            [f.creatorId],
        ),
        I = (0, i.bG)([o.A], () => o.A.isLurking(p), [p]),
        D = (0, a.gU)(P, S);
    return (0, l.jsxs)("div", {
        className: v.Qs,
        children: [
            (0, l.jsx)(h.A, {
                className: v.B0,
                guild: S,
                channel: P,
                location: null != T ? T : void 0,
                creator: w,
                name: N,
                description: C,
                imageSource:
                    ((n = (0, g.hQ)(f, p, b)),
                    null == E && null == n.image ? null : null != E && /^data:/.test(E) ? E : (0, m.A)(n)),
                isActive: !1,
                isUserLurking: I,
                speakers: [],
                speakerCount: 0,
                rsvped: !0,
                guildEvent: O,
                eventPreview: O,
                hideAgeVerificationNotice: !0,
            }),
            (0, l.jsxs)("div", {
                className: v.FS,
                children: [
                    (0, l.jsx)(s.Heading, {
                        variant: "heading-xl/semibold",
                        children: j.intl.string(j.t.yBsFE3),
                    }),
                    (0, l.jsx)(s.Text, {
                        color: "text-subtle",
                        variant: "text-md/normal",
                        className: v.m_,
                        children:
                            null != location
                                ? j.intl.string(j.t.KDPFi9)
                                : j.intl.format(j.t.f55NX0, {
                                      channelName: null != (t = null == P ? void 0 : P.name) ? t : "",
                                      channelHook: () => {
                                          var e;
                                          return (0, l.jsxs)("div", {
                                              className: v.HA,
                                              children: [
                                                  null != D
                                                      ? (0, l.jsx)(D, {
                                                            size: "custom",
                                                            color: "currentColor",
                                                            width: 20,
                                                            height: 20,
                                                            className: v.Kk,
                                                        })
                                                      : (0, l.jsx)(s.BT6, {
                                                            size: "custom",
                                                            color: "currentColor",
                                                            height: 18,
                                                            width: 18,
                                                            className: v.NR,
                                                        }),
                                                  null != (e = null == P ? void 0 : P.name) ? e : T,
                                              ],
                                          });
                                      },
                                  }),
                    }),
                    null != y &&
                        (0, l.jsx)(s.Text, {
                            color: "text-feedback-critical",
                            variant: "text-xs/normal",
                            className: v.m_,
                            children: y.getAnyErrorMessage(),
                        }),
                ],
            }),
        ],
    });
}
