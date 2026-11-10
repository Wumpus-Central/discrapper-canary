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
    E = r(562153),
    g = r(427262);
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
                    inlinePreview: m = !1,
                    viewingChannelId: R,
                } = e,
                L = o.useRef(null),
                { analyticsLocations: I } = (0, u.Ay)(i.A.USER_MENTION),
                _ = (0, a.bG)([f.default], () => f.default.getUser(r)),
                k = (0, a.bG)([y.A], () => y.A.getChannel(c)),
                C = null != k ? k.getGuildId() : null,
                U = (0, A.A)({ userId: r, channelId: c, viewingChannelId: R }),
                b = m ? void 0 : U,
                x = g.Ay.useName(_),
                M = (0, a.bG)([y.A, h.Ay, p.A], () => E.Ay.getNickname(C, c, _));
            if (null == _) return (0, t.jsx)(S, { userId: T, className: n, children: v });
            function N(e) {
                return (0, t.jsx)(s.A, { ref: L, className: n, onContextMenu: b, ...e, children: `@${M ?? x}` });
            }
            return m
                ? (0, t.jsx)(u.f5, { value: I, children: N() })
                : (0, t.jsx)(u.f5, {
                      value: I,
                      children: (0, t.jsx)(d.A, {
                          targetElementRef: L,
                          user: _,
                          guildId: C ?? void 0,
                          channelId: c,
                          position: l.Fr ? "top" : "right",
                          clickTrap: !0,
                          children: (e) => N(e),
                      }),
                  });
        },
    },
);
