n.d(t, { default: () => w }), n(388685);
var a = n(54381),
    i = n(473749),
    r = n(120356),
    l = n.n(r),
    s = n(990547),
    c = n(399606),
    o = n(780384),
    d = n(481060),
    m = n(935369),
    x = n(367907),
    p = n(213609),
    u = n(44315),
    f = n(210887),
    _ = n(626135),
    h = n(923726),
    g = n(570849),
    j = n(853439),
    T = n(303737),
    v = n(862239),
    N = n(847004),
    C = n(981631),
    b = n(388032),
    y = n(207417);
function I(e) {
    let { name: t, imageUrl: n, selected: i, onTap: r } = e;
    return (0, a.jsxs)(d.P3F, {
        onClick: r,
        className: y.templateCard,
        children: [
            (0, a.jsx)("img", {
                src: n,
                alt: "",
                className: y.templateCardImage,
            }),
            (0, a.jsxs)("div", {
                className: y.templateNameRow,
                children: [
                    (0, a.jsx)(d.Heading, {
                        variant: "heading-md/normal",
                        className: l()({ [y.unselectedTemplateName]: !i }),
                        children: t,
                    }),
                    i &&
                        (0, a.jsx)(d.owK, {
                            size: "md",
                            secondaryColor: (0, u.Lq)(C.Ilk.WHITE_500),
                            color: (0, u.Lq)(C.Ilk.BRAND_500),
                        }),
                ],
            }),
        ],
    });
}
function O(e) {
    let { loading: t, error: n, templates: i, selectedTemplateIndex: r, handleTapTemplate: l } = e,
        s = (0, c.e7)([f.Z], () => f.Z.theme);
    return t
        ? (0, a.jsx)(d.$jN, {})
        : null != n
          ? (0, a.jsx)(d.M14, {
                type: "critical",
                children: n.message,
            })
          : null == i || 0 === i.length
            ? null
            : (0, a.jsx)("div", {
                  className: y.templateCardList,
                  children: i.map((e, t) =>
                      (0, a.jsx)(
                          I,
                          {
                              imageUrl:
                                  t === r
                                      ? e.category_image
                                      : (0, o.ap)(s)
                                        ? e.unselected_light_theme_category_image
                                        : e.unselected_dark_theme_category_image,
                              name: e.category,
                              selected: t === r,
                              onTap: () => l(t),
                          },
                          t,
                      ),
                  ),
              });
}
function R(e) {
    var t, n;
    let {
            guildId: r,
            templates: l,
            selectedTemplateIndex: s,
            priceTiers: c,
            showPriceReselection: o,
            setShowPriceReselection: d,
            handleCreateTierFromTemplate: m,
        } = e,
        x = (0, T.g4)(
            r,
            c,
            null != l ? (null == (n = l[s]) || null == (t = n.listings[0]) ? void 0 : t.price_tier) : void 0,
        ),
        p = null != x && x.length > 0,
        u = i.useCallback(
            (e) => {
                p ? d(!0) : m(e);
            },
            [m, p, d],
        );
    return null == l || 0 === l.length
        ? null
        : o && p
          ? (0, a.jsx)(N.Z, {
                selectedTemplate: l[s],
                handleSelectTemplate: m,
                newPricesToPick: x,
            })
          : (0, a.jsx)(v.Z, {
                selectedTemplate: l[s],
                handleSelectTemplate: u,
            });
}
function w(e) {
    let {
            transitionState: t,
            onClose: n,
            guildId: r,
            addNewEditStateFromTemplate: l,
            addNewEditStateFromScratch: o,
            priceTiers: u,
        } = e,
        f = (0, c.e7)([j.Z], () => j.Z.getTemplates(r)),
        [T, { loading: v, error: N }] = (0, m.Z)(g.u),
        I = i.useRef("voluntarily_exit");
    i.useEffect(() => {
        (null == f || 0 === f.length) && T(r);
    }, [T, r, f]),
        i.useEffect(() => {
            t === d.Dvm.EXITING &&
                _.default.track(
                    C.rMx.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED,
                    (function (e) {
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
                    })({ exit_reason: I.current }, (0, x.hH)(r)),
                );
        }, [t, r, I]);
    let [w, E] = i.useState(0),
        [S, B] = i.useState(!1),
        L = i.useCallback(
            (e) => {
                (I.current = "template_selected"), (0, g.l)(e, r), l(e), n();
            },
            [r, l, n],
        ),
        P = i.useCallback(() => {
            S ? B(!1) : n();
        }, [S, n]),
        k = (0, h.yi)(r);
    return (
        (0, p.Z)({
            type: s.ImpressionTypes.MODAL,
            name: s.ImpressionNames.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR,
            properties: { guild_id: r },
        }),
        (0, a.jsxs)(d.Y0X, {
            "data-migration-pending": !0,
            transitionState: t,
            size: d.CgR.DYNAMIC,
            className: y.modalRoot,
            parentComponent: "GuildRoleSubscriptionsTierTemplateModal",
            children: [
                (0, a.jsx)(d.P3F, {
                    onClick: P,
                    className: y.closeButton,
                    children: (0, a.jsx)(d.Dio, {
                        size: "xxs",
                        color: "currentColor",
                    }),
                }),
                (0, a.jsxs)(d.hzk, {
                    className: y.modalContent,
                    "data-migration-pending": !0,
                    children: [
                        (0, a.jsxs)("div", {
                            className: y.templatesContainer,
                            children: [
                                S &&
                                    (0, a.jsx)(d.P3F, {
                                        className: y.blackoutOverlay,
                                        onClick: () => {
                                            S && B(!1);
                                        },
                                        "aria-label": "overlay",
                                    }),
                                (0, a.jsxs)(d.zJl, {
                                    className: y.templatesContainerBody,
                                    children: [
                                        (0, a.jsx)(d.Heading, {
                                            variant: "heading-xl/semibold",
                                            children: b.intl.string(b.t["9QQ+i+"]),
                                        }),
                                        (0, a.jsx)(d.Text, {
                                            variant: "text-sm/normal",
                                            className: y.modalBodyText,
                                            children: b.intl.string(b.t.CvFFOv),
                                        }),
                                        k &&
                                            (0, a.jsx)(d.Text, {
                                                variant: "text-sm/normal",
                                                className: y.creatorPortalText,
                                                children: b.intl.format(b.t.iQML2g, {
                                                    creatorPortalUrl:
                                                        "https://discord.com/creator-portal/learn-from-creators?tab=lightning-lessons",
                                                }),
                                            }),
                                        (0, a.jsx)("div", {
                                            className: y.templatesContentContainer,
                                            children: (0, a.jsx)(O, {
                                                loading: v,
                                                error: N,
                                                templates: f,
                                                selectedTemplateIndex: w,
                                                handleTapTemplate: (e) => {
                                                    E(e);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(d.Text, {
                                    variant: "text-sm/normal",
                                    children: b.intl.string(b.t.jymUTC),
                                }),
                                (0, a.jsx)(d.Button, {
                                    onClick: () => {
                                        (I.current = "create_from_scratch"), o(), n();
                                    },
                                    variant: "secondary",
                                    icon: d.vdY,
                                    text: b.intl.string(b.t.a3ycUX),
                                }),
                            ],
                        }),
                        (0, a.jsx)(R, {
                            guildId: r,
                            templates: f,
                            selectedTemplateIndex: w,
                            priceTiers: u,
                            showPriceReselection: S,
                            setShowPriceReselection: B,
                            handleCreateTierFromTemplate: L,
                        }),
                    ],
                }),
            ],
        })
    );
}
