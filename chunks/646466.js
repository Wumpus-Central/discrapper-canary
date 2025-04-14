n.d(t, { O: () => S }), n(388685);
var r = n(200651),
    a = n(192379),
    l = n(481060),
    i = n(511010),
    o = n(373071),
    s = n(637443),
    c = n(619899),
    d = n(18868),
    u = n(281598),
    m = n(206878),
    x = n(63874);
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
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
    _ = () => {
        (0, l.nfh)(s.g)
            ? (0, l.Mr3)(s.g)
            : (0, l.ZDy)(
                  async () => {
                      let { ShopAssetsPreviewInstructionModal: e } = await Promise.resolve().then(n.bind(n, 637443));
                      return (t) => (0, r.jsx)(e, h({}, t));
                  },
                  {
                      modalKey: s.g,
                      onCloseRequest: () => (0, l.Mr3)(s.g)
                  }
              );
    },
    g = () => {
        (0, l.nfh)(s.c)
            ? (0, l.Mr3)(s.c)
            : (0, l.ZDy)(
                  async () => {
                      let { ShopPFXPreviewInstructionModal: e } = await Promise.resolve().then(n.bind(n, 637443));
                      return (t) => (0, r.jsx)(e, h({}, t));
                  },
                  {
                      modalKey: s.c,
                      onCloseRequest: () => (0, l.Mr3)(s.c)
                  }
              );
    },
    v = () => {
        let e = (0, o.lb)(),
            { previewProfileEffectId: t, setPreviewProfileEffectId: n } = (0, c.N9)(),
            i = a.useMemo(
                () => [
                    b,
                    ...e.map((e) => ({
                        label: e.name,
                        value: e.id
                    }))
                ],
                [e]
            );
        return (0, r.jsxs)('div', {
            className: x.previewSelector,
            children: [
                (0, r.jsx)(l.LZC, { size: 16 }),
                (0, r.jsxs)('div', {
                    className: x.headingContainer,
                    children: [
                        (0, r.jsx)(l.X6q, {
                            variant: 'heading-md/bold',
                            children: 'Preview Profile Effect'
                        }),
                        (0, r.jsx)(l.zxk, {
                            look: l.zxk.Looks.BLANK,
                            size: l.zxk.Sizes.SMALL,
                            onClick: g,
                            className: x.instructionsButton,
                            children: (0, r.jsx)(l.idN, { color: l.TVs.colors.BG_BRAND })
                        })
                    ]
                }),
                (0, r.jsx)(l.q4e, {
                    options: i,
                    value: t,
                    maxVisibleItems: 30,
                    onChange: (e) => n(e)
                })
            ]
        });
    },
    j = () => {
        let { previewAvatarDecorationId: e, setPreviewAvatarDecorationId: t } = (0, c.N9)(),
            { avatarDecorationAssets: n } = (0, c.xq)(),
            i = a.useMemo(
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
            : (0, r.jsxs)('div', {
                  className: x.previewSelector,
                  children: [
                      (0, r.jsx)(l.LZC, { size: 16 }),
                      (0, r.jsx)(l.X6q, {
                          variant: 'heading-md/bold',
                          children: 'Preview Avatar Decorations'
                      }),
                      (0, r.jsx)(l.q4e, {
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
            { deleteCollectionAsset: o, clearAssets: s } = (0, c.N9)(),
            d = a.useMemo(
                () =>
                    Object.values(i).map((e) => ({
                        label: e.name,
                        value: e.type
                    })),
                [i]
            ),
            u = a.useCallback((e) => o(e), [o]),
            m = a.useCallback(() => {
                s(), t(), n();
            }, [s, t, n]);
        return 0 === d.length
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(l.LZC, { size: 16 }),
                      (0, r.jsxs)('div', {
                          className: x.headingContainer,
                          children: [
                              (0, r.jsx)(l.X6q, {
                                  variant: 'heading-lg/bold',
                                  children: 'Uploaded Assets'
                              }),
                              (0, r.jsx)(l.zxk, {
                                  look: l.zxk.Looks.FILLED,
                                  size: l.zxk.Sizes.TINY,
                                  onClick: m,
                                  children: 'Clear All'
                              })
                          ]
                      }),
                      (0, r.jsx)('ul', {
                          children: d.map((e) =>
                              (0, r.jsxs)(
                                  'li',
                                  {
                                      className: x.uploadedFileListItem,
                                      children: [
                                          (0, r.jsx)(l.zxk, {
                                              innerClassName: x.removeFileButtonInnerContents,
                                              look: l.zxk.Looks.BLANK,
                                              size: l.zxk.Sizes.ICON,
                                              onClick: () => u(e.value),
                                              children: (0, r.jsx)(l.Dio, { color: l.TVs.colors.TEXT_DANGER })
                                          }),
                                          (0, r.jsx)(l.Text, {
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
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(l.LZC, { size: 16 }),
                      (0, r.jsxs)('div', {
                          className: x.headingContainer,
                          children: [
                              (0, r.jsx)(l.X6q, {
                                  variant: 'heading-lg/bold',
                                  children: 'Ignored Files'
                              }),
                              (0, r.jsx)(l.zxk, {
                                  look: l.zxk.Looks.FILLED,
                                  size: l.zxk.Sizes.TINY,
                                  onClick: n,
                                  children: 'Clear'
                              })
                          ]
                      }),
                      (0, r.jsx)('ul', {
                          children: t.map((e, t) =>
                              (0, r.jsx)(
                                  'li',
                                  {
                                      className: x.ignoredFileListItem,
                                      children: (0, r.jsx)(l.Text, {
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
        let { validateShopAssetPackage: e, reset: t, validationComplete: n, warnings: i, errors: o } = (0, m.g)(),
            s = Object.entries(o),
            c = Object.entries(i),
            u = s.length > 0,
            h = c.length > 0,
            p = a.useCallback(
                (n) => {
                    t(), e(n);
                },
                [e, t]
            );
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(d.L, { onDrop: p }),
                n
                    ? (0, r.jsxs)('div', {
                          className: x.validationSummary,
                          children: [
                              (0, r.jsx)(l.Text, {
                                  variant: 'text-md/normal',
                                  color: u ? 'text-danger' : 'text-normal',
                                  children: ''.concat(s.length, ' errors')
                              }),
                              (0, r.jsx)(l.Text, {
                                  variant: 'text-md/normal',
                                  color: h ? 'text-warning' : 'text-normal',
                                  children: ''.concat(c.length, ' warnings')
                              }),
                              (0, r.jsx)(l.zxk, {
                                  color: l.zxk.Colors.RED,
                                  look: l.zxk.Looks.OUTLINED,
                                  size: l.zxk.Sizes.TINY,
                                  onClick: t,
                                  children: 'Reset'
                              })
                          ]
                      })
                    : (0, r.jsx)(l.Text, {
                          variant: 'text-md/normal',
                          children: 'Drop asset folder to validate.'
                      }),
                (0, r.jsx)(l.LZC, { size: 16 }),
                u &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(l.X6q, {
                                variant: 'heading-lg/bold',
                                children: 'Errors'
                            }),
                            (0, r.jsx)(l.LZC, { size: 8 }),
                            (0, r.jsx)('ul', {
                                className: x.validationIssuesList,
                                children: s.map((e, t) => {
                                    let [n, a] = e;
                                    return (0, r.jsxs)(
                                        'li',
                                        {
                                            children: [
                                                (0, r.jsx)(l.Text, {
                                                    variant: 'text-md/bold',
                                                    color: 'text-danger',
                                                    children: n
                                                }),
                                                a.length > 0 &&
                                                    (0, r.jsx)('ul', {
                                                        className: x.validationIssuesList,
                                                        children: a.map((e, t) =>
                                                            (0, r.jsx)(
                                                                'li',
                                                                {
                                                                    children: (0, r.jsx)(l.Text, {
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
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(l.X6q, {
                                variant: 'heading-lg/bold',
                                children: 'Warnings'
                            }),
                            (0, r.jsx)(l.LZC, { size: 8 }),
                            (0, r.jsx)('ul', {
                                className: x.validationIssuesList,
                                children: Object.entries(i).map((e, t) => {
                                    let [n, a] = e;
                                    return (0, r.jsxs)(
                                        'li',
                                        {
                                            children: [
                                                (0, r.jsx)(l.Text, {
                                                    variant: 'text-md/bold',
                                                    color: 'text-warning',
                                                    children: n
                                                }),
                                                a.length > 0 &&
                                                    (0, r.jsx)('ul', {
                                                        className: x.validationIssuesList,
                                                        children: a.map((e, t) =>
                                                            (0, r.jsx)(
                                                                'li',
                                                                {
                                                                    children: (0, r.jsx)(l.Text, {
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
            { ignoredFilenames: i, clearAssets: o, clearIgnoredFilenames: s, processAndUpsertAssets: m } = (0, u.hm)(),
            h = a.useCallback(
                (e) => {
                    n(), m(e);
                },
                [m, n]
            );
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(d.L, { onDrop: h }),
                (0, r.jsx)(l.Text, {
                    variant: 'text-md/normal',
                    children: 'Drop files in this panel to begin preview.'
                }),
                (0, r.jsxs)('div', {
                    className: x.previewToggleContainer,
                    children: [
                        (0, r.jsx)(l.rsf, {
                            checked: e,
                            onChange: (e) => t(e)
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            children: 'Enable Preview'
                        }),
                        (0, r.jsx)(l.zxk, {
                            look: l.zxk.Looks.BLANK,
                            size: l.zxk.Sizes.SMALL,
                            onClick: _,
                            className: x.instructionsButton,
                            children: (0, r.jsx)(l.idN, { color: l.TVs.colors.BG_BRAND })
                        })
                    ]
                }),
                (0, r.jsx)(v, {}),
                (0, r.jsx)(j, {}),
                (0, r.jsx)(y, {
                    clearAssets: o,
                    clearIgnoredFiles: s
                }),
                (0, r.jsx)(C, {
                    ignoredFiles: i,
                    handleClearIgnoredFiles: s
                })
            ]
        });
    },
    S = () => {
        let [e, t] = a.useState('preview');
        return (0, r.jsxs)('div', {
            className: x.container,
            children: [
                (0, r.jsx)(i.Z, { className: x.divider }),
                (0, r.jsx)(l.sY7, {
                    options: p,
                    value: e,
                    onChange: (e) => {
                        let { value: n } = e;
                        return t(n);
                    },
                    className: x.panelModeControl,
                    optionClassName: x.panelModeControlOption
                }),
                (0, r.jsx)(l.LZC, { size: 8 }),
                'preview' === e && (0, r.jsx)(N, {}),
                'validate' === e && (0, r.jsx)(O, {}),
                (0, r.jsx)(l.LZC, { size: 16 }),
                (0, r.jsx)(i.Z, { className: x.divider })
            ]
        });
    };
