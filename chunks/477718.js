n.d(t, { Z: () => P });
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
    _ = n(271383),
    C = n(430824),
    y = n(5192),
    x = n(776767),
    v = n(981631),
    j = n(388032),
    O = n(54433),
    E = n(44946),
    N = n(12740);
function I(e) {
    var t;
    let { log: n, member: l, guild: a } = e,
        { analyticsLocations: d } = (0, p.ZP)(),
        m = g.nm(n),
        C = g.QM(n),
        x = null == (t = g.V$(v.zUn.REASON, n)) ? void 0 : t.newValue,
        N = g.J5(n),
        I = (0, h.LJ)(n.id),
        P = (0, c.e7)([_.ZP], () => (null != n.userId ? _.ZP.getMember(l.guildId, n.userId) : null), [l.guildId, n.userId]),
        S = i.useCallback(
            (e) => (t) => {
                t.preventDefault(), t.stopPropagation(), null != e && (0, f.RE)(e, d);
            },
            [d]
        ),
        Z = i.useCallback(
            () =>
                null == n.user
                    ? null
                    : (0, r.jsx)(u.ua7, {
                          text: j.NW.string(j.t.mvsi9v),
                          children: (e) => {
                              var t;
                              let { onMouseEnter: i, onMouseLeave: o } = e;
                              return (0, r.jsx)(u.P3F, {
                                  tag: 'span',
                                  className: O.username,
                                  onClick: S(P),
                                  onMouseEnter: i,
                                  onMouseLeave: o,
                                  children: (0, r.jsxs)(u.Text, {
                                      variant: 'text-sm/medium',
                                      tag: 'span',
                                      children: [
                                          '@',
                                          (0, r.jsx)(u.PUh, {
                                              name: y.ZP.getName(l.guildId, null, n.user),
                                              color: null != (t = null == P ? void 0 : P.colorString) ? t : void 0
                                          })
                                      ]
                                  })
                              });
                          }
                      }),
            [S, n.user, l.guildId, P]
        )();
    return (0, r.jsxs)('div', {
        className: o()(E.modInfoItem, O.auditLogItem),
        children: [
            (0, r.jsxs)('div', {
                className: O.auditLogItemTitleContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: O.auditLogItemTitle,
                        children: [
                            null != m &&
                                (0, r.jsx)(u.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'header-primary',
                                    children: m
                                }),
                            null != C &&
                                (0, r.jsxs)(u.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    children: ['(', 'string' == typeof C ? C : s()(C).fromNow(), ')']
                                })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: O.auditLogItemDate,
                        children: (0, r.jsx)(u.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-primary',
                            children: I
                        })
                    })
                ]
            }),
            null != x &&
                (0, r.jsx)('div', {
                    className: O.auditLogSecondaryContainer,
                    children: (0, r.jsxs)('div', {
                        className: O.auditLogReason,
                        children: [
                            Z,
                            (0, r.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                tag: 'span',
                                children: x
                            })
                        ]
                    })
                }),
            null == x &&
                null != N &&
                (0, r.jsx)('div', {
                    className: O.auditLogSecondaryContainer,
                    children: (0, r.jsxs)('div', {
                        className: O.auditLogSecondary,
                        children: [
                            Z,
                            (0, r.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                tag: 'span',
                                children: N
                            })
                        ]
                    })
                }),
            null == x &&
                null == N &&
                (0, r.jsx)('div', {
                    className: O.auditLogSecondaryContainer,
                    children: (0, r.jsx)('div', {
                        className: O.auditLogSecondary,
                        children: (0, r.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            tag: 'span',
                            children: (0, r.jsx)(b.tP, {
                                log: n,
                                guild: a,
                                onContentClick: () => {},
                                className: O.auditLogExpandedChangeDetails
                            })
                        })
                    })
                })
        ]
    });
}
function P(e) {
    let { member: t } = e,
        n = (0, c.e7)([C.Z], () => C.Z.getGuild(t.guildId), [t.guildId]),
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
              title: j.NW.string(j.t.flCxLi),
              titleClassName: N.infoTitle,
              children:
                  l.length > 0
                      ? (0, r.jsx)(x.WM, {
                            children: l.map((e) =>
                                (0, r.jsx)(
                                    I,
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
