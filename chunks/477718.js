n.d(t, { Z: () => I });
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
    v = n(5192),
    y = n(776767),
    x = n(981631),
    j = n(388032),
    O = n(181353),
    N = n(687420),
    E = n(211971);
function P(e) {
    var t;
    let { log: n, member: l, guild: a } = e,
        { analyticsLocations: d } = (0, p.ZP)(),
        m = g.nm(n),
        C = g.QM(n),
        y = null === (t = g.V$(x.zUn.REASON, n)) || void 0 === t ? void 0 : t.newValue,
        E = g.J5(n),
        P = (0, h.LJ)(n.id),
        I = (0, c.e7)([_.ZP], () => (null != n.userId ? _.ZP.getMember(l.guildId, n.userId) : null), [l.guildId, n.userId]),
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
                                  onClick: S(I),
                                  onMouseEnter: i,
                                  onMouseLeave: o,
                                  children: (0, r.jsxs)(u.Text, {
                                      variant: 'text-sm/medium',
                                      tag: 'span',
                                      children: [
                                          '@',
                                          (0, r.jsx)(u.PUh, {
                                              name: v.ZP.getName(l.guildId, null, n.user),
                                              color: null !== (t = null == I ? void 0 : I.colorString) && void 0 !== t ? t : void 0
                                          })
                                      ]
                                  })
                              });
                          }
                      }),
            [S, n.user, l.guildId, I]
        )();
    return (0, r.jsxs)('div', {
        className: o()(N.modInfoItem, O.auditLogItem),
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
                            children: P
                        })
                    })
                ]
            }),
            null != y &&
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
                                children: y
                            })
                        ]
                    })
                }),
            null == y &&
                null != E &&
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
                                children: E
                            })
                        ]
                    })
                }),
            null == y &&
                null == E &&
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
function I(e) {
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
        (async function (e, t) {
            await d.gV(t, e);
        })(t.guildId, t.userId);
    }, [t.guildId, t.userId]),
    null == n || 0 === l.length)
        ? null
        : (0, r.jsx)(u.xJW, {
              title: j.NW.string(j.t.flCxLi),
              titleClassName: E.infoTitle,
              children:
                  l.length > 0
                      ? (0, r.jsx)(y.WM, {
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
