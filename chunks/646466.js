n.d(t, { O: () => S }), n(388685);
var a = n(951288),
    r = n(647438),
    i = n(755721),
    l = n(481060),
    s = n(373071),
    o = n(637443),
    c = n(619899),
    d = n(18868),
    u = n(281598),
    m = n(206878),
    p = n(329119);
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
let x = [
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
    b = {
        label: "[preview all]",
        value: null,
    },
    g = () => {
        (0, l.nfh)(o.g)
            ? (0, l.Mr3)(o.g)
            : (0, l.ZDy)(
                  async () => {
                      let { ShopAssetsPreviewInstructionModal: e } = await Promise.resolve().then(n.bind(n, 637443));
                      return (t) => (0, a.jsx)(e, h({}, t));
                  },
                  {
                      modalKey: o.g,
                      onCloseRequest: () => (0, l.Mr3)(o.g),
                  },
              );
    },
    v = () => {
        (0, l.nfh)(o.c)
            ? (0, l.Mr3)(o.c)
            : (0, l.ZDy)(
                  async () => {
                      let { ShopPFXPreviewInstructionModal: e } = await Promise.resolve().then(n.bind(n, 637443));
                      return (t) => (0, a.jsx)(e, h({}, t));
                  },
                  {
                      modalKey: o.c,
                      onCloseRequest: () => (0, l.Mr3)(o.c),
                  },
              );
    },
    j = () => {
        let e = (0, s.lb)(),
            { previewProfileEffectSkuId: t, setPreviewProfileEffectSkuId: n } = (0, c.N9)(),
            i = r.useMemo(
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
            className: p.previewSelector,
            children: [
                (0, a.jsx)(l.LZC, { size: 16 }),
                (0, a.jsxs)("div", {
                    className: p.headingContainer,
                    children: [
                        (0, a.jsx)(l.X6q, {
                            variant: "heading-md/bold",
                            children: "Preview Profile Effect",
                        }),
                        (0, a.jsx)(l.hU, {
                            variant: "icon-only",
                            size: "sm",
                            onClick: v,
                            icon: l.idN,
                            "aria-label": "Open PFX preview instructions",
                        }),
                    ],
                }),
                (0, a.jsx)(l.q4e, {
                    options: i,
                    value: t,
                    maxVisibleItems: 30,
                    onChange: (e) => n(e),
                }),
            ],
        });
    },
    _ = () => {
        let { previewAvatarDecorationId: e, setPreviewAvatarDecorationId: t } = (0, c.N9)(),
            { avatarDecorationAssets: n } = (0, c.xq)(),
            i = r.useMemo(
                () => [
                    b,
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
                      (0, a.jsx)(l.LZC, { size: 16 }),
                      (0, a.jsx)(l.X6q, {
                          variant: "heading-md/bold",
                          children: "Preview Avatar Decorations",
                      }),
                      (0, a.jsx)(l.q4e, {
                          options: i,
                          value: e,
                          maxVisibleItems: 30,
                          onChange: (e) => t(e),
                      }),
                  ],
              });
    },
    y = (e) => {
        let { clearAssets: t, clearIgnoredFiles: n } = e,
            { collectionAssets: i } = (0, c.xq)(),
            { deleteCollectionAsset: s, clearAssets: o } = (0, c.N9)(),
            d = r.useMemo(
                () =>
                    Object.values(i).map((e) => ({
                        label: e.name,
                        value: e.type,
                    })),
                [i],
            ),
            u = r.useCallback((e) => s(e), [s]),
            m = r.useCallback(() => {
                o(), t(), n();
            }, [o, t, n]);
        return 0 === d.length
            ? null
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(l.LZC, { size: 16 }),
                      (0, a.jsxs)("div", {
                          className: p.headingContainer,
                          children: [
                              (0, a.jsx)(l.X6q, {
                                  variant: "heading-lg/bold",
                                  children: "Uploaded Assets",
                              }),
                              (0, a.jsx)(l.zxk, {
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
    C = (e) => {
        let { ignoredFiles: t, handleClearIgnoredFiles: n } = e;
        return 0 === t.length
            ? null
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(l.LZC, { size: 16 }),
                      (0, a.jsxs)("div", {
                          className: p.headingContainer,
                          children: [
                              (0, a.jsx)(l.X6q, {
                                  variant: "heading-lg/bold",
                                  children: "Ignored Files",
                              }),
                              (0, a.jsx)(l.zxk, {
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
    E = () => {
        let { validateShopAssetPackage: e, reset: t, validationComplete: n, warnings: i, errors: s } = (0, m.g)(),
            o = Object.entries(s),
            c = Object.entries(i),
            u = o.length > 0,
            h = c.length > 0,
            x = r.useCallback(
                (n) => {
                    t(), e(n);
                },
                [e, t],
            );
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(d.L, { onDrop: x }),
                n
                    ? (0, a.jsxs)("div", {
                          className: p.validationSummary,
                          children: [
                              (0, a.jsx)(l.Text, {
                                  variant: "text-md/normal",
                                  color: u ? "text-danger" : "text-default",
                                  children: "".concat(o.length, " errors"),
                              }),
                              (0, a.jsx)(l.Text, {
                                  variant: "text-md/normal",
                                  color: h ? "text-feedback-warning" : "text-default",
                                  children: "".concat(c.length, " warnings"),
                              }),
                              (0, a.jsx)(l.zxk, {
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
                u &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(l.X6q, {
                                variant: "heading-lg/bold",
                                children: "Errors",
                            }),
                            (0, a.jsx)(l.LZC, { size: 8 }),
                            (0, a.jsx)("ul", {
                                className: p.validationIssuesList,
                                children: o.map((e, t) => {
                                    let [n, r] = e;
                                    return (0, a.jsxs)(
                                        "li",
                                        {
                                            children: [
                                                (0, a.jsx)(l.Text, {
                                                    variant: "text-md/bold",
                                                    color: "text-danger",
                                                    children: n,
                                                }),
                                                r.length > 0 &&
                                                    (0, a.jsx)("ul", {
                                                        className: p.validationIssuesList,
                                                        children: r.map((e, t) =>
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
                            (0, a.jsx)(l.X6q, {
                                variant: "heading-lg/bold",
                                children: "Warnings",
                            }),
                            (0, a.jsx)(l.LZC, { size: 8 }),
                            (0, a.jsx)("ul", {
                                className: p.validationIssuesList,
                                children: Object.entries(i).map((e, t) => {
                                    let [n, r] = e;
                                    return (0, a.jsxs)(
                                        "li",
                                        {
                                            children: [
                                                (0, a.jsx)(l.Text, {
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
    N = () => {
        let { previewEnabled: e, setPreviewEnabled: t, clearAssets: n } = (0, c.N9)(),
            { ignoredFilenames: s, clearAssets: o, clearIgnoredFilenames: m, processAndUpsertAssets: h } = (0, u.hm)(),
            x = r.useCallback(
                (e) => {
                    n(), h(e);
                },
                [h, n],
            );
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(d.L, { onDrop: x }),
                (0, a.jsx)(l.Text, {
                    variant: "text-md/normal",
                    children: "Drop files in this panel to begin preview.",
                }),
                (0, a.jsxs)("div", {
                    className: p.previewToggleContainer,
                    children: [
                        (0, a.jsx)(i.T2, {
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
                            onClick: g,
                            icon: l.idN,
                            "aria-label": "Open preview instructions",
                        }),
                    ],
                }),
                (0, a.jsx)(j, {}),
                (0, a.jsx)(_, {}),
                (0, a.jsx)(y, {
                    clearAssets: o,
                    clearIgnoredFiles: m,
                }),
                (0, a.jsx)(C, {
                    ignoredFiles: s,
                    handleClearIgnoredFiles: m,
                }),
            ],
        });
    },
    S = () => {
        let [e, t] = r.useState("preview");
        return (0, a.jsxs)("div", {
            className: p.container,
            children: [
                (0, a.jsx)(l.sY7, {
                    options: x,
                    value: e,
                    onChange: (e) => {
                        let { value: n } = e;
                        return t(n);
                    },
                    className: p.panelModeControl,
                    optionClassName: p.panelModeControlOption,
                }),
                (0, a.jsx)(l.LZC, { size: 8 }),
                "preview" === e && (0, a.jsx)(N, {}),
                "validate" === e && (0, a.jsx)(E, {}),
                (0, a.jsx)(l.LZC, { size: 16 }),
            ],
        });
    };
