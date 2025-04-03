n.d(t, {
    Z: () => M,
    c: () => A
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
    _ = n(351402),
    m = n(768581),
    f = n(817460),
    p = n(584825),
    g = n(290348),
    h = n(934826),
    v = n(768318),
    b = n(570533),
    y = n(971792),
    x = n(629262),
    j = n(761966),
    C = n(893729),
    I = n(845970),
    N = n(882101),
    O = n(11705),
    E = n(81273),
    P = n(293810),
    S = n(981631),
    w = n(388032),
    T = n(492077);
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
function k(e, t) {
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
let Z = (e) => {
        let { benefits: t, header: n, guildId: a } = e,
            [o, l] = i.useState(!1),
            c = o ? t : t.slice(0, 5),
            u = t.length > 5,
            _ = t.length - 5,
            m = w.NW.formatToPlainString(w.t['XSdy7+'], { numTruncated: _ }),
            p = (0, d.Dt)();
        return 0 === t.length
            ? null
            : (0, r.jsxs)('div', {
                  className: T.benefitsSection,
                  children: [
                      (0, r.jsx)(s.X6q, {
                          variant: 'text-xs/bold',
                          color: 'header-secondary',
                          className: T.sectionHeader,
                          id: p,
                          children: n
                      }),
                      (0, r.jsx)(s.LZC, { size: 12 }),
                      (0, r.jsx)('ul', {
                          className: T.benefitsList,
                          'aria-labelledby': p,
                          children: c.map((e, t) =>
                              (0, r.jsx)(
                                  'li',
                                  {
                                      children: (0, r.jsx)(
                                          I.Z,
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
                          (0, r.jsx)(W, {
                              isViewAll: o,
                              onToggle: () => l((e) => !e),
                              showMoreText: m
                          })
                  ]
              });
    },
    D = (e) => {
        let { guildId: t, listingId: n } = e,
            i = (0, b.Z)(t),
            [a] = g.XZ(n, t),
            o = i.filter((e) => a.has(e.id));
        return 0 === o.length
            ? null
            : (0, r.jsxs)('div', {
                  className: T.benefitsSection,
                  children: [
                      (0, r.jsx)(s.X6q, {
                          variant: 'text-xs/bold',
                          color: 'header-secondary',
                          className: T.sectionHeader,
                          children: w.NW.format(w.t.NAnXEh, { count: o.length })
                      }),
                      (0, r.jsx)(s.LZC, { size: 12 }),
                      (0, r.jsx)('div', {
                          className: T.emojiList,
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
                                              k(L({}, t), {
                                                  className: T.emojiListEmoji,
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
                                  null != (n = e.id) ? n : t
                              );
                          })
                      })
                  ]
              });
    },
    A = (e) => {
        let { listingId: t, guildId: n, className: i } = e,
            a = (0, y.Z)(n, t),
            [l] = g.UE(t),
            c = (0, x.Z)(l),
            [d] = g.R7(t),
            u = g.qs(t, n),
            [_] = g.XZ(t, n);
        return null == a && 0 === c.length && 0 === d.length && 0 === _.size
            ? null
            : (0, r.jsxs)('div', {
                  className: o()(T.subscriptionPerks, i),
                  children: [
                      null != a &&
                          (0, r.jsxs)(s.y5t, {
                              component: (0, r.jsx)(s.X6q, {
                                  variant: 'text-xs/bold',
                                  color: 'header-secondary',
                                  className: T.sectionHeader,
                                  children: w.NW.string(w.t.FJZmY2)
                              }),
                              children: [
                                  (0, r.jsx)(s.LZC, { size: 8 }),
                                  (0, r.jsx)(C.Z, {
                                      role: u,
                                      guildId: n,
                                      className: T.roleMessagePreview
                                  })
                              ]
                          }),
                      (0, r.jsx)(Z, {
                          header: w.NW.string(w.t.LtfhAg),
                          benefits: c,
                          guildId: n
                      }),
                      (0, r.jsx)(Z, {
                          header: w.NW.string(w.t['8oxWpK']),
                          benefits: d,
                          guildId: n
                      }),
                      (0, r.jsx)(D, {
                          guildId: n,
                          listingId: t
                      })
                  ]
              });
    },
    W = (e) => {
        let t,
            { onToggle: n, isViewAll: i, showMoreText: a } = e;
        return (
            (t = i
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          w.NW.string(w.t['r/xxPT']),
                          (0, r.jsx)(s.u04, {
                              size: 'md',
                              color: 'currentColor',
                              className: T.toggleTruncationButtonIcon
                          })
                      ]
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          a,
                          (0, r.jsx)(s.CJ0, {
                              size: 'md',
                              color: 'currentColor',
                              className: T.toggleTruncationButtonIcon
                          })
                      ]
                  })),
            (0, r.jsx)(s.zxk, {
                look: s.zxk.Looks.BLANK,
                size: s.zxk.Sizes.NONE,
                className: T.toggleTruncationButton,
                innerClassName: T.toggleTruncationButtonInner,
                onClick: n,
                children: t
            })
        );
    },
    M = (e) => {
        var t;
        let { listingId: n, guildId: a, groupListingId: d, analyticsLocation: m } = e,
            b = (0, p.jO)(n),
            { openModal: y, canOpenModal: x, cannotOpenReason: C, isCheckingTrialEligibility: I } = (0, E.Z)(b, a, d, m),
            Z = (0, l.e7)([_.Z], () => _.Z.isSyncing),
            { activeSubscription: D, activeSubscriptionListing: M } = (0, h.Z)(d),
            F = (null == M ? void 0 : M.id) === n,
            R = (null == D ? void 0 : D.status) === S.O0b.CANCELED,
            [B, z] = i.useState(!1),
            [U, V] = i.useState(!1),
            H = i.useCallback((e) => {
                let t = !1;
                null != e && (t = e.scrollHeight - e.clientHeight > 1), V(t);
            }, []),
            [G] = g._T(n),
            [Y] = g.PK(n),
            [q] = g.TT(n),
            [X] = g.F2(n),
            K = (0, v.Z)(a, n),
            J = null != q && null == D && K,
            Q = (0, c.Z)(P.iP),
            [$, ee] = i.useState(!1),
            et = $ || !Q,
            en = (0, l.e7)([u.Z], () => u.Z.isViewingServerShop(a)),
            er = (null == b ? void 0 : b.published) === !0,
            ei = (null == b ? void 0 : b.soft_deleted) === !0,
            ea = w.NW.string(w.t.KzmEAw);
        return (er || en) && !ei
            ? (0, r.jsxs)('article', {
                  className: T.container,
                  'aria-label': G,
                  children: [
                      J &&
                          (0, r.jsxs)('div', {
                              className: o()(T.tierTrialIndicator, T.tierTopIndicator),
                              children: [
                                  w.NW.format(w.t.L2ouio, {
                                      trialPeriodDuration: (0, f.iG)({
                                          interval: q.interval,
                                          interval_count: q.interval_count
                                      })
                                  }),
                                  (0, r.jsx)(s.ua7, {
                                      clickableOnMobile: !0,
                                      text: w.NW.formatToPlainString(w.t.FYyR4u, { activeTrialUserLimit: null != X ? X : 0 }),
                                      children: (e) =>
                                          (0, r.jsx)(
                                              s.d3s,
                                              L(
                                                  {
                                                      size: 'xs',
                                                      color: 'currentColor',
                                                      className: T.tierTrialIndicatorIcon
                                                  },
                                                  e
                                              )
                                          )
                                  })
                              ]
                          }),
                      (0, r.jsxs)('div', {
                          className: J ? void 0 : T.cardContainerWithoutTopIndicator,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: T.tierInfoContainer,
                                  children: [
                                      Q
                                          ? (0, r.jsx)(O.e, {
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
                                                  Q && (0, r.jsx)('div', { className: T.divider }),
                                                  F
                                                      ? (0, r.jsx)(s.zxk, {
                                                            fullWidth: !0,
                                                            look: s.zxk.Looks.OUTLINED,
                                                            color: s.zxk.Colors.PRIMARY,
                                                            disabled: !0,
                                                            children: R ? w.NW.string(w.t.iKHmu7) : w.NW.string(w.t.XvAuMj)
                                                        })
                                                      : (0, r.jsx)(s.ua7, {
                                                            text: x ? null : C,
                                                            'aria-label': null != (t = x && C) && t,
                                                            children: (e) =>
                                                                (0, r.jsx)(
                                                                    j.Z,
                                                                    k(L({}, e), {
                                                                        fullWidth: !0,
                                                                        disabled: !x || Z,
                                                                        submitting: I,
                                                                        onClick: y,
                                                                        onlyShineOnHover: !0,
                                                                        children: w.NW.string(w.t.fM5Zsb)
                                                                    })
                                                                )
                                                        }),
                                                  (0, r.jsx)(s.LZC, { size: 16 }),
                                                  (0, r.jsx)(s.Text, {
                                                      variant: 'text-sm/normal',
                                                      color: 'text-normal',
                                                      className: o()((!U || !B) && T.tierDescriptionTruncate),
                                                      children: (0, r.jsx)('div', {
                                                          ref: H,
                                                          children: Y
                                                      })
                                                  }),
                                                  U &&
                                                      (0, r.jsx)(W, {
                                                          isViewAll: B,
                                                          onToggle: () => z((e) => !e),
                                                          showMoreText: ea
                                                      })
                                              ]
                                          })
                                  ]
                              }),
                              et &&
                                  (0, r.jsx)(s.y5t, {
                                      children: (0, r.jsx)(A, {
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
