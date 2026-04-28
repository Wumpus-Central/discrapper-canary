"use strict";
n.d(t, { A: () => A });
var l = n(627968),
    i = n(64700),
    s = n(607399),
    a = n(17928),
    r = n(442433),
    o = n(793574),
    c = n(688810),
    u = n(9588),
    d = n(332173),
    h = n(342296),
    m = n(734057),
    p = n(696451),
    f = n(994500),
    g = n(287809),
    _ = n(562153),
    x = n(427262);
function C(e) {
    let { userId: t, className: s, children: a } = e,
        o = i.useCallback(() => {
            (0, u.K)({ kind: "user" });
        }, []),
        c = i.useCallback(
            (e) => {
                null != t &&
                    (0, r.L3)(e, async () => {
                        let { default: e } = await n.e("60829").then(n.bind(n, 446828));
                        return (n) => (0, l.jsx)(e, { ...n, userId: t });
                    });
            },
            [t],
        );
    return (0, l.jsx)(d.A, { className: s, onClick: o, onContextMenu: c, children: a });
}
function A(e) {
    let {
            className: t,
            userId: u,
            channelId: A,
            parsedUserId: E,
            content: I,
            inlinePreview: v = !1,
            viewingChannelId: y,
        } = e,
        b = i.useRef(null),
        { analyticsLocations: S } = (0, c.Ay)(o.A.USER_MENTION),
        N = (0, a.bG)([g.default], () => g.default.getUser(u)),
        j = (0, a.bG)([m.A], () => m.A.getChannel(A)),
        T = null != j ? j.getGuildId() : null,
        w =
            v || null == N || null == A || null == j
                ? void 0
                : (e) => {
                      null != T
                          ? (0, r.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e("62731"),
                                    n.e("97262"),
                                    n.e("93103"),
                                    n.e("88342"),
                                    n.e("35313"),
                                    n.e("24170"),
                                    n.e("84442"),
                                    n.e("24431"),
                                    n.e("78178"),
                                    n.e("92456"),
                                    n.e("78980"),
                                ]).then(n.bind(n, 107632));
                                return (t) =>
                                    (0, l.jsx)(e, { ...t, viewingChannelId: y, user: N, channel: j, guildId: T });
                            })
                          : j.isDM() &&
                            (0, r.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e("62731"),
                                    n.e("97262"),
                                    n.e("93103"),
                                    n.e("88342"),
                                    n.e("35313"),
                                    n.e("24170"),
                                    n.e("84442"),
                                    n.e("35327"),
                                    n.e("99011"),
                                    n.e("24431"),
                                    n.e("39778"),
                                    n.e("13682"),
                                ]).then(n.bind(n, 385913));
                                return (t) => (0, l.jsx)(e, { ...t, user: N, channel: j, targetIsUser: !0 });
                            });
                  },
        R = x.Ay.useName(N),
        L = (0, a.bG)([m.A, p.Ay, f.A], () => _.Ay.getNickname(T, A, N));
    if (null == N) return (0, l.jsx)(C, { userId: E, className: t, children: I });
    let k = (e) => (0, l.jsx)(d.A, { ref: b, className: t, onContextMenu: w, ...e, children: `@${L ?? R}` });
    return v
        ? (0, l.jsx)(c.f5, { value: S, children: k() })
        : (0, l.jsx)(c.f5, {
              value: S,
              children: (0, l.jsx)(h.A, {
                  targetElementRef: b,
                  user: N,
                  guildId: T ?? void 0,
                  channelId: A,
                  position: s.Fr ? "top" : "right",
                  clickTrap: !0,
                  children: (e) => k(e),
              }),
          });
}
