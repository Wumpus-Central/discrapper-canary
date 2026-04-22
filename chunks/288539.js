"use strict";
n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    s = n(607399),
    r = n(311907),
    a = n(442433),
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
function A(e) {
    let { userId: t, className: s, children: r } = e,
        o = l.useCallback(() => {
            (0, u.K)({ kind: "user" });
        }, []),
        c = l.useCallback(
            (e) => {
                null != t &&
                    (0, a.L3)(e, async () => {
                        let { default: e } = await n.e("60829").then(n.bind(n, 446828));
                        return (n) => (0, i.jsx)(e, { ...n, userId: t });
                    });
            },
            [t],
        );
    return (0, i.jsx)(d.A, { className: s, onClick: o, onContextMenu: c, children: r });
}
function C(e) {
    let {
            className: t,
            userId: u,
            channelId: C,
            parsedUserId: E,
            content: I,
            inlinePreview: v = !1,
            viewingChannelId: y,
        } = e,
        S = l.useRef(null),
        { analyticsLocations: b } = (0, c.Ay)(o.A.USER_MENTION),
        N = (0, r.bG)([g.default], () => g.default.getUser(u)),
        T = (0, r.bG)([m.A], () => m.A.getChannel(C)),
        j = null != T ? T.getGuildId() : null,
        R =
            v || null == N || null == C || null == T
                ? void 0
                : (e) => {
                      null != j
                          ? (0, a.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e("41927"),
                                    n.e("97262"),
                                    n.e("92493"),
                                    n.e("93103"),
                                    n.e("42128"),
                                    n.e("97278"),
                                    n.e("35313"),
                                    n.e("81653"),
                                    n.e("84841"),
                                    n.e("9091"),
                                ]).then(n.bind(n, 107632));
                                return (t) =>
                                    (0, i.jsx)(e, { ...t, viewingChannelId: y, user: N, channel: T, guildId: j });
                            })
                          : T.isDM() &&
                            (0, a.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e("41927"),
                                    n.e("97262"),
                                    n.e("92493"),
                                    n.e("93103"),
                                    n.e("53635"),
                                    n.e("42128"),
                                    n.e("97278"),
                                    n.e("35313"),
                                    n.e("2271"),
                                    n.e("99011"),
                                    n.e("81653"),
                                    n.e("39778"),
                                    n.e("21054"),
                                ]).then(n.bind(n, 385913));
                                return (t) => (0, i.jsx)(e, { ...t, user: N, channel: T, targetIsUser: !0 });
                            });
                  },
        w = x.Ay.useName(N),
        L = (0, r.bG)([m.A, p.Ay, f.A], () => _.Ay.getNickname(j, C, N));
    if (null == N) return (0, i.jsx)(A, { userId: E, className: t, children: I });
    let M = (e) => (0, i.jsx)(d.A, { ref: S, className: t, onContextMenu: R, ...e, children: `@${L ?? w}` });
    return v
        ? (0, i.jsx)(c.f5, { value: b, children: M() })
        : (0, i.jsx)(c.f5, {
              value: b,
              children: (0, i.jsx)(h.A, {
                  targetElementRef: S,
                  user: N,
                  guildId: j ?? void 0,
                  channelId: C,
                  position: s.Fr ? "top" : "right",
                  clickTrap: !0,
                  children: (e) => M(e),
              }),
          });
}
