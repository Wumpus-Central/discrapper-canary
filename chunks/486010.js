a.d(t, { default: () => A });
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
    j = a(567305),
    f = a(336200),
    T = a(74399),
    g = a(739455),
    N = a(752942),
    C = a(128088),
    v = a(652215),
    I = a(985018),
    E = a(18737);
function y(e) {
    let { name: t, imageUrl: a, selected: n, onTap: l } = e;
    return (0, s.jsxs)(m.DUT, {
        onClick: l,
        className: E.rz,
        children: [
            (0, s.jsx)("img", { src: a, alt: "", className: E.ks }),
            (0, s.jsxs)("div", {
                className: E.GY,
                children: [
                    (0, s.jsx)(m.Heading, {
                        variant: "heading-md/normal",
                        className: i()({ [E.kE]: !n }),
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
function R(e) {
    let { loading: t, error: a, templates: n, selectedTemplateIndex: l, handleTapTemplate: i } = e,
        r = (0, c.bG)([h.A], () => h.A.theme);
    return t
        ? (0, s.jsx)(m.y$y, {})
        : null != a
          ? (0, s.jsx)(m.wx6, { type: "critical", children: a.message })
          : null == n || 0 === n.length
            ? null
            : (0, s.jsx)("div", {
                  className: E.PJ,
                  children: n.map((e, t) =>
                      (0, s.jsx)(
                          y,
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
function L(e) {
    let {
            guildId: t,
            templates: a,
            selectedTemplateIndex: l,
            priceTiers: i,
            showPriceReselection: r,
            setShowPriceReselection: c,
            handleCreateTierFromTemplate: o,
        } = e,
        d = (0, g.zu)(t, i, null != a ? a[l]?.listings[0]?.price_tier : void 0),
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
          ? (0, s.jsx)(C.A, { selectedTemplate: a[l], handleSelectTemplate: o, newPricesToPick: d })
          : (0, s.jsx)(N.A, { selectedTemplate: a[l], handleSelectTemplate: x });
}
function A(e) {
    let {
            transitionState: t,
            onClose: a,
            guildId: l,
            addNewEditStateFromTemplate: i,
            addNewEditStateFromScratch: o,
            priceTiers: d,
        } = e,
        h = (0, c.bG)([T.A], () => T.A.getTemplates(l)),
        [g, { loading: N, error: C }] = (0, x.A)(f.y),
        y = n.useRef("voluntarily_exit");
    n.useEffect(() => {
        (null == h || 0 === h.length) && g(l);
    }, [g, l, h]),
        n.useEffect(() => {
            t === m.ip4.EXITING &&
                p.default.track(v.HAw.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, {
                    exit_reason: y.current,
                    ...(0, _.H$)(l),
                });
        }, [t, l, y]);
    let [A, S] = n.useState(0),
        [b, U] = n.useState(!1),
        k = n.useCallback(
            (e) => {
                (y.current = "template_selected"), (0, f.c)(e, l), i(e), a();
            },
            [l, i, a],
        ),
        w = n.useCallback(() => {
            b ? U(!1) : a();
        }, [b, a]),
        D = (0, j.Xi)(l);
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
            className: E.CR,
            parentComponent: "GuildRoleSubscriptionsTierTemplateModal",
            children: [
                (0, s.jsx)(m.DUT, {
                    onClick: w,
                    className: E.b,
                    children: (0, s.jsx)(m.PGe, { size: "xxs", color: "currentColor" }),
                }),
                (0, s.jsxs)(m.$mQ, {
                    className: E.jE,
                    "data-migration-pending": !0,
                    children: [
                        (0, s.jsxs)("div", {
                            className: E.pv,
                            children: [
                                b &&
                                    (0, s.jsx)(m.DUT, {
                                        className: E.wZ,
                                        onClick: () => {
                                            b && U(!1);
                                        },
                                        "aria-label": "overlay",
                                    }),
                                (0, s.jsxs)(m.IpV, {
                                    className: E.H2,
                                    children: [
                                        (0, s.jsx)(m.Heading, {
                                            variant: "heading-xl/semibold",
                                            children: I.intl.string(I.t["9QQ+i+"]),
                                        }),
                                        (0, s.jsx)(m.Text, {
                                            variant: "text-sm/normal",
                                            className: E.jJ,
                                            children: I.intl.string(I.t.CvFFOv),
                                        }),
                                        D &&
                                            (0, s.jsx)(m.Text, {
                                                variant: "text-sm/normal",
                                                className: E.uL,
                                                children: I.intl.format(I.t.iQML2g, {
                                                    creatorPortalUrl:
                                                        "https://discord.com/creator-portal/learn-from-creators?tab=lightning-lessons",
                                                }),
                                            }),
                                        (0, s.jsx)("div", {
                                            className: E.QX,
                                            children: (0, s.jsx)(R, {
                                                loading: N,
                                                error: C,
                                                templates: h,
                                                selectedTemplateIndex: A,
                                                handleTapTemplate: (e) => {
                                                    S(e);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(m.Text, { variant: "text-sm/normal", children: I.intl.string(I.t.jymUTC) }),
                                (0, s.jsx)(m.Button, {
                                    onClick: () => {
                                        (y.current = "create_from_scratch"), o(), a();
                                    },
                                    variant: "secondary",
                                    icon: m.R2l,
                                    text: I.intl.string(I.t.a3ycUX),
                                }),
                            ],
                        }),
                        (0, s.jsx)(L, {
                            guildId: l,
                            templates: h,
                            selectedTemplateIndex: A,
                            priceTiers: d,
                            showPriceReselection: b,
                            setShowPriceReselection: U,
                            handleCreateTierFromTemplate: k,
                        }),
                    ],
                }),
            ],
        })
    );
}
