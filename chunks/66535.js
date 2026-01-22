n.d(t, { A: () => h });
var l = n(627968),
    r = n(64700),
    a = n(311907),
    i = n(397927),
    s = n(387408),
    o = n(763754),
    c = n(491182),
    d = n(291812),
    u = n(643204),
    m = n(448368),
    b = n(538355),
    p = n(253932),
    x = n(734057),
    g = n(838541),
    f = n(985018),
    v = n(205435);
let h = (e) => {
    let { message: t } = e,
        n = (0, o.Ay)(t),
        h = (0, a.bG)([x.A], () => x.A.getChannel(t.channel_id)),
        j = r.useMemo(() => (0, s.A)(t), [t]),
        { content: _ } = (0, b.A)(j, { hideSimpleEmbedContent: !1 }),
        A = p.hH.useSetting(),
        y = r.useCallback(() => {
            let { leadingIcon: e, trailingIcon: n } = (0, m.o)(t, _, !1, !1, "", {
                leadingIconClass: v.$r,
                trailingIconClass: v.$r,
                iconSize: g.eJ,
            });
            return (0, l.jsxs)("div", {
                className: v.hQ,
                children: [
                    e,
                    (0, l.jsx)(d.Ay, {
                        message: t,
                        content: _,
                        compact: A,
                    }),
                    n,
                ],
            });
        }, [t, _, A]);
    return null == h
        ? null
        : (0, l.jsxs)("div", {
              className: v.kL,
              children: [
                  (0, l.jsx)(i.Heading, {
                      className: v.wx,
                      variant: "heading-sm/semibold",
                      children: f.intl.string(f.t.iouM3a),
                  }),
                  (0, l.jsx)(i.HOs, {
                      className: v.PI,
                      children: (0, l.jsx)(c.A, {
                          childrenMessageContent: y(),
                          childrenHeader: (0, l.jsx)(u.Ay, {
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
