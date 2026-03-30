n.d(t, { A: () => S }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    d = n(983511),
    c = n(342744),
    u = n(987144),
    m = n(166403),
    _ = n(473145),
    g = n(927578),
    x = n(311092),
    A = n(652215),
    h = n(788868),
    p = n(985018),
    T = n(143753),
    f = n(410229);
function S(e) {
    let { guildBoostSlots: t, fractionalPremiumState: l } = e,
        d = (0, r.bG)([m.A], () => m.A.getPremiumTypeSubscription()),
        { unappliedSlots: c, numActiveSlots: x } = s.useMemo(() => {
            let e = [],
                n = 0;
            for (let i of t) !(0, _.I5)(i) && n++, null == i.premiumGuildSubscription && e.push(i);
            return { unappliedSlots: e, numActiveSlots: n };
        }, [t]),
        S = x > (null != d ? g.Ay.getNumIncludedPremiumGuildSubscriptionSlots(d.planId) : 0),
        b = d?.isPausedOrPausePending === !0 && l === h.xc.NONE;
    return 0 === c.length
        ? null
        : (0, i.jsxs)("div", {
              className: T.Nr,
              children: [
                  (0, i.jsxs)("div", {
                      className: T.MY,
                      children: [
                          (0, i.jsxs)("div", {
                              className: T._L,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: T.MD,
                                      children: [
                                          (0, i.jsx)("img", { alt: "", className: T.F8, src: f.A }),
                                          (0, i.jsx)("div", {
                                              className: a()(T.qS, "theme-dark"),
                                              children: (0, i.jsx)("span", { className: T.Vv, children: c.length }),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: T.Qp,
                                      children: [
                                          (0, i.jsx)(o.Text, {
                                              variant: "heading-md/semibold",
                                              color: "text-default",
                                              tag: "span",
                                              children: p.intl.format(p.t.BPadnO, {
                                                  numUnappliedGuildBoostSlots: c.length,
                                              }),
                                          }),
                                          (0, i.jsx)(o.Text, {
                                              variant: "text-xs/semibold",
                                              color: "text-subtle",
                                              children: p.intl.format(p.t.Kaw82o, {
                                                  numUnappliedGuildBoostSlots: c.length,
                                              }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, i.jsx)(o.Button, {
                              variant: "primary",
                              size: "sm",
                              icon: o._Jp,
                              text: p.intl.string(p.t.BMx1iy),
                              disabled: b,
                              onClick: () => {
                                  (0, o.mMO)(async () => {
                                      let { default: e } = await Promise.resolve().then(n.bind(n, 770101));
                                      return (t) =>
                                          (0, i.jsx)(e, {
                                              ...t,
                                              onSelectGuild: (e) => {
                                                  t.onClose(),
                                                      (0, u.g)({
                                                          analyticsLocations: [],
                                                          analyticsLocation: {
                                                              page: A.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                              section: A.JJy.SETTINGS_PREMIUM,
                                                              object: A.ZSU.BUTTON_CTA,
                                                              objectType: A.AnalyticsObjectTypes.BUY,
                                                          },
                                                          guild: e,
                                                      });
                                              },
                                          });
                                  });
                              },
                          }),
                      ],
                  }),
                  c.map((e, t) =>
                      (0, i.jsx)(
                          E,
                          {
                              slot: e,
                              isLast: t === c.length - 1,
                              isCancelable: S && !(0, _.I5)(e),
                              isCanceled: (0, _.I5)(e),
                              premiumSubscription: d,
                              modificationsDisabled: b,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function E(e) {
    let t,
        { slot: n, isLast: l, isCancelable: r, isCanceled: u, premiumSubscription: m, modificationsDisabled: _ } = e,
        g = s.useRef(null),
        A = s.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n.cooldownEndsAt]);
    t =
        u && null != m
            ? (0, i.jsx)(o.Text, {
                  variant: "text-sm/medium",
                  color: "text-subtle",
                  children: p.intl.format(p.t.Z4ULRD, { date: m.currentPeriodEnd }),
              })
            : n.isOnCooldown() && null != A
              ? (0, i.jsx)(x.A, { cooldown: A.getTime() })
              : (0, i.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: p.intl.string(p.t["2mcafz"]),
                });
    let h = r || u;
    return (0, i.jsxs)("div", {
        className: a()(T.iq, { [T.Mt]: l }),
        children: [
            (0, i.jsxs)("div", {
                className: T.kd,
                children: [(0, i.jsx)("img", { alt: "", className: T.bB, src: f.A }), t],
            }),
            h &&
                (0, i.jsx)(o.YNO, {
                    targetElementRef: g,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsxs)(o.W1t, {
                            navId: "unapplied-boost-actions",
                            "aria-label": p.intl.string(p.t.ogxXGq),
                            onSelect: void 0,
                            onClose: t,
                            children: [
                                r &&
                                    (0, i.jsx)(o.Drp, {
                                        id: "cancel-boost",
                                        label: p.intl.string(p.t.twFU3R),
                                        color: "danger",
                                        disabled: _,
                                        subtext: _ ? p.intl.string(p.t.mOWsF1) : void 0,
                                        action: () => {
                                            t(),
                                                (0, o.mMO)(
                                                    async () => (e) =>
                                                        (0, i.jsx)(d.default, { ...e, guildBoostSlot: n }),
                                                );
                                        },
                                    }),
                                u &&
                                    (0, i.jsx)(o.Drp, {
                                        id: "uncancel-boost",
                                        label: p.intl.string(p.t["2glQNp"]),
                                        disabled: _,
                                        subtext: _ ? p.intl.string(p.t.mOWsF1) : void 0,
                                        action: () => {
                                            t(),
                                                (0, o.mMO)(
                                                    async () => (e) =>
                                                        (0, i.jsx)(c.default, { ...e, guildBoostSlotId: n.id }),
                                                );
                                        },
                                    }),
                            ],
                        });
                    },
                    align: "right",
                    position: "bottom",
                    children: (e) =>
                        (0, i.jsx)(o.DUT, {
                            innerRef: g,
                            "aria-label": p.intl.string(p.t["UKOtz+"]),
                            className: T.Mj,
                            ...e,
                            children: (0, i.jsx)(o.jNK, { size: "xs", color: o.LU0.colors.INTERACTIVE_TEXT_DEFAULT }),
                        }),
                }),
        ],
    });
}
