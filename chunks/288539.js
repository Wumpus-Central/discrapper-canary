"use strict";
n.d(t, { A: () => I });
var i = n(627968),
    r = n(64700),
    s = n(607399),
    a = n(17928),
    o = n(442433),
    l = n(793574),
    d = n(688810),
    _ = n(9588),
    u = n(332173),
    c = n(342296),
    E = n(734057),
    h = n(696451),
    m = n(994500),
    f = n(287809),
    g = n(562153),
    p = n(427262);
function A(e) {
    let { userId: t, className: s, children: a } = e,
        l = r.useCallback(() => {
            (0, _.K)({ kind: "user" });
        }, []),
        d = r.useCallback(
            (e) => {
                null != t &&
                    (0, o.L3)(e, async () => {
                        let { default: e } = await n.e("60829").then(n.bind(n, 446828));
                        return (n) => (0, i.jsx)(e, { ...n, userId: t });
                    });
            },
            [t],
        );
    return (0, i.jsx)(u.A, { className: s, onClick: l, onContextMenu: d, children: a });
}
function I(e) {
    let {
            className: t,
            userId: _,
            channelId: I,
            parsedUserId: T,
            content: S,
            inlinePreview: N = !1,
            viewingChannelId: C,
        } = e,
        R = r.useRef(null),
        { analyticsLocations: O } = (0, d.Ay)(l.A.USER_MENTION),
        y = (0, a.bG)([f.default], () => f.default.getUser(_)),
        v = (0, a.bG)([E.A], () => E.A.getChannel(I)),
        D = null != v ? v.getGuildId() : null,
        L =
            N || null == y || null == I || null == v
                ? void 0
                : (e) => {
                      null != D
                          ? (0, o.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e("62731"),
                                    n.e("97262"),
                                    n.e("93103"),
                                    n.e("24170"),
                                    n.e("97278"),
                                    n.e("84442"),
                                    n.e("35313"),
                                    n.e("52338"),
                                    n.e("84841"),
                                    n.e("6058"),
                                ]).then(n.bind(n, 107632));
                                return (t) =>
                                    (0, i.jsx)(e, { ...t, viewingChannelId: C, user: y, channel: v, guildId: D });
                            })
                          : v.isDM() &&
                            (0, o.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e("62731"),
                                    n.e("97262"),
                                    n.e("93103"),
                                    n.e("24170"),
                                    n.e("53635"),
                                    n.e("97278"),
                                    n.e("84442"),
                                    n.e("35313"),
                                    n.e("43768"),
                                    n.e("99011"),
                                    n.e("52338"),
                                    n.e("39778"),
                                    n.e("26310"),
                                ]).then(n.bind(n, 385913));
                                return (t) => (0, i.jsx)(e, { ...t, user: y, channel: v, targetIsUser: !0 });
                            });
                  },
        b = p.Ay.useName(y),
        w = (0, a.bG)([E.A, h.Ay, m.A], () => g.Ay.getNickname(D, I, y));
    if (null == y) return (0, i.jsx)(A, { userId: T, className: t, children: S });
    let P = (e) => (0, i.jsx)(u.A, { ref: R, className: t, onContextMenu: L, ...e, children: `@${w ?? b}` });
    return N
        ? (0, i.jsx)(d.f5, { value: O, children: P() })
        : (0, i.jsx)(d.f5, {
              value: O,
              children: (0, i.jsx)(c.A, {
                  targetElementRef: R,
                  user: y,
                  guildId: D ?? void 0,
                  channelId: I,
                  position: s.Fr ? "top" : "right",
                  clickTrap: !0,
                  children: (e) => P(e),
              }),
          });
}
