n.d(t, { O: () => N }), n(388685);
var a = n(200651),
    r = n(192379),
    l = n(481060),
    i = n(373071),
    s = n(637443),
    o = n(619899),
    c = n(18868),
    d = n(281598),
    u = n(206878),
    m = n(63874);
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a);
            });
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
    p = {
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
                      let { ShopAssetsPreviewInstructionModal: e } = await Promise.resolve().then(n.bind(n, 637443));
                      return (t) => (0, a.jsx)(e, x({}, t));
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
                      let { ShopPFXPreviewInstructionModal: e } = await Promise.resolve().then(n.bind(n, 637443));
                      return (t) => (0, a.jsx)(e, x({}, t));
                  },
                  {
                      modalKey: s.c,
                      onCloseRequest: () => (0, l.Mr3)(s.c)
                  }
              );
    },
    g = () => {
        let e = (0, i.lb)(),
            { previewProfileEffectId: t, setPreviewProfileEffectId: n } = (0, o.N9)(),
            s = r.useMemo(
                () => [
                    p,
                    ...e.map((e) => ({
                        label: e.name,
                        value: e.id
                    }))
                ],
                [e]
            );
        return (0, a.jsxs)('div', {
            className: m.previewSelector,
            children: [
                (0, a.jsx)(l.LZC, { size: 16 }),
                (0, a.jsxs)('div', {
                    className: m.headingContainer,
                    children: [
                        (0, a.jsx)(l.X6q, {
                            variant: 'heading-md/bold',
                            children: 'Preview Profile Effect'
                        }),
                        (0, a.jsx)(l.zxk, {
                            look: l.zxk.Looks.BLANK,
                            size: l.zxk.Sizes.SMALL,
                            onClick: v,
                            className: m.instructionsButton,
                            children: (0, a.jsx)(l.idN, { color: l.TVs.colors.BG_BRAND })
                        })
                    ]
                }),
                (0, a.jsx)(l.q4e, {
                    options: s,
                    value: t,
                    maxVisibleItems: 30,
                    onChange: (e) => n(e)
                })
            ]
        });
    },
    j = () => {
        let { previewAvatarDecorationId: e, setPreviewAvatarDecorationId: t } = (0, o.N9)(),
            { avatarDecorationAssets: n } = (0, o.xq)(),
            i = r.useMemo(
                () => [
                    b,
                    ...n.map((e) => ({
                        label: e.name,
                        value: e.name
                    }))
                ],
                [n]
            );
        return 0 === n.length
            ? null
            : (0, a.jsxs)('div', {
                  className: m.previewSelector,
                  children: [
                      (0, a.jsx)(l.LZC, { size: 16 }),
                      (0, a.jsx)(l.X6q, {
                          variant: 'heading-md/bold',
                          children: 'Preview Avatar Decorations'
                      }),
                      (0, a.jsx)(l.q4e, {
                          options: i,
                          value: e,
                          maxVisibleItems: 30,
                          onChange: (e) => t(e)
                      })
                  ]
              });
    },
    _ = (e) => {
        let { clearAssets: t, clearIgnoredFiles: n } = e,
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
                c(), t(), n();
            }, [c, t, n]);
        return 0 === d.length
            ? null
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(l.LZC, { size: 16 }),
                      (0, a.jsxs)('div', {
                          className: m.headingContainer,
                          children: [
                              (0, a.jsx)(l.X6q, {
                                  variant: 'heading-lg/bold',
                                  children: 'Uploaded Assets'
                              }),
                              (0, a.jsx)(l.zxk, {
                                  look: l.zxk.Looks.FILLED,
                                  size: l.zxk.Sizes.TINY,
                                  onClick: x,
                                  children: 'Clear All'
                              })
                          ]
                      }),
                      (0, a.jsx)('ul', {
                          children: d.map((e) =>
                              (0, a.jsxs)(
                                  'li',
                                  {
                                      className: m.uploadedFileListItem,
                                      children: [
                                          (0, a.jsx)(l.zxk, {
                                              innerClassName: m.removeFileButtonInnerContents,
                                              look: l.zxk.Looks.BLANK,
                                              size: l.zxk.Sizes.ICON,
                                              onClick: () => u(e.value),
                                              children: (0, a.jsx)(l.Dio, { color: l.TVs.colors.TEXT_DANGER })
                                          }),
                                          (0, a.jsx)(l.Text, {
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
        let { ignoredFiles: t, handleClearIgnoredFiles: n } = e;
        return 0 === t.length
            ? null
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(l.LZC, { size: 16 }),
                      (0, a.jsxs)('div', {
                          className: m.headingContainer,
                          children: [
                              (0, a.jsx)(l.X6q, {
                                  variant: 'heading-lg/bold',
                                  children: 'Ignored Files'
                              }),
                              (0, a.jsx)(l.zxk, {
                                  look: l.zxk.Looks.FILLED,
                                  size: l.zxk.Sizes.TINY,
                                  onClick: n,
                                  children: 'Clear'
                              })
                          ]
                      }),
                      (0, a.jsx)('ul', {
                          children: t.map((e, t) =>
                              (0, a.jsx)(
                                  'li',
                                  {
                                      className: m.ignoredFileListItem,
                                      children: (0, a.jsx)(l.Text, {
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
        let { validateShopAssetPackage: e, reset: t, validationComplete: n, warnings: i, errors: s } = (0, u.g)(),
            o = Object.entries(s),
            d = Object.entries(i),
            x = o.length > 0,
            h = d.length > 0,
            p = r.useCallback(
                (n) => {
                    t(), e(n);
                },
                [e, t]
            );
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(c.L, { onDrop: p }),
                n
                    ? (0, a.jsxs)('div', {
                          className: m.validationSummary,
                          children: [
                              (0, a.jsx)(l.Text, {
                                  variant: 'text-md/normal',
                                  color: x ? 'text-danger' : 'text-normal',
                                  children: ''.concat(o.length, ' errors')
                              }),
                              (0, a.jsx)(l.Text, {
                                  variant: 'text-md/normal',
                                  color: h ? 'text-warning' : 'text-normal',
                                  children: ''.concat(d.length, ' warnings')
                              }),
                              (0, a.jsx)(l.zxk, {
                                  color: l.zxk.Colors.RED,
                                  look: l.zxk.Looks.OUTLINED,
                                  size: l.zxk.Sizes.TINY,
                                  onClick: t,
                                  children: 'Reset'
                              })
                          ]
                      })
                    : (0, a.jsx)(l.Text, {
                          variant: 'text-md/normal',
                          children: 'Drop asset folder to validate.'
                      }),
                (0, a.jsx)(l.LZC, { size: 16 }),
                x &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(l.X6q, {
                                variant: 'heading-lg/bold',
                                children: 'Errors'
                            }),
                            (0, a.jsx)(l.LZC, { size: 8 }),
                            (0, a.jsx)('ul', {
                                className: m.validationIssuesList,
                                children: o.map((e, t) => {
                                    let [n, r] = e;
                                    return (0, a.jsxs)(
                                        'li',
                                        {
                                            children: [
                                                (0, a.jsx)(l.Text, {
                                                    variant: 'text-md/bold',
                                                    color: 'text-danger',
                                                    children: n
                                                }),
                                                r.length > 0 &&
                                                    (0, a.jsx)('ul', {
                                                        className: m.validationIssuesList,
                                                        children: r.map((e, t) =>
                                                            (0, a.jsx)(
                                                                'li',
                                                                {
                                                                    children: (0, a.jsx)(l.Text, {
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
                                        ''.concat(n, '-').concat(t)
                                    );
                                })
                            })
                        ]
                    }),
                h &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(l.X6q, {
                                variant: 'heading-lg/bold',
                                children: 'Warnings'
                            }),
                            (0, a.jsx)(l.LZC, { size: 8 }),
                            (0, a.jsx)('ul', {
                                className: m.validationIssuesList,
                                children: Object.entries(i).map((e, t) => {
                                    let [n, r] = e;
                                    return (0, a.jsxs)(
                                        'li',
                                        {
                                            children: [
                                                (0, a.jsx)(l.Text, {
                                                    variant: 'text-md/bold',
                                                    color: 'text-warning',
                                                    children: n
                                                }),
                                                r.length > 0 &&
                                                    (0, a.jsx)('ul', {
                                                        className: m.validationIssuesList,
                                                        children: r.map((e, t) =>
                                                            (0, a.jsx)(
                                                                'li',
                                                                {
                                                                    children: (0, a.jsx)(l.Text, {
                                                                        variant: 'text-sm/normal',
                                                                        color: 'text-warning',
                                                                        children: e
                                                                    })
                                                                },
                                                                ''.concat(e, '-').concat(t)
                                                            )
                                                        )
                                                    })
                                            ]
                                        },
                                        ''.concat(n, '-').concat(t)
                                    );
                                })
                            })
                        ]
                    })
            ]
        });
    },
    C = () => {
        let { previewEnabled: e, setPreviewEnabled: t, clearAssets: n } = (0, o.N9)(),
            { ignoredFilenames: i, clearAssets: s, clearIgnoredFilenames: u, processAndUpsertAssets: x } = (0, d.hm)(),
            h = r.useCallback(
                (e) => {
                    n(), x(e);
                },
                [x, n]
            );
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(c.L, { onDrop: h }),
                (0, a.jsx)(l.Text, {
                    variant: 'text-md/normal',
                    children: 'Drop files in this panel to begin preview.'
                }),
                (0, a.jsxs)('div', {
                    className: m.previewToggleContainer,
                    children: [
                        (0, a.jsx)(l.rsf, {
                            checked: e,
                            onChange: (e) => t(e)
                        }),
                        (0, a.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            children: 'Enable Preview'
                        }),
                        (0, a.jsx)(l.zxk, {
                            look: l.zxk.Looks.BLANK,
                            size: l.zxk.Sizes.SMALL,
                            onClick: f,
                            className: m.instructionsButton,
                            children: (0, a.jsx)(l.idN, { color: l.TVs.colors.BG_BRAND })
                        })
                    ]
                }),
                (0, a.jsx)(g, {}),
                (0, a.jsx)(j, {}),
                (0, a.jsx)(_, {
                    clearAssets: s,
                    clearIgnoredFiles: u
                }),
                (0, a.jsx)(y, {
                    ignoredFiles: i,
                    handleClearIgnoredFiles: u
                })
            ]
        });
    },
    N = () => {
        let [e, t] = r.useState('preview');
        return (0, a.jsxs)('div', {
            className: m.container,
            children: [
                (0, a.jsx)(l.sY7, {
                    options: h,
                    value: e,
                    onChange: (e) => {
                        let { value: n } = e;
                        return t(n);
                    },
                    className: m.panelModeControl,
                    optionClassName: m.panelModeControlOption
                }),
                (0, a.jsx)(l.LZC, { size: 8 }),
                'preview' === e && (0, a.jsx)(C, {}),
                'validate' === e && (0, a.jsx)(O, {}),
                (0, a.jsx)(l.LZC, { size: 16 })
            ]
        });
    };
