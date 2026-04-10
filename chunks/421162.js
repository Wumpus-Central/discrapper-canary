"use strict";
n.d(t, { A: () => L });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(508770),
    l = n(397927),
    u = n(398590),
    c = n(523527),
    d = n(976860),
    _ = n(954571),
    f = n(676279),
    p = n(927578),
    h = n(802705),
    m = n(234419),
    E = n(612669),
    g = n(632150),
    A = n(792656),
    I = n(818415),
    T = n(788868),
    S = n(652215),
    y = n(519412),
    v = n(985018),
    N = n(664627),
    C = n(110992),
    R = n(417294),
    O = n(947639),
    b = n(644242),
    D = n(309427);
function L(e) {
    let t,
        {
            title: n,
            description: s,
            analyticsLocationSection: L,
            upsellViewedTrackingData: w,
            onClose: M,
            onDisplay: x,
            onLearnMore: P,
            isEmojiPickerOverlay: k = !1,
        } = e;
    i.useEffect(() => {
        _.default.track(S.HAw.PREMIUM_UPSELL_VIEWED, w), x?.();
    }, [x, w]);
    let U = () => {
            _.default.track(S.HAw.PREMIUM_PROMOTION_OPENED, {
                location_section: L,
                location_object: S.ZSU.NAVIGATION_LINK,
            }),
                P?.(),
                (0, c.A)(),
                M(),
                (0, u.jH)(),
                (0, d.pX)(S.BVt.APPLICATION_STORE);
        },
        G = (0, m.V)(),
        F = i.useCallback(() => (0, p.LE)(G, T.pe.TIER_2) ?? v.intl.string(v.t.pj0XBN), [G]),
        V = (0, I.A)(T.pe.TIER_2),
        B = (0, h.M)({ location: "premium_upsell_picker_overlay" }),
        H = (0, E.O9)();
    t = k ? ((0, f.TM)() ? R.A : O.A) : (0, f.TM)() ? b.A : D.A;
    let j = k ? "nitro-pink" : "green";
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.pkL, { onClick: M, isVisible: !0 }),
            (0, r.jsxs)(l.hLv, {
                color: j,
                className: N.kL,
                children: [
                    (0, r.jsxs)("div", {
                        className: N.Qs,
                        children: [
                            (0, r.jsx)(l.s_y, { "data-migration-pending": !0, onClick: M, className: N.b }),
                            (0, r.jsxs)("div", {
                                className: N.hQ,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: C.headerGraphic,
                                        children: (0, r.jsx)(l.vYh, { type: "video", src: t, loop: !0, loopAt: 5 }),
                                    }),
                                    null != V && (0, r.jsx)(o.E, { type: { text: V }, variant: "brand" }),
                                    (0, r.jsx)(l.Heading, {
                                        className: a()(N.DD, { [N.GU]: null != V }),
                                        variant: "heading-xl/bold",
                                        color: "text-strong",
                                        children: n,
                                    }),
                                    (0, r.jsx)(l.Text, {
                                        variant: "text-md/medium",
                                        color: "text-subtle",
                                        className: N.rf,
                                        children: s,
                                    }),
                                ],
                            }),
                            k &&
                                B &&
                                H &&
                                (0, r.jsx)("div", {
                                    className: N.Zr,
                                    children: (0, r.jsx)(g.A, { subtitle: v.intl.string(y.default.BkJYQ5) }),
                                }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: N.qr,
                        children: (0, r.jsxs)("div", {
                            className: N.UD,
                            children: [
                                (0, r.jsx)(l.Button, {
                                    variant: "secondary",
                                    onClick: U,
                                    text: v.intl.string(v.t.ZnqyZ2),
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(A.A, {
                                    premiumModalAnalyticsLocation: { section: L, object: S.ZSU.BUTTON_CTA },
                                    subscriptionTier: T.pe.TIER_2,
                                    onClick: () => {
                                        M();
                                    },
                                    defaultTextOverride: F(),
                                    fullWidth: !0,
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
