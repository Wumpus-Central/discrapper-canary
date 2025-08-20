n.d(t, { Z: () => f }), n(953529), n(35282);
var l = n(951288),
    r = n(647438),
    i = n(442837),
    a = n(481060),
    s = n(471445),
    o = n(41776),
    c = n(592125),
    u = n(430824),
    d = n(594174),
    x = n(236373),
    m = n(230900),
    g = n(405613),
    v = n(460838),
    h = n(388032),
    p = n(492718);
function f(e) {
    var t, n;
    let { guildId: f, guildEvent: j, guildEventId: y, error: b } = e,
        E = r.useMemo(() => (0, x.Gb)(j, f), [j, f]),
        { channel_id: N, name: O, image: C, description: S } = E,
        T = (0, i.e7)([c.Z], () => c.Z.getChannel(N), [N]),
        Z = (0, i.e7)([u.Z], () => u.Z.getGuild(f), [f]),
        I = (0, m.cS)(E),
        P = (0, i.e7)(
            [d.default],
            () => (null != j.creatorId ? d.default.getUser(j.creatorId) : d.default.getCurrentUser()),
            [j.creatorId],
        ),
        w = (0, i.e7)([o.Z], () => o.Z.isLurking(f), [f]),
        D = (0, s.KS)(T, Z);
    return (0, l.jsxs)("div", {
        className: p.content,
        children: [
            (0, l.jsx)(v.Z, {
                className: p.previewCard,
                guild: Z,
                channel: T,
                location: null != I ? I : void 0,
                creator: P,
                name: O,
                description: S,
                imageSource:
                    ((n = (0, x.Gb)(j, f, y)),
                    null == C && null == n.image ? null : null != C && /^data:/.test(C) ? C : (0, g.Z)(n)),
                isActive: !1,
                isUserLurking: w,
                speakers: [],
                speakerCount: 0,
                rsvped: !0,
                guildEvent: E,
                eventPreview: E,
            }),
            (0, l.jsxs)("div", {
                className: p.textContainer,
                children: [
                    (0, l.jsx)(a.X6q, {
                        variant: "heading-xl/semibold",
                        children: h.intl.string(h.t.yBsFEx),
                    }),
                    (0, l.jsx)(a.Text, {
                        color: "header-secondary",
                        variant: "text-md/normal",
                        className: p.subheader,
                        children:
                            null != location
                                ? h.intl.string(h.t.KDPFi4)
                                : h.intl.format(h.t.f55NX1, {
                                      channelName: null != (t = null == T ? void 0 : T.name) ? t : "",
                                      channelHook: () => {
                                          var e;
                                          return (0, l.jsxs)("div", {
                                              className: p.channelName,
                                              children: [
                                                  null != D
                                                      ? (0, l.jsx)(D, {
                                                            size: "custom",
                                                            color: "currentColor",
                                                            width: 20,
                                                            height: 20,
                                                            className: p.icon,
                                                        })
                                                      : (0, l.jsx)(a._tJ, {
                                                            size: "custom",
                                                            color: "currentColor",
                                                            height: 18,
                                                            width: 18,
                                                            className: p.locationIcon,
                                                        }),
                                                  null != (e = null == T ? void 0 : T.name) ? e : I,
                                              ],
                                          });
                                      },
                                  }),
                    }),
                    null != b &&
                        (0, l.jsx)(a.Text, {
                            color: "text-danger",
                            variant: "text-xs/normal",
                            className: p.subheader,
                            children: b.getAnyErrorMessage(),
                        }),
                ],
            }),
        ],
    });
}
