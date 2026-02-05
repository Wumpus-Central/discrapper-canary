n.d(t, { A: () => b });
var l = n(627968),
    a = n(64700),
    i = n(311907),
    r = n(397927),
    s = n(387408),
    d = n(763754),
    o = n(491182),
    u = n(291812),
    c = n(643204),
    m = n(448368),
    _ = n(538355),
    x = n(253932),
    g = n(734057),
    h = n(838541),
    p = n(985018),
    A = n(205435);
let b = (e) => {
    let { message: t } = e,
        n = (0, d.Ay)(t),
        b = (0, i.bG)([g.A], () => g.A.getChannel(t.channel_id)),
        v = a.useMemo(() => (0, s.A)(t), [t]),
        { content: f } = (0, _.A)(v, { hideSimpleEmbedContent: !1 }),
        j = x.hH.useSetting(),
        T = a.useCallback(() => {
            let { leadingIcon: e, trailingIcon: n } = (0, m.o)(t, f, !1, !1, "", {
                leadingIconClass: A.$r,
                trailingIconClass: A.$r,
                iconSize: h.eJ,
            });
            return (0, l.jsxs)("div", {
                className: A.hQ,
                children: [e, (0, l.jsx)(u.Ay, { message: t, content: f, compact: j }), n],
            });
        }, [t, f, j]);
    return null == b
        ? null
        : (0, l.jsxs)("div", {
              className: A.kL,
              children: [
                  (0, l.jsx)(r.Heading, {
                      className: A.wx,
                      variant: "heading-sm/semibold",
                      children: p.intl.string(p.t.iouM3a),
                  }),
                  (0, l.jsx)(r.HOs, {
                      className: A.PI,
                      children: (0, l.jsx)(o.A, {
                          childrenMessageContent: T(),
                          childrenHeader: (0, l.jsx)(c.Ay, { message: t, channel: b, author: n, guildId: b.guild_id }),
                          disableInteraction: !0,
                          author: n,
                      }),
                  }),
              ],
          });
};
