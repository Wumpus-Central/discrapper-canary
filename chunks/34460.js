n.d(t, { default: () => w }), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(990547),
    c = n(399606),
    o = n(692547),
    d = n(780384),
    m = n(481060),
    x = n(935369),
    u = n(367907),
    p = n(213609),
    f = n(210887),
    _ = n(626135),
    h = n(923726),
    g = n(570849),
    j = n(853439),
    T = n(303737),
    v = n(862239),
    C = n(847004),
    N = n(981631),
    b = n(388032),
    y = n(207417);
function I(e) {
    let { name: t, imageUrl: n, selected: r, onTap: i } = e;
    return (0, a.jsxs)(m.P3F, {
        onClick: i,
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
                    (0, a.jsx)(m.Heading, {
                        variant: "heading-md/normal",
                        className: l()({ [y.unselectedTemplateName]: !r }),
                        children: t,
                    }),
                    r &&
                        (0, a.jsx)(m.owK, {
                            size: "md",
                            secondaryColor: o.Z.unsafe_rawColors.WHITE_500.css,
                            color: o.Z.unsafe_rawColors.BRAND_500.css,
                        }),
                ],
            }),
        ],
    });
}
function O(e) {
    let { loading: t, error: n, templates: r, selectedTemplateIndex: i, handleTapTemplate: l } = e,
        s = (0, c.e7)([f.Z], () => f.Z.theme);
    return t
        ? (0, a.jsx)(m.$jN, {})
        : null != n
          ? (0, a.jsx)(m.M14, {
                type: "critical",
                children: n.message,
            })
          : null == r || 0 === r.length
            ? null
            : (0, a.jsx)("div", {
                  className: y.templateCardList,
                  children: r.map((e, t) =>
                      (0, a.jsx)(
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
    var t, n;
    let {
            guildId: i,
            templates: l,
            selectedTemplateIndex: s,
            priceTiers: c,
            showPriceReselection: o,
            setShowPriceReselection: d,
            handleCreateTierFromTemplate: m,
        } = e,
        x = (0, T.g4)(
            i,
            c,
            null != l ? (null == (n = l[s]) || null == (t = n.listings[0]) ? void 0 : t.price_tier) : void 0,
        ),
        u = null != x && x.length > 0,
        p = r.useCallback(
            (e) => {
                u ? d(!0) : m(e);
            },
            [m, u, d],
        );
    return null == l || 0 === l.length
        ? null
        : o && u
          ? (0, a.jsx)(C.Z, {
                selectedTemplate: l[s],
                handleSelectTemplate: m,
                newPricesToPick: x,
            })
          : (0, a.jsx)(v.Z, {
                selectedTemplate: l[s],
                handleSelectTemplate: p,
            });
}
function w(e) {
    let {
            transitionState: t,
            onClose: n,
            guildId: i,
            addNewEditStateFromTemplate: l,
            addNewEditStateFromScratch: o,
            priceTiers: d,
        } = e,
        f = (0, c.e7)([j.Z], () => j.Z.getTemplates(i)),
        [T, { loading: v, error: C }] = (0, x.Z)(g.u),
        I = r.useRef("voluntarily_exit");
    r.useEffect(() => {
        (null == f || 0 === f.length) && T(i);
    }, [T, i, f]),
        r.useEffect(() => {
            t === m.Dvm.EXITING &&
                _.default.track(
                    N.rMx.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED,
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
                    })({ exit_reason: I.current }, (0, u.hH)(i)),
                );
        }, [t, i, I]);
    let [w, E] = r.useState(0),
        [S, B] = r.useState(!1),
        P = r.useCallback(
            (e) => {
                (I.current = "template_selected"), (0, g.l)(e, i), l(e), n();
            },
            [i, l, n],
        ),
        L = r.useCallback(() => {
            S ? B(!1) : n();
        }, [S, n]),
        k = (0, h.yi)(i);
    return (
        (0, p.Z)({
            type: s.ImpressionTypes.MODAL,
            name: s.ImpressionNames.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR,
            properties: { guild_id: i },
        }),
        (0, a.jsxs)(m.Y0X, {
            "data-migration-pending": !0,
            transitionState: t,
            size: m.CgR.DYNAMIC,
            className: y.modalRoot,
            parentComponent: "GuildRoleSubscriptionsTierTemplateModal",
            children: [
                (0, a.jsx)(m.P3F, {
                    onClick: L,
                    className: y.closeButton,
                    children: (0, a.jsx)(m.Dio, {
                        size: "xxs",
                        color: "currentColor",
                    }),
                }),
                (0, a.jsxs)(m.hzk, {
                    className: y.modalContent,
                    "data-migration-pending": !0,
                    children: [
                        (0, a.jsxs)("div", {
                            className: y.templatesContainer,
                            children: [
                                S &&
                                    (0, a.jsx)(m.P3F, {
                                        className: y.blackoutOverlay,
                                        onClick: () => {
                                            S && B(!1);
                                        },
                                        "aria-label": "overlay",
                                    }),
                                (0, a.jsxs)(m.zJl, {
                                    className: y.templatesContainerBody,
                                    children: [
                                        (0, a.jsx)(m.Heading, {
                                            variant: "heading-xl/semibold",
                                            children: b.intl.string(b.t["9QQ+i+"]),
                                        }),
                                        (0, a.jsx)(m.Text, {
                                            variant: "text-sm/normal",
                                            className: y.modalBodyText,
                                            children: b.intl.string(b.t.CvFFOv),
                                        }),
                                        k &&
                                            (0, a.jsx)(m.Text, {
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
                                                error: C,
                                                templates: f,
                                                selectedTemplateIndex: w,
                                                handleTapTemplate: (e) => {
                                                    E(e);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(m.Text, {
                                    variant: "text-sm/normal",
                                    children: b.intl.string(b.t.jymUTC),
                                }),
                                (0, a.jsx)(m.Button, {
                                    onClick: () => {
                                        (I.current = "create_from_scratch"), o(), n();
                                    },
                                    variant: "secondary",
                                    icon: m.vdY,
                                    text: b.intl.string(b.t.a3ycUX),
                                }),
                            ],
                        }),
                        (0, a.jsx)(R, {
                            guildId: i,
                            templates: f,
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
