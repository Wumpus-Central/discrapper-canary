n.d(t, { Z: () => f });
var r = n(951288),
    a = n(647438),
    i = n(442837),
    l = n(481060),
    o = n(39154),
    s = n(739566),
    c = n(492593),
    d = n(930282),
    u = n(464891),
    m = n(267128),
    p = n(25015),
    _ = n(695346),
    g = n(592125),
    b = n(217702),
    h = n(388032),
    x = n(492402);
let f = (e) => {
    let { message: t } = e,
        n = (0, s.ZP)(t),
        f = (0, i.e7)([g.Z], () => g.Z.getChannel(t.channel_id)),
        v = a.useMemo(() => (0, o.Z)(t), [t]),
        { content: j } = (0, p.Z)(v, { hideSimpleEmbedContent: !1 }),
        y = _.jU.useSetting(),
        C = a.useCallback(() => {
            let { leadingIcon: e, trailingIcon: n } = (0, m.f)(t, j, !1, !1, "", {
                leadingIconClass: x.attachmentIcon,
                trailingIconClass: x.attachmentIcon,
                iconSize: b.WW,
            });
            return (0, r.jsxs)("div", {
                className: x.contentContainer,
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
    return null == f
        ? null
        : (0, r.jsxs)("div", {
              className: x.container,
              children: [
                  (0, r.jsx)(l.X6q, {
                      className: x.header,
                      variant: "heading-sm/semibold",
                      children: h.intl.string(h.t.iouM3d),
                  }),
                  (0, r.jsx)(l.Ttm, {
                      className: x.messagePreviewContainer,
                      children: (0, r.jsx)(c.Z, {
                          childrenMessageContent: C(),
                          childrenHeader: (0, r.jsx)(u.ZP, {
                              message: t,
                              channel: f,
                              author: n,
                              guildId: f.guild_id,
                          }),
                          disableInteraction: !0,
                          author: n,
                      }),
                  }),
              ],
          });
};
