n.d(t, { Z: () => v });
var r = n(200651),
    l = n(192379),
    i = n(442837),
    a = n(481060),
    o = n(39154),
    s = n(750030),
    c = n(739566),
    d = n(492593),
    u = n(930282),
    m = n(464891),
    p = n(267128),
    x = n(25015),
    b = n(367814),
    _ = n(592125),
    f = n(217702),
    h = n(388032),
    g = n(782544);
let v = (e) => {
    let { message: t } = e,
        n = (0, c.ZP)(t),
        v = (0, s.k)(t),
        j = (0, b.Z)(n),
        y = (0, i.e7)([_.Z], () => _.Z.getChannel(t.channel_id)),
        O = l.useMemo(() => (0, o.Z)(t), [t]),
        { content: Z } = (0, x.Z)(O, { hideSimpleEmbedContent: !1 }),
        I = l.useCallback(() => {
            let { leadingIcon: e, trailingIcon: n } = (0, p.f)(t, Z, !1, !1, '', {
                leadingIconClass: g.attachmentIcon,
                trailingIconClass: g.attachmentIcon,
                iconSize: f.WW
            });
            return (0, r.jsxs)('div', {
                className: g.contentContainer,
                children: [
                    e,
                    (0, r.jsx)(u.ZP, {
                        message: t,
                        content: Z
                    }),
                    n
                ]
            });
        }, [t, Z]);
    return null == y
        ? null
        : (0, r.jsxs)('div', {
              className: g.container,
              children: [
                  (0, r.jsx)(a.X6q, {
                      className: g.header,
                      variant: 'heading-sm/semibold',
                      children: h.intl.string(h.t.iouM3d)
                  }),
                  (0, r.jsx)(a.Ttm, {
                      className: g.messagePreviewContainer,
                      children: (0, r.jsx)(d.Z, {
                          childrenMessageContent: I(),
                          childrenHeader: (0, r.jsx)(m.ZP, {
                              message: t,
                              channel: y,
                              author: n,
                              guildId: y.guild_id
                          }),
                          disableInteraction: !0,
                          authorHasGradientRole: j,
                          guildId: v
                      })
                  })
              ]
          });
};
