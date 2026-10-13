n.d(t, { A: () => U });
var i,
    a = n(477900),
    r = n(582128),
    l = n(793574),
    s = n(975571),
    o = n(757036),
    d = n(492462),
    c = n(17928),
    u = n(273875),
    m = n(208756),
    f = n(798618),
    g = n(627330),
    b = n(478542),
    p = n(403581),
    P = n(775602),
    _ = n(688810),
    T = n(607470),
    C = n(741231),
    E = n(59318),
    h = n(75678),
    A = n(202541);
n(92737);
var x = n(652215),
    O = n(49999),
    v = n(660183),
    N = n(137326),
    R =
        (((i = {})[(i.NAVIGATE_TO_PERK = 0)] = "NAVIGATE_TO_PERK"),
        (i[(i.OPEN_PAYMENT_MODAL = 1)] = "OPEN_PAYMENT_MODAL"),
        i);
function I(e) {
    let {
            targetElementRef: t,
            dismissPopover: n,
            title: i,
            body: l,
            assetUrl: s,
            ctaType: o,
            ctaTextOverride: R,
            perkCardId: I,
            analyticsLocation: y,
            children: S,
        } = e,
        { analyticsLocations: j } = (0, _.Ay)(y),
        L = (0, c.bG)([P.Ay], () => P.Ay.useReducedMotion),
        M = r.useCallback(() => {
            (0, C.A)(x.BVt.NITRO_HOME, { search: (0, d.stringify)({ perk: I }) });
        }, [I]),
        U = r.useCallback(() => {
            switch ((n(O.i.TAKE_ACTION), o)) {
                case 0:
                    M();
                    break;
                case 1:
                    (0, h.A)({ subscriptionTier: A.pe.TIER_2, analyticsLocations: j, onSubscriptionConfirmation: M });
            }
        }, [j, o, n, M]),
        w =
            0 === o
                ? { text: null != R ? R : v.intl.string(v.t.pVBlCH), variant: "secondary", onClick: U }
                : {
                      text: null != R ? R : v.intl.string(v.t.hIVbiP),
                      variant: "expressive",
                      icon: p.t,
                      iconPosition: "start",
                      onClick: U,
                  };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", { children: S }),
            (0, a.jsx)(u.x, {
                targetElementRef: t,
                onRequestClose: () => n(O.i.USER_DISMISS),
                alignmentStrategy: "edge",
                align: "top",
                position: "right",
                caretConfig: { align: "start" },
                children: (0, a.jsxs)("div", {
                    "data-mana-component": "popover",
                    children: [
                        (0, a.jsx)(b.p, { onClick: () => n(O.i.USER_DISMISS) }),
                        null != s &&
                            (0, a.jsx)("div", {
                                className: N.Q,
                                children: (0, E.r1)(s)
                                    ? (0, a.jsx)(T.A, {
                                          src: s,
                                          autoPlay: !1 === L,
                                          loop: !0,
                                          muted: !0,
                                          playsInline: !0,
                                          "aria-hidden": !0,
                                          className: N.$,
                                      })
                                    : (0, a.jsx)("img", { src: s, alt: "", "aria-hidden": !0, className: N.$ }),
                            }),
                        (0, a.jsx)(g.D, { title: i, body: l }),
                        (0, a.jsx)(m.Z, { actions: [w] }),
                        (0, a.jsx)(f.F, {}),
                    ],
                }),
            }),
        ],
    });
}
var y = n(722793),
    S = n(275357),
    j = n(685477),
    L = n(116314),
    M = n(429605);
function U(e) {
    let t,
        n,
        i,
        r,
        { targetElementRef: d, dismissPopover: c, children: u } = e,
        m = (0, o.L)(),
        { phase: f } = y.A.useConfig({ location: "PremiumTabPopover" });
    return (
        m
            ? ((t = v.intl.string(M.default["er+5dl"])),
              (n =
                  f === y.H.PHASE_ONE
                      ? v.intl.format(L.default["4y7mjC"], { rewardPercentage: S.xU })
                      : v.intl.format(M.default.b9LwCb, { rewardPercentage: S.xU })),
              (i = R.NAVIGATE_TO_PERK),
              (r = v.intl.string(j.default.vlafDc)))
            : ((t = v.intl.string(M.default["er+5dl"])),
              (n = v.intl.format(M.default.xL7Cfe, {
                  rewardPercentage: S.xU,
                  termsUrl: s.A.getArticleURL(x.MVz.BEST_BUY_PROMOTION),
              })),
              (i = R.OPEN_PAYMENT_MODAL)),
        (0, a.jsx)(I, {
            targetElementRef: d,
            dismissPopover: c,
            title: t,
            body: [n],
            assetUrl:
                f === y.H.PHASE_ONE
                    ? "https://cdn.discordapp.com/assets/content/45f067d19ee83d30fb1a0e6de99bf95fd2bba5da52311c69cc790ec4d17cbb16.png"
                    : "https://cdn.discordapp.com/assets/content/107bd2b0c71f6df724edc7bcf20465f867e1fa8f9051c0a0db5d58491b5f2a9f.png",
            ctaType: i,
            perkCardId: S.AQ,
            ctaTextOverride: r,
            analyticsLocation: l.A.BEST_BUY_PREMIUM_TAB_POPOVER,
            children: u,
        })
    );
}
