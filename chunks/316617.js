n.d(t, { Z: () => g });
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
    p = n(25015),
    x = n(367814),
    b = n(592125),
    _ = n(217702),
    f = n(388032),
    h = n(782544);
let g = (e) => {
    var t;
    let { message: n } = e,
        g = (0, s.ZP)(n),
        v = null != (t = n.getGuildId()) ? t : void 0,
        j = (0, x.Z)(g),
        y = (0, i.e7)([b.Z], () => b.Z.getChannel(n.channel_id)),
        O = l.useMemo(() => (0, o.Z)(n), [n]),
        { content: Z } = (0, p.Z)(O, { hideSimpleEmbedContent: !1 }),
        I = l.useCallback(() => {
            let { leadingIcon: e, trailingIcon: t } = (0, m.f)(n, Z, !1, !1, '', {
                leadingIconClass: h.attachmentIcon,
                trailingIconClass: h.attachmentIcon,
                iconSize: _.WW
            });
            return (0, r.jsxs)('div', {
                className: h.contentContainer,
                children: [
                    e,
                    (0, r.jsx)(d.ZP, {
                        message: n,
                        content: Z
                    }),
                    t
                ]
            });
        }, [n, Z]);
    return null == y
        ? null
        : (0, r.jsxs)('div', {
              className: h.container,
              children: [
                  (0, r.jsx)(a.X6q, {
                      className: h.header,
                      variant: 'heading-sm/semibold',
                      children: f.intl.string(f.t.iouM3d)
                  }),
                  (0, r.jsx)(a.Ttm, {
                      className: h.messagePreviewContainer,
                      children: (0, r.jsx)(c.Z, {
                          childrenMessageContent: I(),
                          childrenHeader: (0, r.jsx)(u.ZP, {
                              message: n,
                              channel: y,
                              author: g,
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
