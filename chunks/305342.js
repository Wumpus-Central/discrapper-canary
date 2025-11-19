n.d(t, {
    Z: () => G,
    c: () => k,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(681715),
    c = n(481060),
    u = n(131388),
    d = n(313201),
    f = n(160404),
    _ = n(351402),
    p = n(768581),
    h = n(817460),
    m = n(584825),
    g = n(290348),
    E = n(934826),
    b = n(768318),
    y = n(570533),
    O = n(971792),
    v = n(629262),
    I = n(893729),
    T = n(549631),
    S = n(845970),
    A = n(882101),
    C = n(11705),
    N = n(81273),
    R = n(293810),
    P = n(981631),
    D = n(388032),
    w = n(546810);
let L = 24,
    x = 5,
    M = (e) => {
        let { benefits: t, header: n, guildId: a } = e,
            [o, s] = i.useState(!1),
            l = o ? t : t.slice(0, x),
            u = t.length > x,
            f = t.length - x,
            _ = D.intl.formatToPlainString(D.t.XSdy72, { numTruncated: f }),
            p = () => s((e) => !e),
            m = (0, d.Dt)();
        return 0 === t.length
            ? null
            : (0, r.jsxs)("div", {
                  className: w.benefitsSection,
                  children: [
                      (0, r.jsx)(c.Heading, {
                          variant: "text-xs/bold",
                          color: "header-secondary",
                          className: w.sectionHeader,
                          id: m,
                          children: n,
                      }),
                      (0, r.jsx)(c.LZC, { size: 12 }),
                      (0, r.jsx)("ul", {
                          className: w.benefitsList,
                          "aria-labelledby": m,
                          children: l.map((e, t) =>
                              (0, r.jsx)(
                                  "li",
                                  {
                                      children: (0, r.jsx)(
                                          S.Z,
                                          {
                                              guildId: a,
                                              benefit: e,
                                          },
                                          (0, h.ab)(e),
                                      ),
                                  },
                                  t,
                              ),
                          ),
                      }),
                      u &&
                          (0, r.jsx)(U, {
                              isViewAll: o,
                              onToggle: p,
                              showMoreText: _,
                          }),
                  ],
              });
    },
    j = (e) => {
        let { guildId: t, listingId: n } = e,
            i = (0, y.Z)(t),
            [a] = g.XZ(n, t),
            o = i.filter((e) => a.has(e.id));
        function s(e) {
            return p.ZP.getEmojiURL({
                id: e.id,
                animated: e.animated,
                size: L,
            });
        }
        return 0 === o.length
            ? null
            : (0, r.jsxs)("div", {
                  className: w.benefitsSection,
                  children: [
                      (0, r.jsx)(c.Heading, {
                          variant: "text-xs/bold",
                          color: "header-secondary",
                          className: w.sectionHeader,
                          children: D.intl.format(D.t.NAnXEo, { count: o.length }),
                      }),
                      (0, r.jsx)(c.LZC, { size: 12 }),
                      (0, r.jsx)("div", {
                          className: w.emojiList,
                          children: o.map((e, t) => {
                              var n;
                              return (0, r.jsx)(
                                  l.u,
                                  {
                                      text: e.name,
                                      "aria-label": !1,
                                      children: (0, r.jsx)("img", {
                                          className: w.emojiListEmoji,
                                          src: s(e),
                                          width: L,
                                          height: L,
                                          alt: e.name,
                                      }),
                                  },
                                  null != (n = e.id) ? n : t,
                              );
                          }),
                      }),
                  ],
              });
    },
    k = (e) => {
        let { listingId: t, guildId: n, className: i } = e,
            a = (0, O.Z)(n, t),
            [s] = g.UE(t),
            l = (0, v.Z)(s),
            [u] = g.R7(t),
            d = g.qs(t, n),
            [f] = g.XZ(t, n);
        return null == a && 0 === l.length && 0 === u.length && 0 === f.size
            ? null
            : (0, r.jsxs)("div", {
                  className: o()(w.subscriptionPerks, i),
                  children: [
                      null != a &&
                          (0, r.jsxs)(c.y5t, {
                              component: (0, r.jsx)(c.Heading, {
                                  variant: "text-xs/bold",
                                  color: "header-secondary",
                                  className: w.sectionHeader,
                                  children: D.intl.string(D.t.FJZmYx),
                              }),
                              children: [
                                  (0, r.jsx)(c.LZC, { size: 8 }),
                                  (0, r.jsx)(I.Z, {
                                      role: d,
                                      guildId: n,
                                      className: w.roleMessagePreview,
                                  }),
                              ],
                          }),
                      (0, r.jsx)(M, {
                          header: D.intl.string(D.t.LtfhAj),
                          benefits: l,
                          guildId: n,
                      }),
                      (0, r.jsx)(M, {
                          header: D.intl.string(D.t["8oxWpO"]),
                          benefits: u,
                          guildId: n,
                      }),
                      (0, r.jsx)(j, {
                          guildId: n,
                          listingId: t,
                      }),
                  ],
              });
    },
    U = (e) => {
        let { onToggle: t, isViewAll: n, showMoreText: i } = e,
            a = n ? D.intl.string(D.t["r/xxPU"]) : i;
        return (0, r.jsx)(c.Avr, {
            text: a,
            onClick: t,
            textVariant: "text-xs/medium",
            variant: "secondary",
        });
    },
    G = (e) => {
        let { listingId: t, guildId: n, groupListingId: a, analyticsLocation: d } = e,
            p = (0, m.jO)(t),
            {
                openModal: y,
                canOpenModal: O,
                cannotOpenReason: v,
                isCheckingTrialEligibility: I,
            } = (0, N.Z)(p, n, a, d),
            S = (0, s.e7)([_.Z], () => _.Z.isSyncing),
            { activeSubscription: L, activeSubscriptionListing: x } = (0, E.Z)(a),
            M = (null == x ? void 0 : x.id) === t,
            j = (null == L ? void 0 : L.status) === P.O0b.CANCELED,
            [G, B] = i.useState(!1),
            [Z, F] = i.useState(!1),
            V = i.useCallback((e) => {
                let t = !1;
                null != e && (t = e.scrollHeight - e.clientHeight > 1), F(t);
            }, []),
            [H] = g._T(t),
            [Y] = g.PK(t),
            [W] = g.TT(t),
            [K] = g.F2(t),
            z = (0, b.Z)(n, t),
            q = null != W && null == L && z,
            X = () => B((e) => !e),
            Q = (0, u.Z)(R.iP),
            [J, $] = i.useState(!1),
            ee = J || !Q,
            et = () => $((e) => !e),
            en = (0, s.e7)([f.Z], () => f.Z.isViewingServerShop(n)),
            er = (null == p ? void 0 : p.published) === !0,
            ei = (null == p ? void 0 : p.soft_deleted) === !0,
            ea = D.intl.string(D.t.KzmEA9);
        return (er || en) && !ei
            ? (0, r.jsxs)("article", {
                  className: w.container,
                  "aria-label": H,
                  children: [
                      q &&
                          (0, r.jsxs)("div", {
                              className: o()(w.tierTrialIndicator, w.tierTopIndicator),
                              children: [
                                  D.intl.format(D.t.L2ouip, {
                                      trialPeriodDuration: (0, h.iG)({
                                          interval: W.interval,
                                          interval_count: W.interval_count,
                                      }),
                                  }),
                                  (0, r.jsx)(l.u, {
                                      text: D.intl.formatToPlainString(D.t.FYyR4o, {
                                          activeTrialUserLimit: null != K ? K : 0,
                                      }),
                                      children: (0, r.jsx)(c.d3s, {
                                          size: "xs",
                                          color: "currentColor",
                                          className: w.tierTrialIndicatorIcon,
                                      }),
                                  }),
                              ],
                          }),
                      (0, r.jsxs)("div", {
                          className: q ? void 0 : w.cardContainerWithoutTopIndicator,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: w.tierInfoContainer,
                                  children: [
                                      Q
                                          ? (0, r.jsx)(C.e, {
                                                listingId: t,
                                                isListingPublished: er,
                                                expanded: ee,
                                                onToggleExpanded: et,
                                            })
                                          : (0, r.jsx)(A.xv, {
                                                listingId: t,
                                                isListingPublished: er,
                                            }),
                                      ee &&
                                          (0, r.jsxs)(c.Kqy, {
                                              gap: 16,
                                              children: [
                                                  Q && (0, r.jsx)("div", { className: w.divider }),
                                                  M
                                                      ? (0, r.jsx)(c.Button, {
                                                            disabled: !0,
                                                            fullWidth: !0,
                                                            variant: j ? "secondary" : "primary",
                                                            text: j
                                                                ? D.intl.string(D.t.iKHmu0)
                                                                : D.intl.string(D.t.XvAuMo),
                                                        })
                                                      : (0, r.jsxs)(r.Fragment, {
                                                            children: [
                                                                O
                                                                    ? null
                                                                    : (0, r.jsx)(c.Wn, {
                                                                          className: w.helpMessage,
                                                                          messageType: c.QYI.INFO,
                                                                          children: v,
                                                                      }),
                                                                (0, r.jsx)(c.Button, {
                                                                    fullWidth: !0,
                                                                    text: D.intl.string(D.t.fM5ZsX),
                                                                    disabled: !O || S,
                                                                    loading: I,
                                                                    onClick: y,
                                                                    icon: T.Z,
                                                                    variant: "primary",
                                                                }),
                                                            ],
                                                        }),
                                                  (0, r.jsxs)(c.Kqy, {
                                                      gap: 8,
                                                      align: "center",
                                                      children: [
                                                          (0, r.jsx)(c.Text, {
                                                              variant: "text-sm/normal",
                                                              color: "text-default",
                                                              className: o()((!Z || !G) && w.tierDescriptionTruncate),
                                                              children: (0, r.jsx)("div", {
                                                                  ref: V,
                                                                  children: Y,
                                                              }),
                                                          }),
                                                          Z &&
                                                              (0, r.jsx)(U, {
                                                                  isViewAll: G,
                                                                  onToggle: X,
                                                                  showMoreText: ea,
                                                              }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                  ],
                              }),
                              ee &&
                                  (0, r.jsx)(c.y5t, {
                                      children: (0, r.jsx)(k, {
                                          listingId: t,
                                          guildId: n,
                                      }),
                                  }),
                          ],
                      }),
                  ],
              })
            : null;
    };
