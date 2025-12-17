n.d(t, { Z: () => v });
var r = n(54381),
    l = n(473749),
    i = n(442837),
    a = n(481060),
    s = n(39154),
    o = n(739566),
    c = n(492593),
    d = n(930282),
    u = n(464891),
    m = n(267128),
    b = n(25015),
    p = n(695346),
    g = n(592125),
    f = n(217702),
    x = n(388032),
    h = n(642900);
let v = (e) => {
    let { message: t } = e,
        n = (0, o.ZP)(t),
        v = (0, i.e7)([g.Z], () => g.Z.getChannel(t.channel_id)),
        j = l.useMemo(() => (0, s.Z)(t), [t]),
        { content: _ } = (0, b.Z)(j, { hideSimpleEmbedContent: !1 }),
        y = p.jU.useSetting(),
        O = l.useCallback(() => {
            let { leadingIcon: e, trailingIcon: n } = (0, m.f)(t, _, !1, !1, "", {
                leadingIconClass: h.attachmentIcon,
                trailingIconClass: h.attachmentIcon,
                iconSize: f.WW,
            });
            return (0, r.jsxs)("div", {
                className: h.contentContainer,
                children: [
                    e,
                    (0, r.jsx)(d.ZP, {
                        message: t,
                        content: _,
                        compact: y,
                    }),
                    n,
                ],
            });
        }, [t, _, y]);
    return null == v
        ? null
        : (0, r.jsxs)("div", {
              className: h.container,
              children: [
                  (0, r.jsx)(a.Heading, {
                      className: h.header,
                      variant: "heading-sm/semibold",
                      children: x.intl.string(x.t.iouM3a),
                  }),
                  (0, r.jsx)(a.Ttm, {
                      className: h.messagePreviewContainer,
                      children: (0, r.jsx)(c.Z, {
                          childrenMessageContent: O(),
                          childrenHeader: (0, r.jsx)(u.ZP, {
                              message: t,
                              channel: v,
                              author: n,
                              guildId: v.guild_id,
                          }),
                          disableInteraction: !0,
                          author: n,
                      }),
                  }),
              ],
          });
};
