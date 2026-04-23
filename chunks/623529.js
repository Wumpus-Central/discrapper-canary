n.d(t, { A: () => U });
var i = n(627968),
    l = n(64700),
    s = n(284009),
    r = n.n(s),
    a = n(735438),
    o = n.n(a),
    d = n(73939),
    c = n(36525),
    u = n(139033),
    m = n(319060),
    g = n(276293),
    h = n(530557),
    x = n(683071),
    _ = n(696986),
    p = n(954197),
    A = n(404778),
    E = n(260598),
    f = n(452027),
    j = n(691885),
    N = n(871682),
    I = n(915089),
    C = n(405810),
    b = n(342298),
    v = n(371794),
    S = n(240248),
    T = n(599941),
    y = n(11351),
    R = n(996507),
    L = n(389025),
    D = n(2242),
    O = n(284683),
    G = n(985018),
    M = n(187364);
let k = (0, S.xI)(m.A.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_OVERVIEW_SETTINGS_MAX_WIDTH);
function U(e) {
    let { guild: t, isGuildProducts: n = !1 } = e,
        { format: s } = (0, L.A)(t.id),
        a = (0, T.Tq)(t.id),
        m = l.useCallback(
            () =>
                a?.cover_image_asset?.application_id == null
                    ? null
                    : (0, v.YE)(a.cover_image_asset.application_id, a.cover_image_asset, k),
            [a],
        ),
        [S, U] = l.useState(s),
        [w, P] = l.useState(a?.description ?? ""),
        [B, F] = l.useState(m),
        [H, V] = l.useState(a?.store_page_guild_products_default_sort),
        [z, W] = l.useState(a?.server_shop_tab_order),
        { loading: Y, error: K, updateSubscriptionsSettings: X } = (0, T.KE)(),
        { imageCTA: Z, imageAriaLabel: J, setFilename: q } = (0, R.A)(a?.cover_image_asset),
        Q = (0, I.GV)();
    function $(e, t) {
        r()(null != e, "Null value not allowed"), null != t && q(t.name), F(e);
    }
    let ee = l.useMemo(
            () =>
                (null != w && w !== (a?.description ?? "")) ||
                B?.startsWith("data:") === !0 ||
                S !== s ||
                a?.store_page_guild_products_default_sort !== H ||
                a?.server_shop_tab_order !== z,
            [B, s, w, a, S, H, z],
        ),
        et = null != w && "" !== w && null != B;
    l.useEffect(() => {
        a?.cover_image_asset?.application_id != null &&
            F((0, v.YE)(a.cover_image_asset.application_id, a.cover_image_asset, k));
    }, [a?.cover_image_asset]);
    let en = (0, y.gN)(),
        ei = l.useMemo(() => O.aq.map((e) => ({ id: e.toString(), label: (0, O.Ac)(e), value: e })), []),
        el = l.useMemo(
            () => [
                { id: "products-first", label: G.intl.string(G.t.X6h2gz), value: O.HA.PRODUCTS_FIRST },
                { id: "subs-first", label: G.intl.string(G.t["KzCF/6"]), value: O.HA.SUBS_FIRST },
            ],
            [],
        );
    return (0, i.jsxs)("div", {
        className: M.kL,
        children: [
            null != K &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(x.w, { type: "critical", children: K.getAnyErrorMessage() }),
                        (0, i.jsx)(_.h, { size: 16 }),
                    ],
                }),
            n
                ? null
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(p.z, {
                              label: G.intl.string(G.t["PAVi++"]),
                              description: G.intl.string(G.t.x87YqH),
                              value: S,
                              onChange: (e) => {
                                  s !== e &&
                                      e === D.c4.ALL_CHANNELS &&
                                      (0, u.A)({
                                          title: G.intl.string(G.t.dmVoOz),
                                          subtitle: G.intl.string(G.t.mtwzdD),
                                          confirmText: G.intl.string(G.t["NX+WJN"]),
                                      }),
                                      U(e);
                              },
                              disabled: en,
                              options: [
                                  {
                                      name: G.intl.string(G.t.rXqxhF),
                                      desc: G.intl.string(G.t.yQiJne),
                                      value: D.c4.SOME_CHANNELS,
                                      icon: g.N,
                                  },
                                  {
                                      name: G.intl.string(G.t.WzC9s6),
                                      desc: G.intl.string(G.t.WmagiB),
                                      value: D.c4.ALL_CHANNELS,
                                      icon: h.R,
                                  },
                              ],
                          }),
                          (0, i.jsx)(A.c, { className: M.yF }),
                      ],
                  }),
            (0, i.jsx)(E.f, {
                label: G.intl.string(G.t["1+Ho1X"]),
                placeholder: n ? G.intl.string(G.t.SD6LRZ) : G.intl.string(G.t["aVhW/W"]),
                maxLength: 1500,
                value: w,
                autosize: !0,
                onChange: P,
                "aria-labelledby": Q,
                disabled: en,
            }),
            (0, i.jsx)(A.c, { className: M.yF }),
            (0, i.jsxs)(f.D, {
                label: G.intl.string(G.t["0kpTpM"]),
                description: G.intl.string(G.t.i2rCwT),
                children: [
                    (0, i.jsx)(b.A, {
                        image: B,
                        hint: Z,
                        showIcon: !0,
                        showRemoveButton: !1,
                        hideSize: !0,
                        className: M.bm,
                        iconWrapperClassName: M.RU,
                        imageClassName: M.$B,
                        iconClassName: M.S$,
                        onChange: $,
                        "aria-label": J,
                        disabled: en,
                    }),
                    (0, i.jsx)(C.A, {
                        onChange: $,
                        "aria-label": J,
                        disabled: en,
                        text: Z,
                        variant: "secondary",
                        size: "md",
                    }),
                ],
            }),
            n
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(A.c, { className: M.yF }),
                          (0, i.jsx)(j.l, {
                              label: G.intl.string(G.t.aaZ9pE),
                              description: G.intl.string(G.t.TILN8u),
                              value: H,
                              placeholder: G.intl.string(G.t.XqMe3N),
                              options: ei,
                              onSelectionChange: V,
                              selectionMode: "single",
                              fullWidth: !0,
                          }),
                      ],
                  })
                : null,
            el.length > 0 &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(A.c, { className: M.yF }),
                        (0, i.jsx)(j.l, {
                            label: G.intl.string(G.t["+dtmw+"]),
                            description: G.intl.string(G.t.n8WSWJ),
                            value: z,
                            placeholder: G.intl.string(G.t.XqMe3N),
                            options: el,
                            onSelectionChange: W,
                            selectionMode: "single",
                            fullWidth: !0,
                        }),
                    ],
                }),
            (0, i.jsx)(d.F, {
                component: "div",
                className: M.se,
                children:
                    ee &&
                    (0, i.jsx)(N.F, {
                        children: (0, i.jsx)(c.A, {
                            submitting: Y,
                            disabled: !et,
                            onReset: () => {
                                U(s),
                                    P(a?.description ?? ""),
                                    F(m),
                                    V(a?.store_page_guild_products_default_sort),
                                    W(a?.server_shop_tab_order);
                            },
                            onSave: () => {
                                r()(null != a, "Settings must be defined");
                                let e = {};
                                w !== a.description && (e.description = w),
                                    null != B && B.startsWith("data:") && (e.cover_image = B),
                                    S !== s && (e.full_server_gate = S === D.c4.ALL_CHANNELS),
                                    H !== a.store_page_guild_products_default_sort &&
                                        (e.store_page_guild_products_default_sort = H),
                                    z !== a.server_shop_tab_order && (e.server_shop_tab_order = z),
                                    o().isEmpty(e) || X(t.id, e);
                            },
                            saveButtonTooltip: et ? void 0 : G.intl.string(G.t["6HRvit"]),
                        }),
                    }),
            }),
        ],
    });
}
