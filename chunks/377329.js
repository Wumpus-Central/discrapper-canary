n.d(t, { Z: () => j }), n(953529), n(35282);
var r = n(54381),
    l = n(473749),
    i = n(442837),
    a = n(481060),
    s = n(471445),
    o = n(41776),
    c = n(592125),
    u = n(430824),
    d = n(594174),
    g = n(236373),
    m = n(230900),
    x = n(405613),
    h = n(460838),
    v = n(388032),
    p = n(949957);
function j(e) {
    var t, n;
    let { guildId: j, guildEvent: f, guildEventId: b, error: y } = e,
        O = l.useMemo(() => (0, g.Gb)(f, j), [f, j]),
        { channel_id: E, name: N, image: P, description: C } = O,
        S = (0, i.e7)([c.Z], () => c.Z.getChannel(E), [E]),
        I = (0, i.e7)([u.Z], () => u.Z.getGuild(j), [j]),
        T = (0, m.cS)(O),
        Z = (0, i.e7)(
            [d.default],
            () => (null != f.creatorId ? d.default.getUser(f.creatorId) : d.default.getCurrentUser()),
            [f.creatorId],
        ),
        w = (0, i.e7)([o.Z], () => o.Z.isLurking(j), [j]),
        D = (0, s.KS)(S, I);
    return (0, r.jsxs)("div", {
        className: p.content,
        children: [
            (0, r.jsx)(h.Z, {
                className: p.previewCard,
                guild: I,
                channel: S,
                location: null != T ? T : void 0,
                creator: Z,
                name: N,
                description: C,
                imageSource:
                    ((n = (0, g.Gb)(f, j, b)),
                    null == P && null == n.image ? null : null != P && /^data:/.test(P) ? P : (0, x.Z)(n)),
                isActive: !1,
                isUserLurking: w,
                speakers: [],
                speakerCount: 0,
                rsvped: !0,
                guildEvent: O,
                eventPreview: O,
            }),
            (0, r.jsxs)("div", {
                className: p.textContainer,
                children: [
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-xl/semibold",
                        children: v.intl.string(v.t.yBsFE3),
                    }),
                    (0, r.jsx)(a.Text, {
                        color: "text-secondary",
                        variant: "text-md/normal",
                        className: p.subheader,
                        children:
                            null != location
                                ? v.intl.string(v.t.KDPFi9)
                                : v.intl.format(v.t.f55NX0, {
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
                                                  null != (e = null == S ? void 0 : S.name) ? e : T,
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
