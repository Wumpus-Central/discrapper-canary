t.d(n, {
    Z: function () {
        return f;
    }
});
var l = t(200651),
    i = t(192379),
    r = t(442837),
    a = t(481060),
    s = t(471445),
    o = t(41776),
    c = t(592125),
    d = t(430824),
    u = t(594174),
    x = t(236373),
    m = t(230900),
    h = t(405613),
    g = t(460838),
    v = t(388032),
    j = t(959320);
function f(e) {
    var n, t, f;
    let { guildId: N, guildEvent: I, guildEventId: p, error: C } = e,
        E = i.useMemo(() => (0, x.Gb)(I, N), [I, N]),
        { channel_id: T, name: S, image: Z, description: b } = E,
        y = (0, r.e7)([c.Z], () => c.Z.getChannel(T), [T]),
        _ = (0, r.e7)([d.Z], () => d.Z.getGuild(N), [N]),
        R = (0, m.cS)(E),
        k = (0, r.e7)([u.default], () => (null != I.creatorId ? u.default.getUser(I.creatorId) : u.default.getCurrentUser()), [I.creatorId]),
        A = (0, r.e7)([o.Z], () => o.Z.isLurking(N), [N]),
        D = (0, s.KS)(y, _);
    return (0, l.jsxs)('div', {
        className: j.content,
        children: [
            (0, l.jsx)(g.Z, {
                className: j.previewCard,
                guild: _,
                channel: y,
                location: null != R ? R : void 0,
                creator: k,
                name: S,
                description: b,
                imageSource: ((t = (0, x.Gb)(I, N, p)), null == (f = Z) && null == t.image ? null : null != f && /^data:/.test(f) ? f : (0, h.Z)(t)),
                isActive: !1,
                isUserLurking: A,
                speakers: [],
                speakerCount: 0,
                rsvped: !0,
                guildEvent: E,
                eventPreview: E
            }),
            (0, l.jsxs)('div', {
                className: j.textContainer,
                children: [
                    (0, l.jsx)(a.Heading, {
                        variant: 'heading-xl/semibold',
                        children: v.intl.string(v.t.yBsFEx)
                    }),
                    (0, l.jsx)(a.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: j.subheader,
                        children:
                            null != location
                                ? v.intl.string(v.t.KDPFi4)
                                : v.intl.format(v.t.f55NX1, {
                                      channelName: null !== (n = null == y ? void 0 : y.name) && void 0 !== n ? n : '',
                                      channelHook: () => {
                                          var e;
                                          return (0, l.jsxs)('div', {
                                              className: j.channelName,
                                              children: [
                                                  null != D
                                                      ? (0, l.jsx)(D, {
                                                            size: 'custom',
                                                            color: 'currentColor',
                                                            width: 20,
                                                            height: 20,
                                                            className: j.icon
                                                        })
                                                      : (0, l.jsx)(a.LocationIcon, {
                                                            size: 'custom',
                                                            color: 'currentColor',
                                                            height: 18,
                                                            width: 18,
                                                            className: j.locationIcon
                                                        }),
                                                  null !== (e = null == y ? void 0 : y.name) && void 0 !== e ? e : R
                                              ]
                                          });
                                      }
                                  })
                    }),
                    null != C &&
                        (0, l.jsx)(a.Text, {
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
