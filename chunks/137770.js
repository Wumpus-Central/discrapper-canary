n.d(t, { A: () => R }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(502572),
    d = n(834730),
    u = n(821609),
    c = n(104510),
    g = n(192308),
    m = n(265872),
    _ = n(861672),
    A = n(477782),
    h = n(939249),
    p = n(365199),
    x = n(827734),
    E = n(983511),
    T = n(342744),
    S = n(987144),
    f = n(166403),
    b = n(473145),
    C = n(927578),
    v = n(311092),
    N = n(652215),
    I = n(788868),
    y = n(985018),
    j = n(100345),
    O = n(410229);
function R(e) {
    let { guildBoostSlots: t, fractionalPremiumState: l } = e,
        m = (0, r.bG)([f.A], () => f.A.getPremiumTypeSubscription()),
        { unappliedSlots: _, numActiveSlots: A } = s.useMemo(() => {
            let e = [],
                n = 0;
            for (let i of t) !(0, b.I5)(i) && n++, null == i.premiumGuildSubscription && e.push(i);
            return { unappliedSlots: e, numActiveSlots: n };
        }, [t]),
        h = A > (null != m ? C.Ay.getNumIncludedPremiumGuildSubscriptionSlots(m.planId) : 0),
        p = m?.isPausedOrPausePending === !0 && l === I.xc.NONE;
    return 0 === _.length
        ? null
        : (0, i.jsxs)("div", {
              className: j.Nr,
              children: [
                  (0, i.jsxs)("div", {
                      className: j.MY,
                      children: [
                          (0, i.jsxs)("div", {
                              className: j._L,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: j.MD,
                                      children: [
                                          (0, i.jsx)("img", { alt: "", className: j.F8, src: O.A }),
                                          (0, i.jsx)("div", {
                                              className: a()(j.qS, "theme-dark"),
                                              children: (0, i.jsx)("span", { className: j.Vv, children: _.length }),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: j.Qp,
                                      children: [
                                          (0, i.jsx)(d.E, {
                                              variant: "heading-md/semibold",
                                              color: "text-default",
                                              tag: "span",
                                              children: y.intl.format(y.t.BPadnO, {
                                                  numUnappliedGuildBoostSlots: _.length,
                                              }),
                                          }),
                                          (0, i.jsx)(d.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-subtle",
                                              children: y.intl.format(y.t.Kaw82o, {
                                                  numUnappliedGuildBoostSlots: _.length,
                                              }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, i.jsx)(o.A, {
                              shouldShow: p,
                              text: y.intl.string(y.t.mOWsF1),
                              "aria-label": y.intl.string(y.t.mOWsF1),
                              children: (e) =>
                                  (0, i.jsx)(u.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: c._,
                                      text: y.intl.string(y.t.BMx1iy),
                                      disabled: p,
                                      onClick: () => {
                                          (0, g.openModalLazy)(async () => {
                                              let { default: e } = await Promise.resolve().then(n.bind(n, 770101));
                                              return (t) =>
                                                  (0, i.jsx)(e, {
                                                      ...t,
                                                      onSelectGuild: (e) => {
                                                          t.onClose(),
                                                              (0, S.g)({
                                                                  analyticsLocations: [],
                                                                  analyticsLocation: {
                                                                      page: N.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                                      section: N.JJy.SETTINGS_PREMIUM,
                                                                      object: N.ZSU.BUTTON_CTA,
                                                                      objectType: N.AnalyticsObjectTypes.BUY,
                                                                  },
                                                                  guild: e,
                                                              });
                                                      },
                                                  });
                                          });
                                      },
                                  }),
                          }),
                      ],
                  }),
                  _.map((e, t) =>
                      (0, i.jsx)(
                          L,
                          {
                              slot: e,
                              isLast: t === _.length - 1,
                              isCancelable: h && !(0, b.I5)(e),
                              isCanceled: (0, b.I5)(e),
                              premiumSubscription: m,
                              modificationsDisabled: p,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function L(e) {
    let t,
        { slot: n, isLast: l, isCancelable: r, isCanceled: o, premiumSubscription: u, modificationsDisabled: c } = e,
        S = s.useRef(null),
        f = s.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n.cooldownEndsAt]);
    t =
        o && null != u
            ? (0, i.jsx)(d.E, {
                  variant: "text-sm/medium",
                  color: "text-subtle",
                  children: y.intl.format(y.t.Z4ULRD, { date: u.currentPeriodEnd }),
              })
            : n.isOnCooldown() && null != f
              ? (0, i.jsx)(v.A, { cooldown: f.getTime() })
              : (0, i.jsx)(d.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: y.intl.string(y.t["2mcafz"]),
                });
    let b = r || o;
    return (0, i.jsxs)("div", {
        className: a()(j.iq, { [j.Mt]: l }),
        children: [
            (0, i.jsxs)("div", {
                className: j.kd,
                children: [(0, i.jsx)("img", { alt: "", className: j.bB, src: O.A }), t],
            }),
            b &&
                (0, i.jsx)(m.Y, {
                    targetElementRef: S,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsxs)(_.W, {
                            navId: "unapplied-boost-actions",
                            "aria-label": y.intl.string(y.t.ogxXGq),
                            onSelect: void 0,
                            onClose: t,
                            children: [
                                r &&
                                    (0, i.jsx)(A.Dr, {
                                        id: "cancel-boost",
                                        label: y.intl.string(y.t.twFU3R),
                                        color: "danger",
                                        disabled: c,
                                        subtext: c ? y.intl.string(y.t.mOWsF1) : void 0,
                                        action: () => {
                                            t(),
                                                (0, g.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, i.jsx)(E.default, { ...e, guildBoostSlot: n }),
                                                );
                                        },
                                    }),
                                o &&
                                    (0, i.jsx)(A.Dr, {
                                        id: "uncancel-boost",
                                        label: y.intl.string(y.t["2glQNp"]),
                                        disabled: c,
                                        subtext: c ? y.intl.string(y.t.mOWsF1) : void 0,
                                        action: () => {
                                            t(),
                                                (0, g.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, i.jsx)(T.default, { ...e, guildBoostSlotId: n.id }),
                                                );
                                        },
                                    }),
                            ],
                        });
                    },
                    align: "right",
                    position: "bottom",
                    children: (e) =>
                        (0, i.jsx)(h.D, {
                            innerRef: S,
                            "aria-label": y.intl.string(y.t["UKOtz+"]),
                            className: j.Mj,
                            ...e,
                            children: (0, i.jsx)(p.j, { size: "xs", color: x.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                        }),
                }),
        ],
    });
}
