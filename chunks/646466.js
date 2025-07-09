(a.d(t, { O: () => T }), a(388685));
var n = a(255367),
    r = a(73800),
    l = a(755721),
    i = a(481060),
    s = a(373071),
    o = a(637443),
    c = a(619899),
    d = a(18868),
    u = a(281598),
    m = a(206878),
    x = a(63874);
function p(e) {
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
let h = [
        {
            name: 'Preview',
            value: 'preview'
        },
        {
            name: 'Validate',
            value: 'validate'
        }
    ],
    b = {
        label: '[none selected]',
        value: null
    },
    f = {
        label: '[preview all]',
        value: null
    },
    v = () => {
        (0, i.nfh)(o.g)
            ? (0, i.Mr3)(o.g)
            : (0, i.ZDy)(
                  async () => {
                      let { ShopAssetsPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 637443));
                      return (t) => (0, n.jsx)(e, p({}, t));
                  },
                  {
                      modalKey: o.g,
                      onCloseRequest: () => (0, i.Mr3)(o.g)
                  }
              );
    },
    j = () => {
        (0, i.nfh)(o.c)
            ? (0, i.Mr3)(o.c)
            : (0, i.ZDy)(
                  async () => {
                      let { ShopPFXPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 637443));
                      return (t) => (0, n.jsx)(e, p({}, t));
                  },
                  {
                      modalKey: o.c,
                      onCloseRequest: () => (0, i.Mr3)(o.c)
                  }
              );
    },
    g = () => {
        let e = (0, s.lb)(),
            { previewProfileEffectId: t, setPreviewProfileEffectId: a } = (0, c.N9)(),
            o = r.useMemo(
                () => [
                    b,
                    ...e.map((e) => ({
                        label: e.name,
                        value: e.id
                    }))
                ],
                [e]
            );
        return (0, n.jsxs)('div', {
            className: x.previewSelector,
            children: [
                (0, n.jsx)(i.LZC, { size: 16 }),
                (0, n.jsxs)('div', {
                    className: x.headingContainer,
                    children: [
                        (0, n.jsx)(i.X6q, {
                            variant: 'heading-md/bold',
                            children: 'Preview Profile Effect'
                        }),
                        (0, n.jsx)(l.zx, {
                            look: l.zx.Looks.BLANK,
                            size: l.zx.Sizes.SMALL,
                            onClick: j,
                            className: x.instructionsButton,
                            children: (0, n.jsx)(i.idN, { color: i.TVs.colors.BG_BRAND })
                        })
                    ]
                }),
                (0, n.jsx)(i.q4e, {
                    options: o,
                    value: t,
                    maxVisibleItems: 30,
                    onChange: (e) => a(e)
                })
            ]
        });
    },
    _ = () => {
        let { previewAvatarDecorationId: e, setPreviewAvatarDecorationId: t } = (0, c.N9)(),
            { avatarDecorationAssets: a } = (0, c.xq)(),
            l = r.useMemo(
                () => [
                    f,
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
                  className: x.previewSelector,
                  children: [
                      (0, n.jsx)(i.LZC, { size: 16 }),
                      (0, n.jsx)(i.X6q, {
                          variant: 'heading-md/bold',
                          children: 'Preview Avatar Decorations'
                      }),
                      (0, n.jsx)(i.q4e, {
                          options: l,
                          value: e,
                          maxVisibleItems: 30,
                          onChange: (e) => t(e)
                      })
                  ]
              });
    },
    y = (e) => {
        let { clearAssets: t, clearIgnoredFiles: a } = e,
            { collectionAssets: s } = (0, c.xq)(),
            { deleteCollectionAsset: o, clearAssets: d } = (0, c.N9)(),
            u = r.useMemo(
                () =>
                    Object.values(s).map((e) => ({
                        label: e.name,
                        value: e.type
                    })),
                [s]
            ),
            m = r.useCallback((e) => o(e), [o]),
            p = r.useCallback(() => {
                (d(), t(), a());
            }, [d, t, a]);
        return 0 === u.length
            ? null
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)(i.LZC, { size: 16 }),
                      (0, n.jsxs)('div', {
                          className: x.headingContainer,
                          children: [
                              (0, n.jsx)(i.X6q, {
                                  variant: 'heading-lg/bold',
                                  children: 'Uploaded Assets'
                              }),
                              (0, n.jsx)(l.zx, {
                                  look: l.zx.Looks.FILLED,
                                  size: l.zx.Sizes.TINY,
                                  onClick: p,
                                  children: 'Clear All'
                              })
                          ]
                      }),
                      (0, n.jsx)('ul', {
                          children: u.map((e) =>
                              (0, n.jsxs)(
                                  'li',
                                  {
                                      className: x.uploadedFileListItem,
                                      children: [
                                          (0, n.jsx)(l.zx, {
                                              innerClassName: x.removeFileButtonInnerContents,
                                              look: l.zx.Looks.BLANK,
                                              size: l.zx.Sizes.ICON,
                                              onClick: () => m(e.value),
                                              children: (0, n.jsx)(i.Dio, { color: i.TVs.colors.TEXT_DANGER })
                                          }),
                                          (0, n.jsx)(i.Text, {
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
    C = (e) => {
        let { ignoredFiles: t, handleClearIgnoredFiles: a } = e;
        return 0 === t.length
            ? null
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)(i.LZC, { size: 16 }),
                      (0, n.jsxs)('div', {
                          className: x.headingContainer,
                          children: [
                              (0, n.jsx)(i.X6q, {
                                  variant: 'heading-lg/bold',
                                  children: 'Ignored Files'
                              }),
                              (0, n.jsx)(l.zx, {
                                  look: l.zx.Looks.FILLED,
                                  size: l.zx.Sizes.TINY,
                                  onClick: a,
                                  children: 'Clear'
                              })
                          ]
                      }),
                      (0, n.jsx)('ul', {
                          children: t.map((e, t) =>
                              (0, n.jsx)(
                                  'li',
                                  {
                                      className: x.ignoredFileListItem,
                                      children: (0, n.jsx)(i.Text, {
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
    O = () => {
        let { validateShopAssetPackage: e, reset: t, validationComplete: a, warnings: s, errors: o } = (0, m.g)(),
            c = Object.entries(o),
            u = Object.entries(s),
            p = c.length > 0,
            h = u.length > 0,
            b = r.useCallback(
                (a) => {
                    (t(), e(a));
                },
                [e, t]
            );
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(d.L, { onDrop: b }),
                a
                    ? (0, n.jsxs)('div', {
                          className: x.validationSummary,
                          children: [
                              (0, n.jsx)(i.Text, {
                                  variant: 'text-md/normal',
                                  color: p ? 'text-danger' : 'text-default',
                                  children: ''.concat(c.length, ' errors')
                              }),
                              (0, n.jsx)(i.Text, {
                                  variant: 'text-md/normal',
                                  color: h ? 'text-feedback-warning' : 'text-default',
                                  children: ''.concat(u.length, ' warnings')
                              }),
                              (0, n.jsx)(l.zx, {
                                  color: l.zx.Colors.RED,
                                  look: l.zx.Looks.OUTLINED,
                                  size: l.zx.Sizes.TINY,
                                  onClick: t,
                                  children: 'Reset'
                              })
                          ]
                      })
                    : (0, n.jsx)(i.Text, {
                          variant: 'text-md/normal',
                          children: 'Drop asset folder to validate.'
                      }),
                (0, n.jsx)(i.LZC, { size: 16 }),
                p &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(i.X6q, {
                                variant: 'heading-lg/bold',
                                children: 'Errors'
                            }),
                            (0, n.jsx)(i.LZC, { size: 8 }),
                            (0, n.jsx)('ul', {
                                className: x.validationIssuesList,
                                children: c.map((e, t) => {
                                    let [a, r] = e;
                                    return (0, n.jsxs)(
                                        'li',
                                        {
                                            children: [
                                                (0, n.jsx)(i.Text, {
                                                    variant: 'text-md/bold',
                                                    color: 'text-danger',
                                                    children: a
                                                }),
                                                r.length > 0 &&
                                                    (0, n.jsx)('ul', {
                                                        className: x.validationIssuesList,
                                                        children: r.map((e, t) =>
                                                            (0, n.jsx)(
                                                                'li',
                                                                {
                                                                    children: (0, n.jsx)(i.Text, {
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
                h &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(i.X6q, {
                                variant: 'heading-lg/bold',
                                children: 'Warnings'
                            }),
                            (0, n.jsx)(i.LZC, { size: 8 }),
                            (0, n.jsx)('ul', {
                                className: x.validationIssuesList,
                                children: Object.entries(s).map((e, t) => {
                                    let [a, r] = e;
                                    return (0, n.jsxs)(
                                        'li',
                                        {
                                            children: [
                                                (0, n.jsx)(i.Text, {
                                                    variant: 'text-md/bold',
                                                    color: 'text-feedback-warning',
                                                    children: a
                                                }),
                                                r.length > 0 &&
                                                    (0, n.jsx)('ul', {
                                                        className: x.validationIssuesList,
                                                        children: r.map((e, t) =>
                                                            (0, n.jsx)(
                                                                'li',
                                                                {
                                                                    children: (0, n.jsx)(i.Text, {
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
        let { previewEnabled: e, setPreviewEnabled: t, clearAssets: a } = (0, c.N9)(),
            { ignoredFilenames: s, clearAssets: o, clearIgnoredFilenames: m, processAndUpsertAssets: p } = (0, u.hm)(),
            h = r.useCallback(
                (e) => {
                    (a(), p(e));
                },
                [p, a]
            );
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(d.L, { onDrop: h }),
                (0, n.jsx)(i.Text, {
                    variant: 'text-md/normal',
                    children: 'Drop files in this panel to begin preview.'
                }),
                (0, n.jsxs)('div', {
                    className: x.previewToggleContainer,
                    children: [
                        (0, n.jsx)(i.rsf, {
                            checked: e,
                            onChange: (e) => t(e)
                        }),
                        (0, n.jsx)(i.Text, {
                            variant: 'text-md/normal',
                            children: 'Enable Preview'
                        }),
                        (0, n.jsx)(l.zx, {
                            look: l.zx.Looks.BLANK,
                            size: l.zx.Sizes.SMALL,
                            onClick: v,
                            className: x.instructionsButton,
                            children: (0, n.jsx)(i.idN, { color: i.TVs.colors.BG_BRAND })
                        })
                    ]
                }),
                (0, n.jsx)(g, {}),
                (0, n.jsx)(_, {}),
                (0, n.jsx)(y, {
                    clearAssets: o,
                    clearIgnoredFiles: m
                }),
                (0, n.jsx)(C, {
                    ignoredFiles: s,
                    handleClearIgnoredFiles: m
                })
            ]
        });
    },
    T = () => {
        let [e, t] = r.useState('preview');
        return (0, n.jsxs)('div', {
            className: x.container,
            children: [
                (0, n.jsx)(i.sY7, {
                    options: h,
                    value: e,
                    onChange: (e) => {
                        let { value: a } = e;
                        return t(a);
                    },
                    className: x.panelModeControl,
                    optionClassName: x.panelModeControlOption
                }),
                (0, n.jsx)(i.LZC, { size: 8 }),
                'preview' === e && (0, n.jsx)(N, {}),
                'validate' === e && (0, n.jsx)(O, {}),
                (0, n.jsx)(i.LZC, { size: 16 })
            ]
        });
    };
