n.d(t, { Z: () => p }), n(953529), n(35282);
var r = n(951288),
    l = n(647438),
    i = n(442837),
    a = n(481060),
    s = n(471445),
    o = n(41776),
    c = n(592125),
    u = n(430824),
    d = n(594174),
    x = n(236373),
    g = n(230900),
    m = n(405613),
    v = n(460838),
    h = n(388032),
    j = n(492718);
function p(e) {
    var t, n;
    let { guildId: p, guildEvent: f, guildEventId: b, error: y } = e,
        O = l.useMemo(() => (0, x.Gb)(f, p), [f, p]),
        { channel_id: E, name: C, image: N, description: P } = O,
        S = (0, i.e7)([c.Z], () => c.Z.getChannel(E), [E]),
        T = (0, i.e7)([u.Z], () => u.Z.getGuild(p), [p]),
        Z = (0, g.cS)(O),
        w = (0, i.e7)(
            [d.default],
            () => (null != f.creatorId ? d.default.getUser(f.creatorId) : d.default.getCurrentUser()),
            [f.creatorId],
        ),
        I = (0, i.e7)([o.Z], () => o.Z.isLurking(p), [p]),
        D = (0, s.KS)(S, T);
    return (0, r.jsxs)("div", {
        className: j.content,
        children: [
            (0, r.jsx)(v.Z, {
                className: j.previewCard,
                guild: T,
                channel: S,
                location: null != Z ? Z : void 0,
                creator: w,
                name: C,
                description: P,
                imageSource:
                    ((n = (0, x.Gb)(f, p, b)),
                    null == N && null == n.image ? null : null != N && /^data:/.test(N) ? N : (0, m.Z)(n)),
                isActive: !1,
                isUserLurking: I,
                speakers: [],
                speakerCount: 0,
                rsvped: !0,
                guildEvent: O,
                eventPreview: O,
            }),
            (0, r.jsxs)("div", {
                className: j.textContainer,
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: "heading-xl/semibold",
                        children: h.intl.string(h.t.yBsFEx),
                    }),
                    (0, r.jsx)(a.Text, {
                        color: "text-secondary",
                        variant: "text-md/normal",
                        className: j.subheader,
                        children:
                            null != location
                                ? h.intl.string(h.t.KDPFi4)
                                : h.intl.format(h.t.f55NX1, {
                                      channelName: null != (t = null == S ? void 0 : S.name) ? t : "",
                                      channelHook: () => {
                                          var e;
                                          return (0, r.jsxs)("div", {
                                              className: j.channelName,
                                              children: [
                                                  null != D
                                                      ? (0, r.jsx)(D, {
                                                            size: "custom",
                                                            color: "currentColor",
                                                            width: 20,
                                                            height: 20,
                                                            className: j.icon,
                                                        })
                                                      : (0, r.jsx)(a._tJ, {
                                                            size: "custom",
                                                            color: "currentColor",
                                                            height: 18,
                                                            width: 18,
                                                            className: j.locationIcon,
                                                        }),
                                                  null != (e = null == S ? void 0 : S.name) ? e : Z,
                                              ],
                                          });
                                      },
                                  }),
                    }),
                    null != y &&
                        (0, r.jsx)(a.Text, {
                            color: "text-danger",
                            variant: "text-xs/normal",
                            className: j.subheader,
                            children: y.getAnyErrorMessage(),
                        }),
                ],
            }),
        ],
    });
}
