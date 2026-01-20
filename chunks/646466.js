n.d(t, {
    L: () => O,
    O: () => T,
}),
    n(388685);
var a = n(54381),
    r = n(473749),
    i = n(481060),
    l = n(373071),
    s = n(637443),
    o = n(619899),
    c = n(18868),
    d = n(281598),
    u = n(206878),
    m = n(414648);
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
let h = r.createContext({
        setDropHandler: () => {},
    }),
    f = [
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
        id: "none",
        label: "[none selected]",
        value: null,
    },
    x = {
        id: "all",
        label: "[preview all]",
        value: null,
    },
    g = () => {
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
        let e = (0, l.lb)(),
            { previewProfileEffectSkuId: t, setPreviewProfileEffectSkuId: n } = (0, o.N9)(),
            s = r.useMemo(
                () => [
                    b,
                    ...e.map((e) => ({
                        id: e.skuId,
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
                (0, a.jsx)(i.PhF, {
                    label: "Profile Effect",
                    hideLabel: !0,
                    selectionMode: "single",
                    options: s,
                    value: t,
                    maxOptionsVisible: 30,
                    onSelectionChange: n,
                }),
            ],
        });
    },
    y = () => {
        let { previewAvatarDecorationSkuId: e, setPreviewAvatarDecorationSkuId: t } = (0, o.N9)(),
            { avatarDecorationAssets: n } = (0, o.xq)(),
            l = r.useMemo(
                () => [
                    x,
                    ...n.map((e) => ({
                        id: e.name,
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
                      (0, a.jsx)(i.PhF, {
                          label: "Preview Avatar Decorations",
                          selectionMode: "single",
                          options: l,
                          value: e,
                          maxOptionsVisible: 30,
                          onSelectionChange: t,
                      }),
                  ],
              });
    },
    C = (e) => {
        let { clearAssets: t, clearIgnoredFiles: n } = e,
            { collectionAssets: l } = (0, o.xq)(),
            { deleteCollectionAsset: s, clearAssets: c } = (0, o.N9)(),
            d = r.useMemo(
                () =>
                    Object.values(l).map((e) => ({
                        label: e.name,
                        value: e.type,
                    })),
                [l],
            ),
            u = r.useCallback((e) => s(e), [s]),
            p = r.useCallback(() => {
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
    _ = (e) => {
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
        let { validateShopAssetPackage: e, reset: t, validationComplete: n, warnings: l, errors: s } = (0, u.g)(),
            o = Object.entries(s),
            c = Object.entries(l),
            d = o.length > 0,
            p = c.length > 0,
            { setDropHandler: f } = r.useContext(h),
            b = r.useCallback(
                (n) => {
                    t(), e(n);
                },
                [e, t],
            );
        return (
            r.useEffect(() => {
                f(b);
            }, [b, f]),
            (0, a.jsxs)(a.Fragment, {
                children: [
                    n
                        ? (0, a.jsxs)("div", {
                              className: m.validationSummary,
                              children: [
                                  (0, a.jsx)(i.Text, {
                                      variant: "text-md/normal",
                                      color: d ? "text-feedback-critical" : "text-default",
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
                                                            className: m.validationIssuesList,
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
                                                            className: m.validationIssuesList,
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
    E = () => {
        let { previewEnabled: e, setPreviewEnabled: t, clearAssets: n } = (0, o.N9)(),
            { ignoredFilenames: l, clearAssets: s, clearIgnoredFilenames: c, processAndUpsertAssets: u } = (0, d.hm)(),
            { setDropHandler: p } = r.useContext(h),
            f = r.useCallback(
                (e) => {
                    n(), u(e);
                },
                [u, n],
            );
        return (
            r.useEffect(() => {
                p(f);
            }, [f, p]),
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
                                onClick: g,
                                icon: i.idN,
                                "aria-label": "Open preview instructions",
                            }),
                        ],
                    }),
                    (0, a.jsx)(j, {}),
                    (0, a.jsx)(y, {}),
                    (0, a.jsx)(C, {
                        clearAssets: s,
                        clearIgnoredFiles: c,
                    }),
                    (0, a.jsx)(_, {
                        ignoredFiles: l,
                        handleClearIgnoredFiles: c,
                    }),
                ],
            })
        );
    },
    T = () => {
        let [e, t] = r.useState("preview");
        return (0, a.jsxs)("div", {
            className: m.container,
            children: [
                (0, a.jsx)(i.sY7, {
                    options: f,
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
    O = (e) => {
        let { children: t } = e,
            [n, i] = r.useState(() => () => {}),
            l = r.useMemo(() => ({ setDropHandler: (e) => i(() => e) }), []);
        return (0, a.jsx)(h.Provider, {
            value: l,
            children: (0, a.jsx)(c.L, {
                onDrop: n,
                children: t,
            }),
        });
    };
