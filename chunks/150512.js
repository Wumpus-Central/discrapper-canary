n.d(t, { Z: () => p }), n(35282);
var l = n(54381),
    r = n(473749),
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
    N = n(51144),
    I = n(180391);
function p(e) {
    let { guildId: t, welcomeMessage: n, className: i } = e,
        p = (0, s.e7)([g.Z], () => g.Z.getGuild(t)),
        O = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
        E = (0, s.e7)([h.default], () => h.default.getUser(null == n ? void 0 : n.authorIds[0])),
        S = r.useMemo(() => (null != p && null != E && (0, u.Y)(p, E) ? E : null), [p, E]),
        x = (0, s.e7)([h.default], () => h.default.getCurrentUser()),
        T = r.useMemo(() => {
            var e;
            return null != (e = null == n ? void 0 : n.authorIds) ? e : [];
        }, [n]);
    r.useEffect(() => {
        c.Z.requestMembersById(t, T);
    }, [t, T]),
        r.useEffect(() => {
            null != S && (0, m.Z)(S.id, S.getAvatarURL(t, 48), { guildId: t });
        }, [S, t]);
    let _ = f.ZP.useName(t, null, S),
        j = (0, N._T)(x);
    if (null == S || null == x || null == n) return null;
    let v = null != p && p.ownerId === S.id;
    return (0, l.jsxs)(o.Zbd, {
        className: a()(I.welcomeMessageContainer, i),
        children: [
            (0, l.jsx)("div", { className: I.avatarBackground }),
            O
                ? (0, l.jsx)(o.qEK, {
                      src: S.getAvatarURL(t, 48),
                      size: o.EFr.SIZE_48,
                      className: I.avatar,
                      "aria-label": S.username,
                  })
                : (0, l.jsx)(o.Xo$, {
                      src: S.getAvatarURL(t, 48),
                      size: o.EFr.SIZE_48,
                      className: I.avatar,
                      "aria-label": S.username,
                  }),
            (0, l.jsx)("div", { className: I.avatarBorder }),
            (0, l.jsxs)("div", {
                className: I.welcomeMessageContent,
                children: [
                    (0, l.jsxs)("div", {
                        className: I.adminUsernameContainer,
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
                                      className: I.ownerIcon,
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
