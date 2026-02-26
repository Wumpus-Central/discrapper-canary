n.d(t, { B: () => S, G: () => T });
var a = n(627968),
    i = n(64700),
    s = n(397927),
    l = n(43708),
    r = n(600239),
    o = n(940622),
    d = n(928953),
    c = n(559474),
    u = n(327885),
    m = n(381957);
let h = i.createContext({ setDropHandler: () => {} }),
    x = [
        { name: "Preview", value: "preview" },
        { name: "Validate", value: "validate" },
    ],
    p = { id: "none", label: "[none selected]", value: null },
    g = () => {
        (0, s.kBI)(r.k)
            ? (0, s.OoC)(r.k)
            : (0, s.mMO)(
                  async () => {
                      let { ShopAssetsPreviewInstructionModal: e } = await Promise.resolve().then(n.bind(n, 600239));
                      return (t) => (0, a.jsx)(e, { ...t });
                  },
                  { modalKey: r.k, onCloseRequest: () => (0, s.OoC)(r.k) },
              );
    },
    _ = () => {
        (0, s.kBI)(r.g)
            ? (0, s.OoC)(r.g)
            : (0, s.mMO)(
                  async () => {
                      let { ShopPFXPreviewInstructionModal: e } = await Promise.resolve().then(n.bind(n, 600239));
                      return (t) => (0, a.jsx)(e, { ...t });
                  },
                  { modalKey: r.g, onCloseRequest: () => (0, s.OoC)(r.g) },
              );
    },
    f = () => {
        let e = (0, l.pF)(),
            { previewProfileEffectSkuId: t, setPreviewProfileEffectSkuId: n } = (0, o.JE)(),
            r = i.useMemo(() => [p, ...e.map((e) => ({ id: e.skuId, label: e.name, value: e.skuId }))], [e]);
        return (0, a.jsxs)("div", {
            className: m.kO,
            children: [
                (0, a.jsx)(s.hKd, { size: 16 }),
                (0, a.jsxs)("div", {
                    className: m.wR,
                    children: [
                        (0, a.jsx)(s.Heading, { variant: "heading-md/bold", children: "Preview Profile Effect" }),
                        (0, a.jsx)(s.K0, {
                            variant: "icon-only",
                            size: "sm",
                            onClick: _,
                            icon: s.cBN,
                            "aria-label": "Open PFX preview instructions",
                        }),
                    ],
                }),
                (0, a.jsx)(s.l6P, {
                    label: "Profile Effect",
                    hideLabel: !0,
                    selectionMode: "single",
                    options: r,
                    value: t,
                    maxOptionsVisible: 30,
                    onSelectionChange: n,
                }),
            ],
        });
    },
    b = () => {
        let { previewAvatarDecorationKey: e, setPreviewAvatarDecorationKey: t } = (0, o.JE)(),
            { avatarDecorationAssets: n } = (0, o.NE)(),
            l = i.useMemo(() => n.map((e) => ({ id: e.name, label: e.name, value: e.name })), [n]);
        return 0 === n.length
            ? null
            : (0, a.jsxs)("div", {
                  className: m.kO,
                  children: [
                      (0, a.jsx)(s.hKd, { size: 16 }),
                      (0, a.jsx)(s.l6P, {
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
    v = (e) => {
        let { clearAssets: t, clearIgnoredFiles: n } = e,
            { collectionAssets: l } = (0, o.NE)(),
            { deleteCollectionAsset: r, clearAssets: d } = (0, o.JE)(),
            c = i.useMemo(() => Object.values(l).map((e) => ({ label: e.name, value: e.type })), [l]),
            u = i.useCallback((e) => r(e), [r]),
            h = i.useCallback(() => {
                d(), t(), n();
            }, [d, t, n]);
        return 0 === c.length
            ? null
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(s.hKd, { size: 16 }),
                      (0, a.jsxs)("div", {
                          className: m.wR,
                          children: [
                              (0, a.jsx)(s.Heading, { variant: "heading-lg/bold", children: "Uploaded Assets" }),
                              (0, a.jsx)(s.Button, {
                                  variant: "critical-primary",
                                  size: "sm",
                                  onClick: h,
                                  text: "Clear All",
                              }),
                          ],
                      }),
                      (0, a.jsx)("ul", {
                          children: c.map((e) =>
                              (0, a.jsxs)(
                                  "li",
                                  {
                                      className: m._0,
                                      children: [
                                          (0, a.jsx)(s.K0, {
                                              variant: "icon-only",
                                              size: "sm",
                                              onClick: () => u(e.value),
                                              icon: s.PGe,
                                              "aria-label": "Remove asset",
                                          }),
                                          (0, a.jsx)(s.Text, { variant: "text-md/normal", children: e.label }),
                                      ],
                                  },
                                  e.value,
                              ),
                          ),
                      }),
                  ],
              });
    },
    j = (e) => {
        let { ignoredFiles: t, handleClearIgnoredFiles: n } = e;
        return 0 === t.length
            ? null
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(s.hKd, { size: 16 }),
                      (0, a.jsxs)("div", {
                          className: m.wR,
                          children: [
                              (0, a.jsx)(s.Heading, { variant: "heading-lg/bold", children: "Ignored Files" }),
                              (0, a.jsx)(s.Button, { variant: "primary", size: "sm", onClick: n, text: "Clear" }),
                          ],
                      }),
                      (0, a.jsx)("ul", {
                          children: t.map((e, t) =>
                              (0, a.jsx)(
                                  "li",
                                  {
                                      className: m.yk,
                                      children: (0, a.jsx)(s.Text, { variant: "text-md/normal", children: e }),
                                  },
                                  `${e}-${t}`,
                              ),
                          ),
                      }),
                  ],
              });
    },
    C = () => {
        let { validateShopAssetPackage: e, reset: t, validationComplete: n, warnings: l, errors: r } = (0, u.y)(),
            o = Object.entries(r),
            d = Object.entries(l),
            c = o.length > 0,
            x = d.length > 0,
            { setDropHandler: p } = i.useContext(h),
            g = i.useCallback(
                (n) => {
                    t(), e(n);
                },
                [e, t],
            );
        return (
            i.useEffect(() => {
                p(g);
            }, [g, p]),
            (0, a.jsxs)(a.Fragment, {
                children: [
                    n
                        ? (0, a.jsxs)("div", {
                              className: m._f,
                              children: [
                                  (0, a.jsx)(s.Text, {
                                      variant: "text-md/normal",
                                      color: c ? "text-feedback-critical" : "text-default",
                                      children: `${o.length} errors`,
                                  }),
                                  (0, a.jsx)(s.Text, {
                                      variant: "text-md/normal",
                                      color: x ? "text-feedback-warning" : "text-default",
                                      children: `${d.length} warnings`,
                                  }),
                                  (0, a.jsx)(s.Button, { variant: "primary", size: "sm", onClick: t, text: "Reset" }),
                              ],
                          })
                        : (0, a.jsx)(s.Text, { variant: "text-md/normal", children: "Drop asset folder to validate." }),
                    (0, a.jsx)(s.hKd, { size: 16 }),
                    c &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(s.Heading, { variant: "heading-lg/bold", children: "Errors" }),
                                (0, a.jsx)(s.hKd, { size: 8 }),
                                (0, a.jsx)("ul", {
                                    className: m.ck,
                                    children: o.map((e, t) => {
                                        let [n, i] = e;
                                        return (0, a.jsxs)(
                                            "li",
                                            {
                                                children: [
                                                    (0, a.jsx)(s.Text, {
                                                        variant: "text-md/bold",
                                                        color: "text-feedback-critical",
                                                        children: n,
                                                    }),
                                                    i.length > 0 &&
                                                        (0, a.jsx)("ul", {
                                                            className: m.ck,
                                                            children: i.map((e, t) =>
                                                                (0, a.jsx)(
                                                                    "li",
                                                                    {
                                                                        children: (0, a.jsx)(s.Text, {
                                                                            variant: "text-sm/normal",
                                                                            color: "text-feedback-critical",
                                                                            children: e,
                                                                        }),
                                                                    },
                                                                    `${e}-${t}`,
                                                                ),
                                                            ),
                                                        }),
                                                ],
                                            },
                                            `${n}-${t}`,
                                        );
                                    }),
                                }),
                            ],
                        }),
                    x &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(s.Heading, { variant: "heading-lg/bold", children: "Warnings" }),
                                (0, a.jsx)(s.hKd, { size: 8 }),
                                (0, a.jsx)("ul", {
                                    className: m.ck,
                                    children: Object.entries(l).map((e, t) => {
                                        let [n, i] = e;
                                        return (0, a.jsxs)(
                                            "li",
                                            {
                                                children: [
                                                    (0, a.jsx)(s.Text, {
                                                        variant: "text-md/bold",
                                                        color: "text-feedback-warning",
                                                        children: n,
                                                    }),
                                                    i.length > 0 &&
                                                        (0, a.jsx)("ul", {
                                                            className: m.ck,
                                                            children: i.map((e, t) =>
                                                                (0, a.jsx)(
                                                                    "li",
                                                                    {
                                                                        children: (0, a.jsx)(s.Text, {
                                                                            variant: "text-sm/normal",
                                                                            color: "text-feedback-warning",
                                                                            children: e,
                                                                        }),
                                                                    },
                                                                    `${e}-${t}`,
                                                                ),
                                                            ),
                                                        }),
                                                ],
                                            },
                                            `${n}-${t}`,
                                        );
                                    }),
                                }),
                            ],
                        }),
                ],
            })
        );
    },
    A = () => {
        let { previewEnabled: e, setPreviewEnabled: t, clearAssets: n } = (0, o.JE)(),
            { ignoredFilenames: l, clearAssets: r, clearIgnoredFilenames: d, processAndUpsertAssets: u } = (0, c.ds)(),
            { setDropHandler: x } = i.useContext(h),
            p = i.useCallback(
                (e) => {
                    n(), u(e);
                },
                [u, n],
            );
        return (
            i.useEffect(() => {
                x(p);
            }, [p, x]),
            (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(s.Text, {
                        variant: "text-md/normal",
                        children: "Drop files in this panel to begin preview.",
                    }),
                    (0, a.jsxs)("div", {
                        className: m.sy,
                        children: [
                            (0, a.jsx)(s.dOG, { checked: e, onChange: (e) => t(e) }),
                            (0, a.jsx)(s.Text, { variant: "text-md/normal", children: "Enable Preview" }),
                            (0, a.jsx)(s.K0, {
                                variant: "icon-only",
                                size: "sm",
                                onClick: g,
                                icon: s.cBN,
                                "aria-label": "Open preview instructions",
                            }),
                        ],
                    }),
                    (0, a.jsx)(f, {}),
                    (0, a.jsx)(b, {}),
                    (0, a.jsx)(v, { clearAssets: r, clearIgnoredFiles: d }),
                    (0, a.jsx)(j, { ignoredFiles: l, handleClearIgnoredFiles: d }),
                ],
            })
        );
    },
    T = () => {
        let [e, t] = i.useState("preview");
        return (0, a.jsxs)("div", {
            className: m.kL,
            children: [
                (0, a.jsx)(s.IzF, {
                    options: x,
                    value: e,
                    onChange: (e) => {
                        let { value: n } = e;
                        return t(n);
                    },
                    className: m.Vj,
                    optionClassName: m.UK,
                }),
                (0, a.jsx)(s.hKd, { size: 8 }),
                "preview" === e && (0, a.jsx)(A, {}),
                "validate" === e && (0, a.jsx)(C, {}),
                (0, a.jsx)(s.hKd, { size: 16 }),
            ],
        });
    },
    S = (e) => {
        let { children: t } = e,
            [n, s] = i.useState(() => () => {}),
            l = i.useMemo(() => ({ setDropHandler: (e) => s(() => e) }), []);
        return (0, a.jsx)(h.Provider, { value: l, children: (0, a.jsx)(d.i, { onDrop: n, children: t }) });
    };
