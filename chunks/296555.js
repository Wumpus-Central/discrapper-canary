n.d(t, {
    B: () => E,
    G: () => O,
}),
    n(896048);
var a = n(627968),
    l = n(64700),
    i = n(397927),
    r = n(43708),
    s = n(600239),
    o = n(940622),
    c = n(928953),
    d = n(559474),
    u = n(327885),
    m = n(876607);

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
    x = {
        id: "none",
        label: "[none selected]",
        value: null,
    },
    b = {
        id: "all",
        label: "[preview all]",
        value: null,
    },
    g = () => {
        (0, i.kBI)(s.k)
            ? (0, i.OoC)(s.k)
            : (0, i.mMO)(
                  async () => {
                      let { ShopAssetsPreviewInstructionModal: e } = await Promise.resolve().then(n.bind(n, 600239));
                      return (t) => (0, a.jsx)(e, p({}, t));
                  },
                  {
                      modalKey: s.k,
                      onCloseRequest: () => (0, i.OoC)(s.k),
                  },
              );
    },
    v = () => {
        (0, i.kBI)(s.g)
            ? (0, i.OoC)(s.g)
            : (0, i.mMO)(
                  async () => {
                      let { ShopPFXPreviewInstructionModal: e } = await Promise.resolve().then(n.bind(n, 600239));
                      return (t) => (0, a.jsx)(e, p({}, t));
                  },
                  {
                      modalKey: s.g,
                      onCloseRequest: () => (0, i.OoC)(s.g),
                  },
              );
    },
    j = () => {
        let e = (0, r.pF)(),
            { previewProfileEffectSkuId: t, setPreviewProfileEffectSkuId: n } = (0, o.JE)(),
            s = l.useMemo(
                () => [
                    x,
                    ...e.map((e) => ({
                        id: e.skuId,
                        label: e.name,
                        value: e.skuId,
                    })),
                ],
                [e],
            );
        return (0, a.jsxs)("div", {
            className: m.kO,
            children: [
                (0, a.jsx)(i.hKd, {
                    size: 16,
                }),
                (0, a.jsxs)("div", {
                    className: m.wR,
                    children: [
                        (0, a.jsx)(i.Heading, {
                            variant: "heading-md/bold",
                            children: "Preview Profile Effect",
                        }),
                        (0, a.jsx)(i.K0, {
                            variant: "icon-only",
                            size: "sm",
                            onClick: v,
                            icon: i.cBN,
                            "aria-label": "Open PFX preview instructions",
                        }),
                    ],
                }),
                (0, a.jsx)(i.l6P, {
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
        let { previewAvatarDecorationSkuId: e, setPreviewAvatarDecorationSkuId: t } = (0, o.JE)(),
            { avatarDecorationAssets: n } = (0, o.NE)(),
            r = l.useMemo(
                () => [
                    b,
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
                  className: m.kO,
                  children: [
                      (0, a.jsx)(i.hKd, {
                          size: 16,
                      }),
                      (0, a.jsx)(i.l6P, {
                          label: "Preview Avatar Decorations",
                          selectionMode: "single",
                          options: r,
                          value: e,
                          maxOptionsVisible: 30,
                          onSelectionChange: t,
                      }),
                  ],
              });
    },
    _ = (e) => {
        let { clearAssets: t, clearIgnoredFiles: n } = e,
            { collectionAssets: r } = (0, o.NE)(),
            { deleteCollectionAsset: s, clearAssets: c } = (0, o.JE)(),
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
                      (0, a.jsx)(i.hKd, {
                          size: 16,
                      }),
                      (0, a.jsxs)("div", {
                          className: m.wR,
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
                                      className: m._0,
                                      children: [
                                          (0, a.jsx)(i.K0, {
                                              variant: "icon-only",
                                              size: "sm",
                                              onClick: () => u(e.value),
                                              icon: i.PGe,
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
    A = (e) => {
        let { ignoredFiles: t, handleClearIgnoredFiles: n } = e;
        return 0 === t.length
            ? null
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(i.hKd, {
                          size: 16,
                      }),
                      (0, a.jsxs)("div", {
                          className: m.wR,
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
                                      className: m.yk,
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
    C = () => {
        let { validateShopAssetPackage: e, reset: t, validationComplete: n, warnings: r, errors: s } = (0, u.y)(),
            o = Object.entries(s),
            c = Object.entries(r),
            d = o.length > 0,
            p = c.length > 0,
            { setDropHandler: f } = l.useContext(h),
            x = l.useCallback(
                (n) => {
                    t(), e(n);
                },
                [e, t],
            );
        return (
            l.useEffect(() => {
                f(x);
            }, [x, f]),
            (0, a.jsxs)(a.Fragment, {
                children: [
                    n
                        ? (0, a.jsxs)("div", {
                              className: m._f,
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
                    (0, a.jsx)(i.hKd, {
                        size: 16,
                    }),
                    d &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(i.Heading, {
                                    variant: "heading-lg/bold",
                                    children: "Errors",
                                }),
                                (0, a.jsx)(i.hKd, {
                                    size: 8,
                                }),
                                (0, a.jsx)("ul", {
                                    className: m.ck,
                                    children: o.map((e, t) => {
                                        let [n, l] = e;
                                        return (0, a.jsxs)(
                                            "li",
                                            {
                                                children: [
                                                    (0, a.jsx)(i.Text, {
                                                        variant: "text-md/bold",
                                                        color: "text-feedback-critical",
                                                        children: n,
                                                    }),
                                                    l.length > 0 &&
                                                        (0, a.jsx)("ul", {
                                                            className: m.ck,
                                                            children: l.map((e, t) =>
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
                                (0, a.jsx)(i.hKd, {
                                    size: 8,
                                }),
                                (0, a.jsx)("ul", {
                                    className: m.ck,
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
                                                            className: m.ck,
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
    S = () => {
        let { previewEnabled: e, setPreviewEnabled: t, clearAssets: n } = (0, o.JE)(),
            { ignoredFilenames: r, clearAssets: s, clearIgnoredFilenames: c, processAndUpsertAssets: u } = (0, d.ds)(),
            { setDropHandler: p } = l.useContext(h),
            f = l.useCallback(
                (e) => {
                    n(), u(e);
                },
                [u, n],
            );
        return (
            l.useEffect(() => {
                p(f);
            }, [f, p]),
            (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children: "Drop files in this panel to begin preview.",
                    }),
                    (0, a.jsxs)("div", {
                        className: m.sy,
                        children: [
                            (0, a.jsx)(i.dOG, {
                                checked: e,
                                onChange: (e) => t(e),
                            }),
                            (0, a.jsx)(i.Text, {
                                variant: "text-md/normal",
                                children: "Enable Preview",
                            }),
                            (0, a.jsx)(i.K0, {
                                variant: "icon-only",
                                size: "sm",
                                onClick: g,
                                icon: i.cBN,
                                "aria-label": "Open preview instructions",
                            }),
                        ],
                    }),
                    (0, a.jsx)(j, {}),
                    (0, a.jsx)(y, {}),
                    (0, a.jsx)(_, {
                        clearAssets: s,
                        clearIgnoredFiles: c,
                    }),
                    (0, a.jsx)(A, {
                        ignoredFiles: r,
                        handleClearIgnoredFiles: c,
                    }),
                ],
            })
        );
    },
    O = () => {
        let [e, t] = l.useState("preview");
        return (0, a.jsxs)("div", {
            className: m.kL,
            children: [
                (0, a.jsx)(i.IzF, {
                    options: f,
                    value: e,
                    onChange: (e) => {
                        let { value: n } = e;
                        return t(n);
                    },
                    className: m.Vj,
                    optionClassName: m.UK,
                }),
                (0, a.jsx)(i.hKd, {
                    size: 8,
                }),
                "preview" === e && (0, a.jsx)(S, {}),
                "validate" === e && (0, a.jsx)(C, {}),
                (0, a.jsx)(i.hKd, {
                    size: 16,
                }),
            ],
        });
    },
    E = (e) => {
        let { children: t } = e,
            [n, i] = l.useState(() => () => {}),
            r = l.useMemo(
                () => ({
                    setDropHandler: (e) => i(() => e),
                }),
                [],
            );
        return (0, a.jsx)(h.Provider, {
            value: r,
            children: (0, a.jsx)(c.i, {
                onDrop: n,
                children: t,
            }),
        });
    };
