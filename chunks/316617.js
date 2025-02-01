n.d(t, { Z: () => E });
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(39154),
    l = n(739566),
    u = n(492593),
    c = n(930282),
    d = n(464891),
    f = n(267128),
    _ = n(25015),
    p = n(592125),
    h = n(217702),
    m = n(388032),
    g = n(165881);
let E = (e) => {
    let { message: t } = e,
        n = (0, l.ZP)(t),
        E = (0, a.e7)([p.Z], () => p.Z.getChannel(t.channel_id)),
        v = r.useMemo(() => (0, o.Z)(t), [t]),
        { content: y } = (0, _.Z)(v, { hideSimpleEmbedContent: !1 }),
        I = r.useCallback(() => {
            let { leadingIcon: e, trailingIcon: n } = (0, f.f)(t, y, !1, !1, '', {
                leadingIconClass: g.attachmentIcon,
                trailingIconClass: g.attachmentIcon,
                iconSize: h.WW
            });
            return (0, i.jsxs)('div', {
                className: g.contentContainer,
                children: [
                    e,
                    (0, i.jsx)(c.ZP, {
                        message: t,
                        content: y
                    }),
                    n
                ]
            });
        }, [t, y]);
    return null == E
        ? null
        : (0, i.jsxs)('div', {
              className: g.container,
              children: [
                  (0, i.jsx)(s.X6q, {
                      className: g.header,
                      variant: 'heading-sm/semibold',
                      children: m.intl.string(m.t.iouM3d)
                  }),
                  (0, i.jsx)(s.Ttm, {
                      className: g.messagePreviewContainer,
                      children: (0, i.jsx)(u.Z, {
                          childrenMessageContent: I(),
                          childrenHeader: (0, i.jsx)(d.ZP, {
                              message: t,
                              channel: E,
                              author: n,
                              guildId: E.guild_id
                          }),
                          disableInteraction: !0
                      })
                  })
              ]
          });
};
