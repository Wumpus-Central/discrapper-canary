i.d(t, { default: () => Q });
var s = i(477900),
    r = i(582128),
    l = i(70283),
    n = i(855986),
    a = i(189213),
    c = i(534514),
    d = i(834730),
    o = i(597770),
    u = i(793574),
    m = i(688810),
    x = i(982240),
    h = i(702476),
    g = i(287809),
    f = i(792384),
    j = i(620301),
    v = i(503698),
    T = i.n(v),
    N = i(914410),
    p = i(339514),
    b = i(792996),
    y = i(304958);
function M(e) {
    let { progress: t, currentTier: i, newTier: r, className: l } = e,
        n = (0, x.rL)(i ?? void 0),
        a = (0, x.rL)(r),
        c = a > 0 ? Math.min(Math.max((t / a) * 100, 0), 100) : 100,
        o = (0, f.Se)(i ?? void 0),
        u = (0, f.Se)(r);
    return (0, s.jsxs)("div", {
        className: T()(y.kL, l),
        children: [
            (0, s.jsxs)("div", {
                className: y.O3,
                children: [
                    null != o && (0, s.jsx)("img", { src: o, alt: "", width: 24, height: 24, className: y.w5 }),
                    (0, s.jsx)("div", {
                        className: y.hr,
                        children: (0, s.jsx)(N.Ay, { variant: N.qP.BLUE, weight: N.fh.MEDIUM, progress: c }),
                    }),
                    null != u && (0, s.jsx)("img", { src: u, alt: "", width: 24, height: 24, className: y.w5 }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: y.WD,
                children: [
                    (0, s.jsx)(d.E, {
                        variant: "body-xs/normal",
                        color: "text-muted",
                        children: b.intl.format(p.default.QsbVMM, { count: n }),
                    }),
                    (0, s.jsx)(d.E, {
                        variant: "body-xs/normal",
                        color: "text-strong",
                        children: b.intl.format(p.default.QsbVMM, { count: a }),
                    }),
                ],
            }),
        ],
    });
}
var w = i(803691);
function k(e) {
    let { progress: t, currentTier: i, nextTier: r, iconSize: l = 24, title: n } = e,
        a = (0, x.rL)(r),
        o = (0, f.Se)(i),
        u = (0, f.Se)(r),
        m = 100;
    return (
        null != r && a > 0 && (m = Math.min(Math.max((t / a) * 100, 0), 100)),
        (0, s.jsxs)("div", {
            className: w.nM,
            children: [
                null != o && (0, s.jsx)("img", { src: o, alt: "", width: l, height: l, className: w.w5 }),
                (0, s.jsxs)("div", {
                    className: w.Qs,
                    children: [
                        null != n && (0, s.jsx)(c.D, { variant: "heading-sm/semibold", children: n }),
                        (0, s.jsx)(N.Ay, { variant: N.qP.BLUE, weight: N.fh.MEDIUM, progress: m }),
                        (0, s.jsx)("div", {
                            className: w.WD,
                            children:
                                null != r &&
                                (0, s.jsx)(d.E, {
                                    variant: "body-xs/normal",
                                    color: "text-muted",
                                    children: b.intl.format(p.default.iIpfQe, { count: t, threshold: a }),
                                }),
                        }),
                    ],
                }),
                null != u && (0, s.jsx)("img", { src: u, alt: "", width: l, height: l, className: w.w5 }),
            ],
        })
    );
}
var D = i(315693),
    E = i(652215),
    I = i(254013);
function S(e) {
    let { progress: t, title: i, progressBarTitle: r, description: l, currentTier: n, nextTier: a } = e;
    return (0, s.jsxs)("div", {
        className: I.Qs,
        children: [
            (0, s.jsx)("div", {
                className: I.qB,
                children: (0, s.jsx)(k, { progress: t, currentTier: n, nextTier: a, iconSize: 48, title: r }),
            }),
            (0, s.jsxs)("div", {
                className: I.TA,
                children: [
                    (0, s.jsx)(c.D, { variant: "heading-xxl/semibold", children: i }),
                    (0, s.jsx)(d.E, { variant: "body-sm/normal", color: "text-subtle", className: I.h_, children: l }),
                ],
            }),
        ],
    });
}
function A(e) {
    let { simulatedProgress: t, currentTier: i, newTier: r, nextTier: l, giftsToNextTier: n } = e,
        a = null != l && null != n && n > 0,
        o = (0, f.Se)(r);
    return (0, s.jsxs)("div", {
        className: I.Qs,
        children: [
            null != o && (0, s.jsx)("img", { src: o, alt: "", width: 140, height: 140, className: I.rF }),
            (0, s.jsxs)("div", {
                className: I.Mr,
                children: [
                    (0, s.jsx)(c.D, {
                        variant: "heading-xxl/semibold",
                        children: b.intl.format(p.default.k8MmO8, { tierName: r.name ?? "" }),
                    }),
                    (0, s.jsx)(M, { progress: t, currentTier: i, newTier: r, className: I.$c }),
                    a &&
                        (0, s.jsx)(d.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            className: I.kA,
                            children: b.intl.format(p.default["6QVlxw"], { count: n, nextTierName: l.name ?? "" }),
                        }),
                ],
            }),
        ],
    });
}
function B(e) {
    let { currentProgress: t, quantity: i } = e,
        r = (0, n.bG)([x.Ay], () => x.Ay.getBadgeById(l.$.GIFTING)?.tiers);
    if (null == r) return null;
    let a = (0, D.XX)(r, t),
        c = t + i,
        d = (0, D.XX)(r, c),
        o = d?.key !== a?.key,
        u = (0, D.aZ)(r, c),
        m = (0, D.cz)(r, c),
        h = 1 === m;
    return o && null != d
        ? (0, s.jsx)(A, { simulatedProgress: c, currentTier: a, newTier: d, nextTier: u, giftsToNextTier: m })
        : h
          ? (0, s.jsx)(S, {
                title: b.intl.formatToPlainString(p.default.KjdBPz, { nextTier: u?.name ?? "" }),
                description: b.intl.string(p.default.oqDrEM),
                progressBarTitle: b.intl.string(p.default["Ka5s+Q"]),
                progress: c,
                currentTier: d ?? void 0,
                nextTier: u ?? void 0,
            })
          : (0, s.jsx)(S, {
                title: b.intl.string(p.default["/rBQud"]),
                description: b.intl.string(p.default.DDQMlx),
                progressBarTitle:
                    a?.name != null ? b.intl.formatToPlainString(p.default.bwyQt8, { tierName: a?.name }) : "",
                progress: c,
                currentTier: d ?? void 0,
                nextTier: u ?? void 0,
            });
}
function Q(e) {
    let { transitionState: t, onClose: i, currentProgress: l, quantity: n } = e,
        { analyticsLocations: c } = (0, m.Ay)(u.A.GIFTING_BADGE_POST_PURCHASE),
        { openGiftModal: d } = (0, j.$)({
            giftRecipient: void 0,
            analyticsLocations: c,
            analyticsObject: { object: E.ZSU.BUTTON_CTA, objectType: E.btD.GIFT },
            location: "gifting-badge-post-purchase",
        }),
        x = r.useCallback(() => {
            i();
            let e = g.default.getCurrentUser();
            null != e && (0, h.openUserProfileModal)({ userId: e.id });
        }, [i]),
        f = r.useCallback(() => {
            (i(), d());
        }, [i, d]);
    return (0, s.jsx)(a.a, {
        transitionState: t,
        size: "sm",
        onClose: i,
        title: void 0,
        actions: [
            { variant: "secondary", text: b.intl.string(p.default["sa/cfM"]), onClick: x },
            { variant: "primary", text: b.intl.string(p.default.g86YiI), icon: o.GiftIcon, onClick: f },
        ],
        children: (0, s.jsx)(B, { currentProgress: l, quantity: n }),
    });
}
