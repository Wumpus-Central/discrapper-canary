n.d(t, { Z: () => v }), n(953529), n(35282);
var r = n(200651),
    l = n(192379),
    i = n(442837),
    a = n(481060),
    s = n(471445),
    o = n(41776),
    c = n(592125),
    u = n(430824),
    d = n(594174),
    m = n(236373),
    h = n(230900),
    x = n(405613),
    g = n(460838),
    p = n(388032),
    f = n(237466);
function v(e) {
    var t, n;
    let { guildId: v, guildEvent: b, guildEventId: j, error: y } = e,
        N = l.useMemo(() => (0, m.Gb)(b, v), [b, v]),
        { channel_id: O, name: E, image: S, description: C } = N,
        P = (0, i.e7)([c.Z], () => c.Z.getChannel(O), [O]),
        I = (0, i.e7)([u.Z], () => u.Z.getGuild(v), [v]),
        T = (0, h.cS)(N),
        w = (0, i.e7)([d.default], () => (null != b.creatorId ? d.default.getUser(b.creatorId) : d.default.getCurrentUser()), [b.creatorId]),
        W = (0, i.e7)([o.Z], () => o.Z.isLurking(v), [v]),
        Z = (0, s.KS)(P, I);
    return (0, r.jsxs)('div', {
        className: f.content,
        children: [
            (0, r.jsx)(g.Z, {
                className: f.previewCard,
                guild: I,
                channel: P,
                location: null != T ? T : void 0,
                creator: w,
                name: E,
                description: C,
                imageSource: ((n = (0, m.Gb)(b, v, j)), null == S && null == n.image ? null : null != S && /^data:/.test(S) ? S : (0, x.Z)(n)),
                isActive: !1,
                isUserLurking: W,
                speakers: [],
                speakerCount: 0,
                rsvped: !0,
                guildEvent: N,
                eventPreview: N
            }),
            (0, r.jsxs)('div', {
                className: f.textContainer,
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: 'heading-xl/semibold',
                        children: p.NW.string(p.t.yBsFEx)
                    }),
                    (0, r.jsx)(a.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: f.subheader,
                        children:
                            null != location
                                ? p.NW.string(p.t.KDPFi4)
                                : p.NW.format(p.t.f55NX1, {
                                      channelName: null != (t = null == P ? void 0 : P.name) ? t : '',
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
                                                  null != (e = null == P ? void 0 : P.name) ? e : T
                                              ]
                                          });
                                      }
                                  })
                    }),
                    null != y &&
                        (0, r.jsx)(a.Text, {
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
