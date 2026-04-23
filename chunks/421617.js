t.d(a, { default: () => es });
var s = t(627968),
    l = t(64700),
    n = t(503698),
    r = t.n(n),
    i = t(110259),
    c = t(702841),
    o = t(661531),
    d = t(462887),
    m = t(939249),
    _ = t(534514),
    x = t(628284),
    h = t(289873),
    u = t(683071),
    p = t(231723),
    j = t(935462),
    f = t(789645),
    g = t(364522),
    N = t(834730),
    E = t(821609),
    T = t(22231),
    C = t(608461),
    v = t(58149),
    I = t(139286),
    R = t(363195),
    y = t(954571),
    L = t(636537),
    S = t(228366),
    b = t(652215);
async function A(e) {
    let a = (await L.Bo.get({ url: b.Rsh.GUILD_ROLE_SUBSCRIPTION_LISTING_TEMPLATES(e), rejectWithError: !1 })).body;
    null != a.templates &&
        S.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES", templates: a.templates, guildId: e });
}
var k = t(74399),
    D = t(739455),
    U = t(317097),
    w = t(770880),
    O = t(146151),
    G = t(808107),
    P = t(597050),
    B = t(532590),
    H = t(669281),
    M = t(580630),
    W = t(35275),
    Q = t(985018),
    $ = t(829093);
function z(e) {
    let { listing: a } = e,
        { name: t, image: l, description: n } = a,
        r = (0, M.$g)(a.price_tier, b.Yri.USD);
    return (0, s.jsxs)("div", {
        children: [
            (0, s.jsxs)("div", {
                className: $.l8,
                children: [
                    (0, s.jsx)("img", { src: l, alt: "", className: $.my }),
                    (0, s.jsxs)("div", {
                        children: [
                            (0, s.jsx)(_.D, { variant: "heading-md/medium", className: $.KR, children: t }),
                            (0, s.jsx)(N.E, { variant: "text-md/medium", tag: "span", children: r }),
                            (0, s.jsx)(N.E, { variant: "text-xxs/medium", tag: "span", children: "/mo." }),
                        ],
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: $.FE,
                children: [
                    (0, s.jsx)("div", { style: { backgroundColor: (0, U.Hl)(a.role_color) }, className: $.yY }),
                    (0, s.jsx)("img", { src: l, alt: "", className: $.UT }),
                    (0, s.jsx)(N.E, { variant: "text-xs/medium", children: t }),
                ],
            }),
            (0, s.jsx)(N.E, { variant: "text-xs/normal", className: $.rj, children: n }),
        ],
    });
}
function F(e) {
    let { channel: a } = e,
        t = (function (e) {
            switch (e) {
                case b.rbe.GUILD_TEXT:
                    return w.I;
                case b.rbe.GUILD_VOICE:
                    return O.t;
                case b.rbe.GUILD_STAGE_VOICE:
                    return G.D;
                case b.rbe.GUILD_FORUM:
                    return P.Q;
                case b.rbe.GUILD_MEDIA:
                    return B.c;
                case b.rbe.GUILD_ANNOUNCEMENT:
                    return H.X;
                default:
                    return null;
            }
        })(a.type);
    return (0, s.jsxs)("div", {
        className: $.$r,
        children: [
            null != t && (0, s.jsx)(t, { className: $.WH, color: "currentColor" }),
            (0, s.jsxs)("div", {
                className: $.WA,
                children: [
                    (0, s.jsx)(N.E, { variant: "text-sm/normal", children: a.name }),
                    (0, s.jsx)(N.E, { variant: "text-xs/normal", className: $.zC, children: a.tagline }),
                ],
            }),
            (0, s.jsx)(W.A, {
                className: $.__invalid_emojiIcon,
                color: o.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css,
            }),
        ],
    });
}
function X(e) {
    let { benefit: a } = e;
    return void 0 === a
        ? null
        : (0, s.jsxs)("div", {
              className: $.Rr,
              children: [
                  (0, s.jsx)("div", { className: $.KI }),
                  (0, s.jsx)(N.E, { variant: "text-sm/normal", children: a }),
              ],
          });
}
function Y(e) {
    let { listing: a } = e;
    return (0, s.jsxs)("div", {
        children: [
            (0, s.jsx)(_.D, { variant: "heading-sm/semibold", className: $.Ts, children: Q.intl.string(Q.t.CjC5XZ) }),
            (0, s.jsx)(N.E, { variant: "text-xs/semibold", className: $.hM, children: Q.intl.string(Q.t.rI43Wx) }),
            a.channels.map((e) => (0, s.jsx)(F, { channel: e }, e.id)),
            (0, s.jsx)(N.E, { variant: "text-xs/semibold", className: $.hM, children: Q.intl.string(Q.t.XqWRLj) }),
            a.additional_perks.map((e, a) => (0, s.jsx)(X, { benefit: e.name }, a)),
        ],
    });
}
function Z(e) {
    let { selectedTemplate: a, handleSelectTemplate: t } = e;
    if (void 0 === a) return null;
    let l = a.listings[0];
    return (0, s.jsxs)("div", {
        className: $.kL,
        children: [
            (0, s.jsxs)(g.Ip, {
                className: $.Qs,
                children: [
                    (0, s.jsx)(z, { listing: l }),
                    (0, s.jsx)("div", { className: $.yF }),
                    (0, s.jsx)(Y, { listing: l }),
                ],
            }),
            (0, s.jsx)(E.$, {
                variant: "primary",
                text: Q.intl.string(Q.t["1W7mCt"]),
                onClick: () => {
                    t(a);
                },
            }),
        ],
    });
}
var K = t(588103);
function J(e) {
    let { price: a, selected: t, onClick: l } = e;
    return (0, s.jsxs)(m.D, {
        className: r()(K.y3, { [K.wH]: t }),
        onClick: l,
        children: [
            t
                ? (0, s.jsx)(x.y, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      secondaryColor: o.A.unsafe_rawColors.WHITE.css,
                      color: o.A.unsafe_rawColors.BRAND_500.css,
                  })
                : (0, s.jsx)("svg", {
                      width: "20",
                      height: "20",
                      children: (0, s.jsx)("circle", { cx: 10, cy: 10, r: 10, className: K.n1 }),
                  }),
            (0, s.jsxs)("div", {
                className: K.Z6,
                children: [
                    (0, s.jsx)(N.E, { variant: "text-sm/normal", tag: "span", children: (0, M.$g)(a, b.Yri.USD) }),
                    (0, s.jsx)(N.E, { variant: "text-xxs/medium", tag: "span", children: "/mo." }),
                ],
            }),
        ],
    });
}
function V(e) {
    let { selectedTemplate: a, handleSelectTemplate: t, newPricesToPick: n } = e,
        [r, i] = l.useState(0);
    return (0, s.jsxs)("div", {
        className: K.kL,
        children: [
            (0, s.jsxs)("div", {
                className: K.Qs,
                children: [
                    (0, s.jsx)(_.D, {
                        variant: "heading-md/semibold",
                        children: Q.intl.format(Q.t["5WZ9Ct"], { tierName: a.listings[0].name }),
                    }),
                    (0, s.jsx)(N.E, {
                        variant: "text-sm/normal",
                        className: K.G3,
                        children: Q.intl.format(Q.t["5i7Uhb"], {
                            price: (0, M.$g)(a.listings[0].price_tier, b.Yri.USD),
                        }),
                    }),
                    n.map((e, a) => (0, s.jsx)(J, { price: e, selected: a === r, onClick: () => i(a) }, e)),
                ],
            }),
            (0, s.jsx)(E.$, {
                variant: "primary",
                text: Q.intl.string(Q.t["1W7mCt"]),
                onClick: () => {
                    t({ ...a, listings: [{ ...a.listings[0], price_tier: n[r] }] });
                },
            }),
        ],
    });
}
var q = t(821729);
function ee(e) {
    let { name: a, imageUrl: t, selected: l, onTap: n } = e;
    return (0, s.jsxs)(m.D, {
        onClick: n,
        className: q.rz,
        children: [
            (0, s.jsx)("img", { src: t, alt: "", className: q.ks }),
            (0, s.jsxs)("div", {
                className: q.GY,
                children: [
                    (0, s.jsx)(_.D, { variant: "heading-md/normal", className: r()({ [q.kE]: !l }), children: a }),
                    l &&
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
function ea(e) {
    let { loading: a, error: t, templates: l, selectedTemplateIndex: n, handleTapTemplate: r } = e,
        i = (0, c.bG)([R.A], () => R.A.theme);
    return a
        ? (0, s.jsx)(h.y, {})
        : null != t
          ? (0, s.jsx)(u.w, { type: "critical", children: t.message })
          : null == l || 0 === l.length
            ? null
            : (0, s.jsx)("div", {
                  className: q.PJ,
                  children: l.map((e, a) =>
                      (0, s.jsx)(
                          ee,
                          {
                              imageUrl:
                                  a === n
                                      ? e.category_image
                                      : (0, d.q)(i)
                                        ? e.unselected_light_theme_category_image
                                        : e.unselected_dark_theme_category_image,
                              name: e.category,
                              selected: a === n,
                              onTap: () => r(a),
                          },
                          a,
                      ),
                  ),
              });
}
function et(e) {
    let {
            guildId: a,
            templates: t,
            selectedTemplateIndex: n,
            priceTiers: r,
            showPriceReselection: i,
            setShowPriceReselection: c,
            handleCreateTierFromTemplate: o,
        } = e,
        d = (0, D.zu)(a, r, null != t ? t[n]?.listings[0]?.price_tier : void 0),
        m = null != d && d.length > 0,
        _ = l.useCallback(
            (e) => {
                m ? c(!0) : o(e);
            },
            [o, m, c],
        );
    return null == t || 0 === t.length
        ? null
        : i && m
          ? (0, s.jsx)(V, { selectedTemplate: t[n], handleSelectTemplate: o, newPricesToPick: d })
          : (0, s.jsx)(Z, { selectedTemplate: t[n], handleSelectTemplate: _ });
}
function es(e) {
    let {
            transitionState: a,
            onClose: t,
            guildId: n,
            addNewEditStateFromTemplate: r,
            addNewEditStateFromScratch: o,
            priceTiers: d,
        } = e,
        x = (0, c.bG)([k.A], () => k.A.getTemplates(n)),
        [h, { loading: u, error: R }] = (0, C.A)(A),
        L = l.useRef("voluntarily_exit");
    l.useEffect(() => {
        (null == x || 0 === x.length) && h(n);
    }, [h, n, x]),
        l.useEffect(() => {
            a === p.ip.EXITING &&
                y.default.track(b.HAw.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, {
                    exit_reason: L.current,
                    ...(0, v.H$)(n),
                });
        }, [a, n, L]);
    let [D, U] = l.useState(0),
        [w, O] = l.useState(!1),
        G = l.useCallback(
            (e) => {
                (L.current = "template_selected"),
                    S.h.dispatch({
                        type: "GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS",
                        selectedTemplate: e,
                        guildId: n,
                    }),
                    r(e),
                    t();
            },
            [n, r, t],
        ),
        P = l.useCallback(() => {
            w ? O(!1) : t();
        }, [w, t]);
    return (
        (0, I.A)({
            type: i.ImpressionTypes.MODAL,
            name: i.ImpressionNames.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR,
            properties: { guild_id: n },
        }),
        (0, s.jsxs)(j.EO, {
            "data-migration-pending": !0,
            transitionState: a,
            size: j.rI.DYNAMIC,
            className: q.CR,
            parentComponent: "GuildRoleSubscriptionsTierTemplateModal",
            children: [
                (0, s.jsx)(m.D, {
                    onClick: P,
                    className: q.b,
                    children: (0, s.jsx)(f.P, { size: "xxs", color: "currentColor" }),
                }),
                (0, s.jsxs)(j.$m, {
                    className: q.jE,
                    "data-migration-pending": !0,
                    children: [
                        (0, s.jsxs)("div", {
                            className: q.pv,
                            children: [
                                w &&
                                    (0, s.jsx)(m.D, {
                                        className: q.wZ,
                                        onClick: () => {
                                            O(!1);
                                        },
                                        "aria-label": "overlay",
                                    }),
                                (0, s.jsxs)(g.Ip, {
                                    className: q.H2,
                                    children: [
                                        (0, s.jsx)(_.D, {
                                            variant: "heading-xl/semibold",
                                            children: Q.intl.string(Q.t["9QQ+i+"]),
                                        }),
                                        (0, s.jsx)(N.E, {
                                            variant: "text-sm/normal",
                                            className: q.jJ,
                                            children: Q.intl.string(Q.t.CvFFOv),
                                        }),
                                        (0, s.jsx)(N.E, {
                                            variant: "text-sm/normal",
                                            className: q.uL,
                                            children: Q.intl.format(Q.t.iQML2g, {
                                                creatorPortalUrl:
                                                    "https://discord.com/creator-portal/learn-from-creators?tab=lightning-lessons",
                                            }),
                                        }),
                                        (0, s.jsx)("div", {
                                            className: q.QX,
                                            children: (0, s.jsx)(ea, {
                                                loading: u,
                                                error: R,
                                                templates: x,
                                                selectedTemplateIndex: D,
                                                handleTapTemplate: (e) => {
                                                    U(e);
                                                },
                                            }),
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(N.E, { variant: "text-sm/normal", children: Q.intl.string(Q.t.jymUTC) }),
                                (0, s.jsx)(E.$, {
                                    onClick: () => {
                                        (L.current = "create_from_scratch"), o(), t();
                                    },
                                    variant: "secondary",
                                    icon: T.R,
                                    text: Q.intl.string(Q.t.a3ycUX),
                                }),
                            ],
                        }),
                        (0, s.jsx)(et, {
                            guildId: n,
                            templates: x,
                            selectedTemplateIndex: D,
                            priceTiers: d,
                            showPriceReselection: w,
                            setShowPriceReselection: O,
                            handleCreateTierFromTemplate: G,
                        }),
                    ],
                }),
            ],
        })
    );
}
