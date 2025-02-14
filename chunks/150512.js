t.d(n, { Z: () => x });
var l = t(200651),
    i = t(192379),
    s = t(120356),
    r = t.n(s),
    a = t(399606),
    o = t(481060),
    d = t(749210),
    c = t(607070),
    u = t(903518),
    m = t(484459),
    I = t(430824),
    h = t(594174),
    N = t(5192),
    g = t(51144),
    E = t(15378);
function x(e) {
    let { guildId: n, welcomeMessage: t, className: s } = e,
        x = (0, a.e7)([I.Z], () => I.Z.getGuild(n)),
        T = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
        S = (0, a.e7)([h.default], () => h.default.getUser(null == t ? void 0 : t.authorIds[0])),
        _ = i.useMemo(() => (null != x && null != S && (0, u.Y)(x, S) ? S : null), [x, S]),
        f = (0, a.e7)([h.default], () => h.default.getCurrentUser()),
        p = i.useMemo(() => {
            var e;
            return null !== (e = null == t ? void 0 : t.authorIds) && void 0 !== e ? e : [];
        }, [t]);
    i.useEffect(() => {
        d.Z.requestMembersById(n, p);
    }, [n, p]),
        i.useEffect(() => {
            null != _ && (0, m.Z)(_.id, _.getAvatarURL(n, 48), { guildId: n });
        }, [_, n]);
    let v = N.ZP.useName(n, null, _),
        j = (0, g._T)(f);
    if (null == _ || null == f || null == t) return null;
    let C = null != x && x.ownerId === _.id;
    return (0, l.jsxs)(o.Zbd, {
        className: r()(E.welcomeMessageContainer, s),
        children: [
            (0, l.jsx)('div', { className: E.avatarBackground }),
            T
                ? (0, l.jsx)(o.qEK, {
                      src: _.getAvatarURL(n, 48),
                      size: o.EFr.SIZE_48,
                      className: E.avatar,
                      'aria-label': _.username
                  })
                : (0, l.jsx)(o.Xo$, {
                      src: _.getAvatarURL(n, 48),
                      size: o.EFr.SIZE_48,
                      className: E.avatar,
                      'aria-label': _.username
                  }),
            (0, l.jsx)('div', { className: E.avatarBorder }),
            (0, l.jsxs)('div', {
                className: E.welcomeMessageContent,
                children: [
                    (0, l.jsxs)('div', {
                        className: E.adminUsernameContainer,
                        children: [
                            (0, l.jsx)(o.Text, {
                                variant: 'text-sm/semibold',
                                color: 'header-primary',
                                children: v
                            }),
                            C
                                ? (0, l.jsx)(o.CEn, {
                                      size: 'xxs',
                                      color: 'currentColor',
                                      className: E.ownerIcon
                                  })
                                : null
                        ]
                    }),
                    (0, l.jsx)(o.Text, {
                        variant: 'text-md/medium',
                        children: (function (e, n) {
                            let t = e.split(/\[@username\]/g);
                            return (0, l.jsx)('span', {
                                children: t.map((e, s) =>
                                    (0, l.jsxs)(
                                        i.Fragment,
                                        {
                                            children: [
                                                e,
                                                s < t.length - 1
                                                    ? (0, l.jsx)(o.Text, {
                                                          tag: 'span',
                                                          variant: 'text-md/semibold',
                                                          children: '@'.concat(n)
                                                      })
                                                    : null
                                            ]
                                        },
                                        'username-'.concat(s)
                                    )
                                )
                            });
                        })(null == t ? void 0 : t.message, null != j ? j : f.username)
                    })
                ]
            })
        ]
    });
}
