(n.d(t, { Z: () => x }), n(388685), n(953529), n(49124), n(539854), n(642613));
var i = n(255367),
    r = n(73800),
    s = n(392711),
    a = n.n(s),
    l = n(442837),
    o = n(755721),
    c = n(481060),
    d = n(887580),
    u = n(389494),
    m = n(353926),
    p = n(430824),
    g = n(572004),
    h = n(878209),
    f = n(987338),
    b = n(516370);
function x() {
    let e = (0, l.cj)([m.Z], () => m.Z.getAllExperimentOverrideDescriptors()),
        t = (0, l.cj)([m.Z], () => m.Z.getRegisteredExperiments()),
        [n, s] = r.useState(''),
        a = (0, h.Ro)((0, h.Tc)((0, h.Cg)(t), e), n);
    return (0, i.jsxs)(c.hjN, {
        tag: c.RB0.H1,
        title: 'Experiments',
        children: [
            (0, i.jsx)(c.E1j, {
                size: c.E1j.Sizes.LARGE,
                query: n,
                onChange: s,
                onClear: () => s('')
            }),
            a.length > 0
                ? a.map((t) => {
                      let n = t.experiment.type === f.xY.GUILD ? j : _;
                      return (0, i.jsx)(
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
                : (0, i.jsx)('div', {
                      className: b.emptyState,
                      children: (0, i.jsx)(c.X6q, {
                          variant: 'heading-md/semibold',
                          children: 'No Experiments Found'
                      })
                  })
        ]
    });
}
function _(e) {
    var t;
    let { experiment: n, experimentId: s, overrideDescriptor: p, defaultOpen: h } = e,
        [x, _] = r.useState(h),
        [j, E] = r.useState(!1),
        O = r.useCallback(() => {
            _((e) => !e);
        }, []),
        C = (0, l.e7)([m.Z], () => m.Z.getUserExperimentDescriptor(s)),
        v = (0, l.e7)([m.Z], () => m.Z.getLoadedUserExperiment(s)),
        S = (0, l.Wu)([m.Z], () =>
            a()
                .sortBy(m.Z.getRecentExposures(f.xY.USER, s), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return ''.concat(new Date(n).toLocaleString(), ' (').concat(t, ')');
                })
        ),
        T = r.useCallback(
            (e) => {
                (0, g.JG)((0, d.sZ)(s), () => {
                    ((0, c.showToast)({
                        id: 'experiment-link-copied',
                        message: 'Copied experiment link',
                        type: c.ToastType.SUCCESS
                    }),
                        e.preventDefault(),
                        e.stopPropagation());
                });
            },
            [s]
        ),
        N = (0, i.jsx)(c.kL8, {
            'aria-label': 'Toggle visibility',
            onClick: O,
            children: (0, i.jsxs)(c.vwX, {
                tag: c.RB0.H3,
                className: b.title,
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsxs)(c.Kqy, {
                                direction: 'horizontal',
                                align: 'center',
                                gap: 4,
                                children: [
                                    n.title,
                                    ' ',
                                    g.wS &&
                                        (0, i.jsx)(c.P3F, {
                                            onClick: T,
                                            children: (0, i.jsx)(c.xPt, { size: 'xs' })
                                        })
                                ]
                            }),
                            (0, i.jsx)(c.Text, {
                                color: 'text-muted',
                                variant: 'text-sm/normal',
                                children: s
                            })
                        ]
                    }),
                    (0, i.jsx)('span', {
                        className: b.experimentDate,
                        children: 'User'
                    })
                ]
            })
        });
    return x
        ? (0, i.jsxs)('div', {
              className: b.group,
              children: [
                  (0, i.jsxs)(c.hjN, {
                      children: [
                          N,
                          (0, i.jsxs)('div', {
                              children: [
                                  (0, i.jsx)(c.xJW, {
                                      title: 'Bucket Override',
                                      children: (0, i.jsx)(u.y, {
                                          experiment: n,
                                          experimentId: s,
                                          overrideDescriptor: p
                                      })
                                  }),
                                  'string' == typeof n.description
                                      ? (0, i.jsx)('div', {
                                            className: b.description,
                                            children: (0, i.jsx)(c.R94, {
                                                type: c.geA.DESCRIPTION,
                                                children: n.description
                                            })
                                        })
                                      : null
                              ]
                          }),
                          (0, i.jsxs)('div', {
                              className: b.description,
                              children: [
                                  (0, i.jsxs)(c.R94, {
                                      type: c.geA.DESCRIPTION,
                                      children: ['Current assigned to bucket ', null != (t = null == C ? void 0 : C.bucket) ? t : f.NZ.NOT_ELIGIBLE]
                                  }),
                                  null == v
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
                                            className: b.debugTitle,
                                            children: 'Server Descriptor'
                                        }),
                                        (0, i.jsx)(c.Text, {
                                            variant: 'code',
                                            className: b.pre,
                                            children: null == v ? 'None' : JSON.stringify(v, void 0, 2)
                                        }),
                                        (0, i.jsx)(c.vwX, {
                                            tag: 'h5',
                                            className: b.debugTitle,
                                            children: 'Override Descriptor'
                                        }),
                                        (0, i.jsx)(c.Text, {
                                            variant: 'code',
                                            className: b.pre,
                                            children: null == p ? 'None' : JSON.stringify(p, void 0, 2)
                                        }),
                                        (0, i.jsx)(c.vwX, {
                                            tag: 'h5',
                                            className: b.debugTitle,
                                            children: 'Recent Exposures'
                                        }),
                                        (0, i.jsx)(c.Text, {
                                            variant: 'code',
                                            className: b.pre,
                                            children: 0 === S.length ? 'None' : S.join('\n')
                                        })
                                    ]
                                })
                              : (0, i.jsx)(o.zx, {
                                    className: b.debugButton,
                                    size: o.zx.Sizes.SMALL,
                                    look: o.zx.Looks.BLANK,
                                    onClick: () => E(!0),
                                    children: 'More Details \xBB'
                                })
                      ]
                  }),
                  (0, i.jsx)(c.$i$, { className: b.divider })
              ]
          })
        : (0, i.jsx)('div', {
              className: b.group,
              children: (0, i.jsx)(c.hjN, { children: N })
          });
}
function j(e) {
    let { experiment: t, experimentId: n, overrideDescriptor: s } = e,
        [d, g] = r.useState(null != s),
        [h, x] = r.useState(!1),
        _ = r.useCallback(() => {
            g((e) => !e);
        }, []),
        j = (0, l.e7)([m.Z], () => m.Z.getLoadedGuildExperiment(n)),
        E = (0, l.Wu)([m.Z], () =>
            a()
                .sortBy(m.Z.getRecentExposures(f.xY.GUILD, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return ''.concat(new Date(n).toLocaleString(), ' (').concat(t, ')');
                })
        ),
        [O, C] = (0, l.Wu)([p.Z, m.Z], () => {
            let e = a().sortBy(p.Z.getGuildsArray(), (e) => e.name.toLowerCase()),
                t = {},
                i = [];
            for (let s of e) {
                var r;
                let e = m.Z.getGuildExperimentDescriptor(n, s.id),
                    a = null != (r = null == e ? void 0 : e.bucket) ? r : f.NZ.NOT_ELIGIBLE;
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
            onClick: _,
            children: (0, i.jsxs)(c.vwX, {
                tag: c.RB0.H3,
                className: b.title,
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
                        className: b.experimentDate,
                        children: 'Guild'
                    })
                ]
            })
        });
    return d
        ? (0, i.jsxs)('div', {
              className: b.group,
              children: [
                  (0, i.jsxs)(c.hjN, {
                      children: [
                          v,
                          (0, i.jsxs)('div', {
                              children: [
                                  (0, i.jsx)(c.xJW, {
                                      title: 'Bucket Override',
                                      children: (0, i.jsx)(u.y, {
                                          experiment: t,
                                          experimentId: n,
                                          overrideDescriptor: s
                                      })
                                  }),
                                  'string' == typeof t.description
                                      ? (0, i.jsx)('div', {
                                            className: b.description,
                                            children: (0, i.jsx)(c.R94, {
                                                type: c.geA.DESCRIPTION,
                                                children: t.description
                                            })
                                        })
                                      : null
                              ]
                          }),
                          (0, i.jsxs)('div', {
                              className: b.description,
                              children: [
                                  (0, i.jsxs)(c.R94, {
                                      type: c.geA.DESCRIPTION,
                                      children: ['Current Assignments: ', C]
                                  }),
                                  null == j
                                      ? (0, i.jsx)(c.R94, {
                                            type: c.geA.DESCRIPTION,
                                            children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
                                        })
                                      : null
                              ]
                          }),
                          h
                              ? (0, i.jsxs)('div', {
                                    children: [
                                        (0, i.jsx)(c.vwX, {
                                            tag: 'h5',
                                            className: b.debugTitle,
                                            children: 'Guild Assignments'
                                        }),
                                        (0, i.jsx)(c.Text, {
                                            variant: 'code',
                                            className: b.pre,
                                            children: O
                                        }),
                                        (0, i.jsx)(c.vwX, {
                                            tag: 'h5',
                                            className: b.debugTitle,
                                            children: 'Server Descriptor'
                                        }),
                                        (0, i.jsx)(c.Text, {
                                            variant: 'code',
                                            className: b.pre,
                                            children: null == j ? 'None' : JSON.stringify(j, void 0, 2)
                                        }),
                                        (0, i.jsx)(c.vwX, {
                                            tag: 'h5',
                                            className: b.debugTitle,
                                            children: 'Override Descriptor'
                                        }),
                                        (0, i.jsx)(c.Text, {
                                            variant: 'code',
                                            className: b.pre,
                                            children: null == s ? 'None' : JSON.stringify(s, void 0, 2)
                                        }),
                                        (0, i.jsx)(c.vwX, {
                                            tag: 'h5',
                                            className: b.debugTitle,
                                            children: 'Recent Exposures'
                                        }),
                                        (0, i.jsx)(c.Text, {
                                            variant: 'code',
                                            className: b.pre,
                                            children: 0 === E.length ? 'None' : E.join('\n')
                                        })
                                    ]
                                })
                              : (0, i.jsx)(o.zx, {
                                    className: b.debugButton,
                                    size: o.zx.Sizes.SMALL,
                                    look: o.zx.Looks.BLANK,
                                    onClick: () => x(!0),
                                    children: 'More Details \xBB'
                                })
                      ]
                  }),
                  (0, i.jsx)(c.$i$, { className: b.divider })
              ]
          })
        : (0, i.jsx)('div', {
              className: b.group,
              children: (0, i.jsx)(c.hjN, { children: v })
          });
}
