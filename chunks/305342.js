n.d(t, {
    c: function () {
        return O;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(131388),
    d = n(313201),
    u = n(160404),
    m = n(351402),
    h = n(768581),
    f = n(817460),
    p = n(584825),
    _ = n(290348),
    g = n(934826),
    E = n(768318),
    C = n(570533),
    I = n(971792),
    x = n(629262),
    N = n(761966),
    v = n(893729),
    T = n(845970),
    S = n(882101),
    A = n(11705),
    b = n(81273),
    j = n(293810),
    R = n(981631),
    Z = n(388032),
    P = n(720843);
let L = (e) => {
        let { benefits: t, header: n, guildId: l } = e,
            [a, o] = r.useState(!1),
            c = a ? t : t.slice(0, 5),
            u = t.length > 5,
            m = t.length - 5,
            h = Z.intl.formatToPlainString(Z.t['XSdy7+'], { numTruncated: m }),
            p = (0, d.Dt)();
        return 0 === t.length
            ? null
            : (0, i.jsxs)('div', {
                  className: P.benefitsSection,
                  children: [
                      (0, i.jsx)(s.Heading, {
                          variant: 'text-xs/bold',
                          color: 'header-secondary',
                          className: P.sectionHeader,
                          id: p,
                          children: n
                      }),
                      (0, i.jsx)(s.Spacer, { size: 12 }),
                      (0, i.jsx)('ul', {
                          className: P.benefitsList,
                          'aria-labelledby': p,
                          children: c.map((e, t) =>
                              (0, i.jsx)(
                                  'li',
                                  {
                                      children: (0, i.jsx)(
                                          T.Z,
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
                          (0, i.jsx)(M, {
                              isViewAll: a,
                              onToggle: () => o((e) => !e),
                              showMoreText: h
                          })
                  ]
              });
    },
    y = (e) => {
        let { guildId: t, listingId: n } = e,
            r = (0, C.Z)(t),
            [l] = _.XZ(n, t),
            a = r.filter((e) => l.has(e.id));
        return 0 === a.length
            ? null
            : (0, i.jsxs)('div', {
                  className: P.benefitsSection,
                  children: [
                      (0, i.jsx)(s.Heading, {
                          variant: 'text-xs/bold',
                          color: 'header-secondary',
                          className: P.sectionHeader,
                          children: Z.intl.format(Z.t.NAnXEh, { count: a.length })
                      }),
                      (0, i.jsx)(s.Spacer, { size: 12 }),
                      (0, i.jsx)('div', {
                          className: P.emojiList,
                          children: a.map((e, t) => {
                              var n;
                              return (0, i.jsx)(
                                  s.Tooltip,
                                  {
                                      text: e.name,
                                      'aria-label': !1,
                                      children: (t) => {
                                          var n;
                                          return (0, i.jsx)('img', {
                                              ...t,
                                              className: P.emojiListEmoji,
                                              src:
                                                  ((n = e),
                                                  h.ZP.getEmojiURL({
                                                      id: n.id,
                                                      animated: n.animated,
                                                      size: 24
                                                  })),
                                              width: 24,
                                              height: 24,
                                              alt: e.name
                                          });
                                      }
                                  },
                                  null !== (n = e.id) && void 0 !== n ? n : t
                              );
                          })
                      })
                  ]
              });
    },
    O = (e) => {
        let { listingId: t, guildId: n, className: r } = e,
            l = (0, I.Z)(n, t),
            [o] = _.UE(t),
            c = (0, x.Z)(o),
            [d] = _.R7(t),
            u = _.qs(t, n),
            [m] = _.XZ(t, n);
        return null == l && 0 === c.length && 0 === d.length && 0 === m.size
            ? null
            : (0, i.jsxs)('div', {
                  className: a()(P.subscriptionPerks, r),
                  children: [
                      null != l &&
                          (0, i.jsxs)(s.HeadingLevel, {
                              component: (0, i.jsx)(s.Heading, {
                                  variant: 'text-xs/bold',
                                  color: 'header-secondary',
                                  className: P.sectionHeader,
                                  children: Z.intl.string(Z.t.FJZmY2)
                              }),
                              children: [
                                  (0, i.jsx)(s.Spacer, { size: 8 }),
                                  (0, i.jsx)(v.Z, {
                                      role: u,
                                      guildId: n,
                                      className: P.roleMessagePreview
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
                      (0, i.jsx)(y, {
                          guildId: n,
                          listingId: t
                      })
                  ]
              });
    },
    M = (e) => {
        let t,
            { onToggle: n, isViewAll: r, showMoreText: l } = e;
        return (
            (t = r
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          Z.intl.string(Z.t['r/xxPT']),
                          (0, i.jsx)(s.ChevronSmallUpIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: P.toggleTruncationButtonIcon
                          })
                      ]
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          l,
                          (0, i.jsx)(s.ChevronSmallDownIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: P.toggleTruncationButtonIcon
                          })
                      ]
                  })),
            (0, i.jsx)(s.Button, {
                look: s.Button.Looks.BLANK,
                size: s.Button.Sizes.NONE,
                className: P.toggleTruncationButton,
                innerClassName: P.toggleTruncationButtonInner,
                onClick: n,
                children: t
            })
        );
    };
t.Z = (e) => {
    var t;
    let { listingId: n, guildId: l, groupListingId: d, analyticsLocation: h } = e,
        C = (0, p.jO)(n),
        { openModal: I, canOpenModal: x, cannotOpenReason: v, isCheckingTrialEligibility: T } = (0, b.Z)(C, l, d, h),
        L = (0, o.e7)([m.Z], () => m.Z.isSyncing),
        { activeSubscription: y, activeSubscriptionListing: k } = (0, g.Z)(d),
        D = (null == k ? void 0 : k.id) === n,
        B = (null == y ? void 0 : y.status) === R.O0b.CANCELED,
        [U, w] = r.useState(!1),
        [F, G] = r.useState(!1),
        V = r.useCallback((e) => {
            let t = !1;
            null != e && (t = e.scrollHeight - e.clientHeight > 1), G(t);
        }, []),
        [H] = _._T(n),
        [z] = _.PK(n),
        [W] = _.TT(n),
        [K] = _.F2(n),
        Y = (0, E.Z)(l, n),
        X = null != W && null == y && Y,
        Q = (0, c.Z)(j.iP),
        [q, J] = r.useState(!1),
        $ = q || !Q,
        ee = (0, o.e7)([u.Z], () => u.Z.isViewingServerShop(l)),
        et = (null == C ? void 0 : C.published) === !0,
        en = (null == C ? void 0 : C.soft_deleted) === !0,
        ei = Z.intl.string(Z.t.KzmEAw);
    return (et || ee) && !en
        ? (0, i.jsxs)('article', {
              className: P.container,
              'aria-label': H,
              children: [
                  X &&
                      (0, i.jsxs)('div', {
                          className: a()(P.tierTrialIndicator, P.tierTopIndicator),
                          children: [
                              Z.intl.format(Z.t.L2ouio, {
                                  trialPeriodDuration: (0, f.iG)({
                                      interval: W.interval,
                                      interval_count: W.interval_count
                                  })
                              }),
                              (0, i.jsx)(s.Tooltip, {
                                  clickableOnMobile: !0,
                                  text: Z.intl.formatToPlainString(Z.t.FYyR4u, { activeTrialUserLimit: null != K ? K : 0 }),
                                  children: (e) =>
                                      (0, i.jsx)(s.CircleInformationIcon, {
                                          size: 'xs',
                                          color: 'currentColor',
                                          className: P.tierTrialIndicatorIcon,
                                          ...e
                                      })
                              })
                          ]
                      }),
                  (0, i.jsxs)('div', {
                      className: X ? void 0 : P.cardContainerWithoutTopIndicator,
                      children: [
                          (0, i.jsxs)('div', {
                              className: P.tierInfoContainer,
                              children: [
                                  Q
                                      ? (0, i.jsx)(A.e, {
                                            listingId: n,
                                            isListingPublished: et,
                                            expanded: $,
                                            onToggleExpanded: () => J((e) => !e)
                                        })
                                      : (0, i.jsx)(S.xv, {
                                            listingId: n,
                                            isListingPublished: et
                                        }),
                                  $ &&
                                      (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              Q && (0, i.jsx)('div', { className: P.divider }),
                                              D
                                                  ? (0, i.jsx)(s.Button, {
                                                        fullWidth: !0,
                                                        look: s.Button.Looks.OUTLINED,
                                                        color: s.Button.Colors.PRIMARY,
                                                        disabled: !0,
                                                        children: B ? Z.intl.string(Z.t.iKHmu7) : Z.intl.string(Z.t.XvAuMj)
                                                    })
                                                  : (0, i.jsx)(s.Tooltip, {
                                                        text: x ? null : v,
                                                        'aria-label': null !== (t = x && v) && void 0 !== t && t,
                                                        children: (e) =>
                                                            (0, i.jsx)(N.Z, {
                                                                ...e,
                                                                fullWidth: !0,
                                                                disabled: !x || L,
                                                                submitting: T,
                                                                onClick: I,
                                                                onlyShineOnHover: !0,
                                                                children: Z.intl.string(Z.t.fM5Zsb)
                                                            })
                                                    }),
                                              (0, i.jsx)(s.Spacer, { size: 16 }),
                                              (0, i.jsx)(s.Text, {
                                                  variant: 'text-sm/normal',
                                                  color: 'text-normal',
                                                  className: a()((!F || !U) && P.tierDescriptionTruncate),
                                                  children: (0, i.jsx)('div', {
                                                      ref: V,
                                                      children: z
                                                  })
                                              }),
                                              F &&
                                                  (0, i.jsx)(M, {
                                                      isViewAll: U,
                                                      onToggle: () => w((e) => !e),
                                                      showMoreText: ei
                                                  })
                                          ]
                                      })
                              ]
                          }),
                          $ &&
                              (0, i.jsx)(s.HeadingLevel, {
                                  children: (0, i.jsx)(O, {
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
