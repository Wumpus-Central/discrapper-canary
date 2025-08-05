n.d(t, { Z: () => f });
var r = n(255367),
    l = n(73800),
    i = n(442837),
    a = n(481060),
    s = n(39154),
    o = n(739566),
    c = n(492593),
    d = n(930282),
    u = n(464891),
    m = n(267128),
    p = n(25015),
    g = n(695346),
    x = n(592125),
    _ = n(217702),
    b = n(388032),
    h = n(782544);
let f = (e) => {
    let { message: t } = e,
        n = (0, o.ZP)(t),
        f = (0, i.e7)([x.Z], () => x.Z.getChannel(t.channel_id)),
        v = l.useMemo(() => (0, s.Z)(t), [t]),
        { content: j } = (0, p.Z)(v, { hideSimpleEmbedContent: !1 }),
        y = g.jU.useSetting(),
        O = l.useCallback(() => {
            let { leadingIcon: e, trailingIcon: n } = (0, m.f)(t, j, !1, !1, '', {
                leadingIconClass: h.attachmentIcon,
                trailingIconClass: h.attachmentIcon,
                iconSize: _.WW
            });
            return (0, r.jsxs)('div', {
                className: h.contentContainer,
                children: [
                    e,
                    (0, r.jsx)(d.ZP, {
                        message: t,
                        content: j,
                        compact: y
                    }),
                    n
                ]
            });
        }, [t, j, y]);
    return null == f
        ? null
        : (0, r.jsxs)('div', {
              className: h.container,
              children: [
                  (0, r.jsx)(a.X6q, {
                      className: h.header,
                      variant: 'heading-sm/semibold',
                      children: b.intl.string(b.t.iouM3d)
                  }),
                  (0, r.jsx)(a.Ttm, {
                      className: h.messagePreviewContainer,
                      children: (0, r.jsx)(c.Z, {
                          childrenMessageContent: O(),
                          childrenHeader: (0, r.jsx)(u.ZP, {
                              message: t,
                              channel: f,
                              author: n,
                              guildId: f.guild_id
                          }),
                          disableInteraction: !0,
                          author: n
                      })
                  })
              ]
          });
};
