i.d(t, { P: () => I });
var n = i(627968),
    l = i(64700),
    a = i(349288),
    r = i(473193),
    s = i(614820),
    o = i(463930),
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
function I(e) {
    let {
            user: t,
            channelId: i,
            guildId: I,
            messageId: N,
            stopPropagation: x = !1,
            ariaLabel: v,
            enableDisplayNameStyles: j = !1,
        } = e,
        R = l.useRef(null),
        { analyticsLocations: S } = (0, d.Ay)(u.A.USERNAME),
        C = (0, g.Ay)(I, t?.id),
        b = (0, c.A)({ userId: t?.id, guildId: I }),
        y = (0, p.a)({ displayNameStyles: b }),
        _ = l.useCallback(
            (e) => {
                let n = f.A.getChannel(i);
                null != n && null != t && (0, E.wQ)(e, t, n);
            },
            [t, i],
        ),
        O = l.useContext(r.C);
    return (
        (0, T.A)({ subscribeToGroupId: N, authorId: t?.id, shouldSubscribe: j && null != b && null == I }),
        l.useCallback(
            (e) => (l, r) => {
                let u = e?.colorStrings,
                    c = C && null != u && null != u.primaryColor && null != u.secondaryColor,
                    p = (t, i) => {
                        if (!j || null == b || null != I)
                            return (0, n.jsx)(o.V, {
                                ...(null != t ? t : {}),
                                ref: R,
                                onContextMenu: _,
                                name: (0, s.O)(l) ?? "",
                                colorString: e?.colorString ?? null,
                                roleName: e?.colorRoleName,
                                colorStrings: c ? u : null,
                                "aria-label": v,
                                className: y,
                            });
                        {
                            let e = O?.animate || i?.isShown ? h.G.ANIMATED : h.G.PLAIN;
                            return (0, n.jsx)(a.Anchor, {
                                ...(null != t ? t : {}),
                                ref: R,
                                onContextMenu: _,
                                "aria-label": v,
                                children: (0, n.jsx)(m.A, {
                                    userName: (0, s.O)(l) ?? "",
                                    displayNameStyles: b,
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
                                      targetElementRef: R,
                                      user: t,
                                      guildId: I,
                                      channelId: i,
                                      messageId: N,
                                      roleId: e?.colorRoleId,
                                      clickTrap: !0,
                                      children: (e, t) => {
                                          let { onClick: i, ...n } = e;
                                          return p(
                                              {
                                                  onClick: (e) => {
                                                      x && null != e && e.stopPropagation(), i(e);
                                                  },
                                                  ...n,
                                              },
                                              t,
                                          );
                                      },
                                  })
                                : p(void 0, void 0),
                    },
                    r,
                );
            },
            [S, t, i, I, N, _, x, v, C, y, O?.animate, b, j],
        )
    );
}
