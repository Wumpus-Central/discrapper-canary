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
    var e, t;
    let { log: l, member: s, guild: f } = A,
        { analyticsLocations: E } = (0, v.ZP)(),
        w = u.nm(l),
        M = u.QM(l),
        Q = null == (e = u.V$(I.zUn.REASON, l)) ? void 0 : e.newValue,
        O = u.J5(l),
        P = (0, c.LJ)(l.id),
        V = (0, o.e7)([B.ZP], () => (null != l.userId ? B.ZP.getMember(s.guildId, l.userId) : null), [s.guildId, l.userId]),
        j = (0, C.X7)(null == V ? void 0 : V.guildId, null == V ? void 0 : V.userId, null != (t = null == V ? void 0 : V.colorStrings) ? t : null),
        T = r.useCallback(
            (A) => (e) => {
                (e.preventDefault(), e.stopPropagation(), null != A && (0, h.RE)(A, E));
            },
            [E]
        ),
        y = r.useCallback(
            () =>
                null == l.user
                    ? null
                    : (0, n.jsx)(g.ua7, {
                          text: p.intl.string(p.t.mvsi9v),
                          children: (A) => {
                              var e;
                              let { onMouseEnter: t, onMouseLeave: r } = A;
                              return (0, n.jsx)(g.P3F, {
                                  tag: 'span',
                                  className: H.username,
                                  onClick: T(V),
                                  onMouseEnter: t,
                                  onMouseLeave: r,
                                  children: (0, n.jsxs)(g.Text, {
                                      variant: 'text-sm/medium',
                                      tag: 'span',
                                      children: [
                                          '@',
                                          (0, n.jsx)(g.PUh, {
                                              name: D.ZP.getName(s.guildId, null, l.user),
                                              colorString: null != (e = null == V ? void 0 : V.colorString) ? e : null,
                                              colorStrings: j
                                          })
                                      ]
                                  })
                              });
                          }
                      }),
            [T, l.user, s.guildId, V, j]
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
                            null != w &&
                                (0, n.jsx)(g.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'header-primary',
                                    children: w
                                }),
                            null != M &&
                                (0, n.jsxs)(g.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    children: ['(', 'string' == typeof M ? M : a()(M).fromNow(), ')']
                                })
                        ]
                    }),
                    (0, n.jsx)('div', {
                        className: H.auditLogItemDate,
                        children: (0, n.jsx)(g.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-primary',
                            children: P
                        })
                    })
                ]
            }),
            null != Q &&
                (0, n.jsx)('div', {
                    className: H.auditLogSecondaryContainer,
                    children: (0, n.jsxs)('div', {
                        className: H.auditLogReason,
                        children: [
                            y,
                            (0, n.jsx)(g.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                tag: 'span',
                                children: Q
                            })
                        ]
                    })
                }),
            null == Q &&
                null != O &&
                (0, n.jsx)('div', {
                    className: H.auditLogSecondaryContainer,
                    children: (0, n.jsxs)('div', {
                        className: H.auditLogSecondary,
                        children: [
                            y,
                            (0, n.jsx)(g.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                tag: 'span',
                                children: O
                            })
                        ]
                    })
                }),
            null == Q &&
                null == O &&
                (0, n.jsx)('div', {
                    className: H.auditLogSecondaryContainer,
                    children: (0, n.jsx)('div', {
                        className: H.auditLogSecondary,
                        children: (0, n.jsx)(g.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            tag: 'span',
                            children: (0, n.jsx)(d.tP, {
                                log: l,
                                guild: f,
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
