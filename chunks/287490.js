n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    s = n(192379),
    r = n(392711),
    a = n.n(r),
    l = n(442837),
    o = n(481060),
    c = n(492435),
    d = n(353926),
    u = n(430824),
    m = n(499533),
    g = n(878209),
    h = n(987338),
    p = n(26296);
function x(e, t) {
    return e.map((e, n) => ({
        label: 'object' == typeof t ? t[n] : m.Z.getExperimentBucketName(e),
        value: e
    }));
}
function f() {
    let e = (0, l.cj)([d.Z], () => d.Z.getAllExperimentOverrideDescriptors()),
        t = (0, l.cj)([d.Z], () => d.Z.getRegisteredExperiments()),
        [n, r] = s.useState(''),
        a = (0, g.Ro)((0, g.Tc)((0, g.Cg)(t), e), n);
    return (0, i.jsxs)(o.FormSection, {
        tag: o.FormTitleTags.H1,
        title: 'Experiments',
        children: [
            (0, i.jsx)(o.SearchBar, {
                size: o.SearchBar.Sizes.LARGE,
                query: n,
                onChange: r,
                onClear: () => r('')
            }),
            a.length > 0
                ? a.map((t) => {
                      let n = t.experiment.type === h.xY.GUILD ? E : _;
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
                      className: p.emptyState,
                      children: (0, i.jsx)(o.Heading, {
                          variant: 'heading-md/semibold',
                          children: 'No Experiments Found'
                      })
                  })
        ]
    });
}
function _(e) {
    var t;
    let { experiment: n, experimentId: r, overrideDescriptor: u } = e,
        [m, g] = s.useState(null != u),
        [f, _] = s.useState(!1),
        E = s.useCallback(() => {
            g((e) => !e);
        }, []),
        C = (0, l.e7)([d.Z], () => d.Z.getUserExperimentDescriptor(r)),
        T = (0, l.e7)([d.Z], () => d.Z.getLoadedUserExperiment(r)),
        S = (0, l.Wu)([d.Z], () =>
            a()
                .sortBy(d.Z.getRecentExposures(h.xY.USER, r), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return ''.concat(new Date(n).toLocaleString(), ' (').concat(t, ')');
                })
        ),
        b = (0, i.jsx)(o.Clickable, {
            onClick: E,
            children: (0, i.jsxs)(o.FormTitle, {
                tag: o.FormTitleTags.H3,
                className: p.title,
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
                        className: p.experimentDate,
                        children: 'User'
                    })
                ]
            })
        });
    return m
        ? (0, i.jsxs)('div', {
              className: p.group,
              children: [
                  (0, i.jsxs)(o.FormSection, {
                      children: [
                          b,
                          (0, i.jsxs)('div', {
                              children: [
                                  (0, i.jsx)(o.FormItem, {
                                      title: 'Bucket Override',
                                      children: (0, i.jsx)(o.SingleSelect, {
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
                                            className: p.description,
                                            children: (0, i.jsx)(o.FormText, {
                                                type: o.FormTextTypes.DESCRIPTION,
                                                children: n.description
                                            })
                                        })
                                      : null
                              ]
                          }),
                          (0, i.jsxs)('div', {
                              className: p.description,
                              children: [
                                  (0, i.jsxs)(o.FormText, {
                                      type: o.FormTextTypes.DESCRIPTION,
                                      children: ['Current assigned to bucket ', null !== (t = null == C ? void 0 : C.bucket) && void 0 !== t ? t : h.NZ.NOT_ELIGIBLE]
                                  }),
                                  null == T
                                      ? (0, i.jsx)(o.FormText, {
                                            type: o.FormTextTypes.DESCRIPTION,
                                            children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
                                        })
                                      : null
                              ]
                          }),
                          f
                              ? (0, i.jsxs)('div', {
                                    children: [
                                        (0, i.jsx)(o.FormTitle, {
                                            tag: 'h5',
                                            className: p.debugTitle,
                                            children: 'Server Descriptor'
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            variant: 'code',
                                            className: p.pre,
                                            children: null == T ? 'None' : JSON.stringify(T, void 0, 2)
                                        }),
                                        (0, i.jsx)(o.FormTitle, {
                                            tag: 'h5',
                                            className: p.debugTitle,
                                            children: 'Override Descriptor'
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            variant: 'code',
                                            className: p.pre,
                                            children: null == u ? 'None' : JSON.stringify(u, void 0, 2)
                                        }),
                                        (0, i.jsx)(o.FormTitle, {
                                            tag: 'h5',
                                            className: p.debugTitle,
                                            children: 'Recent Exposures'
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            variant: 'code',
                                            className: p.pre,
                                            children: 0 === S.length ? 'None' : S.join('\n')
                                        })
                                    ]
                                })
                              : (0, i.jsx)(o.Button, {
                                    className: p.debugButton,
                                    size: o.Button.Sizes.SMALL,
                                    look: o.Button.Looks.BLANK,
                                    onClick: () => _(!0),
                                    children: 'More Details \xBB'
                                })
                      ]
                  }),
                  (0, i.jsx)(o.FormDivider, { className: p.divider })
              ]
          })
        : (0, i.jsx)('div', {
              className: p.group,
              children: (0, i.jsx)(o.FormSection, { children: b })
          });
}
function E(e) {
    let { experiment: t, experimentId: n, overrideDescriptor: r } = e,
        [m, g] = s.useState(null != r),
        [f, _] = s.useState(!1),
        E = s.useCallback(() => {
            g((e) => !e);
        }, []),
        C = (0, l.e7)([d.Z], () => d.Z.getLoadedGuildExperiment(n)),
        T = (0, l.Wu)([d.Z], () =>
            a()
                .sortBy(d.Z.getRecentExposures(h.xY.GUILD, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return ''.concat(new Date(n).toLocaleString(), ' (').concat(t, ')');
                })
        ),
        [S, b] = (0, l.Wu)([u.Z, d.Z], () => {
            let e = a().sortBy(a().values(u.Z.getGuilds()), (e) => e.name.toLowerCase()),
                t = {},
                i = [];
            for (let r of e) {
                var s;
                let e = d.Z.getGuildExperimentDescriptor(n, r.id),
                    a = null !== (s = null == e ? void 0 : e.bucket) && void 0 !== s ? s : h.NZ.NOT_ELIGIBLE;
                !(a in t) && (t[a] = 0), t[a]++, i.push(''.concat(r.name, ': ').concat(a));
            }
            let r = a()(t)
                .keys()
                .map(Number)
                .sort()
                .map((e) => ''.concat(t[e], ' guilds in bucket ').concat(e))
                .join(', ');
            return [i.join('\n'), r];
        }),
        I = (0, i.jsx)(o.Clickable, {
            onClick: E,
            children: (0, i.jsxs)(o.FormTitle, {
                tag: o.FormTitleTags.H3,
                className: p.title,
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
                        className: p.experimentDate,
                        children: 'Guild'
                    })
                ]
            })
        });
    return m
        ? (0, i.jsxs)('div', {
              className: p.group,
              children: [
                  (0, i.jsxs)(o.FormSection, {
                      children: [
                          I,
                          (0, i.jsxs)('div', {
                              children: [
                                  (0, i.jsx)(o.FormItem, {
                                      title: 'Bucket Override',
                                      children: (0, i.jsx)(o.SingleSelect, {
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
                                            className: p.description,
                                            children: (0, i.jsx)(o.FormText, {
                                                type: o.FormTextTypes.DESCRIPTION,
                                                children: t.description
                                            })
                                        })
                                      : null
                              ]
                          }),
                          (0, i.jsxs)('div', {
                              className: p.description,
                              children: [
                                  (0, i.jsxs)(o.FormText, {
                                      type: o.FormTextTypes.DESCRIPTION,
                                      children: ['Current Assignments: ', b]
                                  }),
                                  null == C
                                      ? (0, i.jsx)(o.FormText, {
                                            type: o.FormTextTypes.DESCRIPTION,
                                            children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
                                        })
                                      : null
                              ]
                          }),
                          f
                              ? (0, i.jsxs)('div', {
                                    children: [
                                        (0, i.jsx)(o.FormTitle, {
                                            tag: 'h5',
                                            className: p.debugTitle,
                                            children: 'Guild Assignments'
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            variant: 'code',
                                            className: p.pre,
                                            children: S
                                        }),
                                        (0, i.jsx)(o.FormTitle, {
                                            tag: 'h5',
                                            className: p.debugTitle,
                                            children: 'Server Descriptor'
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            variant: 'code',
                                            className: p.pre,
                                            children: null == C ? 'None' : JSON.stringify(C, void 0, 2)
                                        }),
                                        (0, i.jsx)(o.FormTitle, {
                                            tag: 'h5',
                                            className: p.debugTitle,
                                            children: 'Override Descriptor'
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            variant: 'code',
                                            className: p.pre,
                                            children: null == r ? 'None' : JSON.stringify(r, void 0, 2)
                                        }),
                                        (0, i.jsx)(o.FormTitle, {
                                            tag: 'h5',
                                            className: p.debugTitle,
                                            children: 'Recent Exposures'
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            variant: 'code',
                                            className: p.pre,
                                            children: 0 === T.length ? 'None' : T.join('\n')
                                        })
                                    ]
                                })
                              : (0, i.jsx)(o.Button, {
                                    className: p.debugButton,
                                    size: o.Button.Sizes.SMALL,
                                    look: o.Button.Looks.BLANK,
                                    onClick: () => _(!0),
                                    children: 'More Details \xBB'
                                })
                      ]
                  }),
                  (0, i.jsx)(o.FormDivider, { className: p.divider })
              ]
          })
        : (0, i.jsx)('div', {
              className: p.group,
              children: (0, i.jsx)(o.FormSection, { children: I })
          });
}
