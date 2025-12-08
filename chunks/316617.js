n.d(t, { Z: () => f });
var r = n(54381),
    l = n(473749),
    i = n(442837),
    a = n(481060),
    s = n(39154),
    o = n(739566),
    d = n(492593),
    c = n(930282),
    u = n(464891),
    m = n(267128),
    p = n(25015),
    g = n(695346),
    _ = n(592125),
    x = n(217702),
    h = n(388032),
    b = n(492402);
let f = (e) => {
    let { message: t } = e,
        n = (0, o.ZP)(t),
        f = (0, i.e7)([_.Z], () => _.Z.getChannel(t.channel_id)),
        v = l.useMemo(() => (0, s.Z)(t), [t]),
        { content: j } = (0, p.Z)(v, { hideSimpleEmbedContent: !1 }),
        y = g.jU.useSetting(),
        Z = l.useCallback(() => {
            let { leadingIcon: e, trailingIcon: n } = (0, m.f)(t, j, !1, !1, "", {
                leadingIconClass: b.attachmentIcon,
                trailingIconClass: b.attachmentIcon,
                iconSize: x.WW,
            });
            return (0, r.jsxs)("div", {
                className: b.contentContainer,
                children: [
                    e,
                    (0, r.jsx)(c.ZP, {
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
              className: b.container,
              children: [
                  (0, r.jsx)(a.Heading, {
                      className: b.header,
                      variant: "heading-sm/semibold",
                      children: h.intl.string(h.t.iouM3a),
                  }),
                  (0, r.jsx)(a.Ttm, {
                      className: b.messagePreviewContainer,
                      children: (0, r.jsx)(d.Z, {
                          childrenMessageContent: Z(),
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
