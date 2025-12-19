a.d(t, { default: () => w }), a(388685);
var n = a(54381),
    r = a(473749),
    i = a(120356),
    l = a.n(i),
    s = a(990547),
    c = a(399606),
    o = a(692547),
    d = a(780384),
    m = a(481060),
    f = a(935369),
    x = a(367907),
    u = a(213609),
    p = a(210887),
    h = a(626135),
    g = a(923726),
    j = a(570849),
    T = a(853439),
    v = a(303737),
    _ = a(862239),
    C = a(847004),
    N = a(981631),
    b = a(388032),
    y = a(589265);
function I(e) {
    let { name: t, imageUrl: a, selected: r, onTap: i } = e;
    return (0, n.jsxs)(m.P3F, {
        onClick: i,
        className: y.templateCard,
        children: [
            (0, n.jsx)("img", {
                src: a,
                alt: "",
                className: y.templateCardImage,
            }),
            (0, n.jsxs)("div", {
                className: y.templateNameRow,
                children: [
                    (0, n.jsx)(m.Heading, {
                        variant: "heading-md/normal",
                        className: l()({ [y.unselectedTemplateName]: !r }),
                        children: t,
                    }),
                    r &&
                        (0, n.jsx)(m.owK, {
                            size: "md",
                            secondaryColor: o.Z.unsafe_rawColors.WHITE.css,
                            color: o.Z.unsafe_rawColors.BRAND_500.css,
                        }),
                ],
            }),
        ],
    });
}
function O(e) {
    let { loading: t, error: a, templates: r, selectedTemplateIndex: i, handleTapTemplate: l } = e,
        s = (0, c.e7)([p.Z], () => p.Z.theme);
    return t
        ? (0, n.jsx)(m.$jN, {})
        : null != a
          ? (0, n.jsx)(m.M14, {
                type: "critical",
                children: a.message,
            })
          : null == r || 0 === r.length
            ? null
            : (0, n.jsx)("div", {
                  className: y.templateCardList,
                  children: r.map((e, t) =>
                      (0, n.jsx)(
                          I,
                          {
                              imageUrl:
                                  t === i
                                      ? e.category_image
                                      : (0, d.ap)(s)
                                        ? e.unselected_light_theme_category_image
                                        : e.unselected_dark_theme_category_image,
                              name: e.category,
                              selected: t === i,
                              onTap: () => l(t),
                          },
                          t,
                      ),
                  ),
              });
}
function R(e) {
    var t, a;
    let {
            guildId: i,
            templates: l,
            selectedTemplateIndex: s,
            priceTiers: c,
            showPriceReselection: o,
            setShowPriceReselection: d,
            handleCreateTierFromTemplate: m,
        } = e,
        f = (0, v.g4)(
            i,
            c,
            null != l ? (null == (a = l[s]) || null == (t = a.listings[0]) ? void 0 : t.price_tier) : void 0,
        ),
        x = null != f && f.length > 0,
        u = r.useCallback(
            (e) => {
                x ? d(!0) : m(e);
            },
            [m, x, d],
        );
    return null == l || 0 === l.length
        ? null
        : o && x
          ? (0, n.jsx)(C.Z, {
                selectedTemplate: l[s],
                handleSelectTemplate: m,
                newPricesToPick: f,
            })
          : (0, n.jsx)(_.Z, {
                selectedTemplate: l[s],
                handleSelectTemplate: u,
            });
}
function w(e) {
    let {
            transitionState: t,
            onClose: a,
            guildId: i,
            addNewEditStateFromTemplate: l,
            addNewEditStateFromScratch: o,
            priceTiers: d,
        } = e,
        p = (0, c.e7)([T.Z], () => T.Z.getTemplates(i)),
        [v, { loading: _, error: C }] = (0, f.Z)(j.u),
        I = r.useRef("voluntarily_exit");
    r.useEffect(() => {
        (null == p || 0 === p.length) && v(i);
    }, [v, i, p]),
        r.useEffect(() => {
            t === m.Dvm.EXITING &&
                h.default.track(
                    N.rMx.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(a);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(a).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(a, e).enumerable;
                                    }),
                                )),
                                n.forEach(function (t) {
                                    var n;
                                    (n = a[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = n);
                                });
                        }
                        return e;
                    })({ exit_reason: I.current }, (0, x.hH)(i)),
                );
        }, [t, i, I]);
    let [w, E] = r.useState(0),
        [S, B] = r.useState(!1),
        P = r.useCallback(
            (e) => {
                (I.current = "template_selected"), (0, j.l)(e, i), l(e), a();
            },
            [i, l, a],
        ),
        L = r.useCallback(() => {
            S ? B(!1) : a();
        }, [S, a]),
        k = (0, g.yi)(i);
    return (
        (0, u.Z)({
            type: s.ImpressionTypes.MODAL,
            name: s.ImpressionNames.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR,
            properties: { guild_id: i },
        }),
        (0, n.jsxs)(m.Y0X, {
            "data-migration-pending": !0,
            transitionState: t,
            size: m.CgR.DYNAMIC,
            className: y.modalRoot,
            parentComponent: "GuildRoleSubscriptionsTierTemplateModal",
            children: [
                (0, n.jsx)(m.P3F, {
                    onClick: L,
                    className: y.closeButton,
                    children: (0, n.jsx)(m.Dio, {
                        size: "xxs",
                        color: "currentColor",
                    }),
                }),
                (0, n.jsxs)(m.hzk, {
                    className: y.modalContent,
                    "data-migration-pending": !0,
                    children: [
                        (0, n.jsxs)("div", {
                            className: y.templatesContainer,
                            children: [
                                S &&
                                    (0, n.jsx)(m.P3F, {
                                        className: y.blackoutOverlay,
                                        onClick: () => {
                                            S && B(!1);
                                        },
                                        "aria-label": "overlay",
                                    }),
                                (0, n.jsxs)(m.zJl, {
                                    className: y.templatesContainerBody,
                                    children: [
                                        (0, n.jsx)(m.Heading, {
                                            variant: "heading-xl/semibold",
                                            children: b.intl.string(b.t["9QQ+i+"]),
                                        }),
                                        (0, n.jsx)(m.Text, {
                                            variant: "text-sm/normal",
                                            className: y.modalBodyText,
                                            children: b.intl.string(b.t.CvFFOv),
                                        }),
                                        k &&
                                            (0, n.jsx)(m.Text, {
                                                variant: "text-sm/normal",
                                                className: y.creatorPortalText,
                                                children: b.intl.format(b.t.iQML2g, {
                                                    creatorPortalUrl:
                                                        "https://discord.com/creator-portal/learn-from-creators?tab=lightning-lessons",
                                                }),
                                            }),
                                        (0, n.jsx)("div", {
                                            className: y.templatesContentContainer,
                                            children: (0, n.jsx)(O, {
                                                loading: _,
                                                error: C,
                                                templates: p,
                                                selectedTemplateIndex: w,
                                                handleTapTemplate: (e) => {
                                                    E(e);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(m.Text, {
                                    variant: "text-sm/normal",
                                    children: b.intl.string(b.t.jymUTC),
                                }),
                                (0, n.jsx)(m.Button, {
                                    onClick: () => {
                                        (I.current = "create_from_scratch"), o(), a();
                                    },
                                    variant: "secondary",
                                    icon: m.vdY,
                                    text: b.intl.string(b.t.a3ycUX),
                                }),
                            ],
                        }),
                        (0, n.jsx)(R, {
                            guildId: i,
                            templates: p,
                            selectedTemplateIndex: w,
                            priceTiers: d,
                            showPriceReselection: S,
                            setShowPriceReselection: B,
                            handleCreateTierFromTemplate: P,
                        }),
                    ],
                }),
            ],
        })
    );
}
