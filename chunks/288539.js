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
    h = n(696451),
    p = n(994500),
    m = n(287809),
    E = n(562153),
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
            viewingChannelId: v,
        } = e,
        C = i.useRef(null),
        { analyticsLocations: N } = (0, u.Ay)(l.A.USER_MENTION),
        R = (0, a.bG)([m.default], () => m.default.getUser(c)),
        b = (0, a.bG)([f.A], () => f.A.getChannel(I)),
        O = null != b ? b.getGuildId() : null,
        D =
            y || null == R || null == I || null == b
                ? void 0
                : (e) => {
                      null != O
                          ? (0, o.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e("41927"),
                                    n.e("97262"),
                                    n.e("3795"),
                                    n.e("42128"),
                                    n.e("61474"),
                                    n.e("84841"),
                                    n.e("64764"),
                                ]).then(n.bind(n, 107632));
                                return (t) =>
                                    (0, r.jsx)(e, { ...t, viewingChannelId: v, user: R, channel: b, guildId: O });
                            })
                          : b.isDM() &&
                            (0, o.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e("41927"),
                                    n.e("97262"),
                                    n.e("3795"),
                                    n.e("42128"),
                                    n.e("61474"),
                                    n.e("39778"),
                                    n.e("69491"),
                                ]).then(n.bind(n, 385913));
                                return (t) => (0, r.jsx)(e, { ...t, user: R, channel: b, targetIsUser: !0 });
                            });
                  },
        L = g.Ay.useName(R),
        w = (0, a.bG)([f.A, h.Ay, p.A], () => E.Ay.getNickname(O, I, R));
    if (null == R) return (0, r.jsx)(A, { userId: T, className: t, children: S });
    let M = (e) => (0, r.jsx)(d.A, { ref: C, className: t, onContextMenu: D, ...e, children: `@${w ?? L}` });
    return y
        ? (0, r.jsx)(u.f5, { value: N, children: M() })
        : (0, r.jsx)(u.f5, {
              value: N,
              children: (0, r.jsx)(_.default, {
                  targetElementRef: C,
                  user: R,
                  guildId: O ?? void 0,
                  channelId: I,
                  position: s.Fr ? "top" : "right",
                  clickTrap: !0,
                  children: (e) => M(e),
              }),
          });
}
