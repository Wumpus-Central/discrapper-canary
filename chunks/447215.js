n.d(t, { P: () => N });
var l = n(627968),
    i = n(64700),
    a = n(349288),
    r = n(473193),
    o = n(614820),
    s = n(463930),
    u = n(793574),
    c = n(688810),
    d = n(609425),
    m = n(922301),
    h = n(368919),
    g = n(252545),
    p = n(676608),
    f = n(342296),
    A = n(734057),
    I = n(841549),
    x = n(560936);
function N(e) {
    let {
            user: t,
            channelId: n,
            guildId: N,
            messageId: E,
            stopPropagation: j = !1,
            ariaLabel: v,
            enableDisplayNameStyles: T = !1,
            displayInline: b = !1,
        } = e,
        R = i.useRef(null),
        { analyticsLocations: C } = (0, c.Ay)(u.A.USERNAME),
        S = (0, p.Ay)(N, t?.id),
        y = (0, d.A)({ userId: t?.id, guildId: N }),
        O = (0, g.a)({ displayNameStyles: y }),
        L = i.useCallback(
            (e) => {
                let l = A.A.getChannel(n);
                null != l && null != t && (0, I.wQ)(e, t, l);
            },
            [t, n],
        ),
        _ = i.useContext(r.C);
    return (
        (0, x.A)({ subscribeToGroupId: E, authorId: t?.id, shouldSubscribe: T && null != y && null == N }),
        i.useCallback(
            (e) => (i, r) => {
                let u = e?.colorStrings,
                    d = S && null != u && null != u.primaryColor && null != u.secondaryColor,
                    g = (t, n) => {
                        if (!T || null == y || null != N)
                            return (0, l.jsx)(s.V, {
                                ...(null != t ? t : {}),
                                ref: R,
                                onContextMenu: L,
                                name: (0, o.O)(i) ?? "",
                                colorString: e?.colorString ?? null,
                                roleName: e?.colorRoleName,
                                colorStrings: d ? u : null,
                                "aria-label": v,
                                className: O,
                                displayInline: b,
                            });
                        {
                            let e = _?.animate || n?.isShown ? m.G.ANIMATED : m.G.PLAIN;
                            return (0, l.jsx)(a.Anchor, {
                                ...(null != t ? t : {}),
                                ref: R,
                                onContextMenu: L,
                                "aria-label": v,
                                children: (0, l.jsx)(h.A, {
                                    userName: (0, o.O)(i) ?? "",
                                    displayNameStyles: y,
                                    effectDisplayType: e,
                                    shouldUnderlineOnHover: !0,
                                    loop: !0,
                                }),
                            });
                        }
                    };
                return (0, l.jsx)(
                    c.f5,
                    {
                        value: C,
                        children:
                            null != t
                                ? (0, l.jsx)(f.A, {
                                      targetElementRef: R,
                                      user: t,
                                      guildId: N,
                                      channelId: n,
                                      messageId: E,
                                      roleId: e?.colorRoleId,
                                      clickTrap: !0,
                                      children: (e, t) => {
                                          let { onClick: n, ...l } = e;
                                          return g(
                                              {
                                                  onClick: (e) => {
                                                      j && null != e && e.stopPropagation(), n(e);
                                                  },
                                                  ...l,
                                              },
                                              t,
                                          );
                                      },
                                  })
                                : g(void 0, void 0),
                    },
                    r,
                );
            },
            [C, t, n, N, E, L, j, v, S, O, _?.animate, y, T, b],
        )
    );
}
