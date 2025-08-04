(n.d(t, {
    Z: () => F,
    c: () => D
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(755721),
    c = n(481060),
    d = n(131388),
    u = n(313201),
    m = n(160404),
    p = n(351402),
    f = n(768581),
    h = n(817460),
    g = n(584825),
    C = n(290348),
    _ = n(934826),
    b = n(768318),
    v = n(570533),
    j = n(971792),
    y = n(629262),
    E = n(761966),
    x = n(893729),
    O = n(845970),
    N = n(882101),
    P = n(11705),
    I = n(81273),
    T = n(293810),
    S = n(981631),
    Z = n(388032),
    L = n(492077);
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
function w(e, t) {
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
            [a, s] = i.useState(!1),
            o = a ? t : t.slice(0, 5),
            d = t.length > 5,
            m = t.length - 5,
            p = Z.intl.formatToPlainString(Z.t['XSdy7+'], { numTruncated: m }),
            f = (0, u.Dt)();
        return 0 === t.length
            ? null
            : (0, r.jsxs)('div', {
                  className: L.benefitsSection,
                  children: [
                      (0, r.jsx)(c.X6q, {
                          variant: 'text-xs/bold',
                          color: 'header-secondary',
                          className: L.sectionHeader,
                          id: f,
                          children: n
                      }),
                      (0, r.jsx)(c.LZC, { size: 12 }),
                      (0, r.jsx)('ul', {
                          className: L.benefitsList,
                          'aria-labelledby': f,
                          children: o.map((e, t) =>
                              (0, r.jsx)(
                                  'li',
                                  {
                                      children: (0, r.jsx)(
                                          O.Z,
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
                      d &&
                          (0, r.jsx)(k, {
                              isViewAll: a,
                              onToggle: () => s((e) => !e),
                              showMoreText: p
                          })
                  ]
              });
    },
    R = (e) => {
        let { guildId: t, listingId: n } = e,
            i = (0, v.Z)(t),
            [l] = C.XZ(n, t),
            a = i.filter((e) => l.has(e.id));
        return 0 === a.length
            ? null
            : (0, r.jsxs)('div', {
                  className: L.benefitsSection,
                  children: [
                      (0, r.jsx)(c.X6q, {
                          variant: 'text-xs/bold',
                          color: 'header-secondary',
                          className: L.sectionHeader,
                          children: Z.intl.format(Z.t.NAnXEh, { count: a.length })
                      }),
                      (0, r.jsx)(c.LZC, { size: 12 }),
                      (0, r.jsx)('div', {
                          className: L.emojiList,
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
                                              w(A({}, t), {
                                                  className: L.emojiListEmoji,
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
            l = (0, j.Z)(n, t),
            [s] = C.UE(t),
            o = (0, y.Z)(s),
            [d] = C.R7(t),
            u = C.qs(t, n),
            [m] = C.XZ(t, n);
        return null == l && 0 === o.length && 0 === d.length && 0 === m.size
            ? null
            : (0, r.jsxs)('div', {
                  className: a()(L.subscriptionPerks, i),
                  children: [
                      null != l &&
                          (0, r.jsxs)(c.y5t, {
                              component: (0, r.jsx)(c.X6q, {
                                  variant: 'text-xs/bold',
                                  color: 'header-secondary',
                                  className: L.sectionHeader,
                                  children: Z.intl.string(Z.t.FJZmY2)
                              }),
                              children: [
                                  (0, r.jsx)(c.LZC, { size: 8 }),
                                  (0, r.jsx)(x.Z, {
                                      role: u,
                                      guildId: n,
                                      className: L.roleMessagePreview
                                  })
                              ]
                          }),
                      (0, r.jsx)(M, {
                          header: Z.intl.string(Z.t.LtfhAg),
                          benefits: o,
                          guildId: n
                      }),
                      (0, r.jsx)(M, {
                          header: Z.intl.string(Z.t['8oxWpK']),
                          benefits: d,
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
                              className: L.toggleTruncationButtonIcon
                          })
                      ]
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          l,
                          (0, r.jsx)(c.CJ0, {
                              size: 'md',
                              color: 'currentColor',
                              className: L.toggleTruncationButtonIcon
                          })
                      ]
                  })),
            (0, r.jsx)(o.zx, {
                look: o.zx.Looks.BLANK,
                size: o.zx.Sizes.NONE,
                className: L.toggleTruncationButton,
                innerClassName: L.toggleTruncationButtonInner,
                onClick: n,
                children: t
            })
        );
    },
    F = (e) => {
        var t;
        let { listingId: n, guildId: l, groupListingId: u, analyticsLocation: f } = e,
            v = (0, g.jO)(n),
            { openModal: j, canOpenModal: y, cannotOpenReason: x, isCheckingTrialEligibility: O } = (0, I.Z)(v, l, u, f),
            M = (0, s.e7)([p.Z], () => p.Z.isSyncing),
            { activeSubscription: R, activeSubscriptionListing: F } = (0, _.Z)(u),
            U = (null == F ? void 0 : F.id) === n,
            z = (null == R ? void 0 : R.status) === S.O0b.CANCELED,
            [B, H] = i.useState(!1),
            [G, W] = i.useState(!1),
            Y = i.useCallback((e) => {
                let t = !1;
                (null != e && (t = e.scrollHeight - e.clientHeight > 1), W(t));
            }, []),
            [V] = C._T(n),
            [X] = C.PK(n),
            [K] = C.TT(n),
            [q] = C.F2(n),
            Q = (0, b.Z)(l, n),
            J = null != K && null == R && Q,
            $ = (0, d.Z)(T.iP),
            [ee, et] = i.useState(!1),
            en = ee || !$,
            er = (0, s.e7)([m.Z], () => m.Z.isViewingServerShop(l)),
            ei = (null == v ? void 0 : v.published) === !0,
            el = (null == v ? void 0 : v.soft_deleted) === !0,
            ea = Z.intl.string(Z.t.KzmEAw);
        return (ei || er) && !el
            ? (0, r.jsxs)('article', {
                  className: L.container,
                  'aria-label': V,
                  children: [
                      J &&
                          (0, r.jsxs)('div', {
                              className: a()(L.tierTrialIndicator, L.tierTopIndicator),
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
                                                      className: L.tierTrialIndicatorIcon
                                                  },
                                                  e
                                              )
                                          )
                                  })
                              ]
                          }),
                      (0, r.jsxs)('div', {
                          className: J ? void 0 : L.cardContainerWithoutTopIndicator,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: L.tierInfoContainer,
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
                                                  $ && (0, r.jsx)('div', { className: L.divider }),
                                                  U
                                                      ? (0, r.jsx)(o.zx, {
                                                            fullWidth: !0,
                                                            look: o.zx.Looks.OUTLINED,
                                                            color: o.zx.Colors.PRIMARY,
                                                            disabled: !0,
                                                            children: z ? Z.intl.string(Z.t.iKHmu7) : Z.intl.string(Z.t.XvAuMj)
                                                        })
                                                      : (0, r.jsx)(c.ua7, {
                                                            text: y ? null : x,
                                                            'aria-label': null != (t = y && x) && t,
                                                            children: (e) =>
                                                                (0, r.jsx)(
                                                                    E.Z,
                                                                    w(A({}, e), {
                                                                        fullWidth: !0,
                                                                        disabled: !y || M,
                                                                        submitting: O,
                                                                        onClick: j,
                                                                        onlyShineOnHover: !0,
                                                                        children: Z.intl.string(Z.t.fM5Zsb)
                                                                    })
                                                                )
                                                        }),
                                                  (0, r.jsx)(c.LZC, { size: 16 }),
                                                  (0, r.jsx)(c.Text, {
                                                      variant: 'text-sm/normal',
                                                      color: 'text-default',
                                                      className: a()((!G || !B) && L.tierDescriptionTruncate),
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
