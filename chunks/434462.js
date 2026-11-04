a.d(s, { default: () => el });
var l = a(477900),
    t = a(582128),
    i = a(503698),
    r = a.n(i),
    n = a(613412),
    c = a(164636),
    d = a(646514),
    o = a(462887),
    m = a(935462),
    u = a(939249),
    x = a(534514),
    h = a(628284),
    j = a(289873),
    p = a(683071),
    g = a(231723),
    _ = a(789645),
    N = a(95362),
    E = a(834730),
    v = a(821609),
    T = a(22231),
    C = a(608461),
    I = a(149468),
    y = a(139286),
    b = a(413599),
    f = a(129230),
    S = a(620632),
    L = a(73153),
    A = a(652215);
async function D(e) {
    let s = (await S.Bo.get({ url: A.Rsh.GUILD_ROLE_SUBSCRIPTION_LISTING_TEMPLATES(e), rejectWithError: (0, S.fT)() }))
        .body;
    null != s.templates &&
        L.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES", templates: s.templates, guildId: e });
}
var R = a(74399),
    U = a(739455),
    k = a(317097),
    O = a(770880),
    G = a(146151),
    P = a(808107),
    w = a(597050),
    M = a(532590),
    H = a(669281),
    W = a(580630),
    $ = a(35275),
    B = a(792996),
    X = a(873586);
function z(e) {
    let { listing: s } = e,
        { name: a, image: t, description: i } = s,
        r = (0, W.$g)(s.price_tier, A.Yri.USD);
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsxs)("div", {
                className: X.l8,
                children: [
                    (0, l.jsx)("img", { src: t, alt: "", className: X.my }),
                    (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(x.D, { variant: "heading-sm/medium", className: X.KR, children: a }),
                            (0, l.jsx)(E.E, { variant: "body-md/medium", tag: "span", children: r }),
                            (0, l.jsx)(E.E, { variant: "footnote/medium", tag: "span", children: "/mo." }),
                        ],
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: X.FE,
                children: [
                    (0, l.jsx)("div", { style: { backgroundColor: (0, k.Hl)(s.role_color) }, className: X.yY }),
                    (0, l.jsx)("img", { src: t, alt: "", className: X.UT }),
                    (0, l.jsx)(E.E, { variant: "body-xs/medium", children: a }),
                ],
            }),
            (0, l.jsx)(E.E, { variant: "body-xs/normal", className: X.rj, children: i }),
        ],
    });
}
function F(e) {
    let { channel: s } = e,
        a = (function (e) {
            switch (e) {
                case A.rbe.GUILD_TEXT:
                    return O.I;
                case A.rbe.GUILD_VOICE:
                    return G.t;
                case A.rbe.GUILD_STAGE_VOICE:
                    return P.D;
                case A.rbe.GUILD_FORUM:
                    return w.Q;
                case A.rbe.GUILD_MEDIA:
                    return M.c;
                case A.rbe.GUILD_ANNOUNCEMENT:
                    return H.X;
                default:
                    return null;
            }
        })(s.type);
    return (0, l.jsxs)("div", {
        className: X.$r,
        children: [
            null != a && (0, l.jsx)(a, { className: X.WH, color: "currentColor" }),
            (0, l.jsxs)("div", {
                className: X.WA,
                children: [
                    (0, l.jsx)(E.E, { variant: "body-sm/normal", children: s.name }),
                    (0, l.jsx)(E.E, { variant: "body-xs/normal", className: X.zC, children: s.tagline }),
                ],
            }),
            (0, l.jsx)($.A, {
                className: X.__invalid_emojiIcon,
                color: d.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css,
            }),
        ],
    });
}
function Q(e) {
    let { benefit: s } = e;
    return void 0 === s
        ? null
        : (0, l.jsxs)("div", {
              className: X.Rr,
              children: [
                  (0, l.jsx)("div", { className: X.KI }),
                  (0, l.jsx)(E.E, { variant: "body-sm/normal", children: s }),
              ],
          });
}
function Y(e) {
    let { listing: s } = e;
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(x.D, { variant: "heading-xs/semibold", className: X.Ts, children: B.intl.string(B.t.CjC5XZ) }),
            (0, l.jsx)(E.E, { variant: "body-xs/semibold", className: X.hM, children: B.intl.string(B.t.rI43Wx) }),
            s.channels.map((e) => (0, l.jsx)(F, { channel: e }, e.id)),
            (0, l.jsx)(E.E, { variant: "body-xs/semibold", className: X.hM, children: B.intl.string(B.t.XqWRLj) }),
            s.additional_perks.map((e, s) => (0, l.jsx)(Q, { benefit: e.name }, s)),
        ],
    });
}
function Z(e) {
    let { selectedTemplate: s, handleSelectTemplate: a } = e;
    if (void 0 === s) return null;
    let t = s.listings[0];
    return (0, l.jsxs)("div", {
        className: X.kL,
        children: [
            (0, l.jsxs)(N.Ip, {
                className: X.Qs,
                children: [
                    (0, l.jsx)(z, { listing: t }),
                    (0, l.jsx)("div", { className: X.yF }),
                    (0, l.jsx)(Y, { listing: t }),
                ],
            }),
            (0, l.jsx)(v.$, {
                variant: "primary",
                text: B.intl.string(B.t["1W7mCt"]),
                onClick: () => {
                    a(s);
                },
            }),
        ],
    });
}
var K = a(352432);
function V(e) {
    let { price: s, selected: a, onClick: t } = e;
    return (0, l.jsxs)(u.D, {
        className: r()(K.y3, { [K.wH]: a }),
        onClick: t,
        children: [
            a
                ? (0, l.jsx)(h.y, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      secondaryColor: d.A.unsafe_rawColors.WHITE.css,
                      color: d.A.unsafe_rawColors.BRAND_500.css,
                  })
                : (0, l.jsx)("svg", {
                      width: "20",
                      height: "20",
                      children: (0, l.jsx)("circle", { cx: 10, cy: 10, r: 10, className: K.n1 }),
                  }),
            (0, l.jsxs)("div", {
                className: K.Z6,
                children: [
                    (0, l.jsx)(E.E, { variant: "body-sm/normal", tag: "span", children: (0, W.$g)(s, A.Yri.USD) }),
                    (0, l.jsx)(E.E, { variant: "footnote/medium", tag: "span", children: "/mo." }),
                ],
            }),
        ],
    });
}
function q(e) {
    let { selectedTemplate: s, handleSelectTemplate: a, newPricesToPick: i } = e,
        [r, n] = t.useState(0);
    return (0, l.jsxs)("div", {
        className: K.kL,
        children: [
            (0, l.jsxs)("div", {
                className: K.Qs,
                children: [
                    (0, l.jsx)(x.D, {
                        variant: "heading-sm/semibold",
                        children: B.intl.format(B.t["5WZ9Ct"], { tierName: s.listings[0].name }),
                    }),
                    (0, l.jsx)(E.E, {
                        variant: "body-sm/normal",
                        className: K.G3,
                        children: B.intl.format(B.t["5i7Uhb"], {
                            price: (0, W.$g)(s.listings[0].price_tier, A.Yri.USD),
                        }),
                    }),
                    i.map((e, s) => (0, l.jsx)(V, { price: e, selected: s === r, onClick: () => n(s) }, e)),
                ],
            }),
            (0, l.jsx)(v.$, {
                variant: "primary",
                text: B.intl.string(B.t["1W7mCt"]),
                onClick: function () {
                    a({ ...s, listings: [{ ...s.listings[0], price_tier: i[r] }] });
                },
            }),
        ],
    });
}
var J = a(777942);
function ee(e) {
    let { name: s, imageUrl: a, selected: t, onTap: i } = e;
    return (0, l.jsxs)(u.D, {
        onClick: i,
        className: J.rz,
        children: [
            (0, l.jsx)("img", { src: a, alt: "", className: J.ks }),
            (0, l.jsxs)("div", {
                className: J.GY,
                children: [
                    (0, l.jsx)(x.D, { variant: "heading-sm/medium", className: r()({ [J.kE]: !t }), children: s }),
                    t &&
                        (0, l.jsx)(h.y, {
                            size: "md",
                            secondaryColor: d.A.unsafe_rawColors.WHITE.css,
                            color: d.A.unsafe_rawColors.BRAND_500.css,
                        }),
                ],
            }),
        ],
    });
}
function es(e) {
    let { loading: s, error: a, templates: t, selectedTemplateIndex: i, handleTapTemplate: r } = e,
        n = (0, c.bG)([b.A], () => b.A.theme);
    return s
        ? (0, l.jsx)(j.y, {})
        : null != a
          ? (0, l.jsx)(p.w, { type: "critical", message: a.message, role: "alert" })
          : null == t || 0 === t.length
            ? null
            : (0, l.jsx)("div", {
                  className: J.PJ,
                  children: t.map((e, s) =>
                      (0, l.jsx)(
                          ee,
                          {
                              imageUrl:
                                  s === i
                                      ? e.category_image
                                      : (0, o.q)(n)
                                        ? e.unselected_light_theme_category_image
                                        : e.unselected_dark_theme_category_image,
                              name: e.category,
                              selected: s === i,
                              onTap: () => r(s),
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
            selectedTemplateIndex: i,
            priceTiers: r,
            showPriceReselection: n,
            setShowPriceReselection: c,
            handleCreateTierFromTemplate: d,
        } = e,
        o = (0, U.zu)(s, r, null != a ? a[i]?.listings[0]?.price_tier : void 0),
        m = null != o && o.length > 0,
        u = t.useCallback(
            (e) => {
                m ? c(!0) : d(e);
            },
            [d, m, c],
        );
    return null == a || 0 === a.length
        ? null
        : n && m
          ? (0, l.jsx)(q, { selectedTemplate: a[i], handleSelectTemplate: d, newPricesToPick: o })
          : (0, l.jsx)(Z, { selectedTemplate: a[i], handleSelectTemplate: u });
}
function el(e) {
    let {
            transitionState: s,
            onClose: a,
            guildId: i,
            addNewEditStateFromTemplate: r,
            addNewEditStateFromScratch: d,
            priceTiers: o,
        } = e,
        h = (0, c.bG)([R.A], () => R.A.getTemplates(i)),
        [j, { loading: p, error: b }] = (0, C.A)(D),
        S = t.useRef("voluntarily_exit");
    (t.useEffect(() => {
        (null == h || 0 === h.length) && j(i);
    }, [j, i, h]),
        t.useEffect(() => {
            s === g.ip.EXITING &&
                f.default.track(A.HAw.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, {
                    exit_reason: S.current,
                    ...(0, I.H$)(i),
                });
        }, [s, i, S]));
    let [U, k] = t.useState(0),
        [O, G] = t.useState(!1),
        P = t.useCallback(
            (e) => {
                ((S.current = "template_selected"),
                    L.h.dispatch({
                        type: "GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS",
                        selectedTemplate: e,
                        guildId: i,
                    }),
                    r(e),
                    a());
            },
            [i, r, a],
        ),
        w = t.useCallback(() => {
            O ? G(!1) : a();
        }, [O, a]);
    return (
        (0, y.A)({
            type: n.ImpressionTypes.MODAL,
            name: n.ImpressionNames.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR,
            properties: { guild_id: i },
        }),
        (0, l.jsxs)(m.EO, {
            "data-migration-pending": !0,
            transitionState: s,
            size: m.rI.DYNAMIC,
            className: J.CR,
            parentComponent: "GuildRoleSubscriptionsTierTemplateModal",
            children: [
                (0, l.jsx)(u.D, {
                    onClick: w,
                    className: J.b,
                    children: (0, l.jsx)(_.P, { size: "xxs", color: "currentColor" }),
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
                                        (0, l.jsx)(x.D, {
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
                                                loading: p,
                                                error: b,
                                                templates: h,
                                                selectedTemplateIndex: U,
                                                handleTapTemplate: function (e) {
                                                    k(e);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(E.E, { variant: "body-sm/normal", children: B.intl.string(B.t.jymUTC) }),
                                (0, l.jsx)(v.$, {
                                    onClick: function () {
                                        ((S.current = "create_from_scratch"), d(), a());
                                    },
                                    variant: "secondary",
                                    icon: T.PencilIcon,
                                    text: B.intl.string(B.t.a3ycUX),
                                }),
                            ],
                        }),
                        (0, l.jsx)(ea, {
                            guildId: i,
                            templates: h,
                            selectedTemplateIndex: U,
                            priceTiers: o,
                            showPriceReselection: O,
                            setShowPriceReselection: G,
                            handleCreateTierFromTemplate: P,
                        }),
                    ],
                }),
            ],
        })
    );
}
