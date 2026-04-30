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
    m = i(252545),
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
            stopPropagation: R = !1,
            ariaLabel: N,
            enableDisplayNameStyles: I = !1,
        } = e,
        j = l.useRef(null),
        { analyticsLocations: b } = (0, d.Ay)(u.A.USERNAME),
        S = (0, g.Ay)(x, t?.id),
        C = (0, c.A)({ userId: t?.id, guildId: x }),
        y = (0, m.a)({ displayNameStyles: C }),
        O = l.useCallback(
            (e) => {
                let n = f.A.getChannel(i);
                null != n && null != t && (0, T.wQ)(e, t, n);
            },
            [t, i],
        ),
        L = l.useContext(a.C);
    return (
        (0, v.A)({ subscribeToGroupId: E, authorId: t?.id, shouldSubscribe: I && null != C && null == x }),
        l.useCallback(
            (e) => (l, a) => {
                let u = e?.colorStrings,
                    c = S && null != u && null != u.primaryColor && null != u.secondaryColor,
                    m = (t, i) => {
                        if (!I || null == C || null != x)
                            return (0, n.jsx)(s.V, {
                                ...(null != t ? t : {}),
                                ref: j,
                                onContextMenu: O,
                                name: (0, r.O)(l) ?? "",
                                colorString: e?.colorString ?? null,
                                roleName: e?.colorRoleName,
                                colorStrings: c ? u : null,
                                "aria-label": N,
                                className: y,
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
                                    displayNameStyles: C,
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
                        value: b,
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
                                                      R && null != e && e.stopPropagation(), i(e);
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
            [b, t, i, x, E, O, R, N, S, y, L?.animate, C, I],
        )
    );
}
