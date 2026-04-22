"use strict";
n.d(t, { A: () => x });
var a = n(627968),
    i = n(64700),
    r = n(311907),
    l = n(534514),
    s = n(573613),
    d = n(387408),
    o = n(763754),
    c = n(491182),
    u = n(291812),
    _ = n(643204),
    m = n(448368),
    p = n(538355),
    h = n(253932),
    g = n(734057),
    f = n(838541),
    b = n(985018),
    A = n(121940);
let x = (e) => {
    let { message: t } = e,
        n = (0, o.Ay)(t),
        x = (0, r.bG)([g.A], () => g.A.getChannel(t.channel_id)),
        v = i.useMemo(() => (0, d.A)(t), [t]),
        { content: E } = (0, p.A)(v, { hideSimpleEmbedContent: !1 }),
        I = h.hH.useSetting(),
        T = i.useCallback(() => {
            let { leadingIcon: e, trailingIcon: n } = (0, m.o)(t, E, !1, !1, "", {
                leadingIconClass: A.$r,
                trailingIconClass: A.$r,
                iconSize: f.eJ,
            });
            return (0, a.jsxs)("div", {
                className: A.hQ,
                children: [e, (0, a.jsx)(u.Ay, { message: t, content: E, compact: I }), n],
            });
        }, [t, E, I]);
    return null == x
        ? null
        : (0, a.jsxs)("div", {
              className: A.kL,
              children: [
                  (0, a.jsx)(l.D, {
                      className: A.wx,
                      variant: "heading-sm/semibold",
                      children: b.intl.string(b.t.iouM3a),
                  }),
                  (0, a.jsx)(s.Ip, {
                      className: A.PI,
                      children: (0, a.jsx)(c.A, {
                          childrenMessageContent: T(),
                          childrenHeader: (0, a.jsx)(_.Ay, { message: t, channel: x, author: n, guildId: x.guild_id }),
                          disableInteraction: !0,
                          author: n,
                      }),
                  }),
              ],
          });
};
