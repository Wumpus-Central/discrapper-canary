a.d(s, { default: () => el });
var l = a(477900),
    n = a(582128),
    t = a(503698),
    i = a.n(t),
    r = a(613412),
    c = a(164636),
    o = a(646514),
    d = a(462887),
    m = a(935462),
    u = a(939249),
    h = a(534514),
    x = a(628284),
    j = a(289873),
    g = a(683071),
    p = a(231723),
    _ = a(789645),
    N = a(95362),
    E = a(834730),
    I = a(821609),
    v = a(22231),
    C = a(608461),
    T = a(149468),
    y = a(139286),
    b = a(413599),
    L = a(129230),
    f = a(620632),
    S = a(73153),
    k = a(652215);
async function A(e) {
    let s = (await f.Bo.get({ url: k.Rsh.GUILD_ROLE_SUBSCRIPTION_LISTING_TEMPLATES(e), rejectWithError: (0, f.fT)() }))
        .body;
    null != s.templates &&
        S.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES", templates: s.templates, guildId: e });
}
var D = a(74399),
    R = a(739455),
    U = a(317097),
    O = a(770880),
    G = a(146151),
    w = a(808107),
    P = a(597050),
    M = a(532590),
    H = a(669281),
    W = a(580630),
    $ = a(35275),
    B = a(792996),
    F = a(873586);
function X(e) {
    let { listing: s } = e,
        { name: a, image: n, description: t } = s,
        i = (0, W.$g)(s.price_tier, k.Yri.USD);
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsxs)("div", {
                className: F.l8,
                children: [
                    (0, l.jsx)("img", { src: n, alt: "", className: F.my }),
                    (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(h.D, { variant: "heading-sm/medium", className: F.KR, children: a }),
                            (0, l.jsx)(E.E, { variant: "body-md/medium", tag: "span", children: i }),
                            (0, l.jsx)(E.E, { variant: "footnote/medium", tag: "span", children: "/mo." }),
                        ],
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: F.FE,
                children: [
                    (0, l.jsx)("div", { style: { backgroundColor: (0, U.Hl)(s.role_color) }, className: F.yY }),
                    (0, l.jsx)("img", { src: n, alt: "", className: F.UT }),
                    (0, l.jsx)(E.E, { variant: "body-xs/medium", children: a }),
                ],
            }),
            (0, l.jsx)(E.E, { variant: "body-xs/normal", className: F.rj, children: t }),
        ],
    });
}
function z(e) {
    let { channel: s } = e,
        a = (function (e) {
            switch (e) {
                case k.rbe.GUILD_TEXT:
                    return O.TextLockIcon;
                case k.rbe.GUILD_VOICE:
                    return G.VoiceLockIcon;
                case k.rbe.GUILD_STAGE_VOICE:
                    return w.StageLockIcon;
                case k.rbe.GUILD_FORUM:
                    return P.ForumLockIcon;
                case k.rbe.GUILD_MEDIA:
                    return M.ImageLockIcon;
                case k.rbe.GUILD_ANNOUNCEMENT:
                    return H.AnnouncementsLockIcon;
                default:
                    return null;
            }
        })(s.type);
    return (0, l.jsxs)("div", {
        className: F.$r,
        children: [
            null != a && (0, l.jsx)(a, { className: F.WH, color: "currentColor" }),
            (0, l.jsxs)("div", {
                className: F.WA,
                children: [
                    (0, l.jsx)(E.E, { variant: "body-sm/normal", children: s.name }),
                    (0, l.jsx)(E.E, { variant: "body-xs/normal", className: F.zC, children: s.tagline }),
                ],
            }),
            (0, l.jsx)($.A, {
                className: F.__invalid_emojiIcon,
                color: o.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css,
            }),
        ],
    });
}
function Q(e) {
    let { benefit: s } = e;
    return void 0 === s
        ? null
        : (0, l.jsxs)("div", {
              className: F.Rr,
              children: [
                  (0, l.jsx)("div", { className: F.KI }),
                  (0, l.jsx)(E.E, { variant: "body-sm/normal", children: s }),
              ],
          });
}
function Y(e) {
    let { listing: s } = e;
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(h.D, { variant: "heading-xs/semibold", className: F.Ts, children: B.intl.string(B.t.CjC5XZ) }),
            (0, l.jsx)(E.E, { variant: "body-xs/semibold", className: F.hM, children: B.intl.string(B.t.rI43Wx) }),
            s.channels.map((e) => (0, l.jsx)(z, { channel: e }, e.id)),
            (0, l.jsx)(E.E, { variant: "body-xs/semibold", className: F.hM, children: B.intl.string(B.t.XqWRLj) }),
            s.additional_perks.map((e, s) => (0, l.jsx)(Q, { benefit: e.name }, s)),
        ],
    });
}
function V(e) {
    let { selectedTemplate: s, handleSelectTemplate: a } = e;
    if (void 0 === s) return null;
    let n = s.listings[0];
    return (0, l.jsxs)("div", {
        className: F.kL,
        children: [
            (0, l.jsxs)(N.Ip, {
                className: F.Qs,
                children: [
                    (0, l.jsx)(X, { listing: n }),
                    (0, l.jsx)("div", { className: F.yF }),
                    (0, l.jsx)(Y, { listing: n }),
                ],
            }),
            (0, l.jsx)(I.$, {
                variant: "primary",
                text: B.intl.string(B.t["1W7mCt"]),
                onClick: () => {
                    a(s);
                },
            }),
        ],
    });
}
var Z = a(352432);
function K(e) {
    let { price: s, selected: a, onClick: n } = e;
    return (0, l.jsxs)(u.D, {
        className: i()(Z.y3, { [Z.wH]: a }),
        onClick: n,
        children: [
            a
                ? (0, l.jsx)(x.CircleCheckIcon, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      secondaryColor: o.A.unsafe_rawColors.WHITE.css,
                      color: o.A.unsafe_rawColors.BRAND_500.css,
                  })
                : (0, l.jsx)("svg", {
                      width: "20",
                      height: "20",
                      children: (0, l.jsx)("circle", { cx: 10, cy: 10, r: 10, className: Z.n1 }),
                  }),
            (0, l.jsxs)("div", {
                className: Z.Z6,
                children: [
                    (0, l.jsx)(E.E, { variant: "body-sm/normal", tag: "span", children: (0, W.$g)(s, k.Yri.USD) }),
                    (0, l.jsx)(E.E, { variant: "footnote/medium", tag: "span", children: "/mo." }),
                ],
            }),
        ],
    });
}
function q(e) {
    let { selectedTemplate: s, handleSelectTemplate: a, newPricesToPick: t } = e,
        [i, r] = n.useState(0);
    return (0, l.jsxs)("div", {
        className: Z.kL,
        children: [
            (0, l.jsxs)("div", {
                className: Z.Qs,
                children: [
                    (0, l.jsx)(h.D, {
                        variant: "heading-sm/semibold",
                        children: B.intl.format(B.t["5WZ9Ct"], { tierName: s.listings[0].name }),
                    }),
                    (0, l.jsx)(E.E, {
                        variant: "body-sm/normal",
                        className: Z.G3,
                        children: B.intl.format(B.t["5i7Uhb"], {
                            price: (0, W.$g)(s.listings[0].price_tier, k.Yri.USD),
                        }),
                    }),
                    t.map((e, s) => (0, l.jsx)(K, { price: e, selected: s === i, onClick: () => r(s) }, e)),
                ],
            }),
            (0, l.jsx)(I.$, {
                variant: "primary",
                text: B.intl.string(B.t["1W7mCt"]),
                onClick: function () {
                    a({ ...s, listings: [{ ...s.listings[0], price_tier: t[i] }] });
                },
            }),
        ],
    });
}
var J = a(777942);
function ee(e) {
    let { name: s, imageUrl: a, selected: n, onTap: t } = e;
    return (0, l.jsxs)(u.D, {
        onClick: t,
        className: J.rz,
        children: [
            (0, l.jsx)("img", { src: a, alt: "", className: J.ks }),
            (0, l.jsxs)("div", {
                className: J.GY,
                children: [
                    (0, l.jsx)(h.D, { variant: "heading-sm/medium", className: i()({ [J.kE]: !n }), children: s }),
                    n &&
                        (0, l.jsx)(x.CircleCheckIcon, {
                            size: "md",
                            secondaryColor: o.A.unsafe_rawColors.WHITE.css,
                            color: o.A.unsafe_rawColors.BRAND_500.css,
                        }),
                ],
            }),
        ],
    });
}
function es(e) {
    let { loading: s, error: a, templates: n, selectedTemplateIndex: t, handleTapTemplate: i } = e,
        r = (0, c.bG)([b.A], () => b.A.theme);
    return s
        ? (0, l.jsx)(j.y, {})
        : null != a
          ? (0, l.jsx)(g.w, { type: "critical", message: a.message, role: "alert" })
          : null == n || 0 === n.length
            ? null
            : (0, l.jsx)("div", {
                  className: J.PJ,
                  children: n.map((e, s) =>
                      (0, l.jsx)(
                          ee,
                          {
                              imageUrl:
                                  s === t
                                      ? e.category_image
                                      : (0, d.q)(r)
                                        ? e.unselected_light_theme_category_image
                                        : e.unselected_dark_theme_category_image,
                              name: e.category,
                              selected: s === t,
                              onTap: () => i(s),
                          },
                          s,
                      ),
                  ),
              });
}
function ea(e) {
    let {
            guildId: s,
            templates: a,
            selectedTemplateIndex: t,
            priceTiers: i,
            showPriceReselection: r,
            setShowPriceReselection: c,
            handleCreateTierFromTemplate: o,
        } = e,
        d = (0, R.zu)(s, i, null != a ? a[t]?.listings[0]?.price_tier : void 0),
        m = null != d && d.length > 0,
        u = n.useCallback(
            (e) => {
                m ? c(!0) : o(e);
            },
            [o, m, c],
        );
    return null == a || 0 === a.length
        ? null
        : r && m
          ? (0, l.jsx)(q, { selectedTemplate: a[t], handleSelectTemplate: o, newPricesToPick: d })
          : (0, l.jsx)(V, { selectedTemplate: a[t], handleSelectTemplate: u });
}
function el(e) {
    let {
            transitionState: s,
            onClose: a,
            guildId: t,
            addNewEditStateFromTemplate: i,
            addNewEditStateFromScratch: o,
            priceTiers: d,
        } = e,
        x = (0, c.bG)([D.A], () => D.A.getTemplates(t)),
        [j, { loading: g, error: b }] = (0, C.A)(A),
        f = n.useRef("voluntarily_exit");
    (n.useEffect(() => {
        (null == x || 0 === x.length) && j(t);
    }, [j, t, x]),
        n.useEffect(() => {
            s === p.ip.EXITING &&
                L.default.track(k.HAw.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, {
                    exit_reason: f.current,
                    ...(0, T.H$)(t),
                });
        }, [s, t, f]));
    let [R, U] = n.useState(0),
        [O, G] = n.useState(!1),
        w = n.useCallback(
            (e) => {
                ((f.current = "template_selected"),
                    S.h.dispatch({
                        type: "GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS",
                        selectedTemplate: e,
                        guildId: t,
                    }),
                    i(e),
                    a());
            },
            [t, i, a],
        ),
        P = n.useCallback(() => {
            O ? G(!1) : a();
        }, [O, a]);
    return (
        (0, y.A)({
            type: r.ImpressionTypes.MODAL,
            name: r.ImpressionNames.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR,
            properties: { guild_id: t },
        }),
        (0, l.jsxs)(m.EO, {
            "data-migration-pending": !0,
            transitionState: s,
            size: m.rI.DYNAMIC,
            className: J.CR,
            parentComponent: "GuildRoleSubscriptionsTierTemplateModal",
            children: [
                (0, l.jsx)(u.D, {
                    onClick: P,
                    className: J.b,
                    children: (0, l.jsx)(_.XSmallIcon, { size: "xxs", color: "currentColor" }),
                }),
                (0, l.jsxs)(m.$m, {
                    className: J.jE,
                    scrollbarGutter: !1,
                    "data-migration-pending": !0,
                    children: [
                        (0, l.jsxs)("div", {
                            className: J.pv,
                            children: [
                                O &&
                                    (0, l.jsx)(u.D, {
                                        className: J.wZ,
                                        onClick: () => {
                                            G(!1);
                                        },
                                        "aria-label": "overlay",
                                    }),
                                (0, l.jsxs)(N.Ip, {
                                    className: J.H2,
                                    children: [
                                        (0, l.jsx)(h.D, {
                                            variant: "heading-xl/semibold",
                                            children: B.intl.string(B.t["9QQ+i+"]),
                                        }),
                                        (0, l.jsx)(E.E, {
                                            variant: "body-sm/normal",
                                            className: J.jJ,
                                            children: B.intl.string(B.t.CvFFOv),
                                        }),
                                        (0, l.jsx)(E.E, {
                                            variant: "body-sm/normal",
                                            className: J.uL,
                                            children: B.intl.format(B.t.iQML2g, {
                                                creatorPortalUrl:
                                                    "https://discord.com/creator-portal/learn-from-creators?tab=lightning-lessons",
                                            }),
                                        }),
                                        (0, l.jsx)("div", {
                                            className: J.QX,
                                            children: (0, l.jsx)(es, {
                                                loading: g,
                                                error: b,
                                                templates: x,
                                                selectedTemplateIndex: R,
                                                handleTapTemplate: function (e) {
                                                    U(e);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(E.E, { variant: "body-sm/normal", children: B.intl.string(B.t.jymUTC) }),
                                (0, l.jsx)(I.$, {
                                    onClick: function () {
                                        ((f.current = "create_from_scratch"), o(), a());
                                    },
                                    variant: "secondary",
                                    icon: v.PencilIcon,
                                    text: B.intl.string(B.t.a3ycUX),
                                }),
                            ],
                        }),
                        (0, l.jsx)(ea, {
                            guildId: t,
                            templates: x,
                            selectedTemplateIndex: R,
                            priceTiers: d,
                            showPriceReselection: O,
                            setShowPriceReselection: G,
                            handleCreateTierFromTemplate: w,
                        }),
                    ],
                }),
            ],
        })
    );
}
