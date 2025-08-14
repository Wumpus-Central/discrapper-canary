n.d(t, {
    Z: () => D,
    c: () => M,
}),
    n(388685);
var i = n(255367),
    r = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(755721),
    c = n(481060),
    d = n(131388),
    u = n(313201),
    m = n(160404),
    f = n(351402),
    g = n(768581),
    h = n(817460),
    p = n(584825),
    v = n(290348),
    j = n(934826),
    b = n(768318),
    x = n(570533),
    _ = n(971792),
    y = n(629262),
    N = n(761966),
    Z = n(893729),
    O = n(845970),
    I = n(882101),
    C = n(11705),
    T = n(81273),
    P = n(293810),
    S = n(981631),
    E = n(388032),
    w = n(126683);
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let z = (e) => {
        let { benefits: t, header: n, guildId: l } = e,
            [a, s] = r.useState(!1),
            o = a ? t : t.slice(0, 5),
            d = t.length > 5,
            m = t.length - 5,
            f = E.intl.formatToPlainString(E.t["XSdy7+"], { numTruncated: m }),
            g = (0, u.Dt)();
        return 0 === t.length
            ? null
            : (0, i.jsxs)("div", {
                  className: w.benefitsSection,
                  children: [
                      (0, i.jsx)(c.X6q, {
                          variant: "text-xs/bold",
                          color: "header-secondary",
                          className: w.sectionHeader,
                          id: g,
                          children: n,
                      }),
                      (0, i.jsx)(c.LZC, { size: 12 }),
                      (0, i.jsx)("ul", {
                          className: w.benefitsList,
                          "aria-labelledby": g,
                          children: o.map((e, t) =>
                              (0, i.jsx)(
                                  "li",
                                  {
                                      children: (0, i.jsx)(
                                          O.Z,
                                          {
                                              guildId: l,
                                              benefit: e,
                                          },
                                          (0, h.ab)(e),
                                      ),
                                  },
                                  t,
                              ),
                          ),
                      }),
                      d &&
                          (0, i.jsx)(R, {
                              isViewAll: a,
                              onToggle: () => s((e) => !e),
                              showMoreText: f,
                          }),
                  ],
              });
    },
    A = (e) => {
        let { guildId: t, listingId: n } = e,
            r = (0, x.Z)(t),
            [l] = v.XZ(n, t),
            a = r.filter((e) => l.has(e.id));
        return 0 === a.length
            ? null
            : (0, i.jsxs)("div", {
                  className: w.benefitsSection,
                  children: [
                      (0, i.jsx)(c.X6q, {
                          variant: "text-xs/bold",
                          color: "header-secondary",
                          className: w.sectionHeader,
                          children: E.intl.format(E.t.NAnXEh, { count: a.length }),
                      }),
                      (0, i.jsx)(c.LZC, { size: 12 }),
                      (0, i.jsx)("div", {
                          className: w.emojiList,
                          children: a.map((e, t) => {
                              var n;
                              return (0, i.jsx)(
                                  c.ua7,
                                  {
                                      text: e.name,
                                      "aria-label": !1,
                                      children: (t) =>
                                          (0, i.jsx)(
                                              "img",
                                              k(L({}, t), {
                                                  className: w.emojiListEmoji,
                                                  src: g.ZP.getEmojiURL({
                                                      id: e.id,
                                                      animated: e.animated,
                                                      size: 24,
                                                  }),
                                                  width: 24,
                                                  height: 24,
                                                  alt: e.name,
                                              }),
                                          ),
                                  },
                                  null != (n = e.id) ? n : t,
                              );
                          }),
                      }),
                  ],
              });
    },
    M = (e) => {
        let { listingId: t, guildId: n, className: r } = e,
            l = (0, _.Z)(n, t),
            [s] = v.UE(t),
            o = (0, y.Z)(s),
            [d] = v.R7(t),
            u = v.qs(t, n),
            [m] = v.XZ(t, n);
        return null == l && 0 === o.length && 0 === d.length && 0 === m.size
            ? null
            : (0, i.jsxs)("div", {
                  className: a()(w.subscriptionPerks, r),
                  children: [
                      null != l &&
                          (0, i.jsxs)(c.y5t, {
                              component: (0, i.jsx)(c.X6q, {
                                  variant: "text-xs/bold",
                                  color: "header-secondary",
                                  className: w.sectionHeader,
                                  children: E.intl.string(E.t.FJZmY2),
                              }),
                              children: [
                                  (0, i.jsx)(c.LZC, { size: 8 }),
                                  (0, i.jsx)(Z.Z, {
                                      role: u,
                                      guildId: n,
                                      className: w.roleMessagePreview,
                                  }),
                              ],
                          }),
                      (0, i.jsx)(z, {
                          header: E.intl.string(E.t.LtfhAg),
                          benefits: o,
                          guildId: n,
                      }),
                      (0, i.jsx)(z, {
                          header: E.intl.string(E.t["8oxWpK"]),
                          benefits: d,
                          guildId: n,
                      }),
                      (0, i.jsx)(A, {
                          guildId: n,
                          listingId: t,
                      }),
                  ],
              });
    },
    R = (e) => {
        let t,
            { onToggle: n, isViewAll: r, showMoreText: l } = e;
        return (
            (t = r
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          E.intl.string(E.t["r/xxPT"]),
                          (0, i.jsx)(c.u04, {
                              size: "md",
                              color: "currentColor",
                              className: w.toggleTruncationButtonIcon,
                          }),
                      ],
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          l,
                          (0, i.jsx)(c.CJ0, {
                              size: "md",
                              color: "currentColor",
                              className: w.toggleTruncationButtonIcon,
                          }),
                      ],
                  })),
            (0, i.jsx)(o.zx, {
                look: o.zx.Looks.BLANK,
                size: o.zx.Sizes.NONE,
                className: w.toggleTruncationButton,
                innerClassName: w.toggleTruncationButtonInner,
                onClick: n,
                children: t,
            })
        );
    },
    D = (e) => {
        var t;
        let { listingId: n, guildId: l, groupListingId: u, analyticsLocation: g } = e,
            x = (0, p.jO)(n),
            {
                openModal: _,
                canOpenModal: y,
                cannotOpenReason: Z,
                isCheckingTrialEligibility: O,
            } = (0, T.Z)(x, l, u, g),
            z = (0, s.e7)([f.Z], () => f.Z.isSyncing),
            { activeSubscription: A, activeSubscriptionListing: D } = (0, j.Z)(u),
            B = (null == D ? void 0 : D.id) === n,
            F = (null == A ? void 0 : A.status) === S.O0b.CANCELED,
            [G, U] = r.useState(!1),
            [H, W] = r.useState(!1),
            Y = r.useCallback((e) => {
                let t = !1;
                null != e && (t = e.scrollHeight - e.clientHeight > 1), W(t);
            }, []),
            [K] = v._T(n),
            [V] = v.PK(n),
            [X] = v.TT(n),
            [q] = v.F2(n),
            J = (0, b.Z)(l, n),
            Q = null != X && null == A && J,
            $ = (0, d.Z)(P.iP),
            [ee, et] = r.useState(!1),
            en = ee || !$,
            ei = (0, s.e7)([m.Z], () => m.Z.isViewingServerShop(l)),
            er = (null == x ? void 0 : x.published) === !0,
            el = (null == x ? void 0 : x.soft_deleted) === !0,
            ea = E.intl.string(E.t.KzmEAw);
        return (er || ei) && !el
            ? (0, i.jsxs)("article", {
                  className: w.container,
                  "aria-label": K,
                  children: [
                      Q &&
                          (0, i.jsxs)("div", {
                              className: a()(w.tierTrialIndicator, w.tierTopIndicator),
                              children: [
                                  E.intl.format(E.t.L2ouio, {
                                      trialPeriodDuration: (0, h.iG)({
                                          interval: X.interval,
                                          interval_count: X.interval_count,
                                      }),
                                  }),
                                  (0, i.jsx)(c.ua7, {
                                      clickableOnMobile: !0,
                                      text: E.intl.formatToPlainString(E.t.FYyR4u, {
                                          activeTrialUserLimit: null != q ? q : 0,
                                      }),
                                      children: (e) =>
                                          (0, i.jsx)(
                                              c.d3s,
                                              L(
                                                  {
                                                      size: "xs",
                                                      color: "currentColor",
                                                      className: w.tierTrialIndicatorIcon,
                                                  },
                                                  e,
                                              ),
                                          ),
                                  }),
                              ],
                          }),
                      (0, i.jsxs)("div", {
                          className: Q ? void 0 : w.cardContainerWithoutTopIndicator,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: w.tierInfoContainer,
                                  children: [
                                      $
                                          ? (0, i.jsx)(C.e, {
                                                listingId: n,
                                                isListingPublished: er,
                                                expanded: en,
                                                onToggleExpanded: () => et((e) => !e),
                                            })
                                          : (0, i.jsx)(I.xv, {
                                                listingId: n,
                                                isListingPublished: er,
                                            }),
                                      en &&
                                          (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  $ && (0, i.jsx)("div", { className: w.divider }),
                                                  B
                                                      ? (0, i.jsx)(o.zx, {
                                                            fullWidth: !0,
                                                            look: o.zx.Looks.OUTLINED,
                                                            color: o.zx.Colors.PRIMARY,
                                                            disabled: !0,
                                                            children: F
                                                                ? E.intl.string(E.t.iKHmu7)
                                                                : E.intl.string(E.t.XvAuMj),
                                                        })
                                                      : (0, i.jsx)(c.ua7, {
                                                            text: y ? null : Z,
                                                            "aria-label": null != (t = y && Z) && t,
                                                            children: (e) =>
                                                                (0, i.jsx)(
                                                                    N.Z,
                                                                    k(L({}, e), {
                                                                        fullWidth: !0,
                                                                        disabled: !y || z,
                                                                        submitting: O,
                                                                        onClick: _,
                                                                        onlyShineOnHover: !0,
                                                                        children: E.intl.string(E.t.fM5Zsb),
                                                                    }),
                                                                ),
                                                        }),
                                                  (0, i.jsx)(c.LZC, { size: 16 }),
                                                  (0, i.jsx)(c.Text, {
                                                      variant: "text-sm/normal",
                                                      color: "text-default",
                                                      className: a()((!H || !G) && w.tierDescriptionTruncate),
                                                      children: (0, i.jsx)("div", {
                                                          ref: Y,
                                                          children: V,
                                                      }),
                                                  }),
                                                  H &&
                                                      (0, i.jsx)(R, {
                                                          isViewAll: G,
                                                          onToggle: () => U((e) => !e),
                                                          showMoreText: ea,
                                                      }),
                                              ],
                                          }),
                                  ],
                              }),
                              en &&
                                  (0, i.jsx)(c.y5t, {
                                      children: (0, i.jsx)(M, {
                                          listingId: n,
                                          guildId: l,
                                      }),
                                  }),
                          ],
                      }),
                  ],
              })
            : null;
    };
