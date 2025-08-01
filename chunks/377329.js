(n.d(t, { Z: () => p }), n(953529), n(35282));
var r = n(255367),
    l = n(73800),
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
    f = n(237466);
function p(e) {
    var t, n;
    let { guildId: p, guildEvent: j, guildEventId: y, error: b } = e,
        E = l.useMemo(() => (0, x.Gb)(j, p), [j, p]),
        { channel_id: O, name: N, image: C, description: T } = E,
        S = (0, i.e7)([c.Z], () => c.Z.getChannel(O), [O]),
        I = (0, i.e7)([u.Z], () => u.Z.getGuild(p), [p]),
        Z = (0, m.cS)(E),
        P = (0, i.e7)([d.default], () => (null != j.creatorId ? d.default.getUser(j.creatorId) : d.default.getCurrentUser()), [j.creatorId]),
        w = (0, i.e7)([o.Z], () => o.Z.isLurking(p), [p]),
        D = (0, s.KS)(S, I);
    return (0, r.jsxs)('div', {
        className: f.content,
        children: [
            (0, r.jsx)(v.Z, {
                className: f.previewCard,
                guild: I,
                channel: S,
                location: null != Z ? Z : void 0,
                creator: P,
                name: N,
                description: T,
                imageSource: ((n = (0, x.Gb)(j, p, y)), null == C && null == n.image ? null : null != C && /^data:/.test(C) ? C : (0, g.Z)(n)),
                isActive: !1,
                isUserLurking: w,
                speakers: [],
                speakerCount: 0,
                rsvped: !0,
                guildEvent: E,
                eventPreview: E
            }),
            (0, r.jsxs)('div', {
                className: f.textContainer,
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: 'heading-xl/semibold',
                        children: h.intl.string(h.t.yBsFEx)
                    }),
                    (0, r.jsx)(a.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: f.subheader,
                        children:
                            null != location
                                ? h.intl.string(h.t.KDPFi4)
                                : h.intl.format(h.t.f55NX1, {
                                      channelName: null != (t = null == S ? void 0 : S.name) ? t : '',
                                      channelHook: () => {
                                          var e;
                                          return (0, r.jsxs)('div', {
                                              className: f.channelName,
                                              children: [
                                                  null != D
                                                      ? (0, r.jsx)(D, {
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
                                                  null != (e = null == S ? void 0 : S.name) ? e : Z
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
