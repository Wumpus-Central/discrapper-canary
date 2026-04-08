a.d(t, { default: () => L });
var s = a(627968),
    n = a(64700),
    l = a(503698),
    i = a.n(l),
    r = a(110259),
    c = a(417597),
    o = a(827734),
    d = a(582754),
    m = a(397927),
    x = a(608461),
    _ = a(58149),
    u = a(139286),
    h = a(544028),
    p = a(954571),
    j = a(336200),
    f = a(74399),
    T = a(739455),
    g = a(530561),
    N = a(128088),
    C = a(652215),
    v = a(985018),
    I = a(698546);
function E(e) {
    let { name: t, imageUrl: a, selected: n, onTap: l } = e;
    return (0, s.jsxs)(m.DUT, {
        onClick: l,
        className: I.rz,
        children: [
            (0, s.jsx)("img", { src: a, alt: "", className: I.ks }),
            (0, s.jsxs)("div", {
                className: I.GY,
                children: [
                    (0, s.jsx)(m.Heading, {
                        variant: "heading-md/normal",
                        className: i()({ [I.kE]: !n }),
                        children: t,
                    }),
                    n &&
                        (0, s.jsx)(m.yr3, {
                            size: "md",
                            secondaryColor: o.A.unsafe_rawColors.WHITE.css,
                            color: o.A.unsafe_rawColors.BRAND_500.css,
                        }),
                ],
            }),
        ],
    });
}
function y(e) {
    let { loading: t, error: a, templates: n, selectedTemplateIndex: l, handleTapTemplate: i } = e,
        r = (0, c.bG)([h.A], () => h.A.theme);
    return t
        ? (0, s.jsx)(m.y$y, {})
        : null != a
          ? (0, s.jsx)(m.wx6, { type: "critical", children: a.message })
          : null == n || 0 === n.length
            ? null
            : (0, s.jsx)("div", {
                  className: I.PJ,
                  children: n.map((e, t) =>
                      (0, s.jsx)(
                          E,
                          {
                              imageUrl:
                                  t === l
                                      ? e.category_image
                                      : (0, d.qB)(r)
                                        ? e.unselected_light_theme_category_image
                                        : e.unselected_dark_theme_category_image,
                              name: e.category,
                              selected: t === l,
                              onTap: () => i(t),
                          },
                          t,
                      ),
                  ),
              });
}
function R(e) {
    let {
            guildId: t,
            templates: a,
            selectedTemplateIndex: l,
            priceTiers: i,
            showPriceReselection: r,
            setShowPriceReselection: c,
            handleCreateTierFromTemplate: o,
        } = e,
        d = (0, T.zu)(t, i, null != a ? a[l]?.listings[0]?.price_tier : void 0),
        m = null != d && d.length > 0,
        x = n.useCallback(
            (e) => {
                m ? c(!0) : o(e);
            },
            [o, m, c],
        );
    return null == a || 0 === a.length
        ? null
        : r && m
          ? (0, s.jsx)(N.A, { selectedTemplate: a[l], handleSelectTemplate: o, newPricesToPick: d })
          : (0, s.jsx)(g.A, { selectedTemplate: a[l], handleSelectTemplate: x });
}
function L(e) {
    let {
            transitionState: t,
            onClose: a,
            guildId: l,
            addNewEditStateFromTemplate: i,
            addNewEditStateFromScratch: o,
            priceTiers: d,
        } = e,
        h = (0, c.bG)([f.A], () => f.A.getTemplates(l)),
        [T, { loading: g, error: N }] = (0, x.A)(j.y),
        E = n.useRef("voluntarily_exit");
    n.useEffect(() => {
        (null == h || 0 === h.length) && T(l);
    }, [T, l, h]),
        n.useEffect(() => {
            t === m.ip4.EXITING &&
                p.default.track(C.HAw.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, {
                    exit_reason: E.current,
                    ...(0, _.H$)(l),
                });
        }, [t, l, E]);
    let [L, A] = n.useState(0),
        [S, b] = n.useState(!1),
        U = n.useCallback(
            (e) => {
                (E.current = "template_selected"), (0, j.c)(e, l), i(e), a();
            },
            [l, i, a],
        ),
        k = n.useCallback(() => {
            S ? b(!1) : a();
        }, [S, a]);
    return (
        (0, u.A)({
            type: r.ImpressionTypes.MODAL,
            name: r.ImpressionNames.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR,
            properties: { guild_id: l },
        }),
        (0, s.jsxs)(m.EOs, {
            "data-migration-pending": !0,
            transitionState: t,
            size: m.rIJ.DYNAMIC,
            className: I.CR,
            parentComponent: "GuildRoleSubscriptionsTierTemplateModal",
            children: [
                (0, s.jsx)(m.DUT, {
                    onClick: k,
                    className: I.b,
                    children: (0, s.jsx)(m.PGe, { size: "xxs", color: "currentColor" }),
                }),
                (0, s.jsxs)(m.$mQ, {
                    className: I.jE,
                    "data-migration-pending": !0,
                    children: [
                        (0, s.jsxs)("div", {
                            className: I.pv,
                            children: [
                                S &&
                                    (0, s.jsx)(m.DUT, {
                                        className: I.wZ,
                                        onClick: () => {
                                            b(!1);
                                        },
                                        "aria-label": "overlay",
                                    }),
                                (0, s.jsxs)(m.IpV, {
                                    className: I.H2,
                                    children: [
                                        (0, s.jsx)(m.Heading, {
                                            variant: "heading-xl/semibold",
                                            children: v.intl.string(v.t["9QQ+i+"]),
                                        }),
                                        (0, s.jsx)(m.Text, {
                                            variant: "text-sm/normal",
                                            className: I.jJ,
                                            children: v.intl.string(v.t.CvFFOv),
                                        }),
                                        (0, s.jsx)(m.Text, {
                                            variant: "text-sm/normal",
                                            className: I.uL,
                                            children: v.intl.format(v.t.iQML2g, {
                                                creatorPortalUrl:
                                                    "https://discord.com/creator-portal/learn-from-creators?tab=lightning-lessons",
                                            }),
                                        }),
                                        (0, s.jsx)("div", {
                                            className: I.QX,
                                            children: (0, s.jsx)(y, {
                                                loading: g,
                                                error: N,
                                                templates: h,
                                                selectedTemplateIndex: L,
                                                handleTapTemplate: (e) => {
                                                    A(e);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(m.Text, { variant: "text-sm/normal", children: v.intl.string(v.t.jymUTC) }),
                                (0, s.jsx)(m.Button, {
                                    onClick: () => {
                                        (E.current = "create_from_scratch"), o(), a();
                                    },
                                    variant: "secondary",
                                    icon: m.R2l,
                                    text: v.intl.string(v.t.a3ycUX),
                                }),
                            ],
                        }),
                        (0, s.jsx)(R, {
                            guildId: l,
                            templates: h,
                            selectedTemplateIndex: L,
                            priceTiers: d,
                            showPriceReselection: S,
                            setShowPriceReselection: b,
                            handleCreateTierFromTemplate: U,
                        }),
                    ],
                }),
            ],
        })
    );
}
