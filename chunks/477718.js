n.d(t, { Z: () => D });
var r = n(255367),
    l = n(73800),
    i = n(120356),
    s = n.n(i),
    a = n(913527),
    o = n.n(a),
    u = n(399606),
    c = n(481060),
    d = n(480137),
    E = n(906732),
    _ = n(376923),
    A = n(472596),
    m = n(987707),
    T = n(909746),
    f = n(501801),
    g = n(884902),
    I = n(271383),
    h = n(430824),
    O = n(5192),
    N = n(776767),
    p = n(981631),
    R = n(388032),
    S = n(54433),
    C = n(44946),
    b = n(12740);
function v(e) {
    var t;
    let { log: n, member: i, guild: a } = e,
        { analyticsLocations: d } = (0, E.ZP)(),
        m = T.nm(n),
        h = T.QM(n),
        N = null == (t = T.V$(p.zUn.REASON, n)) ? void 0 : t.newValue,
        b = T.J5(n),
        v = (0, _.LJ)(n.id),
        D = (0, u.e7)([I.ZP], () => (null != n.userId ? I.ZP.getMember(i.guildId, n.userId) : null), [i.guildId, n.userId]),
        x = (0, g.X7)(null == D ? void 0 : D.guildId, null == D ? void 0 : D.userId, null == D ? void 0 : D.colorStrings),
        M = l.useCallback(
            (e) => (t) => {
                (t.preventDefault(), t.stopPropagation(), null != e && (0, A.RE)(e, d));
            },
            [d]
        ),
        L = l.useCallback(
            () =>
                null == n.user
                    ? null
                    : (0, r.jsx)(c.ua7, {
                          text: R.intl.string(R.t.mvsi9v),
                          children: (e) => {
                              var t;
                              let { onMouseEnter: l, onMouseLeave: s } = e;
                              return (0, r.jsx)(c.P3F, {
                                  tag: 'span',
                                  className: S.username,
                                  onClick: M(D),
                                  onMouseEnter: l,
                                  onMouseLeave: s,
                                  children: (0, r.jsxs)(c.Text, {
                                      variant: 'text-sm/medium',
                                      tag: 'span',
                                      children: [
                                          '@',
                                          (0, r.jsx)(c.PUh, {
                                              name: O.ZP.getName(i.guildId, null, n.user),
                                              color: null != (t = null == D ? void 0 : D.colorString) ? t : void 0,
                                              roleColors: x
                                          })
                                      ]
                                  })
                              });
                          }
                      }),
            [M, n.user, i.guildId, D, x]
        )();
    return (0, r.jsxs)('div', {
        className: s()(C.modInfoItem, S.auditLogItem),
        children: [
            (0, r.jsxs)('div', {
                className: S.auditLogItemTitleContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: S.auditLogItemTitle,
                        children: [
                            null != m &&
                                (0, r.jsx)(c.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'header-primary',
                                    children: m
                                }),
                            null != h &&
                                (0, r.jsxs)(c.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    children: ['(', 'string' == typeof h ? h : o()(h).fromNow(), ')']
                                })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: S.auditLogItemDate,
                        children: (0, r.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-primary',
                            children: v
                        })
                    })
                ]
            }),
            null != N &&
                (0, r.jsx)('div', {
                    className: S.auditLogSecondaryContainer,
                    children: (0, r.jsxs)('div', {
                        className: S.auditLogReason,
                        children: [
                            L,
                            (0, r.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                tag: 'span',
                                children: N
                            })
                        ]
                    })
                }),
            null == N &&
                null != b &&
                (0, r.jsx)('div', {
                    className: S.auditLogSecondaryContainer,
                    children: (0, r.jsxs)('div', {
                        className: S.auditLogSecondary,
                        children: [
                            L,
                            (0, r.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                tag: 'span',
                                children: b
                            })
                        ]
                    })
                }),
            null == N &&
                null == b &&
                (0, r.jsx)('div', {
                    className: S.auditLogSecondaryContainer,
                    children: (0, r.jsx)('div', {
                        className: S.auditLogSecondary,
                        children: (0, r.jsx)(c.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            tag: 'span',
                            children: (0, r.jsx)(f.tP, {
                                log: n,
                                guild: a,
                                onContentClick: () => {},
                                className: S.auditLogExpandedChangeDetails
                            })
                        })
                    })
                })
        ]
    });
}
function D(e) {
    let { member: t } = e,
        n = (0, u.e7)([h.Z], () => h.Z.getGuild(t.guildId), [t.guildId]),
        i = (0, u.e7)(
            [m.Z],
            () => {
                let e = m.Z.logs;
                return null == e || null == n ? [] : T._$(e, n);
            },
            [n]
        );
    return (l.useEffect(() => {
        !(async function (e, t) {
            await d.gV(t, e);
        })(t.guildId, t.userId);
    }, [t.guildId, t.userId]),
    null == n || 0 === i.length)
        ? null
        : (0, r.jsx)(c.xJW, {
              title: R.intl.string(R.t.flCxLi),
              titleClassName: b.infoTitle,
              children:
                  i.length > 0
                      ? (0, r.jsx)(N.WM, {
                            children: i.map((e) =>
                                (0, r.jsx)(
                                    v,
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
