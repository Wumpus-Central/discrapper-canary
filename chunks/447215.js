n.d(l, { P: () => x });
var r = n(627968),
    t = n(64700),
    a = n(349288),
    i = n(473193),
    u = n(614820),
    s = n(463930),
    o = n(793574),
    d = n(688810),
    c = n(609425),
    h = n(922301),
    f = n(660184),
    p = n(73392),
    m = n(676608),
    g = n(342296),
    I = n(734057),
    y = n(841549),
    b = n(560936);
function x(e) {
    let {
            user: l,
            channelId: n,
            guildId: x,
            messageId: C,
            stopPropagation: w = !1,
            ariaLabel: A,
            enableDisplayNameStyles: M = !1,
            displayInline: j = !1,
        } = e,
        P = t.useRef(null),
        { analyticsLocations: k } = (0, d.Ay)(o.A.USERNAME),
        L = (0, m.Ay)(x, l?.id),
        D = (0, c.A)({ userId: l?.id, guildId: x }),
        N = (0, p.a)({ displayNameStyles: D }),
        S = t.useCallback(
            (e) => {
                let r = I.A.getChannel(n);
                null != r && null != l && (0, y.wQ)(e, l, r);
            },
            [l, n],
        ),
        v = t.useContext(i.C);
    return (
        (0, b.A)({ subscribeToGroupId: C, authorId: l?.id, shouldSubscribe: M && null != D && null == x }),
        t.useCallback(
            (e) => (t, i) => {
                let o = e?.colorStrings,
                    c = L && null != o && null != o.primaryColor && null != o.secondaryColor;
                function p(l, n) {
                    if (!M || null == D || null != x)
                        return (0, r.jsx)(s.V, {
                            ...(null != l ? l : {}),
                            ref: P,
                            onContextMenu: S,
                            name: (0, u.O)(t) ?? "",
                            colorString: e?.colorString ?? null,
                            roleName: e?.colorRoleName,
                            colorStrings: c ? o : null,
                            "aria-label": A,
                            className: N,
                            displayInline: j,
                        });
                    {
                        let e = v?.animate || n?.isShown ? h.G.ANIMATED : h.G.PLAIN;
                        return (0, r.jsx)(a.Anchor, {
                            ...(null != l ? l : {}),
                            ref: P,
                            onContextMenu: S,
                            "aria-label": A,
                            children: (0, r.jsx)(f.A, {
                                userName: (0, u.O)(t) ?? "",
                                displayNameStyles: D,
                                effectDisplayType: e,
                                shouldUnderlineOnHover: !0,
                                loop: !0,
                            }),
                        });
                    }
                }
                return (0, r.jsx)(
                    d.f5,
                    {
                        value: k,
                        children:
                            null != l
                                ? (0, r.jsx)(g.A, {
                                      targetElementRef: P,
                                      user: l,
                                      guildId: x,
                                      channelId: n,
                                      messageId: C,
                                      roleId: e?.colorRoleId,
                                      clickTrap: !0,
                                      children: (e, l) => {
                                          let { onClick: n, ...r } = e;
                                          return p(
                                              {
                                                  onClick: (e) => {
                                                      w && null != e && e.stopPropagation(), n(e);
                                                  },
                                                  ...r,
                                              },
                                              l,
                                          );
                                      },
                                  })
                                : p(void 0, void 0),
                    },
                    i,
                );
            },
            [k, l, n, x, C, S, w, A, L, N, v?.animate, D, M, j],
        )
    );
}
