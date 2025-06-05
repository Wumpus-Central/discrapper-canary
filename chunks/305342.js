n.d(t, {
    Z: () => D,
    c: () => k
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(131388),
    u = n(313201),
    d = n(160404),
    m = n(351402),
    p = n(768581),
    f = n(817460),
    h = n(584825),
    g = n(290348),
    b = n(934826),
    v = n(768318),
    _ = n(570533),
    C = n(971792),
    j = n(629262),
    y = n(761966),
    E = n(893729),
    O = n(845970),
    x = n(882101),
    N = n(11705),
    P = n(81273),
    I = n(293810),
    S = n(981631),
    T = n(388032),
    Z = n(492077);
function L(e) {
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
function A(e, t) {
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
let w = (e) => {
        let { benefits: t, header: n, guildId: l } = e,
            [a, o] = i.useState(!1),
            c = a ? t : t.slice(0, 5),
            d = t.length > 5,
            m = t.length - 5,
            p = T.intl.formatToPlainString(T.t['XSdy7+'], { numTruncated: m }),
            h = (0, u.Dt)();
        return 0 === t.length
            ? null
            : (0, r.jsxs)('div', {
                  className: Z.benefitsSection,
                  children: [
                      (0, r.jsx)(s.X6q, {
                          variant: 'text-xs/bold',
                          color: 'header-secondary',
                          className: Z.sectionHeader,
                          id: h,
                          children: n
                      }),
                      (0, r.jsx)(s.LZC, { size: 12 }),
                      (0, r.jsx)('ul', {
                          className: Z.benefitsList,
                          'aria-labelledby': h,
                          children: c.map((e, t) =>
                              (0, r.jsx)(
                                  'li',
                                  {
                                      children: (0, r.jsx)(
                                          O.Z,
                                          {
                                              guildId: l,
                                              benefit: e
                                          },
                                          (0, f.ab)(e)
                                      )
                                  },
                                  t
                              )
                          )
                      }),
                      d &&
                          (0, r.jsx)(R, {
                              isViewAll: a,
                              onToggle: () => o((e) => !e),
                              showMoreText: p
                          })
                  ]
              });
    },
    M = (e) => {
        let { guildId: t, listingId: n } = e,
            i = (0, _.Z)(t),
            [l] = g.XZ(n, t),
            a = i.filter((e) => l.has(e.id));
        return 0 === a.length
            ? null
            : (0, r.jsxs)('div', {
                  className: Z.benefitsSection,
                  children: [
                      (0, r.jsx)(s.X6q, {
                          variant: 'text-xs/bold',
                          color: 'header-secondary',
                          className: Z.sectionHeader,
                          children: T.intl.format(T.t.NAnXEh, { count: a.length })
                      }),
                      (0, r.jsx)(s.LZC, { size: 12 }),
                      (0, r.jsx)('div', {
                          className: Z.emojiList,
                          children: a.map((e, t) => {
                              var n;
                              return (0, r.jsx)(
                                  s.ua7,
                                  {
                                      text: e.name,
                                      'aria-label': !1,
                                      children: (t) =>
                                          (0, r.jsx)(
                                              'img',
                                              A(L({}, t), {
                                                  className: Z.emojiListEmoji,
                                                  src: p.ZP.getEmojiURL({
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
    k = (e) => {
        let { listingId: t, guildId: n, className: i } = e,
            l = (0, C.Z)(n, t),
            [o] = g.UE(t),
            c = (0, j.Z)(o),
            [u] = g.R7(t),
            d = g.qs(t, n),
            [m] = g.XZ(t, n);
        return null == l && 0 === c.length && 0 === u.length && 0 === m.size
            ? null
            : (0, r.jsxs)('div', {
                  className: a()(Z.subscriptionPerks, i),
                  children: [
                      null != l &&
                          (0, r.jsxs)(s.y5t, {
                              component: (0, r.jsx)(s.X6q, {
                                  variant: 'text-xs/bold',
                                  color: 'header-secondary',
                                  className: Z.sectionHeader,
                                  children: T.intl.string(T.t.FJZmY2)
                              }),
                              children: [
                                  (0, r.jsx)(s.LZC, { size: 8 }),
                                  (0, r.jsx)(E.Z, {
                                      role: d,
                                      guildId: n,
                                      className: Z.roleMessagePreview
                                  })
                              ]
                          }),
                      (0, r.jsx)(w, {
                          header: T.intl.string(T.t.LtfhAg),
                          benefits: c,
                          guildId: n
                      }),
                      (0, r.jsx)(w, {
                          header: T.intl.string(T.t['8oxWpK']),
                          benefits: u,
                          guildId: n
                      }),
                      (0, r.jsx)(M, {
                          guildId: n,
                          listingId: t
                      })
                  ]
              });
    },
    R = (e) => {
        let t,
            { onToggle: n, isViewAll: i, showMoreText: l } = e;
        return (
            (t = i
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          T.intl.string(T.t['r/xxPT']),
                          (0, r.jsx)(s.u04, {
                              size: 'md',
                              color: 'currentColor',
                              className: Z.toggleTruncationButtonIcon
                          })
                      ]
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          l,
                          (0, r.jsx)(s.CJ0, {
                              size: 'md',
                              color: 'currentColor',
                              className: Z.toggleTruncationButtonIcon
                          })
                      ]
                  })),
            (0, r.jsx)(s.zxk, {
                look: s.zxk.Looks.BLANK,
                size: s.zxk.Sizes.NONE,
                className: Z.toggleTruncationButton,
                innerClassName: Z.toggleTruncationButtonInner,
                onClick: n,
                children: t
            })
        );
    },
    D = (e) => {
        var t;
        let { listingId: n, guildId: l, groupListingId: u, analyticsLocation: p } = e,
            _ = (0, h.jO)(n),
            { openModal: C, canOpenModal: j, cannotOpenReason: E, isCheckingTrialEligibility: O } = (0, P.Z)(_, l, u, p),
            w = (0, o.e7)([m.Z], () => m.Z.isSyncing),
            { activeSubscription: M, activeSubscriptionListing: D } = (0, b.Z)(u),
            F = (null == D ? void 0 : D.id) === n,
            U = (null == M ? void 0 : M.status) === S.O0b.CANCELED,
            [z, B] = i.useState(!1),
            [H, G] = i.useState(!1),
            W = i.useCallback((e) => {
                let t = !1;
                null != e && (t = e.scrollHeight - e.clientHeight > 1), G(t);
            }, []),
            [Y] = g._T(n),
            [V] = g.PK(n),
            [X] = g.TT(n),
            [K] = g.F2(n),
            q = (0, v.Z)(l, n),
            Q = null != X && null == M && q,
            J = (0, c.Z)(I.iP),
            [$, ee] = i.useState(!1),
            et = $ || !J,
            en = (0, o.e7)([d.Z], () => d.Z.isViewingServerShop(l)),
            er = (null == _ ? void 0 : _.published) === !0,
            ei = (null == _ ? void 0 : _.soft_deleted) === !0,
            el = T.intl.string(T.t.KzmEAw);
        return (er || en) && !ei
            ? (0, r.jsxs)('article', {
                  className: Z.container,
                  'aria-label': Y,
                  children: [
                      Q &&
                          (0, r.jsxs)('div', {
                              className: a()(Z.tierTrialIndicator, Z.tierTopIndicator),
                              children: [
                                  T.intl.format(T.t.L2ouio, {
                                      trialPeriodDuration: (0, f.iG)({
                                          interval: X.interval,
                                          interval_count: X.interval_count
                                      })
                                  }),
                                  (0, r.jsx)(s.ua7, {
                                      clickableOnMobile: !0,
                                      text: T.intl.formatToPlainString(T.t.FYyR4u, { activeTrialUserLimit: null != K ? K : 0 }),
                                      children: (e) =>
                                          (0, r.jsx)(
                                              s.d3s,
                                              L(
                                                  {
                                                      size: 'xs',
                                                      color: 'currentColor',
                                                      className: Z.tierTrialIndicatorIcon
                                                  },
                                                  e
                                              )
                                          )
                                  })
                              ]
                          }),
                      (0, r.jsxs)('div', {
                          className: Q ? void 0 : Z.cardContainerWithoutTopIndicator,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: Z.tierInfoContainer,
                                  children: [
                                      J
                                          ? (0, r.jsx)(N.e, {
                                                listingId: n,
                                                isListingPublished: er,
                                                expanded: et,
                                                onToggleExpanded: () => ee((e) => !e)
                                            })
                                          : (0, r.jsx)(x.xv, {
                                                listingId: n,
                                                isListingPublished: er
                                            }),
                                      et &&
                                          (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  J && (0, r.jsx)('div', { className: Z.divider }),
                                                  F
                                                      ? (0, r.jsx)(s.zxk, {
                                                            fullWidth: !0,
                                                            look: s.zxk.Looks.OUTLINED,
                                                            color: s.zxk.Colors.PRIMARY,
                                                            disabled: !0,
                                                            children: U ? T.intl.string(T.t.iKHmu7) : T.intl.string(T.t.XvAuMj)
                                                        })
                                                      : (0, r.jsx)(s.ua7, {
                                                            text: j ? null : E,
                                                            'aria-label': null != (t = j && E) && t,
                                                            children: (e) =>
                                                                (0, r.jsx)(
                                                                    y.Z,
                                                                    A(L({}, e), {
                                                                        fullWidth: !0,
                                                                        disabled: !j || w,
                                                                        submitting: O,
                                                                        onClick: C,
                                                                        onlyShineOnHover: !0,
                                                                        children: T.intl.string(T.t.fM5Zsb)
                                                                    })
                                                                )
                                                        }),
                                                  (0, r.jsx)(s.LZC, { size: 16 }),
                                                  (0, r.jsx)(s.Text, {
                                                      variant: 'text-sm/normal',
                                                      color: 'text-normal',
                                                      className: a()((!H || !z) && Z.tierDescriptionTruncate),
                                                      children: (0, r.jsx)('div', {
                                                          ref: W,
                                                          children: V
                                                      })
                                                  }),
                                                  H &&
                                                      (0, r.jsx)(R, {
                                                          isViewAll: z,
                                                          onToggle: () => B((e) => !e),
                                                          showMoreText: el
                                                      })
                                              ]
                                          })
                                  ]
                              }),
                              et &&
                                  (0, r.jsx)(s.y5t, {
                                      children: (0, r.jsx)(k, {
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
