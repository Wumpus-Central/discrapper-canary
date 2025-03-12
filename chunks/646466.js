n.d(t, { O: () => p }), n(47120);
var r = n(200651),
    a = n(192379),
    i = n(481060),
    l = n(726862),
    o = n(619899),
    s = n(18868),
    c = n(281598),
    d = n(631541);
let u = () =>
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
                modalKey: l.c,
                onCloseRequest: () => (0, i.Mr3)(l.c)
            }
        ),
    m = () => {
        let { assets: e, deleteAsset: t } = (0, o.N)(),
            n = a.useMemo(
                () =>
                    Object.values(e).map((e) => ({
                        label: e.name,
                        value: e.type
                    })),
                [e]
            ),
            l = a.useCallback((e) => t(e), [t]);
        return 0 === n.length
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(i.LZC, { size: 16 }),
                      (0, r.jsx)(i.X6q, {
                          variant: 'heading-lg/bold',
                          children: 'Uploaded Assets'
                      }),
                      (0, r.jsx)('ul', {
                          children: n.map((e) =>
                              (0, r.jsxs)(
                                  'li',
                                  {
                                      className: d.uploadedFileListItem,
                                      children: [
                                          (0, r.jsx)(i.zxk, {
                                              innerClassName: d.removeFileButtonInnerContents,
                                              look: i.zxk.Looks.BLANK,
                                              size: i.zxk.Sizes.ICON,
                                              onClick: () => l(e.value),
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
    h = (e) => {
        let { ignoredFiles: t, handleClearIgnoredFiles: n } = e;
        return 0 === t.length
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(i.LZC, { size: 16 }),
                      (0, r.jsxs)('div', {
                          className: d.headingContainer,
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
                                      className: d.ignoredFileListItem,
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
    p = () => {
        let [e, t] = a.useState([]),
            { upsertAsset: n, previewEnabled: l, setPreviewEnabled: p } = (0, o.N)(),
            x = a.useCallback(
                (e, r) => {
                    let a = c.Kj[e.name];
                    if (null == a || !(e.type.startsWith('image/') || e.type.startsWith('video/'))) {
                        t((t) => [...t, e.name]);
                        return;
                    }
                    n(a, e);
                },
                [n]
            ),
            f = a.useCallback(
                async (e) => {
                    t([]), (await (0, c.RF)(e)).forEach((e) => (0, c.ZK)(e, x, c.Eo)), p(!0);
                },
                [x, p]
            ),
            b = a.useCallback(() => t([]), []);
        return (0, r.jsxs)('div', {
            className: d.container,
            children: [
                (0, r.jsx)(s.L, { onDrop: f }),
                (0, r.jsxs)('div', {
                    className: d.uploadInstructionsContainer,
                    children: [
                        (0, r.jsx)(i.Text, {
                            variant: 'text-md/normal',
                            children: 'To upload assets for preview, drop them in this panel.'
                        }),
                        (0, r.jsx)(i.zxk, {
                            look: i.zxk.Looks.BLANK,
                            size: i.zxk.Sizes.SMALL,
                            onClick: u,
                            children: (0, r.jsx)(i.idN, { color: i.TVs.colors.BG_BRAND })
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: d.previewToggleContainer,
                    children: [
                        (0, r.jsx)(i.rsf, {
                            checked: l,
                            onChange: (e) => p(e)
                        }),
                        (0, r.jsx)(i.Text, {
                            variant: 'text-md/normal',
                            children: 'Enable Preview'
                        })
                    ]
                }),
                (0, r.jsx)(m, {}),
                (0, r.jsx)(h, {
                    ignoredFiles: e,
                    handleClearIgnoredFiles: b
                })
            ]
        });
    };
