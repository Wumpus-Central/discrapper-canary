i.d(e, { x: () => ty, A: () => tP });
var l = i(477900),
    n = i(582128),
    s = i(503698),
    r = i.n(s),
    a = i(17928),
    c = i(297264),
    o = i(696986),
    u = i(866665),
    d = i(707554),
    m = i(123292),
    x = i(885574),
    h = i(331322),
    g = i(821609),
    f = i(512950),
    j = i(834730),
    v = i(241524),
    _ = i(915089),
    p = i(164956),
    b = i(615405),
    A = i(486020),
    N = i(500345),
    I = i(599941),
    E = i(915869),
    C = i(700206),
    S = i(320137),
    T = i(881288),
    k = i(417360),
    y = i(792105),
    L = i(35275),
    P = i(939249),
    D = i(807973),
    G = i(898612),
    R = i(232492),
    M = i(461859);
function U(t) {
    let { benefit: e, guildId: i } = t,
        n = (0, R.A)(i, e.ref_id),
        s = (0, l.jsx)(D.A, { guildId: i, emojiId: e.emoji_id, emojiName: e.emoji_name }),
        a =
            null != n
                ? (0, l.jsx)(P.D, {
                      className: M.__invalid_channelLink,
                      onClick: n.navigateToChannel,
                      "aria-label": n.ariaLabel,
                      role: "link",
                      children: (0, l.jsx)(j.E, {
                          variant: "text-md/medium",
                          color: "text-strong",
                          className: r()(M.UU, M.F$),
                          children: (0, G.A)(e),
                      }),
                  })
                : (0, l.jsx)(j.E, {
                      variant: "text-md/medium",
                      color: "text-strong",
                      className: M.UU,
                      children: (0, G.A)(e),
                  });
    return (0, l.jsxs)("div", {
        className: M.kL,
        children: [
            (0, l.jsxs)("div", {
                className: M.op,
                children: [
                    a,
                    (0, l.jsx)(j.E, {
                        color: "interactive-text-default",
                        variant: "text-sm/normal",
                        children: e.description,
                    }),
                ],
            }),
            (0, l.jsx)("div", { className: M.qq, children: s }),
        ],
    });
}
var O = i(724609),
    F = i(580630),
    w = i(23339),
    V = i(319060),
    Y = i(2242);
let B = (0, w.xI)(V.A.GUILD_ROLE_SUBSCRIPTION_CARD_BASIC_INFO_TIER_IMAGE_SIZE),
    z = (0, w.xI)(V.A.GUILD_ROLE_SUBSCRIPTION_CARD_BASIC_INFO_TIER_IMAGE_SIZE_MOBILE);
function K() {
    return (0, v.A)(Y.Yl) ? z : B;
}
var W = i(660183),
    X = i(149625);
function H(t) {
    let { listingName: e } = t;
    return (0, l.jsx)(c.D, {
        variant: "text-md/normal",
        color: "interactive-text-active",
        className: X.KR,
        children: e,
    });
}
function $(t) {
    let { image: e } = t;
    return null == e ? null : (0, l.jsx)("img", { src: e, alt: "", className: X.ah });
}
function Z(t) {
    let { listingId: e, isListingPublished: i } = t,
        n = K(),
        [s] = E.tx(e),
        [r] = E.lK(e, n),
        [a] = E.A_(e);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(H, { listingName: s }),
            (0, l.jsx)($, { image: r }),
            !i && (0, l.jsx)("div", { className: X.U0, children: (0, l.jsx)(O.k, {}) }),
            (0, l.jsx)(j.E, {
                variant: "heading-xl/semibold",
                className: X.Us,
                tag: "div",
                children: (0, F.$g)(a.price, a.currency),
            }),
            (0, l.jsx)(j.E, {
                variant: "text-xs/normal",
                color: "interactive-text-default",
                className: X.gV,
                children: W.intl.format(W.t.isLGyX, {
                    period: (0, N.cV)({ interval: a.interval, interval_count: a.interval_count }),
                }),
            }),
        ],
    });
}
var q = i(900797),
    Q = i(847374),
    J = i(422129);
function tt(t) {
    let { listingId: e, isListingPublished: i, expanded: n, onToggleExpanded: s } = t,
        r = K(),
        [a] = E.tx(e),
        [c] = E.lK(e, r),
        [o] = E.A_(e);
    return (0, l.jsxs)("div", {
        className: J.kL,
        children: [
            (0, l.jsx)($, { image: c }),
            (0, l.jsxs)("div", {
                className: J.nj,
                children: [
                    (0, l.jsx)(H, { listingName: a }),
                    (0, l.jsxs)("div", {
                        className: J.VS,
                        children: [
                            !i && (0, l.jsx)(O.k, {}),
                            (0, l.jsxs)(j.E, {
                                variant: "text-xs/normal",
                                className: J.Us,
                                children: [
                                    (0, F.$g)(o.price, o.currency),
                                    " ",
                                    W.intl.format(W.t.isLGyX, {
                                        period: (0, N.cV)({ interval: o.interval, interval_count: o.interval_count }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(P.D, {
                onClick: s,
                children: n
                    ? (0, l.jsx)(q.t, { size: "md", color: "currentColor", className: J.Rm })
                    : (0, l.jsx)(Q.a, { size: "md", color: "currentColor", className: J.Rm }),
            }),
        ],
    });
}
var te = i(284009),
    ti = i.n(te),
    tl = i(536637),
    tn = i.n(tl),
    ts = i(73825),
    tr = i(688810),
    ta = i(202384),
    tc = i(513461),
    to = i(212455),
    tu = i(51758),
    td = i(857071),
    tm = i(589078),
    tx = i(97352),
    th = i(624456),
    tg = i(695825),
    tf = i(701273),
    tj = i(71393);
i(321073);
let tv = ["a", "b", "c", "d"];
function t_(t) {
    return t;
}
function tp(t, e) {
    let i = {},
        l = Math.min(t.length, tv.length);
    for (let n = 0; n < l; ++n) i[tv[n]] = (i, l) => e(t[n], l);
    return i;
}
class tb {
    items;
    constructor(t) {
        this.items = t;
    }
    asString() {
        return this.transformed(t_);
    }
    isEmpty() {
        return 0 === this.items.length;
    }
    transformed(t) {
        switch (this.items.length) {
            case 0:
                return "";
            case 1:
                return t(this.items[0], "");
            case 2:
                return W.intl.format(W.t.GENERIC_FORMATTED_LIST_TWO, tp(this.items, t));
            case 3:
                return W.intl.format(W.t.GENERIC_FORMATTED_LIST_THREE, tp(this.items, t));
            default:
                return W.intl.format(W.t.GENERIC_FORMATTED_LIST_FOUR, tp(this.items, t));
        }
    }
}
var tA = i(738245);
function tN(t) {
    let { onClose: e, listing: i, guildId: s } = t,
        r = (0, a.bG)([tj.A], () => tj.A.getGuild(s), [s]),
        o = (function (t) {
            let { includeFlairAsBenefit: e, listing: i, guildId: l } = t,
                s = 0,
                r = 0;
            for (let t of i.role_benefits.benefits) (0, N.B1)(t) ? (s += 1) : (0, N.b1)(t) && (r += 1);
            let a = i.role_id,
                c = (0, S.A)(l).filter((t) => t.roles.includes(a)).length;
            return n.useMemo(() => {
                let t = [];
                return (
                    !0 === e && t.push(W.intl.string(W.t.EhdV2x)),
                    0 !== s && t.push(W.intl.formatToPlainString(W.t["p/l+BI"], { channelCount: s })),
                    0 !== r && t.push(W.intl.formatToPlainString(W.t.eXP5vt, { benefitCount: r })),
                    0 !== c && t.push(W.intl.formatToPlainString(W.t.YjmQwW, { emojiCount: c })),
                    new tb(t)
                );
            }, [s, r, c, e]);
        })({ listing: i, guildId: s });
    return (0, l.jsxs)("div", {
        className: tA.RP,
        children: [
            (0, l.jsx)(c.D, {
                className: tA.RS,
                variant: "heading-lg/extrabold",
                children: W.intl.format(W.t.I5dYFs, { serverName: r?.name, tierName: i.name }),
            }),
            !o.isEmpty() &&
                (0, l.jsx)(j.E, {
                    className: tA.sT,
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: W.intl.format(W.t.TnhFHv, { benefits: o.asString() }),
                }),
            (0, l.jsxs)("div", {
                className: tA.o1,
                children: [
                    (0, l.jsx)(g.$, {
                        variant: "primary",
                        text: W.intl.string(W.t.WWvswD),
                        fullWidth: !0,
                        onClick: () => (0, tf.A)("role_sub_mweb_success_modal"),
                    }),
                    (0, l.jsx)(g.$, {
                        variant: "secondary",
                        text: W.intl.string(W.t.y84Dhr),
                        fullWidth: !0,
                        onClick: () => e(!0),
                    }),
                ],
            }),
        ],
    });
}
var tI = i(354033),
    tE = i(652215);
let tC = function (t, e, i, s) {
    let r,
        c = (0, a.bG)([td.A], () => td.A.isLurking(e)),
        o = (0, tu.H)(e),
        u = (0, a.bG)([to.A], () => (null != e ? to.A.getRequest(e) : null)),
        d = u?.applicationStatus === tc.B5.SUBMITTED,
        m = t?.subscription_plans[0],
        x = m?.id,
        h = t?.published === !0,
        g = m?.sku_id,
        f = (0, a.bG)([tx.A], () => (null != x ? tx.A.get(x) : null)),
        { activeSubscription: j, activeSubscriptionPlanFromStore: _ } = (0, C.A)(i),
        p = null == j || null != _,
        b = (0, I.cY)(i, { includeSoftDeleted: !0 }).map((t) => t.subscription_plans[0].id),
        A = (0, th.l)(j),
        N = null != A,
        E = !!j?.hasActiveTrial,
        { loading: S, getTrialPurchaseEligibility: T } = (function () {
            let [t, e] = n.useState(!1),
                [i, l] = n.useState(null);
            return {
                loading: t,
                error: i,
                getTrialPurchaseEligibility: n.useCallback(async (t, i, n) => {
                    (e(!0), l(null));
                    try {
                        return await (0, tg.KD)(t, i, n);
                    } catch (t) {
                        l(t);
                    } finally {
                        e(!1);
                    }
                }, []),
            };
        })(),
        k = (0, I.dL)(t?.id),
        { analyticsLocations: y } = (0, tr.Ay)(),
        L = j?.isPurchasedViaAppleGeneric,
        P = !c && null != f && p && !d && !N && !E && !L;
    d || (c && !o)
        ? (r = W.intl.string(W.t.pQK5ho))
        : A === x
          ? (r = W.intl.formatToPlainString(W.t.UlBRTl, {
                changeDate: null != j ? tn()(j.currentPeriodEnd).format("MMM DD, YYYY") : "",
            }))
          : N
            ? (r = W.intl.string(W.t.ePFYOS))
            : E
              ? (r = W.intl.string(W.t["0lPoT2"]))
              : L && (r = W.intl.string(W.t.cEMaCt));
    let D = (0, v.A)(Y.Yl);
    n.useEffect(() => {
        h && null != g && (0, ts.ur)(g);
    }, [h, g]);
    let G = n.useCallback(async () => {
            let i, n;
            if (
                (ti()(null != t, "No subscription listing"),
                ti()(null != m, "No subscription plan"),
                ti()(h, "Cannot purchase this unpublished plan"),
                k?.active_trial != null)
            ) {
                let l = await T(e, t.id, k.active_trial.id);
                l?.is_eligible === !0 ? (i = k?.active_trial?.id) : (n = W.intl.string(W.t.vuvsK5));
            }
            !(function (t) {
                let {
                    initialPlanId: e,
                    activeSubscription: i,
                    onClose: l,
                    analyticsObject: n,
                    analyticsLocations: s,
                    skuId: r,
                    listing: a,
                    guildId: c,
                    trialId: o,
                    analyticsLocation: u,
                    analyticsSubscriptionType: d,
                    renderPurchaseConfirmation: m,
                    planGroup: x,
                    reviewWarningMessage: h,
                } = t;
                tm.UnifiedCheckoutFlowManagerSingletons[tm.CL.GUILD_ROLE_CHECKOUT]
                    .get()
                    .openCheckoutModal({
                        checkoutConfiguration: { skuId: r, activeSubscription: i },
                        unifiedCheckoutProviderProps: { analyticsLocations: s },
                        forwardedPaymentModalProps: {
                            trialId: o,
                            initialPlanId: e,
                            analyticsObject: n,
                            analyticsLocation: u,
                            analyticsSubscriptionType: d,
                            renderPurchaseConfirmation: m,
                            planGroup: x,
                            reviewWarningMessage: h,
                        },
                        checkoutHandlers: { onClose: l },
                        modalAPIOptions: { modalKey: "guild-role-subscription-payment-modal" },
                        tenantParams: { listing: a, guildId: c },
                    });
            })({
                activeSubscription: j,
                analyticsSubscriptionType: tE.rzx.GUILD,
                trialId: i,
                analyticsLocations: y,
                analyticsLocation: s,
                initialPlanId: m.id,
                skuId: m.sku_id,
                planGroup: b,
                renderPurchaseConfirmation: (i, n) =>
                    D
                        ? (0, l.jsx)(tN, { listing: t, onClose: n, guildId: e })
                        : (0, l.jsx)(tI.X, { listing: t, onClose: n, guildId: e }),
                reviewWarningMessage: n,
                listing: t,
                guildId: e,
            });
        }, [h, t, m, j, b, e, y, s, T, k, D]),
        R = n.useCallback(() => {
            (0, ta.Ze)(e);
        }, [e]);
    return { openModal: o ? R : G, canOpenModal: P, cannotOpenReason: r, isCheckingTrialEligibility: S };
};
var tS = i(998535);
function tT(t) {
    let { benefits: e, header: i, guildId: s } = t,
        [r, a] = n.useState(!1),
        u = r ? e : e.slice(0, 5),
        d = e.length > 5,
        m = e.length - 5,
        x = W.intl.formatToPlainString(W.t.XSdy72, { numTruncated: m }),
        h = (0, _.GV)();
    return 0 === e.length
        ? null
        : (0, l.jsxs)("div", {
              className: tS.uO,
              children: [
                  (0, l.jsx)(c.D, {
                      variant: "text-xs/bold",
                      color: "text-default",
                      className: tS.bV,
                      id: h,
                      children: i,
                  }),
                  (0, l.jsx)(o.h, { size: 12 }),
                  (0, l.jsx)("ul", {
                      className: tS.Pp,
                      "aria-labelledby": h,
                      children: u.map((t, e) =>
                          (0, l.jsx)("li", { children: (0, l.jsx)(U, { guildId: s, benefit: t }, (0, N.nh)(t)) }, e),
                      ),
                  }),
                  d &&
                      (0, l.jsx)(tL, {
                          isViewAll: r,
                          onToggle: function () {
                              return a((t) => !t);
                          },
                          showMoreText: x,
                      }),
              ],
          });
}
function tk(t) {
    let { guildId: e, listingId: i } = t,
        n = (0, S.A)(e),
        [s] = E.UN(i, e),
        r = n.filter((t) => s.has(t.id));
    return 0 === r.length
        ? null
        : (0, l.jsxs)("div", {
              className: tS.uO,
              children: [
                  (0, l.jsx)(c.D, {
                      variant: "text-xs/bold",
                      color: "text-default",
                      className: tS.bV,
                      children: W.intl.format(W.t.NAnXEo, { count: r.length }),
                  }),
                  (0, l.jsx)(o.h, { size: 12 }),
                  (0, l.jsx)("div", {
                      className: tS.vX,
                      children: r.map((t, e) =>
                          (0, l.jsx)(
                              u.m,
                              {
                                  text: t.name,
                                  "aria-label": !1,
                                  children: (0, l.jsx)("img", {
                                      className: tS.x6,
                                      src: A.Ay.getEmojiURL({ id: t.id, animated: t.animated, size: 24 }),
                                      width: 24,
                                      height: 24,
                                      alt: t.name,
                                  }),
                              },
                              t.id ?? e,
                          ),
                      ),
                  }),
              ],
          });
}
function ty(t) {
    let { listingId: e, guildId: i, className: n } = t,
        s = (0, T.A)(i, e),
        [a] = E.lZ(e),
        u = (0, k.A)(a),
        [m] = E.$O(e),
        x = E.It(e, i),
        [h] = E.UN(e, i);
    return null == s && 0 === u.length && 0 === m.length && 0 === h.size
        ? null
        : (0, l.jsxs)("div", {
              className: r()(tS.bp, n),
              children: [
                  null != s &&
                      (0, l.jsxs)(d.F, {
                          component: (0, l.jsx)(c.D, {
                              variant: "text-xs/bold",
                              color: "text-default",
                              className: tS.bV,
                              children: W.intl.string(W.t.FJZmYx),
                          }),
                          children: [
                              (0, l.jsx)(o.h, { size: 8 }),
                              (0, l.jsx)(y.A, { role: x, guildId: i, className: tS.gP }),
                          ],
                      }),
                  (0, l.jsx)(tT, { header: W.intl.string(W.t.LtfhAj), benefits: u, guildId: i }),
                  (0, l.jsx)(tT, { header: W.intl.string(W.t["8oxWpO"]), benefits: m, guildId: i }),
                  (0, l.jsx)(tk, { guildId: i, listingId: e }),
              ],
          });
}
function tL(t) {
    let { onToggle: e, isViewAll: i, showMoreText: n } = t,
        s = i ? W.intl.string(W.t["r/xxPU"]) : n;
    return (0, l.jsx)(m.Q, { text: s, onClick: e, textVariant: "text-xs/medium", variant: "secondary" });
}
let tP = function (t) {
    let e,
        { listingId: i, guildId: s, groupListingId: c, analyticsLocation: o } = t,
        m = (0, I.dB)(i),
        { openModal: _, canOpenModal: A, cannotOpenReason: S, isCheckingTrialEligibility: T } = tC(m, s, c, o),
        k = (0, a.bG)([b.A], () => b.A.isSyncing),
        { activeSubscription: y, activeSubscriptionListing: P } = (0, C.A)(c),
        D = P?.id === i,
        G = y?.status === tE.Dmq.CANCELED,
        [R, M] = n.useState(!1),
        [U, O] = n.useState(!1),
        F = n.useCallback((t) => {
            let e = !1;
            (null != t && (e = t.scrollHeight - t.clientHeight > 1), O(e));
        }, []),
        [w] = E.tx(i),
        [V] = E.I8(i),
        [B] = E.V_(i),
        [z] = E.hh(i),
        K =
            ((e = (0, I.dL)(i)),
            n.useMemo(
                () =>
                    null != e &&
                    (null == e.max_num_active_trial_users ||
                        e.max_num_active_trial_users > (e.num_active_trial_users ?? 0)),
                [e],
            )),
        X = null != B && null == y && K,
        H = (0, v.A)(Y.Yl),
        [$, q] = n.useState(!1),
        Q = $ || !H,
        J = (0, a.bG)([p.A], () => p.A.isViewingServerShop(s)),
        te = m?.published === !0,
        ti = m?.soft_deleted === !0,
        tl = W.intl.string(W.t.KzmEA9);
    return (te || J) && !ti
        ? (0, l.jsxs)("article", {
              className: tS.kL,
              "aria-label": w,
              children: [
                  X &&
                      (0, l.jsxs)("div", {
                          className: r()(tS.G_, tS.rF),
                          children: [
                              W.intl.format(W.t.L2ouip, {
                                  trialPeriodDuration: (0, N.Gg)({
                                      interval: B.interval,
                                      interval_count: B.interval_count,
                                  }),
                              }),
                              (0, l.jsx)(u.m, {
                                  text: W.intl.formatToPlainString(W.t.FYyR4o, { activeTrialUserLimit: z ?? 0 }),
                                  children: (0, l.jsx)(x.CircleInformationIcon, {
                                      size: "xs",
                                      color: "currentColor",
                                      className: tS.Xz,
                                  }),
                              }),
                          ],
                      }),
                  (0, l.jsxs)("div", {
                      className: X ? void 0 : tS.e1,
                      children: [
                          (0, l.jsxs)("div", {
                              className: tS.Og,
                              children: [
                                  H
                                      ? (0, l.jsx)(tt, {
                                            listingId: i,
                                            isListingPublished: te,
                                            expanded: Q,
                                            onToggleExpanded: function () {
                                                return q((t) => !t);
                                            },
                                        })
                                      : (0, l.jsx)(Z, { listingId: i, isListingPublished: te }),
                                  Q &&
                                      (0, l.jsxs)(h.B, {
                                          gap: 16,
                                          children: [
                                              H && (0, l.jsx)("div", { className: tS.yF }),
                                              D
                                                  ? (0, l.jsx)(g.$, {
                                                        disabled: !0,
                                                        fullWidth: !0,
                                                        variant: G ? "secondary" : "primary",
                                                        text: G ? W.intl.string(W.t.iKHmu0) : W.intl.string(W.t.XvAuMo),
                                                    })
                                                  : (0, l.jsxs)(l.Fragment, {
                                                        children: [
                                                            A
                                                                ? null
                                                                : (0, l.jsx)(f.p, {
                                                                      className: tS.Ht,
                                                                      messageType: f.Y.INFO,
                                                                      children: S,
                                                                  }),
                                                            (0, l.jsx)(g.$, {
                                                                fullWidth: !0,
                                                                text: W.intl.string(W.t.fM5ZsX),
                                                                disabled: !A || k,
                                                                loading: T,
                                                                onClick: _,
                                                                icon: L.A,
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
                                                          className: r()((!U || !R) && tS.Zp),
                                                          children: (0, l.jsx)("div", { ref: F, children: V }),
                                                      }),
                                                      U &&
                                                          (0, l.jsx)(tL, {
                                                              isViewAll: R,
                                                              onToggle: function () {
                                                                  return M((t) => !t);
                                                              },
                                                              showMoreText: tl,
                                                          }),
                                                  ],
                                              }),
                                          ],
                                      }),
                              ],
                          }),
                          Q && (0, l.jsx)(d.F, { children: (0, l.jsx)(ty, { listingId: i, guildId: s }) }),
                      ],
                  }),
              ],
          })
        : null;
};
