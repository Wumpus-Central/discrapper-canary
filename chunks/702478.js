n(47120);
var i = n(200651),
    r = n(192379),
    l = n(772848),
    a = n(640358),
    s = n(442837),
    o = n(544891),
    c = n(704215),
    d = n(692547),
    u = n(481060),
    m = n(497321),
    h = n(841470),
    g = n(605236),
    x = n(142497),
    p = n(690221),
    f = n(706454),
    C = n(650774),
    v = n(430824),
    _ = n(246946),
    N = n(626135),
    I = n(771212),
    T = n(434404),
    j = n(146596),
    b = n(559368),
    S = n(999382),
    E = n(981631),
    R = n(921944),
    y = n(190378),
    A = n(388032),
    Z = n(175957),
    L = n(287837),
    D = n(573189),
    O = n(899947),
    k = n(117831),
    M = n(996737),
    P = n(21846),
    w = n(280632),
    B = n(44234),
    U = n(117428);
let G = function (e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r = null;
        return (
            null == t || Number.isNaN(t) ? (null == t || Number.isNaN(t)) && null != e && (r = A.intl.string(A.t.xO2msb)) : (r = A.intl.formatToPlainString(A.t.nskeMz, { percentage: (0, a.o)(Math.abs(t), n) })),
            {
                localizedNumber: null != e ? ''.concat((0, a.o)(e, n)).concat(i ? '%' : '') : A.intl.string(A.t.jHpxws),
                subtext: r,
                isTrendingUp: t > 0,
                isTrendingDown: t < 0
            }
        );
    },
    F = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return t || e === E.evJ.NOT_ENOUGH_GUILD_MEMBERS
            ? (0, i.jsx)(u.FormErrorBlock, {
                  icon: u.CircleInformationIcon,
                  className: Z.notEnoughMembersError,
                  backgroundColor: u.FormErrorBlockColors.BACKGROUND_ACCENT,
                  children: A.intl.string(A.t['FsgE/P'])
              })
            : null == e
              ? null
              : (0, i.jsx)(u.FormErrorBlock, {
                    backgroundColor: u.FormErrorBlockColors.BACKGROUND_ACCENT,
                    children: A.intl.string(A.t.Iju63d)
                });
    };
function H(e) {
    N.default.track(E.rMx.GUILD_INSIGHTS_SETTINGS_CTA_CLICKED, { guild_id: e });
    let t = null == e ? E.E07.DEVELOPER_PORTAL : E.E07.DEVELOPER_PORTAL_GUILD_ANALYTICS(e),
        n = (0, l.Z)();
    return o.tn
        .post({
            url: E.ANM.HANDOFF,
            body: { key: n },
            oldFormErrors: !0,
            rejectWithError: !0
        })
        .then(
            (e) => {
                let i = e.body.handoff_token;
                window.open(E.EYA.DEVELOPER_PORTAL_LOGIN_HANDOFF(n, i, t));
            },
            () => {
                window.open(t);
            }
        );
}
let z = () => {
    let [e, t] = r.useState(!1),
        n = (0, s.e7)([S.Z], () => S.Z.getGuildId());
    return (0, i.jsx)(u.Button, {
        className: Z.developerPortalCta,
        onClick: () => {
            t(!0),
                H(n).then(() => {
                    t(!1);
                });
        },
        submitting: e,
        children: A.intl.string(A.t.Uskgx8)
    });
};
function W(e) {
    let { guildId: t } = e,
        { hasAccessRate: n, accessRate: l } = (0, s.cj)([b.Z], () => b.Z.getMemberInsights(t)),
        a = (0, s.e7)([C.Z], () => {
            var e;
            return null !== (e = C.Z.getMemberCount()) && void 0 !== e ? e : 0;
        }),
        { showAccessRate: o } = (0, I.eA)(t, !n);
    if (
        (r.useEffect(() => {
            o && ((0, g.kk)(c.z.GUILD_INSIGHTS_ACCESS_RATE_NEW), (0, g.EW)(c.z.GUILD_INSIGHTS_ACCESS_RATE_NEW, { dismissAction: R.L.AUTO }));
        }, [o]),
        !o || !n || null == l)
    )
        return null;
    let m = 10 * Math.ceil((1 - l) * 10),
        h = U,
        x = null,
        f = null;
    return (
        l >= 0.9
            ? ((h = U),
              (x = A.intl.format(A.t.wMU3am, {
                  ratingHook: (e, t) =>
                      (0, i.jsx)(
                          'span',
                          {
                              className: Z.ratingVeryGood,
                              children: e
                          },
                          t
                      )
              })),
              (f = A.intl.formatToPlainString(A.t.cgTr3d, { accessRate: 10 })))
            : l >= (a > 10000 ? 0.7 : 0.8)
              ? ((h = w),
                (x = A.intl.format(A.t.DelTmZ, {
                    ratingHook: (e, t) =>
                        (0, i.jsx)(
                            'span',
                            {
                                className: Z.ratingGood,
                                children: e
                            },
                            t
                        )
                })),
                (f = A.intl.formatToPlainString(A.t['+k7pAA'], { accessRate: m })))
              : l >= 0.5
                ? ((h = B),
                  (x = A.intl.format(A.t.THsJo6, {
                      ratingHook: (e, t) =>
                          (0, i.jsx)(
                              'span',
                              {
                                  className: Z.ratingNeutral,
                                  children: e
                              },
                              t
                          )
                  })),
                  (f = A.intl.formatToPlainString(A.t['+k7pAA'], { accessRate: m })))
                : ((h = P),
                  (x = A.intl.format(A.t.RNxsr6, {
                      ratingHook: (e, t) =>
                          (0, i.jsx)(
                              'span',
                              {
                                  className: Z.ratingBad,
                                  children: e
                              },
                              t
                          )
                  })),
                  (f = 100 === m ? A.intl.formatToPlainString(A.t['+k7pAA'], { accessRate: m }) : A.intl.formatToPlainString(A.t['Qsgz/v'], { accessRate: m }))),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(u.Heading, {
                    variant: 'heading-md/semibold',
                    className: Z.insightsTitle,
                    children: [
                        A.intl.string(A.t['qF8c+/']),
                        (0, i.jsx)(u.TextBadge, {
                            text: A.intl.string(A.t.oW0eUV),
                            color: d.Z.unsafe_rawColors.BRAND_500.css,
                            className: Z.betaTag
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: Z.memberInsightsContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            className: Z.insightsHeader,
                            children: [
                                (0, i.jsx)('img', {
                                    alt: '',
                                    className: Z.insightsIcon,
                                    src: h
                                }),
                                (0, i.jsxs)('div', {
                                    children: [
                                        (0, i.jsx)(u.Text, {
                                            variant: 'text-md/semibold',
                                            className: Z.title,
                                            children: x
                                        }),
                                        (0, i.jsxs)(u.Text, {
                                            className: Z.description,
                                            variant: 'text-sm/normal',
                                            children: [
                                                f,
                                                (0, i.jsx)(u.TooltipContainer, {
                                                    text: A.intl.string(A.t['60A+Hh']),
                                                    className: Z.insightsTooltip,
                                                    children: (0, i.jsx)(u.CircleInformationIcon, {
                                                        size: 'xs',
                                                        color: 'currentColor',
                                                        className: Z.insightsTooltipIcon
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        l < 0.9
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)('div', { className: Z.divider }),
                                      (0, i.jsx)(u.Text, {
                                          className: Z.tips,
                                          variant: 'text-sm/semibold',
                                          children: A.intl.format(A.t.lTFjS0, {})
                                      }),
                                      (0, i.jsxs)('div', {
                                          className: Z.insightsActions,
                                          children: [
                                              (0, i.jsxs)('div', {
                                                  className: Z.insightAction,
                                                  children: [
                                                      (0, i.jsx)('img', {
                                                          alt: '',
                                                          className: Z.actionIcon,
                                                          src: O
                                                      }),
                                                      (0, i.jsx)(u.Text, {
                                                          className: Z.actionText,
                                                          variant: 'text-sm/normal',
                                                          children: A.intl.string(A.t.SpYbQE)
                                                      })
                                                  ]
                                              }),
                                              (0, i.jsx)('div', { className: Z.dividerInline }),
                                              (0, i.jsxs)('div', {
                                                  className: Z.insightAction,
                                                  children: [
                                                      (0, i.jsx)('img', {
                                                          alt: '',
                                                          className: Z.actionIcon,
                                                          src: k
                                                      }),
                                                      (0, i.jsx)(u.Text, {
                                                          className: Z.actionText,
                                                          variant: 'text-sm/normal',
                                                          children: A.intl.string(A.t.fLKr9v)
                                                      })
                                                  ]
                                              }),
                                              (0, i.jsx)('div', { className: Z.dividerInline }),
                                              (0, i.jsxs)('div', {
                                                  className: Z.insightAction,
                                                  children: [
                                                      (0, i.jsx)('img', {
                                                          alt: '',
                                                          className: Z.actionIcon,
                                                          src: D
                                                      }),
                                                      (0, i.jsx)(u.Text, {
                                                          className: Z.actionText,
                                                          variant: 'text-sm/normal',
                                                          children: A.intl.format(A.t.cq9w2N, {
                                                              integrationsHook: (e, t) =>
                                                                  (0, i.jsx)(
                                                                      p.Z,
                                                                      {
                                                                          onClick: () => T.Z.setSection(E.pNK.INTEGRATIONS),
                                                                          className: Z.link,
                                                                          children: e
                                                                      },
                                                                      t
                                                                  )
                                                          })
                                                      })
                                                  ]
                                              }),
                                              (0, i.jsx)('div', { className: Z.dividerInline }),
                                              (0, i.jsxs)('div', {
                                                  className: Z.insightAction,
                                                  children: [
                                                      (0, i.jsx)('img', {
                                                          alt: '',
                                                          className: Z.actionIcon,
                                                          src: L
                                                      }),
                                                      (0, i.jsx)(u.Text, {
                                                          className: Z.actionText,
                                                          variant: 'text-sm/normal',
                                                          children: A.intl.string(A.t['2Gz/j4'])
                                                      })
                                                  ]
                                              })
                                          ]
                                      })
                                  ]
                              })
                            : (0, i.jsx)('div', {
                                  className: Z.insightsActions,
                                  children: (0, i.jsxs)('div', {
                                      className: Z.insightAction,
                                      children: [
                                          (0, i.jsx)('img', {
                                              alt: '',
                                              className: Z.actionIcon,
                                              src: M
                                          }),
                                          (0, i.jsx)(u.Text, {
                                              className: Z.actionText,
                                              variant: 'text-sm/normal',
                                              children: A.intl.format(A.t['3i3mAg'], {
                                                  insightsHook: (e, n) =>
                                                      (0, i.jsx)(
                                                          p.Z,
                                                          {
                                                              onClick: () => H(t),
                                                              className: Z.link,
                                                              children: e
                                                          },
                                                          n
                                                      )
                                              })
                                          })
                                      ]
                                  })
                              })
                    ]
                }),
                (0, i.jsx)('div', { className: Z.divider }),
                (0, i.jsx)(u.Heading, {
                    variant: 'heading-md/semibold',
                    className: Z.insightsTitle,
                    children: A.intl.string(A.t['0wWfUF'])
                })
            ]
        })
    );
}
t.Z = () => {
    let e = (0, s.e7)([S.Z], () => S.Z.getGuildId()),
        t = (0, s.e7)([C.Z], () => C.Z.getMemberCount(e)),
        n = (0, s.e7)([v.Z], () => v.Z.getGuild(e)),
        l = (0, s.e7)([f.default], () => f.default.locale),
        { analytics: a, errorCode: o } = (0, s.cj)([b.Z], () => ({
            analytics: null != e ? b.Z.getOverviewAnalytics(e) : null,
            errorCode: b.Z.getError()
        })),
        c = (0, s.e7)([_.Z], () => _.Z.getSettings().enabled),
        d = null == t || null == n || (null != t && t < 500 && null != n && !n.hasFeature(E.oNc.PARTNERED) && !n.hasFeature(E.oNc.VERIFIED));
    r.useEffect(() => {
        null != e && !d && ((0, j.Vk)(e), (0, j.SR)(e), (0, j.xl)(e));
    }, [e, d]),
        r.useEffect(() => {
            (0, x.Kw)(y.v.GUILD_ANALYTICS_GUILD_SETTINGS_MENU);
        }, []);
    let g =
        null != a
            ? (0, i.jsx)('div', {
                  className: Z.__invalid_guildAnalyticsOverviewWrapper,
                  children: (0, i.jsxs)('div', {
                      className: Z.overviewData,
                      children: [
                          (0, i.jsx)(h.Z, {
                              title: A.intl.string(A.t.i0Nora),
                              tooltipText: A.intl.string(A.t.KiRbLC),
                              ...G(a.visitors, a.visitorsChange, l)
                          }),
                          (0, i.jsx)(h.Z, {
                              title: A.intl.string(A.t.DDAHdX),
                              tooltipText: A.intl.string(A.t.HxWUkZ),
                              ...G(a.communicators, a.communicatorsChange, l)
                          }),
                          (0, i.jsx)(h.Z, {
                              title: A.intl.string(A.t.hYeOqK),
                              ...G(a.newMembers, a.newMembersChange, l)
                          }),
                          (0, i.jsx)(h.Z, {
                              title: A.intl.string(A.t.jj7OPz),
                              tooltipText: A.intl.string(A.t.MQCsl5),
                              ...G(a.pctRetained, a.pctRetainedChange, l, !0)
                          })
                      ]
                  })
              })
            : null;
    return (0, i.jsxs)(u.FormSection, {
        tag: u.FormTitleTags.H1,
        title: A.intl.string(A.t['0wWfUF']),
        children: [
            (0, i.jsx)(u.FormText, {
                type: u.FormTextTypes.DESCRIPTION,
                children: A.intl.format(A.t.NIZ60d, {})
            }),
            F(o, d),
            null != e ? (0, i.jsx)(W, { guildId: e }) : null,
            (0, i.jsxs)('div', {
                className: Z.developerPortalCtaWrapper,
                children: [
                    (0, i.jsx)('div', { className: Z.placeholderImage }),
                    (0, i.jsx)(u.Text, {
                        className: Z.developerPortalCtaText,
                        variant: 'text-sm/normal',
                        children: A.intl.string(A.t.A5vsws)
                    }),
                    (0, i.jsx)(z, {})
                ]
            }),
            c
                ? (0, i.jsx)('div', {
                      className: Z.streamerMode,
                      children: (0, i.jsx)(m.Z, {})
                  })
                : g
        ]
    });
};
