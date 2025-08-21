n.d(t, { Z: () => h });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    o = n(39154),
    s = n(739566),
    c = n(492593),
    d = n(930282),
    u = n(464891),
    m = n(267128),
    _ = n(25015),
    p = n(695346),
    x = n(592125),
    g = n(217702),
    f = n(388032),
    b = n(492402);
let h = (e) => {
    let { message: t } = e,
        n = (0, s.ZP)(t),
        h = (0, l.e7)([x.Z], () => x.Z.getChannel(t.channel_id)),
        v = i.useMemo(() => (0, o.Z)(t), [t]),
        { content: j } = (0, _.Z)(v, { hideSimpleEmbedContent: !1 }),
        y = p.jU.useSetting(),
        O = i.useCallback(() => {
            let { leadingIcon: e, trailingIcon: n } = (0, m.f)(t, j, !1, !1, "", {
                leadingIconClass: b.attachmentIcon,
                trailingIconClass: b.attachmentIcon,
                iconSize: g.WW,
            });
            return (0, r.jsxs)("div", {
                className: b.contentContainer,
                children: [
                    e,
                    (0, r.jsx)(d.ZP, {
                        message: t,
                        content: j,
                        compact: y,
                    }),
                    n,
                ],
            });
        }, [t, j, y]);
    return null == h
        ? null
        : (0, r.jsxs)("div", {
              className: b.container,
              children: [
                  (0, r.jsx)(a.X6q, {
                      className: b.header,
                      variant: "heading-sm/semibold",
                      children: f.intl.string(f.t.iouM3d),
                  }),
                  (0, r.jsx)(a.Ttm, {
                      className: b.messagePreviewContainer,
                      children: (0, r.jsx)(c.Z, {
                          childrenMessageContent: O(),
                          childrenHeader: (0, r.jsx)(u.ZP, {
                              message: t,
                              channel: h,
                              author: n,
                              guildId: h.guild_id,
                          }),
                          disableInteraction: !0,
                          author: n,
                      }),
                  }),
              ],
          });
};
