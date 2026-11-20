var t = r(477900),
    o = r(582128),
    l = r(607399),
    a = r(855986),
    i = r(793574),
    u = r(688810),
    c = r(9588),
    s = r(332173),
    A = r(31797),
    d = r(342296),
    y = r(734057),
    h = r(696451),
    p = r(994500),
    f = r(287809),
    g = r(562153),
    E = r(427262);
function S(e) {
    let { userId: n, className: r, children: l } = e,
        a = o.useCallback(() => {
            (0, c.showInaccessibleLinkModal)({ kind: "user" });
        }, []),
        i = (0, A.A)({ userId: n });
    return (0, t.jsx)(s.A, { className: r, onClick: a, onContextMenu: i, children: l });
}
r.d(
    n,
    {},
    {
        A: function (e) {
            let {
                    className: n,
                    userId: r,
                    channelId: c,
                    parsedUserId: T,
                    content: v,
                    inlinePreview: L = !1,
                    viewingChannelId: m,
                } = e,
                R = o.useRef(null),
                { analyticsLocations: I } = (0, u.Ay)(i.A.USER_MENTION),
                k = (0, a.bG)([f.default], () => f.default.getUser(r)),
                _ = (0, a.bG)([y.A], () => y.A.getChannel(c)),
                U = null != _ ? _.getGuildId() : null,
                C = (0, A.A)({ userId: r, channelId: c, viewingChannelId: m }),
                b = L ? void 0 : C,
                M = E.Ay.useName(k),
                x = (0, a.bG)([y.A, h.Ay, p.A], () => g.Ay.getNickname(U, c, k));
            if (null == k) return (0, t.jsx)(S, { userId: T, className: n, children: v });
            function N(e) {
                return (0, t.jsx)(s.A, { ref: R, className: n, onContextMenu: b, ...e, children: `@${x ?? M}` });
            }
            return L
                ? (0, t.jsx)(u.f5, { value: I, children: N() })
                : (0, t.jsx)(u.f5, {
                      value: I,
                      children: (0, t.jsx)(d.A, {
                          targetElementRef: R,
                          user: k,
                          guildId: U ?? void 0,
                          channelId: c,
                          position: l.Fr ? "top" : "right",
                          clickTrap: !0,
                          children: (e) => N(e),
                      }),
                  });
        },
    },
);
