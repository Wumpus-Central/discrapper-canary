n.d(t, { Z: () => _ });
var r = n(200651),
    l = n(192379),
    i = n(442837),
    a = n(481060),
    o = n(39154),
    s = n(739566),
    c = n(492593),
    d = n(930282),
    u = n(464891),
    m = n(267128),
    x = n(25015),
    p = n(592125),
    f = n(217702),
    b = n(388032),
    h = n(609923);
let _ = (e) => {
    let { message: t } = e,
        n = (0, s.ZP)(t),
        _ = (0, i.e7)([p.Z], () => p.Z.getChannel(t.channel_id)),
        g = l.useMemo(() => (0, o.Z)(t), [t]),
        { content: v } = (0, x.Z)(g, { hideSimpleEmbedContent: !1 }),
        j = l.useCallback(() => {
            let { leadingIcon: e, trailingIcon: n } = (0, m.f)(t, v, !1, !1, '', {
                leadingIconClass: h.attachmentIcon,
                trailingIconClass: h.attachmentIcon,
                iconSize: f.WW
            });
            return (0, r.jsxs)('div', {
                className: h.contentContainer,
                children: [
                    e,
                    (0, r.jsx)(d.ZP, {
                        message: t,
                        content: v
                    }),
                    n
                ]
            });
        }, [t, v]);
    return null == _
        ? null
        : (0, r.jsxs)('div', {
              className: h.container,
              children: [
                  (0, r.jsx)(a.X6q, {
                      className: h.header,
                      variant: 'heading-sm/semibold',
                      children: b.NW.string(b.t.iouM3d)
                  }),
                  (0, r.jsx)(a.Ttm, {
                      className: h.messagePreviewContainer,
                      children: (0, r.jsx)(c.Z, {
                          childrenMessageContent: j(),
                          childrenHeader: (0, r.jsx)(u.ZP, {
                              message: t,
                              channel: _,
                              author: n,
                              guildId: _.guild_id
                          }),
                          disableInteraction: !0
                      })
                  })
              ]
          });
};
