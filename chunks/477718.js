n.d(t, { Z: () => S });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(913527),
    s = n.n(a),
    c = n(399606),
    u = n(481060),
    d = n(480137),
    p = n(906732),
    h = n(376923),
    f = n(472596),
    m = n(987707),
    g = n(909746),
    b = n(501801),
    _ = n(884902),
    C = n(271383),
    y = n(430824),
    x = n(5192),
    v = n(776767),
    j = n(981631),
    O = n(388032),
    E = n(54433),
    N = n(44946),
    I = n(12740);
function P(e) {
    var t;
    let { log: n, member: l, guild: a } = e,
        { analyticsLocations: d } = (0, p.ZP)(),
        m = g.nm(n),
        y = g.QM(n),
        v = null == (t = g.V$(j.zUn.REASON, n)) ? void 0 : t.newValue,
        I = g.J5(n),
        P = (0, h.LJ)(n.id),
        S = (0, c.e7)([C.ZP], () => (null != n.userId ? C.ZP.getMember(l.guildId, n.userId) : null), [l.guildId, n.userId]),
        Z = (0, _.E)(null == S ? void 0 : S.guildId, null == S ? void 0 : S.colorStrings),
        T = i.useCallback(
            (e) => (t) => {
                t.preventDefault(), t.stopPropagation(), null != e && (0, f.RE)(e, d);
            },
            [d]
        ),
        A = i.useCallback(
            () =>
                null == n.user
                    ? null
                    : (0, r.jsx)(u.ua7, {
                          text: O.NW.string(O.t.mvsi9v),
                          children: (e) => {
                              var t;
                              let { onMouseEnter: i, onMouseLeave: o } = e;
                              return (0, r.jsx)(u.P3F, {
                                  tag: 'span',
                                  className: E.username,
                                  onClick: T(S),
                                  onMouseEnter: i,
                                  onMouseLeave: o,
                                  children: (0, r.jsxs)(u.Text, {
                                      variant: 'text-sm/medium',
                                      tag: 'span',
                                      children: [
                                          '@',
                                          (0, r.jsx)(u.PUh, {
                                              name: x.ZP.getName(l.guildId, null, n.user),
                                              color: null != (t = null == S ? void 0 : S.colorString) ? t : void 0,
                                              roleGradient: Z
                                          })
                                      ]
                                  })
                              });
                          }
                      }),
            [T, n.user, l.guildId, S, Z]
        )();
    return (0, r.jsxs)('div', {
        className: o()(N.modInfoItem, E.auditLogItem),
        children: [
            (0, r.jsxs)('div', {
                className: E.auditLogItemTitleContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: E.auditLogItemTitle,
                        children: [
                            null != m &&
                                (0, r.jsx)(u.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'header-primary',
                                    children: m
                                }),
                            null != y &&
                                (0, r.jsxs)(u.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    children: ['(', 'string' == typeof y ? y : s()(y).fromNow(), ')']
                                })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: E.auditLogItemDate,
                        children: (0, r.jsx)(u.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-primary',
                            children: P
                        })
                    })
                ]
            }),
            null != v &&
                (0, r.jsx)('div', {
                    className: E.auditLogSecondaryContainer,
                    children: (0, r.jsxs)('div', {
                        className: E.auditLogReason,
                        children: [
                            A,
                            (0, r.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                tag: 'span',
                                children: v
                            })
                        ]
                    })
                }),
            null == v &&
                null != I &&
                (0, r.jsx)('div', {
                    className: E.auditLogSecondaryContainer,
                    children: (0, r.jsxs)('div', {
                        className: E.auditLogSecondary,
                        children: [
                            A,
                            (0, r.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                tag: 'span',
                                children: I
                            })
                        ]
                    })
                }),
            null == v &&
                null == I &&
                (0, r.jsx)('div', {
                    className: E.auditLogSecondaryContainer,
                    children: (0, r.jsx)('div', {
                        className: E.auditLogSecondary,
                        children: (0, r.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            tag: 'span',
                            children: (0, r.jsx)(b.tP, {
                                log: n,
                                guild: a,
                                onContentClick: () => {},
                                className: E.auditLogExpandedChangeDetails
                            })
                        })
                    })
                })
        ]
    });
}
function S(e) {
    let { member: t } = e,
        n = (0, c.e7)([y.Z], () => y.Z.getGuild(t.guildId), [t.guildId]),
        l = (0, c.e7)(
            [m.Z],
            () => {
                let e = m.Z.logs;
                return null == e || null == n ? [] : g._$(e, n);
            },
            [n]
        );
    return (i.useEffect(() => {
        !(async function (e, t) {
            await d.gV(t, e);
        })(t.guildId, t.userId);
    }, [t.guildId, t.userId]),
    null == n || 0 === l.length)
        ? null
        : (0, r.jsx)(u.xJW, {
              title: O.NW.string(O.t.flCxLi),
              titleClassName: I.infoTitle,
              children:
                  l.length > 0
                      ? (0, r.jsx)(v.WM, {
                            children: l.map((e) =>
                                (0, r.jsx)(
                                    P,
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
