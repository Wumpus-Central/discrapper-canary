var i = r(200651),
    a = r(192379),
    s = r(442837),
    o = r(481060),
    l = r(39154),
    u = r(739566),
    c = r(492593),
    d = r(930282),
    f = r(464891),
    _ = r(267128),
    h = r(25015),
    p = r(592125),
    m = r(217702),
    g = r(388032),
    E = r(165881);
let v = (e) => {
    let { message: n } = e,
        r = (0, u.ZP)(n),
        v = (0, s.e7)([p.Z], () => p.Z.getChannel(n.channel_id)),
        I = a.useMemo(() => (0, l.Z)(n), [n]),
        { content: T } = (0, h.Z)(I, { hideSimpleEmbedContent: !1 }),
        b = a.useCallback(() => {
            let { leadingIcon: e, trailingIcon: r } = (0, _.f)(n, T, !1, !1, '', {
                leadingIconClass: E.attachmentIcon,
                trailingIconClass: E.attachmentIcon,
                iconSize: m.WW
            });
            return (0, i.jsxs)('div', {
                className: E.contentContainer,
                children: [
                    e,
                    (0, i.jsx)(d.ZP, {
                        message: n,
                        content: T
                    }),
                    r
                ]
            });
        }, [n, T]);
    return null == v
        ? null
        : (0, i.jsxs)('div', {
              className: E.container,
              children: [
                  (0, i.jsx)(o.Heading, {
                      className: E.header,
                      variant: 'heading-sm/semibold',
                      children: g.intl.string(g.t.iouM3d)
                  }),
                  (0, i.jsx)(o.Scroller, {
                      className: E.messagePreviewContainer,
                      children: (0, i.jsx)(c.Z, {
                          childrenMessageContent: b(),
                          childrenHeader: (0, i.jsx)(f.ZP, {
                              message: n,
                              channel: v,
                              author: r,
                              guildId: v.guild_id
                          }),
                          disableInteraction: !0
                      })
                  })
              ]
          });
};
n.Z = v;
