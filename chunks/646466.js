n.d(t, { O: () => v }), n(47120);
var r = n(200651),
    a = n(192379),
    l = n(481060),
    i = n(406432),
    o = n(511010),
    s = n(373071),
    c = n(637443),
    d = n(619899),
    u = n(18868),
    m = n(281598),
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
let p = () => {
        (0, l.nfh)(c.g)
            ? (0, l.Mr3)(c.g)
            : (0, l.ZDy)(
                  async () => {
                      let { ShopAssetsPreviewInstructionModal: e } = await Promise.resolve().then(n.bind(n, 637443));
                      return (t) => (0, r.jsx)(e, h({}, t));
                  },
                  {
                      modalKey: c.g,
                      onCloseRequest: () => (0, l.Mr3)(c.g)
                  }
              );
    },
    b = () => {
        (0, l.nfh)(c.c)
            ? (0, l.Mr3)(c.c)
            : (0, l.ZDy)(
                  async () => {
                      let { ShopPFXPreviewInstructionModal: e } = await Promise.resolve().then(n.bind(n, 637443));
                      return (t) => (0, r.jsx)(e, h({}, t));
                  },
                  {
                      modalKey: c.c,
                      onCloseRequest: () => (0, l.Mr3)(c.c)
                  }
              );
    },
    f = () => {
        let e = (0, s.sg)(),
            { previewProfileEffectId: t, setPreviewProfileEffectId: n } = (0, d.N9)(),
            i = a.useMemo(
                () =>
                    e.map((e) => ({
                        label: e.name,
                        value: e.id
                    })),
                [e]
            );
        return (0, r.jsxs)('div', {
            className: x.profileEffectPreviewSelector,
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
                            look: l.zxk.Looks.FILLED,
                            size: l.zxk.Sizes.TINY,
                            onClick: () => n(null),
                            children: 'Clear'
                        }),
                        (0, r.jsx)(l.zxk, {
                            look: l.zxk.Looks.BLANK,
                            size: l.zxk.Sizes.SMALL,
                            onClick: b,
                            className: x.instructionsButton,
                            children: (0, r.jsx)(l.idN, { color: l.TVs.colors.BG_BRAND })
                        })
                    ]
                }),
                (0, r.jsx)(l.q4e, {
                    options: i,
                    value: t,
                    onChange: (e) => n(e)
                })
            ]
        });
    },
    _ = (e) => {
        let { handleClearIgnoredFiles: t } = e,
            { assets: n, deleteAsset: i, clearAssets: o } = (0, d.N9)(),
            s = a.useMemo(
                () =>
                    Object.values(n).map((e) => ({
                        label: e.name,
                        value: e.type
                    })),
                [n]
            ),
            c = a.useCallback((e) => i(e), [i]),
            u = a.useCallback(() => {
                o(), t();
            }, [o, t]);
        return 0 === s.length
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
                                  onClick: u,
                                  children: 'Clear'
                              })
                          ]
                      }),
                      (0, r.jsx)('ul', {
                          children: s.map((e) =>
                              (0, r.jsxs)(
                                  'li',
                                  {
                                      className: x.uploadedFileListItem,
                                      children: [
                                          (0, r.jsx)(l.zxk, {
                                              innerClassName: x.removeFileButtonInnerContents,
                                              look: l.zxk.Looks.BLANK,
                                              size: l.zxk.Sizes.ICON,
                                              onClick: () => c(e.value),
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
    g = (e) => {
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
    v = () => {
        let [e, t] = a.useState([]),
            { upsertAsset: n, previewEnabled: s, setPreviewEnabled: c } = (0, d.N9)(),
            h = a.useCallback(
                (e, r) => {
                    let a = m.Kj[e.name];
                    if (null == a) return void t((t) => [...t, e.name]);
                    n(a, e);
                },
                [n]
            ),
            b = a.useCallback(
                async (e) => {
                    t([]);
                    let n = await (0, m.RF)(e),
                        r = !1;
                    n.forEach((e) => {
                        ((0, i.tw)(e.type) || (0, i.X2)(e.type)) && ((r = !0), (0, m.ZK)(e, h, m.Eo));
                    }),
                        r ? c(!0) : (0, u.Y)();
                },
                [h, c]
            ),
            v = a.useCallback(() => t([]), []);
        return (0, r.jsxs)('div', {
            className: x.container,
            children: [
                (0, r.jsx)(o.Z, { className: x.divider }),
                (0, r.jsx)(u.L, { onDrop: b }),
                (0, r.jsxs)('div', {
                    className: x.previewToggleContainer,
                    children: [
                        (0, r.jsx)(l.rsf, {
                            checked: s,
                            onChange: (e) => c(e)
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            children: 'Enable Preview'
                        }),
                        (0, r.jsx)(l.zxk, {
                            look: l.zxk.Looks.BLANK,
                            size: l.zxk.Sizes.SMALL,
                            onClick: p,
                            className: x.instructionsButton,
                            children: (0, r.jsx)(l.idN, { color: l.TVs.colors.BG_BRAND })
                        })
                    ]
                }),
                (0, r.jsx)(l.Text, {
                    variant: 'text-md/normal',
                    children: 'Drop files in this panel to begin preview.'
                }),
                (0, r.jsx)(f, {}),
                (0, r.jsx)(_, { handleClearIgnoredFiles: v }),
                (0, r.jsx)(g, {
                    ignoredFiles: e,
                    handleClearIgnoredFiles: v
                }),
                (0, r.jsx)(l.LZC, { size: 16 }),
                (0, r.jsx)(o.Z, { className: x.divider })
            ]
        });
    };
