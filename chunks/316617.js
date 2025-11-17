n.d(t, { Z: () => f });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    s = n(39154),
    o = n(739566),
    c = n(492593),
    d = n(930282),
    u = n(464891),
    m = n(267128),
    p = n(25015),
    g = n(695346),
    _ = n(592125),
    h = n(217702),
    b = n(388032),
    x = n(492402);
let f = (e) => {
    let { message: t } = e,
        n = (0, o.ZP)(t),
        f = (0, l.e7)([_.Z], () => _.Z.getChannel(t.channel_id)),
        v = i.useMemo(() => (0, s.Z)(t), [t]),
        { content: j } = (0, p.Z)(v, { hideSimpleEmbedContent: !1 }),
        y = g.jU.useSetting(),
        O = i.useCallback(() => {
            let { leadingIcon: e, trailingIcon: n } = (0, m.f)(t, j, !1, !1, "", {
                leadingIconClass: x.attachmentIcon,
                trailingIconClass: x.attachmentIcon,
                iconSize: h.WW,
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
                  (0, r.jsx)(a.Heading, {
                      className: x.header,
                      variant: "heading-sm/semibold",
                      children: b.intl.string(b.t.iouM3a),
                  }),
                  (0, r.jsx)(a.Ttm, {
                      className: x.messagePreviewContainer,
                      children: (0, r.jsx)(c.Z, {
                          childrenMessageContent: O(),
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
