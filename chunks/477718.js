t.d(e, { Z: () => P });
var n = t(255367),
    r = t(73800),
    l = t(120356),
    i = t.n(l),
    s = t(913527),
    a = t.n(s),
    o = t(399606),
    g = t(481060),
    f = t(480137),
    v = t(906732),
    c = t(376923),
    h = t(472596),
    E = t(987707),
    u = t(909746),
    d = t(501801),
    C = t(884902),
    B = t(271383),
    w = t(430824),
    D = t(5192),
    M = t(776767),
    I = t(981631),
    p = t(388032),
    H = t(54433),
    b = t(44946),
    Q = t(12740);
function O(A) {
    var e;
    let { log: t, member: l, guild: s } = A,
        { analyticsLocations: f } = (0, v.ZP)(),
        E = u.nm(t),
        w = u.QM(t),
        M = null == (e = u.V$(I.zUn.REASON, t)) ? void 0 : e.newValue,
        Q = u.J5(t),
        O = (0, c.LJ)(t.id),
        P = (0, o.e7)([B.ZP], () => (null != t.userId ? B.ZP.getMember(l.guildId, t.userId) : null), [l.guildId, t.userId]),
        V = (0, C.X7)(null == P ? void 0 : P.guildId, null == P ? void 0 : P.userId, null == P ? void 0 : P.colorStrings),
        j = r.useCallback(
            (A) => (e) => {
                (e.preventDefault(), e.stopPropagation(), null != A && (0, h.RE)(A, f));
            },
            [f]
        ),
        T = r.useCallback(
            () =>
                null == t.user
                    ? null
                    : (0, n.jsx)(g.ua7, {
                          text: p.intl.string(p.t.mvsi9v),
                          children: (A) => {
                              var e;
                              let { onMouseEnter: r, onMouseLeave: i } = A;
                              return (0, n.jsx)(g.P3F, {
                                  tag: 'span',
                                  className: H.username,
                                  onClick: j(P),
                                  onMouseEnter: r,
                                  onMouseLeave: i,
                                  children: (0, n.jsxs)(g.Text, {
                                      variant: 'text-sm/medium',
                                      tag: 'span',
                                      children: [
                                          '@',
                                          (0, n.jsx)(g.PUh, {
                                              name: D.ZP.getName(l.guildId, null, t.user),
                                              color: null != (e = null == P ? void 0 : P.colorString) ? e : void 0,
                                              roleColors: V
                                          })
                                      ]
                                  })
                              });
                          }
                      }),
            [j, t.user, l.guildId, P, V]
        )();
    return (0, n.jsxs)('div', {
        className: i()(b.modInfoItem, H.auditLogItem),
        children: [
            (0, n.jsxs)('div', {
                className: H.auditLogItemTitleContainer,
                children: [
                    (0, n.jsxs)('div', {
                        className: H.auditLogItemTitle,
                        children: [
                            null != E &&
                                (0, n.jsx)(g.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'header-primary',
                                    children: E
                                }),
                            null != w &&
                                (0, n.jsxs)(g.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    children: ['(', 'string' == typeof w ? w : a()(w).fromNow(), ')']
                                })
                        ]
                    }),
                    (0, n.jsx)('div', {
                        className: H.auditLogItemDate,
                        children: (0, n.jsx)(g.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-primary',
                            children: O
                        })
                    })
                ]
            }),
            null != M &&
                (0, n.jsx)('div', {
                    className: H.auditLogSecondaryContainer,
                    children: (0, n.jsxs)('div', {
                        className: H.auditLogReason,
                        children: [
                            T,
                            (0, n.jsx)(g.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                tag: 'span',
                                children: M
                            })
                        ]
                    })
                }),
            null == M &&
                null != Q &&
                (0, n.jsx)('div', {
                    className: H.auditLogSecondaryContainer,
                    children: (0, n.jsxs)('div', {
                        className: H.auditLogSecondary,
                        children: [
                            T,
                            (0, n.jsx)(g.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                tag: 'span',
                                children: Q
                            })
                        ]
                    })
                }),
            null == M &&
                null == Q &&
                (0, n.jsx)('div', {
                    className: H.auditLogSecondaryContainer,
                    children: (0, n.jsx)('div', {
                        className: H.auditLogSecondary,
                        children: (0, n.jsx)(g.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            tag: 'span',
                            children: (0, n.jsx)(d.tP, {
                                log: t,
                                guild: s,
                                onContentClick: () => {},
                                className: H.auditLogExpandedChangeDetails
                            })
                        })
                    })
                })
        ]
    });
}
function P(A) {
    let { member: e } = A,
        t = (0, o.e7)([w.Z], () => w.Z.getGuild(e.guildId), [e.guildId]),
        l = (0, o.e7)(
            [E.Z],
            () => {
                let A = E.Z.logs;
                return null == A || null == t ? [] : u._$(A, t);
            },
            [t]
        );
    return (r.useEffect(() => {
        !(async function (A, e) {
            await f.gV(e, A);
        })(e.guildId, e.userId);
    }, [e.guildId, e.userId]),
    null == t || 0 === l.length)
        ? null
        : (0, n.jsx)(g.xJW, {
              title: p.intl.string(p.t.flCxLi),
              titleClassName: Q.infoTitle,
              children:
                  l.length > 0
                      ? (0, n.jsx)(M.WM, {
                            children: l.map((A) =>
                                (0, n.jsx)(
                                    O,
                                    {
                                        log: A,
                                        member: e,
                                        guild: t
                                    },
                                    A.id
                                )
                            )
                        })
                      : null
          });
}
