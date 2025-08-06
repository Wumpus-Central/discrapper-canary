n.d(t, { Z: () => f }), n(953529), n(35282);
var r = n(255367),
    l = n(73800),
    i = n(442837),
    a = n(481060),
    s = n(471445),
    o = n(41776),
    c = n(592125),
    u = n(430824),
    d = n(594174),
    m = n(236373),
    x = n(230900),
    g = n(405613),
    h = n(460838),
    v = n(388032),
    p = n(237466);
function f(e) {
    var t, n;
    let { guildId: f, guildEvent: j, guildEventId: b, error: y } = e,
        O = l.useMemo(() => (0, m.Gb)(j, f), [j, f]),
        { channel_id: E, name: N, image: C, description: I } = O,
        S = (0, i.e7)([c.Z], () => c.Z.getChannel(E), [E]),
        T = (0, i.e7)([u.Z], () => u.Z.getGuild(f), [f]),
        P = (0, x.cS)(O),
        w = (0, i.e7)(
            [d.default],
            () => (null != j.creatorId ? d.default.getUser(j.creatorId) : d.default.getCurrentUser()),
            [j.creatorId],
        ),
        Z = (0, i.e7)([o.Z], () => o.Z.isLurking(f), [f]),
        D = (0, s.KS)(S, T);
    return (0, r.jsxs)("div", {
        className: p.content,
        children: [
            (0, r.jsx)(h.Z, {
                className: p.previewCard,
                guild: T,
                channel: S,
                location: null != P ? P : void 0,
                creator: w,
                name: N,
                description: I,
                imageSource:
                    ((n = (0, m.Gb)(j, f, b)),
                    null == C && null == n.image ? null : null != C && /^data:/.test(C) ? C : (0, g.Z)(n)),
                isActive: !1,
                isUserLurking: Z,
                speakers: [],
                speakerCount: 0,
                rsvped: !0,
                guildEvent: O,
                eventPreview: O,
            }),
            (0, r.jsxs)("div", {
                className: p.textContainer,
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: "heading-xl/semibold",
                        children: v.intl.string(v.t.yBsFEx),
                    }),
                    (0, r.jsx)(a.Text, {
                        color: "header-secondary",
                        variant: "text-md/normal",
                        className: p.subheader,
                        children:
                            null != location
                                ? v.intl.string(v.t.KDPFi4)
                                : v.intl.format(v.t.f55NX1, {
                                      channelName: null != (t = null == S ? void 0 : S.name) ? t : "",
                                      channelHook: () => {
                                          var e;
                                          return (0, r.jsxs)("div", {
                                              className: p.channelName,
                                              children: [
                                                  null != D
                                                      ? (0, r.jsx)(D, {
                                                            size: "custom",
                                                            color: "currentColor",
                                                            width: 20,
                                                            height: 20,
                                                            className: p.icon,
                                                        })
                                                      : (0, r.jsx)(a._tJ, {
                                                            size: "custom",
                                                            color: "currentColor",
                                                            height: 18,
                                                            width: 18,
                                                            className: p.locationIcon,
                                                        }),
                                                  null != (e = null == S ? void 0 : S.name) ? e : P,
                                              ],
                                          });
                                      },
                                  }),
                    }),
                    null != y &&
                        (0, r.jsx)(a.Text, {
                            color: "text-danger",
                            variant: "text-xs/normal",
                            className: p.subheader,
                            children: y.getAnyErrorMessage(),
                        }),
                ],
            }),
        ],
    });
}
