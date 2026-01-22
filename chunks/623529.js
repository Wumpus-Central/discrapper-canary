n.d(t, { A: () => T }), n(896048), n(228524);
var r = n(627968),
    i = n(64700),
    l = n(284009),
    s = n.n(l),
    a = n(735438),
    c = n.n(a),
    o = n(73939),
    d = n(36525),
    u = n(139033),
    f = n(319060),
    g = n(397927),
    b = n(915089),
    m = n(405810),
    p = n(342298),
    x = n(371794),
    h = n(240248),
    j = n(599941),
    O = n(11351),
    y = n(996507),
    v = n(389025),
    A = n(2242),
    E = n(284683),
    N = n(985018),
    _ = n(941769);
let S = (0, h.xI)(f.A.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_OVERVIEW_SETTINGS_MAX_WIDTH);
function T(e) {
    var t;
    let { guild: n, isGuildProducts: l = !1 } = e,
        { format: a } = (0, v.A)(n.id),
        f = (0, j.Tq)(n.id),
        h = i.useCallback(() => {
            var e;
            return (null == f || null == (e = f.cover_image_asset) ? void 0 : e.application_id) == null
                ? null
                : (0, x.YE)(f.cover_image_asset.application_id, f.cover_image_asset, S);
        }, [f]),
        [T, I] = i.useState(a),
        [C, P] = i.useState(null != (t = null == f ? void 0 : f.description) ? t : ""),
        [w, R] = i.useState(h),
        [D, G] = i.useState(null == f ? void 0 : f.store_page_guild_products_default_sort),
        [L, k] = i.useState(null == f ? void 0 : f.server_shop_tab_order),
        { loading: M, error: U, updateSubscriptionsSettings: F } = (0, j.KE)(),
        { imageCTA: B, imageAriaLabel: H, setFilename: V } = (0, y.A)(null == f ? void 0 : f.cover_image_asset),
        K = (0, b.GV)();
    function z(e, t) {
        s()(null != e, "Null value not allowed"), null != t && V(t.name), R(e);
    }
    let Y = i.useMemo(() => {
            var e;
            return (
                (null != C && C !== (null != (e = null == f ? void 0 : f.description) ? e : "")) ||
                (null == w ? void 0 : w.startsWith("data:")) === !0 ||
                T !== a ||
                (null == f ? void 0 : f.store_page_guild_products_default_sort) !== D ||
                (null == f ? void 0 : f.server_shop_tab_order) !== L
            );
        }, [w, a, C, f, T, D, L]),
        W = null != C && "" !== C && null != w;
    i.useEffect(() => {
        var e;
        (null == f || null == (e = f.cover_image_asset) ? void 0 : e.application_id) != null &&
            R((0, x.YE)(f.cover_image_asset.application_id, f.cover_image_asset, S));
    }, [null == f ? void 0 : f.cover_image_asset]);
    let X = (0, O.gN)(),
        J = i.useMemo(
            () =>
                E.aq.map((e) => ({
                    id: e.toString(),
                    label: (0, E.Ac)(e),
                    value: e,
                })),
            [],
        ),
        Z = i.useMemo(
            () => [
                {
                    id: "products-first",
                    label: N.intl.string(N.t.X6h2gz),
                    value: E.HA.PRODUCTS_FIRST,
                },
                {
                    id: "subs-first",
                    label: N.intl.string(N.t["KzCF/6"]),
                    value: E.HA.SUBS_FIRST,
                },
            ],
            [],
        );
    return (0, r.jsxs)("div", {
        className: _.kL,
        children: [
            null != U &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(g.wx6, {
                            type: "critical",
                            children: U.getAnyErrorMessage(),
                        }),
                        (0, r.jsx)(g.hKd, { size: 16 }),
                    ],
                }),
            l
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(g.z6M, {
                              label: N.intl.string(N.t["PAVi++"]),
                              description: N.intl.string(N.t.x87YqH),
                              value: T,
                              onChange: (e) => {
                                  a !== e &&
                                      e === A.c4.ALL_CHANNELS &&
                                      (0, u.A)({
                                          title: N.intl.string(N.t.dmVoOz),
                                          subtitle: N.intl.string(N.t.mtwzdD),
                                          confirmText: N.intl.string(N.t["NX+WJN"]),
                                      }),
                                      I(e);
                              },
                              disabled: X,
                              options: [
                                  {
                                      name: N.intl.string(N.t.rXqxhF),
                                      desc: N.intl.string(N.t.yQiJne),
                                      value: A.c4.SOME_CHANNELS,
                                      icon: g.N$i,
                                  },
                                  {
                                      name: N.intl.string(N.t.WzC9s6),
                                      desc: N.intl.string(N.t.WmagiB),
                                      value: A.c4.ALL_CHANNELS,
                                      icon: g.RYV,
                                  },
                              ],
                          }),
                          (0, r.jsx)(g.cGx, { className: _.yF }),
                      ],
                  }),
            (0, r.jsx)(g.fs1, {
                label: N.intl.string(N.t["1+Ho1X"]),
                placeholder: l ? N.intl.string(N.t.SD6LRZ) : N.intl.string(N.t["aVhW/W"]),
                maxLength: 1500,
                value: C,
                autosize: !0,
                onChange: P,
                "aria-labelledby": K,
                disabled: X,
            }),
            (0, r.jsx)(g.cGx, { className: _.yF }),
            (0, r.jsxs)(g.D0$, {
                label: N.intl.string(N.t["0kpTpM"]),
                description: N.intl.string(N.t.i2rCwT),
                children: [
                    (0, r.jsx)(p.A, {
                        image: w,
                        hint: B,
                        showIcon: !0,
                        showRemoveButton: !1,
                        hideSize: !0,
                        className: _.bm,
                        iconWrapperClassName: _.RU,
                        imageClassName: _.$B,
                        iconClassName: _.S$,
                        onChange: z,
                        "aria-label": H,
                        disabled: X,
                    }),
                    (0, r.jsx)(m.A, {
                        onChange: z,
                        "aria-label": H,
                        disabled: X,
                        text: B,
                        variant: "secondary",
                        size: "md",
                    }),
                ],
            }),
            l
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(g.cGx, { className: _.yF }),
                          (0, r.jsx)(g.l6P, {
                              label: N.intl.string(N.t.aaZ9pE),
                              description: N.intl.string(N.t.TILN8u),
                              value: D,
                              placeholder: N.intl.string(N.t.XqMe3N),
                              options: J,
                              onSelectionChange: G,
                              selectionMode: "single",
                              fullWidth: !0,
                          }),
                      ],
                  })
                : null,
            Z.length > 0 &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(g.cGx, { className: _.yF }),
                        (0, r.jsx)(g.l6P, {
                            label: N.intl.string(N.t["+dtmw+"]),
                            description: N.intl.string(N.t.n8WSWJ),
                            value: L,
                            placeholder: N.intl.string(N.t.XqMe3N),
                            options: Z,
                            onSelectionChange: k,
                            selectionMode: "single",
                            fullWidth: !0,
                        }),
                    ],
                }),
            (0, r.jsx)(o.F, {
                component: "div",
                className: _.se,
                children:
                    Y &&
                    (0, r.jsx)(g.FQk, {
                        children: (0, r.jsx)(d.A, {
                            submitting: M,
                            disabled: !W,
                            onReset: () => {
                                var e;
                                I(a),
                                    P(null != (e = null == f ? void 0 : f.description) ? e : ""),
                                    R(h),
                                    G(null == f ? void 0 : f.store_page_guild_products_default_sort),
                                    k(null == f ? void 0 : f.server_shop_tab_order);
                            },
                            onSave: () => {
                                s()(null != f, "Settings must be defined");
                                let e = {};
                                C !== f.description && (e.description = C),
                                    null != w && w.startsWith("data:") && (e.cover_image = w),
                                    T !== a && (e.full_server_gate = T === A.c4.ALL_CHANNELS),
                                    D !== f.store_page_guild_products_default_sort &&
                                        (e.store_page_guild_products_default_sort = D),
                                    L !== f.server_shop_tab_order && (e.server_shop_tab_order = L),
                                    c().isEmpty(e) || F(n.id, e);
                            },
                            saveButtonTooltip: W ? void 0 : N.intl.string(N.t["6HRvit"]),
                        }),
                    }),
            }),
        ],
    });
}
