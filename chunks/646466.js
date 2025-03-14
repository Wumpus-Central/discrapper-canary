n.d(t, { O: () => x }), n(47120);
var r = n(200651),
    a = n(192379),
    i = n(481060),
    l = n(406432),
    o = n(726862),
    s = n(619899),
    c = n(18868),
    d = n(281598),
    u = n(631541);
let m = () =>
        (0, i.ZDy)(
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
                modalKey: o.c,
                onCloseRequest: () => (0, i.Mr3)(o.c)
            }
        ),
    h = (e) => {
        let { handleClearIgnoredFiles: t } = e,
            { assets: n, deleteAsset: l, clearAssets: o } = (0, s.N)(),
            c = a.useMemo(
                () =>
                    Object.values(n).map((e) => ({
                        label: e.name,
                        value: e.type
                    })),
                [n]
            ),
            d = a.useCallback((e) => l(e), [l]),
            m = a.useCallback(() => {
                o(), t();
            }, [o, t]);
        return 0 === c.length
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(i.LZC, { size: 16 }),
                      (0, r.jsxs)('div', {
                          className: u.headingContainer,
                          children: [
                              (0, r.jsx)(i.X6q, {
                                  variant: 'heading-lg/bold',
                                  children: 'Uploaded Assets'
                              }),
                              (0, r.jsx)(i.zxk, {
                                  look: i.zxk.Looks.FILLED,
                                  size: i.zxk.Sizes.TINY,
                                  onClick: m,
                                  children: 'Clear'
                              })
                          ]
                      }),
                      (0, r.jsx)('ul', {
                          children: c.map((e) =>
                              (0, r.jsxs)(
                                  'li',
                                  {
                                      className: u.uploadedFileListItem,
                                      children: [
                                          (0, r.jsx)(i.zxk, {
                                              innerClassName: u.removeFileButtonInnerContents,
                                              look: i.zxk.Looks.BLANK,
                                              size: i.zxk.Sizes.ICON,
                                              onClick: () => d(e.value),
                                              children: (0, r.jsx)(i.Dio, { color: i.TVs.colors.TEXT_DANGER })
                                          }),
                                          (0, r.jsx)(i.Text, {
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
    p = (e) => {
        let { ignoredFiles: t, handleClearIgnoredFiles: n } = e;
        return 0 === t.length
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(i.LZC, { size: 16 }),
                      (0, r.jsxs)('div', {
                          className: u.headingContainer,
                          children: [
                              (0, r.jsx)(i.X6q, {
                                  variant: 'heading-lg/bold',
                                  children: 'Ignored Files'
                              }),
                              (0, r.jsx)(i.zxk, {
                                  look: i.zxk.Looks.FILLED,
                                  size: i.zxk.Sizes.TINY,
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
                                      className: u.ignoredFileListItem,
                                      children: (0, r.jsx)(i.Text, {
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
    x = () => {
        let [e, t] = a.useState([]),
            { upsertAsset: n, previewEnabled: o, setPreviewEnabled: x } = (0, s.N)(),
            f = a.useCallback(
                (e, r) => {
                    let a = d.Kj[e.name];
                    if (null == a) {
                        t((t) => [...t, e.name]);
                        return;
                    }
                    n(a, e);
                },
                [n]
            ),
            b = a.useCallback(
                async (e) => {
                    t([]);
                    let n = await (0, d.RF)(e),
                        r = !1;
                    n.forEach((e) => {
                        ((0, l.tw)(e.type) || (0, l.X2)(e.type)) && ((r = !0), (0, d.ZK)(e, f, d.Eo));
                    }),
                        r ? x(!0) : (0, c.Y)();
                },
                [f, x]
            ),
            _ = a.useCallback(() => t([]), []);
        return (0, r.jsxs)('div', {
            className: u.container,
            children: [
                (0, r.jsx)(c.L, { onDrop: b }),
                (0, r.jsxs)('div', {
                    className: u.uploadInstructionsContainer,
                    children: [
                        (0, r.jsx)(i.Text, {
                            variant: 'text-md/normal',
                            children: 'To upload assets for preview, drop them in this panel.'
                        }),
                        (0, r.jsx)(i.zxk, {
                            look: i.zxk.Looks.BLANK,
                            size: i.zxk.Sizes.SMALL,
                            onClick: m,
                            children: (0, r.jsx)(i.idN, { color: i.TVs.colors.BG_BRAND })
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: u.previewToggleContainer,
                    children: [
                        (0, r.jsx)(i.rsf, {
                            checked: o,
                            onChange: (e) => x(e)
                        }),
                        (0, r.jsx)(i.Text, {
                            variant: 'text-md/normal',
                            children: 'Enable Preview'
                        })
                    ]
                }),
                (0, r.jsx)(h, { handleClearIgnoredFiles: _ }),
                (0, r.jsx)(p, {
                    ignoredFiles: e,
                    handleClearIgnoredFiles: _
                }),
                (0, r.jsx)(i.LZC, { size: 16 })
            ]
        });
    };
