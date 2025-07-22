(t.d(n, { Z: () => b }), t(35282));
var l = t(255367),
    r = t(73800),
    a = t(120356),
    i = t.n(a),
    s = t(399606),
    c = t(481060),
    o = t(749210),
    d = t(607070),
    u = t(903518),
    m = t(484459),
    h = t(430824),
    f = t(594174),
    g = t(5192),
    p = t(51144),
    x = t(82778);
function b(e) {
    let { guildId: n, welcomeMessage: t, className: a } = e,
        b = (0, s.e7)([h.Z], () => h.Z.getGuild(n)),
        j = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
        C = (0, s.e7)([f.default], () => f.default.getUser(null == t ? void 0 : t.authorIds[0])),
        _ = r.useMemo(() => (null != b && null != C && (0, u.Y)(b, C) ? C : null), [b, C]),
        v = (0, s.e7)([f.default], () => f.default.getCurrentUser()),
        I = r.useMemo(() => {
            var e;
            return null != (e = null == t ? void 0 : t.authorIds) ? e : [];
        }, [t]);
    (r.useEffect(() => {
        o.Z.requestMembersById(n, I);
    }, [n, I]),
        r.useEffect(() => {
            null != _ && (0, m.Z)(_.id, _.getAvatarURL(n, 48), { guildId: n });
        }, [_, n]));
    let Z = g.ZP.useName(n, null, _),
        y = (0, p._T)(v);
    if (null == _ || null == v || null == t) return null;
    let N = null != b && b.ownerId === _.id;
    return (0, l.jsxs)(c.Zbd, {
        className: i()(x.welcomeMessageContainer, a),
        children: [
            (0, l.jsx)('div', { className: x.avatarBackground }),
            j
                ? (0, l.jsx)(c.qEK, {
                      src: _.getAvatarURL(n, 48),
                      size: c.EFr.SIZE_48,
                      className: x.avatar,
                      'aria-label': _.username
                  })
                : (0, l.jsx)(c.Xo$, {
                      src: _.getAvatarURL(n, 48),
                      size: c.EFr.SIZE_48,
                      className: x.avatar,
                      'aria-label': _.username
                  }),
            (0, l.jsx)('div', { className: x.avatarBorder }),
            (0, l.jsxs)('div', {
                className: x.welcomeMessageContent,
                children: [
                    (0, l.jsxs)('div', {
                        className: x.adminUsernameContainer,
                        children: [
                            (0, l.jsx)(c.Text, {
                                variant: 'text-sm/semibold',
                                color: 'header-primary',
                                children: Z
                            }),
                            N
                                ? (0, l.jsx)(c.CEn, {
                                      size: 'xxs',
                                      color: 'currentColor',
                                      className: x.ownerIcon
                                  })
                                : null
                        ]
                    }),
                    (0, l.jsx)(c.Text, {
                        variant: 'text-md/medium',
                        children: (function (e, n) {
                            let t = e.split(/\[@username\]/g);
                            return (0, l.jsx)('span', {
                                children: t.map((e, a) =>
                                    (0, l.jsxs)(
                                        r.Fragment,
                                        {
                                            children: [
                                                e,
                                                a < t.length - 1
                                                    ? (0, l.jsx)(c.Text, {
                                                          tag: 'span',
                                                          variant: 'text-md/semibold',
                                                          children: '@'.concat(n)
                                                      })
                                                    : null
                                            ]
                                        },
                                        'username-'.concat(a)
                                    )
                                )
                            });
                        })(null == t ? void 0 : t.message, null != y ? y : v.username)
                    })
                ]
            })
        ]
    });
}
