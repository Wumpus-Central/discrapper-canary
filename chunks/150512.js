n.d(t, { Z: () => N }), n(35282);
var l = n(951288),
    r = n(647438),
    i = n(120356),
    a = n.n(i),
    s = n(399606),
    o = n(481060),
    c = n(749210),
    d = n(607070),
    u = n(903518),
    m = n(484459),
    g = n(430824),
    h = n(594174),
    f = n(5192),
    I = n(51144),
    p = n(180391);
function N(e) {
    let { guildId: t, welcomeMessage: n, className: i } = e,
        N = (0, s.e7)([g.Z], () => g.Z.getGuild(t)),
        O = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
        S = (0, s.e7)([h.default], () => h.default.getUser(null == n ? void 0 : n.authorIds[0])),
        E = r.useMemo(() => (null != N && null != S && (0, u.Y)(N, S) ? S : null), [N, S]),
        x = (0, s.e7)([h.default], () => h.default.getCurrentUser()),
        T = r.useMemo(() => {
            var e;
            return null != (e = null == n ? void 0 : n.authorIds) ? e : [];
        }, [n]);
    r.useEffect(() => {
        c.Z.requestMembersById(t, T);
    }, [t, T]),
        r.useEffect(() => {
            null != E && (0, m.Z)(E.id, E.getAvatarURL(t, 48), { guildId: t });
        }, [E, t]);
    let _ = f.ZP.useName(t, null, E),
        j = (0, I._T)(x);
    if (null == E || null == x || null == n) return null;
    let v = null != N && N.ownerId === E.id;
    return (0, l.jsxs)(o.Zbd, {
        className: a()(p.welcomeMessageContainer, i),
        children: [
            (0, l.jsx)("div", { className: p.avatarBackground }),
            O
                ? (0, l.jsx)(o.qEK, {
                      src: E.getAvatarURL(t, 48),
                      size: o.EFr.SIZE_48,
                      className: p.avatar,
                      "aria-label": E.username,
                  })
                : (0, l.jsx)(o.Xo$, {
                      src: E.getAvatarURL(t, 48),
                      size: o.EFr.SIZE_48,
                      className: p.avatar,
                      "aria-label": E.username,
                  }),
            (0, l.jsx)("div", { className: p.avatarBorder }),
            (0, l.jsxs)("div", {
                className: p.welcomeMessageContent,
                children: [
                    (0, l.jsxs)("div", {
                        className: p.adminUsernameContainer,
                        children: [
                            (0, l.jsx)(o.Text, {
                                variant: "text-sm/semibold",
                                color: "header-primary",
                                children: _,
                            }),
                            v
                                ? (0, l.jsx)(o.CEn, {
                                      size: "xxs",
                                      color: "currentColor",
                                      className: p.ownerIcon,
                                  })
                                : null,
                        ],
                    }),
                    (0, l.jsx)(o.Text, {
                        variant: "text-md/medium",
                        children: (function (e, t) {
                            let n = e.split(/\[@username\]/g);
                            return (0, l.jsx)("span", {
                                children: n.map((e, i) =>
                                    (0, l.jsxs)(
                                        r.Fragment,
                                        {
                                            children: [
                                                e,
                                                i < n.length - 1
                                                    ? (0, l.jsx)(o.Text, {
                                                          tag: "span",
                                                          variant: "text-md/semibold",
                                                          children: "@".concat(t),
                                                      })
                                                    : null,
                                            ],
                                        },
                                        "username-".concat(i),
                                    ),
                                ),
                            });
                        })(null == n ? void 0 : n.message, null != j ? j : x.username),
                    }),
                ],
            }),
        ],
    });
}
