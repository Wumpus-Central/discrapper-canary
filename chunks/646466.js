n.d(t, { O: () => O }), n(388685);
var a = n(951288),
    r = n(647438),
    l = n(755721),
    i = n(481060),
    s = n(373071),
    o = n(637443),
    c = n(619899),
    d = n(18868),
    u = n(281598),
    m = n(206878),
    x = n(198764);
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
let p = [
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
    v = {
        label: "[preview all]",
        value: null,
    },
    b = () => {
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
    g = () => {
        let e = (0, s.lb)(),
            { previewProfileEffectId: t, setPreviewProfileEffectId: n } = (0, c.N9)(),
            l = r.useMemo(
                () => [
                    f,
                    ...e.map((e) => ({
                        label: e.name,
                        value: e.id,
                    })),
                ],
                [e],
            );
        return (0, a.jsxs)("div", {
            className: x.previewSelector,
            children: [
                (0, a.jsx)(i.LZC, { size: 16 }),
                (0, a.jsxs)("div", {
                    className: x.headingContainer,
                    children: [
                        (0, a.jsx)(i.X6q, {
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
                (0, a.jsx)(i.q4e, {
                    options: l,
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
            l = r.useMemo(
                () => [
                    v,
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
                  className: x.previewSelector,
                  children: [
                      (0, a.jsx)(i.LZC, { size: 16 }),
                      (0, a.jsx)(i.X6q, {
                          variant: "heading-md/bold",
                          children: "Preview Avatar Decorations",
                      }),
                      (0, a.jsx)(i.q4e, {
                          options: l,
                          value: e,
                          maxVisibleItems: 30,
                          onChange: (e) => t(e),
                      }),
                  ],
              });
    },
    y = (e) => {
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
                          className: x.headingContainer,
                          children: [
                              (0, a.jsx)(i.X6q, {
                                  variant: "heading-lg/bold",
                                  children: "Uploaded Assets",
                              }),
                              (0, a.jsx)(i.zxk, {
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
                                      className: x.uploadedFileListItem,
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
                          className: x.headingContainer,
                          children: [
                              (0, a.jsx)(i.X6q, {
                                  variant: "heading-lg/bold",
                                  children: "Ignored Files",
                              }),
                              (0, a.jsx)(i.zxk, {
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
                                      className: x.ignoredFileListItem,
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
    N = () => {
        let { validateShopAssetPackage: e, reset: t, validationComplete: n, warnings: l, errors: s } = (0, m.g)(),
            o = Object.entries(s),
            c = Object.entries(l),
            u = o.length > 0,
            h = c.length > 0,
            p = r.useCallback(
                (n) => {
                    t(), e(n);
                },
                [e, t],
            );
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(d.L, { onDrop: p }),
                n
                    ? (0, a.jsxs)("div", {
                          className: x.validationSummary,
                          children: [
                              (0, a.jsx)(i.Text, {
                                  variant: "text-md/normal",
                                  color: u ? "text-danger" : "text-default",
                                  children: "".concat(o.length, " errors"),
                              }),
                              (0, a.jsx)(i.Text, {
                                  variant: "text-md/normal",
                                  color: h ? "text-feedback-warning" : "text-default",
                                  children: "".concat(c.length, " warnings"),
                              }),
                              (0, a.jsx)(i.zxk, {
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
                u &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(i.X6q, {
                                variant: "heading-lg/bold",
                                children: "Errors",
                            }),
                            (0, a.jsx)(i.LZC, { size: 8 }),
                            (0, a.jsx)("ul", {
                                className: x.validationIssuesList,
                                children: o.map((e, t) => {
                                    let [n, r] = e;
                                    return (0, a.jsxs)(
                                        "li",
                                        {
                                            children: [
                                                (0, a.jsx)(i.Text, {
                                                    variant: "text-md/bold",
                                                    color: "text-danger",
                                                    children: n,
                                                }),
                                                r.length > 0 &&
                                                    (0, a.jsx)("ul", {
                                                        className: x.validationIssuesList,
                                                        children: r.map((e, t) =>
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
                h &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(i.X6q, {
                                variant: "heading-lg/bold",
                                children: "Warnings",
                            }),
                            (0, a.jsx)(i.LZC, { size: 8 }),
                            (0, a.jsx)("ul", {
                                className: x.validationIssuesList,
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
                                                        className: x.validationIssuesList,
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
        });
    },
    E = () => {
        let { previewEnabled: e, setPreviewEnabled: t, clearAssets: n } = (0, c.N9)(),
            { ignoredFilenames: s, clearAssets: o, clearIgnoredFilenames: m, processAndUpsertAssets: h } = (0, u.hm)(),
            p = r.useCallback(
                (e) => {
                    n(), h(e);
                },
                [h, n],
            );
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(d.L, { onDrop: p }),
                (0, a.jsx)(i.Text, {
                    variant: "text-md/normal",
                    children: "Drop files in this panel to begin preview.",
                }),
                (0, a.jsxs)("div", {
                    className: x.previewToggleContainer,
                    children: [
                        (0, a.jsx)(l.T2, {
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
                (0, a.jsx)(g, {}),
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
    O = () => {
        let [e, t] = r.useState("preview");
        return (0, a.jsxs)("div", {
            className: x.container,
            children: [
                (0, a.jsx)(i.sY7, {
                    options: p,
                    value: e,
                    onChange: (e) => {
                        let { value: n } = e;
                        return t(n);
                    },
                    className: x.panelModeControl,
                    optionClassName: x.panelModeControlOption,
                }),
                (0, a.jsx)(i.LZC, { size: 8 }),
                "preview" === e && (0, a.jsx)(E, {}),
                "validate" === e && (0, a.jsx)(N, {}),
                (0, a.jsx)(i.LZC, { size: 16 }),
            ],
        });
    };
