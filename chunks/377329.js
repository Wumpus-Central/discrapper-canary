l.d(n, { Z: () => N });
var t = l(200651),
    i = l(192379),
    a = l(442837),
    r = l(481060),
    s = l(471445),
    o = l(41776),
    d = l(592125),
    c = l(430824),
    u = l(594174),
    x = l(236373),
    m = l(230900),
    h = l(405613),
    v = l(460838),
    g = l(388032),
    j = l(86574);
function N(e) {
    var n, l;
    let { guildId: N, guildEvent: f, guildEventId: p, error: E } = e,
        C = i.useMemo(() => (0, x.Gb)(f, N), [f, N]),
        { channel_id: I, name: T, image: Z, description: S } = C,
        b = (0, a.e7)([d.Z], () => d.Z.getChannel(I), [I]),
        y = (0, a.e7)([c.Z], () => c.Z.getGuild(N), [N]),
        k = (0, m.cS)(C),
        _ = (0, a.e7)([u.default], () => (null != f.creatorId ? u.default.getUser(f.creatorId) : u.default.getCurrentUser()), [f.creatorId]),
        z = (0, a.e7)([o.Z], () => o.Z.isLurking(N), [N]),
        R = (0, s.KS)(b, y);
    return (0, t.jsxs)('div', {
        className: j.content,
        children: [
            (0, t.jsx)(v.Z, {
                className: j.previewCard,
                guild: y,
                channel: b,
                location: null != k ? k : void 0,
                creator: _,
                name: T,
                description: S,
                imageSource: ((l = (0, x.Gb)(f, N, p)), null == Z && null == l.image ? null : null != Z && /^data:/.test(Z) ? Z : (0, h.Z)(l)),
                isActive: !1,
                isUserLurking: z,
                speakers: [],
                speakerCount: 0,
                rsvped: !0,
                guildEvent: C,
                eventPreview: C
            }),
            (0, t.jsxs)('div', {
                className: j.textContainer,
                children: [
                    (0, t.jsx)(r.X6q, {
                        variant: 'heading-xl/semibold',
                        children: g.intl.string(g.t.yBsFEx)
                    }),
                    (0, t.jsx)(r.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: j.subheader,
                        children:
                            null != location
                                ? g.intl.string(g.t.KDPFi4)
                                : g.intl.format(g.t.f55NX1, {
                                      channelName: null !== (n = null == b ? void 0 : b.name) && void 0 !== n ? n : '',
                                      channelHook: () => {
                                          var e;
                                          return (0, t.jsxs)('div', {
                                              className: j.channelName,
                                              children: [
                                                  null != R
                                                      ? (0, t.jsx)(R, {
                                                            size: 'custom',
                                                            color: 'currentColor',
                                                            width: 20,
                                                            height: 20,
                                                            className: j.icon
                                                        })
                                                      : (0, t.jsx)(r._tJ, {
                                                            size: 'custom',
                                                            color: 'currentColor',
                                                            height: 18,
                                                            width: 18,
                                                            className: j.locationIcon
                                                        }),
                                                  null !== (e = null == b ? void 0 : b.name) && void 0 !== e ? e : k
                                              ]
                                          });
                                      }
                                  })
                    }),
                    null != E &&
                        (0, t.jsx)(r.Text, {
                            color: 'text-danger',
                            variant: 'text-xs/normal',
                            className: j.subheader,
                            children: E.getAnyErrorMessage()
                        })
                ]
            })
        ]
    });
}
