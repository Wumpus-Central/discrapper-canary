n.d(t, {
    Z: () => M,
    c: () => L
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(442837),
    s = n(481060),
    c = n(131388),
    d = n(313201),
    u = n(160404),
    p = n(351402),
    m = n(768581),
    f = n(817460),
    h = n(584825),
    g = n(290348),
    _ = n(934826),
    b = n(768318),
    v = n(570533),
    y = n(971792),
    x = n(629262),
    O = n(761966),
    E = n(893729),
    j = n(845970),
    N = n(882101),
    C = n(11705),
    I = n(81273),
    S = n(293810),
    P = n(981631),
    T = n(388032),
    A = n(776637);
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function Z(e, t) {
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
let k = (e) => {
        let { benefits: t, header: n, guildId: a } = e,
            [o, l] = i.useState(!1),
            c = o ? t : t.slice(0, 5),
            u = t.length > 5,
            p = t.length - 5,
            m = T.NW.formatToPlainString(T.t['XSdy7+'], { numTruncated: p }),
            h = (0, d.Dt)();
        return 0 === t.length
            ? null
            : (0, r.jsxs)('div', {
                  className: A.benefitsSection,
                  children: [
                      (0, r.jsx)(s.X6q, {
                          variant: 'text-xs/bold',
                          color: 'header-secondary',
                          className: A.sectionHeader,
                          id: h,
                          children: n
                      }),
                      (0, r.jsx)(s.LZC, { size: 12 }),
                      (0, r.jsx)('ul', {
                          className: A.benefitsList,
                          'aria-labelledby': h,
                          children: c.map((e, t) =>
                              (0, r.jsx)(
                                  'li',
                                  {
                                      children: (0, r.jsx)(
                                          j.Z,
                                          {
                                              guildId: a,
                                              benefit: e
                                          },
                                          (0, f.ab)(e)
                                      )
                                  },
                                  t
                              )
                          )
                      }),
                      u &&
                          (0, r.jsx)(D, {
                              isViewAll: o,
                              onToggle: () => l((e) => !e),
                              showMoreText: m
                          })
                  ]
              });
    },
    R = (e) => {
        let { guildId: t, listingId: n } = e,
            i = (0, v.Z)(t),
            [a] = g.XZ(n, t),
            o = i.filter((e) => a.has(e.id));
        return 0 === o.length
            ? null
            : (0, r.jsxs)('div', {
                  className: A.benefitsSection,
                  children: [
                      (0, r.jsx)(s.X6q, {
                          variant: 'text-xs/bold',
                          color: 'header-secondary',
                          className: A.sectionHeader,
                          children: T.NW.format(T.t.NAnXEh, { count: o.length })
                      }),
                      (0, r.jsx)(s.LZC, { size: 12 }),
                      (0, r.jsx)('div', {
                          className: A.emojiList,
                          children: o.map((e, t) => {
                              var n;
                              return (0, r.jsx)(
                                  s.ua7,
                                  {
                                      text: e.name,
                                      'aria-label': !1,
                                      children: (t) =>
                                          (0, r.jsx)(
                                              'img',
                                              Z(w({}, t), {
                                                  className: A.emojiListEmoji,
                                                  src: m.ZP.getEmojiURL({
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
                                  null !== (n = e.id) && void 0 !== n ? n : t
                              );
                          })
                      })
                  ]
              });
    },
    L = (e) => {
        let { listingId: t, guildId: n, className: i } = e,
            a = (0, y.Z)(n, t),
            [l] = g.UE(t),
            c = (0, x.Z)(l),
            [d] = g.R7(t),
            u = g.qs(t, n),
            [p] = g.XZ(t, n);
        return null == a && 0 === c.length && 0 === d.length && 0 === p.size
            ? null
            : (0, r.jsxs)('div', {
                  className: o()(A.subscriptionPerks, i),
                  children: [
                      null != a &&
                          (0, r.jsxs)(s.y5t, {
                              component: (0, r.jsx)(s.X6q, {
                                  variant: 'text-xs/bold',
                                  color: 'header-secondary',
                                  className: A.sectionHeader,
                                  children: T.NW.string(T.t.FJZmY2)
                              }),
                              children: [
                                  (0, r.jsx)(s.LZC, { size: 8 }),
                                  (0, r.jsx)(E.Z, {
                                      role: u,
                                      guildId: n,
                                      className: A.roleMessagePreview
                                  })
                              ]
                          }),
                      (0, r.jsx)(k, {
                          header: T.NW.string(T.t.LtfhAg),
                          benefits: c,
                          guildId: n
                      }),
                      (0, r.jsx)(k, {
                          header: T.NW.string(T.t['8oxWpK']),
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
    D = (e) => {
        let t,
            { onToggle: n, isViewAll: i, showMoreText: a } = e;
        return (
            (t = i
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          T.NW.string(T.t['r/xxPT']),
                          (0, r.jsx)(s.u04, {
                              size: 'md',
                              color: 'currentColor',
                              className: A.toggleTruncationButtonIcon
                          })
                      ]
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          a,
                          (0, r.jsx)(s.CJ0, {
                              size: 'md',
                              color: 'currentColor',
                              className: A.toggleTruncationButtonIcon
                          })
                      ]
                  })),
            (0, r.jsx)(s.zxk, {
                look: s.zxk.Looks.BLANK,
                size: s.zxk.Sizes.NONE,
                className: A.toggleTruncationButton,
                innerClassName: A.toggleTruncationButtonInner,
                onClick: n,
                children: t
            })
        );
    },
    M = (e) => {
        var t;
        let { listingId: n, guildId: a, groupListingId: d, analyticsLocation: m } = e,
            v = (0, h.jO)(n),
            { openModal: y, canOpenModal: x, cannotOpenReason: E, isCheckingTrialEligibility: j } = (0, I.Z)(v, a, d, m),
            k = (0, l.e7)([p.Z], () => p.Z.isSyncing),
            { activeSubscription: R, activeSubscriptionListing: M } = (0, _.Z)(d),
            W = (null == M ? void 0 : M.id) === n,
            F = (null == R ? void 0 : R.status) === P.O0b.CANCELED,
            [U, B] = i.useState(!1),
            [G, H] = i.useState(!1),
            V = i.useCallback((e) => {
                let t = !1;
                null != e && (t = e.scrollHeight - e.clientHeight > 1), H(t);
            }, []),
            [z] = g._T(n),
            [K] = g.PK(n),
            [Y] = g.TT(n),
            [X] = g.F2(n),
            q = (0, b.Z)(a, n),
            Q = null != Y && null == R && q,
            J = (0, c.Z)(S.iP),
            [$, ee] = i.useState(!1),
            et = $ || !J,
            en = (0, l.e7)([u.Z], () => u.Z.isViewingServerShop(a)),
            er = (null == v ? void 0 : v.published) === !0,
            ei = (null == v ? void 0 : v.soft_deleted) === !0,
            ea = T.NW.string(T.t.KzmEAw);
        return (er || en) && !ei
            ? (0, r.jsxs)('article', {
                  className: A.container,
                  'aria-label': z,
                  children: [
                      Q &&
                          (0, r.jsxs)('div', {
                              className: o()(A.tierTrialIndicator, A.tierTopIndicator),
                              children: [
                                  T.NW.format(T.t.L2ouio, {
                                      trialPeriodDuration: (0, f.iG)({
                                          interval: Y.interval,
                                          interval_count: Y.interval_count
                                      })
                                  }),
                                  (0, r.jsx)(s.ua7, {
                                      clickableOnMobile: !0,
                                      text: T.NW.formatToPlainString(T.t.FYyR4u, { activeTrialUserLimit: null != X ? X : 0 }),
                                      children: (e) =>
                                          (0, r.jsx)(
                                              s.d3s,
                                              w(
                                                  {
                                                      size: 'xs',
                                                      color: 'currentColor',
                                                      className: A.tierTrialIndicatorIcon
                                                  },
                                                  e
                                              )
                                          )
                                  })
                              ]
                          }),
                      (0, r.jsxs)('div', {
                          className: Q ? void 0 : A.cardContainerWithoutTopIndicator,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: A.tierInfoContainer,
                                  children: [
                                      J
                                          ? (0, r.jsx)(C.e, {
                                                listingId: n,
                                                isListingPublished: er,
                                                expanded: et,
                                                onToggleExpanded: () => ee((e) => !e)
                                            })
                                          : (0, r.jsx)(N.xv, {
                                                listingId: n,
                                                isListingPublished: er
                                            }),
                                      et &&
                                          (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  J && (0, r.jsx)('div', { className: A.divider }),
                                                  W
                                                      ? (0, r.jsx)(s.zxk, {
                                                            fullWidth: !0,
                                                            look: s.zxk.Looks.OUTLINED,
                                                            color: s.zxk.Colors.PRIMARY,
                                                            disabled: !0,
                                                            children: F ? T.NW.string(T.t.iKHmu7) : T.NW.string(T.t.XvAuMj)
                                                        })
                                                      : (0, r.jsx)(s.ua7, {
                                                            text: x ? null : E,
                                                            'aria-label': null !== (t = x && E) && void 0 !== t && t,
                                                            children: (e) =>
                                                                (0, r.jsx)(
                                                                    O.Z,
                                                                    Z(w({}, e), {
                                                                        fullWidth: !0,
                                                                        disabled: !x || k,
                                                                        submitting: j,
                                                                        onClick: y,
                                                                        onlyShineOnHover: !0,
                                                                        children: T.NW.string(T.t.fM5Zsb)
                                                                    })
                                                                )
                                                        }),
                                                  (0, r.jsx)(s.LZC, { size: 16 }),
                                                  (0, r.jsx)(s.Text, {
                                                      variant: 'text-sm/normal',
                                                      color: 'text-normal',
                                                      className: o()((!G || !U) && A.tierDescriptionTruncate),
                                                      children: (0, r.jsx)('div', {
                                                          ref: V,
                                                          children: K
                                                      })
                                                  }),
                                                  G &&
                                                      (0, r.jsx)(D, {
                                                          isViewAll: U,
                                                          onToggle: () => B((e) => !e),
                                                          showMoreText: ea
                                                      })
                                              ]
                                          })
                                  ]
                              }),
                              et &&
                                  (0, r.jsx)(s.y5t, {
                                      children: (0, r.jsx)(L, {
                                          listingId: n,
                                          guildId: a
                                      })
                                  })
                          ]
                      })
                  ]
              })
            : null;
    };
