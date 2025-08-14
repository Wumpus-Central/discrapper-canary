n.d(t, { Z: () => f }), n(35282);
var l = n(255367),
    i = n(73800),
    r = n(120356),
    s = n.n(r),
    a = n(399606),
    o = n(481060),
    c = n(749210),
    d = n(607070),
    u = n(903518),
    m = n(484459),
    h = n(430824),
    I = n(594174),
    g = n(5192),
    N = n(51144),
    S = n(180391);
function f(e) {
    let { guildId: t, welcomeMessage: n, className: r } = e,
        f = (0, a.e7)([h.Z], () => h.Z.getGuild(t)),
        p = (0, a.e7)([d.Z], () => d.Z.useReducedMotion),
        E = (0, a.e7)([I.default], () => I.default.getUser(null == n ? void 0 : n.authorIds[0])),
        T = i.useMemo(() => (null != f && null != E && (0, u.Y)(f, E) ? E : null), [f, E]),
        O = (0, a.e7)([I.default], () => I.default.getCurrentUser()),
        x = i.useMemo(() => {
            var e;
            return null != (e = null == n ? void 0 : n.authorIds) ? e : [];
        }, [n]);
    i.useEffect(() => {
        c.Z.requestMembersById(t, x);
    }, [t, x]),
        i.useEffect(() => {
            null != T && (0, m.Z)(T.id, T.getAvatarURL(t, 48), { guildId: t });
        }, [T, t]);
    let _ = g.ZP.useName(t, null, T),
        j = (0, N._T)(O);
    if (null == T || null == O || null == n) return null;
    let v = null != f && f.ownerId === T.id;
    return (0, l.jsxs)(o.Zbd, {
        className: s()(S.welcomeMessageContainer, r),
        children: [
            (0, l.jsx)("div", { className: S.avatarBackground }),
            p
                ? (0, l.jsx)(o.qEK, {
                      src: T.getAvatarURL(t, 48),
                      size: o.EFr.SIZE_48,
                      className: S.avatar,
                      "aria-label": T.username,
                  })
                : (0, l.jsx)(o.Xo$, {
                      src: T.getAvatarURL(t, 48),
                      size: o.EFr.SIZE_48,
                      className: S.avatar,
                      "aria-label": T.username,
                  }),
            (0, l.jsx)("div", { className: S.avatarBorder }),
            (0, l.jsxs)("div", {
                className: S.welcomeMessageContent,
                children: [
                    (0, l.jsxs)("div", {
                        className: S.adminUsernameContainer,
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
                                      className: S.ownerIcon,
                                  })
                                : null,
                        ],
                    }),
                    (0, l.jsx)(o.Text, {
                        variant: "text-md/medium",
                        children: (function (e, t) {
                            let n = e.split(/\[@username\]/g);
                            return (0, l.jsx)("span", {
                                children: n.map((e, r) =>
                                    (0, l.jsxs)(
                                        i.Fragment,
                                        {
                                            children: [
                                                e,
                                                r < n.length - 1
                                                    ? (0, l.jsx)(o.Text, {
                                                          tag: "span",
                                                          variant: "text-md/semibold",
                                                          children: "@".concat(t),
                                                      })
                                                    : null,
                                            ],
                                        },
                                        "username-".concat(r),
                                    ),
                                ),
                            });
                        })(null == n ? void 0 : n.message, null != j ? j : O.username),
                    }),
                ],
            }),
        ],
    });
}
