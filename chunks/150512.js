l.d(n, { Z: () => b }), l(35282);
var t = l(200651),
    r = l(192379),
    a = l(120356),
    i = l.n(a),
    s = l(399606),
    c = l(481060),
    o = l(749210),
    d = l(607070),
    u = l(903518),
    m = l(484459),
    h = l(430824),
    f = l(594174),
    g = l(5192),
    x = l(51144),
    p = l(82778);
function b(e) {
    let { guildId: n, welcomeMessage: l, className: a } = e,
        b = (0, s.e7)([h.Z], () => h.Z.getGuild(n)),
        j = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
        C = (0, s.e7)([f.default], () => f.default.getUser(null == l ? void 0 : l.authorIds[0])),
        _ = r.useMemo(() => (null != b && null != C && (0, u.Y)(b, C) ? C : null), [b, C]),
        v = (0, s.e7)([f.default], () => f.default.getCurrentUser()),
        I = r.useMemo(() => {
            var e;
            return null != (e = null == l ? void 0 : l.authorIds) ? e : [];
        }, [l]);
    r.useEffect(() => {
        o.Z.requestMembersById(n, I);
    }, [n, I]),
        r.useEffect(() => {
            null != _ && (0, m.Z)(_.id, _.getAvatarURL(n, 48), { guildId: n });
        }, [_, n]);
    let Z = g.ZP.useName(n, null, _),
        N = (0, x._T)(v);
    if (null == _ || null == v || null == l) return null;
    let y = null != b && b.ownerId === _.id;
    return (0, t.jsxs)(c.Zbd, {
        className: i()(p.welcomeMessageContainer, a),
        children: [
            (0, t.jsx)('div', { className: p.avatarBackground }),
            j
                ? (0, t.jsx)(c.qEK, {
                      src: _.getAvatarURL(n, 48),
                      size: c.EFr.SIZE_48,
                      className: p.avatar,
                      'aria-label': _.username
                  })
                : (0, t.jsx)(c.Xo$, {
                      src: _.getAvatarURL(n, 48),
                      size: c.EFr.SIZE_48,
                      className: p.avatar,
                      'aria-label': _.username
                  }),
            (0, t.jsx)('div', { className: p.avatarBorder }),
            (0, t.jsxs)('div', {
                className: p.welcomeMessageContent,
                children: [
                    (0, t.jsxs)('div', {
                        className: p.adminUsernameContainer,
                        children: [
                            (0, t.jsx)(c.Text, {
                                variant: 'text-sm/semibold',
                                color: 'header-primary',
                                children: Z
                            }),
                            y
                                ? (0, t.jsx)(c.CEn, {
                                      size: 'xxs',
                                      color: 'currentColor',
                                      className: p.ownerIcon
                                  })
                                : null
                        ]
                    }),
                    (0, t.jsx)(c.Text, {
                        variant: 'text-md/medium',
                        children: (function (e, n) {
                            let l = e.split(/\[@username\]/g);
                            return (0, t.jsx)('span', {
                                children: l.map((e, a) =>
                                    (0, t.jsxs)(
                                        r.Fragment,
                                        {
                                            children: [
                                                e,
                                                a < l.length - 1
                                                    ? (0, t.jsx)(c.Text, {
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
                        })(null == l ? void 0 : l.message, null != N ? N : v.username)
                    })
                ]
            })
        ]
    });
}
