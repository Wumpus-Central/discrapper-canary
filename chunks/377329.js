n.d(t, { Z: () => p }), n(953529), n(35282);
var l = n(200651),
    r = n(192379),
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
    f = n(237466);
function p(e) {
    var t, n;
    let { guildId: p, guildEvent: j, guildEventId: b, error: y } = e,
        O = r.useMemo(() => (0, m.Gb)(j, p), [j, p]),
        { channel_id: N, name: E, image: C, description: I } = O,
        S = (0, i.e7)([c.Z], () => c.Z.getChannel(N), [N]),
        T = (0, i.e7)([u.Z], () => u.Z.getGuild(p), [p]),
        P = (0, x.cS)(O),
        w = (0, i.e7)([d.default], () => (null != j.creatorId ? d.default.getUser(j.creatorId) : d.default.getCurrentUser()), [j.creatorId]),
        Z = (0, i.e7)([o.Z], () => o.Z.isLurking(p), [p]),
        k = (0, s.KS)(S, T);
    return (0, l.jsxs)('div', {
        className: f.content,
        children: [
            (0, l.jsx)(h.Z, {
                className: f.previewCard,
                guild: T,
                channel: S,
                location: null != P ? P : void 0,
                creator: w,
                name: E,
                description: I,
                imageSource: ((n = (0, m.Gb)(j, p, b)), null == C && null == n.image ? null : null != C && /^data:/.test(C) ? C : (0, g.Z)(n)),
                isActive: !1,
                isUserLurking: Z,
                speakers: [],
                speakerCount: 0,
                rsvped: !0,
                guildEvent: O,
                eventPreview: O
            }),
            (0, l.jsxs)('div', {
                className: f.textContainer,
                children: [
                    (0, l.jsx)(a.X6q, {
                        variant: 'heading-xl/semibold',
                        children: v.intl.string(v.t.yBsFEx)
                    }),
                    (0, l.jsx)(a.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: f.subheader,
                        children:
                            null != location
                                ? v.intl.string(v.t.KDPFi4)
                                : v.intl.format(v.t.f55NX1, {
                                      channelName: null != (t = null == S ? void 0 : S.name) ? t : '',
                                      channelHook: () => {
                                          var e;
                                          return (0, l.jsxs)('div', {
                                              className: f.channelName,
                                              children: [
                                                  null != k
                                                      ? (0, l.jsx)(k, {
                                                            size: 'custom',
                                                            color: 'currentColor',
                                                            width: 20,
                                                            height: 20,
                                                            className: f.icon
                                                        })
                                                      : (0, l.jsx)(a._tJ, {
                                                            size: 'custom',
                                                            color: 'currentColor',
                                                            height: 18,
                                                            width: 18,
                                                            className: f.locationIcon
                                                        }),
                                                  null != (e = null == S ? void 0 : S.name) ? e : P
                                              ]
                                          });
                                      }
                                  })
                    }),
                    null != y &&
                        (0, l.jsx)(a.Text, {
                            color: 'text-danger',
                            variant: 'text-xs/normal',
                            className: f.subheader,
                            children: y.getAnyErrorMessage()
                        })
                ]
            })
        ]
    });
}
