n.d(t, { Z: () => p }), n(47120), n(653041);
var i = n(200651),
    s = n(192379),
    r = n(392711),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(492435),
    d = n(353926),
    u = n(430824),
    m = n(499533),
    h = n(878209),
    g = n(987338),
    _ = n(26296);
function x(e, t) {
    return e.map((e, n) => ({
        label: 'object' == typeof t ? t[n] : m.Z.getExperimentBucketName(e),
        value: e
    }));
}
function p() {
    let e = (0, a.cj)([d.Z], () => d.Z.getAllExperimentOverrideDescriptors()),
        t = (0, a.cj)([d.Z], () => d.Z.getRegisteredExperiments()),
        [n, r] = s.useState(''),
        l = (0, h.Ro)((0, h.Tc)((0, h.Cg)(t), e), n);
    return (0, i.jsxs)(o.hjN, {
        tag: o.RB0.H1,
        title: 'Experiments',
        children: [
            (0, i.jsx)(o.E1j, {
                size: o.E1j.Sizes.LARGE,
                query: n,
                onChange: r,
                onClear: () => r('')
            }),
            l.length > 0
                ? l.map((t) => {
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
                      className: _.emptyState,
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
    let { experiment: n, experimentId: r, overrideDescriptor: u } = e,
        [m, h] = s.useState(null != u),
        [p, E] = s.useState(!1),
        C = s.useCallback(() => {
            h((e) => !e);
        }, []),
        f = (0, a.e7)([d.Z], () => d.Z.getUserExperimentDescriptor(r)),
        T = (0, a.e7)([d.Z], () => d.Z.getLoadedUserExperiment(r)),
        N = (0, a.Wu)([d.Z], () =>
            l()
                .sortBy(d.Z.getRecentExposures(g.xY.USER, r), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return ''.concat(new Date(n).toLocaleString(), ' (').concat(t, ')');
                })
        ),
        S = (0, i.jsx)(o.P3F, {
            onClick: C,
            children: (0, i.jsxs)(o.vwX, {
                tag: o.RB0.H3,
                className: _.title,
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)('span', { children: n.title }),
                            (0, i.jsx)(o.Text, {
                                color: 'text-muted',
                                variant: 'text-sm/normal',
                                children: r
                            })
                        ]
                    }),
                    (0, i.jsx)('span', {
                        className: _.experimentDate,
                        children: 'User'
                    })
                ]
            })
        });
    return m
        ? (0, i.jsxs)('div', {
              className: _.group,
              children: [
                  (0, i.jsxs)(o.hjN, {
                      children: [
                          S,
                          (0, i.jsxs)('div', {
                              children: [
                                  (0, i.jsx)(o.xJW, {
                                      title: 'Bucket Override',
                                      children: (0, i.jsx)(o.q4e, {
                                          value: null != u ? u.bucket : null,
                                          clearable: null != u,
                                          options: x(n.buckets, n.description),
                                          onChange: (e) => {
                                              (0, c.rX)(r, e);
                                          }
                                      })
                                  }),
                                  'string' == typeof n.description
                                      ? (0, i.jsx)('div', {
                                            className: _.description,
                                            children: (0, i.jsx)(o.R94, {
                                                type: o.geA.DESCRIPTION,
                                                children: n.description
                                            })
                                        })
                                      : null
                              ]
                          }),
                          (0, i.jsxs)('div', {
                              className: _.description,
                              children: [
                                  (0, i.jsxs)(o.R94, {
                                      type: o.geA.DESCRIPTION,
                                      children: ['Current assigned to bucket ', null !== (t = null == f ? void 0 : f.bucket) && void 0 !== t ? t : g.NZ.NOT_ELIGIBLE]
                                  }),
                                  null == T
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
                                            className: _.debugTitle,
                                            children: 'Server Descriptor'
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            variant: 'code',
                                            className: _.pre,
                                            children: null == T ? 'None' : JSON.stringify(T, void 0, 2)
                                        }),
                                        (0, i.jsx)(o.vwX, {
                                            tag: 'h5',
                                            className: _.debugTitle,
                                            children: 'Override Descriptor'
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            variant: 'code',
                                            className: _.pre,
                                            children: null == u ? 'None' : JSON.stringify(u, void 0, 2)
                                        }),
                                        (0, i.jsx)(o.vwX, {
                                            tag: 'h5',
                                            className: _.debugTitle,
                                            children: 'Recent Exposures'
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            variant: 'code',
                                            className: _.pre,
                                            children: 0 === N.length ? 'None' : N.join('\n')
                                        })
                                    ]
                                })
                              : (0, i.jsx)(o.zxk, {
                                    className: _.debugButton,
                                    size: o.zxk.Sizes.SMALL,
                                    look: o.zxk.Looks.BLANK,
                                    onClick: () => E(!0),
                                    children: 'More Details \xBB'
                                })
                      ]
                  }),
                  (0, i.jsx)(o.$i$, { className: _.divider })
              ]
          })
        : (0, i.jsx)('div', {
              className: _.group,
              children: (0, i.jsx)(o.hjN, { children: S })
          });
}
function C(e) {
    let { experiment: t, experimentId: n, overrideDescriptor: r } = e,
        [m, h] = s.useState(null != r),
        [p, E] = s.useState(!1),
        C = s.useCallback(() => {
            h((e) => !e);
        }, []),
        f = (0, a.e7)([d.Z], () => d.Z.getLoadedGuildExperiment(n)),
        T = (0, a.Wu)([d.Z], () =>
            l()
                .sortBy(d.Z.getRecentExposures(g.xY.GUILD, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return ''.concat(new Date(n).toLocaleString(), ' (').concat(t, ')');
                })
        ),
        [N, S] = (0, a.Wu)([u.Z, d.Z], () => {
            let e = l().sortBy(l().values(u.Z.getGuilds()), (e) => e.name.toLowerCase()),
                t = {},
                i = [];
            for (let r of e) {
                var s;
                let e = d.Z.getGuildExperimentDescriptor(n, r.id),
                    l = null !== (s = null == e ? void 0 : e.bucket) && void 0 !== s ? s : g.NZ.NOT_ELIGIBLE;
                l in t || (t[l] = 0), t[l]++, i.push(''.concat(r.name, ': ').concat(l));
            }
            let r = l()(t)
                .keys()
                .map(Number)
                .sort()
                .map((e) => ''.concat(t[e], ' guilds in bucket ').concat(e))
                .join(', ');
            return [i.join('\n'), r];
        }),
        I = (0, i.jsx)(o.P3F, {
            onClick: C,
            children: (0, i.jsxs)(o.vwX, {
                tag: o.RB0.H3,
                className: _.title,
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
                        className: _.experimentDate,
                        children: 'Guild'
                    })
                ]
            })
        });
    return m
        ? (0, i.jsxs)('div', {
              className: _.group,
              children: [
                  (0, i.jsxs)(o.hjN, {
                      children: [
                          I,
                          (0, i.jsxs)('div', {
                              children: [
                                  (0, i.jsx)(o.xJW, {
                                      title: 'Bucket Override',
                                      children: (0, i.jsx)(o.q4e, {
                                          value: null != r ? r.bucket : null,
                                          clearable: null != r,
                                          options: x(t.buckets, t.description),
                                          onChange: (e) => {
                                              (0, c.rX)(n, e);
                                          }
                                      })
                                  }),
                                  'string' == typeof t.description
                                      ? (0, i.jsx)('div', {
                                            className: _.description,
                                            children: (0, i.jsx)(o.R94, {
                                                type: o.geA.DESCRIPTION,
                                                children: t.description
                                            })
                                        })
                                      : null
                              ]
                          }),
                          (0, i.jsxs)('div', {
                              className: _.description,
                              children: [
                                  (0, i.jsxs)(o.R94, {
                                      type: o.geA.DESCRIPTION,
                                      children: ['Current Assignments: ', S]
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
                                            className: _.debugTitle,
                                            children: 'Guild Assignments'
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            variant: 'code',
                                            className: _.pre,
                                            children: N
                                        }),
                                        (0, i.jsx)(o.vwX, {
                                            tag: 'h5',
                                            className: _.debugTitle,
                                            children: 'Server Descriptor'
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            variant: 'code',
                                            className: _.pre,
                                            children: null == f ? 'None' : JSON.stringify(f, void 0, 2)
                                        }),
                                        (0, i.jsx)(o.vwX, {
                                            tag: 'h5',
                                            className: _.debugTitle,
                                            children: 'Override Descriptor'
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            variant: 'code',
                                            className: _.pre,
                                            children: null == r ? 'None' : JSON.stringify(r, void 0, 2)
                                        }),
                                        (0, i.jsx)(o.vwX, {
                                            tag: 'h5',
                                            className: _.debugTitle,
                                            children: 'Recent Exposures'
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            variant: 'code',
                                            className: _.pre,
                                            children: 0 === T.length ? 'None' : T.join('\n')
                                        })
                                    ]
                                })
                              : (0, i.jsx)(o.zxk, {
                                    className: _.debugButton,
                                    size: o.zxk.Sizes.SMALL,
                                    look: o.zxk.Looks.BLANK,
                                    onClick: () => E(!0),
                                    children: 'More Details \xBB'
                                })
                      ]
                  }),
                  (0, i.jsx)(o.$i$, { className: _.divider })
              ]
          })
        : (0, i.jsx)('div', {
              className: _.group,
              children: (0, i.jsx)(o.hjN, { children: I })
          });
}
