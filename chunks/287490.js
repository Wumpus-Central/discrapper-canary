n.d(t, { Z: () => b }), n(388685), n(953529), n(49124), n(539854), n(642613);
var i = n(255367),
    r = n(73800),
    s = n(392711),
    l = n.n(s),
    a = n(442837),
    o = n(481060),
    c = n(887580),
    d = n(389494),
    u = n(353926),
    m = n(430824),
    p = n(572004),
    g = n(878209),
    h = n(987338),
    f = n(516370);
function b() {
    let e = (0, a.cj)([u.Z], () => u.Z.getAllExperimentOverrideDescriptors()),
        t = (0, a.cj)([u.Z], () => u.Z.getRegisteredExperiments()),
        [n, s] = r.useState(''),
        l = (0, g.Ro)((0, g.Tc)((0, g.Cg)(t), e), n);
    return (0, i.jsxs)(o.hjN, {
        tag: o.RB0.H1,
        title: 'Experiments',
        children: [
            (0, i.jsx)(o.E1j, {
                size: o.E1j.Sizes.LARGE,
                query: n,
                onChange: s,
                onClear: () => s('')
            }),
            l.length > 0
                ? l.map((t) => {
                      let n = t.experiment.type === h.xY.GUILD ? x : _;
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
                      className: f.emptyState,
                      children: (0, i.jsx)(o.X6q, {
                          variant: 'heading-md/semibold',
                          children: 'No Experiments Found'
                      })
                  })
        ]
    });
}
function _(e) {
    var t;
    let { experiment: n, experimentId: s, overrideDescriptor: m, defaultOpen: g } = e,
        [b, _] = r.useState(g),
        [x, E] = r.useState(!1),
        j = r.useCallback(() => {
            _((e) => !e);
        }, []),
        C = (0, a.e7)([u.Z], () => u.Z.getUserExperimentDescriptor(s)),
        O = (0, a.e7)([u.Z], () => u.Z.getLoadedUserExperiment(s)),
        S = (0, a.Wu)([u.Z], () =>
            l()
                .sortBy(u.Z.getRecentExposures(h.xY.USER, s), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return ''.concat(new Date(n).toLocaleString(), ' (').concat(t, ')');
                })
        ),
        v = r.useCallback(
            (e) => {
                (0, p.JG)((0, c.sZ)(s), () => {
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
        T = (0, i.jsx)(o.kL8, {
            'aria-label': 'Toggle visibility',
            onClick: j,
            children: (0, i.jsxs)(o.vwX, {
                tag: o.RB0.H3,
                className: f.title,
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsxs)(o.Kqy, {
                                direction: 'horizontal',
                                align: 'center',
                                gap: 4,
                                children: [
                                    n.title,
                                    ' ',
                                    p.wS &&
                                        (0, i.jsx)(o.P3F, {
                                            onClick: v,
                                            children: (0, i.jsx)(o.xPt, { size: 'xs' })
                                        })
                                ]
                            }),
                            (0, i.jsx)(o.Text, {
                                color: 'text-muted',
                                variant: 'text-sm/normal',
                                children: s
                            })
                        ]
                    }),
                    (0, i.jsx)('span', {
                        className: f.experimentDate,
                        children: 'User'
                    })
                ]
            })
        });
    return b
        ? (0, i.jsxs)('div', {
              className: f.group,
              children: [
                  (0, i.jsxs)(o.hjN, {
                      children: [
                          T,
                          (0, i.jsxs)('div', {
                              children: [
                                  (0, i.jsx)(o.xJW, {
                                      title: 'Bucket Override',
                                      children: (0, i.jsx)(d.y, {
                                          experiment: n,
                                          experimentId: s,
                                          overrideDescriptor: m
                                      })
                                  }),
                                  'string' == typeof n.description
                                      ? (0, i.jsx)('div', {
                                            className: f.description,
                                            children: (0, i.jsx)(o.R94, {
                                                type: o.geA.DESCRIPTION,
                                                children: n.description
                                            })
                                        })
                                      : null
                              ]
                          }),
                          (0, i.jsxs)('div', {
                              className: f.description,
                              children: [
                                  (0, i.jsxs)(o.R94, {
                                      type: o.geA.DESCRIPTION,
                                      children: ['Current assigned to bucket ', null != (t = null == C ? void 0 : C.bucket) ? t : h.NZ.NOT_ELIGIBLE]
                                  }),
                                  null == O
                                      ? (0, i.jsx)(o.R94, {
                                            type: o.geA.DESCRIPTION,
                                            children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
                                        })
                                      : null
                              ]
                          }),
                          x
                              ? (0, i.jsxs)('div', {
                                    children: [
                                        (0, i.jsx)(o.vwX, {
                                            tag: 'h5',
                                            className: f.debugTitle,
                                            children: 'Server Descriptor'
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            variant: 'code',
                                            className: f.pre,
                                            children: null == O ? 'None' : JSON.stringify(O, void 0, 2)
                                        }),
                                        (0, i.jsx)(o.vwX, {
                                            tag: 'h5',
                                            className: f.debugTitle,
                                            children: 'Override Descriptor'
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            variant: 'code',
                                            className: f.pre,
                                            children: null == m ? 'None' : JSON.stringify(m, void 0, 2)
                                        }),
                                        (0, i.jsx)(o.vwX, {
                                            tag: 'h5',
                                            className: f.debugTitle,
                                            children: 'Recent Exposures'
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            variant: 'code',
                                            className: f.pre,
                                            children: 0 === S.length ? 'None' : S.join('\n')
                                        })
                                    ]
                                })
                              : (0, i.jsx)(o.zxk, {
                                    className: f.debugButton,
                                    size: o.zxk.Sizes.SMALL,
                                    look: o.zxk.Looks.BLANK,
                                    onClick: () => E(!0),
                                    children: 'More Details \xBB'
                                })
                      ]
                  }),
                  (0, i.jsx)(o.$i$, { className: f.divider })
              ]
          })
        : (0, i.jsx)('div', {
              className: f.group,
              children: (0, i.jsx)(o.hjN, { children: T })
          });
}
function x(e) {
    let { experiment: t, experimentId: n, overrideDescriptor: s } = e,
        [c, p] = r.useState(null != s),
        [g, b] = r.useState(!1),
        _ = r.useCallback(() => {
            p((e) => !e);
        }, []),
        x = (0, a.e7)([u.Z], () => u.Z.getLoadedGuildExperiment(n)),
        E = (0, a.Wu)([u.Z], () =>
            l()
                .sortBy(u.Z.getRecentExposures(h.xY.GUILD, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return ''.concat(new Date(n).toLocaleString(), ' (').concat(t, ')');
                })
        ),
        [j, C] = (0, a.Wu)([m.Z, u.Z], () => {
            let e = l().sortBy(l().values(m.Z.getGuilds()), (e) => e.name.toLowerCase()),
                t = {},
                i = [];
            for (let s of e) {
                var r;
                let e = u.Z.getGuildExperimentDescriptor(n, s.id),
                    l = null != (r = null == e ? void 0 : e.bucket) ? r : h.NZ.NOT_ELIGIBLE;
                l in t || (t[l] = 0), t[l]++, i.push(''.concat(s.name, ': ').concat(l));
            }
            let s = l()(t)
                .keys()
                .map(Number)
                .sort()
                .map((e) => ''.concat(t[e], ' guilds in bucket ').concat(e))
                .join(', ');
            return [i.join('\n'), s];
        }),
        O = (0, i.jsx)(o.P3F, {
            onClick: _,
            children: (0, i.jsxs)(o.vwX, {
                tag: o.RB0.H3,
                className: f.title,
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)('span', { children: t.title }),
                            (0, i.jsx)(o.Text, {
                                color: 'text-muted',
                                variant: 'text-sm/normal',
                                children: n
                            })
                        ]
                    }),
                    (0, i.jsx)('span', {
                        className: f.experimentDate,
                        children: 'Guild'
                    })
                ]
            })
        });
    return c
        ? (0, i.jsxs)('div', {
              className: f.group,
              children: [
                  (0, i.jsxs)(o.hjN, {
                      children: [
                          O,
                          (0, i.jsxs)('div', {
                              children: [
                                  (0, i.jsx)(o.xJW, {
                                      title: 'Bucket Override',
                                      children: (0, i.jsx)(d.y, {
                                          experiment: t,
                                          experimentId: n,
                                          overrideDescriptor: s
                                      })
                                  }),
                                  'string' == typeof t.description
                                      ? (0, i.jsx)('div', {
                                            className: f.description,
                                            children: (0, i.jsx)(o.R94, {
                                                type: o.geA.DESCRIPTION,
                                                children: t.description
                                            })
                                        })
                                      : null
                              ]
                          }),
                          (0, i.jsxs)('div', {
                              className: f.description,
                              children: [
                                  (0, i.jsxs)(o.R94, {
                                      type: o.geA.DESCRIPTION,
                                      children: ['Current Assignments: ', C]
                                  }),
                                  null == x
                                      ? (0, i.jsx)(o.R94, {
                                            type: o.geA.DESCRIPTION,
                                            children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
                                        })
                                      : null
                              ]
                          }),
                          g
                              ? (0, i.jsxs)('div', {
                                    children: [
                                        (0, i.jsx)(o.vwX, {
                                            tag: 'h5',
                                            className: f.debugTitle,
                                            children: 'Guild Assignments'
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            variant: 'code',
                                            className: f.pre,
                                            children: j
                                        }),
                                        (0, i.jsx)(o.vwX, {
                                            tag: 'h5',
                                            className: f.debugTitle,
                                            children: 'Server Descriptor'
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            variant: 'code',
                                            className: f.pre,
                                            children: null == x ? 'None' : JSON.stringify(x, void 0, 2)
                                        }),
                                        (0, i.jsx)(o.vwX, {
                                            tag: 'h5',
                                            className: f.debugTitle,
                                            children: 'Override Descriptor'
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            variant: 'code',
                                            className: f.pre,
                                            children: null == s ? 'None' : JSON.stringify(s, void 0, 2)
                                        }),
                                        (0, i.jsx)(o.vwX, {
                                            tag: 'h5',
                                            className: f.debugTitle,
                                            children: 'Recent Exposures'
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            variant: 'code',
                                            className: f.pre,
                                            children: 0 === E.length ? 'None' : E.join('\n')
                                        })
                                    ]
                                })
                              : (0, i.jsx)(o.zxk, {
                                    className: f.debugButton,
                                    size: o.zxk.Sizes.SMALL,
                                    look: o.zxk.Looks.BLANK,
                                    onClick: () => b(!0),
                                    children: 'More Details \xBB'
                                })
                      ]
                  }),
                  (0, i.jsx)(o.$i$, { className: f.divider })
              ]
          })
        : (0, i.jsx)('div', {
              className: f.group,
              children: (0, i.jsx)(o.hjN, { children: O })
          });
}
