t.d(n, { Z: () => N });
var l = t(200651),
    i = t(192379),
    r = t(442837),
    s = t(481060),
    a = t(471445),
    o = t(41776),
    d = t(592125),
    c = t(430824),
    u = t(594174),
    x = t(236373),
    h = t(230900),
    m = t(405613),
    v = t(460838),
    g = t(388032),
    j = t(86574);
function N(e) {
    var n, t;
    let { guildId: N, guildEvent: p, guildEventId: f, error: C } = e,
        E = i.useMemo(() => (0, x.Gb)(p, N), [p, N]),
        { channel_id: I, name: S, image: T, description: Z } = E,
        y = (0, r.e7)([d.Z], () => d.Z.getChannel(I), [I]),
        b = (0, r.e7)([c.Z], () => c.Z.getGuild(N), [N]),
        k = (0, h.cS)(E),
        _ = (0, r.e7)([u.default], () => (null != p.creatorId ? u.default.getUser(p.creatorId) : u.default.getCurrentUser()), [p.creatorId]),
        R = (0, r.e7)([o.Z], () => o.Z.isLurking(N), [N]),
        z = (0, a.KS)(y, b);
    return (0, l.jsxs)('div', {
        className: j.content,
        children: [
            (0, l.jsx)(v.Z, {
                className: j.previewCard,
                guild: b,
                channel: y,
                location: null != k ? k : void 0,
                creator: _,
                name: S,
                description: Z,
                imageSource: ((t = (0, x.Gb)(p, N, f)), null == T && null == t.image ? null : null != T && /^data:/.test(T) ? T : (0, m.Z)(t)),
                isActive: !1,
                isUserLurking: R,
                speakers: [],
                speakerCount: 0,
                rsvped: !0,
                guildEvent: E,
                eventPreview: E
            }),
            (0, l.jsxs)('div', {
                className: j.textContainer,
                children: [
                    (0, l.jsx)(s.X6q, {
                        variant: 'heading-xl/semibold',
                        children: g.intl.string(g.t.yBsFEx)
                    }),
                    (0, l.jsx)(s.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: j.subheader,
                        children:
                            null != location
                                ? g.intl.string(g.t.KDPFi4)
                                : g.intl.format(g.t.f55NX1, {
                                      channelName: null !== (n = null == y ? void 0 : y.name) && void 0 !== n ? n : '',
                                      channelHook: () => {
                                          var e;
                                          return (0, l.jsxs)('div', {
                                              className: j.channelName,
                                              children: [
                                                  null != z
                                                      ? (0, l.jsx)(z, {
                                                            size: 'custom',
                                                            color: 'currentColor',
                                                            width: 20,
                                                            height: 20,
                                                            className: j.icon
                                                        })
                                                      : (0, l.jsx)(s._tJ, {
                                                            size: 'custom',
                                                            color: 'currentColor',
                                                            height: 18,
                                                            width: 18,
                                                            className: j.locationIcon
                                                        }),
                                                  null !== (e = null == y ? void 0 : y.name) && void 0 !== e ? e : k
                                              ]
                                          });
                                      }
                                  })
                    }),
                    null != C &&
                        (0, l.jsx)(s.Text, {
                            color: 'text-danger',
                            variant: 'text-xs/normal',
                            className: j.subheader,
                            children: C.getAnyErrorMessage()
                        })
                ]
            })
        ]
    });
}
