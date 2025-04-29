n.d(t, { Z: () => g });
var r = n(255367),
    l = n(73800),
    i = n(442837),
    a = n(481060),
    o = n(39154),
    s = n(739566),
    c = n(492593),
    d = n(930282),
    u = n(464891),
    m = n(267128),
    x = n(25015),
    p = n(367814),
    b = n(592125),
    _ = n(217702),
    h = n(388032),
    f = n(782544);
let g = (e) => {
    var t;
    let { message: n } = e,
        g = (0, s.ZP)(n),
        v = null != (t = n.getGuildId()) ? t : void 0,
        j = (0, p.Z)(g),
        y = (0, i.e7)([b.Z], () => b.Z.getChannel(n.channel_id)),
        O = l.useMemo(() => (0, o.Z)(n), [n]),
        { content: Z } = (0, x.Z)(O, { hideSimpleEmbedContent: !1 }),
        I = l.useCallback(() => {
            let { leadingIcon: e, trailingIcon: t } = (0, m.f)(n, Z, !1, !1, '', {
                leadingIconClass: f.attachmentIcon,
                trailingIconClass: f.attachmentIcon,
                iconSize: _.WW
            });
            return (0, r.jsxs)('div', {
                className: f.contentContainer,
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
              className: f.container,
              children: [
                  (0, r.jsx)(a.X6q, {
                      className: f.header,
                      variant: 'heading-sm/semibold',
                      children: h.intl.string(h.t.iouM3d)
                  }),
                  (0, r.jsx)(a.Ttm, {
                      className: f.messagePreviewContainer,
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
