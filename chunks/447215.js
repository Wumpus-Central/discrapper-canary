i.d(t, { P: () => v });
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
    m = i(368919),
    p = i(73392),
    g = i(676608),
    A = i(342296),
    f = i(734057),
    x = i(841549),
    j = i(560936);
function v(e) {
    let {
            user: t,
            channelId: i,
            guildId: v,
            messageId: T,
            stopPropagation: E = !1,
            ariaLabel: N,
            enableDisplayNameStyles: I = !1,
        } = e,
        R = l.useRef(null),
        { analyticsLocations: b } = (0, d.Ay)(u.A.USERNAME),
        S = (0, g.Ay)(v, t?.id),
        C = (0, c.A)({ userId: t?.id, guildId: v }),
        y = (0, p.a)({ displayNameStyles: C }),
        M = l.useCallback(
            (e) => {
                let n = f.A.getChannel(i);
                null != n && null != t && (0, x.wQ)(e, t, n);
            },
            [t, i],
        ),
        _ = l.useContext(s.C);
    return (
        (0, j.A)({ subscribeToGroupId: T, authorId: t?.id, shouldSubscribe: I && null != C && null == v }),
        l.useCallback(
            (e) => (l, s) => {
                let u = e?.colorStrings,
                    c = S && null != u && null != u.primaryColor && null != u.secondaryColor,
                    p = (t, i) => {
                        if (!I || null == C || null != v)
                            return (0, n.jsx)(r.V, {
                                ...(null != t ? t : {}),
                                ref: R,
                                onContextMenu: M,
                                name: (0, o.O)(l) ?? "",
                                colorString: e?.colorString ?? null,
                                roleName: e?.colorRoleName,
                                colorStrings: c ? u : null,
                                "aria-label": N,
                                className: y,
                            });
                        {
                            let e = _?.animate || i?.isShown ? h.G.ANIMATED : h.G.PLAIN;
                            return (0, n.jsx)(a.Anchor, {
                                ...(null != t ? t : {}),
                                ref: R,
                                onContextMenu: M,
                                "aria-label": N,
                                children: (0, n.jsx)(m.A, {
                                    userName: (0, o.O)(l) ?? "",
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
                                      targetElementRef: R,
                                      user: t,
                                      guildId: v,
                                      channelId: i,
                                      messageId: T,
                                      roleId: e?.colorRoleId,
                                      clickTrap: !0,
                                      children: (e, t) => {
                                          let { onClick: i, ...n } = e;
                                          return p(
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
                                : p(void 0, void 0),
                    },
                    s,
                );
            },
            [b, t, i, v, T, M, E, N, S, y, _?.animate, C, I],
        )
    );
}
