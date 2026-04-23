t.d(a, { default: () => B });
var s = t(627968),
    n = t(64700),
    l = t(503698),
    r = t.n(l),
    i = t(110259),
    c = t(417597),
    o = t(827734),
    d = t(462887),
    m = t(939249),
    _ = t(534514),
    x = t(628284),
    h = t(289873),
    u = t(683071),
    p = t(231723),
    j = t(935462),
    f = t(789645),
    g = t(573613),
    N = t(834730),
    E = t(821609),
    T = t(22231),
    v = t(608461),
    C = t(58149),
    I = t(139286),
    y = t(544028),
    R = t(954571),
    L = t(336200),
    A = t(74399),
    S = t(739455),
    b = t(752942),
    k = t(128088),
    D = t(652215),
    U = t(985018),
    w = t(821729);
function O(e) {
    let { name: a, imageUrl: t, selected: n, onTap: l } = e;
    return (0, s.jsxs)(m.D, {
        onClick: l,
        className: w.rz,
        children: [
            (0, s.jsx)("img", { src: t, alt: "", className: w.ks }),
            (0, s.jsxs)("div", {
                className: w.GY,
                children: [
                    (0, s.jsx)(_.D, { variant: "heading-md/normal", className: r()({ [w.kE]: !n }), children: a }),
                    n &&
                        (0, s.jsx)(x.y, {
                            size: "md",
                            secondaryColor: o.A.unsafe_rawColors.WHITE.css,
                            color: o.A.unsafe_rawColors.BRAND_500.css,
                        }),
                ],
            }),
        ],
    });
}
function G(e) {
    let { loading: a, error: t, templates: n, selectedTemplateIndex: l, handleTapTemplate: r } = e,
        i = (0, c.bG)([y.A], () => y.A.theme);
    return a
        ? (0, s.jsx)(h.y, {})
        : null != t
          ? (0, s.jsx)(u.w, { type: "critical", children: t.message })
          : null == n || 0 === n.length
            ? null
            : (0, s.jsx)("div", {
                  className: w.PJ,
                  children: n.map((e, a) =>
                      (0, s.jsx)(
                          O,
                          {
                              imageUrl:
                                  a === l
                                      ? e.category_image
                                      : (0, d.q)(i)
                                        ? e.unselected_light_theme_category_image
                                        : e.unselected_dark_theme_category_image,
                              name: e.category,
                              selected: a === l,
                              onTap: () => r(a),
                          },
                          a,
                      ),
                  ),
              });
}
function P(e) {
    let {
            guildId: a,
            templates: t,
            selectedTemplateIndex: l,
            priceTiers: r,
            showPriceReselection: i,
            setShowPriceReselection: c,
            handleCreateTierFromTemplate: o,
        } = e,
        d = (0, S.zu)(a, r, null != t ? t[l]?.listings[0]?.price_tier : void 0),
        m = null != d && d.length > 0,
        _ = n.useCallback(
            (e) => {
                m ? c(!0) : o(e);
            },
            [o, m, c],
        );
    return null == t || 0 === t.length
        ? null
        : i && m
          ? (0, s.jsx)(k.A, { selectedTemplate: t[l], handleSelectTemplate: o, newPricesToPick: d })
          : (0, s.jsx)(b.A, { selectedTemplate: t[l], handleSelectTemplate: _ });
}
function B(e) {
    let {
            transitionState: a,
            onClose: t,
            guildId: l,
            addNewEditStateFromTemplate: r,
            addNewEditStateFromScratch: o,
            priceTiers: d,
        } = e,
        x = (0, c.bG)([A.A], () => A.A.getTemplates(l)),
        [h, { loading: u, error: y }] = (0, v.A)(L.y),
        S = n.useRef("voluntarily_exit");
    n.useEffect(() => {
        (null == x || 0 === x.length) && h(l);
    }, [h, l, x]),
        n.useEffect(() => {
            a === p.ip.EXITING &&
                R.default.track(D.HAw.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, {
                    exit_reason: S.current,
                    ...(0, C.H$)(l),
                });
        }, [a, l, S]);
    let [b, k] = n.useState(0),
        [O, B] = n.useState(!1),
        H = n.useCallback(
            (e) => {
                (S.current = "template_selected"), (0, L.c)(e, l), r(e), t();
            },
            [l, r, t],
        ),
        M = n.useCallback(() => {
            O ? B(!1) : t();
        }, [O, t]);
    return (
        (0, I.A)({
            type: i.ImpressionTypes.MODAL,
            name: i.ImpressionNames.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR,
            properties: { guild_id: l },
        }),
        (0, s.jsxs)(j.EO, {
            "data-migration-pending": !0,
            transitionState: a,
            size: j.rI.DYNAMIC,
            className: w.CR,
            parentComponent: "GuildRoleSubscriptionsTierTemplateModal",
            children: [
                (0, s.jsx)(m.D, {
                    onClick: M,
                    className: w.b,
                    children: (0, s.jsx)(f.P, { size: "xxs", color: "currentColor" }),
                }),
                (0, s.jsxs)(j.$m, {
                    className: w.jE,
                    "data-migration-pending": !0,
                    children: [
                        (0, s.jsxs)("div", {
                            className: w.pv,
                            children: [
                                O &&
                                    (0, s.jsx)(m.D, {
                                        className: w.wZ,
                                        onClick: () => {
                                            B(!1);
                                        },
                                        "aria-label": "overlay",
                                    }),
                                (0, s.jsxs)(g.Ip, {
                                    className: w.H2,
                                    children: [
                                        (0, s.jsx)(_.D, {
                                            variant: "heading-xl/semibold",
                                            children: U.intl.string(U.t["9QQ+i+"]),
                                        }),
                                        (0, s.jsx)(N.E, {
                                            variant: "text-sm/normal",
                                            className: w.jJ,
                                            children: U.intl.string(U.t.CvFFOv),
                                        }),
                                        (0, s.jsx)(N.E, {
                                            variant: "text-sm/normal",
                                            className: w.uL,
                                            children: U.intl.format(U.t.iQML2g, {
                                                creatorPortalUrl:
                                                    "https://discord.com/creator-portal/learn-from-creators?tab=lightning-lessons",
                                            }),
                                        }),
                                        (0, s.jsx)("div", {
                                            className: w.QX,
                                            children: (0, s.jsx)(G, {
                                                loading: u,
                                                error: y,
                                                templates: x,
                                                selectedTemplateIndex: b,
                                                handleTapTemplate: (e) => {
                                                    k(e);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(N.E, { variant: "text-sm/normal", children: U.intl.string(U.t.jymUTC) }),
                                (0, s.jsx)(E.$, {
                                    onClick: () => {
                                        (S.current = "create_from_scratch"), o(), t();
                                    },
                                    variant: "secondary",
                                    icon: T.R,
                                    text: U.intl.string(U.t.a3ycUX),
                                }),
                            ],
                        }),
                        (0, s.jsx)(P, {
                            guildId: l,
                            templates: x,
                            selectedTemplateIndex: b,
                            priceTiers: d,
                            showPriceReselection: O,
                            setShowPriceReselection: B,
                            handleCreateTierFromTemplate: H,
                        }),
                    ],
                }),
            ],
        })
    );
}
