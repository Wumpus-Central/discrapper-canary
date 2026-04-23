i.d(t, { P: () => N });
var n = i(627968),
    l = i(64700),
    a = i(349288),
    s = i(473193),
    o = i(614820),
    r = i(463930),
    u = i(793574),
    d = i(688810),
    c = i(609425),
    h = i(922301),
    m = i(750112),
    p = i(73392),
    g = i(676608),
    A = i(342296),
    f = i(734057),
    E = i(841549),
    T = i(560936);
function N(e) {
    let {
            user: t,
            channelId: i,
            guildId: N,
            messageId: x,
            stopPropagation: I = !1,
            ariaLabel: j,
            enableDisplayNameStyles: v = !1,
        } = e,
        R = l.useRef(null),
        { analyticsLocations: C } = (0, d.Ay)(u.A.USERNAME),
        b = (0, g.Ay)(N, t?.id),
        S = (0, c.A)({ userId: t?.id, guildId: N }),
        y = (0, p.a)({ displayNameStyles: S }),
        O = l.useCallback(
            (e) => {
                let n = f.A.getChannel(i);
                null != n && null != t && (0, E.wQ)(e, t, n);
            },
            [t, i],
        ),
        M = l.useContext(s.C);
    return (
        (0, T.A)({ subscribeToGroupId: x, authorId: t?.id, shouldSubscribe: v && null != S && null == N }),
        l.useCallback(
            (e) => (l, s) => {
                let u = e?.colorStrings,
                    c = b && null != u && null != u.primaryColor && null != u.secondaryColor,
                    p = (t, i) => {
                        if (!v || null == S || null != N)
                            return (0, n.jsx)(r.V, {
                                ...(null != t ? t : {}),
                                ref: R,
                                onContextMenu: O,
                                name: (0, o.O)(l) ?? "",
                                colorString: e?.colorString ?? null,
                                roleName: e?.colorRoleName,
                                colorStrings: c ? u : null,
                                "aria-label": j,
                                className: y,
                            });
                        {
                            let e = M?.animate || i?.isShown ? h.G.ANIMATED : h.G.PLAIN;
                            return (0, n.jsx)(a.Anchor, {
                                ...(null != t ? t : {}),
                                ref: R,
                                onContextMenu: O,
                                "aria-label": j,
                                children: (0, n.jsx)(m.A, {
                                    userName: (0, o.O)(l) ?? "",
                                    displayNameStyles: S,
                                    effectDisplayType: e,
                                    shouldUnderlineOnHover: !0,
                                    loop: !0,
                                }),
                            });
                        }
                    };
                return (0, n.jsx)(
                    d.f5,
                    {
                        value: C,
                        children:
                            null != t
                                ? (0, n.jsx)(A.A, {
                                      targetElementRef: R,
                                      user: t,
                                      guildId: N,
                                      channelId: i,
                                      messageId: x,
                                      roleId: e?.colorRoleId,
                                      clickTrap: !0,
                                      children: (e, t) => {
                                          let { onClick: i, ...n } = e;
                                          return p(
                                              {
                                                  onClick: (e) => {
                                                      I && null != e && e.stopPropagation(), i(e);
                                                  },
                                                  ...n,
                                              },
                                              t,
                                          );
                                      },
                                  })
                                : p(void 0, void 0),
                    },
                    s,
                );
            },
            [C, t, i, N, x, O, I, j, b, y, M?.animate, S, v],
        )
    );
}
