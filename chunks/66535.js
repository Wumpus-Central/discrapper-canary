n.d(t, { A: () => v });
var l = n(627968),
    a = n(64700),
    i = n(311907),
    r = n(534514),
    s = n(573613),
    d = n(387408),
    o = n(763754),
    c = n(491182),
    u = n(291812),
    _ = n(643204),
    m = n(448368),
    h = n(538355),
    g = n(253932),
    p = n(734057),
    x = n(838541),
    A = n(985018),
    f = n(121940);
let v = (e) => {
    let { message: t } = e,
        n = (0, o.Ay)(t),
        v = (0, i.bG)([p.A], () => p.A.getChannel(t.channel_id)),
        b = a.useMemo(() => (0, d.A)(t), [t]),
        { content: N } = (0, h.A)(b, { hideSimpleEmbedContent: !1 }),
        E = g.hH.useSetting(),
        S = a.useCallback(() => {
            let { leadingIcon: e, trailingIcon: n } = (0, m.o)(t, N, !1, !1, "", {
                leadingIconClass: f.$r,
                trailingIconClass: f.$r,
                iconSize: x.eJ,
            });
            return (0, l.jsxs)("div", {
                className: f.hQ,
                children: [e, (0, l.jsx)(u.Ay, { message: t, content: N, compact: E }), n],
            });
        }, [t, N, E]);
    return null == v
        ? null
        : (0, l.jsxs)("div", {
              className: f.kL,
              children: [
                  (0, l.jsx)(r.D, {
                      className: f.wx,
                      variant: "heading-sm/semibold",
                      children: A.intl.string(A.t.iouM3a),
                  }),
                  (0, l.jsx)(s.Ip, {
                      className: f.PI,
                      children: (0, l.jsx)(c.A, {
                          childrenMessageContent: S(),
                          childrenHeader: (0, l.jsx)(_.Ay, { message: t, channel: v, author: n, guildId: v.guild_id }),
                          disableInteraction: !0,
                          author: n,
                      }),
                  }),
              ],
          });
};
