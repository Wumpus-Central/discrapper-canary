n.d(t, {
    Z: function () {
        return j;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
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
    C = n(501801),
    x = n(271383),
    v = n(430824),
    _ = n(5192),
    I = n(776767),
    E = n(981631),
    b = n(388032),
    Z = n(872278),
    S = n(389401),
    N = n(758570);
function T(e) {
    var t;
    let { log: n, member: r, guild: s } = e,
        { analyticsLocations: u } = (0, h.ZP)(),
        f = g.nm(n),
        v = g.QM(n),
        I = null === (t = g.V$(E.zUn.REASON, n)) || void 0 === t ? void 0 : t.newValue,
        N = g.J5(n),
        T = (0, p.LJ)(n.id),
        j = (0, c.e7)([x.ZP], () => (null != n.userId ? x.ZP.getMember(r.guildId, n.userId) : null), [r.guildId, n.userId]),
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
                    : (0, i.jsx)(d.Tooltip, {
                          text: b.intl.string(b.t.mvsi9v),
                          children: (e) => {
                              var t;
                              let { onMouseEnter: l, onMouseLeave: a } = e;
                              return (0, i.jsx)(d.Clickable, {
                                  tag: 'span',
                                  className: Z.username,
                                  onClick: A(j),
                                  onMouseEnter: l,
                                  onMouseLeave: a,
                                  children: (0, i.jsxs)(d.Text, {
                                      variant: 'text-sm/medium',
                                      tag: 'span',
                                      children: [
                                          '@',
                                          (0, i.jsx)(d.NameWithRole, {
                                              name: _.ZP.getName(r.guildId, null, n.user),
                                              color: null !== (t = null == j ? void 0 : j.colorString) && void 0 !== t ? t : void 0
                                          })
                                      ]
                                  })
                              });
                          }
                      }),
            [A, n.user, r.guildId, j]
        )();
    return (0, i.jsxs)('div', {
        className: a()(S.modInfoItem, Z.auditLogItem),
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
                            null != v &&
                                (0, i.jsxs)(d.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    children: ['(', 'string' == typeof v ? v : o()(v).fromNow(), ')']
                                })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: Z.auditLogItemDate,
                        children: (0, i.jsx)(d.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-primary',
                            children: T
                        })
                    })
                ]
            }),
            null != I &&
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
                                children: I
                            })
                        ]
                    })
                }),
            null == I &&
                null != N &&
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
                                children: N
                            })
                        ]
                    })
                }),
            null == I &&
                null == N &&
                (0, i.jsx)('div', {
                    className: Z.auditLogSecondaryContainer,
                    children: (0, i.jsx)('div', {
                        className: Z.auditLogSecondary,
                        children: (0, i.jsx)(d.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            tag: 'span',
                            children: (0, i.jsx)(C.tP, {
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
        n = (0, c.e7)([v.Z], () => v.Z.getGuild(t.guildId), [t.guildId]),
        r = (0, c.e7)(
            [f.Z],
            () => {
                let e = f.Z.logs;
                return null == e || null == n ? [] : g._$(e, n);
            },
            [n]
        );
    return (l.useEffect(() => {
        (async function e(e, t) {
            await u.gV(t, e);
        })(t.guildId, t.userId);
    }, [t.guildId, t.userId]),
    null == n || 0 === r.length)
        ? null
        : (0, i.jsx)(d.FormItem, {
              title: b.intl.string(b.t.flCxLi),
              titleClassName: N.infoTitle,
              children:
                  r.length > 0
                      ? (0, i.jsx)(I.WM, {
                            children: r.map((e) =>
                                (0, i.jsx)(
                                    T,
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
