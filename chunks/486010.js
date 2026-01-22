s.d(t, {
    default: () => S,
}),
    s(896048);
var r = s(627968),
    a = s(64700),
    n = s(503698),
    l = s.n(n),
    i = s(110259),
    c = s(417597),
    d = s(827734),
    o = s(582754),
    m = s(397927),
    x = s(608461),
    u = s(58149),
    j = s(139286),
    f = s(544028),
    h = s(954571),
    p = s(567305),
    b = s(336200),
    _ = s(74399),
    g = s(739455),
    T = s(752942),
    v = s(128088),
    N = s(652215),
    y = s(985018),
    C = s(904268);

function E(e) {
    let { name: t, imageUrl: s, selected: a, onTap: n } = e;
    return (0, r.jsxs)(m.DUT, {
        onClick: n,
        className: C.rz,
        children: [
            (0, r.jsx)("img", {
                src: s,
                alt: "",
                className: C.ks,
            }),
            (0, r.jsxs)("div", {
                className: C.GY,
                children: [
                    (0, r.jsx)(m.Heading, {
                        variant: "heading-md/normal",
                        className: l()({
                            [C.kE]: !a,
                        }),
                        children: t,
                    }),
                    a &&
                        (0, r.jsx)(m.yr3, {
                            size: "md",
                            secondaryColor: d.A.unsafe_rawColors.WHITE.css,
                            color: d.A.unsafe_rawColors.BRAND_500.css,
                        }),
                ],
            }),
        ],
    });
}

function O(e) {
    let { loading: t, error: s, templates: a, selectedTemplateIndex: n, handleTapTemplate: l } = e,
        i = (0, c.bG)([f.A], () => f.A.theme);
    return t
        ? (0, r.jsx)(m.y$y, {})
        : null != s
          ? (0, r.jsx)(m.wx6, {
                type: "critical",
                children: s.message,
            })
          : null == a || 0 === a.length
            ? null
            : (0, r.jsx)("div", {
                  className: C.PJ,
                  children: a.map((e, t) =>
                      (0, r.jsx)(
                          E,
                          {
                              imageUrl:
                                  t === n
                                      ? e.category_image
                                      : (0, o.qB)(i)
                                        ? e.unselected_light_theme_category_image
                                        : e.unselected_dark_theme_category_image,
                              name: e.category,
                              selected: t === n,
                              onTap: () => l(t),
                          },
                          t,
                      ),
                  ),
              });
}

function I(e) {
    var t, s;
    let {
            guildId: n,
            templates: l,
            selectedTemplateIndex: i,
            priceTiers: c,
            showPriceReselection: d,
            setShowPriceReselection: o,
            handleCreateTierFromTemplate: m,
        } = e,
        x = (0, g.zu)(
            n,
            c,
            null != l ? (null == (s = l[i]) || null == (t = s.listings[0]) ? void 0 : t.price_tier) : void 0,
        ),
        u = null != x && x.length > 0,
        j = a.useCallback(
            (e) => {
                u ? o(!0) : m(e);
            },
            [m, u, o],
        );
    return null == l || 0 === l.length
        ? null
        : d && u
          ? (0, r.jsx)(v.A, {
                selectedTemplate: l[i],
                handleSelectTemplate: m,
                newPricesToPick: x,
            })
          : (0, r.jsx)(T.A, {
                selectedTemplate: l[i],
                handleSelectTemplate: j,
            });
}

function S(e) {
    let {
            transitionState: t,
            onClose: s,
            guildId: n,
            addNewEditStateFromTemplate: l,
            addNewEditStateFromScratch: d,
            priceTiers: o,
        } = e,
        f = (0, c.bG)([_.A], () => _.A.getTemplates(n)),
        [g, { loading: T, error: v }] = (0, x.A)(b.y),
        E = a.useRef("voluntarily_exit");
    a.useEffect(() => {
        (null == f || 0 === f.length) && g(n);
    }, [g, n, f]),
        a.useEffect(() => {
            t === m.ip4.EXITING &&
                h.default.track(
                    N.HAw.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var s = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(s);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(s).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(s, e).enumerable;
                                    }),
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = s[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })(
                        {
                            exit_reason: E.current,
                        },
                        (0, u.H$)(n),
                    ),
                );
        }, [t, n, E]);
    let [S, L] = a.useState(0),
        [A, P] = a.useState(!1),
        w = a.useCallback(
            (e) => {
                (E.current = "template_selected"), (0, b.c)(e, n), l(e), s();
            },
            [n, l, s],
        ),
        U = a.useCallback(() => {
            A ? P(!1) : s();
        }, [A, s]),
        k = (0, p.Xi)(n);
    return (
        (0, j.A)({
            type: i.ImpressionTypes.MODAL,
            name: i.ImpressionNames.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR,
            properties: {
                guild_id: n,
            },
        }),
        (0, r.jsxs)(m.EOs, {
            "data-migration-pending": !0,
            transitionState: t,
            size: m.rIJ.DYNAMIC,
            className: C.CR,
            parentComponent: "GuildRoleSubscriptionsTierTemplateModal",
            children: [
                (0, r.jsx)(m.DUT, {
                    onClick: U,
                    className: C.b,
                    children: (0, r.jsx)(m.PGe, {
                        size: "xxs",
                        color: "currentColor",
                    }),
                }),
                (0, r.jsxs)(m.$mQ, {
                    className: C.jE,
                    "data-migration-pending": !0,
                    children: [
                        (0, r.jsxs)("div", {
                            className: C.pv,
                            children: [
                                A &&
                                    (0, r.jsx)(m.DUT, {
                                        className: C.wZ,
                                        onClick: () => {
                                            A && P(!1);
                                        },
                                        "aria-label": "overlay",
                                    }),
                                (0, r.jsxs)(m.IpV, {
                                    className: C.H2,
                                    children: [
                                        (0, r.jsx)(m.Heading, {
                                            variant: "heading-xl/semibold",
                                            children: y.intl.string(y.t["9QQ+i+"]),
                                        }),
                                        (0, r.jsx)(m.Text, {
                                            variant: "text-sm/normal",
                                            className: C.jJ,
                                            children: y.intl.string(y.t.CvFFOv),
                                        }),
                                        k &&
                                            (0, r.jsx)(m.Text, {
                                                variant: "text-sm/normal",
                                                className: C.uL,
                                                children: y.intl.format(y.t.iQML2g, {
                                                    creatorPortalUrl:
                                                        "https://discord.com/creator-portal/learn-from-creators?tab=lightning-lessons",
                                                }),
                                            }),
                                        (0, r.jsx)("div", {
                                            className: C.QX,
                                            children: (0, r.jsx)(O, {
                                                loading: T,
                                                error: v,
                                                templates: f,
                                                selectedTemplateIndex: S,
                                                handleTapTemplate: (e) => {
                                                    L(e);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(m.Text, {
                                    variant: "text-sm/normal",
                                    children: y.intl.string(y.t.jymUTC),
                                }),
                                (0, r.jsx)(m.Button, {
                                    onClick: () => {
                                        (E.current = "create_from_scratch"), d(), s();
                                    },
                                    variant: "secondary",
                                    icon: m.R2l,
                                    text: y.intl.string(y.t.a3ycUX),
                                }),
                            ],
                        }),
                        (0, r.jsx)(I, {
                            guildId: n,
                            templates: f,
                            selectedTemplateIndex: S,
                            priceTiers: o,
                            showPriceReselection: A,
                            setShowPriceReselection: P,
                            handleCreateTierFromTemplate: w,
                        }),
                    ],
                }),
            ],
        })
    );
}
