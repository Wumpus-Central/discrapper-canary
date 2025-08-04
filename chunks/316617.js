n.d(t, { Z: () => f });
var r = n(255367),
    a = n(73800),
    i = n(442837),
    o = n(481060),
    l = n(39154),
    s = n(739566),
    c = n(492593),
    d = n(930282),
    u = n(464891),
    m = n(267128),
    p = n(25015),
    _ = n(695346),
    g = n(592125),
    b = n(217702),
    x = n(388032),
    h = n(782544);
let f = (e) => {
    let { message: t } = e,
        n = (0, s.ZP)(t),
        f = (0, i.e7)([g.Z], () => g.Z.getChannel(t.channel_id)),
        v = a.useMemo(() => (0, l.Z)(t), [t]),
        { content: j } = (0, p.Z)(v, { hideSimpleEmbedContent: !1 }),
        y = _.jU.useSetting(),
        C = a.useCallback(() => {
            let { leadingIcon: e, trailingIcon: n } = (0, m.f)(t, j, !1, !1, '', {
                leadingIconClass: h.attachmentIcon,
                trailingIconClass: h.attachmentIcon,
                iconSize: b.WW
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
                  (0, r.jsx)(o.X6q, {
                      className: h.header,
                      variant: 'heading-sm/semibold',
                      children: x.intl.string(x.t.iouM3d)
                  }),
                  (0, r.jsx)(o.Ttm, {
                      className: h.messagePreviewContainer,
                      children: (0, r.jsx)(c.Z, {
                          childrenMessageContent: C(),
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
