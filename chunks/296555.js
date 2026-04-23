a.d(t, { B: () => P, G: () => M });
var n = a(627968),
    l = a(64700),
    i = a(192308),
    s = a(696986),
    r = a(534514),
    o = a(408278),
    d = a(290136),
    c = a(691885),
    u = a(834730),
    m = a(106236),
    h = a(243721),
    p = a(821609),
    x = a(789645),
    g = a(629584),
    v = a(816866),
    b = a(600239),
    _ = a(940622),
    f = a(928953),
    j = a(559474),
    A = a(327885),
    y = a(981388);
let C = l.createContext({ setDropHandler: () => {} }),
    E = [
        { name: "Preview", value: "preview" },
        { name: "Validate", value: "validate" },
    ],
    S = { id: "none", label: "[none selected]", value: null },
    N = () => {
        (0, i.hasModalOpen)(b.k)
            ? (0, i.closeModal)(b.k)
            : (0, i.openModalLazy)(
                  async () => {
                      let { ShopAssetsPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                      return (t) => (0, n.jsx)(e, { ...t });
                  },
                  { modalKey: b.k, onCloseRequest: () => (0, i.closeModal)(b.k) },
              );
    },
    k = () => {
        (0, i.hasModalOpen)(b.g)
            ? (0, i.closeModal)(b.g)
            : (0, i.openModalLazy)(
                  async () => {
                      let { ShopPFXPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                      return (t) => (0, n.jsx)(e, { ...t });
                  },
                  { modalKey: b.g, onCloseRequest: () => (0, i.closeModal)(b.g) },
              );
    },
    I = () => {
        let e = (0, v.pF)(),
            { previewProfileEffectSkuId: t, setPreviewProfileEffectSkuId: a } = (0, _.JE)(),
            i = l.useMemo(() => [S, ...e.map((e) => ({ id: e.skuId, label: e.name, value: e.skuId }))], [e]);
        return (0, n.jsxs)("div", {
            className: y.kO,
            children: [
                (0, n.jsx)(s.h, { size: 16 }),
                (0, n.jsxs)("div", {
                    className: y.wR,
                    children: [
                        (0, n.jsx)(r.D, { variant: "heading-md/bold", children: "Preview Profile Effect" }),
                        (0, n.jsx)(o.K, {
                            variant: "icon-only",
                            size: "sm",
                            onClick: k,
                            icon: d.c,
                            "aria-label": "Open PFX preview instructions",
                        }),
                    ],
                }),
                (0, n.jsx)(c.l, {
                    label: "Profile Effect",
                    hideLabel: !0,
                    selectionMode: "single",
                    options: i,
                    value: t,
                    maxOptionsVisible: 30,
                    onSelectionChange: a,
                }),
            ],
        });
    },
    D = () => {
        let { previewAvatarDecorationKey: e, setPreviewAvatarDecorationKey: t } = (0, _.JE)(),
            { avatarDecorationAssets: a } = (0, _.NE)(),
            i = l.useMemo(() => a.map((e) => ({ id: e.name, label: e.name, value: e.name })), [a]);
        return 0 === a.length
            ? null
            : (0, n.jsxs)("div", {
                  className: y.kO,
                  children: [
                      (0, n.jsx)(s.h, { size: 16 }),
                      (0, n.jsx)(c.l, {
                          label: "Preview Avatar Decorations",
                          selectionMode: "single",
                          options: i,
                          value: e,
                          maxOptionsVisible: 30,
                          onSelectionChange: t,
                      }),
                  ],
              });
    },
    T = new Set([j.RN.HERO_BANNER_STATIC, j.RN.HERO_BANNER_ANIMATED, j.RN.HERO_BANNER_RIVE]),
    w = (e) => {
        let { clearAssets: t, clearIgnoredFiles: a } = e,
            { collectionAssets: i } = (0, _.NE)(),
            {
                deleteCollectionAsset: d,
                clearAssets: c,
                heroLogoMaxHeight: g,
                setHeroLogoMaxHeight: v,
                heroResponsive: b,
                setHeroResponsive: f,
            } = (0, _.JE)(),
            A = l.useMemo(() => Object.values(i).map((e) => ({ label: e.name, value: e.type })), [i]),
            C = A.some((e) => e.value === j.RN.HERO_LOGO),
            E = A.some((e) => T.has(e.value)),
            S = l.useCallback((e) => d(e), [d]),
            N = l.useCallback(() => {
                c(), t(), a();
            }, [c, t, a]);
        return 0 === A.length
            ? null
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)(s.h, { size: 16 }),
                      (C || E) &&
                          (0, n.jsxs)("div", {
                              className: y.v7,
                              children: [
                                  C &&
                                      (0, n.jsxs)("div", {
                                          className: y.cj,
                                          children: [
                                              (0, n.jsx)(u.E, {
                                                  variant: "text-md/normal",
                                                  className: y.Me,
                                                  children: "Logo size",
                                              }),
                                              (0, n.jsx)(m.A, {
                                                  className: y.TQ,
                                                  minValue: 90,
                                                  maxValue: 200,
                                                  initialValue: g ?? 90,
                                                  handleSize: 10,
                                                  onValueChange: (e) => v(Math.round(e)),
                                                  onValueRender: (e) => `${Math.round(e)}px`,
                                                  "aria-label": "Hero logo max height",
                                              }),
                                              (0, n.jsx)(u.E, { variant: "text-sm/normal", children: `${g ?? 90}px` }),
                                          ],
                                      }),
                                  E &&
                                      (0, n.jsxs)("div", {
                                          className: y.sy,
                                          children: [
                                              (0, n.jsx)(h.d, { checked: b, onChange: f }),
                                              (0, n.jsx)(u.E, {
                                                  variant: "text-md/normal",
                                                  children: "Responsive Hero",
                                              }),
                                          ],
                                      }),
                              ],
                          }),
                      (0, n.jsx)(s.h, { size: 16 }),
                      (0, n.jsxs)("div", {
                          className: y.wR,
                          children: [
                              (0, n.jsx)(r.D, { variant: "heading-lg/bold", children: "Uploaded Assets" }),
                              (0, n.jsx)(p.$, {
                                  variant: "critical-primary",
                                  size: "sm",
                                  onClick: N,
                                  text: "Clear All",
                              }),
                          ],
                      }),
                      (0, n.jsx)("ul", {
                          children: A.map((e) =>
                              (0, n.jsxs)(
                                  "li",
                                  {
                                      className: y._0,
                                      children: [
                                          (0, n.jsx)(o.K, {
                                              variant: "icon-only",
                                              size: "sm",
                                              onClick: () => S(e.value),
                                              icon: x.P,
                                              "aria-label": "Remove asset",
                                          }),
                                          (0, n.jsx)(u.E, { variant: "text-md/normal", children: e.label }),
                                      ],
                                  },
                                  e.value,
                              ),
                          ),
                      }),
                  ],
              });
    },
    O = (e) => {
        let { ignoredFiles: t, handleClearIgnoredFiles: a } = e;
        return 0 === t.length
            ? null
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)(s.h, { size: 16 }),
                      (0, n.jsxs)("div", {
                          className: y.wR,
                          children: [
                              (0, n.jsx)(r.D, { variant: "heading-lg/bold", children: "Ignored Files" }),
                              (0, n.jsx)(p.$, { variant: "primary", size: "sm", onClick: a, text: "Clear" }),
                          ],
                      }),
                      (0, n.jsx)("ul", {
                          children: t.map((e, t) =>
                              (0, n.jsx)(
                                  "li",
                                  {
                                      className: y.yk,
                                      children: (0, n.jsx)(u.E, { variant: "text-md/normal", children: e }),
                                  },
                                  `${e}-${t}`,
                              ),
                          ),
                      }),
                  ],
              });
    },
    R = () => {
        let { validateShopAssetPackage: e, reset: t, validationComplete: a, warnings: i, errors: o } = (0, A.y)(),
            d = Object.entries(o),
            c = Object.entries(i),
            m = d.length > 0,
            h = c.length > 0,
            { setDropHandler: x } = l.useContext(C),
            g = l.useCallback(
                (a) => {
                    t(), e(a);
                },
                [e, t],
            );
        return (
            l.useEffect(() => {
                x(g);
            }, [g, x]),
            (0, n.jsxs)(n.Fragment, {
                children: [
                    a
                        ? (0, n.jsxs)("div", {
                              className: y._f,
                              children: [
                                  (0, n.jsx)(u.E, {
                                      variant: "text-md/normal",
                                      color: m ? "text-feedback-critical" : "text-default",
                                      children: `${d.length} errors`,
                                  }),
                                  (0, n.jsx)(u.E, {
                                      variant: "text-md/normal",
                                      color: h ? "text-feedback-warning" : "text-default",
                                      children: `${c.length} warnings`,
                                  }),
                                  (0, n.jsx)(p.$, { variant: "primary", size: "sm", onClick: t, text: "Reset" }),
                              ],
                          })
                        : (0, n.jsx)(u.E, { variant: "text-md/normal", children: "Drop asset folder to validate." }),
                    (0, n.jsx)(s.h, { size: 16 }),
                    m &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(r.D, { variant: "heading-lg/bold", children: "Errors" }),
                                (0, n.jsx)(s.h, { size: 8 }),
                                (0, n.jsx)("ul", {
                                    className: y.ck,
                                    children: d.map((e, t) => {
                                        let [a, l] = e;
                                        return (0, n.jsxs)(
                                            "li",
                                            {
                                                children: [
                                                    (0, n.jsx)(u.E, {
                                                        variant: "text-md/bold",
                                                        color: "text-feedback-critical",
                                                        children: a,
                                                    }),
                                                    l.length > 0 &&
                                                        (0, n.jsx)("ul", {
                                                            className: y.ck,
                                                            children: l.map((e, t) =>
                                                                (0, n.jsx)(
                                                                    "li",
                                                                    {
                                                                        children: (0, n.jsx)(u.E, {
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
                                            `${a}-${t}`,
                                        );
                                    }),
                                }),
                            ],
                        }),
                    h &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(r.D, { variant: "heading-lg/bold", children: "Warnings" }),
                                (0, n.jsx)(s.h, { size: 8 }),
                                (0, n.jsx)("ul", {
                                    className: y.ck,
                                    children: Object.entries(i).map((e, t) => {
                                        let [a, l] = e;
                                        return (0, n.jsxs)(
                                            "li",
                                            {
                                                children: [
                                                    (0, n.jsx)(u.E, {
                                                        variant: "text-md/bold",
                                                        color: "text-feedback-warning",
                                                        children: a,
                                                    }),
                                                    l.length > 0 &&
                                                        (0, n.jsx)("ul", {
                                                            className: y.ck,
                                                            children: l.map((e, t) =>
                                                                (0, n.jsx)(
                                                                    "li",
                                                                    {
                                                                        children: (0, n.jsx)(u.E, {
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
                                            `${a}-${t}`,
                                        );
                                    }),
                                }),
                            ],
                        }),
                ],
            })
        );
    },
    L = () => {
        let { previewEnabled: e, setPreviewEnabled: t, clearAssets: a } = (0, _.JE)(),
            { ignoredFilenames: i, clearAssets: s, clearIgnoredFilenames: r, processAndUpsertAssets: c } = (0, j.ds)(),
            { setDropHandler: m } = l.useContext(C),
            p = l.useCallback(
                (e) => {
                    a(), c(e);
                },
                [c, a],
            );
        return (
            l.useEffect(() => {
                m(p);
            }, [p, m]),
            (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(u.E, {
                        variant: "text-md/normal",
                        children: "Drop files in this panel to begin preview.",
                    }),
                    (0, n.jsxs)("div", {
                        className: y.sy,
                        children: [
                            (0, n.jsx)(h.d, { checked: e, onChange: (e) => t(e) }),
                            (0, n.jsx)(u.E, { variant: "text-md/normal", children: "Enable Preview" }),
                            (0, n.jsx)(o.K, {
                                variant: "icon-only",
                                size: "sm",
                                onClick: N,
                                icon: d.c,
                                "aria-label": "Open preview instructions",
                            }),
                        ],
                    }),
                    (0, n.jsx)(I, {}),
                    (0, n.jsx)(D, {}),
                    (0, n.jsx)(w, { clearAssets: s, clearIgnoredFiles: r }),
                    (0, n.jsx)(O, { ignoredFiles: i, handleClearIgnoredFiles: r }),
                ],
            })
        );
    },
    M = () => {
        let [e, t] = l.useState("preview");
        return (0, n.jsxs)("div", {
            className: y.kL,
            children: [
                (0, n.jsx)(g.I, {
                    options: E,
                    value: e,
                    onChange: (e) => {
                        let { value: a } = e;
                        return t(a);
                    },
                    className: y.Vj,
                    optionClassName: y.UK,
                }),
                (0, n.jsx)(s.h, { size: 8 }),
                "preview" === e && (0, n.jsx)(L, {}),
                "validate" === e && (0, n.jsx)(R, {}),
                (0, n.jsx)(s.h, { size: 16 }),
            ],
        });
    },
    P = (e) => {
        let { children: t } = e,
            [a, i] = l.useState(() => () => {}),
            s = l.useMemo(() => ({ setDropHandler: (e) => i(() => e) }), []);
        return (0, n.jsx)(C.Provider, { value: s, children: (0, n.jsx)(f.i, { onDrop: a, children: t }) });
    };
