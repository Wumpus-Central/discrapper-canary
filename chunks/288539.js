"use strict";
n.d(t, { A: () => T });
var r = n(627968),
    i = n(64700),
    a = n(607399),
    s = n(311907),
    o = n(442433),
    l = n(793574),
    u = n(688810),
    c = n(9588),
    d = n(332173),
    _ = n(342296),
    f = n(734057),
    h = n(696451),
    p = n(994500),
    g = n(287809),
    E = n(562153),
    A = n(427262);
function I(e) {
    let { userId: t, className: a, children: s } = e,
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
    return (0, r.jsx)(d.A, { className: a, onClick: l, onContextMenu: u, children: s });
}
function T(e) {
    let {
            className: t,
            userId: c,
            channelId: T,
            parsedUserId: y,
            content: S,
            inlinePreview: v = !1,
            viewingChannelId: C,
        } = e,
        b = i.useRef(null),
        { analyticsLocations: N } = (0, u.Ay)(l.A.USER_MENTION),
        R = (0, s.bG)([g.default], () => g.default.getUser(c)),
        O = (0, s.bG)([f.A], () => f.A.getChannel(T)),
        D = null != O ? O.getGuildId() : null,
        L =
            v || null == R || null == D || null == T
                ? void 0
                : (e) => {
                      null != O &&
                          (0, o.L3)(e, async () => {
                              let { default: e } = await Promise.all([
                                  n.e("41927"),
                                  n.e("97262"),
                                  n.e("3795"),
                                  n.e("42128"),
                                  n.e("97283"),
                                  n.e("84841"),
                                  n.e("29347"),
                              ]).then(n.bind(n, 107632));
                              return (t) =>
                                  (0, r.jsx)(e, { ...t, viewingChannelId: C, user: R, channel: O, guildId: D });
                          });
                  },
        w = A.Ay.useName(R),
        x = (0, s.bG)([f.A, h.Ay, p.A], () => E.Ay.getNickname(D, T, R));
    if (null == R) return (0, r.jsx)(I, { userId: y, className: t, children: S });
    let P = (e) => (0, r.jsx)(d.A, { ref: b, className: t, onContextMenu: L, ...e, children: `@${x ?? w}` });
    return v
        ? (0, r.jsx)(u.f5, { value: N, children: P() })
        : (0, r.jsx)(u.f5, {
              value: N,
              children: (0, r.jsx)(_.A, {
                  targetElementRef: b,
                  user: R,
                  guildId: D ?? void 0,
                  channelId: T,
                  position: a.Fr ? "top" : "right",
                  clickTrap: !0,
                  children: (e) => P(e),
              }),
          });
}
