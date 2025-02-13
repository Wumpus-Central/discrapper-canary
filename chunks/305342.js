n.d(t, {
    Z: () => O,
    c: () => k
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(131388),
    d = n(313201),
    u = n(160404),
    m = n(351402),
    _ = n(768581),
    h = n(817460),
    p = n(584825),
    g = n(290348),
    f = n(934826),
    x = n(768318),
    C = n(570533),
    v = n(971792),
    E = n(629262),
    I = n(761966),
    N = n(893729),
    S = n(845970),
    T = n(882101),
    b = n(11705),
    A = n(81273),
    j = n(293810),
    y = n(981631),
    Z = n(388032),
    R = n(640411);
let L = (e) => {
        let { benefits: t, header: n, guildId: a } = e,
            [r, s] = l.useState(!1),
            c = r ? t : t.slice(0, 5),
            u = t.length > 5,
            m = t.length - 5,
            _ = Z.intl.formatToPlainString(Z.t['XSdy7+'], { numTruncated: m }),
            p = (0, d.Dt)();
        return 0 === t.length
            ? null
            : (0, i.jsxs)('div', {
                  className: R.benefitsSection,
                  children: [
                      (0, i.jsx)(o.X6q, {
                          variant: 'text-xs/bold',
                          color: 'header-secondary',
                          className: R.sectionHeader,
                          id: p,
                          children: n
                      }),
                      (0, i.jsx)(o.LZC, { size: 12 }),
                      (0, i.jsx)('ul', {
                          className: R.benefitsList,
                          'aria-labelledby': p,
                          children: c.map((e, t) =>
                              (0, i.jsx)(
                                  'li',
                                  {
                                      children: (0, i.jsx)(
                                          S.Z,
                                          {
                                              guildId: a,
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
                          (0, i.jsx)(M, {
                              isViewAll: r,
                              onToggle: () => s((e) => !e),
                              showMoreText: _
                          })
                  ]
              });
    },
    P = (e) => {
        let { guildId: t, listingId: n } = e,
            l = (0, C.Z)(t),
            [a] = g.XZ(n, t),
            r = l.filter((e) => a.has(e.id));
        return 0 === r.length
            ? null
            : (0, i.jsxs)('div', {
                  className: R.benefitsSection,
                  children: [
                      (0, i.jsx)(o.X6q, {
                          variant: 'text-xs/bold',
                          color: 'header-secondary',
                          className: R.sectionHeader,
                          children: Z.intl.format(Z.t.NAnXEh, { count: r.length })
                      }),
                      (0, i.jsx)(o.LZC, { size: 12 }),
                      (0, i.jsx)('div', {
                          className: R.emojiList,
                          children: r.map((e, t) => {
                              var n;
                              return (0, i.jsx)(
                                  o.ua7,
                                  {
                                      text: e.name,
                                      'aria-label': !1,
                                      children: (t) =>
                                          (0, i.jsx)('img', {
                                              ...t,
                                              className: R.emojiListEmoji,
                                              src: _.ZP.getEmojiURL({
                                                  id: e.id,
                                                  animated: e.animated,
                                                  size: 24
                                              }),
                                              width: 24,
                                              height: 24,
                                              alt: e.name
                                          })
                                  },
                                  null !== (n = e.id) && void 0 !== n ? n : t
                              );
                          })
                      })
                  ]
              });
    },
    k = (e) => {
        let { listingId: t, guildId: n, className: l } = e,
            a = (0, v.Z)(n, t),
            [s] = g.UE(t),
            c = (0, E.Z)(s),
            [d] = g.R7(t),
            u = g.qs(t, n),
            [m] = g.XZ(t, n);
        return null == a && 0 === c.length && 0 === d.length && 0 === m.size
            ? null
            : (0, i.jsxs)('div', {
                  className: r()(R.subscriptionPerks, l),
                  children: [
                      null != a &&
                          (0, i.jsxs)(o.y5t, {
                              component: (0, i.jsx)(o.X6q, {
                                  variant: 'text-xs/bold',
                                  color: 'header-secondary',
                                  className: R.sectionHeader,
                                  children: Z.intl.string(Z.t.FJZmY2)
                              }),
                              children: [
                                  (0, i.jsx)(o.LZC, { size: 8 }),
                                  (0, i.jsx)(N.Z, {
                                      role: u,
                                      guildId: n,
                                      className: R.roleMessagePreview
                                  })
                              ]
                          }),
                      (0, i.jsx)(L, {
                          header: Z.intl.string(Z.t.LtfhAg),
                          benefits: c,
                          guildId: n
                      }),
                      (0, i.jsx)(L, {
                          header: Z.intl.string(Z.t['8oxWpK']),
                          benefits: d,
                          guildId: n
                      }),
                      (0, i.jsx)(P, {
                          guildId: n,
                          listingId: t
                      })
                  ]
              });
    },
    M = (e) => {
        let t,
            { onToggle: n, isViewAll: l, showMoreText: a } = e;
        return (
            (t = l
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          Z.intl.string(Z.t['r/xxPT']),
                          (0, i.jsx)(o.u04, {
                              size: 'md',
                              color: 'currentColor',
                              className: R.toggleTruncationButtonIcon
                          })
                      ]
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          a,
                          (0, i.jsx)(o.CJ0, {
                              size: 'md',
                              color: 'currentColor',
                              className: R.toggleTruncationButtonIcon
                          })
                      ]
                  })),
            (0, i.jsx)(o.zxk, {
                look: o.zxk.Looks.BLANK,
                size: o.zxk.Sizes.NONE,
                className: R.toggleTruncationButton,
                innerClassName: R.toggleTruncationButtonInner,
                onClick: n,
                children: t
            })
        );
    },
    O = (e) => {
        var t;
        let { listingId: n, guildId: a, groupListingId: d, analyticsLocation: _ } = e,
            C = (0, p.jO)(n),
            { openModal: v, canOpenModal: E, cannotOpenReason: N, isCheckingTrialEligibility: S } = (0, A.Z)(C, a, d, _),
            L = (0, s.e7)([m.Z], () => m.Z.isSyncing),
            { activeSubscription: P, activeSubscriptionListing: O } = (0, f.Z)(d),
            D = (null == O ? void 0 : O.id) === n,
            w = (null == P ? void 0 : P.status) === y.O0b.CANCELED,
            [F, U] = l.useState(!1),
            [B, G] = l.useState(!1),
            H = l.useCallback((e) => {
                let t = !1;
                null != e && (t = e.scrollHeight - e.clientHeight > 1), G(t);
            }, []),
            [V] = g._T(n),
            [z] = g.PK(n),
            [W] = g.TT(n),
            [K] = g.F2(n),
            Y = (0, x.Z)(a, n),
            X = null != W && null == P && Y,
            q = (0, c.Z)(j.iP),
            [Q, J] = l.useState(!1),
            $ = Q || !q,
            ee = (0, s.e7)([u.Z], () => u.Z.isViewingServerShop(a)),
            et = (null == C ? void 0 : C.published) === !0,
            en = (null == C ? void 0 : C.soft_deleted) === !0,
            ei = Z.intl.string(Z.t.KzmEAw);
        return (et || ee) && !en
            ? (0, i.jsxs)('article', {
                  className: R.container,
                  'aria-label': V,
                  children: [
                      X &&
                          (0, i.jsxs)('div', {
                              className: r()(R.tierTrialIndicator, R.tierTopIndicator),
                              children: [
                                  Z.intl.format(Z.t.L2ouio, {
                                      trialPeriodDuration: (0, h.iG)({
                                          interval: W.interval,
                                          interval_count: W.interval_count
                                      })
                                  }),
                                  (0, i.jsx)(o.ua7, {
                                      clickableOnMobile: !0,
                                      text: Z.intl.formatToPlainString(Z.t.FYyR4u, { activeTrialUserLimit: null != K ? K : 0 }),
                                      children: (e) =>
                                          (0, i.jsx)(o.d3s, {
                                              size: 'xs',
                                              color: 'currentColor',
                                              className: R.tierTrialIndicatorIcon,
                                              ...e
                                          })
                                  })
                              ]
                          }),
                      (0, i.jsxs)('div', {
                          className: X ? void 0 : R.cardContainerWithoutTopIndicator,
                          children: [
                              (0, i.jsxs)('div', {
                                  className: R.tierInfoContainer,
                                  children: [
                                      q
                                          ? (0, i.jsx)(b.e, {
                                                listingId: n,
                                                isListingPublished: et,
                                                expanded: $,
                                                onToggleExpanded: () => J((e) => !e)
                                            })
                                          : (0, i.jsx)(T.xv, {
                                                listingId: n,
                                                isListingPublished: et
                                            }),
                                      $ &&
                                          (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  q && (0, i.jsx)('div', { className: R.divider }),
                                                  D
                                                      ? (0, i.jsx)(o.zxk, {
                                                            fullWidth: !0,
                                                            look: o.zxk.Looks.OUTLINED,
                                                            color: o.zxk.Colors.PRIMARY,
                                                            disabled: !0,
                                                            children: w ? Z.intl.string(Z.t.iKHmu7) : Z.intl.string(Z.t.XvAuMj)
                                                        })
                                                      : (0, i.jsx)(o.ua7, {
                                                            text: E ? null : N,
                                                            'aria-label': null !== (t = E && N) && void 0 !== t && t,
                                                            children: (e) =>
                                                                (0, i.jsx)(I.Z, {
                                                                    ...e,
                                                                    fullWidth: !0,
                                                                    disabled: !E || L,
                                                                    submitting: S,
                                                                    onClick: v,
                                                                    onlyShineOnHover: !0,
                                                                    children: Z.intl.string(Z.t.fM5Zsb)
                                                                })
                                                        }),
                                                  (0, i.jsx)(o.LZC, { size: 16 }),
                                                  (0, i.jsx)(o.Text, {
                                                      variant: 'text-sm/normal',
                                                      color: 'text-normal',
                                                      className: r()((!B || !F) && R.tierDescriptionTruncate),
                                                      children: (0, i.jsx)('div', {
                                                          ref: H,
                                                          children: z
                                                      })
                                                  }),
                                                  B &&
                                                      (0, i.jsx)(M, {
                                                          isViewAll: F,
                                                          onToggle: () => U((e) => !e),
                                                          showMoreText: ei
                                                      })
                                              ]
                                          })
                                  ]
                              }),
                              $ &&
                                  (0, i.jsx)(o.y5t, {
                                      children: (0, i.jsx)(k, {
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
