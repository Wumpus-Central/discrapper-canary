(n.d(t, {
    Z: () => F,
    c: () => D
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(755721),
    c = n(481060),
    u = n(131388),
    d = n(313201),
    p = n(160404),
    m = n(351402),
    f = n(768581),
    h = n(817460),
    g = n(584825),
    b = n(290348),
    v = n(934826),
    y = n(768318),
    j = n(570533),
    C = n(971792),
    _ = n(629262),
    O = n(761966),
    x = n(893729),
    E = n(845970),
    N = n(882101),
    P = n(11705),
    I = n(81273),
    S = n(293810),
    T = n(981631),
    Z = n(388032),
    w = n(492077);
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let M = (e) => {
        let { benefits: t, header: n, guildId: l } = e,
            [a, o] = i.useState(!1),
            s = a ? t : t.slice(0, 5),
            u = t.length > 5,
            p = t.length - 5,
            m = Z.intl.formatToPlainString(Z.t['XSdy7+'], { numTruncated: p }),
            f = (0, d.Dt)();
        return 0 === t.length
            ? null
            : (0, r.jsxs)('div', {
                  className: w.benefitsSection,
                  children: [
                      (0, r.jsx)(c.X6q, {
                          variant: 'text-xs/bold',
                          color: 'header-secondary',
                          className: w.sectionHeader,
                          id: f,
                          children: n
                      }),
                      (0, r.jsx)(c.LZC, { size: 12 }),
                      (0, r.jsx)('ul', {
                          className: w.benefitsList,
                          'aria-labelledby': f,
                          children: s.map((e, t) =>
                              (0, r.jsx)(
                                  'li',
                                  {
                                      children: (0, r.jsx)(
                                          E.Z,
                                          {
                                              guildId: l,
                                              benefit: e
                                          },
                                          (0, h.ab)(e)
                                      )
                                  },
                                  t
                              )
                          )
                      }),
                      u &&
                          (0, r.jsx)(k, {
                              isViewAll: a,
                              onToggle: () => o((e) => !e),
                              showMoreText: m
                          })
                  ]
              });
    },
    R = (e) => {
        let { guildId: t, listingId: n } = e,
            i = (0, j.Z)(t),
            [l] = b.XZ(n, t),
            a = i.filter((e) => l.has(e.id));
        return 0 === a.length
            ? null
            : (0, r.jsxs)('div', {
                  className: w.benefitsSection,
                  children: [
                      (0, r.jsx)(c.X6q, {
                          variant: 'text-xs/bold',
                          color: 'header-secondary',
                          className: w.sectionHeader,
                          children: Z.intl.format(Z.t.NAnXEh, { count: a.length })
                      }),
                      (0, r.jsx)(c.LZC, { size: 12 }),
                      (0, r.jsx)('div', {
                          className: w.emojiList,
                          children: a.map((e, t) => {
                              var n;
                              return (0, r.jsx)(
                                  c.ua7,
                                  {
                                      text: e.name,
                                      'aria-label': !1,
                                      children: (t) =>
                                          (0, r.jsx)(
                                              'img',
                                              L(A({}, t), {
                                                  className: w.emojiListEmoji,
                                                  src: f.ZP.getEmojiURL({
                                                      id: e.id,
                                                      animated: e.animated,
                                                      size: 24
                                                  }),
                                                  width: 24,
                                                  height: 24,
                                                  alt: e.name
                                              })
                                          )
                                  },
                                  null != (n = e.id) ? n : t
                              );
                          })
                      })
                  ]
              });
    },
    D = (e) => {
        let { listingId: t, guildId: n, className: i } = e,
            l = (0, C.Z)(n, t),
            [o] = b.UE(t),
            s = (0, _.Z)(o),
            [u] = b.R7(t),
            d = b.qs(t, n),
            [p] = b.XZ(t, n);
        return null == l && 0 === s.length && 0 === u.length && 0 === p.size
            ? null
            : (0, r.jsxs)('div', {
                  className: a()(w.subscriptionPerks, i),
                  children: [
                      null != l &&
                          (0, r.jsxs)(c.y5t, {
                              component: (0, r.jsx)(c.X6q, {
                                  variant: 'text-xs/bold',
                                  color: 'header-secondary',
                                  className: w.sectionHeader,
                                  children: Z.intl.string(Z.t.FJZmY2)
                              }),
                              children: [
                                  (0, r.jsx)(c.LZC, { size: 8 }),
                                  (0, r.jsx)(x.Z, {
                                      role: d,
                                      guildId: n,
                                      className: w.roleMessagePreview
                                  })
                              ]
                          }),
                      (0, r.jsx)(M, {
                          header: Z.intl.string(Z.t.LtfhAg),
                          benefits: s,
                          guildId: n
                      }),
                      (0, r.jsx)(M, {
                          header: Z.intl.string(Z.t['8oxWpK']),
                          benefits: u,
                          guildId: n
                      }),
                      (0, r.jsx)(R, {
                          guildId: n,
                          listingId: t
                      })
                  ]
              });
    },
    k = (e) => {
        let t,
            { onToggle: n, isViewAll: i, showMoreText: l } = e;
        return (
            (t = i
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          Z.intl.string(Z.t['r/xxPT']),
                          (0, r.jsx)(c.u04, {
                              size: 'md',
                              color: 'currentColor',
                              className: w.toggleTruncationButtonIcon
                          })
                      ]
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          l,
                          (0, r.jsx)(c.CJ0, {
                              size: 'md',
                              color: 'currentColor',
                              className: w.toggleTruncationButtonIcon
                          })
                      ]
                  })),
            (0, r.jsx)(s.zx, {
                look: s.zx.Looks.BLANK,
                size: s.zx.Sizes.NONE,
                className: w.toggleTruncationButton,
                innerClassName: w.toggleTruncationButtonInner,
                onClick: n,
                children: t
            })
        );
    },
    F = (e) => {
        var t;
        let { listingId: n, guildId: l, groupListingId: d, analyticsLocation: f } = e,
            j = (0, g.jO)(n),
            { openModal: C, canOpenModal: _, cannotOpenReason: x, isCheckingTrialEligibility: E } = (0, I.Z)(j, l, d, f),
            M = (0, o.e7)([m.Z], () => m.Z.isSyncing),
            { activeSubscription: R, activeSubscriptionListing: F } = (0, v.Z)(d),
            U = (null == F ? void 0 : F.id) === n,
            z = (null == R ? void 0 : R.status) === T.O0b.CANCELED,
            [B, H] = i.useState(!1),
            [G, W] = i.useState(!1),
            Y = i.useCallback((e) => {
                let t = !1;
                (null != e && (t = e.scrollHeight - e.clientHeight > 1), W(t));
            }, []),
            [V] = b._T(n),
            [X] = b.PK(n),
            [K] = b.TT(n),
            [q] = b.F2(n),
            Q = (0, y.Z)(l, n),
            J = null != K && null == R && Q,
            $ = (0, u.Z)(S.iP),
            [ee, et] = i.useState(!1),
            en = ee || !$,
            er = (0, o.e7)([p.Z], () => p.Z.isViewingServerShop(l)),
            ei = (null == j ? void 0 : j.published) === !0,
            el = (null == j ? void 0 : j.soft_deleted) === !0,
            ea = Z.intl.string(Z.t.KzmEAw);
        return (ei || er) && !el
            ? (0, r.jsxs)('article', {
                  className: w.container,
                  'aria-label': V,
                  children: [
                      J &&
                          (0, r.jsxs)('div', {
                              className: a()(w.tierTrialIndicator, w.tierTopIndicator),
                              children: [
                                  Z.intl.format(Z.t.L2ouio, {
                                      trialPeriodDuration: (0, h.iG)({
                                          interval: K.interval,
                                          interval_count: K.interval_count
                                      })
                                  }),
                                  (0, r.jsx)(c.ua7, {
                                      clickableOnMobile: !0,
                                      text: Z.intl.formatToPlainString(Z.t.FYyR4u, { activeTrialUserLimit: null != q ? q : 0 }),
                                      children: (e) =>
                                          (0, r.jsx)(
                                              c.d3s,
                                              A(
                                                  {
                                                      size: 'xs',
                                                      color: 'currentColor',
                                                      className: w.tierTrialIndicatorIcon
                                                  },
                                                  e
                                              )
                                          )
                                  })
                              ]
                          }),
                      (0, r.jsxs)('div', {
                          className: J ? void 0 : w.cardContainerWithoutTopIndicator,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: w.tierInfoContainer,
                                  children: [
                                      $
                                          ? (0, r.jsx)(P.e, {
                                                listingId: n,
                                                isListingPublished: ei,
                                                expanded: en,
                                                onToggleExpanded: () => et((e) => !e)
                                            })
                                          : (0, r.jsx)(N.xv, {
                                                listingId: n,
                                                isListingPublished: ei
                                            }),
                                      en &&
                                          (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  $ && (0, r.jsx)('div', { className: w.divider }),
                                                  U
                                                      ? (0, r.jsx)(s.zx, {
                                                            fullWidth: !0,
                                                            look: s.zx.Looks.OUTLINED,
                                                            color: s.zx.Colors.PRIMARY,
                                                            disabled: !0,
                                                            children: z ? Z.intl.string(Z.t.iKHmu7) : Z.intl.string(Z.t.XvAuMj)
                                                        })
                                                      : (0, r.jsx)(c.ua7, {
                                                            text: _ ? null : x,
                                                            'aria-label': null != (t = _ && x) && t,
                                                            children: (e) =>
                                                                (0, r.jsx)(
                                                                    O.Z,
                                                                    L(A({}, e), {
                                                                        fullWidth: !0,
                                                                        disabled: !_ || M,
                                                                        submitting: E,
                                                                        onClick: C,
                                                                        onlyShineOnHover: !0,
                                                                        children: Z.intl.string(Z.t.fM5Zsb)
                                                                    })
                                                                )
                                                        }),
                                                  (0, r.jsx)(c.LZC, { size: 16 }),
                                                  (0, r.jsx)(c.Text, {
                                                      variant: 'text-sm/normal',
                                                      color: 'text-default',
                                                      className: a()((!G || !B) && w.tierDescriptionTruncate),
                                                      children: (0, r.jsx)('div', {
                                                          ref: Y,
                                                          children: X
                                                      })
                                                  }),
                                                  G &&
                                                      (0, r.jsx)(k, {
                                                          isViewAll: B,
                                                          onToggle: () => H((e) => !e),
                                                          showMoreText: ea
                                                      })
                                              ]
                                          })
                                  ]
                              }),
                              en &&
                                  (0, r.jsx)(c.y5t, {
                                      children: (0, r.jsx)(D, {
                                          listingId: n,
                                          guildId: l
                                      })
                                  })
                          ]
                      })
                  ]
              })
            : null;
    };
