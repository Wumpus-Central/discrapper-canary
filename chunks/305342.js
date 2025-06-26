n.d(t, {
    Z: () => D,
    c: () => R
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(131388),
    d = n(313201),
    u = n(160404),
    m = n(351402),
    p = n(768581),
    f = n(817460),
    h = n(584825),
    g = n(290348),
    C = n(934826),
    _ = n(768318),
    b = n(570533),
    v = n(971792),
    j = n(629262),
    y = n(761966),
    E = n(893729),
    x = n(845970),
    O = n(882101),
    N = n(11705),
    P = n(81273),
    I = n(293810),
    T = n(981631),
    S = n(388032),
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
let M = (e) => {
        let { benefits: t, header: n, guildId: l } = e,
            [a, s] = i.useState(!1),
            c = a ? t : t.slice(0, 5),
            u = t.length > 5,
            m = t.length - 5,
            p = S.intl.formatToPlainString(S.t['XSdy7+'], { numTruncated: m }),
            h = (0, d.Dt)();
        return 0 === t.length
            ? null
            : (0, r.jsxs)('div', {
                  className: Z.benefitsSection,
                  children: [
                      (0, r.jsx)(o.X6q, {
                          variant: 'text-xs/bold',
                          color: 'header-secondary',
                          className: Z.sectionHeader,
                          id: h,
                          children: n
                      }),
                      (0, r.jsx)(o.LZC, { size: 12 }),
                      (0, r.jsx)('ul', {
                          className: Z.benefitsList,
                          'aria-labelledby': h,
                          children: c.map((e, t) =>
                              (0, r.jsx)(
                                  'li',
                                  {
                                      children: (0, r.jsx)(
                                          x.Z,
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
                      u &&
                          (0, r.jsx)(k, {
                              isViewAll: a,
                              onToggle: () => s((e) => !e),
                              showMoreText: p
                          })
                  ]
              });
    },
    w = (e) => {
        let { guildId: t, listingId: n } = e,
            i = (0, b.Z)(t),
            [l] = g.XZ(n, t),
            a = i.filter((e) => l.has(e.id));
        return 0 === a.length
            ? null
            : (0, r.jsxs)('div', {
                  className: Z.benefitsSection,
                  children: [
                      (0, r.jsx)(o.X6q, {
                          variant: 'text-xs/bold',
                          color: 'header-secondary',
                          className: Z.sectionHeader,
                          children: S.intl.format(S.t.NAnXEh, { count: a.length })
                      }),
                      (0, r.jsx)(o.LZC, { size: 12 }),
                      (0, r.jsx)('div', {
                          className: Z.emojiList,
                          children: a.map((e, t) => {
                              var n;
                              return (0, r.jsx)(
                                  o.ua7,
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
    R = (e) => {
        let { listingId: t, guildId: n, className: i } = e,
            l = (0, v.Z)(n, t),
            [s] = g.UE(t),
            c = (0, j.Z)(s),
            [d] = g.R7(t),
            u = g.qs(t, n),
            [m] = g.XZ(t, n);
        return null == l && 0 === c.length && 0 === d.length && 0 === m.size
            ? null
            : (0, r.jsxs)('div', {
                  className: a()(Z.subscriptionPerks, i),
                  children: [
                      null != l &&
                          (0, r.jsxs)(o.y5t, {
                              component: (0, r.jsx)(o.X6q, {
                                  variant: 'text-xs/bold',
                                  color: 'header-secondary',
                                  className: Z.sectionHeader,
                                  children: S.intl.string(S.t.FJZmY2)
                              }),
                              children: [
                                  (0, r.jsx)(o.LZC, { size: 8 }),
                                  (0, r.jsx)(E.Z, {
                                      role: u,
                                      guildId: n,
                                      className: Z.roleMessagePreview
                                  })
                              ]
                          }),
                      (0, r.jsx)(M, {
                          header: S.intl.string(S.t.LtfhAg),
                          benefits: c,
                          guildId: n
                      }),
                      (0, r.jsx)(M, {
                          header: S.intl.string(S.t['8oxWpK']),
                          benefits: d,
                          guildId: n
                      }),
                      (0, r.jsx)(w, {
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
                          S.intl.string(S.t['r/xxPT']),
                          (0, r.jsx)(o.u04, {
                              size: 'md',
                              color: 'currentColor',
                              className: Z.toggleTruncationButtonIcon
                          })
                      ]
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          l,
                          (0, r.jsx)(o.CJ0, {
                              size: 'md',
                              color: 'currentColor',
                              className: Z.toggleTruncationButtonIcon
                          })
                      ]
                  })),
            (0, r.jsx)(o.zxk, {
                look: o.zxk.Looks.BLANK,
                size: o.zxk.Sizes.NONE,
                className: Z.toggleTruncationButton,
                innerClassName: Z.toggleTruncationButtonInner,
                onClick: n,
                children: t
            })
        );
    },
    D = (e) => {
        var t;
        let { listingId: n, guildId: l, groupListingId: d, analyticsLocation: p } = e,
            b = (0, h.jO)(n),
            { openModal: v, canOpenModal: j, cannotOpenReason: E, isCheckingTrialEligibility: x } = (0, P.Z)(b, l, d, p),
            M = (0, s.e7)([m.Z], () => m.Z.isSyncing),
            { activeSubscription: w, activeSubscriptionListing: D } = (0, C.Z)(d),
            F = (null == D ? void 0 : D.id) === n,
            U = (null == w ? void 0 : w.status) === T.O0b.CANCELED,
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
            q = (0, _.Z)(l, n),
            Q = null != X && null == w && q,
            J = (0, c.Z)(I.iP),
            [$, ee] = i.useState(!1),
            et = $ || !J,
            en = (0, s.e7)([u.Z], () => u.Z.isViewingServerShop(l)),
            er = (null == b ? void 0 : b.published) === !0,
            ei = (null == b ? void 0 : b.soft_deleted) === !0,
            el = S.intl.string(S.t.KzmEAw);
        return (er || en) && !ei
            ? (0, r.jsxs)('article', {
                  className: Z.container,
                  'aria-label': Y,
                  children: [
                      Q &&
                          (0, r.jsxs)('div', {
                              className: a()(Z.tierTrialIndicator, Z.tierTopIndicator),
                              children: [
                                  S.intl.format(S.t.L2ouio, {
                                      trialPeriodDuration: (0, f.iG)({
                                          interval: X.interval,
                                          interval_count: X.interval_count
                                      })
                                  }),
                                  (0, r.jsx)(o.ua7, {
                                      clickableOnMobile: !0,
                                      text: S.intl.formatToPlainString(S.t.FYyR4u, { activeTrialUserLimit: null != K ? K : 0 }),
                                      children: (e) =>
                                          (0, r.jsx)(
                                              o.d3s,
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
                                          : (0, r.jsx)(O.xv, {
                                                listingId: n,
                                                isListingPublished: er
                                            }),
                                      et &&
                                          (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  J && (0, r.jsx)('div', { className: Z.divider }),
                                                  F
                                                      ? (0, r.jsx)(o.zxk, {
                                                            fullWidth: !0,
                                                            look: o.zxk.Looks.OUTLINED,
                                                            color: o.zxk.Colors.PRIMARY,
                                                            disabled: !0,
                                                            children: U ? S.intl.string(S.t.iKHmu7) : S.intl.string(S.t.XvAuMj)
                                                        })
                                                      : (0, r.jsx)(o.ua7, {
                                                            text: j ? null : E,
                                                            'aria-label': null != (t = j && E) && t,
                                                            children: (e) =>
                                                                (0, r.jsx)(
                                                                    y.Z,
                                                                    A(L({}, e), {
                                                                        fullWidth: !0,
                                                                        disabled: !j || M,
                                                                        submitting: x,
                                                                        onClick: v,
                                                                        onlyShineOnHover: !0,
                                                                        children: S.intl.string(S.t.fM5Zsb)
                                                                    })
                                                                )
                                                        }),
                                                  (0, r.jsx)(o.LZC, { size: 16 }),
                                                  (0, r.jsx)(o.Text, {
                                                      variant: 'text-sm/normal',
                                                      color: 'text-default',
                                                      className: a()((!H || !z) && Z.tierDescriptionTruncate),
                                                      children: (0, r.jsx)('div', {
                                                          ref: W,
                                                          children: V
                                                      })
                                                  }),
                                                  H &&
                                                      (0, r.jsx)(k, {
                                                          isViewAll: z,
                                                          onToggle: () => B((e) => !e),
                                                          showMoreText: el
                                                      })
                                              ]
                                          })
                                  ]
                              }),
                              et &&
                                  (0, r.jsx)(o.y5t, {
                                      children: (0, r.jsx)(R, {
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
