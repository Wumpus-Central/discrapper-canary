n.d(t, { O: () => E }), n(388685);
var a = n(200651),
    r = n(192379),
    l = n(481060),
    i = n(511010),
    s = n(373071),
    o = n(637443),
    c = n(619899),
    d = n(18868),
    u = n(281598),
    m = n(206878),
    x = n(232202);
function h(e) {
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
    b = {
        label: '[none selected]',
        value: null
    },
    f = {
        label: '[preview all]',
        value: null
    },
    v = () => {
        (0, l.nfh)(o.g)
            ? (0, l.Mr3)(o.g)
            : (0, l.ZDy)(
                  async () => {
                      let { ShopAssetsPreviewInstructionModal: e } = await Promise.resolve().then(n.bind(n, 637443));
                      return (t) => (0, a.jsx)(e, h({}, t));
                  },
                  {
                      modalKey: o.g,
                      onCloseRequest: () => (0, l.Mr3)(o.g)
                  }
              );
    },
    j = () => {
        (0, l.nfh)(o.c)
            ? (0, l.Mr3)(o.c)
            : (0, l.ZDy)(
                  async () => {
                      let { ShopPFXPreviewInstructionModal: e } = await Promise.resolve().then(n.bind(n, 637443));
                      return (t) => (0, a.jsx)(e, h({}, t));
                  },
                  {
                      modalKey: o.c,
                      onCloseRequest: () => (0, l.Mr3)(o.c)
                  }
              );
    },
    g = () => {
        let e = (0, s.lb)(),
            { previewProfileEffectId: t, setPreviewProfileEffectId: n } = (0, c.N9)(),
            i = r.useMemo(
                () => [
                    b,
                    ...e.map((e) => ({
                        label: e.name,
                        value: e.id
                    }))
                ],
                [e]
            );
        return (0, a.jsxs)('div', {
            className: x.previewSelector,
            children: [
                (0, a.jsx)(l.LZC, { size: 16 }),
                (0, a.jsxs)('div', {
                    className: x.headingContainer,
                    children: [
                        (0, a.jsx)(l.X6q, {
                            variant: 'heading-md/bold',
                            children: 'Preview Profile Effect'
                        }),
                        (0, a.jsx)(l.zxk, {
                            look: l.zxk.Looks.BLANK,
                            size: l.zxk.Sizes.SMALL,
                            onClick: j,
                            className: x.instructionsButton,
                            children: (0, a.jsx)(l.idN, { color: l.TVs.colors.BG_BRAND })
                        })
                    ]
                }),
                (0, a.jsx)(l.q4e, {
                    options: i,
                    value: t,
                    maxVisibleItems: 30,
                    onChange: (e) => n(e)
                })
            ]
        });
    },
    _ = () => {
        let { previewAvatarDecorationId: e, setPreviewAvatarDecorationId: t } = (0, c.N9)(),
            { avatarDecorationAssets: n } = (0, c.xq)(),
            i = r.useMemo(
                () => [
                    f,
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
                  className: x.previewSelector,
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
    y = (e) => {
        let { clearAssets: t, clearIgnoredFiles: n } = e,
            { collectionAssets: i } = (0, c.xq)(),
            { deleteCollectionAsset: s, clearAssets: o } = (0, c.N9)(),
            d = r.useMemo(
                () =>
                    Object.values(i).map((e) => ({
                        label: e.name,
                        value: e.type
                    })),
                [i]
            ),
            u = r.useCallback((e) => s(e), [s]),
            m = r.useCallback(() => {
                o(), t(), n();
            }, [o, t, n]);
        return 0 === d.length
            ? null
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(l.LZC, { size: 16 }),
                      (0, a.jsxs)('div', {
                          className: x.headingContainer,
                          children: [
                              (0, a.jsx)(l.X6q, {
                                  variant: 'heading-lg/bold',
                                  children: 'Uploaded Assets'
                              }),
                              (0, a.jsx)(l.zxk, {
                                  look: l.zxk.Looks.FILLED,
                                  size: l.zxk.Sizes.TINY,
                                  onClick: m,
                                  children: 'Clear All'
                              })
                          ]
                      }),
                      (0, a.jsx)('ul', {
                          children: d.map((e) =>
                              (0, a.jsxs)(
                                  'li',
                                  {
                                      className: x.uploadedFileListItem,
                                      children: [
                                          (0, a.jsx)(l.zxk, {
                                              innerClassName: x.removeFileButtonInnerContents,
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
    C = (e) => {
        let { ignoredFiles: t, handleClearIgnoredFiles: n } = e;
        return 0 === t.length
            ? null
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(l.LZC, { size: 16 }),
                      (0, a.jsxs)('div', {
                          className: x.headingContainer,
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
                                      className: x.ignoredFileListItem,
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
        let { validateShopAssetPackage: e, reset: t, validationComplete: n, warnings: i, errors: s } = (0, m.g)(),
            o = Object.entries(s),
            c = Object.entries(i),
            u = o.length > 0,
            h = c.length > 0,
            p = r.useCallback(
                (n) => {
                    t(), e(n);
                },
                [e, t]
            );
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(d.L, { onDrop: p }),
                n
                    ? (0, a.jsxs)('div', {
                          className: x.validationSummary,
                          children: [
                              (0, a.jsx)(l.Text, {
                                  variant: 'text-md/normal',
                                  color: u ? 'text-danger' : 'text-normal',
                                  children: ''.concat(o.length, ' errors')
                              }),
                              (0, a.jsx)(l.Text, {
                                  variant: 'text-md/normal',
                                  color: h ? 'text-warning' : 'text-normal',
                                  children: ''.concat(c.length, ' warnings')
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
                u &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(l.X6q, {
                                variant: 'heading-lg/bold',
                                children: 'Errors'
                            }),
                            (0, a.jsx)(l.LZC, { size: 8 }),
                            (0, a.jsx)('ul', {
                                className: x.validationIssuesList,
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
                                                        className: x.validationIssuesList,
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
                                className: x.validationIssuesList,
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
                                                        className: x.validationIssuesList,
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
    N = () => {
        let { previewEnabled: e, setPreviewEnabled: t, clearAssets: n } = (0, c.N9)(),
            { ignoredFilenames: i, clearAssets: s, clearIgnoredFilenames: o, processAndUpsertAssets: m } = (0, u.hm)(),
            h = r.useCallback(
                (e) => {
                    n(), m(e);
                },
                [m, n]
            );
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(d.L, { onDrop: h }),
                (0, a.jsx)(l.Text, {
                    variant: 'text-md/normal',
                    children: 'Drop files in this panel to begin preview.'
                }),
                (0, a.jsxs)('div', {
                    className: x.previewToggleContainer,
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
                            onClick: v,
                            className: x.instructionsButton,
                            children: (0, a.jsx)(l.idN, { color: l.TVs.colors.BG_BRAND })
                        })
                    ]
                }),
                (0, a.jsx)(g, {}),
                (0, a.jsx)(_, {}),
                (0, a.jsx)(y, {
                    clearAssets: s,
                    clearIgnoredFiles: o
                }),
                (0, a.jsx)(C, {
                    ignoredFiles: i,
                    handleClearIgnoredFiles: o
                })
            ]
        });
    },
    E = () => {
        let [e, t] = r.useState('preview');
        return (0, a.jsxs)('div', {
            className: x.container,
            children: [
                (0, a.jsx)(i.Z, { className: x.divider }),
                (0, a.jsx)(l.sY7, {
                    options: p,
                    value: e,
                    onChange: (e) => {
                        let { value: n } = e;
                        return t(n);
                    },
                    className: x.panelModeControl,
                    optionClassName: x.panelModeControlOption
                }),
                (0, a.jsx)(l.LZC, { size: 8 }),
                'preview' === e && (0, a.jsx)(N, {}),
                'validate' === e && (0, a.jsx)(O, {}),
                (0, a.jsx)(l.LZC, { size: 16 }),
                (0, a.jsx)(i.Z, { className: x.divider })
            ]
        });
    };
