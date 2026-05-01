i.d(t, { P: () => x });
var n = i(627968),
    l = i(64700),
    o = i(349288),
    a = i(473193),
    r = i(614820),
    s = i(463930),
    u = i(793574),
    d = i(688810),
    c = i(609425),
    h = i(922301),
    p = i(368919),
    m = i(73392),
    g = i(676608),
    A = i(342296),
    f = i(734057),
    T = i(841549),
    v = i(560936);
function x(e) {
    let {
            user: t,
            channelId: i,
            guildId: x,
            messageId: E,
            stopPropagation: I = !1,
            ariaLabel: N,
            enableDisplayNameStyles: R = !1,
        } = e,
        j = l.useRef(null),
        { analyticsLocations: S } = (0, d.Ay)(u.A.USERNAME),
        b = (0, g.Ay)(x, t?.id),
        y = (0, c.A)({ userId: t?.id, guildId: x }),
        C = (0, m.a)({ displayNameStyles: y }),
        O = l.useCallback(
            (e) => {
                let n = f.A.getChannel(i);
                null != n && null != t && (0, T.wQ)(e, t, n);
            },
            [t, i],
        ),
        L = l.useContext(a.C);
    return (
        (0, v.A)({ subscribeToGroupId: E, authorId: t?.id, shouldSubscribe: R && null != y && null == x }),
        l.useCallback(
            (e) => (l, a) => {
                let u = e?.colorStrings,
                    c = b && null != u && null != u.primaryColor && null != u.secondaryColor,
                    m = (t, i) => {
                        if (!R || null == y || null != x)
                            return (0, n.jsx)(s.V, {
                                ...(null != t ? t : {}),
                                ref: j,
                                onContextMenu: O,
                                name: (0, r.O)(l) ?? "",
                                colorString: e?.colorString ?? null,
                                roleName: e?.colorRoleName,
                                colorStrings: c ? u : null,
                                "aria-label": N,
                                className: C,
                            });
                        {
                            let e = L?.animate || i?.isShown ? h.G.ANIMATED : h.G.PLAIN;
                            return (0, n.jsx)(o.Anchor, {
                                ...(null != t ? t : {}),
                                ref: j,
                                onContextMenu: O,
                                "aria-label": N,
                                children: (0, n.jsx)(p.A, {
                                    userName: (0, r.O)(l) ?? "",
                                    displayNameStyles: y,
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
                        value: S,
                        children:
                            null != t
                                ? (0, n.jsx)(A.A, {
                                      targetElementRef: j,
                                      user: t,
                                      guildId: x,
                                      channelId: i,
                                      messageId: E,
                                      roleId: e?.colorRoleId,
                                      clickTrap: !0,
                                      children: (e, t) => {
                                          let { onClick: i, ...n } = e;
                                          return m(
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
                                : m(void 0, void 0),
                    },
                    a,
                );
            },
            [S, t, i, x, E, O, I, N, b, C, L?.animate, y, R],
        )
    );
}
