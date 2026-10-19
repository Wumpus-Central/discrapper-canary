n.d(t, { A: () => U });
var i,
    r = n(477900),
    a = n(582128),
    l = n(793574),
    o = n(975571),
    s = n(757036),
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
    C = n(59318),
    A = n(75678),
    h = n(202541);
n(92737);
var x = n(652215),
    O = n(49999),
    R = n(105292),
    v = n(137326),
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
            assetUrl: o,
            ctaType: s,
            ctaTextOverride: N,
            perkCardId: I,
            analyticsLocation: S,
            children: y,
        } = e,
        { analyticsLocations: j } = (0, T.Ay)(S),
        L = (0, c.bG)([P.Ay], () => P.Ay.useReducedMotion),
        M = a.useCallback(() => {
            (0, E.A)(x.BVt.NITRO_HOME, { search: (0, d.stringify)({ perk: I }) });
        }, [I]),
        U = a.useCallback(() => {
            switch ((n(O.i.TAKE_ACTION), s)) {
                case 0:
                    M();
                    break;
                case 1:
                    (0, A.A)({ subscriptionTier: h.pe.TIER_2, analyticsLocations: j, onSubscriptionConfirmation: M });
            }
        }, [j, s, n, M]),
        D =
            0 === s
                ? { text: null != N ? N : R.intl.string(R.t.pVBlCH), variant: "secondary", onClick: U }
                : {
                      text: null != N ? N : R.intl.string(R.t.hIVbiP),
                      variant: "expressive",
                      icon: p.t,
                      iconPosition: "start",
                      onClick: U,
                  };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", { children: y }),
            (0, r.jsx)(u.x, {
                targetElementRef: t,
                onRequestClose: () => n(O.i.USER_DISMISS),
                alignmentStrategy: "edge",
                align: "top",
                position: "right",
                caretConfig: { align: "start" },
                children: (0, r.jsxs)("div", {
                    "data-mana-component": "popover",
                    children: [
                        (0, r.jsx)(b.p, { onClick: () => n(O.i.USER_DISMISS) }),
                        null != o &&
                            (0, r.jsx)("div", {
                                className: v.Q,
                                children: (0, C.r1)(o)
                                    ? (0, r.jsx)(_.A, {
                                          src: o,
                                          autoPlay: !1 === L,
                                          loop: !0,
                                          muted: !0,
                                          playsInline: !0,
                                          "aria-hidden": !0,
                                          className: v.$,
                                      })
                                    : (0, r.jsx)("img", { src: o, alt: "", "aria-hidden": !0, className: v.$ }),
                            }),
                        (0, r.jsx)(g.D, { title: i, body: l }),
                        (0, r.jsx)(m.Z, { actions: [D] }),
                        (0, r.jsx)(f.F, {}),
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
        a,
        { targetElementRef: d, dismissPopover: c, children: u } = e,
        m = (0, s.L)(),
        { phase: f } = S.A.useConfig({ location: "PremiumTabPopover" });
    return (
        m
            ? ((t = R.intl.string(M.default["er+5dl"])),
              (n =
                  f === S.H.PHASE_ONE
                      ? R.intl.format(L.default["4y7mjC"], { rewardPercentage: y.xU })
                      : R.intl.format(M.default.b9LwCb, { rewardPercentage: y.xU })),
              (i = N.NAVIGATE_TO_PERK),
              (a = R.intl.string(j.default.vlafDc)))
            : ((t = R.intl.string(M.default["er+5dl"])),
              (n = R.intl.format(M.default.xL7Cfe, {
                  rewardPercentage: y.xU,
                  termsUrl: o.A.getArticleURL(x.MVz.BEST_BUY_PROMOTION),
              })),
              (i = N.OPEN_PAYMENT_MODAL)),
        (0, r.jsx)(I, {
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
            ctaTextOverride: a,
            analyticsLocation: l.A.BEST_BUY_PREMIUM_TAB_POPOVER,
            children: u,
        })
    );
}
