n.d(t, { Z: () => p }), n(266796), n(301563);
var r = n(200651),
    l = n(192379),
    i = n(442837),
    a = n(481060),
    s = n(471445),
    o = n(41776),
    c = n(592125),
    d = n(430824),
    u = n(594174),
    m = n(236373),
    x = n(230900),
    g = n(405613),
    h = n(460838),
    v = n(388032),
    f = n(216520);
function p(e) {
    var t, n;
    let { guildId: p, guildEvent: j, guildEventId: N, error: b } = e,
        y = l.useMemo(() => (0, m.Gb)(j, p), [j, p]),
        { channel_id: O, name: E, image: C, description: I } = y,
        S = (0, i.e7)([c.Z], () => c.Z.getChannel(O), [O]),
        T = (0, i.e7)([d.Z], () => d.Z.getGuild(p), [p]),
        P = (0, x.cS)(y),
        W = (0, i.e7)([u.default], () => (null != j.creatorId ? u.default.getUser(j.creatorId) : u.default.getCurrentUser()), [j.creatorId]),
        w = (0, i.e7)([o.Z], () => o.Z.isLurking(p), [p]),
        Z = (0, s.KS)(S, T);
    return (0, r.jsxs)('div', {
        className: f.content,
        children: [
            (0, r.jsx)(h.Z, {
                className: f.previewCard,
                guild: T,
                channel: S,
                location: null != P ? P : void 0,
                creator: W,
                name: E,
                description: I,
                imageSource: ((n = (0, m.Gb)(j, p, N)), null == C && null == n.image ? null : null != C && /^data:/.test(C) ? C : (0, g.Z)(n)),
                isActive: !1,
                isUserLurking: w,
                speakers: [],
                speakerCount: 0,
                rsvped: !0,
                guildEvent: y,
                eventPreview: y
            }),
            (0, r.jsxs)('div', {
                className: f.textContainer,
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: 'heading-xl/semibold',
                        children: v.NW.string(v.t.yBsFEx)
                    }),
                    (0, r.jsx)(a.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: f.subheader,
                        children:
                            null != location
                                ? v.NW.string(v.t.KDPFi4)
                                : v.NW.format(v.t.f55NX1, {
                                      channelName: null !== (t = null == S ? void 0 : S.name) && void 0 !== t ? t : '',
                                      channelHook: () => {
                                          var e;
                                          return (0, r.jsxs)('div', {
                                              className: f.channelName,
                                              children: [
                                                  null != Z
                                                      ? (0, r.jsx)(Z, {
                                                            size: 'custom',
                                                            color: 'currentColor',
                                                            width: 20,
                                                            height: 20,
                                                            className: f.icon
                                                        })
                                                      : (0, r.jsx)(a._tJ, {
                                                            size: 'custom',
                                                            color: 'currentColor',
                                                            height: 18,
                                                            width: 18,
                                                            className: f.locationIcon
                                                        }),
                                                  null !== (e = null == S ? void 0 : S.name) && void 0 !== e ? e : P
                                              ]
                                          });
                                      }
                                  })
                    }),
                    null != b &&
                        (0, r.jsx)(a.Text, {
                            color: 'text-danger',
                            variant: 'text-xs/normal',
                            className: f.subheader,
                            children: b.getAnyErrorMessage()
                        })
                ]
            })
        ]
    });
}
