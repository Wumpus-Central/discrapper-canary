"use strict";
n.d(t, { A: () => I });
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
    p = n(696451),
    h = n(994500),
    m = n(287809),
    g = n(562153),
    E = n(427262);
function A(e) {
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
function I(e) {
    let {
            className: t,
            userId: c,
            channelId: I,
            parsedUserId: T,
            content: y,
            inlinePreview: S = !1,
            viewingChannelId: v,
        } = e,
        C = i.useRef(null),
        { analyticsLocations: b } = (0, u.Ay)(l.A.USER_MENTION),
        N = (0, s.bG)([m.default], () => m.default.getUser(c)),
        R = (0, s.bG)([f.A], () => f.A.getChannel(I)),
        O = null != R ? R.getGuildId() : null,
        D =
            S || null == N || null == O || null == I
                ? void 0
                : (e) => {
                      null != R &&
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
                                  (0, r.jsx)(e, { ...t, viewingChannelId: v, user: N, channel: R, guildId: O });
                          });
                  },
        L = E.Ay.useName(N),
        w = (0, s.bG)([f.A, p.Ay, h.A], () => g.Ay.getNickname(O, I, N));
    if (null == N) return (0, r.jsx)(A, { userId: T, className: t, children: y });
    let x = (e) => (0, r.jsx)(d.A, { ref: C, className: t, onContextMenu: D, ...e, children: `@${w ?? L}` });
    return S
        ? (0, r.jsx)(u.f5, { value: b, children: x() })
        : (0, r.jsx)(u.f5, {
              value: b,
              children: (0, r.jsx)(_.A, {
                  targetElementRef: C,
                  user: N,
                  guildId: O ?? void 0,
                  channelId: I,
                  position: a.Fr ? "top" : "right",
                  clickTrap: !0,
                  children: (e) => x(e),
              }),
          });
}
