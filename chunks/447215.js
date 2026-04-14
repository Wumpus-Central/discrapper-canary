i.d(t, { P: () => E });
var n = i(627968),
    l = i(64700),
    a = i(349288),
    s = i(473193),
    r = i(397927),
    o = i(793574),
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
            messageId: x,
            stopPropagation: I = !1,
            ariaLabel: N,
            enableDisplayNameStyles: v = !1,
        } = e,
        j = l.useRef(null),
        { analyticsLocations: R } = (0, u.Ay)(o.A.USERNAME),
        S = (0, p.Ay)(E, t?.id),
        C = (0, d.A)({ userId: t?.id, guildId: E }),
        b = (0, m.a)({ displayNameStyles: C }),
        y = l.useCallback(
            (e) => {
                let n = A.A.getChannel(i);
                null != n && null != t && (0, f.wQ)(e, t, n);
            },
            [t, i],
        ),
        _ = l.useContext(s.C);
    return (
        (0, T.A)({ subscribeToGroupId: x, authorId: t?.id, shouldSubscribe: v && null != C && null == E }),
        l.useCallback(
            (e) => (l, s) => {
                let o = e?.colorStrings,
                    d = S && null != o && null != o.primaryColor && null != o.secondaryColor,
                    m = (t, i) => {
                        if (!v || null == C || null != E)
                            return (0, n.jsx)(r.V30, {
                                ...(null != t ? t : {}),
                                ref: j,
                                onContextMenu: y,
                                name: (0, r.Oer)(l) ?? "",
                                colorString: e?.colorString ?? null,
                                roleName: e?.colorRoleName,
                                colorStrings: d ? o : null,
                                "aria-label": N,
                                className: b,
                            });
                        {
                            let e = _?.animate || i?.isShown ? c.G.ANIMATED : c.G.PLAIN;
                            return (0, n.jsx)(a.Anchor, {
                                ...(null != t ? t : {}),
                                ref: j,
                                onContextMenu: y,
                                "aria-label": N,
                                children: (0, n.jsx)(h.A, {
                                    userName: (0, r.Oer)(l) ?? "",
                                    displayNameStyles: C,
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
                        value: R,
                        children:
                            null != t
                                ? (0, n.jsx)(g.default, {
                                      targetElementRef: j,
                                      user: t,
                                      guildId: E,
                                      channelId: i,
                                      messageId: x,
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
                    s,
                );
            },
            [R, t, i, E, x, y, I, N, S, b, _?.animate, C, v],
        )
    );
}
