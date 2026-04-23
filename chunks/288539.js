"use strict";
n.d(t, { A: () => I });
var r = n(627968),
    i = n(64700),
    s = n(607399),
    a = n(311907),
    o = n(442433),
    l = n(793574),
    u = n(688810),
    c = n(9588),
    d = n(332173),
    _ = n(342296),
    f = n(734057),
    p = n(696451),
    h = n(994500),
    E = n(287809),
    m = n(562153),
    g = n(427262);
function A(e) {
    let { userId: t, className: s, children: a } = e,
        l = i.useCallback(() => {
            (0, c.K)({ kind: "user" });
        }, []),
        u = i.useCallback(
            (e) => {
                null != t &&
                    (0, o.L3)(e, async () => {
                        let { default: e } = await n.e("60829").then(n.bind(n, 446828));
                        return (n) => (0, r.jsx)(e, { ...n, userId: t });
                    });
            },
            [t],
        );
    return (0, r.jsx)(d.A, { className: s, onClick: l, onContextMenu: u, children: a });
}
function I(e) {
    let {
            className: t,
            userId: c,
            channelId: I,
            parsedUserId: T,
            content: S,
            inlinePreview: y = !1,
            viewingChannelId: N,
        } = e,
        v = i.useRef(null),
        { analyticsLocations: C } = (0, u.Ay)(l.A.USER_MENTION),
        O = (0, a.bG)([E.default], () => E.default.getUser(c)),
        R = (0, a.bG)([f.A], () => f.A.getChannel(I)),
        b = null != R ? R.getGuildId() : null,
        D =
            y || null == O || null == I || null == R
                ? void 0
                : (e) => {
                      null != b
                          ? (0, o.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e("41927"),
                                    n.e("97262"),
                                    n.e("93103"),
                                    n.e("92493"),
                                    n.e("42128"),
                                    n.e("97278"),
                                    n.e("35313"),
                                    n.e("74372"),
                                    n.e("84841"),
                                    n.e("15690"),
                                ]).then(n.bind(n, 107632));
                                return (t) =>
                                    (0, r.jsx)(e, { ...t, viewingChannelId: N, user: O, channel: R, guildId: b });
                            })
                          : R.isDM() &&
                            (0, o.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e("41927"),
                                    n.e("97262"),
                                    n.e("93103"),
                                    n.e("92493"),
                                    n.e("53635"),
                                    n.e("42128"),
                                    n.e("97278"),
                                    n.e("35313"),
                                    n.e("95834"),
                                    n.e("99011"),
                                    n.e("74372"),
                                    n.e("39778"),
                                    n.e("58369"),
                                ]).then(n.bind(n, 385913));
                                return (t) => (0, r.jsx)(e, { ...t, user: O, channel: R, targetIsUser: !0 });
                            });
                  },
        L = g.Ay.useName(O),
        w = (0, a.bG)([f.A, p.Ay, h.A], () => m.Ay.getNickname(b, I, O));
    if (null == O) return (0, r.jsx)(A, { userId: T, className: t, children: S });
    let M = (e) => (0, r.jsx)(d.A, { ref: v, className: t, onContextMenu: D, ...e, children: `@${w ?? L}` });
    return y
        ? (0, r.jsx)(u.f5, { value: C, children: M() })
        : (0, r.jsx)(u.f5, {
              value: C,
              children: (0, r.jsx)(_.A, {
                  targetElementRef: v,
                  user: O,
                  guildId: b ?? void 0,
                  channelId: I,
                  position: s.Fr ? "top" : "right",
                  clickTrap: !0,
                  children: (e) => M(e),
              }),
          });
}
