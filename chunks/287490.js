(n.d(t, { Z: () => v }), n(388685), n(953529), n(49124), n(539854), n(642613));
var i = n(255367),
    r = n(73800),
    s = n(392711),
    a = n.n(s),
    l = n(442837),
    o = n(755721),
    c = n(481060),
    d = n(887580),
    u = n(492435),
    m = n(389494),
    p = n(353926),
    g = n(667344),
    h = n(453032),
    f = n(493075),
    b = n(314897),
    x = n(430824),
    _ = n(572004),
    j = n(878209),
    C = n(987338),
    E = n(516370);
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function v() {
    let { experiments: e, overridesInfo: t } = (0, g.Q)(),
        { experiments: n, overridesInfo: s } = (0, f.s)(),
        a = r.useMemo(() => O({}, n, e), [n, e]),
        l = r.useMemo(() => O({}, s, t), [s, t]),
        [o, d] = r.useState(''),
        u = (0, j.Ro)((0, j.Tc)((0, j.Cg)(a), l), o);
    return (0, i.jsxs)(c.hjN, {
        tag: c.RB0.H1,
        title: 'Experiments',
        children: [
            (0, i.jsx)(c.E1j, {
                query: o,
                onChange: d,
                onClear: () => d('')
            }),
            u.length > 0
                ? u.map((e) => {
                      let t = 'guild' === e.experiment.kind ? T : S;
                      return (0, i.jsx)(
                          t,
                          {
                              experiment: e.experiment,
                              experimentId: e.id,
                              overrideInfo: l[e.id],
                              defaultOpen: null != l[e.id]
                          },
                          e.id
                      );
                  })
                : (0, i.jsx)('div', {
                      className: E.emptyState,
                      children: (0, i.jsx)(c.X6q, {
                          variant: 'heading-md/semibold',
                          children: 'No Experiments Found'
                      })
                  })
        ]
    });
}
function S(e) {
    let { experiment: t, experimentId: n, overrideInfo: s, defaultOpen: g } = e,
        [f, x] = r.useState(g),
        [j, O] = r.useState(!1),
        v = r.useCallback(() => {
            x((e) => !e);
        }, []),
        S = (0, l.e7)([b.default], () => b.default.getId()),
        T = (0, h.q)(t, S),
        N = (0, h.a)(t, S),
        I = (0, l.Wu)([p.Z], () =>
            a()
                .sortBy(p.Z.getRecentExposures(C.xY.USER, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return ''.concat(new Date(n).toLocaleString(), ' (').concat(t, ')');
                })
        ),
        y = r.useCallback(
            (e) => {
                (0, _.JG)((0, d.sZ)(n), () => {
                    ((0, c.showToast)({
                        id: 'experiment-link-copied',
                        message: 'Copied experiment link',
                        type: c.ToastType.SUCCESS
                    }),
                        e.preventDefault(),
                        e.stopPropagation());
                });
            },
            [n]
        ),
        A = (0, i.jsx)(c.kL8, {
            'aria-label': 'Toggle visibility',
            onClick: v,
            children: (0, i.jsxs)(c.vwX, {
                tag: c.RB0.H3,
                className: E.title,
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsxs)(c.Kqy, {
                                direction: 'horizontal',
                                align: 'center',
                                gap: 4,
                                children: [
                                    t.title,
                                    ' ',
                                    _.wS &&
                                        (0, i.jsx)(c.P3F, {
                                            onClick: y,
                                            children: (0, i.jsx)(c.xPt, { size: 'xs' })
                                        })
                                ]
                            }),
                            (0, i.jsx)(c.Text, {
                                color: 'text-muted',
                                variant: 'text-sm/normal',
                                children: n
                            })
                        ]
                    }),
                    (0, i.jsx)('span', {
                        className: E.experimentDate,
                        children: 'User'
                    })
                ]
            })
        });
    if (!f)
        return (0, i.jsx)('div', {
            className: E.group,
            children: (0, i.jsx)(c.hjN, { children: A })
        });
    let P = '';
    return (
        (P = t.system === u.I.LEGACY ? 'Currently assigned to bucket '.concat(null != T ? T : C.NZ.NOT_ELIGIBLE) : null != T ? 'Currently assigned to variant '.concat(T) : 'Currently unassigned'),
        (0, i.jsxs)('div', {
            className: E.group,
            children: [
                (0, i.jsxs)(c.hjN, {
                    children: [
                        A,
                        (0, i.jsx)('div', {
                            children: (0, i.jsx)(c.xJW, {
                                title: 'Bucket Override',
                                children: (0, i.jsx)(m.y, {
                                    experiment: t,
                                    experimentId: n,
                                    overrideInfo: s
                                })
                            })
                        }),
                        (0, i.jsxs)('div', {
                            className: E.description,
                            children: [
                                (0, i.jsx)(c.R94, {
                                    type: c.geA.DESCRIPTION,
                                    children: P
                                }),
                                null == N
                                    ? (0, i.jsx)(c.R94, {
                                          type: c.geA.DESCRIPTION,
                                          children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
                                      })
                                    : null
                            ]
                        }),
                        j
                            ? (0, i.jsxs)('div', {
                                  children: [
                                      (0, i.jsx)(c.vwX, {
                                          tag: 'h5',
                                          className: E.debugTitle,
                                          children: 'Server Descriptor'
                                      }),
                                      (0, i.jsx)(c.Text, {
                                          variant: 'code',
                                          className: E.pre,
                                          children: null == N ? 'None' : JSON.stringify(N, void 0, 2)
                                      }),
                                      (0, i.jsx)(c.vwX, {
                                          tag: 'h5',
                                          className: E.debugTitle,
                                          children: 'Override Descriptor'
                                      }),
                                      (0, i.jsx)(c.Text, {
                                          variant: 'code',
                                          className: E.pre,
                                          children: (null == s ? void 0 : s.originalDescriptor) == null ? 'None' : JSON.stringify(s.originalDescriptor, void 0, 2)
                                      }),
                                      (0, i.jsx)(c.vwX, {
                                          tag: 'h5',
                                          className: E.debugTitle,
                                          children: 'Recent Exposures'
                                      }),
                                      (0, i.jsx)(c.Text, {
                                          variant: 'code',
                                          className: E.pre,
                                          children: 0 === I.length ? 'None' : I.join('\n')
                                      })
                                  ]
                              })
                            : (0, i.jsx)(o.zx, {
                                  className: E.debugButton,
                                  size: o.zx.Sizes.SMALL,
                                  look: o.zx.Looks.BLANK,
                                  onClick: () => O(!0),
                                  children: 'More Details \xBB'
                              })
                    ]
                }),
                (0, i.jsx)(c.$i$, { className: E.divider })
            ]
        })
    );
}
function T(e) {
    let { experiment: t, experimentId: n, overrideInfo: s } = e,
        [d, u] = r.useState(null != s),
        [g, h] = r.useState(!1),
        f = r.useCallback(() => {
            u((e) => !e);
        }, []),
        b = (0, l.e7)([p.Z], () => p.Z.getLoadedGuildExperiment(n)),
        _ = (0, l.Wu)([p.Z], () =>
            a()
                .sortBy(p.Z.getRecentExposures(C.xY.GUILD, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return ''.concat(new Date(n).toLocaleString(), ' (').concat(t, ')');
                })
        ),
        [j, O] = (0, l.Wu)([x.Z, p.Z], () => {
            let e = a().sortBy(x.Z.getGuildsArray(), (e) => e.name.toLowerCase()),
                t = {},
                i = [];
            for (let s of e) {
                var r;
                let e = p.Z.getGuildExperimentDescriptor(n, s.id),
                    a = null != (r = null == e ? void 0 : e.bucket) ? r : C.NZ.NOT_ELIGIBLE;
                (a in t || (t[a] = 0), t[a]++, i.push(''.concat(s.name, ': ').concat(a)));
            }
            let s = a()(t)
                .keys()
                .map(Number)
                .sort()
                .map((e) => ''.concat(t[e], ' guilds in bucket ').concat(e))
                .join(', ');
            return [i.join('\n'), s];
        }),
        v = (0, i.jsx)(c.P3F, {
            onClick: f,
            children: (0, i.jsxs)(c.vwX, {
                tag: c.RB0.H3,
                className: E.title,
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)('span', { children: t.title }),
                            (0, i.jsx)(c.Text, {
                                color: 'text-muted',
                                variant: 'text-sm/normal',
                                children: n
                            })
                        ]
                    }),
                    (0, i.jsx)('span', {
                        className: E.experimentDate,
                        children: 'Guild'
                    })
                ]
            })
        });
    return d
        ? (0, i.jsxs)('div', {
              className: E.group,
              children: [
                  (0, i.jsxs)(c.hjN, {
                      children: [
                          v,
                          (0, i.jsx)('div', {
                              children: (0, i.jsx)(c.xJW, {
                                  title: 'Bucket Override',
                                  children: (0, i.jsx)(m.y, {
                                      experiment: t,
                                      experimentId: n,
                                      overrideInfo: s
                                  })
                              })
                          }),
                          (0, i.jsxs)('div', {
                              className: E.description,
                              children: [
                                  (0, i.jsxs)(c.R94, {
                                      type: c.geA.DESCRIPTION,
                                      children: ['Current Assignments: ', O]
                                  }),
                                  null == b
                                      ? (0, i.jsx)(c.R94, {
                                            type: c.geA.DESCRIPTION,
                                            children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
                                        })
                                      : null
                              ]
                          }),
                          g
                              ? (0, i.jsxs)('div', {
                                    children: [
                                        (0, i.jsx)(c.vwX, {
                                            tag: 'h5',
                                            className: E.debugTitle,
                                            children: 'Guild Assignments'
                                        }),
                                        (0, i.jsx)(c.Text, {
                                            variant: 'code',
                                            className: E.pre,
                                            children: j
                                        }),
                                        (0, i.jsx)(c.vwX, {
                                            tag: 'h5',
                                            className: E.debugTitle,
                                            children: 'Server Descriptor'
                                        }),
                                        (0, i.jsx)(c.Text, {
                                            variant: 'code',
                                            className: E.pre,
                                            children: null == b ? 'None' : JSON.stringify(b, void 0, 2)
                                        }),
                                        (0, i.jsx)(c.vwX, {
                                            tag: 'h5',
                                            className: E.debugTitle,
                                            children: 'Override Descriptor'
                                        }),
                                        (0, i.jsx)(c.Text, {
                                            variant: 'code',
                                            className: E.pre,
                                            children: (null == s ? void 0 : s.originalDescriptor) == null ? 'None' : JSON.stringify(s.originalDescriptor, void 0, 2)
                                        }),
                                        (0, i.jsx)(c.vwX, {
                                            tag: 'h5',
                                            className: E.debugTitle,
                                            children: 'Recent Exposures'
                                        }),
                                        (0, i.jsx)(c.Text, {
                                            variant: 'code',
                                            className: E.pre,
                                            children: 0 === _.length ? 'None' : _.join('\n')
                                        })
                                    ]
                                })
                              : (0, i.jsx)(o.zx, {
                                    className: E.debugButton,
                                    size: o.zx.Sizes.SMALL,
                                    look: o.zx.Looks.BLANK,
                                    onClick: () => h(!0),
                                    children: 'More Details \xBB'
                                })
                      ]
                  }),
                  (0, i.jsx)(c.$i$, { className: E.divider })
              ]
          })
        : (0, i.jsx)('div', {
              className: E.group,
              children: (0, i.jsx)(c.hjN, { children: v })
          });
}
