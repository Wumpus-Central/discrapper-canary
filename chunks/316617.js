n.d(t, { Z: () => p });
var l = n(200651),
    i = n(192379),
    r = n(442837),
    a = n(481060),
    s = n(39154),
    o = n(739566),
    d = n(492593),
    c = n(930282),
    u = n(464891),
    m = n(267128),
    x = n(25015),
    _ = n(592125),
    h = n(217702),
    v = n(388032),
    g = n(765478);
let p = (e) => {
    let { message: t } = e,
        n = (0, o.ZP)(t),
        p = (0, r.e7)([_.Z], () => _.Z.getChannel(t.channel_id)),
        f = i.useMemo(() => (0, s.Z)(t), [t]),
        { content: b } = (0, x.Z)(f, { hideSimpleEmbedContent: !1 }),
        Z = i.useCallback(() => {
            let { leadingIcon: e, trailingIcon: n } = (0, m.f)(t, b, !1, !1, '', {
                leadingIconClass: g.attachmentIcon,
                trailingIconClass: g.attachmentIcon,
                iconSize: h.WW
            });
            return (0, l.jsxs)('div', {
                className: g.contentContainer,
                children: [
                    e,
                    (0, l.jsx)(c.ZP, {
                        message: t,
                        content: b
                    }),
                    n
                ]
            });
        }, [t, b]);
    return null == p
        ? null
        : (0, l.jsxs)('div', {
              className: g.container,
              children: [
                  (0, l.jsx)(a.X6q, {
                      className: g.header,
                      variant: 'heading-sm/semibold',
                      children: v.intl.string(v.t.iouM3d)
                  }),
                  (0, l.jsx)(a.Ttm, {
                      className: g.messagePreviewContainer,
                      children: (0, l.jsx)(d.Z, {
                          childrenMessageContent: Z(),
                          childrenHeader: (0, l.jsx)(u.ZP, {
                              message: t,
                              channel: p,
                              author: n,
                              guildId: p.guild_id
                          }),
                          disableInteraction: !0
                      })
                  })
              ]
          });
};
