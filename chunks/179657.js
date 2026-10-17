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
    T = n(688810),
    _ = n(607470),
    E = n(741231),
    A = n(59318),
    C = n(75678),
    h = n(202541);
n(92737);
var x = n(652215),
    O = n(49999),
    v = n(105292),
    R = n(137326),
    N =
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
            ctaTextOverride: N,
            perkCardId: I,
            analyticsLocation: S,
            children: y,
        } = e,
        { analyticsLocations: j } = (0, T.Ay)(S),
        L = (0, c.bG)([P.Ay], () => P.Ay.useReducedMotion),
        M = r.useCallback(() => {
            (0, E.A)(x.BVt.NITRO_HOME, { search: (0, d.stringify)({ perk: I }) });
        }, [I]),
        U = r.useCallback(() => {
            switch ((n(O.i.TAKE_ACTION), o)) {
                case 0:
                    M();
                    break;
                case 1:
                    (0, C.A)({ subscriptionTier: h.pe.TIER_2, analyticsLocations: j, onSubscriptionConfirmation: M });
            }
        }, [j, o, n, M]),
        D =
            0 === o
                ? { text: null != N ? N : v.intl.string(v.t.pVBlCH), variant: "secondary", onClick: U }
                : {
                      text: null != N ? N : v.intl.string(v.t.hIVbiP),
                      variant: "expressive",
                      icon: p.t,
                      iconPosition: "start",
                      onClick: U,
                  };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", { children: y }),
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
                                className: R.Q,
                                children: (0, A.r1)(s)
                                    ? (0, a.jsx)(_.A, {
                                          src: s,
                                          autoPlay: !1 === L,
                                          loop: !0,
                                          muted: !0,
                                          playsInline: !0,
                                          "aria-hidden": !0,
                                          className: R.$,
                                      })
                                    : (0, a.jsx)("img", { src: s, alt: "", "aria-hidden": !0, className: R.$ }),
                            }),
                        (0, a.jsx)(g.D, { title: i, body: l }),
                        (0, a.jsx)(m.Z, { actions: [D] }),
                        (0, a.jsx)(f.F, {}),
                    ],
                }),
            }),
        ],
    });
}
var S = n(722793),
    y = n(275357),
    j = n(416927),
    L = n(380264),
    M = n(87255);
function U(e) {
    let t,
        n,
        i,
        r,
        { targetElementRef: d, dismissPopover: c, children: u } = e,
        m = (0, o.L)(),
        { phase: f } = S.A.useConfig({ location: "PremiumTabPopover" });
    return (
        m
            ? ((t = v.intl.string(M.default["er+5dl"])),
              (n =
                  f === S.H.PHASE_ONE
                      ? v.intl.format(L.default["4y7mjC"], { rewardPercentage: y.xU })
                      : v.intl.format(M.default.b9LwCb, { rewardPercentage: y.xU })),
              (i = N.NAVIGATE_TO_PERK),
              (r = v.intl.string(j.default.vlafDc)))
            : ((t = v.intl.string(M.default["er+5dl"])),
              (n = v.intl.format(M.default.xL7Cfe, {
                  rewardPercentage: y.xU,
                  termsUrl: s.A.getArticleURL(x.MVz.BEST_BUY_PROMOTION),
              })),
              (i = N.OPEN_PAYMENT_MODAL)),
        (0, a.jsx)(I, {
            targetElementRef: d,
            dismissPopover: c,
            title: t,
            body: [n],
            assetUrl:
                f === S.H.PHASE_ONE
                    ? "https://cdn.discordapp.com/assets/content/45f067d19ee83d30fb1a0e6de99bf95fd2bba5da52311c69cc790ec4d17cbb16.png"
                    : "https://cdn.discordapp.com/assets/content/107bd2b0c71f6df724edc7bcf20465f867e1fa8f9051c0a0db5d58491b5f2a9f.png",
            ctaType: i,
            perkCardId: y.AQ,
            ctaTextOverride: r,
            analyticsLocation: l.A.BEST_BUY_PREMIUM_TAB_POPOVER,
            children: u,
        })
    );
}
