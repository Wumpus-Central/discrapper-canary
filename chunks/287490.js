n.d(t, { Z: () => p }), n(47120), n(653041);
var i = n(200651),
    s = n(192379),
    l = n(392711),
    r = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(492435),
    d = n(353926),
    u = n(430824),
    h = n(499533),
    m = n(878209),
    g = n(987338),
    x = n(53453);
function _(e, t) {
    return e.map((e, n) => ({
        label: 'object' == typeof t ? t[n] : h.Z.getExperimentBucketName(e),
        value: e
    }));
}
function p() {
    let e = (0, a.cj)([d.Z], () => d.Z.getAllExperimentOverrideDescriptors()),
        t = (0, a.cj)([d.Z], () => d.Z.getRegisteredExperiments()),
        [n, l] = s.useState(''),
        r = (0, m.Ro)((0, m.Tc)((0, m.Cg)(t), e), n);
    return (0, i.jsxs)(o.hjN, {
        tag: o.RB0.H1,
        title: 'Experiments',
        children: [
            (0, i.jsx)(o.E1j, {
                size: o.E1j.Sizes.LARGE,
                query: n,
                onChange: l,
                onClear: () => l('')
            }),
            r.length > 0
                ? r.map((t) => {
                      let n = t.experiment.type === g.xY.GUILD ? C : E;
                      return (0, i.jsx)(
                          n,
                          {
                              experiment: t.experiment,
                              experimentId: t.id,
                              overrideDescriptor: e[t.id]
                          },
                          t.id
                      );
                  })
                : (0, i.jsx)('div', {
                      className: x.emptyState,
                      children: (0, i.jsx)(o.X6q, {
                          variant: 'heading-md/semibold',
                          children: 'No Experiments Found'
                      })
                  })
        ]
    });
}
function E(e) {
    var t;
    let { experiment: n, experimentId: l, overrideDescriptor: u } = e,
        [h, m] = s.useState(null != u),
        [p, E] = s.useState(!1),
        C = s.useCallback(() => {
            m((e) => !e);
        }, []),
        N = (0, a.e7)([d.Z], () => d.Z.getUserExperimentDescriptor(l)),
        f = (0, a.e7)([d.Z], () => d.Z.getLoadedUserExperiment(l)),
        I = (0, a.Wu)([d.Z], () =>
            r()
                .sortBy(d.Z.getRecentExposures(g.xY.USER, l), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return ''.concat(new Date(n).toLocaleString(), ' (').concat(t, ')');
                })
        ),
        T = (0, i.jsx)(o.P3F, {
            onClick: C,
            children: (0, i.jsxs)(o.vwX, {
                tag: o.RB0.H3,
                className: x.title,
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)('span', { children: n.title }),
                            (0, i.jsx)(o.Text, {
                                color: 'text-muted',
                                variant: 'text-sm/normal',
                                children: l
                            })
                        ]
                    }),
                    (0, i.jsx)('span', {
                        className: x.experimentDate,
                        children: 'User'
                    })
                ]
            })
        });
    return h
        ? (0, i.jsxs)('div', {
              className: x.group,
              children: [
                  (0, i.jsxs)(o.hjN, {
                      children: [
                          T,
                          (0, i.jsxs)('div', {
                              children: [
                                  (0, i.jsx)(o.xJW, {
                                      title: 'Bucket Override',
                                      children: (0, i.jsx)(o.q4e, {
                                          value: null != u ? u.bucket : null,
                                          clearable: null != u,
                                          options: _(n.buckets, n.description),
                                          onChange: (e) => {
                                              (0, c.rX)(l, e);
                                          }
                                      })
                                  }),
                                  'string' == typeof n.description
                                      ? (0, i.jsx)('div', {
                                            className: x.description,
                                            children: (0, i.jsx)(o.R94, {
                                                type: o.geA.DESCRIPTION,
                                                children: n.description
                                            })
                                        })
                                      : null
                              ]
                          }),
                          (0, i.jsxs)('div', {
                              className: x.description,
                              children: [
                                  (0, i.jsxs)(o.R94, {
                                      type: o.geA.DESCRIPTION,
                                      children: ['Current assigned to bucket ', null !== (t = null == N ? void 0 : N.bucket) && void 0 !== t ? t : g.NZ.NOT_ELIGIBLE]
                                  }),
                                  null == f
                                      ? (0, i.jsx)(o.R94, {
                                            type: o.geA.DESCRIPTION,
                                            children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
                                        })
                                      : null
                              ]
                          }),
                          p
                              ? (0, i.jsxs)('div', {
                                    children: [
                                        (0, i.jsx)(o.vwX, {
                                            tag: 'h5',
                                            className: x.debugTitle,
                                            children: 'Server Descriptor'
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            variant: 'code',
                                            className: x.pre,
                                            children: null == f ? 'None' : JSON.stringify(f, void 0, 2)
                                        }),
                                        (0, i.jsx)(o.vwX, {
                                            tag: 'h5',
                                            className: x.debugTitle,
                                            children: 'Override Descriptor'
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            variant: 'code',
                                            className: x.pre,
                                            children: null == u ? 'None' : JSON.stringify(u, void 0, 2)
                                        }),
                                        (0, i.jsx)(o.vwX, {
                                            tag: 'h5',
                                            className: x.debugTitle,
                                            children: 'Recent Exposures'
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            variant: 'code',
                                            className: x.pre,
                                            children: 0 === I.length ? 'None' : I.join('\n')
                                        })
                                    ]
                                })
                              : (0, i.jsx)(o.zxk, {
                                    className: x.debugButton,
                                    size: o.zxk.Sizes.SMALL,
                                    look: o.zxk.Looks.BLANK,
                                    onClick: () => E(!0),
                                    children: 'More Details \xBB'
                                })
                      ]
                  }),
                  (0, i.jsx)(o.$i$, { className: x.divider })
              ]
          })
        : (0, i.jsx)('div', {
              className: x.group,
              children: (0, i.jsx)(o.hjN, { children: T })
          });
}
function C(e) {
    let { experiment: t, experimentId: n, overrideDescriptor: l } = e,
        [h, m] = s.useState(null != l),
        [p, E] = s.useState(!1),
        C = s.useCallback(() => {
            m((e) => !e);
        }, []),
        N = (0, a.e7)([d.Z], () => d.Z.getLoadedGuildExperiment(n)),
        f = (0, a.Wu)([d.Z], () =>
            r()
                .sortBy(d.Z.getRecentExposures(g.xY.GUILD, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return ''.concat(new Date(n).toLocaleString(), ' (').concat(t, ')');
                })
        ),
        [I, T] = (0, a.Wu)([u.Z, d.Z], () => {
            let e = r().sortBy(r().values(u.Z.getGuilds()), (e) => e.name.toLowerCase()),
                t = {},
                i = [];
            for (let l of e) {
                var s;
                let e = d.Z.getGuildExperimentDescriptor(n, l.id),
                    r = null !== (s = null == e ? void 0 : e.bucket) && void 0 !== s ? s : g.NZ.NOT_ELIGIBLE;
                r in t || (t[r] = 0), t[r]++, i.push(''.concat(l.name, ': ').concat(r));
            }
            let l = r()(t)
                .keys()
                .map(Number)
                .sort()
                .map((e) => ''.concat(t[e], ' guilds in bucket ').concat(e))
                .join(', ');
            return [i.join('\n'), l];
        }),
        S = (0, i.jsx)(o.P3F, {
            onClick: C,
            children: (0, i.jsxs)(o.vwX, {
                tag: o.RB0.H3,
                className: x.title,
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
                        className: x.experimentDate,
                        children: 'Guild'
                    })
                ]
            })
        });
    return h
        ? (0, i.jsxs)('div', {
              className: x.group,
              children: [
                  (0, i.jsxs)(o.hjN, {
                      children: [
                          S,
                          (0, i.jsxs)('div', {
                              children: [
                                  (0, i.jsx)(o.xJW, {
                                      title: 'Bucket Override',
                                      children: (0, i.jsx)(o.q4e, {
                                          value: null != l ? l.bucket : null,
                                          clearable: null != l,
                                          options: _(t.buckets, t.description),
                                          onChange: (e) => {
                                              (0, c.rX)(n, e);
                                          }
                                      })
                                  }),
                                  'string' == typeof t.description
                                      ? (0, i.jsx)('div', {
                                            className: x.description,
                                            children: (0, i.jsx)(o.R94, {
                                                type: o.geA.DESCRIPTION,
                                                children: t.description
                                            })
                                        })
                                      : null
                              ]
                          }),
                          (0, i.jsxs)('div', {
                              className: x.description,
                              children: [
                                  (0, i.jsxs)(o.R94, {
                                      type: o.geA.DESCRIPTION,
                                      children: ['Current Assignments: ', T]
                                  }),
                                  null == N
                                      ? (0, i.jsx)(o.R94, {
                                            type: o.geA.DESCRIPTION,
                                            children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
                                        })
                                      : null
                              ]
                          }),
                          p
                              ? (0, i.jsxs)('div', {
                                    children: [
                                        (0, i.jsx)(o.vwX, {
                                            tag: 'h5',
                                            className: x.debugTitle,
                                            children: 'Guild Assignments'
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            variant: 'code',
                                            className: x.pre,
                                            children: I
                                        }),
                                        (0, i.jsx)(o.vwX, {
                                            tag: 'h5',
                                            className: x.debugTitle,
                                            children: 'Server Descriptor'
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            variant: 'code',
                                            className: x.pre,
                                            children: null == N ? 'None' : JSON.stringify(N, void 0, 2)
                                        }),
                                        (0, i.jsx)(o.vwX, {
                                            tag: 'h5',
                                            className: x.debugTitle,
                                            children: 'Override Descriptor'
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            variant: 'code',
                                            className: x.pre,
                                            children: null == l ? 'None' : JSON.stringify(l, void 0, 2)
                                        }),
                                        (0, i.jsx)(o.vwX, {
                                            tag: 'h5',
                                            className: x.debugTitle,
                                            children: 'Recent Exposures'
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            variant: 'code',
                                            className: x.pre,
                                            children: 0 === f.length ? 'None' : f.join('\n')
                                        })
                                    ]
                                })
                              : (0, i.jsx)(o.zxk, {
                                    className: x.debugButton,
                                    size: o.zxk.Sizes.SMALL,
                                    look: o.zxk.Looks.BLANK,
                                    onClick: () => E(!0),
                                    children: 'More Details \xBB'
                                })
                      ]
                  }),
                  (0, i.jsx)(o.$i$, { className: x.divider })
              ]
          })
        : (0, i.jsx)('div', {
              className: x.group,
              children: (0, i.jsx)(o.hjN, { children: S })
          });
}
