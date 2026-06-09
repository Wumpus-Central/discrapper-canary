i.d(t, { x: () => eP, A: () => eO });
var l = i(627968),
    n = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(17928),
    c = i(990078),
    o = i(534514),
    d = i(696986),
    u = i(707554),
    m = i(123292),
    x = i(885574),
    h = i(331322),
    g = i(821609),
    j = i(512950),
    v = i(834730),
    p = i(241524),
    _ = i(915089),
    f = i(164956),
    b = i(615405),
    A = i(486020),
    I = i(500345),
    N = i(599941),
    C = i(915869),
    E = i(700206),
    S = i(320137),
    T = i(881288),
    y = i(417360),
    L = i(792105),
    k = i(35275),
    D = i(939249),
    G = i(659612),
    P = i(898612),
    R = i(232492),
    O = i(740012);
function U(e) {
    let { benefit: t, guildId: i } = e,
        n = (0, R.A)(i, t.ref_id),
        s = (0, l.jsx)(G.A, { guildId: i, emojiId: t.emoji_id, emojiName: t.emoji_name }),
        r =
            null != n
                ? (0, l.jsx)(D.D, {
                      className: O.__invalid_channelLink,
                      onClick: n.navigateToChannel,
                      "aria-label": n.ariaLabel,
                      role: "link",
                      children: (0, l.jsx)(v.E, {
                          variant: "text-md/medium",
                          color: "text-strong",
                          className: a()(O.UU, O.F$),
                          children: (0, P.A)(t),
                      }),
                  })
                : (0, l.jsx)(v.E, {
                      variant: "text-md/medium",
                      color: "text-strong",
                      className: O.UU,
                      children: (0, P.A)(t),
                  });
    return (0, l.jsxs)("div", {
        className: O.kL,
        children: [
            (0, l.jsxs)("div", {
                className: O.op,
                children: [
                    r,
                    (0, l.jsx)(v.E, {
                        color: "interactive-text-default",
                        variant: "text-sm/normal",
                        children: t.description,
                    }),
                ],
            }),
            (0, l.jsx)("div", { className: O.qq, children: s }),
        ],
    });
}
var M = i(724609),
    w = i(580630),
    F = i(23339),
    V = i(319060),
    Y = i(2242);
let z = (0, F.xI)(V.A.GUILD_ROLE_SUBSCRIPTION_CARD_BASIC_INFO_TIER_IMAGE_SIZE),
    B = (0, F.xI)(V.A.GUILD_ROLE_SUBSCRIPTION_CARD_BASIC_INFO_TIER_IMAGE_SIZE_MOBILE);
function K() {
    return (0, p.A)(Y.Yl) ? B : z;
}
var H = i(375708),
    W = i(461144);
let X = (e) => {
    let { listingName: t } = e;
    return (0, l.jsx)(o.D, {
        variant: "text-md/normal",
        color: "interactive-text-active",
        className: W.KR,
        children: t,
    });
};
function $(e) {
    let { image: t } = e;
    return null == t ? null : (0, l.jsx)("img", { src: t, alt: "", className: W.ah });
}
let Z = (e) => {
    let { listingId: t, isListingPublished: i } = e,
        n = K(),
        [s] = C.tx(t),
        [a] = C.lK(t, n),
        [r] = C.A_(t);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(X, { listingName: s }),
            (0, l.jsx)($, { image: a }),
            !i && (0, l.jsx)("div", { className: W.U0, children: (0, l.jsx)(M.k, {}) }),
            (0, l.jsx)(v.E, {
                variant: "heading-xl/semibold",
                className: W.Us,
                tag: "div",
                children: (0, w.$g)(r.price, r.currency),
            }),
            (0, l.jsx)(v.E, {
                variant: "text-xs/normal",
                color: "interactive-text-default",
                className: W.gV,
                children: H.intl.format(H.t.isLGyX, {
                    period: (0, I.cV)({ interval: r.interval, interval_count: r.interval_count }),
                }),
            }),
        ],
    });
};
var q = i(900797),
    Q = i(847374),
    J = i(886782);
let ee = (e) => {
    let { listingId: t, isListingPublished: i, expanded: n, onToggleExpanded: s } = e,
        a = K(),
        [r] = C.tx(t),
        [c] = C.lK(t, a),
        [o] = C.A_(t);
    return (0, l.jsxs)("div", {
        className: J.kL,
        children: [
            (0, l.jsx)($, { image: c }),
            (0, l.jsxs)("div", {
                className: J.nj,
                children: [
                    (0, l.jsx)(X, { listingName: r }),
                    (0, l.jsxs)("div", {
                        className: J.VS,
                        children: [
                            !i && (0, l.jsx)(M.k, {}),
                            (0, l.jsxs)(v.E, {
                                variant: "text-xs/normal",
                                className: J.Us,
                                children: [
                                    (0, w.$g)(o.price, o.currency),
                                    " ",
                                    H.intl.format(H.t.isLGyX, {
                                        period: (0, I.cV)({ interval: o.interval, interval_count: o.interval_count }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(D.D, {
                onClick: s,
                children: n
                    ? (0, l.jsx)(q.t, { size: "md", color: "currentColor", className: J.Rm })
                    : (0, l.jsx)(Q.a, { size: "md", color: "currentColor", className: J.Rm }),
            }),
        ],
    });
};
var et = i(284009),
    ei = i.n(et),
    el = i(989349),
    en = i.n(el),
    es = i(228366),
    ea = i(73825),
    er = i(688810),
    ec = i(202384),
    eo = i(513461),
    ed = i(212455),
    eu = i(51758),
    em = i(857071),
    ex = i(192308),
    eh = i(95250),
    eg = i(427262),
    ej = i(937008),
    ev = i(491057),
    ep = i(652215),
    e_ = i(97352),
    ef = i(624456),
    eb = i(695825),
    eA = i(701273),
    eI = i(71393);
i(321073);
let eN = ["a", "b", "c", "d"],
    eC = (e) => e;
function eE(e, t) {
    let i = {},
        l = Math.min(e.length, eN.length);
    for (let n = 0; n < l; ++n) i[eN[n]] = (i, l) => t(e[n], l);
    return i;
}
class eS {
    items;
    constructor(e) {
        this.items = e;
    }
    asString() {
        return this.transformed(eC);
    }
    isEmpty() {
        return 0 === this.items.length;
    }
    transformed(e) {
        switch (this.items.length) {
            case 0:
                return "";
            case 1:
                return e(this.items[0], "");
            case 2:
                return H.intl.format(H.t.GENERIC_FORMATTED_LIST_TWO, eE(this.items, e));
            case 3:
                return H.intl.format(H.t.GENERIC_FORMATTED_LIST_THREE, eE(this.items, e));
            default:
                return H.intl.format(H.t.GENERIC_FORMATTED_LIST_FOUR, eE(this.items, e));
        }
    }
}
var eT = i(207816);
let ey = (e) => {
    let { onClose: t, listing: i, guildId: s } = e,
        a = (0, r.bG)([eI.A], () => eI.A.getGuild(s), [s]),
        c = (function (e) {
            let { includeFlairAsBenefit: t, listing: i, guildId: l } = e,
                s = 0,
                a = 0;
            for (let e of i.role_benefits.benefits) (0, I.B1)(e) ? (s += 1) : (0, I.b1)(e) && (a += 1);
            let r = i.role_id,
                c = (0, S.A)(l).filter((e) => e.roles.includes(r)).length;
            return n.useMemo(() => {
                let e = [];
                return (
                    !0 === t && e.push(H.intl.string(H.t.EhdV2x)),
                    0 !== s && e.push(H.intl.formatToPlainString(H.t["p/l+BI"], { channelCount: s })),
                    0 !== a && e.push(H.intl.formatToPlainString(H.t.eXP5vt, { benefitCount: a })),
                    0 !== c && e.push(H.intl.formatToPlainString(H.t.YjmQwW, { emojiCount: c })),
                    new eS(e)
                );
            }, [s, a, c, t]);
        })({ listing: i, guildId: s });
    return (0, l.jsxs)("div", {
        className: eT.RP,
        children: [
            (0, l.jsx)(o.D, {
                className: eT.RS,
                variant: "heading-lg/extrabold",
                children: H.intl.format(H.t.I5dYFs, { serverName: a?.name, tierName: i.name }),
            }),
            !c.isEmpty() &&
                (0, l.jsx)(v.E, {
                    className: eT.sT,
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: H.intl.format(H.t.TnhFHv, { benefits: c.asString() }),
                }),
            (0, l.jsxs)("div", {
                className: eT.o1,
                children: [
                    (0, l.jsx)(g.$, {
                        variant: "primary",
                        text: H.intl.string(H.t.WWvswD),
                        fullWidth: !0,
                        onClick: () => (0, eA.A)("role_sub_mweb_success_modal"),
                    }),
                    (0, l.jsx)(g.$, {
                        variant: "secondary",
                        text: H.intl.string(H.t.y84Dhr),
                        fullWidth: !0,
                        onClick: () => t(!0),
                    }),
                ],
            }),
        ],
    });
};
var eL = i(354033),
    ek = i(631616);
let eD = (e) => {
        let { benefits: t, header: i, guildId: s } = e,
            [a, r] = n.useState(!1),
            c = a ? t : t.slice(0, 5),
            u = t.length > 5,
            m = t.length - 5,
            x = H.intl.formatToPlainString(H.t.XSdy72, { numTruncated: m }),
            h = (0, _.GV)();
        return 0 === t.length
            ? null
            : (0, l.jsxs)("div", {
                  className: ek.uO,
                  children: [
                      (0, l.jsx)(o.D, {
                          variant: "text-xs/bold",
                          color: "text-default",
                          className: ek.bV,
                          id: h,
                          children: i,
                      }),
                      (0, l.jsx)(d.h, { size: 12 }),
                      (0, l.jsx)("ul", {
                          className: ek.Pp,
                          "aria-labelledby": h,
                          children: c.map((e, t) =>
                              (0, l.jsx)(
                                  "li",
                                  { children: (0, l.jsx)(U, { guildId: s, benefit: e }, (0, I.nh)(e)) },
                                  t,
                              ),
                          ),
                      }),
                      u && (0, l.jsx)(eR, { isViewAll: a, onToggle: () => r((e) => !e), showMoreText: x }),
                  ],
              });
    },
    eG = (e) => {
        let { guildId: t, listingId: i } = e,
            n = (0, S.A)(t),
            [s] = C.UN(i, t),
            a = n.filter((e) => s.has(e.id));
        return 0 === a.length
            ? null
            : (0, l.jsxs)("div", {
                  className: ek.uO,
                  children: [
                      (0, l.jsx)(o.D, {
                          variant: "text-xs/bold",
                          color: "text-default",
                          className: ek.bV,
                          children: H.intl.format(H.t.NAnXEo, { count: a.length }),
                      }),
                      (0, l.jsx)(d.h, { size: 12 }),
                      (0, l.jsx)("div", {
                          className: ek.vX,
                          children: a.map((e, t) =>
                              (0, l.jsx)(
                                  c.m,
                                  {
                                      text: e.name,
                                      "aria-label": !1,
                                      children: (0, l.jsx)("img", {
                                          className: ek.x6,
                                          src: A.Ay.getEmojiURL({ id: e.id, animated: e.animated, size: 24 }),
                                          width: 24,
                                          height: 24,
                                          alt: e.name,
                                      }),
                                  },
                                  e.id ?? t,
                              ),
                          ),
                      }),
                  ],
              });
    },
    eP = (e) => {
        let { listingId: t, guildId: i, className: n } = e,
            s = (0, T.A)(i, t),
            [r] = C.lZ(t),
            c = (0, y.A)(r),
            [m] = C.$O(t),
            x = C.It(t, i),
            [h] = C.UN(t, i);
        return null == s && 0 === c.length && 0 === m.length && 0 === h.size
            ? null
            : (0, l.jsxs)("div", {
                  className: a()(ek.bp, n),
                  children: [
                      null != s &&
                          (0, l.jsxs)(u.F, {
                              component: (0, l.jsx)(o.D, {
                                  variant: "text-xs/bold",
                                  color: "text-default",
                                  className: ek.bV,
                                  children: H.intl.string(H.t.FJZmYx),
                              }),
                              children: [
                                  (0, l.jsx)(d.h, { size: 8 }),
                                  (0, l.jsx)(L.A, { role: x, guildId: i, className: ek.gP }),
                              ],
                          }),
                      (0, l.jsx)(eD, { header: H.intl.string(H.t.LtfhAj), benefits: c, guildId: i }),
                      (0, l.jsx)(eD, { header: H.intl.string(H.t["8oxWpO"]), benefits: m, guildId: i }),
                      (0, l.jsx)(eG, { guildId: i, listingId: t }),
                  ],
              });
    },
    eR = (e) => {
        let { onToggle: t, isViewAll: i, showMoreText: n } = e,
            s = i ? H.intl.string(H.t["r/xxPU"]) : n;
        return (0, l.jsx)(m.Q, { text: s, onClick: t, textVariant: "text-xs/medium", variant: "secondary" });
    },
    eO = (e) => {
        let t,
            { listingId: s, guildId: o, groupListingId: d, analyticsLocation: m } = e,
            _ = (0, N.dB)(s),
            {
                openModal: A,
                canOpenModal: S,
                cannotOpenReason: T,
                isCheckingTrialEligibility: y,
            } = ((e, t, s, a) => {
                let c,
                    o = (0, r.bG)([em.A], () => em.A.isLurking(t)),
                    d = (0, eu.H)(t),
                    u = (0, r.bG)([ed.A], () => (null != t ? ed.A.getRequest(t) : null)),
                    m = u?.applicationStatus === eo.B5.SUBMITTED,
                    x = e?.subscription_plans[0],
                    h = x?.id,
                    g = e?.published === !0,
                    j = x?.sku_id,
                    v = (0, r.bG)([e_.A], () => (null != h ? e_.A.get(h) : null)),
                    { activeSubscription: _, activeSubscriptionPlanFromStore: f } = (0, E.A)(s),
                    b = null == _ || null != f,
                    A = (0, N.cY)(s, { includeSoftDeleted: !0 }).map((e) => e.subscription_plans[0].id),
                    I = (0, ef.l)(_),
                    C = null != I,
                    S = !!_?.hasActiveTrial,
                    { loading: T, getTrialPurchaseEligibility: y } = (() => {
                        let [e, t] = n.useState(!1),
                            [i, l] = n.useState(null);
                        return {
                            loading: e,
                            error: i,
                            getTrialPurchaseEligibility: n.useCallback(async (e, i, n) => {
                                t(!0), l(null);
                                try {
                                    return await (0, eb.KD)(e, i, n);
                                } catch (e) {
                                    l(e);
                                } finally {
                                    t(!1);
                                }
                            }, []),
                        };
                    })(),
                    L = (0, N.dL)(e?.id),
                    { analyticsLocations: k } = (0, er.Ay)(),
                    D = _?.isPurchasedViaAppleGeneric,
                    G = !o && null != v && b && !m && !C && !S && !D;
                m || (o && !d)
                    ? (c = H.intl.string(H.t.pQK5ho))
                    : I === h
                      ? (c = H.intl.formatToPlainString(H.t.UlBRTl, {
                            changeDate: null != _ ? en()(_.currentPeriodEnd).format("MMM DD, YYYY") : "",
                        }))
                      : C
                        ? (c = H.intl.string(H.t.ePFYOS))
                        : S
                          ? (c = H.intl.string(H.t["0lPoT2"]))
                          : D && (c = H.intl.string(H.t.cEMaCt));
                let P = (0, p.A)(Y.Yl);
                n.useEffect(() => {
                    g &&
                        null != j &&
                        es.h.wait(() => {
                            (0, ea.ur)(j);
                        });
                }, [g, j]);
                let R = n.useCallback(async () => {
                        let n, s;
                        if (
                            (ei()(null != e, "No subscription listing"),
                            ei()(null != x, "No subscription plan"),
                            ei()(g, "Cannot purchase this unpublished plan"),
                            L?.active_trial != null)
                        ) {
                            let i = await y(t, e.id, L.active_trial.id);
                            i?.is_eligible === !0 ? (n = L?.active_trial?.id) : (s = H.intl.string(H.t.vuvsK5));
                        }
                        !(function (e) {
                            let {
                                    initialPlanId: t,
                                    activeSubscription: n,
                                    onClose: s,
                                    analyticsObject: a,
                                    analyticsLocations: r,
                                    skuId: c,
                                    listing: o,
                                    guildId: d,
                                    trialId: u,
                                    analyticsLocation: m,
                                    analyticsSubscriptionType: x,
                                    renderHeader: h,
                                    renderPurchaseConfirmation: g,
                                    planGroup: j,
                                    reviewWarningMessage: v,
                                } = e,
                                p = eh.oE[eh.CL.GUILD_ROLE_CHECKOUT].get();
                            if ((0, eg.Gn)())
                                return p.openCheckoutModal({
                                    skuId: c,
                                    initialPlanId: t,
                                    activeSubscription: n,
                                    onClose: s,
                                    analyticsObject: a,
                                    analyticsLocations: r,
                                    modalAPIOptions: { modalKey: "guild-role-subscription-payment-modal" },
                                    tenantParams: { listing: o, guildId: d },
                                    trialId: u,
                                    analyticsLocation: m,
                                    analyticsSubscriptionType: x,
                                    renderPurchaseConfirmation: g,
                                    planGroup: j,
                                    reviewWarningMessage: v,
                                });
                            (0, ex.openModalLazy)(
                                async () => {
                                    let { CheckoutRootProvider: e } = await Promise.resolve().then(i.bind(i, 197510)),
                                        { PaymentModal: o } = await Promise.resolve().then(i.bind(i, 314671)),
                                        { STEPS: d } = await Promise.all([
                                            i.e("79309"),
                                            i.e("1428"),
                                            i.e("99496"),
                                            i.e("7339"),
                                            i.e("73341"),
                                            i.e("44057"),
                                            i.e("21856"),
                                            i.e("8694"),
                                            i.e("9045"),
                                            i.e("87782"),
                                            i.e("40003"),
                                            i.e("93213"),
                                            i.e("13600"),
                                            i.e("65150"),
                                        ]).then(i.bind(i, 477517));
                                    return (i) => {
                                        let { onClose: p, ..._ } = i;
                                        return (0, l.jsx)(e, {
                                            activeSubscription: n,
                                            stepConfigs: d,
                                            skuIDs: [c],
                                            unifiedCheckoutFlow: eh.CL.GUILD_ROLE_CHECKOUT,
                                            children: (0, l.jsx)(ev.Qt, {
                                                children: (0, l.jsx)(ej.dX, {
                                                    children: (0, l.jsx)(o, {
                                                        ..._,
                                                        initialPlanId: t,
                                                        onClose: (e) => {
                                                            p(), s?.(e);
                                                        },
                                                        analyticsLocations: r,
                                                        analyticsObject: a,
                                                        analyticsLocation: m,
                                                        analyticsSubscriptionType: x,
                                                        skuId: c,
                                                        renderHeader: h,
                                                        renderPurchaseConfirmation: g,
                                                        planGroup: j,
                                                        trialId: u,
                                                        reviewWarningMessage: v,
                                                    }),
                                                }),
                                            }),
                                        });
                                    };
                                },
                                {
                                    onCloseCallback: () => {
                                        s?.(!1);
                                    },
                                    onCloseRequest: ep.tEg,
                                },
                            );
                        })({
                            activeSubscription: _,
                            analyticsSubscriptionType: ep.rzx.GUILD,
                            trialId: n,
                            analyticsLocations: k,
                            analyticsLocation: a,
                            renderHeader: (i, n, s) =>
                                (0, l.jsx)(eL.Y, { onClose: n, listing: e, step: s, guildId: t }),
                            initialPlanId: x.id,
                            skuId: x.sku_id,
                            planGroup: A,
                            renderPurchaseConfirmation: (i, n) =>
                                P
                                    ? (0, l.jsx)(ey, { listing: e, onClose: n, guildId: t })
                                    : (0, l.jsx)(eL.X, { listing: e, onClose: n, guildId: t }),
                            reviewWarningMessage: s,
                            listing: e,
                            guildId: t,
                        });
                    }, [g, e, x, _, A, t, k, a, y, L, P]),
                    O = n.useCallback(() => {
                        (0, ec.Ze)(t);
                    }, [t]);
                return { openModal: d ? O : R, canOpenModal: G, cannotOpenReason: c, isCheckingTrialEligibility: T };
            })(_, o, d, m),
            L = (0, r.bG)([b.A], () => b.A.isSyncing),
            { activeSubscription: D, activeSubscriptionListing: G } = (0, E.A)(d),
            P = G?.id === s,
            R = D?.status === ep.Dmq.CANCELED,
            [O, U] = n.useState(!1),
            [M, w] = n.useState(!1),
            F = n.useCallback((e) => {
                let t = !1;
                null != e && (t = e.scrollHeight - e.clientHeight > 1), w(t);
            }, []),
            [V] = C.tx(s),
            [z] = C.I8(s),
            [B] = C.V_(s),
            [K] = C.hh(s),
            W =
                ((t = (0, N.dL)(s)),
                n.useMemo(
                    () =>
                        null != t &&
                        (null == t.max_num_active_trial_users ||
                            t.max_num_active_trial_users > (t.num_active_trial_users ?? 0)),
                    [t],
                )),
            X = null != B && null == D && W,
            $ = (0, p.A)(Y.Yl),
            [q, Q] = n.useState(!1),
            J = q || !$,
            et = (0, r.bG)([f.A], () => f.A.isViewingServerShop(o)),
            el = _?.published === !0,
            eA = _?.soft_deleted === !0,
            eI = H.intl.string(H.t.KzmEA9);
        return (el || et) && !eA
            ? (0, l.jsxs)("article", {
                  className: ek.kL,
                  "aria-label": V,
                  children: [
                      X &&
                          (0, l.jsxs)("div", {
                              className: a()(ek.G_, ek.rF),
                              children: [
                                  H.intl.format(H.t.L2ouip, {
                                      trialPeriodDuration: (0, I.Gg)({
                                          interval: B.interval,
                                          interval_count: B.interval_count,
                                      }),
                                  }),
                                  (0, l.jsx)(c.m, {
                                      text: H.intl.formatToPlainString(H.t.FYyR4o, { activeTrialUserLimit: K ?? 0 }),
                                      children: (0, l.jsx)(x.m, {
                                          size: "xs",
                                          color: "currentColor",
                                          className: ek.Xz,
                                      }),
                                  }),
                              ],
                          }),
                      (0, l.jsxs)("div", {
                          className: X ? void 0 : ek.e1,
                          children: [
                              (0, l.jsxs)("div", {
                                  className: ek.Og,
                                  children: [
                                      $
                                          ? (0, l.jsx)(ee, {
                                                listingId: s,
                                                isListingPublished: el,
                                                expanded: J,
                                                onToggleExpanded: () => Q((e) => !e),
                                            })
                                          : (0, l.jsx)(Z, { listingId: s, isListingPublished: el }),
                                      J &&
                                          (0, l.jsxs)(h.B, {
                                              gap: 16,
                                              children: [
                                                  $ && (0, l.jsx)("div", { className: ek.yF }),
                                                  P
                                                      ? (0, l.jsx)(g.$, {
                                                            disabled: !0,
                                                            fullWidth: !0,
                                                            variant: R ? "secondary" : "primary",
                                                            text: R
                                                                ? H.intl.string(H.t.iKHmu0)
                                                                : H.intl.string(H.t.XvAuMo),
                                                        })
                                                      : (0, l.jsxs)(l.Fragment, {
                                                            children: [
                                                                S
                                                                    ? null
                                                                    : (0, l.jsx)(j.p, {
                                                                          className: ek.Ht,
                                                                          messageType: j.Y.INFO,
                                                                          children: T,
                                                                      }),
                                                                (0, l.jsx)(g.$, {
                                                                    fullWidth: !0,
                                                                    text: H.intl.string(H.t.fM5ZsX),
                                                                    disabled: !S || L,
                                                                    loading: y,
                                                                    onClick: A,
                                                                    icon: k.A,
                                                                    variant: "primary",
                                                                }),
                                                            ],
                                                        }),
                                                  (0, l.jsxs)(h.B, {
                                                      gap: 8,
                                                      align: "center",
                                                      children: [
                                                          (0, l.jsx)(v.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-default",
                                                              className: a()((!M || !O) && ek.Zp),
                                                              children: (0, l.jsx)("div", { ref: F, children: z }),
                                                          }),
                                                          M &&
                                                              (0, l.jsx)(eR, {
                                                                  isViewAll: O,
                                                                  onToggle: () => U((e) => !e),
                                                                  showMoreText: eI,
                                                              }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                  ],
                              }),
                              J && (0, l.jsx)(u.F, { children: (0, l.jsx)(eP, { listingId: s, guildId: o }) }),
                          ],
                      }),
                  ],
              })
            : null;
    };
