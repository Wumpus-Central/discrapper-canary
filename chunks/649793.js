i.d(t, { default: () => Q });
var s = i(477900),
    r = i(582128),
    l = i(70283),
    a = i(855986),
    n = i(189213),
    d = i(534514),
    c = i(834730),
    o = i(597770),
    u = i(793574),
    m = i(688810),
    h = i(682618),
    x = i(982240),
    g = i(620143),
    f = i(100663),
    j = i(287809),
    v = i(45052),
    T = i(620301),
    N = i(503698),
    p = i.n(N),
    y = i(914410),
    b = i(339514),
    M = i(792996),
    w = i(304958);
function I(e) {
    let { progress: t, currentTier: i, newTier: r, className: l } = e,
        a = (0, x.rL)(i ?? void 0),
        n = (0, x.rL)(r),
        d = n > 0 ? Math.min(Math.max((t / n) * 100, 0), 100) : 100,
        o = (0, v.Se)(i ?? void 0),
        u = (0, v.Se)(r);
    return (0, s.jsxs)("div", {
        className: p()(w.kL, l),
        children: [
            (0, s.jsxs)("div", {
                className: w.O3,
                children: [
                    null != o && (0, s.jsx)("img", { src: o, alt: "", width: 24, height: 24, className: w.w5 }),
                    (0, s.jsx)("div", {
                        className: w.hr,
                        children: (0, s.jsx)(y.Ay, { variant: y.qP.BLUE, weight: y.fh.MEDIUM, progress: d }),
                    }),
                    null != u && (0, s.jsx)("img", { src: u, alt: "", width: 24, height: 24, className: w.w5 }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: w.WD,
                children: [
                    (0, s.jsx)(c.E, {
                        variant: "body-xs/normal",
                        color: "text-muted",
                        children: M.intl.format(b.default.QsbVMM, { count: a }),
                    }),
                    (0, s.jsx)(c.E, {
                        variant: "body-xs/normal",
                        color: "text-strong",
                        children: M.intl.format(b.default.QsbVMM, { count: n }),
                    }),
                ],
            }),
        ],
    });
}
var k = i(803691);
function B(e) {
    let { progress: t, currentTier: i, nextTier: r, iconSize: l = 24, title: a } = e,
        n = (0, x.rL)(r),
        o = (0, v.Se)(i),
        u = (0, v.Se)(r),
        m = 100;
    return (
        null != r && n > 0 && (m = Math.min(Math.max((t / n) * 100, 0), 100)),
        (0, s.jsxs)("div", {
            className: k.nM,
            children: [
                null != o && (0, s.jsx)("img", { src: o, alt: "", width: l, height: l, className: k.w5 }),
                (0, s.jsxs)("div", {
                    className: k.Qs,
                    children: [
                        null != a && (0, s.jsx)(d.D, { variant: "heading-sm/semibold", children: a }),
                        (0, s.jsx)(y.Ay, { variant: y.qP.BLUE, weight: y.fh.MEDIUM, progress: m }),
                        (0, s.jsx)("div", {
                            className: k.WD,
                            children:
                                null != r &&
                                (0, s.jsx)(c.E, {
                                    variant: "body-xs/normal",
                                    color: "text-muted",
                                    children: M.intl.format(b.default.iIpfQe, { count: t, threshold: n }),
                                }),
                        }),
                    ],
                }),
                null != u && (0, s.jsx)("img", { src: u, alt: "", width: l, height: l, className: k.w5 }),
            ],
        })
    );
}
var G = i(315693),
    A = i(652215),
    E = i(254013);
function D(e) {
    let { progress: t, title: i, progressBarTitle: r, description: l, currentTier: a, nextTier: n } = e;
    return (0, s.jsxs)("div", {
        className: E.Qs,
        children: [
            (0, s.jsx)("div", {
                className: E.qB,
                children: (0, s.jsx)(B, { progress: t, currentTier: a, nextTier: n, iconSize: 48, title: r }),
            }),
            (0, s.jsxs)("div", {
                className: E.TA,
                children: [
                    (0, s.jsx)(d.D, { variant: "heading-xxl/semibold", children: i }),
                    (0, s.jsx)(c.E, { variant: "body-sm/normal", color: "text-subtle", className: E.h_, children: l }),
                ],
            }),
        ],
    });
}
function P(e) {
    let { simulatedProgress: t, currentTier: i, newTier: n, nextTier: o, giftsToNextTier: u } = e,
        m = (0, a.bG)(
            [x.Ay],
            () => {
                let e = x.Ay.getBadgeById(l.$.GIFTING);
                return e?.has_updates === !0 && e.current_tier === n.key;
            },
            [n.key],
        ),
        f = (0, g.e)({ location: "GiftingBadgePostPurchase", hasUnread: m }),
        j = m && f;
    r.useEffect(() => {
        j && (0, h.zd)(l.$.GIFTING);
    }, [j]);
    let T = null != o && null != u && u > 0,
        N = (0, v.Se)(n);
    return (0, s.jsxs)("div", {
        className: E.Qs,
        children: [
            null != N && (0, s.jsx)("img", { src: N, alt: "", width: 140, height: 140, className: E.rF }),
            (0, s.jsxs)("div", {
                className: E.Mr,
                children: [
                    (0, s.jsx)(d.D, {
                        variant: "heading-xxl/semibold",
                        children: M.intl.format(b.default.k8MmO8, { tierName: n.name ?? "" }),
                    }),
                    (0, s.jsx)(I, { progress: t, currentTier: i, newTier: n, className: E.$c }),
                    T &&
                        (0, s.jsx)(c.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            className: E.kA,
                            children: M.intl.format(b.default["6QVlxw"], { count: u, nextTierName: o.name ?? "" }),
                        }),
                ],
            }),
        ],
    });
}
function S(e) {
    let { currentProgress: t, quantity: i } = e,
        r = (0, a.bG)([x.Ay], () => x.Ay.getBadgeById(l.$.GIFTING)?.tiers);
    if (null == r) return null;
    let n = (0, G.XX)(r, t),
        d = t + i,
        c = (0, G.XX)(r, d),
        o = c?.key !== n?.key,
        u = (0, G.aZ)(r, d),
        m = (0, G.cz)(r, d),
        h = 1 === m;
    return o && null != c
        ? (0, s.jsx)(P, { simulatedProgress: d, currentTier: n, newTier: c, nextTier: u, giftsToNextTier: m })
        : h
          ? (0, s.jsx)(D, {
                title: M.intl.formatToPlainString(b.default.KjdBPz, { nextTier: u?.name ?? "" }),
                description: M.intl.string(b.default.oqDrEM),
                progressBarTitle: M.intl.string(b.default["Ka5s+Q"]),
                progress: d,
                currentTier: c ?? void 0,
                nextTier: u ?? void 0,
            })
          : (0, s.jsx)(D, {
                title: M.intl.string(b.default["/rBQud"]),
                description: M.intl.string(b.default.DDQMlx),
                progressBarTitle:
                    n?.name != null ? M.intl.formatToPlainString(b.default.bwyQt8, { tierName: n?.name }) : "",
                progress: d,
                currentTier: c ?? void 0,
                nextTier: u ?? void 0,
            });
}
function Q(e) {
    let { transitionState: t, onClose: i, currentProgress: l, quantity: a } = e,
        { analyticsLocations: d } = (0, m.Ay)(u.A.GIFTING_BADGE_POST_PURCHASE),
        { openGiftModal: c } = (0, T.$)({
            giftRecipient: void 0,
            analyticsLocations: d,
            analyticsObject: { object: A.ZSU.BUTTON_CTA, objectType: A.btD.GIFT },
            location: "gifting-badge-post-purchase",
        }),
        h = r.useCallback(() => {
            i();
            let e = j.default.getCurrentUser();
            null != e && (0, f.openUserProfileModal)({ userId: e.id });
        }, [i]),
        x = r.useCallback(() => {
            (i(), c());
        }, [i, c]);
    return (0, s.jsx)(n.a, {
        transitionState: t,
        size: "sm",
        onClose: i,
        title: void 0,
        actions: [
            { variant: "secondary", text: M.intl.string(b.default["sa/cfM"]), onClick: h },
            { variant: "primary", text: M.intl.string(b.default.g86YiI), icon: o.GiftIcon, onClick: x },
        ],
        children: (0, s.jsx)(S, { currentProgress: l, quantity: a }),
    });
}
