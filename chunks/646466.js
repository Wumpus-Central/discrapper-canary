(a.d(t, { O: () => O }), a(388685));
var n = a(255367),
    r = a(73800),
    l = a(481060),
    i = a(373071),
    s = a(637443),
    o = a(619899),
    c = a(18868),
    d = a(281598),
    u = a(206878),
    m = a(63874);
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(a);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(a).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(a, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                ((n = a[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n));
            }));
    }
    return e;
}
let p = [
        {
            name: 'Preview',
            value: 'preview'
        },
        {
            name: 'Validate',
            value: 'validate'
        }
    ],
    h = {
        label: '[none selected]',
        value: null
    },
    b = {
        label: '[preview all]',
        value: null
    },
    f = () => {
        (0, l.nfh)(s.g)
            ? (0, l.Mr3)(s.g)
            : (0, l.ZDy)(
                  async () => {
                      let { ShopAssetsPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 637443));
                      return (t) => (0, n.jsx)(e, x({}, t));
                  },
                  {
                      modalKey: s.g,
                      onCloseRequest: () => (0, l.Mr3)(s.g)
                  }
              );
    },
    v = () => {
        (0, l.nfh)(s.c)
            ? (0, l.Mr3)(s.c)
            : (0, l.ZDy)(
                  async () => {
                      let { ShopPFXPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 637443));
                      return (t) => (0, n.jsx)(e, x({}, t));
                  },
                  {
                      modalKey: s.c,
                      onCloseRequest: () => (0, l.Mr3)(s.c)
                  }
              );
    },
    j = () => {
        let e = (0, i.lb)(),
            { previewProfileEffectId: t, setPreviewProfileEffectId: a } = (0, o.N9)(),
            s = r.useMemo(
                () => [
                    h,
                    ...e.map((e) => ({
                        label: e.name,
                        value: e.id
                    }))
                ],
                [e]
            );
        return (0, n.jsxs)('div', {
            className: m.previewSelector,
            children: [
                (0, n.jsx)(l.LZC, { size: 16 }),
                (0, n.jsxs)('div', {
                    className: m.headingContainer,
                    children: [
                        (0, n.jsx)(l.X6q, {
                            variant: 'heading-md/bold',
                            children: 'Preview Profile Effect'
                        }),
                        (0, n.jsx)(l.hU, {
                            variant: 'icon-only',
                            size: 'sm',
                            onClick: v,
                            icon: l.idN,
                            'aria-label': 'Open PFX preview instructions'
                        })
                    ]
                }),
                (0, n.jsx)(l.q4e, {
                    options: s,
                    value: t,
                    maxVisibleItems: 30,
                    onChange: (e) => a(e)
                })
            ]
        });
    },
    g = () => {
        let { previewAvatarDecorationId: e, setPreviewAvatarDecorationId: t } = (0, o.N9)(),
            { avatarDecorationAssets: a } = (0, o.xq)(),
            i = r.useMemo(
                () => [
                    b,
                    ...a.map((e) => ({
                        label: e.name,
                        value: e.name
                    }))
                ],
                [a]
            );
        return 0 === a.length
            ? null
            : (0, n.jsxs)('div', {
                  className: m.previewSelector,
                  children: [
                      (0, n.jsx)(l.LZC, { size: 16 }),
                      (0, n.jsx)(l.X6q, {
                          variant: 'heading-md/bold',
                          children: 'Preview Avatar Decorations'
                      }),
                      (0, n.jsx)(l.q4e, {
                          options: i,
                          value: e,
                          maxVisibleItems: 30,
                          onChange: (e) => t(e)
                      })
                  ]
              });
    },
    _ = (e) => {
        let { clearAssets: t, clearIgnoredFiles: a } = e,
            { collectionAssets: i } = (0, o.xq)(),
            { deleteCollectionAsset: s, clearAssets: c } = (0, o.N9)(),
            d = r.useMemo(
                () =>
                    Object.values(i).map((e) => ({
                        label: e.name,
                        value: e.type
                    })),
                [i]
            ),
            u = r.useCallback((e) => s(e), [s]),
            x = r.useCallback(() => {
                (c(), t(), a());
            }, [c, t, a]);
        return 0 === d.length
            ? null
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)(l.LZC, { size: 16 }),
                      (0, n.jsxs)('div', {
                          className: m.headingContainer,
                          children: [
                              (0, n.jsx)(l.X6q, {
                                  variant: 'heading-lg/bold',
                                  children: 'Uploaded Assets'
                              }),
                              (0, n.jsx)(l.zxk, {
                                  variant: 'critical-primary',
                                  size: 'sm',
                                  onClick: x,
                                  text: 'Clear All'
                              })
                          ]
                      }),
                      (0, n.jsx)('ul', {
                          children: d.map((e) =>
                              (0, n.jsxs)(
                                  'li',
                                  {
                                      className: m.uploadedFileListItem,
                                      children: [
                                          (0, n.jsx)(l.hU, {
                                              variant: 'icon-only',
                                              size: 'sm',
                                              onClick: () => u(e.value),
                                              icon: l.Dio,
                                              'aria-label': 'Remove asset'
                                          }),
                                          (0, n.jsx)(l.Text, {
                                              variant: 'text-md/normal',
                                              children: e.label
                                          })
                                      ]
                                  },
                                  e.value
                              )
                          )
                      })
                  ]
              });
    },
    y = (e) => {
        let { ignoredFiles: t, handleClearIgnoredFiles: a } = e;
        return 0 === t.length
            ? null
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)(l.LZC, { size: 16 }),
                      (0, n.jsxs)('div', {
                          className: m.headingContainer,
                          children: [
                              (0, n.jsx)(l.X6q, {
                                  variant: 'heading-lg/bold',
                                  children: 'Ignored Files'
                              }),
                              (0, n.jsx)(l.Avr, {
                                  variant: 'secondary',
                                  size: 'sm',
                                  onClick: a,
                                  text: 'Clear'
                              })
                          ]
                      }),
                      (0, n.jsx)('ul', {
                          children: t.map((e, t) =>
                              (0, n.jsx)(
                                  'li',
                                  {
                                      className: m.ignoredFileListItem,
                                      children: (0, n.jsx)(l.Text, {
                                          variant: 'text-md/normal',
                                          children: e
                                      })
                                  },
                                  ''.concat(e, '-').concat(t)
                              )
                          )
                      })
                  ]
              });
    },
    C = () => {
        let { validateShopAssetPackage: e, reset: t, validationComplete: a, warnings: i, errors: s } = (0, u.g)(),
            o = Object.entries(s),
            d = Object.entries(i),
            x = o.length > 0,
            p = d.length > 0,
            h = r.useCallback(
                (a) => {
                    (t(), e(a));
                },
                [e, t]
            );
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(c.L, { onDrop: h }),
                a
                    ? (0, n.jsxs)('div', {
                          className: m.validationSummary,
                          children: [
                              (0, n.jsx)(l.Text, {
                                  variant: 'text-md/normal',
                                  color: x ? 'text-danger' : 'text-default',
                                  children: ''.concat(o.length, ' errors')
                              }),
                              (0, n.jsx)(l.Text, {
                                  variant: 'text-md/normal',
                                  color: p ? 'text-feedback-warning' : 'text-default',
                                  children: ''.concat(d.length, ' warnings')
                              }),
                              (0, n.jsx)(l.Avr, {
                                  variant: 'secondary',
                                  size: 'sm',
                                  onClick: t,
                                  text: 'Reset'
                              })
                          ]
                      })
                    : (0, n.jsx)(l.Text, {
                          variant: 'text-md/normal',
                          children: 'Drop asset folder to validate.'
                      }),
                (0, n.jsx)(l.LZC, { size: 16 }),
                x &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(l.X6q, {
                                variant: 'heading-lg/bold',
                                children: 'Errors'
                            }),
                            (0, n.jsx)(l.LZC, { size: 8 }),
                            (0, n.jsx)('ul', {
                                className: m.validationIssuesList,
                                children: o.map((e, t) => {
                                    let [a, r] = e;
                                    return (0, n.jsxs)(
                                        'li',
                                        {
                                            children: [
                                                (0, n.jsx)(l.Text, {
                                                    variant: 'text-md/bold',
                                                    color: 'text-danger',
                                                    children: a
                                                }),
                                                r.length > 0 &&
                                                    (0, n.jsx)('ul', {
                                                        className: m.validationIssuesList,
                                                        children: r.map((e, t) =>
                                                            (0, n.jsx)(
                                                                'li',
                                                                {
                                                                    children: (0, n.jsx)(l.Text, {
                                                                        variant: 'text-sm/normal',
                                                                        color: 'text-danger',
                                                                        children: e
                                                                    })
                                                                },
                                                                ''.concat(e, '-').concat(t)
                                                            )
                                                        )
                                                    })
                                            ]
                                        },
                                        ''.concat(a, '-').concat(t)
                                    );
                                })
                            })
                        ]
                    }),
                p &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(l.X6q, {
                                variant: 'heading-lg/bold',
                                children: 'Warnings'
                            }),
                            (0, n.jsx)(l.LZC, { size: 8 }),
                            (0, n.jsx)('ul', {
                                className: m.validationIssuesList,
                                children: Object.entries(i).map((e, t) => {
                                    let [a, r] = e;
                                    return (0, n.jsxs)(
                                        'li',
                                        {
                                            children: [
                                                (0, n.jsx)(l.Text, {
                                                    variant: 'text-md/bold',
                                                    color: 'text-feedback-warning',
                                                    children: a
                                                }),
                                                r.length > 0 &&
                                                    (0, n.jsx)('ul', {
                                                        className: m.validationIssuesList,
                                                        children: r.map((e, t) =>
                                                            (0, n.jsx)(
                                                                'li',
                                                                {
                                                                    children: (0, n.jsx)(l.Text, {
                                                                        variant: 'text-sm/normal',
                                                                        color: 'text-feedback-warning',
                                                                        children: e
                                                                    })
                                                                },
                                                                ''.concat(e, '-').concat(t)
                                                            )
                                                        )
                                                    })
                                            ]
                                        },
                                        ''.concat(a, '-').concat(t)
                                    );
                                })
                            })
                        ]
                    })
            ]
        });
    },
    N = () => {
        let { previewEnabled: e, setPreviewEnabled: t, clearAssets: a } = (0, o.N9)(),
            { ignoredFilenames: i, clearAssets: s, clearIgnoredFilenames: u, processAndUpsertAssets: x } = (0, d.hm)(),
            p = r.useCallback(
                (e) => {
                    (a(), x(e));
                },
                [x, a]
            );
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(c.L, { onDrop: p }),
                (0, n.jsx)(l.Text, {
                    variant: 'text-md/normal',
                    children: 'Drop files in this panel to begin preview.'
                }),
                (0, n.jsxs)('div', {
                    className: m.previewToggleContainer,
                    children: [
                        (0, n.jsx)(l.rsf, {
                            checked: e,
                            onChange: (e) => t(e)
                        }),
                        (0, n.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            children: 'Enable Preview'
                        }),
                        (0, n.jsx)(l.hU, {
                            variant: 'icon-only',
                            size: 'sm',
                            onClick: f,
                            icon: l.idN,
                            'aria-label': 'Open preview instructions'
                        })
                    ]
                }),
                (0, n.jsx)(j, {}),
                (0, n.jsx)(g, {}),
                (0, n.jsx)(_, {
                    clearAssets: s,
                    clearIgnoredFiles: u
                }),
                (0, n.jsx)(y, {
                    ignoredFiles: i,
                    handleClearIgnoredFiles: u
                })
            ]
        });
    },
    O = () => {
        let [e, t] = r.useState('preview');
        return (0, n.jsxs)('div', {
            className: m.container,
            children: [
                (0, n.jsx)(l.sY7, {
                    options: p,
                    value: e,
                    onChange: (e) => {
                        let { value: a } = e;
                        return t(a);
                    },
                    className: m.panelModeControl,
                    optionClassName: m.panelModeControlOption
                }),
                (0, n.jsx)(l.LZC, { size: 8 }),
                'preview' === e && (0, n.jsx)(N, {}),
                'validate' === e && (0, n.jsx)(C, {}),
                (0, n.jsx)(l.LZC, { size: 16 })
            ]
        });
    };
