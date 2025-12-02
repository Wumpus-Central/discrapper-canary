n.d(t, {
    L: () => T,
    O: () => N,
}),
    n(388685);
var a = n(54381),
    l = n(473749),
    i = n(481060),
    r = n(373071),
    s = n(637443),
    o = n(619899),
    c = n(18868),
    d = n(281598),
    u = n(206878),
    m = n(198764);
function p(e) {
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
let h = l.createContext({
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
    f = {
        label: "[none selected]",
        value: null,
    },
    g = {
        label: "[preview all]",
        value: null,
    },
    b = () => {
        (0, i.nfh)(s.g)
            ? (0, i.Mr3)(s.g)
            : (0, i.ZDy)(
                  async () => {
                      let { ShopAssetsPreviewInstructionModal: e } = await Promise.resolve().then(n.bind(n, 637443));
                      return (t) => (0, a.jsx)(e, p({}, t));
                  },
                  {
                      modalKey: s.g,
                      onCloseRequest: () => (0, i.Mr3)(s.g),
                  },
              );
    },
    v = () => {
        (0, i.nfh)(s.c)
            ? (0, i.Mr3)(s.c)
            : (0, i.ZDy)(
                  async () => {
                      let { ShopPFXPreviewInstructionModal: e } = await Promise.resolve().then(n.bind(n, 637443));
                      return (t) => (0, a.jsx)(e, p({}, t));
                  },
                  {
                      modalKey: s.c,
                      onCloseRequest: () => (0, i.Mr3)(s.c),
                  },
              );
    },
    j = () => {
        let e = (0, r.lb)(),
            { previewProfileEffectSkuId: t, setPreviewProfileEffectSkuId: n } = (0, o.N9)(),
            s = l.useMemo(
                () => [
                    f,
                    ...e.map((e) => ({
                        label: e.name,
                        value: e.skuId,
                    })),
                ],
                [e],
            );
        return (0, a.jsxs)("div", {
            className: m.previewSelector,
            children: [
                (0, a.jsx)(i.LZC, { size: 16 }),
                (0, a.jsxs)("div", {
                    className: m.headingContainer,
                    children: [
                        (0, a.jsx)(i.Heading, {
                            variant: "heading-md/bold",
                            children: "Preview Profile Effect",
                        }),
                        (0, a.jsx)(i.hU, {
                            variant: "icon-only",
                            size: "sm",
                            onClick: v,
                            icon: i.idN,
                            "aria-label": "Open PFX preview instructions",
                        }),
                    ],
                }),
                (0, a.jsx)(i.q4e, {
                    options: s,
                    value: t,
                    maxVisibleItems: 30,
                    onChange: (e) => n(e),
                }),
            ],
        });
    },
    _ = () => {
        let { previewAvatarDecorationSkuId: e, setPreviewAvatarDecorationSkuId: t } = (0, o.N9)(),
            { avatarDecorationAssets: n } = (0, o.xq)(),
            r = l.useMemo(
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
                  className: m.previewSelector,
                  children: [
                      (0, a.jsx)(i.LZC, { size: 16 }),
                      (0, a.jsx)(i.Heading, {
                          variant: "heading-md/bold",
                          children: "Preview Avatar Decorations",
                      }),
                      (0, a.jsx)(i.q4e, {
                          options: r,
                          value: e,
                          maxVisibleItems: 30,
                          onChange: (e) => t(e),
                      }),
                  ],
              });
    },
    y = (e) => {
        let { clearAssets: t, clearIgnoredFiles: n } = e,
            { collectionAssets: r } = (0, o.xq)(),
            { deleteCollectionAsset: s, clearAssets: c } = (0, o.N9)(),
            d = l.useMemo(
                () =>
                    Object.values(r).map((e) => ({
                        label: e.name,
                        value: e.type,
                    })),
                [r],
            ),
            u = l.useCallback((e) => s(e), [s]),
            p = l.useCallback(() => {
                c(), t(), n();
            }, [c, t, n]);
        return 0 === d.length
            ? null
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(i.LZC, { size: 16 }),
                      (0, a.jsxs)("div", {
                          className: m.headingContainer,
                          children: [
                              (0, a.jsx)(i.Heading, {
                                  variant: "heading-lg/bold",
                                  children: "Uploaded Assets",
                              }),
                              (0, a.jsx)(i.Button, {
                                  variant: "critical-primary",
                                  size: "sm",
                                  onClick: p,
                                  text: "Clear All",
                              }),
                          ],
                      }),
                      (0, a.jsx)("ul", {
                          children: d.map((e) =>
                              (0, a.jsxs)(
                                  "li",
                                  {
                                      className: m.uploadedFileListItem,
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
    C = (e) => {
        let { ignoredFiles: t, handleClearIgnoredFiles: n } = e;
        return 0 === t.length
            ? null
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(i.LZC, { size: 16 }),
                      (0, a.jsxs)("div", {
                          className: m.headingContainer,
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
                                      className: m.ignoredFileListItem,
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
    S = () => {
        let { validateShopAssetPackage: e, reset: t, validationComplete: n, warnings: r, errors: s } = (0, u.g)(),
            o = Object.entries(s),
            c = Object.entries(r),
            d = o.length > 0,
            p = c.length > 0,
            { setDropHandler: x } = l.useContext(h),
            f = l.useCallback(
                (n) => {
                    t(), e(n);
                },
                [e, t],
            );
        return (
            l.useEffect(() => {
                x(f);
            }, [f, x]),
            (0, a.jsxs)(a.Fragment, {
                children: [
                    n
                        ? (0, a.jsxs)("div", {
                              className: m.validationSummary,
                              children: [
                                  (0, a.jsx)(i.Text, {
                                      variant: "text-md/normal",
                                      color: d ? "text-danger" : "text-default",
                                      children: "".concat(o.length, " errors"),
                                  }),
                                  (0, a.jsx)(i.Text, {
                                      variant: "text-md/normal",
                                      color: p ? "text-feedback-warning" : "text-default",
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
                                    className: m.validationIssuesList,
                                    children: o.map((e, t) => {
                                        let [n, l] = e;
                                        return (0, a.jsxs)(
                                            "li",
                                            {
                                                children: [
                                                    (0, a.jsx)(i.Text, {
                                                        variant: "text-md/bold",
                                                        color: "text-danger",
                                                        children: n,
                                                    }),
                                                    l.length > 0 &&
                                                        (0, a.jsx)("ul", {
                                                            className: m.validationIssuesList,
                                                            children: l.map((e, t) =>
                                                                (0, a.jsx)(
                                                                    "li",
                                                                    {
                                                                        children: (0, a.jsx)(i.Text, {
                                                                            variant: "text-sm/normal",
                                                                            color: "text-danger",
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
                    p &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(i.Heading, {
                                    variant: "heading-lg/bold",
                                    children: "Warnings",
                                }),
                                (0, a.jsx)(i.LZC, { size: 8 }),
                                (0, a.jsx)("ul", {
                                    className: m.validationIssuesList,
                                    children: Object.entries(r).map((e, t) => {
                                        let [n, l] = e;
                                        return (0, a.jsxs)(
                                            "li",
                                            {
                                                children: [
                                                    (0, a.jsx)(i.Text, {
                                                        variant: "text-md/bold",
                                                        color: "text-feedback-warning",
                                                        children: n,
                                                    }),
                                                    l.length > 0 &&
                                                        (0, a.jsx)("ul", {
                                                            className: m.validationIssuesList,
                                                            children: l.map((e, t) =>
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
    E = () => {
        let { previewEnabled: e, setPreviewEnabled: t, clearAssets: n } = (0, o.N9)(),
            { ignoredFilenames: r, clearAssets: s, clearIgnoredFilenames: c, processAndUpsertAssets: u } = (0, d.hm)(),
            { setDropHandler: p } = l.useContext(h),
            x = l.useCallback(
                (e) => {
                    n(), u(e);
                },
                [u, n],
            );
        return (
            l.useEffect(() => {
                p(x);
            }, [x, p]),
            (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children: "Drop files in this panel to begin preview.",
                    }),
                    (0, a.jsxs)("div", {
                        className: m.previewToggleContainer,
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
                                onClick: b,
                                icon: i.idN,
                                "aria-label": "Open preview instructions",
                            }),
                        ],
                    }),
                    (0, a.jsx)(j, {}),
                    (0, a.jsx)(_, {}),
                    (0, a.jsx)(y, {
                        clearAssets: s,
                        clearIgnoredFiles: c,
                    }),
                    (0, a.jsx)(C, {
                        ignoredFiles: r,
                        handleClearIgnoredFiles: c,
                    }),
                ],
            })
        );
    },
    N = () => {
        let [e, t] = l.useState("preview");
        return (0, a.jsxs)("div", {
            className: m.container,
            children: [
                (0, a.jsx)(i.sY7, {
                    options: x,
                    value: e,
                    onChange: (e) => {
                        let { value: n } = e;
                        return t(n);
                    },
                    className: m.panelModeControl,
                    optionClassName: m.panelModeControlOption,
                }),
                (0, a.jsx)(i.LZC, { size: 8 }),
                "preview" === e && (0, a.jsx)(E, {}),
                "validate" === e && (0, a.jsx)(S, {}),
                (0, a.jsx)(i.LZC, { size: 16 }),
            ],
        });
    },
    T = (e) => {
        let { children: t } = e,
            [n, i] = l.useState(() => () => {}),
            r = l.useMemo(() => ({ setDropHandler: (e) => i(() => e) }), []);
        return (0, a.jsx)(h.Provider, {
            value: r,
            children: (0, a.jsx)(c.L, {
                onDrop: n,
                children: t,
            }),
        });
    };
