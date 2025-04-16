n.d(t, { Z: () => _ }), n(388685), n(953529), n(49124), n(539854), n(642613);
var r = n(200651),
    i = n(192379),
    s = n(392711),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(887580),
    d = n(389494),
    u = n(353926),
    m = n(430824),
    g = n(572004),
    p = n(878209),
    h = n(987338),
    f = n(516370);
function _() {
    let e = (0, l.cj)([u.Z], () => u.Z.getAllExperimentOverrideDescriptors()),
        t = (0, l.cj)([u.Z], () => u.Z.getRegisteredExperiments()),
        [n, s] = i.useState(''),
        a = (0, p.Ro)((0, p.Tc)((0, p.Cg)(t), e), n);
    return (0, r.jsxs)(o.hjN, {
        tag: o.RB0.H1,
        title: 'Experiments',
        children: [
            (0, r.jsx)(o.E1j, {
                size: o.E1j.Sizes.LARGE,
                query: n,
                onChange: s,
                onClear: () => s('')
            }),
            a.length > 0
                ? a.map((t) => {
                      let n = t.experiment.type === h.xY.GUILD ? N : b;
                      return (0, r.jsx)(
                          n,
                          {
                              experiment: t.experiment,
                              experimentId: t.id,
                              overrideDescriptor: e[t.id],
                              defaultOpen: null != e[t.id]
                          },
                          t.id
                      );
                  })
                : (0, r.jsx)('div', {
                      className: f.emptyState,
                      children: (0, r.jsx)(o.X6q, {
                          variant: 'heading-md/semibold',
                          children: 'No Experiments Found'
                      })
                  })
        ]
    });
}
function b(e) {
    var t;
    let { experiment: n, experimentId: s, overrideDescriptor: m, defaultOpen: p } = e,
        [_, b] = i.useState(p),
        [N, x] = i.useState(!1),
        E = i.useCallback(() => {
            b((e) => !e);
        }, []),
        j = (0, l.e7)([u.Z], () => u.Z.getUserExperimentDescriptor(s)),
        C = (0, l.e7)([u.Z], () => u.Z.getLoadedUserExperiment(s)),
        O = (0, l.Wu)([u.Z], () =>
            a()
                .sortBy(u.Z.getRecentExposures(h.xY.USER, s), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return ''.concat(new Date(n).toLocaleString(), ' (').concat(t, ')');
                })
        ),
        S = i.useCallback(
            (e) => {
                (0, g.JG)((0, c.sZ)(s), () => {
                    (0, o.showToast)({
                        id: 'experiment-link-copied',
                        message: 'Copied experiment link',
                        type: o.ToastType.SUCCESS
                    }),
                        e.preventDefault(),
                        e.stopPropagation();
                });
            },
            [s]
        ),
        v = (0, r.jsx)(o.kL8, {
            'aria-label': 'Toggle visibility',
            onClick: E,
            children: (0, r.jsxs)(o.vwX, {
                tag: o.RB0.H3,
                className: f.title,
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsxs)(o.Kqy, {
                                direction: 'horizontal',
                                align: 'center',
                                gap: 4,
                                children: [
                                    n.title,
                                    ' ',
                                    g.wS &&
                                        (0, r.jsx)(o.P3F, {
                                            onClick: S,
                                            children: (0, r.jsx)(o.xPt, { size: 'xs' })
                                        })
                                ]
                            }),
                            (0, r.jsx)(o.Text, {
                                color: 'text-muted',
                                variant: 'text-sm/normal',
                                children: s
                            })
                        ]
                    }),
                    (0, r.jsx)('span', {
                        className: f.experimentDate,
                        children: 'User'
                    })
                ]
            })
        });
    return _
        ? (0, r.jsxs)('div', {
              className: f.group,
              children: [
                  (0, r.jsxs)(o.hjN, {
                      children: [
                          v,
                          (0, r.jsxs)('div', {
                              children: [
                                  (0, r.jsx)(o.xJW, {
                                      title: 'Bucket Override',
                                      children: (0, r.jsx)(d.y, {
                                          experiment: n,
                                          experimentId: s,
                                          overrideDescriptor: m
                                      })
                                  }),
                                  'string' == typeof n.description
                                      ? (0, r.jsx)('div', {
                                            className: f.description,
                                            children: (0, r.jsx)(o.R94, {
                                                type: o.geA.DESCRIPTION,
                                                children: n.description
                                            })
                                        })
                                      : null
                              ]
                          }),
                          (0, r.jsxs)('div', {
                              className: f.description,
                              children: [
                                  (0, r.jsxs)(o.R94, {
                                      type: o.geA.DESCRIPTION,
                                      children: ['Current assigned to bucket ', null != (t = null == j ? void 0 : j.bucket) ? t : h.NZ.NOT_ELIGIBLE]
                                  }),
                                  null == C
                                      ? (0, r.jsx)(o.R94, {
                                            type: o.geA.DESCRIPTION,
                                            children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
                                        })
                                      : null
                              ]
                          }),
                          N
                              ? (0, r.jsxs)('div', {
                                    children: [
                                        (0, r.jsx)(o.vwX, {
                                            tag: 'h5',
                                            className: f.debugTitle,
                                            children: 'Server Descriptor'
                                        }),
                                        (0, r.jsx)(o.Text, {
                                            variant: 'code',
                                            className: f.pre,
                                            children: null == C ? 'None' : JSON.stringify(C, void 0, 2)
                                        }),
                                        (0, r.jsx)(o.vwX, {
                                            tag: 'h5',
                                            className: f.debugTitle,
                                            children: 'Override Descriptor'
                                        }),
                                        (0, r.jsx)(o.Text, {
                                            variant: 'code',
                                            className: f.pre,
                                            children: null == m ? 'None' : JSON.stringify(m, void 0, 2)
                                        }),
                                        (0, r.jsx)(o.vwX, {
                                            tag: 'h5',
                                            className: f.debugTitle,
                                            children: 'Recent Exposures'
                                        }),
                                        (0, r.jsx)(o.Text, {
                                            variant: 'code',
                                            className: f.pre,
                                            children: 0 === O.length ? 'None' : O.join('\n')
                                        })
                                    ]
                                })
                              : (0, r.jsx)(o.zxk, {
                                    className: f.debugButton,
                                    size: o.zxk.Sizes.SMALL,
                                    look: o.zxk.Looks.BLANK,
                                    onClick: () => x(!0),
                                    children: 'More Details \xBB'
                                })
                      ]
                  }),
                  (0, r.jsx)(o.$i$, { className: f.divider })
              ]
          })
        : (0, r.jsx)('div', {
              className: f.group,
              children: (0, r.jsx)(o.hjN, { children: v })
          });
}
function N(e) {
    let { experiment: t, experimentId: n, overrideDescriptor: s } = e,
        [c, g] = i.useState(null != s),
        [p, _] = i.useState(!1),
        b = i.useCallback(() => {
            g((e) => !e);
        }, []),
        N = (0, l.e7)([u.Z], () => u.Z.getLoadedGuildExperiment(n)),
        x = (0, l.Wu)([u.Z], () =>
            a()
                .sortBy(u.Z.getRecentExposures(h.xY.GUILD, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return ''.concat(new Date(n).toLocaleString(), ' (').concat(t, ')');
                })
        ),
        [E, j] = (0, l.Wu)([m.Z, u.Z], () => {
            let e = a().sortBy(a().values(m.Z.getGuilds()), (e) => e.name.toLowerCase()),
                t = {},
                r = [];
            for (let s of e) {
                var i;
                let e = u.Z.getGuildExperimentDescriptor(n, s.id),
                    a = null != (i = null == e ? void 0 : e.bucket) ? i : h.NZ.NOT_ELIGIBLE;
                a in t || (t[a] = 0), t[a]++, r.push(''.concat(s.name, ': ').concat(a));
            }
            let s = a()(t)
                .keys()
                .map(Number)
                .sort()
                .map((e) => ''.concat(t[e], ' guilds in bucket ').concat(e))
                .join(', ');
            return [r.join('\n'), s];
        }),
        C = (0, r.jsx)(o.P3F, {
            onClick: b,
            children: (0, r.jsxs)(o.vwX, {
                tag: o.RB0.H3,
                className: f.title,
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)('span', { children: t.title }),
                            (0, r.jsx)(o.Text, {
                                color: 'text-muted',
                                variant: 'text-sm/normal',
                                children: n
                            })
                        ]
                    }),
                    (0, r.jsx)('span', {
                        className: f.experimentDate,
                        children: 'Guild'
                    })
                ]
            })
        });
    return c
        ? (0, r.jsxs)('div', {
              className: f.group,
              children: [
                  (0, r.jsxs)(o.hjN, {
                      children: [
                          C,
                          (0, r.jsxs)('div', {
                              children: [
                                  (0, r.jsx)(o.xJW, {
                                      title: 'Bucket Override',
                                      children: (0, r.jsx)(d.y, {
                                          experiment: t,
                                          experimentId: n,
                                          overrideDescriptor: s
                                      })
                                  }),
                                  'string' == typeof t.description
                                      ? (0, r.jsx)('div', {
                                            className: f.description,
                                            children: (0, r.jsx)(o.R94, {
                                                type: o.geA.DESCRIPTION,
                                                children: t.description
                                            })
                                        })
                                      : null
                              ]
                          }),
                          (0, r.jsxs)('div', {
                              className: f.description,
                              children: [
                                  (0, r.jsxs)(o.R94, {
                                      type: o.geA.DESCRIPTION,
                                      children: ['Current Assignments: ', j]
                                  }),
                                  null == N
                                      ? (0, r.jsx)(o.R94, {
                                            type: o.geA.DESCRIPTION,
                                            children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
                                        })
                                      : null
                              ]
                          }),
                          p
                              ? (0, r.jsxs)('div', {
                                    children: [
                                        (0, r.jsx)(o.vwX, {
                                            tag: 'h5',
                                            className: f.debugTitle,
                                            children: 'Guild Assignments'
                                        }),
                                        (0, r.jsx)(o.Text, {
                                            variant: 'code',
                                            className: f.pre,
                                            children: E
                                        }),
                                        (0, r.jsx)(o.vwX, {
                                            tag: 'h5',
                                            className: f.debugTitle,
                                            children: 'Server Descriptor'
                                        }),
                                        (0, r.jsx)(o.Text, {
                                            variant: 'code',
                                            className: f.pre,
                                            children: null == N ? 'None' : JSON.stringify(N, void 0, 2)
                                        }),
                                        (0, r.jsx)(o.vwX, {
                                            tag: 'h5',
                                            className: f.debugTitle,
                                            children: 'Override Descriptor'
                                        }),
                                        (0, r.jsx)(o.Text, {
                                            variant: 'code',
                                            className: f.pre,
                                            children: null == s ? 'None' : JSON.stringify(s, void 0, 2)
                                        }),
                                        (0, r.jsx)(o.vwX, {
                                            tag: 'h5',
                                            className: f.debugTitle,
                                            children: 'Recent Exposures'
                                        }),
                                        (0, r.jsx)(o.Text, {
                                            variant: 'code',
                                            className: f.pre,
                                            children: 0 === x.length ? 'None' : x.join('\n')
                                        })
                                    ]
                                })
                              : (0, r.jsx)(o.zxk, {
                                    className: f.debugButton,
                                    size: o.zxk.Sizes.SMALL,
                                    look: o.zxk.Looks.BLANK,
                                    onClick: () => _(!0),
                                    children: 'More Details \xBB'
                                })
                      ]
                  }),
                  (0, r.jsx)(o.$i$, { className: f.divider })
              ]
          })
        : (0, r.jsx)('div', {
              className: f.group,
              children: (0, r.jsx)(o.hjN, { children: C })
          });
}
