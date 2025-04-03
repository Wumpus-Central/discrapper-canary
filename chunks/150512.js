n.d(t, { Z: () => p }), n(301563);
var l = n(200651),
    r = n(192379),
    i = n(120356),
    s = n.n(i),
    a = n(399606),
    o = n(481060),
    c = n(749210),
    d = n(607070),
    u = n(903518),
    m = n(484459),
    N = n(430824),
    h = n(594174),
    I = n(5192),
    g = n(51144),
    f = n(82778);
function p(e) {
    let { guildId: t, welcomeMessage: n, className: i } = e,
        p = (0, a.e7)([N.Z], () => N.Z.getGuild(t)),
        E = (0, a.e7)([d.Z], () => d.Z.useReducedMotion),
        S = (0, a.e7)([h.default], () => h.default.getUser(null == n ? void 0 : n.authorIds[0])),
        x = r.useMemo(() => (null != p && null != S && (0, u.Y)(p, S) ? S : null), [p, S]),
        T = (0, a.e7)([h.default], () => h.default.getCurrentUser()),
        O = r.useMemo(() => {
            var e;
            return null != (e = null == n ? void 0 : n.authorIds) ? e : [];
        }, [n]);
    r.useEffect(() => {
        c.Z.requestMembersById(t, O);
    }, [t, O]),
        r.useEffect(() => {
            null != x && (0, m.Z)(x.id, x.getAvatarURL(t, 48), { guildId: t });
        }, [x, t]);
    let _ = I.ZP.useName(t, null, x),
        j = (0, g._T)(T);
    if (null == x || null == T || null == n) return null;
    let v = null != p && p.ownerId === x.id;
    return (0, l.jsxs)(o.Zbd, {
        className: s()(f.welcomeMessageContainer, i),
        children: [
            (0, l.jsx)('div', { className: f.avatarBackground }),
            E
                ? (0, l.jsx)(o.qEK, {
                      src: x.getAvatarURL(t, 48),
                      size: o.EFr.SIZE_48,
                      className: f.avatar,
                      'aria-label': x.username
                  })
                : (0, l.jsx)(o.Xo$, {
                      src: x.getAvatarURL(t, 48),
                      size: o.EFr.SIZE_48,
                      className: f.avatar,
                      'aria-label': x.username
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
                                children: n.map((e, i) =>
                                    (0, l.jsxs)(
                                        r.Fragment,
                                        {
                                            children: [
                                                e,
                                                i < n.length - 1
                                                    ? (0, l.jsx)(o.Text, {
                                                          tag: 'span',
                                                          variant: 'text-md/semibold',
                                                          children: '@'.concat(t)
                                                      })
                                                    : null
                                            ]
                                        },
                                        'username-'.concat(i)
                                    )
                                )
                            });
                        })(null == n ? void 0 : n.message, null != j ? j : T.username)
                    })
                ]
            })
        ]
    });
}
