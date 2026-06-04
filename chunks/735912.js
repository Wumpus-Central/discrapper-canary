i.d(t, { Ay: () => e7, Sb: () => e4, TC: () => e2, Hy: () => e6 });
var n = i(627968),
    s = i(64700),
    l = i(503698),
    r = i.n(l),
    a = i(989349),
    o = i.n(a),
    u = i(17928),
    d = i(661531),
    c = i(695366),
    g = i(834730),
    m = i(534514),
    A = i(359778),
    h = i(289873),
    E = i(270003),
    S = i(452027),
    T = i(228366),
    x = i(964486),
    p = i(793574),
    f = i(688810),
    N = i(531260),
    _ = i(235986),
    I = i(137177),
    C = i(532794),
    b = i(832946),
    v = i(287809),
    y = i(174459),
    j = i(975571),
    O = i(428262),
    R = i(83617),
    L = i(543767),
    D = i(526292),
    P = i(155984),
    G = i(131168),
    M = i(331322),
    U = i(508770),
    V = i(192308),
    k = i(315629),
    w = i(821609),
    F = i(158032),
    B = i(580630),
    z = i(427262),
    Y = i(795269),
    X = i(59784),
    H = i(233317),
    K = i(622017),
    W = i(113090),
    Z = i(778712),
    q = i(97808),
    Q = i(123292),
    J = i(950305),
    $ = i(854627),
    ee = i(466919),
    et = i(375708),
    ei = i(339446);
let en = (e) => {
        let { user: t, isOwnUser: i, label: l, removeButton: a, isFaded: o } = e,
            { avatarSrc: u, eventHandlers: d } = (0, $.A)({ userId: t?.id, size: Z._3.SIZE_24 }),
            c = (0, z.$3)(t),
            [m, A] = s.useState(!1);
        return (0, n.jsxs)("div", {
            className: r()(ei.kL, { [ei.RE]: null != a }),
            onMouseEnter: () => A(!0),
            onMouseLeave: () => A(!1),
            children: [
                (0, n.jsxs)("div", {
                    className: r()(ei.TT, { [ei.zj]: o }),
                    children: [
                        (0, n.jsx)(q.eu, { className: ei.my, src: u, "aria-label": c, size: Z._3.SIZE_24, ...d }),
                        (0, n.jsxs)(g.E, {
                            className: ei.Xh,
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: [c, !!i && ` (${et.intl.string(et.t.LuZzxn)})`],
                        }),
                        null != l &&
                            (0, n.jsxs)(g.E, {
                                className: ei.Pf,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: [(0, n.jsx)("span", { className: ei.me, children: "\xb7" }), l],
                            }),
                    ],
                }),
                null != a &&
                    m &&
                    (0, n.jsx)("div", {
                        className: ei.dM,
                        children: (0, n.jsx)(Q.Q, {
                            textVariant: "text-sm/medium",
                            variant: "secondary",
                            text: a.label,
                            onClick: a.onRemove,
                        }),
                    }),
            ],
        });
    },
    es = (e) => {
        let { user: t, isOwnUser: i } = e;
        return (0, n.jsx)(en, { user: t, isOwnUser: i, label: et.intl.string(ee.default.vc2xys) });
    },
    el = (e) => {
        let { user: t, onRemove: i } = e;
        return (0, n.jsx)(en, {
            user: t,
            label: et.intl.string(ee.default.mnt50A),
            removeButton: { onRemove: i, label: et.intl.string(et.t.N86XcP) },
        });
    },
    er = (e) => {
        let { user: t, isOwnUser: i } = e;
        return (0, n.jsx)(en, { user: t, isOwnUser: i, label: et.intl.string(ee.default.mnt50A) });
    },
    ea = (e) => {
        let { user: t, onRemove: i } = e;
        return (0, n.jsx)(en, {
            user: t,
            label: et.intl.string(ee.default["1RH5t9"]),
            isFaded: !0,
            removeButton: { onRemove: i, label: et.intl.string(ee.default["2blqtw"]) },
        });
    },
    eo = (e) => {
        let { onInvite: t, canInvite: i } = e,
            [l, a] = s.useState(!1);
        return (0, n.jsxs)("div", {
            className: r()(ei.kL, { [ei.RE]: i }),
            onMouseEnter: () => a(!0),
            onMouseLeave: () => a(!1),
            children: [
                (0, n.jsxs)("div", {
                    className: ei.TT,
                    children: [
                        (0, n.jsx)("div", {
                            className: r()(ei.vG, ei.my),
                            children: (0, n.jsx)(J.n, { size: "xxs", color: d.A.colors.ICON_SUBTLE }),
                        }),
                        (0, n.jsx)(g.E, {
                            className: ei.Xh,
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: et.intl.string(ee.default["/x7DVG"]),
                        }),
                    ],
                }),
                l &&
                    i &&
                    (0, n.jsx)("div", {
                        className: ei.dM,
                        children: (0, n.jsx)(Q.Q, {
                            textVariant: "text-sm/medium",
                            variant: "secondary",
                            text: et.intl.string(ee.default.O15JWp),
                            onClick: t,
                        }),
                    }),
            ],
        });
    };
var eu = i(788868),
    ed = i(88001),
    ec = i(652215),
    eg = i(666240);
let em = (e) => {
        let { discountApplied: t = !1 } = e;
        return (0, n.jsxs)(M.B, {
            direction: "horizontal",
            align: "center",
            justify: "space-between",
            gap: 10,
            padding: { top: 12, bottom: 12 },
            className: eg.wx,
            children: [
                (0, n.jsxs)(M.B, {
                    direction: "horizontal",
                    align: "center",
                    gap: 10,
                    children: [
                        (0, n.jsx)(m.D, { variant: "display-md", className: eg.Nd, children: (0, ed.DP)() }),
                        (0, n.jsx)(U.E, { type: "beta", variant: "expressive" }),
                    ],
                }),
                t && (0, n.jsx)(Y.R, { text: et.intl.string(et.t.EyjDRE) }),
            ],
        });
    },
    eA = (e) => {
        let { title: t, discountDescription: i, description: s, button: l } = e;
        return (0, n.jsxs)("div", {
            className: eg.bh,
            children: [
                (0, n.jsxs)(M.B, {
                    direction: "vertical",
                    gap: 8,
                    className: eg.iQ,
                    children: [
                        (0, n.jsx)(m.D, { variant: "heading-xl/semibold", children: t }),
                        null != i
                            ? (0, n.jsx)(g.E, {
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  className: eg.eY,
                                  children: i,
                              })
                            : null,
                        (0, n.jsx)(g.E, { variant: "text-sm/medium", color: "text-muted", children: s }),
                    ],
                }),
                (0, n.jsx)("div", { className: eg.UD, children: l }),
            ],
        });
    },
    eh = (e) => {
        let { currentUser: t } = e,
            { premiumGroupMembership: s, isLoading: l } = (0, W.A)(),
            { premiumGroupMembers: r, isLoading: a } = (0, K.A)(s?.subscriptionId ?? null);
        if (a || null == r || l || null == s) return (0, n.jsx)(h.y, {});
        let o = s.subscriptionId,
            u = s.currentPeriodEnd,
            { primary: d, members: c } = r,
            { title: g, description: A } = (() => {
                switch (s.subscriptionStatus) {
                    case ec.Dmq.CANCELED:
                        return {
                            title: et.intl.string(ee.default.mCwdPj),
                            description: et.intl.format(ee.default.wH9NYG, { endDate: u }),
                        };
                    case ec.Dmq.PAUSED:
                        return {
                            title: et.intl.string(ee.default.IDyd1e),
                            description: et.intl.format(ee.default["8MfYhr"], {
                                premiumGroupProductName: (0, ed.DP)(),
                                helpCenterLink: ed.TE,
                            }),
                        };
                    case ec.Dmq.PAST_DUE:
                    case ec.Dmq.ACCOUNT_HOLD:
                    case ec.Dmq.BILLING_RETRY:
                        return {
                            title: et.intl.string(ee.default.Duq8zp),
                            description: et.intl.format(ee.default["MHn/D6"], {
                                endDate: u,
                                premiumGroupProductName: (0, ed.DP)(),
                            }),
                        };
                    default:
                        return {
                            title: et.intl.formatToPlainString(ee.default.xiUjMF, {
                                premiumGroupProductName: (0, ed.DP)(),
                            }),
                            description: et.intl.format(ee.default["2HEyqG"], {
                                primaryName: (0, z.$3)(d),
                                premiumGroupProductName: (0, ed.DP)(),
                                helpCenterLink: ed.TE,
                            }),
                        };
                }
            })();
        return (0, n.jsxs)(k.h, {
            className: eg.kL,
            color: "nitro-pink",
            children: [
                (0, n.jsx)(em, {}),
                (0, n.jsxs)("div", {
                    className: eg.wS,
                    children: [
                        (0, n.jsx)(eA, {
                            title: g,
                            description: A,
                            button: (0, n.jsx)(w.$, {
                                variant: "secondary",
                                text: et.intl.string(ee.default.NCu2JD),
                                onClick: () => {
                                    (0, V.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([
                                            i.e("96"),
                                            i.e("9045"),
                                            i.e("92796"),
                                        ]).then(i.bind(i, 205463));
                                        return (i) =>
                                            (0, n.jsx)(e, { ...i, premiumGroupSubscriptionId: o, currentUser: t });
                                    });
                                },
                            }),
                        }),
                        (0, n.jsxs)(M.B, {
                            direction: "vertical",
                            padding: { left: 32, bottom: 12 },
                            gap: 0,
                            children: [
                                (0, n.jsx)(m.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-strong",
                                    className: eg.Or,
                                    children: et.intl.string(ee.default["oqw/KW"]),
                                }),
                                (0, n.jsx)(es, { user: d, isOwnUser: !1 }),
                                c.map((e) => (0, n.jsx)(er, { user: e, isOwnUser: e.id === t?.id }, e.id)),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    eE = (e) => {
        let {
            premiumGroupMembers: t,
            isLoadingPremiumGroupMembers: i,
            canInvite: s,
            onInvite: l,
            onRemoveMember: r,
            onRemoveInvitedUser: a,
            numTotalSeats: o,
            numUsedSeats: u,
            numAvailableInvites: d,
        } = e;
        if (i || null == t) return (0, n.jsx)(h.y, {});
        let { primary: c, members: A, invitedUsers: E } = t;
        return (0, n.jsxs)(M.B, {
            direction: "vertical",
            padding: { left: 32, bottom: 12 },
            gap: 0,
            children: [
                (0, n.jsxs)(M.B, {
                    direction: "vertical",
                    gap: 4,
                    padding: { top: 12, left: 4, right: 4, bottom: 10 },
                    children: [
                        (0, n.jsx)(m.D, {
                            variant: "heading-sm/medium",
                            color: "text-strong",
                            children: et.intl.string(ee.default["oqw/KW"]),
                        }),
                        (0, n.jsx)(g.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: et.intl.format(ee.default["/a/UoP"], { usedSeats: u, totalSeats: o }),
                        }),
                    ],
                }),
                (0, n.jsx)(es, { user: c, isOwnUser: !0 }),
                A.map((e) => (0, n.jsx)(el, { user: e, onRemove: () => r(e) }, e.id)),
                E.map((e) => (0, n.jsx)(ea, { user: e, onRemove: () => a(e) }, e.id)),
                Array.from({ length: d }).map((e, t) =>
                    (0, n.jsx)(eo, { onInvite: l, canInvite: s }, `seat-available-${t}`),
                ),
            ],
        });
    },
    eS = (e) => {
        let { subscription: t, analyticsLocations: l } = e,
            { premiumGroupMembers: r, isLoading: a } = (0, K.A)(t.id),
            {
                numAvailableInvites: o,
                numTotalSeats: d,
                numUsedSeats: c,
            } = (0, u.cf)([H.A], () => ({
                numAvailableInvites: H.A.getNumAvailableInvites(),
                numTotalSeats: H.A.getNumTotalSeats(),
                numUsedSeats: H.A.getNumUsedSeats(),
            })),
            [g, m] = s.useState(!1),
            { status: A } = t,
            h = (0, D.nf)(),
            E = (0, D.k5)() && h?.discountId === eu.xH,
            S = s.useCallback(() => {
                (0, V.openModalLazy)(async () => {
                    let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                        i.e("96"),
                        i.e("9045"),
                        i.e("84820"),
                        i.e("94161"),
                        i.e("13051"),
                        i.e("80347"),
                        i.e("80166"),
                    ]).then(i.bind(i, 293061));
                    return (i) => (0, n.jsx)(e, { ...i, premiumSubscription: t, analyticsLocations: l });
                });
            }, [t, l]),
            T = s.useCallback(async () => {
                m(!0), await (0, F.Ir)(t, l), m(!1);
            }, [t, l]),
            x = () => {
                y.default.track(ec.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_INVITE_CLICKED, { subscription_id: t.id }),
                    (0, V.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            i.e("89156"),
                            i.e("44616"),
                            i.e("96680"),
                            i.e("85579"),
                        ]).then(i.bind(i, 785606));
                        return (i) => (0, n.jsx)(e, { ...i, subscription: t });
                    });
            },
            p = s.useMemo(() => !ed.BE.includes(t.status) && o > 0, [t.status, o]),
            {
                title: f,
                description: N,
                discountDescription: _,
            } = (() => {
                switch (A) {
                    case ec.Dmq.CANCELED:
                        return {
                            title: et.intl.string(ee.default.KME8Q6),
                            description: et.intl.format(ee.default["1sNA+Y"], {
                                endDate: t.currentPeriodEnd,
                                premiumGroupProductName: (0, ed.DP)(),
                            }),
                        };
                    case ec.Dmq.PAUSED:
                        return {
                            title: et.intl.string(ee.default["4flKoC"]),
                            description: et.intl.format(ee.default["Q++BmO"], {
                                premiumGroupProductName: (0, ed.DP)(),
                            }),
                        };
                    case ec.Dmq.PAST_DUE:
                    case ec.Dmq.ACCOUNT_HOLD:
                    case ec.Dmq.BILLING_RETRY:
                        return {
                            title: et.intl.string(ee.default.cfeFEt),
                            description: et.intl.format(ee.default["5+LPUW"], {
                                endDate: t.currentPeriodEnd,
                                helpCenterLink: ed.TE,
                            }),
                        };
                    default: {
                        let e = null;
                        if (E && t.metadata?.active_discount_expires_at != null) {
                            let i = (0, O.y8)(eu.gD.PREMIUM_GROUP_MONTH, !1, !1, {
                                currency: t.currency,
                                paymentSourceId: t.paymentSourceId ?? void 0,
                            });
                            e = et.intl.format(ee.default.t3TzwQ, {
                                percent: h?.percentage ?? 0,
                                discountEndDate: new Date(t.metadata.active_discount_expires_at),
                                regularPrice: (0, B.$g)(i.amount, i.currency),
                            });
                        }
                        return {
                            title: et.intl.formatToPlainString(ee.default.NRCfnQ, {
                                premiumGroupProductName: (0, ed.DP)(),
                            }),
                            description: et.intl.format(ee.default.lvnrnb, {
                                totalSeats: ed.LM,
                                premiumGroupProductName: (0, ed.DP)(),
                                helpCenterLink: ed.TE,
                            }),
                            ...(null != e ? { discountDescription: e } : null),
                        };
                    }
                }
            })();
        return (0, n.jsxs)(k.h, {
            className: eg.kL,
            color: "nitro-pink",
            children: [
                (0, n.jsx)(em, { discountApplied: E }),
                (0, n.jsxs)("div", {
                    className: eg.wS,
                    children: [
                        (0, n.jsx)(eA, {
                            title: f,
                            description: N,
                            discountDescription: _,
                            button: (0, O.ki)(t)
                                ? (0, n.jsx)(w.$, {
                                      variant: "expressive",
                                      size: "md",
                                      text: et.intl.string(ee.default.EFTJMQ),
                                      onClick: T,
                                      loading: g,
                                  })
                                : (0, n.jsxs)(M.B, {
                                      direction: "vertical",
                                      gap: 12,
                                      children: [
                                          (0, n.jsx)(w.$, {
                                              variant: "primary",
                                              size: "md",
                                              fullWidth: !0,
                                              text: et.intl.string(ee.default.Tcmclj),
                                              onClick: x,
                                              disabled: !p,
                                          }),
                                          (0, n.jsx)(w.$, {
                                              variant: "secondary",
                                              size: "md",
                                              fullWidth: !0,
                                              text: et.intl.string(ee.default.oO0EYw),
                                              onClick: S,
                                          }),
                                      ],
                                  }),
                        }),
                        (0, n.jsx)(eE, {
                            premiumGroupMembers: r,
                            isLoadingPremiumGroupMembers: a,
                            canInvite: p,
                            onInvite: x,
                            onRemoveMember: (e) => {
                                y.default.track(ec.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_REMOVE_MEMBER_CLICKED, {
                                    subscription_id: t.id,
                                    member_user_id: e.id,
                                }),
                                    (0, V.openModalLazy)(async () => {
                                        let { default: s } = await i.e("21305").then(i.bind(i, 391040));
                                        return (i) => (0, n.jsx)(s, { ...i, subscriptionId: t.id, member: e });
                                    });
                            },
                            onRemoveInvitedUser: (e) => {
                                y.default.track(ec.HAw.PREMIUM_GROUP_SUBSCRIPTION_CARD_CANCEL_INVITE_CLICKED, {
                                    subscription_id: t.id,
                                    invited_user_id: e.id,
                                });
                                let s = X.A.getInviteByUserId(e.id)?.invite;
                                (0, V.openModalLazy)(async () => {
                                    let { default: l } = await i.e("15554").then(i.bind(i, 115225));
                                    return (i) =>
                                        (0, n.jsx)(l, {
                                            ...i,
                                            subscriptionId: t.id,
                                            invitedUser: e,
                                            subscriptionGroupMemberId: s?.id,
                                        });
                                });
                            },
                            numTotalSeats: d,
                            numUsedSeats: c,
                            numAvailableInvites: o,
                        }),
                    ],
                }),
            ],
        });
    };
var eT = i(97352),
    ex = i(990078),
    ep = i(403581);
function ef(e) {
    let { color: t = "white", className: i } = e;
    return (0, n.jsx)("svg", {
        width: "90",
        height: "17",
        viewBox: "0 0 90 17",
        className: i,
        fill: t,
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, n.jsx)("path", {
            d: "M23.6251 0.426116H30.5799L27.1822 16.4055H20.2274L23.6251 0.426116ZM15.5289 0.426116L13.9893 7.77662L10.0075 0.426116H3.39317L0 16.4055H6.34428L7.88389 9.10824L11.8391 16.4055H18.4754L21.8732 0.426116H15.5289ZM67.8758 5.75257C67.8758 8.62885 65.7787 10.6263 62.8322 11.079L65.8849 16.4055H58.1603L55.6916 11.079L54.5502 16.4055H47.5953L50.94 0.426116H61.6112C65.646 0.426116 67.8758 2.74312 67.8758 5.75257ZM60.6821 6.71133C60.6821 5.69931 59.9388 5.0335 58.8239 5.0335H56.9658L56.249 8.4158H58.8239C59.9388 8.4158 60.6821 7.72336 60.6821 6.71133ZM49.4004 0.426116H32.1196L30.9781 5.7792H36.1279L33.8715 16.4055H40.8263L43.1092 5.7792H48.259L49.4004 0.426116ZM89.0322 7.61683C89.0322 13.2629 83.7763 16.8316 78.016 16.8316C71.9372 16.8316 68.6191 13.1297 68.6191 9.10824C68.6191 3.24914 73.6095 0 79.6087 0C85.6079 0 89.0322 3.27577 89.0322 7.61683ZM82.0243 8.06958C82.0243 6.36511 81.0687 5.14003 79.1044 5.14003C76.9808 5.14003 75.5473 6.79123 75.5473 8.78865C75.5473 10.573 76.6888 11.7182 78.4407 11.7182C80.5909 11.7182 82.0243 9.9871 82.0243 8.06958Z",
            fill: t,
        }),
    });
}
var eN = i(410516),
    e_ = i(811611),
    eI = i(473702),
    eC = i(657127),
    eb = i(398932);
let ev = { page: ec.liQ.USER_SETTINGS, section: ec.JJy.SETTINGS_PREMIUM, object: ec.ZSU.CARD };
function ey(e) {
    let { premiumSubscription: t, discountInfo: i, invoicePreview: s, isDiscountActive: l } = e,
        r = O.Ay.getPlanIdFromInvoice(t, s),
        a = eT.A.get(r);
    if (null == a || null == s || null == i || null == i.duration || null == i.percentage) return null;
    let o = s.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return t === a.id;
    });
    if (null == o) return null;
    let u = (0, B.$g)(o.amount, s.currency),
        d = (0, O.y8)(eu.gD.PREMIUM_MONTH_TIER_2, !1, !1, { currency: t.currency, paymentSourceId: t.paymentSourceId }),
        c = (0, B.$g)(d.amount, d.currency);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(m.D, {
                variant: "heading-xl/medium",
                color: "text-strong",
                children: et.intl.format(et.t["50bA2I"], { percent: i.percentage }),
            }),
            (0, n.jsx)(g.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: l
                    ? et.intl.format(et.t["3ZiutU"], { percent: i.percentage, numMonths: i.duration, regularPrice: c })
                    : et.intl.format(et.t.N43FMx, {
                          numMonths: i.duration,
                          discountedPrice: u,
                          billingPeriod: et.intl.string(et.t.FPybU7),
                          fullPrice: c,
                      }),
            }),
        ],
    });
}
function ej(e) {
    let { discountOffer: t, premiumSubscription: i } = e,
        s = (0, eN.tQ)(i, eu.gD.PREMIUM_MONTH_TIER_2, t);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(m.D, {
                variant: "heading-xl/medium",
                color: "text-strong",
                children: et.intl.format(et.t.sFO20P, { percent: t.discount.amount }),
            }),
            (0, n.jsx)(g.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: et.intl.format(et.t["PH7Q+R"], {
                    numMonths: t.discount.userUsageLimit,
                    discountedPrice: s,
                    billingPeriod: (0, O.Ke)(t.discount.userUsageLimitInterval),
                }),
            }),
        ],
    });
}
let eO = function (e) {
    let {
            subscription: t,
            invoicePreview: s,
            isLoading: l,
            analyticsLocation: r,
            discountInfo: a,
            renewalChurnDiscountInfo: o,
            discountOffer: u,
        } = e,
        { analyticsLocations: d } = (0, f.Ay)(p.A.CHURN_DISCOUNT_SUBSCRIPTION_HEADER),
        c = () => {
            t.status !== ec.Dmq.CANCELED && m();
        },
        m = (e) => {
            (0, V.openModalLazy)(async () => {
                let { PremiumBrandRefreshSubscriptionCancellationModal: s } = await Promise.all([
                    i.e("96"),
                    i.e("9045"),
                    i.e("84820"),
                    i.e("94161"),
                    i.e("13051"),
                    i.e("80347"),
                    i.e("80166"),
                ]).then(i.bind(i, 293061));
                return (i) =>
                    (0, n.jsx)(s, {
                        ...i,
                        premiumSubscription: t,
                        analyticsLocation: r,
                        analyticsLocations: d,
                        initialStep: e,
                    });
            });
        },
        A = O.Ay.getPlanIdFromInvoice(t, s),
        h = (0, e_.ux)(u?.expiresAt?.toISOString());
    return (0, b.m1)(A)
        ? null
        : (0, n.jsx)("div", {
              className: eC.S6,
              children: (0, n.jsx)(k.h, {
                  color: "nitro-pink",
                  className: eC.YL,
                  children: (0, n.jsxs)("div", {
                      className: eC.mK,
                      children: [
                          (0, n.jsxs)("div", {
                              className: eC.Gp,
                              children: [
                                  (0, n.jsx)(ef, {
                                      color: "currentcolor",
                                      className: eC.fJ,
                                      "aria-label": et.intl.string(et.t.lpNrPu),
                                  }),
                                  (0, n.jsx)(g.E, {
                                      className: eC.tD,
                                      variant: "text-sm/medium",
                                      color: "text-strong",
                                      children: null != u && h,
                                  }),
                              ],
                          }),
                          (0, n.jsx)("div", { className: eC.T }),
                          (0, n.jsxs)("div", {
                              className: eC.ly,
                              children: [
                                  (0, n.jsxs)("div", {
                                      className: eC.Yc,
                                      children: [
                                          null != u
                                              ? (0, n.jsx)(ej, { discountOffer: u, premiumSubscription: t })
                                              : (0, n.jsx)(ey, {
                                                    premiumSubscription: t,
                                                    discountInfo: a ?? o,
                                                    invoicePreview: s,
                                                    isDiscountActive: null != a,
                                                }),
                                          (0, n.jsx)("div", {
                                              className: eC.e_,
                                              children: (() => {
                                                  let e = O.Ay.isSwitchingPlansDisabled(t),
                                                      i = O.Ay.getSwitchingPlansDisabledMessage(t);
                                                  if (!O.Ay.isBaseSubscriptionCanceled(t))
                                                      return (0, n.jsxs)("div", {
                                                          className: eC.qK,
                                                          children: [
                                                              (0, n.jsx)(ex.m, {
                                                                  text: i,
                                                                  shouldShow: e && null != i,
                                                                  asContainer: !0,
                                                                  children: (0, n.jsx)(w.$, {
                                                                      variant: "overlay-primary",
                                                                      disabled: e,
                                                                      text: et.intl.string(et.t["dylp/7"]),
                                                                      size: "md",
                                                                      onClick: () => {
                                                                          (0, C.A)({
                                                                              analyticsLocations: d,
                                                                              analyticsLocation: r,
                                                                              analyticsObject: ev,
                                                                              subscription: t,
                                                                          });
                                                                      },
                                                                  }),
                                                              }),
                                                              (0, n.jsx)(w.$, {
                                                                  variant: "secondary",
                                                                  size: "md",
                                                                  text: et.intl.string(et.t["ETE/oC"]),
                                                                  loading: l,
                                                                  onClick: c,
                                                              }),
                                                          ],
                                                      });
                                                  {
                                                      let e =
                                                          null != u
                                                              ? et.intl.format(et.t.XIVblY, {
                                                                    percent: u.discount.amount,
                                                                })
                                                              : et.intl.string(et.t.zrCzVB);
                                                      return (0, n.jsx)(w.$, {
                                                          variant: "expressive",
                                                          icon: ep.t,
                                                          size: "md",
                                                          text: e,
                                                          loading: l,
                                                          onClick: () => m(eI.g.CONFIRM_DISCOUNT),
                                                      });
                                                  }
                                              })(),
                                          }),
                                      ],
                                  }),
                                  (0, n.jsx)("img", { className: eC.Hp, src: eb.A, alt: "", draggable: !1 }),
                              ],
                          }),
                      ],
                  }),
              }),
          });
};
var eR = i(284009),
    eL = i.n(eR),
    eD = i(607399),
    eP = i(189213),
    eG = i(683071),
    eM = i(701273),
    eU = i(753390),
    eV = i(780964),
    ek = i(766075),
    ew = i(327479),
    eF = i(601107),
    eB = i(428797);
let ez = [ec.Dmq.PAST_DUE, ec.Dmq.ACCOUNT_HOLD, ec.Dmq.BILLING_RETRY],
    eY = (e) => {
        let { transitionState: t, onClose: i, subscription: l, analyticsLocations: r, analyticsLocation: a } = e,
            [o, u] = s.useState(!1),
            [d, c] = s.useState(!1);
        s.useEffect(() => {
            y.default.track(ec.HAw.GUILD_BOOST_PAST_DUE_CANCEL_MODAL_VIEWED, {
                subscription_id: l.id,
                location_stack: r,
            });
        }, []);
        let g = async () => {
                u(!0), c(!1);
                try {
                    await (0, eU.M2)(l.id, r, a),
                        y.default.track(ec.HAw.GUILD_BOOST_PAST_DUE_CANCELLATION_FLOW_COMPLETED, {
                            subscription_id: l.id,
                            location_stack: r,
                        }),
                        (0, eU.hP)(),
                        i();
                } catch (e) {
                    c(!0), u(!1);
                }
            },
            m = [
                { text: et.intl.string(et.t.oEAioF), onClick: () => i(), variant: "secondary" },
                {
                    text: et.intl.string(et.t["cY+Oob"]),
                    onClick: () => g(),
                    disabled: o,
                    variant: "critical-primary",
                    loading: o,
                },
            ];
        return (0, n.jsx)(eP.Modal, {
            size: "md",
            transitionState: t,
            title: et.intl.string(et.t.LZunzZ),
            subtitle: et.intl.string(et.t.FClXh9),
            actions: m,
            onClose: async () => i(),
            children: d ? (0, n.jsx)(eG.w, { type: "critical", children: et.intl.string(et.t["5mlOCW"]) }) : null,
        });
    };
function eX(e) {
    let t,
        {
            subscription: i,
            renewalInvoicePreview: s,
            fractionalPremiumInfo: l,
            fromStandaloneBillingPage: a = !0,
            analyticsLocation: o,
        } = e,
        d = (0, u.bG)([v.default], () => {
            let e = v.default.getCurrentUser();
            return eL()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e;
        }),
        { analyticsLocations: c } = (0, f.Ay)(p.A.GUILD_BOOSTING_SUBSCRIPTION_HEADER);
    if (0 === (0, O.bx)(i.additionalPlans)) return null;
    let { status: m } = i,
        A = (0, O.$k)(i),
        h = !A && i.isBoostOnly && ez.includes(i.status);
    if (A) t = eB.v2;
    else
        switch (m) {
            case ec.Dmq.PAST_DUE:
            case ec.Dmq.ACCOUNT_HOLD:
            case ec.Dmq.BILLING_RETRY:
                t = eB.P7;
                break;
            case ec.Dmq.PAUSE_PENDING:
            case ec.Dmq.PAUSED:
                t = i.pauseReason !== eF.qf.FRACTIONAL_PREMIUM ? eB.C7 : eB.wG;
                break;
            default:
                t = eB.wG;
        }
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: r()(t, eB.Qn),
                children: [
                    (0, n.jsx)("div", { className: eB.Kq }),
                    (0, n.jsx)("div", { className: eB.OL }),
                    (0, n.jsxs)("div", {
                        className: eB.eC,
                        children: [
                            (0, n.jsx)("div", { className: r()(eB.Ab, { [eB.aD]: A }) }),
                            (0, n.jsx)("div", {
                                children: (0, O.Uf)({
                                    subscription: i,
                                    renewalInvoicePreview: s,
                                    user: d,
                                    fractionalPremiumInfo: l,
                                }),
                            }),
                        ],
                    }),
                    a &&
                        (0, n.jsxs)("div", {
                            className: eB.BQ,
                            children: [
                                h &&
                                    (0, n.jsx)("div", {
                                        className: eB.x7,
                                        children: (0, n.jsx)(Q.Q, {
                                            variant: "always-white",
                                            onClick: () => {
                                                ez.includes(i.status) &&
                                                    (0, V.openModalLazy)(
                                                        async () => (e) =>
                                                            (0, n.jsx)(eY, {
                                                                ...e,
                                                                subscription: i,
                                                                analyticsLocations: c,
                                                                analyticsLocation: o,
                                                            }),
                                                    );
                                            },
                                            size: "sm",
                                            text: et.intl.string(et.t["ETE/oC"]),
                                        }),
                                    }),
                                (0, n.jsx)(ew.A, {
                                    onClick: () => (0, ek.openUserSettings)(eV.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
                                    text: et.intl.string(et.t["NQ5g/U"]),
                                }),
                            ],
                        }),
                ],
            }),
            !a &&
                (0, n.jsx)(g.E, {
                    className: eB.yW,
                    variant: "text-sm/normal",
                    children: et.intl.format(eD.Fr ? et.t.uxYBEa : et.t.k6haR9, {
                        openAppHook: () => (0, eM.A)("app"),
                    }),
                }),
        ],
    });
}
var eH = i(868942),
    eK = i(420139),
    eW = i(349288),
    eZ = i(697446);
function eq(e) {
    let { subscription: t, renewalMutations: s, className: l, analyticsLocation: a } = e,
        o = (0, N.A)(),
        u = t.currentPeriodEnd;
    return (
        o.fractionalState === eu.xc.FP_SUB_PAUSED && (u = o.endsAt.toDate()),
        (0, n.jsxs)("div", {
            className: r()(eZ.zr, l),
            children: [
                (0, n.jsx)(c.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: eZ.G }),
                (0, n.jsx)("div", {
                    className: eZ.Qq,
                    children: et.intl.format(et.t.ar1cPl, {
                        planName: t.hasExternalPlanChange ? (0, O.OU)(s) : O.Ay.getDisplayName(s.planId),
                        date: u,
                    }),
                }),
                t.isPurchasedExternally
                    ? null
                    : (0, n.jsx)(eW.Anchor, {
                          onClick: (e) => {
                              e.preventDefault(),
                                  (0, V.openModalLazy)(async () => {
                                      let { default: e } = await i.e("65975").then(i.bind(i, 702698));
                                      return (i) =>
                                          (0, n.jsx)(e, {
                                              ...i,
                                              subscription: t,
                                              renewalMutations: s,
                                              analyticsLocation: a,
                                          });
                                  });
                          },
                          className: eZ.Lu,
                          children: et.intl.string(et.t["ETE/oC"]),
                      }),
            ],
        })
    );
}
var eQ = i(633287);
function eJ() {
    return (
        s.useEffect(() => {
            y.default.track(ec.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_missing_payment_method" });
        }, []),
        (0, n.jsxs)("div", {
            className: eQ.Zz,
            children: [
                (0, n.jsx)(c.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: eQ.Sh,
                    color: d.A.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, n.jsx)(g.E, { className: eQ.Cy, variant: "text-sm/normal", children: et.intl.string(et.t.xFHEMa) }),
            ],
        })
    );
}
function e$() {
    return (
        s.useEffect(() => {
            y.default.track(ec.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_invalid_payment_method" });
        }, []),
        (0, n.jsxs)("div", {
            className: eQ.Zz,
            children: [
                (0, n.jsx)(c.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: eQ.Sh,
                    color: d.A.unsafe_rawColors.RED_360.css,
                }),
                (0, n.jsx)(g.E, {
                    className: eQ.Cy,
                    variant: "text-sm/normal",
                    children: et.intl.string(et.t["j+nuQZ"]),
                }),
            ],
        })
    );
}
function e0(e) {
    let { daysPastDue: t, subscription: i, openInvoiceId: l } = e,
        { analyticsLocations: r } = (0, f.Ay)(p.A.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return (
        s.useEffect(() => {
            y.default.track(ec.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_invalid_payment_method" });
        }, []),
        (0, n.jsxs)("div", {
            className: eQ.Zz,
            children: [
                (0, n.jsx)(c.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: eQ.Sh,
                    color: d.A.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, n.jsx)(g.E, {
                    className: eQ.Cy,
                    variant: "text-sm/normal",
                    children: et.intl.format(et.t["0nbf/G"], {
                        daysPastDue: t,
                        paymentModalRedirect: () => {
                            (0, C.A)({ initialPlanId: i.planIdFromItems, openInvoiceId: l, analyticsLocations: r });
                        },
                    }),
                }),
            ],
        })
    );
}
function e1(e) {
    let { subscription: t, renewalInvoicePreview: i, openInvoice: s, className: l, fractionalPremiumInfo: a } = e;
    return (0, n.jsxs)("div", {
        className: r()(eQ.KF, l),
        children: [
            (0, n.jsx)(m.D, {
                variant: "heading-md/semibold",
                className: eQ.QL,
                children: et.intl.string(et.t.KXQjfc),
            }),
            (0, n.jsx)("div", { children: O.Ay.getBillingInformationString(t, i, s, !1, a) }),
        ],
    });
}
function e2() {
    let e = (0, u.bG)([v.default], () => v.default.getCurrentUser()),
        t = null != e && e.isPremiumGroupMember();
    return (0, n.jsxs)("div", {
        children: [
            (0, n.jsx)(m.D, {
                variant: "heading-lg/semibold",
                className: eQ.Gf,
                children: et.intl.string(et.t["/gs+Pz"]),
            }),
            (0, n.jsx)("p", { className: eQ.yV, children: et.intl.string(et.t.D8UpUo) }),
            !t &&
                (0, n.jsx)(A.Z, {
                    className: eQ.wb,
                    type: A.Z.Types.CUSTOM,
                    children: (0, n.jsxs)(_.A, {
                        align: _.A.Align.CENTER,
                        children: [
                            (0, n.jsx)(I.A, { game: null, size: I.M.SMALL, className: eQ.pV }),
                            (0, n.jsx)("span", { className: eQ.O, children: et.intl.string(et.t.xCRgr1) }),
                        ],
                    }),
                }),
            t && (0, n.jsx)(eh, { currentUser: e }),
        ],
    });
}
function e3(e) {
    let {
            subscription: t,
            analyticsLocation: i,
            paymentSource: s,
            busy: l,
            fromStandaloneBillingPage: a,
            showInvalidPaymentMethod: o,
            showNoPaymentMethod: u,
            fetchedCurrentInvoicePreview: d,
            fetchedRenewalInvoicePreview: c,
            fetchedOpenInvoice: g,
            isPremiumGroup: m,
        } = e,
        { analyticsLocations: A } = (0, f.Ay)(p.A.SUBSCRIPTION_DETAILS),
        T = null != d ? {} : { subscriptionId: t.id, renewal: !0, analyticsLocations: A, analyticsLocation: i },
        [x] = (0, L.YV)(T);
    x = d ?? x;
    let _ =
            null != c
                ? {}
                : {
                      subscriptionId: t.id,
                      renewal: !0,
                      applyEntitlements: !0,
                      analyticsLocations: A,
                      analyticsLocation: i,
                  },
        [I] = (0, L.YV)(_);
    I = c ?? I;
    let C = (0, N.A)(),
        b = (0, G.p)(),
        v = (0, D.nf)(),
        y = O.Ay.isBaseSubscriptionCanceled(t),
        j = (function (e, t) {
            let i = eT.A.get(e.premiumPlanIdFromItems ?? "");
            if (null != i) {
                let n = (0, R._w)(i, t?.id, !1),
                    s = n.length > 0 ? n[0] : e.currency;
                if (1 === n.length && t?.id === e.paymentSourceId && (0, R.jJ)(i.id, s, t?.id)) return !0;
            }
            return !1;
        })(t, s);
    if (null == x || null == I) return (0, n.jsx)(h.y, {});
    let P = j ? (0, D.Bv)(I) : null,
        M = null != P || (null != v && (v.discountId === eu.q || v.discountId === eu.EG)),
        U =
            j && ((y && null != b) || (!y && M))
                ? (0, n.jsx)(eO, {
                      subscription: t,
                      invoicePreview: I,
                      paymentSource: s,
                      discountOffer: b,
                      renewalChurnDiscountInfo: P,
                      discountInfo: v,
                      isLoading: l,
                      analyticsLocation: i,
                  })
                : (0, n.jsx)(eH.A, {
                      subscription: t,
                      currentInvoicePreview: x,
                      renewalInvoicePreview: I,
                      paymentSource: s,
                      busy: l,
                      analyticsLocation: i,
                  });
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: eQ.fj,
                children: [
                    !m && U,
                    (0, n.jsx)(eX, {
                        subscription: t,
                        renewalInvoicePreview: x,
                        fromStandaloneBillingPage: a,
                        fractionalPremiumInfo: C,
                        analyticsLocation: i,
                    }),
                ],
            }),
            (0, n.jsx)("div", {
                children: (0, n.jsx)(E.n, {
                    label: et.intl.string(et.t.Sb6wI1),
                    children: (0, n.jsxs)("div", {
                        className: eQ.zH,
                        children: [
                            (0, n.jsx)(e1, {
                                subscription: t,
                                renewalInvoicePreview: I,
                                className: eQ.g4,
                                fractionalPremiumInfo: C,
                                openInvoice: g,
                            }),
                            (0, n.jsx)("div", {
                                className: r()(eQ.g4, { [eQ.sE]: o }),
                                children: (0, n.jsx)(S.D, {
                                    label:
                                        t.isPurchasedExternally && null != t.paymentGateway
                                            ? et.intl.formatToPlainString(et.t["rTk9v/"], {
                                                  paymentGatewayName: ec.qmC[t.paymentGateway],
                                              })
                                            : et.intl.string(et.t.iRzXKd),
                                    children: (0, n.jsx)(eK.A, {
                                        subscription: t,
                                        onPaymentSourceAdded: R.c_,
                                        highlightAddPaymentMethodButton: u || o,
                                        analyticsLocation: i,
                                        currentInvoicePreview: x,
                                        dropdownClassName: eQ.sp,
                                    }),
                                }),
                            }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
let e6 = new Set([ec.Dmq.ACTIVE, ec.Dmq.PAST_DUE, ec.Dmq.CANCELED, ec.Dmq.PAUSE_PENDING, ec.Dmq.PAUSED]);
function e4() {
    return (
        s.useEffect(() => {
            y.default.track(ec.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_duplicate_subscriptions" });
        }, []),
        (0, n.jsxs)("div", {
            className: eQ.oU,
            children: [
                (0, n.jsx)(c.E, { size: "custom", width: 20, height: 20, color: d.A.unsafe_rawColors.RED_360.css }),
                (0, n.jsx)(g.E, {
                    className: eQ.dk,
                    variant: "text-sm/normal",
                    children: et.intl.format(et.t["6eXiiC"], { helpCenterLink: j.A.getArticleURL(ec.MVz.NITRO) }),
                }),
            ],
        })
    );
}
function e7(e) {
    let t,
        {
            subscription: i,
            subscriptions: l,
            paymentSource: r,
            busy: a,
            fromStandaloneBillingPage: d = !0,
            analyticsLocation: c,
            shouldRefetchInvoicesOnSubscriptionUpdate: g,
        } = e;
    null != l && null != l[0] && (i = l[0]);
    let A = (0, u.bG)([v.default], () => v.default.getCurrentUser()),
        { analyticsLocations: S } = (0, f.Ay)(p.A.SUBSCRIPTION_DETAILS),
        N = (0, G.p)(),
        _ = null != l ? l.slice(1) : [],
        [I, C] = s.useState(0);
    s.useEffect(() => {
        if (!g) return;
        let e = (e) => {
            e.subscription.id === i.id && C((e) => e + 1);
        };
        return (
            T.h.subscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e),
            () => {
                T.h.unsubscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e);
            }
        );
    }, [i.id, g]),
        (0, x.Ay)(() => {
            let e = () => C((e) => e + 1);
            return (
                T.h.subscribe("BILLING_USER_OFFER_REDEEMED", e),
                () => {
                    T.h.unsubscribe("BILLING_USER_OFFER_REDEEMED", e);
                }
            );
        });
    let [y] = (0, L.YV)({
            subscriptionId: i.id,
            renewal: !0,
            analyticsLocations: S,
            analyticsLocation: c,
            fetchKey: I,
        }),
        [j] = (0, L.YV)({
            subscriptionId: i.id,
            renewal: !0,
            applyEntitlements: !0,
            analyticsLocations: S,
            analyticsLocation: c,
            userDiscountOfferId: N?.id,
            fetchKey: I,
        }),
        O = r?.invalid,
        R = (0, u.bG)([v.default], () => v.default.getCurrentUser()?.hasFreePremium()),
        D = o()(i.currentPeriodEnd),
        M = null != i.paymentSourceId,
        U = j?.total ?? 0,
        V =
            !M &&
            U > 0 &&
            (7 >= D.diff(o()(), "days") || i.status === ec.Dmq.PAST_DUE) &&
            !R &&
            !i.isPurchasedExternally,
        k = O && i.status === ec.Dmq.PAST_DUE && !R && !i.isPurchasedExternally,
        w = (0, P.l)(),
        F = !R && w,
        B = i?.status === ec.Dmq.PAST_DUE,
        z = B ? o()().diff(o()(i.currentPeriodStart), "days") : 0,
        Y = null != A && A.isPremiumGroupPrimary(),
        X = i.hasAnyPremiumGroup,
        [H] = (0, L.C8)({ subscriptionId: i.id, preventFetch: !(F || B) });
    return null == y || null == j
        ? (0, n.jsx)(h.y, {})
        : (null != i.renewalMutations &&
              ((i.renewalMutations.planId !== i.planId && !(0, b.m1)(i.renewalMutations.planId)) ||
                  i.hasExternalPlanChange) &&
              (t = (0, n.jsx)(eq, {
                  subscription: i,
                  renewalMutations: i.renewalMutations,
                  className: eQ.Il,
                  analyticsLocation: c,
              })),
          (0, n.jsxs)(E.n, {
              label: et.intl.string(et.t["/gs+Pz"]),
              description: et.intl.string(et.t.D8UpUo),
              children: [
                  V ? (0, n.jsx)(eJ, {}) : null,
                  k ? (0, n.jsx)(e$, {}) : null,
                  F && null != H ? (0, n.jsx)(e0, { daysPastDue: z, subscription: i, openInvoiceId: H.id }) : null,
                  Y && X && (0, n.jsx)(eS, { subscription: i, analyticsLocations: S }),
                  t,
                  (0, n.jsxs)("div", {
                      children: [
                          (0, n.jsx)("div", {
                              className: _.length > 0 ? eQ.HZ : eQ.__invalid_singleSubscription,
                              children: (0, n.jsx)(e3, {
                                  subscription: i,
                                  analyticsLocation: c,
                                  paymentSource: r,
                                  busy: a,
                                  fromStandaloneBillingPage: d,
                                  showNoPaymentMethod: V,
                                  showInvalidPaymentMethod: k,
                                  fetchedCurrentInvoicePreview: y,
                                  fetchedRenewalInvoicePreview: j,
                                  fetchedOpenInvoice: H,
                                  isPremiumGroup: Y,
                              }),
                          }),
                          _.map((e, t) =>
                              (0, n.jsxs)(
                                  "div",
                                  {
                                      className: eQ.HZ,
                                      children: [
                                          (0, n.jsx)(m.D, {
                                              variant: "heading-md/semibold",
                                              className: eQ.dd,
                                              children: "Duplicate Subscriptions",
                                          }),
                                          (0, n.jsx)(e3, {
                                              subscription: e,
                                              analyticsLocation: c,
                                              paymentSource: r,
                                              busy: a,
                                              fromStandaloneBillingPage: d,
                                              showNoPaymentMethod: V,
                                              showInvalidPaymentMethod: k,
                                              fetchedCurrentInvoicePreview: null,
                                              fetchedRenewalInvoicePreview: null,
                                              fetchedOpenInvoice: null,
                                              isPremiumGroup: !1,
                                          }),
                                      ],
                                  },
                                  t,
                              ),
                          ),
                      ],
                  }),
              ],
          }));
}
