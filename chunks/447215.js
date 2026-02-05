i.d(t, { P: () => E });
var n = i(627968),
    l = i(64700),
    a = i(349288),
    r = i(473193),
    o = i(397927),
    s = i(793574),
    u = i(688810),
    d = i(609425),
    c = i(922301),
    h = i(750112),
    m = i(73392),
    p = i(676608),
    g = i(342296),
    A = i(734057),
    f = i(841549),
    T = i(560936);
function E(e) {
    let {
            user: t,
            channelId: i,
            guildId: E,
            messageId: I,
            stopPropagation: x = !1,
            ariaLabel: N,
            enableDisplayNameStyles: v = !1,
        } = e,
        R = l.useRef(null),
        { analyticsLocations: j } = (0, u.Ay)(s.A.USERNAME),
        S = (0, p.Ay)(E, t?.id),
        b = (0, d.A)({ userId: t?.id, guildId: E }),
        C = (0, m.a)({ displayNameStyles: b }),
        y = l.useCallback(
            (e) => {
                let n = A.A.getChannel(i);
                null != n && null != t && (0, f.wQ)(e, t, n);
            },
            [t, i],
        ),
        _ = l.useContext(r.C);
    return (
        (0, T.A)({ subscribeToGroupId: I, authorId: t?.id, shouldSubscribe: v && null != b && null == E }),
        l.useCallback(
            (e) => (l, r) => {
                let s = e?.colorStrings,
                    d = S && null != s && null != s.primaryColor && null != s.secondaryColor,
                    m = (t, i) => {
                        if (!v || null == b || null != E)
                            return (0, n.jsx)(o.V30, {
                                ...(null != t ? t : {}),
                                ref: R,
                                onContextMenu: y,
                                name: (0, o.Oer)(l) ?? "",
                                colorString: e?.colorString ?? null,
                                roleName: e?.colorRoleName,
                                colorStrings: d ? s : null,
                                "aria-label": N,
                                className: C,
                            });
                        {
                            let e = _?.animate || i?.isShown ? c.G.ANIMATED : c.G.PLAIN;
                            return (0, n.jsx)(a.Anchor, {
                                ...(null != t ? t : {}),
                                ref: R,
                                onContextMenu: y,
                                "aria-label": N,
                                children: (0, n.jsx)(h.A, {
                                    userName: (0, o.Oer)(l) ?? "",
                                    displayNameStyles: b,
                                    effectDisplayType: e,
                                    shouldUnderlineOnHover: !0,
                                    loop: !0,
                                }),
                            });
                        }
                    };
                return (0, n.jsx)(
                    u.f5,
                    {
                        value: j,
                        children:
                            null != t
                                ? (0, n.jsx)(g.A, {
                                      targetElementRef: R,
                                      user: t,
                                      guildId: E,
                                      channelId: i,
                                      messageId: I,
                                      roleId: e?.colorRoleId,
                                      clickTrap: !0,
                                      children: (e, t) => {
                                          let { onClick: i, ...n } = e;
                                          return m(
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
                                : m(void 0, void 0),
                    },
                    r,
                );
            },
            [j, t, i, E, I, y, x, N, S, C, _?.animate, b, v],
        )
    );
}
