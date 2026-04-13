i.d(t, { P: () => T });
var n = i(627968),
    a = i(64700),
    l = i(349288),
    o = i(473193),
    r = i(397927),
    s = i(793574),
    c = i(688810),
    d = i(609425),
    u = i(922301),
    h = i(750112),
    m = i(73392),
    p = i(676608),
    g = i(342296),
    f = i(734057),
    _ = i(841549),
    A = i(560936);
function T(e) {
    let {
            user: t,
            channelId: i,
            guildId: T,
            messageId: b,
            stopPropagation: E = !1,
            ariaLabel: x,
            enableDisplayNameStyles: I = !1,
        } = e,
        N = a.useRef(null),
        { analyticsLocations: j } = (0, c.Ay)(s.A.USERNAME),
        R = (0, p.Ay)(T, t?.id),
        v = (0, d.A)({ userId: t?.id, guildId: T }),
        C = (0, m.a)({ displayNameStyles: v }),
        S = a.useCallback(
            (e) => {
                let n = f.A.getChannel(i);
                null != n && null != t && (0, _.wQ)(e, t, n);
            },
            [t, i],
        ),
        y = a.useContext(o.C);
    return (
        (0, A.A)({ subscribeToGroupId: b, authorId: t?.id, shouldSubscribe: I && null != v && null == T }),
        a.useCallback(
            (e) => (a, o) => {
                let s = e?.colorStrings,
                    d = R && null != s && null != s.primaryColor && null != s.secondaryColor,
                    m = (t, i) => {
                        if (!I || null == v || null != T)
                            return (0, n.jsx)(r.V30, {
                                ...(null != t ? t : {}),
                                ref: N,
                                onContextMenu: S,
                                name: (0, r.Oer)(a) ?? "",
                                colorString: e?.colorString ?? null,
                                roleName: e?.colorRoleName,
                                colorStrings: d ? s : null,
                                "aria-label": x,
                                className: C,
                            });
                        {
                            let e = y?.animate || i?.isShown ? u.G.ANIMATED : u.G.PLAIN;
                            return (0, n.jsx)(l.Anchor, {
                                ...(null != t ? t : {}),
                                ref: N,
                                onContextMenu: S,
                                "aria-label": x,
                                children: (0, n.jsx)(h.A, {
                                    userName: (0, r.Oer)(a) ?? "",
                                    displayNameStyles: v,
                                    effectDisplayType: e,
                                    shouldUnderlineOnHover: !0,
                                    loop: !0,
                                }),
                            });
                        }
                    };
                return (0, n.jsx)(
                    c.f5,
                    {
                        value: j,
                        children:
                            null != t
                                ? (0, n.jsx)(g.default, {
                                      targetElementRef: N,
                                      user: t,
                                      guildId: T,
                                      channelId: i,
                                      messageId: b,
                                      roleId: e?.colorRoleId,
                                      clickTrap: !0,
                                      children: (e, t) => {
                                          let { onClick: i, ...n } = e;
                                          return m(
                                              {
                                                  onClick: (e) => {
                                                      E && null != e && e.stopPropagation(), i(e);
                                                  },
                                                  ...n,
                                              },
                                              t,
                                          );
                                      },
                                  })
                                : m(void 0, void 0),
                    },
                    o,
                );
            },
            [j, t, i, T, b, S, E, x, R, C, y?.animate, v, I],
        )
    );
}
