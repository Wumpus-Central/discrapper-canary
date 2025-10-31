n.d(t, { O: () => E }), n(388685);
var a = n(951288),
    i = n(647438),
    l = n(481060),
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
let h = [
        {
            name: "Preview",
            value: "preview",
        },
        {
            name: "Validate",
            value: "validate",
        },
    ],
    x = {
        label: "[none selected]",
        value: null,
    },
    g = {
        label: "[preview all]",
        value: null,
    },
    f = () => {
        (0, l.nfh)(s.g)
            ? (0, l.Mr3)(s.g)
            : (0, l.ZDy)(
                  async () => {
                      let { ShopAssetsPreviewInstructionModal: e } = await Promise.resolve().then(n.bind(n, 637443));
                      return (t) => (0, a.jsx)(e, p({}, t));
                  },
                  {
                      modalKey: s.g,
                      onCloseRequest: () => (0, l.Mr3)(s.g),
                  },
              );
    },
    b = () => {
        (0, l.nfh)(s.c)
            ? (0, l.Mr3)(s.c)
            : (0, l.ZDy)(
                  async () => {
                      let { ShopPFXPreviewInstructionModal: e } = await Promise.resolve().then(n.bind(n, 637443));
                      return (t) => (0, a.jsx)(e, p({}, t));
                  },
                  {
                      modalKey: s.c,
                      onCloseRequest: () => (0, l.Mr3)(s.c),
                  },
              );
    },
    v = () => {
        let e = (0, r.lb)(),
            { previewProfileEffectSkuId: t, setPreviewProfileEffectSkuId: n } = (0, o.N9)(),
            s = i.useMemo(
                () => [
                    x,
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
                (0, a.jsx)(l.LZC, { size: 16 }),
                (0, a.jsxs)("div", {
                    className: m.headingContainer,
                    children: [
                        (0, a.jsx)(l.Heading, {
                            variant: "heading-md/bold",
                            children: "Preview Profile Effect",
                        }),
                        (0, a.jsx)(l.hU, {
                            variant: "icon-only",
                            size: "sm",
                            onClick: b,
                            icon: l.idN,
                            "aria-label": "Open PFX preview instructions",
                        }),
                    ],
                }),
                (0, a.jsx)(l.q4e, {
                    options: s,
                    value: t,
                    maxVisibleItems: 30,
                    onChange: (e) => n(e),
                }),
            ],
        });
    },
    j = () => {
        let { previewAvatarDecorationSkuId: e, setPreviewAvatarDecorationSkuId: t } = (0, o.N9)(),
            { avatarDecorationAssets: n } = (0, o.xq)(),
            r = i.useMemo(
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
                      (0, a.jsx)(l.LZC, { size: 16 }),
                      (0, a.jsx)(l.Heading, {
                          variant: "heading-md/bold",
                          children: "Preview Avatar Decorations",
                      }),
                      (0, a.jsx)(l.q4e, {
                          options: r,
                          value: e,
                          maxVisibleItems: 30,
                          onChange: (e) => t(e),
                      }),
                  ],
              });
    },
    _ = (e) => {
        let { clearAssets: t, clearIgnoredFiles: n } = e,
            { collectionAssets: r } = (0, o.xq)(),
            { deleteCollectionAsset: s, clearAssets: c } = (0, o.N9)(),
            d = i.useMemo(
                () =>
                    Object.values(r).map((e) => ({
                        label: e.name,
                        value: e.type,
                    })),
                [r],
            ),
            u = i.useCallback((e) => s(e), [s]),
            p = i.useCallback(() => {
                c(), t(), n();
            }, [c, t, n]);
        return 0 === d.length
            ? null
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(l.LZC, { size: 16 }),
                      (0, a.jsxs)("div", {
                          className: m.headingContainer,
                          children: [
                              (0, a.jsx)(l.Heading, {
                                  variant: "heading-lg/bold",
                                  children: "Uploaded Assets",
                              }),
                              (0, a.jsx)(l.Button, {
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
                                          (0, a.jsx)(l.hU, {
                                              variant: "icon-only",
                                              size: "sm",
                                              onClick: () => u(e.value),
                                              icon: l.Dio,
                                              "aria-label": "Remove asset",
                                          }),
                                          (0, a.jsx)(l.Text, {
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
    y = (e) => {
        let { ignoredFiles: t, handleClearIgnoredFiles: n } = e;
        return 0 === t.length
            ? null
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(l.LZC, { size: 16 }),
                      (0, a.jsxs)("div", {
                          className: m.headingContainer,
                          children: [
                              (0, a.jsx)(l.Heading, {
                                  variant: "heading-lg/bold",
                                  children: "Ignored Files",
                              }),
                              (0, a.jsx)(l.Button, {
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
                                      children: (0, a.jsx)(l.Text, {
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
    C = () => {
        let { validateShopAssetPackage: e, reset: t, validationComplete: n, warnings: r, errors: s } = (0, u.g)(),
            o = Object.entries(s),
            d = Object.entries(r),
            p = o.length > 0,
            h = d.length > 0,
            x = i.useCallback(
                (n) => {
                    t(), e(n);
                },
                [e, t],
            );
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(c.L, { onDrop: x }),
                n
                    ? (0, a.jsxs)("div", {
                          className: m.validationSummary,
                          children: [
                              (0, a.jsx)(l.Text, {
                                  variant: "text-md/normal",
                                  color: p ? "text-danger" : "text-default",
                                  children: "".concat(o.length, " errors"),
                              }),
                              (0, a.jsx)(l.Text, {
                                  variant: "text-md/normal",
                                  color: h ? "text-feedback-warning" : "text-default",
                                  children: "".concat(d.length, " warnings"),
                              }),
                              (0, a.jsx)(l.Button, {
                                  variant: "primary",
                                  size: "sm",
                                  onClick: t,
                                  text: "Reset",
                              }),
                          ],
                      })
                    : (0, a.jsx)(l.Text, {
                          variant: "text-md/normal",
                          children: "Drop asset folder to validate.",
                      }),
                (0, a.jsx)(l.LZC, { size: 16 }),
                p &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(l.Heading, {
                                variant: "heading-lg/bold",
                                children: "Errors",
                            }),
                            (0, a.jsx)(l.LZC, { size: 8 }),
                            (0, a.jsx)("ul", {
                                className: m.validationIssuesList,
                                children: o.map((e, t) => {
                                    let [n, i] = e;
                                    return (0, a.jsxs)(
                                        "li",
                                        {
                                            children: [
                                                (0, a.jsx)(l.Text, {
                                                    variant: "text-md/bold",
                                                    color: "text-danger",
                                                    children: n,
                                                }),
                                                i.length > 0 &&
                                                    (0, a.jsx)("ul", {
                                                        className: m.validationIssuesList,
                                                        children: i.map((e, t) =>
                                                            (0, a.jsx)(
                                                                "li",
                                                                {
                                                                    children: (0, a.jsx)(l.Text, {
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
                h &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(l.Heading, {
                                variant: "heading-lg/bold",
                                children: "Warnings",
                            }),
                            (0, a.jsx)(l.LZC, { size: 8 }),
                            (0, a.jsx)("ul", {
                                className: m.validationIssuesList,
                                children: Object.entries(r).map((e, t) => {
                                    let [n, i] = e;
                                    return (0, a.jsxs)(
                                        "li",
                                        {
                                            children: [
                                                (0, a.jsx)(l.Text, {
                                                    variant: "text-md/bold",
                                                    color: "text-feedback-warning",
                                                    children: n,
                                                }),
                                                i.length > 0 &&
                                                    (0, a.jsx)("ul", {
                                                        className: m.validationIssuesList,
                                                        children: i.map((e, t) =>
                                                            (0, a.jsx)(
                                                                "li",
                                                                {
                                                                    children: (0, a.jsx)(l.Text, {
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
        });
    },
    S = () => {
        let { previewEnabled: e, setPreviewEnabled: t, clearAssets: n } = (0, o.N9)(),
            { ignoredFilenames: r, clearAssets: s, clearIgnoredFilenames: u, processAndUpsertAssets: p } = (0, d.hm)(),
            h = i.useCallback(
                (e) => {
                    n(), p(e);
                },
                [p, n],
            );
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(c.L, { onDrop: h }),
                (0, a.jsx)(l.Text, {
                    variant: "text-md/normal",
                    children: "Drop files in this panel to begin preview.",
                }),
                (0, a.jsxs)("div", {
                    className: m.previewToggleContainer,
                    children: [
                        (0, a.jsx)(l.rsf, {
                            checked: e,
                            onChange: (e) => t(e),
                        }),
                        (0, a.jsx)(l.Text, {
                            variant: "text-md/normal",
                            children: "Enable Preview",
                        }),
                        (0, a.jsx)(l.hU, {
                            variant: "icon-only",
                            size: "sm",
                            onClick: f,
                            icon: l.idN,
                            "aria-label": "Open preview instructions",
                        }),
                    ],
                }),
                (0, a.jsx)(v, {}),
                (0, a.jsx)(j, {}),
                (0, a.jsx)(_, {
                    clearAssets: s,
                    clearIgnoredFiles: u,
                }),
                (0, a.jsx)(y, {
                    ignoredFiles: r,
                    handleClearIgnoredFiles: u,
                }),
            ],
        });
    },
    E = () => {
        let [e, t] = i.useState("preview");
        return (0, a.jsxs)("div", {
            className: m.container,
            children: [
                (0, a.jsx)(l.sY7, {
                    options: h,
                    value: e,
                    onChange: (e) => {
                        let { value: n } = e;
                        return t(n);
                    },
                    className: m.panelModeControl,
                    optionClassName: m.panelModeControlOption,
                }),
                (0, a.jsx)(l.LZC, { size: 8 }),
                "preview" === e && (0, a.jsx)(S, {}),
                "validate" === e && (0, a.jsx)(C, {}),
                (0, a.jsx)(l.LZC, { size: 16 }),
            ],
        });
    };
