i.d(t, { x: () => eP, A: () => eM });
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
    v = i(512950),
    j = i(834730),
    p = i(241524),
    _ = i(915089),
    f = i(164956),
    A = i(615405),
    b = i(486020),
    I = i(500345),
    N = i(599941),
    C = i(915869),
    E = i(700206),
    T = i(320137),
    S = i(881288),
    L = i(417360),
    y = i(792105),
    R = i(35275),
    k = i(939249),
    G = i(659612),
    O = i(898612),
    P = i(232492),
    D = i(740012);
function M(e) {
    let { benefit: t, guildId: i } = e,
        n = (0, P.A)(i, t.ref_id),
        s = (0, l.jsx)(G.A, { guildId: i, emojiId: t.emoji_id, emojiName: t.emoji_name }),
        r =
            null != n
                ? (0, l.jsx)(k.D, {
                      className: D.__invalid_channelLink,
                      onClick: n.navigateToChannel,
                      "aria-label": n.ariaLabel,
                      role: "link",
                      children: (0, l.jsx)(j.E, {
                          variant: "text-md/medium",
                          color: "text-strong",
                          className: a()(D.UU, D.F$),
                          children: (0, O.A)(t),
                      }),
                  })
                : (0, l.jsx)(j.E, {
                      variant: "text-md/medium",
                      color: "text-strong",
                      className: D.UU,
                      children: (0, O.A)(t),
                  });
    return (0, l.jsxs)("div", {
        className: D.kL,
        children: [
            (0, l.jsxs)("div", {
                className: D.op,
                children: [
                    r,
                    (0, l.jsx)(j.E, {
                        color: "interactive-text-default",
                        variant: "text-sm/normal",
                        children: t.description,
                    }),
                ],
            }),
            (0, l.jsx)("div", { className: D.qq, children: s }),
        ],
    });
}
var U = i(724609),
    F = i(580630),
    w = i(23339),
    V = i(319060),
    z = i(2242);
let B = (0, w.xI)(V.A.GUILD_ROLE_SUBSCRIPTION_CARD_BASIC_INFO_TIER_IMAGE_SIZE),
    Y = (0, w.xI)(V.A.GUILD_ROLE_SUBSCRIPTION_CARD_BASIC_INFO_TIER_IMAGE_SIZE_MOBILE);
function X() {
    return (0, p.A)(z.Yl) ? Y : B;
}
var K = i(375708),
    H = i(461144);
let W = (e) => {
    let { listingName: t } = e;
    return (0, l.jsx)(o.D, {
        variant: "text-md/normal",
        color: "interactive-text-active",
        className: H.KR,
        children: t,
    });
};
function $(e) {
    let { image: t } = e;
    return null == t ? null : (0, l.jsx)("img", { src: t, alt: "", className: H.ah });
}
let Z = (e) => {
    let { listingId: t, isListingPublished: i } = e,
        n = X(),
        [s] = C.tx(t),
        [a] = C.lK(t, n),
        [r] = C.A_(t);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(W, { listingName: s }),
            (0, l.jsx)($, { image: a }),
            !i && (0, l.jsx)("div", { className: H.U0, children: (0, l.jsx)(U.k, {}) }),
            (0, l.jsx)(j.E, {
                variant: "heading-xl/semibold",
                className: H.Us,
                tag: "div",
                children: (0, F.$g)(r.price, r.currency),
            }),
            (0, l.jsx)(j.E, {
                variant: "text-xs/normal",
                color: "interactive-text-default",
                className: H.gV,
                children: K.intl.format(K.t.isLGyX, {
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
        a = X(),
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
                    (0, l.jsx)(W, { listingName: r }),
                    (0, l.jsxs)("div", {
                        className: J.VS,
                        children: [
                            !i && (0, l.jsx)(U.k, {}),
                            (0, l.jsxs)(j.E, {
                                variant: "text-xs/normal",
                                className: J.Us,
                                children: [
                                    (0, F.$g)(o.price, o.currency),
                                    " ",
                                    K.intl.format(K.t.isLGyX, {
                                        period: (0, I.cV)({ interval: o.interval, interval_count: o.interval_count }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(k.D, {
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
    ev = i(937008),
    ej = i(491057),
    ep = i(652215),
    e_ = i(97352),
    ef = i(975571),
    eA = i(624456),
    eb = i(695825),
    eI = i(701273),
    eN = i(71393);
i(321073);
let eC = ["a", "b", "c", "d"],
    eE = (e) => e;
function eT(e, t) {
    let i = {},
        l = Math.min(e.length, eC.length);
    for (let n = 0; n < l; ++n) i[eC[n]] = (i, l) => t(e[n], l);
    return i;
}
class eS {
    items;
    constructor(e) {
        this.items = e;
    }
    asString() {
        return this.transformed(eE);
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
                return K.intl.format(K.t.GENERIC_FORMATTED_LIST_TWO, eT(this.items, e));
            case 3:
                return K.intl.format(K.t.GENERIC_FORMATTED_LIST_THREE, eT(this.items, e));
            default:
                return K.intl.format(K.t.GENERIC_FORMATTED_LIST_FOUR, eT(this.items, e));
        }
    }
}
var eL = i(207816);
let ey = (e) => {
    let { onClose: t, listing: i, guildId: s } = e,
        a = (0, r.bG)([eN.A], () => eN.A.getGuild(s), [s]),
        c = (function (e) {
            let { includeFlairAsBenefit: t, listing: i, guildId: l } = e,
                s = 0,
                a = 0;
            for (let e of i.role_benefits.benefits) (0, I.B1)(e) ? (s += 1) : (0, I.b1)(e) && (a += 1);
            let r = i.role_id,
                c = (0, T.A)(l).filter((e) => e.roles.includes(r)).length;
            return n.useMemo(() => {
                let e = [];
                return (
                    !0 === t && e.push(K.intl.string(K.t.EhdV2x)),
                    0 !== s && e.push(K.intl.formatToPlainString(K.t["p/l+BI"], { channelCount: s })),
                    0 !== a && e.push(K.intl.formatToPlainString(K.t.eXP5vt, { benefitCount: a })),
                    0 !== c && e.push(K.intl.formatToPlainString(K.t.YjmQwW, { emojiCount: c })),
                    new eS(e)
                );
            }, [s, a, c, t]);
        })({ listing: i, guildId: s });
    return (0, l.jsxs)("div", {
        className: eL.RP,
        children: [
            (0, l.jsx)(o.D, {
                className: eL.RS,
                variant: "heading-lg/extrabold",
                children: K.intl.format(K.t.I5dYFs, { serverName: a?.name, tierName: i.name }),
            }),
            !c.isEmpty() &&
                (0, l.jsx)(j.E, {
                    className: eL.sT,
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: K.intl.format(K.t.TnhFHv, { benefits: c.asString() }),
                }),
            (0, l.jsxs)("div", {
                className: eL.o1,
                children: [
                    (0, l.jsx)(g.$, {
                        variant: "primary",
                        text: K.intl.string(K.t.WWvswD),
                        fullWidth: !0,
                        onClick: () => (0, eI.A)("role_sub_mweb_success_modal"),
                    }),
                    (0, l.jsx)(g.$, {
                        variant: "secondary",
                        text: K.intl.string(K.t.y84Dhr),
                        fullWidth: !0,
                        onClick: () => t(!0),
                    }),
                ],
            }),
        ],
    });
};
var eR = i(354033),
    ek = i(631616);
let eG = (e) => {
        let { benefits: t, header: i, guildId: s } = e,
            [a, r] = n.useState(!1),
            c = a ? t : t.slice(0, 5),
            u = t.length > 5,
            m = t.length - 5,
            x = K.intl.formatToPlainString(K.t.XSdy72, { numTruncated: m }),
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
                                  { children: (0, l.jsx)(M, { guildId: s, benefit: e }, (0, I.nh)(e)) },
                                  t,
                              ),
                          ),
                      }),
                      u && (0, l.jsx)(eD, { isViewAll: a, onToggle: () => r((e) => !e), showMoreText: x }),
                  ],
              });
    },
    eO = (e) => {
        let { guildId: t, listingId: i } = e,
            n = (0, T.A)(t),
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
                          children: K.intl.format(K.t.NAnXEo, { count: a.length }),
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
                                          src: b.Ay.getEmojiURL({ id: e.id, animated: e.animated, size: 24 }),
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
            s = (0, S.A)(i, t),
            [r] = C.lZ(t),
            c = (0, L.A)(r),
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
                                  children: K.intl.string(K.t.FJZmYx),
                              }),
                              children: [
                                  (0, l.jsx)(d.h, { size: 8 }),
                                  (0, l.jsx)(y.A, { role: x, guildId: i, className: ek.gP }),
                              ],
                          }),
                      (0, l.jsx)(eG, { header: K.intl.string(K.t.LtfhAj), benefits: c, guildId: i }),
                      (0, l.jsx)(eG, { header: K.intl.string(K.t["8oxWpO"]), benefits: m, guildId: i }),
                      (0, l.jsx)(eO, { guildId: i, listingId: t }),
                  ],
              });
    },
    eD = (e) => {
        let { onToggle: t, isViewAll: i, showMoreText: n } = e,
            s = i ? K.intl.string(K.t["r/xxPU"]) : n;
        return (0, l.jsx)(m.Q, { text: s, onClick: t, textVariant: "text-xs/medium", variant: "secondary" });
    },
    eM = (e) => {
        let t,
            { listingId: s, guildId: o, groupListingId: d, analyticsLocation: m } = e,
            _ = (0, N.dB)(s),
            {
                openModal: b,
                canOpenModal: T,
                cannotOpenReason: S,
                isCheckingTrialEligibility: L,
            } = ((e, t, s, a) => {
                let c,
                    o = (0, r.bG)([em.A], () => em.A.isLurking(t)),
                    d = (0, eu.H)(t),
                    u = (0, r.bG)([ed.A], () => (null != t ? ed.A.getRequest(t) : null)),
                    m = u?.applicationStatus === eo.B5.SUBMITTED,
                    x = e?.subscription_plans[0],
                    h = x?.id,
                    g = e?.published === !0,
                    v = x?.sku_id,
                    j = (0, r.bG)([e_.A], () => (null != h ? e_.A.get(h) : null)),
                    { activeSubscription: _, activeSubscriptionPlanFromStore: f } = (0, E.A)(s),
                    A = null == _ || null != f,
                    b = (0, N.cY)(s, { includeSoftDeleted: !0 }).map((e) => e.subscription_plans[0].id),
                    C = (0, eA.l)(_),
                    T = null != C,
                    S = !!_?.hasActiveTrial,
                    { loading: L, getTrialPurchaseEligibility: y } = (() => {
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
                    R = (0, N.dL)(e?.id),
                    { analyticsLocations: k } = (0, er.Ay)(),
                    G = _?.isPurchasedViaAppleGeneric,
                    O = !o && null != j && A && !m && !T && !S && !G;
                m || (o && !d)
                    ? (c = K.intl.string(K.t.pQK5ho))
                    : C === h
                      ? (c = K.intl.formatToPlainString(K.t.UlBRTl, {
                            changeDate: null != _ ? en()(_.currentPeriodEnd).format("MMM DD, YYYY") : "",
                        }))
                      : T
                        ? (c = K.intl.string(K.t.ePFYOS))
                        : S
                          ? (c = K.intl.string(K.t["0lPoT2"]))
                          : G && (c = K.intl.string(K.t.cEMaCt));
                let P = (0, p.A)(z.Yl);
                n.useEffect(() => {
                    g &&
                        null != v &&
                        es.h.wait(() => {
                            (0, ea.ur)(v);
                        });
                }, [g, v]);
                let D = n.useCallback(async () => {
                        let n, s;
                        if (
                            (ei()(null != e, "No subscription listing"),
                            ei()(null != x, "No subscription plan"),
                            ei()(g, "Cannot purchase this unpublished plan"),
                            R?.active_trial != null)
                        ) {
                            let i = await y(t, e.id, R.active_trial.id);
                            i?.is_eligible === !0 ? (n = R?.active_trial?.id) : (s = K.intl.string(K.t.vuvsK5));
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
                                    trialFooterMessageOverride: m,
                                    analyticsLocation: x,
                                    analyticsSubscriptionType: h,
                                    renderHeader: g,
                                    renderPurchaseConfirmation: v,
                                    planGroup: j,
                                    reviewWarningMessage: p,
                                } = e,
                                _ = eh.oE[eh.CL.GUILD_ROLE_CHECKOUT].get();
                            if ((0, eg.Gn)())
                                return _.openCheckoutModal({
                                    skuId: c,
                                    initialPlanId: t,
                                    activeSubscription: n,
                                    onClose: s,
                                    analyticsObject: a,
                                    analyticsLocations: r,
                                    modalAPIOptions: { modalKey: "guild-role-subscription-payment-modal" },
                                    tenantParams: { listing: o, guildId: d },
                                    trialId: u,
                                    trialFooterMessageOverride: m,
                                    analyticsLocation: x,
                                    analyticsSubscriptionType: h,
                                    renderPurchaseConfirmation: v,
                                    planGroup: j,
                                    reviewWarningMessage: p,
                                });
                            (0, ex.openModalLazy)(
                                async () => {
                                    let { CheckoutRootProvider: e } = await Promise.resolve().then(i.bind(i, 197510)),
                                        { PaymentModal: o } = await Promise.resolve().then(i.bind(i, 314671)),
                                        { STEPS: d } = await Promise.all([
                                            i.e("90950"),
                                            i.e("38275"),
                                            i.e("45147"),
                                            i.e("44057"),
                                            i.e("21856"),
                                            i.e("8694"),
                                            i.e("9045"),
                                            i.e("87782"),
                                            i.e("40003"),
                                            i.e("93213"),
                                            i.e("13600"),
                                            i.e("97447"),
                                        ]).then(i.bind(i, 851386));
                                    return (i) => {
                                        let { onClose: _, ...f } = i;
                                        return (0, l.jsx)(e, {
                                            activeSubscription: n,
                                            stepConfigs: d,
                                            skuIDs: [c],
                                            unifiedCheckoutFlow: eh.CL.GUILD_ROLE_CHECKOUT,
                                            children: (0, l.jsx)(ej.Qt, {
                                                children: (0, l.jsx)(ev.dX, {
                                                    children: (0, l.jsx)(o, {
                                                        ...f,
                                                        initialPlanId: t,
                                                        onClose: (e) => {
                                                            _(), s?.(e);
                                                        },
                                                        analyticsLocations: r,
                                                        analyticsObject: a,
                                                        analyticsLocation: x,
                                                        analyticsSubscriptionType: h,
                                                        skuId: c,
                                                        renderHeader: g,
                                                        renderPurchaseConfirmation: v,
                                                        planGroup: j,
                                                        trialId: u,
                                                        trialFooterMessageOverride: m,
                                                        reviewWarningMessage: p,
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
                            trialFooterMessageOverride:
                                R?.active_trial != null
                                    ? K.intl.format(K.t.zyGyNk, {
                                          buttonText: K.intl.string(K.t.BEeXib),
                                          interval: (0, I.Gg)(x),
                                          days: 1,
                                          contactLink: ep.X7G.CONTACT,
                                          cancelSubscriptionArticle: ef.A.getArticleURL(
                                              ep.MVz.ROLE_SUBSCRIPTION_CANCEL,
                                          ),
                                          helpdeskArticle: ef.A.getArticleURL(ep.MVz.ROLE_SUBSCRIPTION_TRIAL),
                                          paidServiceTermsArticle: ef.A.getArticleURL(ep.MVz.PAID_TERMS),
                                          tierName: x.name,
                                      })
                                    : void 0,
                            analyticsLocations: k,
                            analyticsLocation: a,
                            renderHeader: (i, n, s) =>
                                (0, l.jsx)(eR.Y, { onClose: n, listing: e, step: s, guildId: t }),
                            initialPlanId: x.id,
                            skuId: x.sku_id,
                            planGroup: b,
                            renderPurchaseConfirmation: (i, n) =>
                                P
                                    ? (0, l.jsx)(ey, { listing: e, onClose: n, guildId: t })
                                    : (0, l.jsx)(eR.X, { listing: e, onClose: n, guildId: t }),
                            reviewWarningMessage: s,
                            listing: e,
                            guildId: t,
                        });
                    }, [g, e, x, _, b, t, k, a, y, R, P]),
                    M = n.useCallback(() => {
                        (0, ec.Ze)(t);
                    }, [t]);
                return { openModal: d ? M : D, canOpenModal: O, cannotOpenReason: c, isCheckingTrialEligibility: L };
            })(_, o, d, m),
            y = (0, r.bG)([A.A], () => A.A.isSyncing),
            { activeSubscription: k, activeSubscriptionListing: G } = (0, E.A)(d),
            O = G?.id === s,
            P = k?.status === ep.Dmq.CANCELED,
            [D, M] = n.useState(!1),
            [U, F] = n.useState(!1),
            w = n.useCallback((e) => {
                let t = !1;
                null != e && (t = e.scrollHeight - e.clientHeight > 1), F(t);
            }, []),
            [V] = C.tx(s),
            [B] = C.I8(s),
            [Y] = C.V_(s),
            [X] = C.hh(s),
            H =
                ((t = (0, N.dL)(s)),
                n.useMemo(
                    () =>
                        null != t &&
                        (null == t.max_num_active_trial_users ||
                            t.max_num_active_trial_users > (t.num_active_trial_users ?? 0)),
                    [t],
                )),
            W = null != Y && null == k && H,
            $ = (0, p.A)(z.Yl),
            [q, Q] = n.useState(!1),
            J = q || !$,
            et = (0, r.bG)([f.A], () => f.A.isViewingServerShop(o)),
            el = _?.published === !0,
            eI = _?.soft_deleted === !0,
            eN = K.intl.string(K.t.KzmEA9);
        return (el || et) && !eI
            ? (0, l.jsxs)("article", {
                  className: ek.kL,
                  "aria-label": V,
                  children: [
                      W &&
                          (0, l.jsxs)("div", {
                              className: a()(ek.G_, ek.rF),
                              children: [
                                  K.intl.format(K.t.L2ouip, {
                                      trialPeriodDuration: (0, I.Gg)({
                                          interval: Y.interval,
                                          interval_count: Y.interval_count,
                                      }),
                                  }),
                                  (0, l.jsx)(c.m, {
                                      text: K.intl.formatToPlainString(K.t.FYyR4o, { activeTrialUserLimit: X ?? 0 }),
                                      children: (0, l.jsx)(x.m, {
                                          size: "xs",
                                          color: "currentColor",
                                          className: ek.Xz,
                                      }),
                                  }),
                              ],
                          }),
                      (0, l.jsxs)("div", {
                          className: W ? void 0 : ek.e1,
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
                                                  O
                                                      ? (0, l.jsx)(g.$, {
                                                            disabled: !0,
                                                            fullWidth: !0,
                                                            variant: P ? "secondary" : "primary",
                                                            text: P
                                                                ? K.intl.string(K.t.iKHmu0)
                                                                : K.intl.string(K.t.XvAuMo),
                                                        })
                                                      : (0, l.jsxs)(l.Fragment, {
                                                            children: [
                                                                T
                                                                    ? null
                                                                    : (0, l.jsx)(v.p, {
                                                                          className: ek.Ht,
                                                                          messageType: v.Y.INFO,
                                                                          children: S,
                                                                      }),
                                                                (0, l.jsx)(g.$, {
                                                                    fullWidth: !0,
                                                                    text: K.intl.string(K.t.fM5ZsX),
                                                                    disabled: !T || y,
                                                                    loading: L,
                                                                    onClick: b,
                                                                    icon: R.A,
                                                                    variant: "primary",
                                                                }),
                                                            ],
                                                        }),
                                                  (0, l.jsxs)(h.B, {
                                                      gap: 8,
                                                      align: "center",
                                                      children: [
                                                          (0, l.jsx)(j.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-default",
                                                              className: a()((!U || !D) && ek.Zp),
                                                              children: (0, l.jsx)("div", { ref: w, children: B }),
                                                          }),
                                                          U &&
                                                              (0, l.jsx)(eD, {
                                                                  isViewAll: D,
                                                                  onToggle: () => M((e) => !e),
                                                                  showMoreText: eN,
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
