n.d(t, { O: () => f }), n(47120);
var r = n(200651),
    a = n(192379),
    l = n(481060),
    i = n(406432),
    o = n(451593),
    s = n(726862),
    c = n(619899),
    d = n(18868),
    u = n(281598),
    m = n(631541);
let x = () =>
        (0, l.ZDy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 726862));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        (function (e) {
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
                        })({}, t)
                    );
            },
            {
                modalKey: s.c,
                onCloseRequest: () => (0, l.Mr3)(s.c)
            }
        ),
    h = () => {
        let { profileEffects: e } = (0, o.E)(),
            { previewProfileEffectId: t, setPreviewProfileEffectId: n } = (0, c.N9)(),
            i = a.useMemo(
                () =>
                    Object.values(e).map((e) => ({
                        label: e.name,
                        value: e.id
                    })),
                [e]
            );
        return (0, r.jsxs)('div', {
            className: m.profileEffectPreviewSelector,
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
                            children: 'Clear'
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
    p = (e) => {
        let { handleClearIgnoredFiles: t } = e,
            { assets: n, deleteAsset: i, clearAssets: o } = (0, c.N9)(),
            s = a.useMemo(
                () =>
                    Object.values(n).map((e) => ({
                        label: e.name,
                        value: e.type
                    })),
                [n]
            ),
            d = a.useCallback((e) => i(e), [i]),
            u = a.useCallback(() => {
                o(), t();
            }, [o, t]);
        return 0 === s.length
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
                                      className: m.uploadedFileListItem,
                                      children: [
                                          (0, r.jsx)(l.zxk, {
                                              innerClassName: m.removeFileButtonInnerContents,
                                              look: l.zxk.Looks.BLANK,
                                              size: l.zxk.Sizes.ICON,
                                              onClick: () => d(e.value),
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
    b = (e) => {
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
    f = () => {
        let [e, t] = a.useState([]),
            { upsertAsset: n, previewEnabled: o, setPreviewEnabled: s } = (0, c.N9)(),
            f = a.useCallback(
                (e, r) => {
                    let a = u.Kj[e.name];
                    if (null == a) {
                        t((t) => [...t, e.name]);
                        return;
                    }
                    n(a, e);
                },
                [n]
            ),
            _ = a.useCallback(
                async (e) => {
                    t([]);
                    let n = await (0, u.RF)(e),
                        r = !1;
                    n.forEach((e) => {
                        ((0, i.tw)(e.type) || (0, i.X2)(e.type)) && ((r = !0), (0, u.ZK)(e, f, u.Eo));
                    }),
                        r ? s(!0) : (0, d.Y)();
                },
                [f, s]
            ),
            g = a.useCallback(() => t([]), []);
        return (0, r.jsxs)('div', {
            className: m.container,
            children: [
                (0, r.jsx)(d.L, { onDrop: _ }),
                (0, r.jsxs)('div', {
                    className: m.uploadInstructionsContainer,
                    children: [
                        (0, r.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            children: 'To upload assets for preview, drop them in this panel.'
                        }),
                        (0, r.jsx)(l.zxk, {
                            look: l.zxk.Looks.BLANK,
                            size: l.zxk.Sizes.SMALL,
                            onClick: x,
                            children: (0, r.jsx)(l.idN, { color: l.TVs.colors.BG_BRAND })
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: m.previewToggleContainer,
                    children: [
                        (0, r.jsx)(l.rsf, {
                            checked: o,
                            onChange: (e) => s(e)
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            children: 'Enable Preview'
                        })
                    ]
                }),
                (0, r.jsx)(h, {}),
                (0, r.jsx)(p, { handleClearIgnoredFiles: g }),
                (0, r.jsx)(b, {
                    ignoredFiles: e,
                    handleClearIgnoredFiles: g
                }),
                (0, r.jsx)(l.LZC, { size: 16 })
            ]
        });
    };
