"use strict";
n.d(t, { A: () => S });
var i = n(627968),
    s = n(64700),
    l = n(284009),
    r = n.n(l),
    a = n(735438),
    o = n.n(a),
    d = n(73939),
    c = n(36525),
    u = n(139033),
    m = n(319060),
    g = n(397927),
    x = n(915089),
    h = n(405810),
    _ = n(342298),
    A = n(371794),
    p = n(240248),
    f = n(599941),
    j = n(11351),
    N = n(996507),
    E = n(389025),
    b = n(2242),
    T = n(284683),
    C = n(985018),
    I = n(941769);
let v = (0, p.xI)(m.A.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_OVERVIEW_SETTINGS_MAX_WIDTH);
function S(e) {
    let { guild: t, isGuildProducts: n = !1 } = e,
        { format: l } = (0, E.A)(t.id),
        a = (0, f.Tq)(t.id),
        m = s.useCallback(
            () =>
                a?.cover_image_asset?.application_id == null
                    ? null
                    : (0, A.YE)(a.cover_image_asset.application_id, a.cover_image_asset, v),
            [a],
        ),
        [p, S] = s.useState(l),
        [y, R] = s.useState(a?.description ?? ""),
        [O, G] = s.useState(m),
        [L, D] = s.useState(a?.store_page_guild_products_default_sort),
        [M, k] = s.useState(a?.server_shop_tab_order),
        { loading: U, error: P, updateSubscriptionsSettings: w } = (0, f.KE)(),
        { imageCTA: B, imageAriaLabel: F, setFilename: H } = (0, N.A)(a?.cover_image_asset),
        V = (0, x.GV)();
    function z(e, t) {
        r()(null != e, "Null value not allowed"), null != t && H(t.name), G(e);
    }
    let W = s.useMemo(
            () =>
                (null != y && y !== (a?.description ?? "")) ||
                O?.startsWith("data:") === !0 ||
                p !== l ||
                a?.store_page_guild_products_default_sort !== L ||
                a?.server_shop_tab_order !== M,
            [O, l, y, a, p, L, M],
        ),
        K = null != y && "" !== y && null != O;
    s.useEffect(() => {
        a?.cover_image_asset?.application_id != null &&
            G((0, A.YE)(a.cover_image_asset.application_id, a.cover_image_asset, v));
    }, [a?.cover_image_asset]);
    let Y = (0, j.gN)(),
        X = s.useMemo(() => T.aq.map((e) => ({ id: e.toString(), label: (0, T.Ac)(e), value: e })), []),
        J = s.useMemo(
            () => [
                { id: "products-first", label: C.intl.string(C.t.X6h2gz), value: T.HA.PRODUCTS_FIRST },
                { id: "subs-first", label: C.intl.string(C.t["KzCF/6"]), value: T.HA.SUBS_FIRST },
            ],
            [],
        );
    return (0, i.jsxs)("div", {
        className: I.kL,
        children: [
            null != P &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(g.wx6, { type: "critical", children: P.getAnyErrorMessage() }),
                        (0, i.jsx)(g.hKd, { size: 16 }),
                    ],
                }),
            n
                ? null
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(g.z6M, {
                              label: C.intl.string(C.t["PAVi++"]),
                              description: C.intl.string(C.t.x87YqH),
                              value: p,
                              onChange: (e) => {
                                  l !== e &&
                                      e === b.c4.ALL_CHANNELS &&
                                      (0, u.A)({
                                          title: C.intl.string(C.t.dmVoOz),
                                          subtitle: C.intl.string(C.t.mtwzdD),
                                          confirmText: C.intl.string(C.t["NX+WJN"]),
                                      }),
                                      S(e);
                              },
                              disabled: Y,
                              options: [
                                  {
                                      name: C.intl.string(C.t.rXqxhF),
                                      desc: C.intl.string(C.t.yQiJne),
                                      value: b.c4.SOME_CHANNELS,
                                      icon: g.N$i,
                                  },
                                  {
                                      name: C.intl.string(C.t.WzC9s6),
                                      desc: C.intl.string(C.t.WmagiB),
                                      value: b.c4.ALL_CHANNELS,
                                      icon: g.RYV,
                                  },
                              ],
                          }),
                          (0, i.jsx)(g.cGx, { className: I.yF }),
                      ],
                  }),
            (0, i.jsx)(g.fs1, {
                label: C.intl.string(C.t["1+Ho1X"]),
                placeholder: n ? C.intl.string(C.t.SD6LRZ) : C.intl.string(C.t["aVhW/W"]),
                maxLength: 1500,
                value: y,
                autosize: !0,
                onChange: R,
                "aria-labelledby": V,
                disabled: Y,
            }),
            (0, i.jsx)(g.cGx, { className: I.yF }),
            (0, i.jsxs)(g.D0$, {
                label: C.intl.string(C.t["0kpTpM"]),
                description: C.intl.string(C.t.i2rCwT),
                children: [
                    (0, i.jsx)(_.A, {
                        image: O,
                        hint: B,
                        showIcon: !0,
                        showRemoveButton: !1,
                        hideSize: !0,
                        className: I.bm,
                        iconWrapperClassName: I.RU,
                        imageClassName: I.$B,
                        iconClassName: I.S$,
                        onChange: z,
                        "aria-label": F,
                        disabled: Y,
                    }),
                    (0, i.jsx)(h.A, {
                        onChange: z,
                        "aria-label": F,
                        disabled: Y,
                        text: B,
                        variant: "secondary",
                        size: "md",
                    }),
                ],
            }),
            n
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(g.cGx, { className: I.yF }),
                          (0, i.jsx)(g.l6P, {
                              label: C.intl.string(C.t.aaZ9pE),
                              description: C.intl.string(C.t.TILN8u),
                              value: L,
                              placeholder: C.intl.string(C.t.XqMe3N),
                              options: X,
                              onSelectionChange: D,
                              selectionMode: "single",
                              fullWidth: !0,
                          }),
                      ],
                  })
                : null,
            J.length > 0 &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(g.cGx, { className: I.yF }),
                        (0, i.jsx)(g.l6P, {
                            label: C.intl.string(C.t["+dtmw+"]),
                            description: C.intl.string(C.t.n8WSWJ),
                            value: M,
                            placeholder: C.intl.string(C.t.XqMe3N),
                            options: J,
                            onSelectionChange: k,
                            selectionMode: "single",
                            fullWidth: !0,
                        }),
                    ],
                }),
            (0, i.jsx)(d.F, {
                component: "div",
                className: I.se,
                children:
                    W &&
                    (0, i.jsx)(g.FQk, {
                        children: (0, i.jsx)(c.A, {
                            submitting: U,
                            disabled: !K,
                            onReset: () => {
                                S(l),
                                    R(a?.description ?? ""),
                                    G(m),
                                    D(a?.store_page_guild_products_default_sort),
                                    k(a?.server_shop_tab_order);
                            },
                            onSave: () => {
                                r()(null != a, "Settings must be defined");
                                let e = {};
                                y !== a.description && (e.description = y),
                                    null != O && O.startsWith("data:") && (e.cover_image = O),
                                    p !== l && (e.full_server_gate = p === b.c4.ALL_CHANNELS),
                                    L !== a.store_page_guild_products_default_sort &&
                                        (e.store_page_guild_products_default_sort = L),
                                    M !== a.server_shop_tab_order && (e.server_shop_tab_order = M),
                                    o().isEmpty(e) || w(t.id, e);
                            },
                            saveButtonTooltip: K ? void 0 : C.intl.string(C.t["6HRvit"]),
                        }),
                    }),
            }),
        ],
    });
}
