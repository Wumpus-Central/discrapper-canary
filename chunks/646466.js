n.d(t, {
    L: () => N,
    O: () => O,
}),
    n(388685);
var a = n(54381),
    r = n(473749),
    l = n(199849),
    i = n(481060),
    s = n(373071),
    o = n(637443),
    c = n(619899),
    d = n(18868),
    u = n(281598),
    m = n(206878),
    p = n(414648);
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
let f = r.createContext({
        setDropHandler: () => {},
    }),
    x = [
        {
            name: "Preview",
            value: "preview",
        },
        {
            name: "Validate",
            value: "validate",
        },
    ],
    b = {
        label: "[none selected]",
        value: null,
    },
    g = {
        label: "[preview all]",
        value: null,
    },
    v = () => {
        (0, i.nfh)(o.g)
            ? (0, i.Mr3)(o.g)
            : (0, i.ZDy)(
                  async () => {
                      let { ShopAssetsPreviewInstructionModal: e } = await Promise.resolve().then(n.bind(n, 637443));
                      return (t) => (0, a.jsx)(e, h({}, t));
                  },
                  {
                      modalKey: o.g,
                      onCloseRequest: () => (0, i.Mr3)(o.g),
                  },
              );
    },
    j = () => {
        (0, i.nfh)(o.c)
            ? (0, i.Mr3)(o.c)
            : (0, i.ZDy)(
                  async () => {
                      let { ShopPFXPreviewInstructionModal: e } = await Promise.resolve().then(n.bind(n, 637443));
                      return (t) => (0, a.jsx)(e, h({}, t));
                  },
                  {
                      modalKey: o.c,
                      onCloseRequest: () => (0, i.Mr3)(o.c),
                  },
              );
    },
    y = () => {
        let e = (0, s.lb)(),
            { previewProfileEffectSkuId: t, setPreviewProfileEffectSkuId: n } = (0, c.N9)(),
            o = r.useMemo(
                () => [
                    b,
                    ...e.map((e) => ({
                        label: e.name,
                        value: e.skuId,
                    })),
                ],
                [e],
            );
        return (0, a.jsxs)("div", {
            className: p.previewSelector,
            children: [
                (0, a.jsx)(i.LZC, { size: 16 }),
                (0, a.jsxs)("div", {
                    className: p.headingContainer,
                    children: [
                        (0, a.jsx)(i.Heading, {
                            variant: "heading-md/bold",
                            children: "Preview Profile Effect",
                        }),
                        (0, a.jsx)(i.hU, {
                            variant: "icon-only",
                            size: "sm",
                            onClick: j,
                            icon: i.idN,
                            "aria-label": "Open PFX preview instructions",
                        }),
                    ],
                }),
                (0, a.jsx)(l.y6, {
                    options: o,
                    value: t,
                    maxVisibleItems: 30,
                    onChange: (e) => n(e),
                }),
            ],
        });
    },
    C = () => {
        let { previewAvatarDecorationSkuId: e, setPreviewAvatarDecorationSkuId: t } = (0, c.N9)(),
            { avatarDecorationAssets: n } = (0, c.xq)(),
            s = r.useMemo(
                () => [
                    g,
                    ...n.map((e) => ({
                        label: e.name,
                        value: e.name,
                    })),
                ],
                [n],
            );
        return 0 === n.length
            ? null
            : (0, a.jsxs)("div", {
                  className: p.previewSelector,
                  children: [
                      (0, a.jsx)(i.LZC, { size: 16 }),
                      (0, a.jsx)(i.Heading, {
                          variant: "heading-md/bold",
                          children: "Preview Avatar Decorations",
                      }),
                      (0, a.jsx)(l.y6, {
                          options: s,
                          value: e,
                          maxVisibleItems: 30,
                          onChange: (e) => t(e),
                      }),
                  ],
              });
    },
    _ = (e) => {
        let { clearAssets: t, clearIgnoredFiles: n } = e,
            { collectionAssets: l } = (0, c.xq)(),
            { deleteCollectionAsset: s, clearAssets: o } = (0, c.N9)(),
            d = r.useMemo(
                () =>
                    Object.values(l).map((e) => ({
                        label: e.name,
                        value: e.type,
                    })),
                [l],
            ),
            u = r.useCallback((e) => s(e), [s]),
            m = r.useCallback(() => {
                o(), t(), n();
            }, [o, t, n]);
        return 0 === d.length
            ? null
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(i.LZC, { size: 16 }),
                      (0, a.jsxs)("div", {
                          className: p.headingContainer,
                          children: [
                              (0, a.jsx)(i.Heading, {
                                  variant: "heading-lg/bold",
                                  children: "Uploaded Assets",
                              }),
                              (0, a.jsx)(i.Button, {
                                  variant: "critical-primary",
                                  size: "sm",
                                  onClick: m,
                                  text: "Clear All",
                              }),
                          ],
                      }),
                      (0, a.jsx)("ul", {
                          children: d.map((e) =>
                              (0, a.jsxs)(
                                  "li",
                                  {
                                      className: p.uploadedFileListItem,
                                      children: [
                                          (0, a.jsx)(i.hU, {
                                              variant: "icon-only",
                                              size: "sm",
                                              onClick: () => u(e.value),
                                              icon: i.Dio,
                                              "aria-label": "Remove asset",
                                          }),
                                          (0, a.jsx)(i.Text, {
                                              variant: "text-md/normal",
                                              children: e.label,
                                          }),
                                      ],
                                  },
                                  e.value,
                              ),
                          ),
                      }),
                  ],
              });
    },
    S = (e) => {
        let { ignoredFiles: t, handleClearIgnoredFiles: n } = e;
        return 0 === t.length
            ? null
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(i.LZC, { size: 16 }),
                      (0, a.jsxs)("div", {
                          className: p.headingContainer,
                          children: [
                              (0, a.jsx)(i.Heading, {
                                  variant: "heading-lg/bold",
                                  children: "Ignored Files",
                              }),
                              (0, a.jsx)(i.Button, {
                                  variant: "primary",
                                  size: "sm",
                                  onClick: n,
                                  text: "Clear",
                              }),
                          ],
                      }),
                      (0, a.jsx)("ul", {
                          children: t.map((e, t) =>
                              (0, a.jsx)(
                                  "li",
                                  {
                                      className: p.ignoredFileListItem,
                                      children: (0, a.jsx)(i.Text, {
                                          variant: "text-md/normal",
                                          children: e,
                                      }),
                                  },
                                  "".concat(e, "-").concat(t),
                              ),
                          ),
                      }),
                  ],
              });
    },
    E = () => {
        let { validateShopAssetPackage: e, reset: t, validationComplete: n, warnings: l, errors: s } = (0, m.g)(),
            o = Object.entries(s),
            c = Object.entries(l),
            d = o.length > 0,
            u = c.length > 0,
            { setDropHandler: h } = r.useContext(f),
            x = r.useCallback(
                (n) => {
                    t(), e(n);
                },
                [e, t],
            );
        return (
            r.useEffect(() => {
                h(x);
            }, [x, h]),
            (0, a.jsxs)(a.Fragment, {
                children: [
                    n
                        ? (0, a.jsxs)("div", {
                              className: p.validationSummary,
                              children: [
                                  (0, a.jsx)(i.Text, {
                                      variant: "text-md/normal",
                                      color: d ? "text-feedback-critical" : "text-default",
                                      children: "".concat(o.length, " errors"),
                                  }),
                                  (0, a.jsx)(i.Text, {
                                      variant: "text-md/normal",
                                      color: u ? "text-feedback-warning" : "text-default",
                                      children: "".concat(c.length, " warnings"),
                                  }),
                                  (0, a.jsx)(i.Button, {
                                      variant: "primary",
                                      size: "sm",
                                      onClick: t,
                                      text: "Reset",
                                  }),
                              ],
                          })
                        : (0, a.jsx)(i.Text, {
                              variant: "text-md/normal",
                              children: "Drop asset folder to validate.",
                          }),
                    (0, a.jsx)(i.LZC, { size: 16 }),
                    d &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(i.Heading, {
                                    variant: "heading-lg/bold",
                                    children: "Errors",
                                }),
                                (0, a.jsx)(i.LZC, { size: 8 }),
                                (0, a.jsx)("ul", {
                                    className: p.validationIssuesList,
                                    children: o.map((e, t) => {
                                        let [n, r] = e;
                                        return (0, a.jsxs)(
                                            "li",
                                            {
                                                children: [
                                                    (0, a.jsx)(i.Text, {
                                                        variant: "text-md/bold",
                                                        color: "text-feedback-critical",
                                                        children: n,
                                                    }),
                                                    r.length > 0 &&
                                                        (0, a.jsx)("ul", {
                                                            className: p.validationIssuesList,
                                                            children: r.map((e, t) =>
                                                                (0, a.jsx)(
                                                                    "li",
                                                                    {
                                                                        children: (0, a.jsx)(i.Text, {
                                                                            variant: "text-sm/normal",
                                                                            color: "text-feedback-critical",
                                                                            children: e,
                                                                        }),
                                                                    },
                                                                    "".concat(e, "-").concat(t),
                                                                ),
                                                            ),
                                                        }),
                                                ],
                                            },
                                            "".concat(n, "-").concat(t),
                                        );
                                    }),
                                }),
                            ],
                        }),
                    u &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(i.Heading, {
                                    variant: "heading-lg/bold",
                                    children: "Warnings",
                                }),
                                (0, a.jsx)(i.LZC, { size: 8 }),
                                (0, a.jsx)("ul", {
                                    className: p.validationIssuesList,
                                    children: Object.entries(l).map((e, t) => {
                                        let [n, r] = e;
                                        return (0, a.jsxs)(
                                            "li",
                                            {
                                                children: [
                                                    (0, a.jsx)(i.Text, {
                                                        variant: "text-md/bold",
                                                        color: "text-feedback-warning",
                                                        children: n,
                                                    }),
                                                    r.length > 0 &&
                                                        (0, a.jsx)("ul", {
                                                            className: p.validationIssuesList,
                                                            children: r.map((e, t) =>
                                                                (0, a.jsx)(
                                                                    "li",
                                                                    {
                                                                        children: (0, a.jsx)(i.Text, {
                                                                            variant: "text-sm/normal",
                                                                            color: "text-feedback-warning",
                                                                            children: e,
                                                                        }),
                                                                    },
                                                                    "".concat(e, "-").concat(t),
                                                                ),
                                                            ),
                                                        }),
                                                ],
                                            },
                                            "".concat(n, "-").concat(t),
                                        );
                                    }),
                                }),
                            ],
                        }),
                ],
            })
        );
    },
    T = () => {
        let { previewEnabled: e, setPreviewEnabled: t, clearAssets: n } = (0, c.N9)(),
            { ignoredFilenames: l, clearAssets: s, clearIgnoredFilenames: o, processAndUpsertAssets: d } = (0, u.hm)(),
            { setDropHandler: m } = r.useContext(f),
            h = r.useCallback(
                (e) => {
                    n(), d(e);
                },
                [d, n],
            );
        return (
            r.useEffect(() => {
                m(h);
            }, [h, m]),
            (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children: "Drop files in this panel to begin preview.",
                    }),
                    (0, a.jsxs)("div", {
                        className: p.previewToggleContainer,
                        children: [
                            (0, a.jsx)(i.rsf, {
                                checked: e,
                                onChange: (e) => t(e),
                            }),
                            (0, a.jsx)(i.Text, {
                                variant: "text-md/normal",
                                children: "Enable Preview",
                            }),
                            (0, a.jsx)(i.hU, {
                                variant: "icon-only",
                                size: "sm",
                                onClick: v,
                                icon: i.idN,
                                "aria-label": "Open preview instructions",
                            }),
                        ],
                    }),
                    (0, a.jsx)(y, {}),
                    (0, a.jsx)(C, {}),
                    (0, a.jsx)(_, {
                        clearAssets: s,
                        clearIgnoredFiles: o,
                    }),
                    (0, a.jsx)(S, {
                        ignoredFiles: l,
                        handleClearIgnoredFiles: o,
                    }),
                ],
            })
        );
    },
    O = () => {
        let [e, t] = r.useState("preview");
        return (0, a.jsxs)("div", {
            className: p.container,
            children: [
                (0, a.jsx)(i.sY7, {
                    options: x,
                    value: e,
                    onChange: (e) => {
                        let { value: n } = e;
                        return t(n);
                    },
                    className: p.panelModeControl,
                    optionClassName: p.panelModeControlOption,
                }),
                (0, a.jsx)(i.LZC, { size: 8 }),
                "preview" === e && (0, a.jsx)(T, {}),
                "validate" === e && (0, a.jsx)(E, {}),
                (0, a.jsx)(i.LZC, { size: 16 }),
            ],
        });
    },
    N = (e) => {
        let { children: t } = e,
            [n, l] = r.useState(() => () => {}),
            i = r.useMemo(() => ({ setDropHandler: (e) => l(() => e) }), []);
        return (0, a.jsx)(f.Provider, {
            value: i,
            children: (0, a.jsx)(d.L, {
                onDrop: n,
                children: t,
            }),
        });
    };
