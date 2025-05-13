n.d(t, { Z: () => j });
var r = n(255367),
    l = n(73800),
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
    _ = n(695346),
    f = n(592125),
    h = n(217702),
    g = n(388032),
    v = n(782544);
let j = (e) => {
    let { message: t } = e,
        n = (0, c.ZP)(t),
        j = (0, s.k)(t),
        y = (0, b.Z)(n),
        O = (0, i.e7)([f.Z], () => f.Z.getChannel(t.channel_id)),
        Z = l.useMemo(() => (0, o.Z)(t), [t]),
        { content: I } = (0, x.Z)(Z, { hideSimpleEmbedContent: !1 }),
        C = _.jU.useSetting(),
        N = l.useCallback(() => {
            let { leadingIcon: e, trailingIcon: n } = (0, p.f)(t, I, !1, !1, '', {
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
                        content: I,
                        compact: C
                    }),
                    n
                ]
            });
        }, [t, I, C]);
    return null == O
        ? null
        : (0, r.jsxs)('div', {
              className: v.container,
              children: [
                  (0, r.jsx)(a.X6q, {
                      className: v.header,
                      variant: 'heading-sm/semibold',
                      children: g.intl.string(g.t.iouM3d)
                  }),
                  (0, r.jsx)(a.Ttm, {
                      className: v.messagePreviewContainer,
                      children: (0, r.jsx)(d.Z, {
                          childrenMessageContent: N(),
                          childrenHeader: (0, r.jsx)(m.ZP, {
                              message: t,
                              channel: O,
                              author: n,
                              guildId: O.guild_id
                          }),
                          disableInteraction: !0,
                          authorHasGradientRole: y,
                          guildId: j
                      })
                  })
              ]
          });
};
