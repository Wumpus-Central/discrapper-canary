n.d(t, { Z: () => L });
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
    N = n(271383),
    O = n(430824),
    f = n(5192),
    R = n(776767),
    S = n(981631),
    C = n(388032),
    h = n(54433),
    p = n(44946),
    D = n(12740);
function U(e) {
    var t, n;
    let { log: i, member: a, guild: E } = e,
        { analyticsLocations: T } = (0, d.ZP)(),
        O = I.nm(i),
        R = I.QM(i),
        D = null == (t = I.V$(S.zUn.REASON, i)) ? void 0 : t.newValue,
        U = I.J5(i),
        L = (0, _.LJ)(i.id),
        v = (0, u.e7)([N.ZP], () => (null != i.userId ? N.ZP.getMember(a.guildId, i.userId) : null), [a.guildId, i.userId]),
        b = (0, m.X7)(null == v ? void 0 : v.guildId, null == v ? void 0 : v.userId, null != (n = null == v ? void 0 : v.colorStrings) ? n : null),
        M = l.useCallback(
            (e) => (t) => {
                (t.preventDefault(), t.stopPropagation(), null != e && (0, A.RE)(e, T));
            },
            [T]
        ),
        x = l.useCallback(
            () =>
                null == i.user
                    ? null
                    : (0, r.jsx)(c.ua7, {
                          text: C.intl.string(C.t.mvsi9v),
                          children: (e) => {
                              var t;
                              let { onMouseEnter: n, onMouseLeave: l } = e;
                              return (0, r.jsx)(c.P3F, {
                                  tag: 'span',
                                  className: h.username,
                                  onClick: M(v),
                                  onMouseEnter: n,
                                  onMouseLeave: l,
                                  children: (0, r.jsxs)(c.Text, {
                                      variant: 'text-sm/medium',
                                      tag: 'span',
                                      children: [
                                          '@',
                                          (0, r.jsx)(c.PUh, {
                                              name: f.ZP.getName(a.guildId, null, i.user),
                                              colorString: null != (t = null == v ? void 0 : v.colorString) ? t : null,
                                              colorStrings: b
                                          })
                                      ]
                                  })
                              });
                          }
                      }),
            [M, i.user, a.guildId, v, b]
        )();
    return (0, r.jsxs)('div', {
        className: s()(p.modInfoItem, h.auditLogItem),
        children: [
            (0, r.jsxs)('div', {
                className: h.auditLogItemTitleContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: h.auditLogItemTitle,
                        children: [
                            null != O &&
                                (0, r.jsx)(c.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'header-primary',
                                    children: O
                                }),
                            null != R &&
                                (0, r.jsxs)(c.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    children: ['(', 'string' == typeof R ? R : o()(R).fromNow(), ')']
                                })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: h.auditLogItemDate,
                        children: (0, r.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-primary',
                            children: L
                        })
                    })
                ]
            }),
            null != D &&
                (0, r.jsx)('div', {
                    className: h.auditLogSecondaryContainer,
                    children: (0, r.jsxs)('div', {
                        className: h.auditLogReason,
                        children: [
                            x,
                            (0, r.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                tag: 'span',
                                children: D
                            })
                        ]
                    })
                }),
            null == D &&
                null != U &&
                (0, r.jsx)('div', {
                    className: h.auditLogSecondaryContainer,
                    children: (0, r.jsxs)('div', {
                        className: h.auditLogSecondary,
                        children: [
                            x,
                            (0, r.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                tag: 'span',
                                children: U
                            })
                        ]
                    })
                }),
            null == D &&
                null == U &&
                (0, r.jsx)('div', {
                    className: h.auditLogSecondaryContainer,
                    children: (0, r.jsx)('div', {
                        className: h.auditLogSecondary,
                        children: (0, r.jsx)(c.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            tag: 'span',
                            children: (0, r.jsx)(g.tP, {
                                log: i,
                                guild: E,
                                onContentClick: () => {},
                                className: h.auditLogExpandedChangeDetails
                            })
                        })
                    })
                })
        ]
    });
}
function L(e) {
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
              title: C.intl.string(C.t.flCxLi),
              titleClassName: D.infoTitle,
              children:
                  i.length > 0
                      ? (0, r.jsx)(R.WM, {
                            children: i.map((e) =>
                                (0, r.jsx)(
                                    U,
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
