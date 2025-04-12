n.d(t, { O: () => j }), n(388685);
var r = n(200651),
    a = n(192379),
    l = n(481060),
    i = n(511010),
    o = n(373071),
    s = n(637443),
    c = n(619899),
    d = n(18868),
    u = n(281598),
    m = n(63874);
function x(e) {
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
let h = {
        label: '[none selected]',
        value: null
    },
    p = () => {
        (0, l.nfh)(s.g)
            ? (0, l.Mr3)(s.g)
            : (0, l.ZDy)(
                  async () => {
                      let { ShopAssetsPreviewInstructionModal: e } = await Promise.resolve().then(n.bind(n, 637443));
                      return (t) => (0, r.jsx)(e, x({}, t));
                  },
                  {
                      modalKey: s.g,
                      onCloseRequest: () => (0, l.Mr3)(s.g)
                  }
              );
    },
    b = () => {
        (0, l.nfh)(s.c)
            ? (0, l.Mr3)(s.c)
            : (0, l.ZDy)(
                  async () => {
                      let { ShopPFXPreviewInstructionModal: e } = await Promise.resolve().then(n.bind(n, 637443));
                      return (t) => (0, r.jsx)(e, x({}, t));
                  },
                  {
                      modalKey: s.c,
                      onCloseRequest: () => (0, l.Mr3)(s.c)
                  }
              );
    },
    f = () => {
        let e = (0, o.lb)(),
            { previewProfileEffectId: t, setPreviewProfileEffectId: n } = (0, c.N9)(),
            i = a.useMemo(
                () => [
                    h,
                    ...e.map((e) => ({
                        label: e.name,
                        value: e.id
                    }))
                ],
                [e]
            );
        return (0, r.jsxs)('div', {
            className: m.previewSelector,
            children: [
                (0, r.jsx)(l.LZC, { size: 16 }),
                (0, r.jsxs)('div', {
                    className: m.headingContainer,
                    children: [
                        (0, r.jsx)(l.X6q, {
                            variant: 'heading-md/bold',
                            children: 'Preview Profile Effect'
                        }),
                        (0, r.jsx)(l.zxk, {
                            look: l.zxk.Looks.FILLED,
                            size: l.zxk.Sizes.TINY,
                            onClick: () => n(null),
                            children: 'Clear All'
                        }),
                        (0, r.jsx)(l.zxk, {
                            look: l.zxk.Looks.BLANK,
                            size: l.zxk.Sizes.SMALL,
                            onClick: b,
                            className: m.instructionsButton,
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
    _ = () => {
        let { previewAvatarDecorationId: e, setPreviewAvatarDecorationId: t } = (0, c.N9)(),
            { avatarDecorationAssets: n } = (0, c.xq)(),
            i = a.useMemo(
                () => [
                    h,
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
                  className: m.previewSelector,
                  children: [
                      (0, r.jsx)(l.LZC, { size: 16 }),
                      (0, r.jsx)(l.X6q, {
                          variant: 'heading-md/bold',
                          children: 'Preview Avatar Decoration'
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
    g = (e) => {
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
            x = a.useCallback(() => {
                s(), t(), n();
            }, [s, t, n]);
        return 0 === d.length
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(l.LZC, { size: 16 }),
                      (0, r.jsxs)('div', {
                          className: m.headingContainer,
                          children: [
                              (0, r.jsx)(l.X6q, {
                                  variant: 'heading-lg/bold',
                                  children: 'Uploaded Assets'
                              }),
                              (0, r.jsx)(l.zxk, {
                                  look: l.zxk.Looks.FILLED,
                                  size: l.zxk.Sizes.TINY,
                                  onClick: x,
                                  children: 'Clear All'
                              })
                          ]
                      }),
                      (0, r.jsx)('ul', {
                          children: d.map((e) =>
                              (0, r.jsxs)(
                                  'li',
                                  {
                                      className: m.uploadedFileListItem,
                                      children: [
                                          (0, r.jsx)(l.zxk, {
                                              innerClassName: m.removeFileButtonInnerContents,
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
    v = (e) => {
        let { ignoredFiles: t, handleClearIgnoredFiles: n } = e;
        return 0 === t.length
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(l.LZC, { size: 16 }),
                      (0, r.jsxs)('div', {
                          className: m.headingContainer,
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
                                      className: m.ignoredFileListItem,
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
    j = () => {
        let { previewEnabled: e, setPreviewEnabled: t, clearAssets: n } = (0, c.N9)(),
            { ignoredFilenames: o, clearAssets: s, clearIgnoredFilenames: x, processAndUpsertAssets: h } = (0, u.KI)(),
            b = a.useCallback(
                (e) => {
                    n(), h(e);
                },
                [h, n]
            );
        return (0, r.jsxs)('div', {
            className: m.container,
            children: [
                (0, r.jsx)(i.Z, { className: m.divider }),
                (0, r.jsx)(d.L, { onDrop: b }),
                (0, r.jsxs)('div', {
                    className: m.previewToggleContainer,
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
                            onClick: p,
                            className: m.instructionsButton,
                            children: (0, r.jsx)(l.idN, { color: l.TVs.colors.BG_BRAND })
                        })
                    ]
                }),
                (0, r.jsx)(l.Text, {
                    variant: 'text-md/normal',
                    children: 'Drop files in this panel to begin preview.'
                }),
                (0, r.jsx)(f, {}),
                (0, r.jsx)(_, {}),
                (0, r.jsx)(g, {
                    clearAssets: s,
                    clearIgnoredFiles: x
                }),
                (0, r.jsx)(v, {
                    ignoredFiles: o,
                    handleClearIgnoredFiles: x
                }),
                (0, r.jsx)(l.LZC, { size: 16 }),
                (0, r.jsx)(i.Z, { className: m.divider })
            ]
        });
    };
