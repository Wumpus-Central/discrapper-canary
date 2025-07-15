n.d(t, { Z: () => v });
var r = n(255367),
    l = n(73800),
    i = n(120356),
    s = n.n(i),
    a = n(913527),
    o = n.n(a),
    u = n(399606),
    c = n(481060),
    E = n(480137),
    d = n(906732),
    _ = n(376923),
    A = n(472596),
    T = n(987707),
    I = n(909746),
    g = n(501801),
    m = n(884902),
    f = n(271383),
    O = n(430824),
    N = n(5192),
    h = n(776767),
    R = n(981631),
    p = n(388032),
    S = n(54433),
    C = n(44946),
    b = n(12740);
function D(e) {
    var t;
    let { log: n, member: i, guild: a } = e,
        { analyticsLocations: E } = (0, d.ZP)(),
        T = I.nm(n),
        O = I.QM(n),
        h = null == (t = I.V$(R.zUn.REASON, n)) ? void 0 : t.newValue,
        b = I.J5(n),
        D = (0, _.LJ)(n.id),
        v = (0, u.e7)([f.ZP], () => (null != n.userId ? f.ZP.getMember(i.guildId, n.userId) : null), [i.guildId, n.userId]),
        U = (0, m.X7)(null == v ? void 0 : v.guildId, null == v ? void 0 : v.userId, null == v ? void 0 : v.colorStrings),
        L = l.useCallback(
            (e) => (t) => {
                (t.preventDefault(), t.stopPropagation(), null != e && (0, A.RE)(e, E));
            },
            [E]
        ),
        M = l.useCallback(
            () =>
                null == n.user
                    ? null
                    : (0, r.jsx)(c.ua7, {
                          text: p.intl.string(p.t.mvsi9v),
                          children: (e) => {
                              var t;
                              let { onMouseEnter: l, onMouseLeave: s } = e;
                              return (0, r.jsx)(c.P3F, {
                                  tag: 'span',
                                  className: S.username,
                                  onClick: L(v),
                                  onMouseEnter: l,
                                  onMouseLeave: s,
                                  children: (0, r.jsxs)(c.Text, {
                                      variant: 'text-sm/medium',
                                      tag: 'span',
                                      children: [
                                          '@',
                                          (0, r.jsx)(c.PUh, {
                                              name: N.ZP.getName(i.guildId, null, n.user),
                                              color: null != (t = null == v ? void 0 : v.colorString) ? t : void 0,
                                              roleColors: U
                                          })
                                      ]
                                  })
                              });
                          }
                      }),
            [L, n.user, i.guildId, v, U]
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
                            null != T &&
                                (0, r.jsx)(c.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'header-primary',
                                    children: T
                                }),
                            null != O &&
                                (0, r.jsxs)(c.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    children: ['(', 'string' == typeof O ? O : o()(O).fromNow(), ')']
                                })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: S.auditLogItemDate,
                        children: (0, r.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-primary',
                            children: D
                        })
                    })
                ]
            }),
            null != h &&
                (0, r.jsx)('div', {
                    className: S.auditLogSecondaryContainer,
                    children: (0, r.jsxs)('div', {
                        className: S.auditLogReason,
                        children: [
                            M,
                            (0, r.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                tag: 'span',
                                children: h
                            })
                        ]
                    })
                }),
            null == h &&
                null != b &&
                (0, r.jsx)('div', {
                    className: S.auditLogSecondaryContainer,
                    children: (0, r.jsxs)('div', {
                        className: S.auditLogSecondary,
                        children: [
                            M,
                            (0, r.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                tag: 'span',
                                children: b
                            })
                        ]
                    })
                }),
            null == h &&
                null == b &&
                (0, r.jsx)('div', {
                    className: S.auditLogSecondaryContainer,
                    children: (0, r.jsx)('div', {
                        className: S.auditLogSecondary,
                        children: (0, r.jsx)(c.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            tag: 'span',
                            children: (0, r.jsx)(g.tP, {
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
function v(e) {
    let { member: t } = e,
        n = (0, u.e7)([O.Z], () => O.Z.getGuild(t.guildId), [t.guildId]),
        i = (0, u.e7)(
            [T.Z],
            () => {
                let e = T.Z.logs;
                return null == e || null == n ? [] : I._$(e, n);
            },
            [n]
        );
    return (l.useEffect(() => {
        !(async function (e, t) {
            await E.gV(t, e);
        })(t.guildId, t.userId);
    }, [t.guildId, t.userId]),
    null == n || 0 === i.length)
        ? null
        : (0, r.jsx)(c.xJW, {
              title: p.intl.string(p.t.flCxLi),
              titleClassName: b.infoTitle,
              children:
                  i.length > 0
                      ? (0, r.jsx)(h.WM, {
                            children: i.map((e) =>
                                (0, r.jsx)(
                                    D,
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
