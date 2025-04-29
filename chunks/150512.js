n.d(t, { Z: () => S }), n(35282);
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
    I = n(430824),
    h = n(594174),
    g = n(5192),
    N = n(51144),
    f = n(82778);
function S(e) {
    let { guildId: t, welcomeMessage: n, className: r } = e,
        S = (0, a.e7)([I.Z], () => I.Z.getGuild(t)),
        E = (0, a.e7)([d.Z], () => d.Z.useReducedMotion),
        p = (0, a.e7)([h.default], () => h.default.getUser(null == n ? void 0 : n.authorIds[0])),
        T = i.useMemo(() => (null != S && null != p && (0, u.Y)(S, p) ? p : null), [S, p]),
        x = (0, a.e7)([h.default], () => h.default.getCurrentUser()),
        O = i.useMemo(() => {
            var e;
            return null != (e = null == n ? void 0 : n.authorIds) ? e : [];
        }, [n]);
    i.useEffect(() => {
        c.Z.requestMembersById(t, O);
    }, [t, O]),
        i.useEffect(() => {
            null != T && (0, m.Z)(T.id, T.getAvatarURL(t, 48), { guildId: t });
        }, [T, t]);
    let _ = g.ZP.useName(t, null, T),
        j = (0, N._T)(x);
    if (null == T || null == x || null == n) return null;
    let v = null != S && S.ownerId === T.id;
    return (0, l.jsxs)(o.Zbd, {
        className: s()(f.welcomeMessageContainer, r),
        children: [
            (0, l.jsx)('div', { className: f.avatarBackground }),
            E
                ? (0, l.jsx)(o.qEK, {
                      src: T.getAvatarURL(t, 48),
                      size: o.EFr.SIZE_48,
                      className: f.avatar,
                      'aria-label': T.username
                  })
                : (0, l.jsx)(o.Xo$, {
                      src: T.getAvatarURL(t, 48),
                      size: o.EFr.SIZE_48,
                      className: f.avatar,
                      'aria-label': T.username
                  }),
            (0, l.jsx)('div', { className: f.avatarBorder }),
            (0, l.jsxs)('div', {
                className: f.welcomeMessageContent,
                children: [
                    (0, l.jsxs)('div', {
                        className: f.adminUsernameContainer,
                        children: [
                            (0, l.jsx)(o.Text, {
                                variant: 'text-sm/semibold',
                                color: 'header-primary',
                                children: _
                            }),
                            v
                                ? (0, l.jsx)(o.CEn, {
                                      size: 'xxs',
                                      color: 'currentColor',
                                      className: f.ownerIcon
                                  })
                                : null
                        ]
                    }),
                    (0, l.jsx)(o.Text, {
                        variant: 'text-md/medium',
                        children: (function (e, t) {
                            let n = e.split(/\[@username\]/g);
                            return (0, l.jsx)('span', {
                                children: n.map((e, r) =>
                                    (0, l.jsxs)(
                                        i.Fragment,
                                        {
                                            children: [
                                                e,
                                                r < n.length - 1
                                                    ? (0, l.jsx)(o.Text, {
                                                          tag: 'span',
                                                          variant: 'text-md/semibold',
                                                          children: '@'.concat(t)
                                                      })
                                                    : null
                                            ]
                                        },
                                        'username-'.concat(r)
                                    )
                                )
                            });
                        })(null == n ? void 0 : n.message, null != j ? j : x.username)
                    })
                ]
            })
        ]
    });
}
