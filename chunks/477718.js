n.d(t, { Z: () => j });
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(913527),
    o = n.n(s),
    c = n(399606),
    d = n(481060),
    u = n(480137),
    h = n(906732),
    p = n(376923),
    m = n(472596),
    f = n(987707),
    g = n(909746),
    _ = n(501801),
    C = n(271383),
    x = n(430824),
    v = n(5192),
    E = n(776767),
    I = n(981631),
    b = n(388032),
    Z = n(872278),
    N = n(389401),
    T = n(758570);
function S(e) {
    var t;
    let { log: n, member: a, guild: s } = e,
        { analyticsLocations: u } = (0, h.ZP)(),
        f = g.nm(n),
        x = g.QM(n),
        E = null === (t = g.V$(I.zUn.REASON, n)) || void 0 === t ? void 0 : t.newValue,
        T = g.J5(n),
        S = (0, p.LJ)(n.id),
        j = (0, c.e7)([C.ZP], () => (null != n.userId ? C.ZP.getMember(a.guildId, n.userId) : null), [a.guildId, n.userId]),
        A = l.useCallback(
            (e) => (t) => {
                t.preventDefault(), t.stopPropagation(), null != e && (0, m.RE)(e, u);
            },
            [u]
        ),
        y = l.useCallback(
            () =>
                null == n.user
                    ? null
                    : (0, i.jsx)(d.ua7, {
                          text: b.intl.string(b.t.mvsi9v),
                          children: (e) => {
                              var t;
                              let { onMouseEnter: l, onMouseLeave: r } = e;
                              return (0, i.jsx)(d.P3F, {
                                  tag: 'span',
                                  className: Z.username,
                                  onClick: A(j),
                                  onMouseEnter: l,
                                  onMouseLeave: r,
                                  children: (0, i.jsxs)(d.Text, {
                                      variant: 'text-sm/medium',
                                      tag: 'span',
                                      children: [
                                          '@',
                                          (0, i.jsx)(d.PUh, {
                                              name: v.ZP.getName(a.guildId, null, n.user),
                                              color: null !== (t = null == j ? void 0 : j.colorString) && void 0 !== t ? t : void 0
                                          })
                                      ]
                                  })
                              });
                          }
                      }),
            [A, n.user, a.guildId, j]
        )();
    return (0, i.jsxs)('div', {
        className: r()(N.modInfoItem, Z.auditLogItem),
        children: [
            (0, i.jsxs)('div', {
                className: Z.auditLogItemTitleContainer,
                children: [
                    (0, i.jsxs)('div', {
                        className: Z.auditLogItemTitle,
                        children: [
                            null != f &&
                                (0, i.jsx)(d.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'header-primary',
                                    children: f
                                }),
                            null != x &&
                                (0, i.jsxs)(d.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    children: ['(', 'string' == typeof x ? x : o()(x).fromNow(), ')']
                                })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: Z.auditLogItemDate,
                        children: (0, i.jsx)(d.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-primary',
                            children: S
                        })
                    })
                ]
            }),
            null != E &&
                (0, i.jsx)('div', {
                    className: Z.auditLogSecondaryContainer,
                    children: (0, i.jsxs)('div', {
                        className: Z.auditLogReason,
                        children: [
                            y,
                            (0, i.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                tag: 'span',
                                children: E
                            })
                        ]
                    })
                }),
            null == E &&
                null != T &&
                (0, i.jsx)('div', {
                    className: Z.auditLogSecondaryContainer,
                    children: (0, i.jsxs)('div', {
                        className: Z.auditLogSecondary,
                        children: [
                            y,
                            (0, i.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                tag: 'span',
                                children: T
                            })
                        ]
                    })
                }),
            null == E &&
                null == T &&
                (0, i.jsx)('div', {
                    className: Z.auditLogSecondaryContainer,
                    children: (0, i.jsx)('div', {
                        className: Z.auditLogSecondary,
                        children: (0, i.jsx)(d.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            tag: 'span',
                            children: (0, i.jsx)(_.tP, {
                                log: n,
                                guild: s,
                                onContentClick: () => {},
                                className: Z.auditLogExpandedChangeDetails
                            })
                        })
                    })
                })
        ]
    });
}
function j(e) {
    let { member: t } = e,
        n = (0, c.e7)([x.Z], () => x.Z.getGuild(t.guildId), [t.guildId]),
        a = (0, c.e7)(
            [f.Z],
            () => {
                let e = f.Z.logs;
                return null == e || null == n ? [] : g._$(e, n);
            },
            [n]
        );
    return (l.useEffect(() => {
        (async function (e, t) {
            await u.gV(t, e);
        })(t.guildId, t.userId);
    }, [t.guildId, t.userId]),
    null == n || 0 === a.length)
        ? null
        : (0, i.jsx)(d.xJW, {
              title: b.intl.string(b.t.flCxLi),
              titleClassName: T.infoTitle,
              children:
                  a.length > 0
                      ? (0, i.jsx)(E.WM, {
                            children: a.map((e) =>
                                (0, i.jsx)(
                                    S,
                                    {
                                        log: e,
                                        member: t,
                                        guild: n
                                    },
                                    e.id
                                )
                            )
                        })
                      : null
          });
}
