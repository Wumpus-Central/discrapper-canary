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
    x = n(25015),
    p = n(367814),
    f = n(592125),
    b = n(217702),
    h = n(388032),
    _ = n(782544);
let g = (e) => {
    var t;
    let { message: n } = e,
        g = (0, s.ZP)(n),
        v = null != (t = n.getGuildId()) ? t : void 0,
        j = (0, p.Z)(g),
        N = (0, i.e7)([f.Z], () => f.Z.getChannel(n.channel_id)),
        y = l.useMemo(() => (0, o.Z)(n), [n]),
        { content: O } = (0, x.Z)(y, { hideSimpleEmbedContent: !1 }),
        Z = l.useCallback(() => {
            let { leadingIcon: e, trailingIcon: t } = (0, m.f)(n, O, !1, !1, '', {
                leadingIconClass: _.attachmentIcon,
                trailingIconClass: _.attachmentIcon,
                iconSize: b.WW
            });
            return (0, r.jsxs)('div', {
                className: _.contentContainer,
                children: [
                    e,
                    (0, r.jsx)(d.ZP, {
                        message: n,
                        content: O
                    }),
                    t
                ]
            });
        }, [n, O]);
    return null == N
        ? null
        : (0, r.jsxs)('div', {
              className: _.container,
              children: [
                  (0, r.jsx)(a.X6q, {
                      className: _.header,
                      variant: 'heading-sm/semibold',
                      children: h.NW.string(h.t.iouM3d)
                  }),
                  (0, r.jsx)(a.Ttm, {
                      className: _.messagePreviewContainer,
                      children: (0, r.jsx)(c.Z, {
                          childrenMessageContent: Z(),
                          childrenHeader: (0, r.jsx)(u.ZP, {
                              message: n,
                              channel: N,
                              author: g,
                              guildId: N.guild_id
                          }),
                          disableInteraction: !0,
                          authorHasGradientRole: j,
                          guildId: v
                      })
                  })
              ]
          });
};
