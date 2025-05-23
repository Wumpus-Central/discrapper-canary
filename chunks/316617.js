n.d(t, { Z: () => j });
var r = n(255367),
    a = n(73800),
    i = n(442837),
    l = n(481060),
    o = n(39154),
    s = n(750030),
    c = n(739566),
    d = n(492593),
    u = n(930282),
    m = n(464891),
    p = n(267128),
    _ = n(25015),
    g = n(367814),
    b = n(695346),
    x = n(592125),
    h = n(217702),
    f = n(388032),
    v = n(403758);
let j = (e) => {
    let { message: t } = e,
        n = (0, c.ZP)(t),
        j = (0, s.k)(t),
        C = (0, g.Z)(n),
        y = (0, i.e7)([x.Z], () => x.Z.getChannel(t.channel_id)),
        I = a.useMemo(() => (0, o.Z)(t), [t]),
        { content: O } = (0, _.Z)(I, { hideSimpleEmbedContent: !1 }),
        T = b.jU.useSetting(),
        Z = a.useCallback(() => {
            let { leadingIcon: e, trailingIcon: n } = (0, p.f)(t, O, !1, !1, '', {
                leadingIconClass: v.attachmentIcon,
                trailingIconClass: v.attachmentIcon,
                iconSize: h.WW
            });
            return (0, r.jsxs)('div', {
                className: v.contentContainer,
                children: [
                    e,
                    (0, r.jsx)(u.ZP, {
                        message: t,
                        content: O,
                        compact: T
                    }),
                    n
                ]
            });
        }, [t, O, T]);
    return null == y
        ? null
        : (0, r.jsxs)('div', {
              className: v.container,
              children: [
                  (0, r.jsx)(l.X6q, {
                      className: v.header,
                      variant: 'heading-sm/semibold',
                      children: f.intl.string(f.t.iouM3d)
                  }),
                  (0, r.jsx)(l.Ttm, {
                      className: v.messagePreviewContainer,
                      children: (0, r.jsx)(d.Z, {
                          childrenMessageContent: Z(),
                          childrenHeader: (0, r.jsx)(m.ZP, {
                              message: t,
                              channel: y,
                              author: n,
                              guildId: y.guild_id
                          }),
                          disableInteraction: !0,
                          authorHasGradientRole: C,
                          guildId: j
                      })
                  })
              ]
          });
};
