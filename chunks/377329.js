n.d(t, { Z: () => p }), n(953529), n(35282);
var l = n(54381),
    r = n(473749),
    i = n(442837),
    a = n(481060),
    s = n(471445),
    o = n(41776),
    c = n(592125),
    u = n(430824),
    d = n(594174),
    g = n(236373),
    x = n(230900),
    m = n(405613),
    h = n(460838),
    v = n(388032),
    f = n(545429);
function p(e) {
    var t, n;
    let { guildId: p, guildEvent: j, guildEventId: b, error: y } = e,
        O = r.useMemo(() => (0, g.Gb)(j, p), [j, p]),
        { channel_id: E, name: N, image: C, description: P } = O,
        S = (0, i.e7)([c.Z], () => c.Z.getChannel(E), [E]),
        I = (0, i.e7)([u.Z], () => u.Z.getGuild(p), [p]),
        Z = (0, x.cS)(O),
        T = (0, i.e7)(
            [d.default],
            () => (null != j.creatorId ? d.default.getUser(j.creatorId) : d.default.getCurrentUser()),
            [j.creatorId],
        ),
        w = (0, i.e7)([o.Z], () => o.Z.isLurking(p), [p]),
        k = (0, s.KS)(S, I);
    return (0, l.jsxs)("div", {
        className: f.content,
        children: [
            (0, l.jsx)(h.Z, {
                className: f.previewCard,
                guild: I,
                channel: S,
                location: null != Z ? Z : void 0,
                creator: T,
                name: N,
                description: P,
                imageSource:
                    ((n = (0, g.Gb)(j, p, b)),
                    null == C && null == n.image ? null : null != C && /^data:/.test(C) ? C : (0, m.Z)(n)),
                isActive: !1,
                isUserLurking: w,
                speakers: [],
                speakerCount: 0,
                rsvped: !0,
                guildEvent: O,
                eventPreview: O,
            }),
            (0, l.jsxs)("div", {
                className: f.textContainer,
                children: [
                    (0, l.jsx)(a.Heading, {
                        variant: "heading-xl/semibold",
                        children: v.intl.string(v.t.yBsFE3),
                    }),
                    (0, l.jsx)(a.Text, {
                        color: "text-subtle",
                        variant: "text-md/normal",
                        className: f.subheader,
                        children:
                            null != location
                                ? v.intl.string(v.t.KDPFi9)
                                : v.intl.format(v.t.f55NX0, {
                                      channelName: null != (t = null == S ? void 0 : S.name) ? t : "",
                                      channelHook: () => {
                                          var e;
                                          return (0, l.jsxs)("div", {
                                              className: f.channelName,
                                              children: [
                                                  null != k
                                                      ? (0, l.jsx)(k, {
                                                            size: "custom",
                                                            color: "currentColor",
                                                            width: 20,
                                                            height: 20,
                                                            className: f.icon,
                                                        })
                                                      : (0, l.jsx)(a._tJ, {
                                                            size: "custom",
                                                            color: "currentColor",
                                                            height: 18,
                                                            width: 18,
                                                            className: f.locationIcon,
                                                        }),
                                                  null != (e = null == S ? void 0 : S.name) ? e : Z,
                                              ],
                                          });
                                      },
                                  }),
                    }),
                    null != y &&
                        (0, l.jsx)(a.Text, {
                            color: "text-feedback-critical",
                            variant: "text-xs/normal",
                            className: f.subheader,
                            children: y.getAnyErrorMessage(),
                        }),
                ],
            }),
        ],
    });
}
