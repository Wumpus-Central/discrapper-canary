var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(780384),
    c = r(481060),
    d = r(410030),
    f = r(424218),
    _ = r(380684),
    h = r(981631),
    p = r(474936),
    m = r(388032),
    g = r(711458);
let E = [
    {
        getPerkHeading: () => m.intl.string(m.t.tIiwur),
        getPerkPreviewLightTheme: () => r(414102),
        getPerkPreviewDarkTheme: () => r(614600),
        getTier0Value: () => p.HO[h.Eu4.NONE].limits.emoji,
        getTier1Value: () => p.HO[h.Eu4.TIER_1].limits.emoji,
        getTier2Value: () => p.HO[h.Eu4.TIER_2].limits.emoji,
        getTier3Value: () => p.HO[h.Eu4.TIER_3].limits.emoji
    },
    {
        getPerkHeading: () => m.intl.string(m.t['3iccen']),
        getPerkPreviewLightTheme: () => r(73541),
        getPerkPreviewDarkTheme: () => r(43735),
        getTier0Value: () => p.HO[h.Eu4.NONE].limits.stickers,
        getTier1Value: () => p.HO[h.Eu4.TIER_1].limits.stickers,
        getTier2Value: () => p.HO[h.Eu4.TIER_2].limits.stickers,
        getTier3Value: () => p.HO[h.Eu4.TIER_3].limits.stickers
    },
    {
        getPerkHeading: () => m.intl.string(m.t['+smCv7']),
        getPerkPreviewLightTheme: () => r(69098),
        getPerkPreviewDarkTheme: () => r(881755),
        getTier0Value: () => p.HO[h.Eu4.NONE].limits.soundboardSounds,
        getTier1Value: () => p.HO[h.Eu4.TIER_1].limits.soundboardSounds,
        getTier2Value: () => p.HO[h.Eu4.TIER_2].limits.soundboardSounds,
        getTier3Value: () => p.HO[h.Eu4.TIER_3].limits.soundboardSounds
    },
    {
        getPerkHeading: () => m.intl.string(m.t.SMYauL),
        getPerkPreviewLightTheme: () => r(989015),
        getPerkPreviewDarkTheme: () => r(904257),
        getTier0Value: () =>
            m.intl.formatToPlainString(m.t.zZ6Rdn, {
                resolution: p.HO[h.Eu4.NONE].limits.screenShareQualityResolution,
                framerate: p.HO[h.Eu4.NONE].limits.screenShareQualityFramerate
            }),
        getTier1Value: () =>
            m.intl.formatToPlainString(m.t.zZ6Rdn, {
                resolution: p.HO[h.Eu4.TIER_1].limits.screenShareQualityResolution,
                framerate: p.HO[h.Eu4.TIER_1].limits.screenShareQualityFramerate
            }),
        getTier2Value: () =>
            m.intl.formatToPlainString(m.t.zZ6Rdn, {
                resolution: p.HO[h.Eu4.TIER_2].limits.screenShareQualityResolution,
                framerate: p.HO[h.Eu4.TIER_2].limits.screenShareQualityFramerate
            }),
        getTier3Value: () =>
            m.intl.formatToPlainString(m.t.zZ6Rdn, {
                resolution: p.HO[h.Eu4.TIER_3].limits.screenShareQualityResolution,
                framerate: p.HO[h.Eu4.TIER_3].limits.screenShareQualityFramerate
            })
    },
    {
        getPerkHeading: () => m.intl.string(m.t['/79IDg']),
        getPerkPreviewLightTheme: () => r(222185),
        getPerkPreviewDarkTheme: () => r(415480),
        getTier0Value: () => m.intl.formatToPlainString(m.t.w1gmLi, { bitrate: p.HO[h.Eu4.NONE].limits.bitrate / 1000 }),
        getTier1Value: () => m.intl.formatToPlainString(m.t.w1gmLi, { bitrate: p.HO[h.Eu4.TIER_1].limits.bitrate / 1000 }),
        getTier2Value: () => m.intl.formatToPlainString(m.t.w1gmLi, { bitrate: p.HO[h.Eu4.TIER_2].limits.bitrate / 1000 }),
        getTier3Value: () => m.intl.formatToPlainString(m.t.w1gmLi, { bitrate: p.HO[h.Eu4.TIER_3].limits.bitrate / 1000 })
    },
    {
        getPerkHeading: () => m.intl.string(m.t.R1U2xM),
        getPerkPreviewLightTheme: () => r(825588),
        getPerkPreviewDarkTheme: () => r(954499),
        getTier0Value: () => ((0, _.XS)() ? (0, f.BU)(h.WKe / 1024, { useKibibytes: !0 }) : m.intl.formatToPlainString(m.t.pIn7AQ, { size: p.HO[h.Eu4.NONE].limits.fileSize / 1024 / 1024 })),
        getTier1Value: () => ((0, _.XS)() ? (0, f.BU)(h.WKe / 1024, { useKibibytes: !0 }) : m.intl.formatToPlainString(m.t.pIn7AQ, { size: p.HO[h.Eu4.TIER_1].limits.fileSize / 1024 / 1024 })),
        getTier2Value: () => m.intl.formatToPlainString(m.t.pIn7AQ, { size: p.HO[h.Eu4.TIER_2].limits.fileSize / 1024 / 1024 }),
        getTier3Value: () => m.intl.formatToPlainString(m.t.pIn7AQ, { size: p.HO[h.Eu4.TIER_3].limits.fileSize / 1024 / 1024 })
    },
    {
        getPerkHeading: () => m.intl.string(m.t.f6vfsr),
        getPerkPreviewLightTheme: () => r(241190),
        getPerkPreviewDarkTheme: () => r(879846),
        getTier0Value: () => p.HO[h.Eu4.NONE].limits.stageVideoUsers,
        getTier1Value: () => p.HO[h.Eu4.TIER_1].limits.stageVideoUsers,
        getTier2Value: () => p.HO[h.Eu4.TIER_2].limits.stageVideoUsers,
        getTier3Value: () => p.HO[h.Eu4.TIER_3].limits.stageVideoUsers
    },
    {
        getPerkHeading: () => m.intl.string(m.t.qDqUMD),
        getPerkPreviewLightTheme: () => r(499059),
        getPerkPreviewDarkTheme: () => r(488349),
        getTier0Value: () => !1,
        getTier1Value: () => !0,
        getTier2Value: () => !0,
        getTier3Value: () => !0
    },
    {
        getPerkHeading: () => m.intl.string(m.t.uwqgbm),
        getPerkPreviewLightTheme: () => r(136631),
        getPerkPreviewDarkTheme: () => r(692079),
        getTier0Value: () => !1,
        getTier1Value: () => !0,
        getTier2Value: () => !0,
        getTier3Value: () => !0
    },
    {
        getPerkHeading: () => m.intl.string(m.t.zxsDxc),
        getPerkPreviewLightTheme: () => r(277822),
        getPerkPreviewDarkTheme: () => r(866919),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => m.intl.string(m.t['2TNS3t']),
        getTier3Value: () => m.intl.string(m.t['l+S46e'])
    },
    {
        getPerkHeading: () => m.intl.string(m.t['bHa+ER']),
        getPerkPreviewLightTheme: () => r(872259),
        getPerkPreviewDarkTheme: () => r(876049),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => !0,
        getTier3Value: () => !0
    },
    {
        getPerkHeading: () => m.intl.string(m.t.QV6MZW),
        getPerkPreviewLightTheme: () => r(710717),
        getPerkPreviewDarkTheme: () => r(945198),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => !1,
        getTier3Value: () => !0
    }
];
function v(e) {
    let { children: n, className: r, tier: i } = e,
        s = i === h.Eu4.NONE ? 'text-muted' : 'header-primary',
        o = i === h.Eu4.NONE || null == i ? 'heading-xl/normal' : 'heading-xl/bold';
    return (0, a.jsxs)('th', {
        className: l()(g.columnHeading, r),
        scope: 'col',
        children: [
            (0, a.jsx)(c.Heading, {
                color: s,
                variant: o,
                children: n
            }),
            null != i &&
                (0, a.jsx)(c.Text, {
                    color: s,
                    variant: 'text-md/normal',
                    children: m.intl.format(m.t['pob/cH'], { subscriptions: h.oCV[i] })
                })
        ]
    });
}
function I(e) {
    let n;
    let { className: r, textVariant: i = 'text-md/bold', value: s } = e;
    if ('boolean' == typeof s) {
        let e = l()(g.booleanValueIcon, { [g.booleanValueTrue]: s });
        n = s
            ? (0, a.jsx)(c.CheckmarkLargeIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: e
              })
            : (0, a.jsx)(c.XSmallIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: e
              });
    } else
        n = (0, a.jsx)(c.Text, {
            color: 'interactive-active',
            variant: i,
            children: s
        });
    return (0, a.jsx)('td', {
        className: l()(g.tableCell, r),
        children: n
    });
}
function T(e) {
    switch (e) {
        case h.Eu4.NONE:
        case h.Eu4.TIER_1:
            return h.Eu4.TIER_2;
        case h.Eu4.TIER_2:
        case h.Eu4.TIER_3:
            return h.Eu4.TIER_3;
        default:
            return null;
    }
}
function b(e) {
    let { currentTier: n } = e,
        r = T(n);
    return null == r
        ? null
        : (0, a.jsx)('div', {
              className: l()(g.recommendedTierHighlight, {
                  [g.recommendedTierHighlightTier2]: r === h.Eu4.TIER_2,
                  [g.recommendedTierHighlightTier3]: r === h.Eu4.TIER_3
              }),
              children: (0, a.jsx)(c.Text, {
                  className: g.recommendedTierHighlightTag,
                  color: 'always-white',
                  variant: 'text-xs/bold',
                  children: n === h.Eu4.TIER_3 ? m.intl.string(m.t.d849Ul) : m.intl.string(m.t.dZeX19)
              })
          });
}
function y(e) {
    let n = (0, d.ZP)(),
        [r, i] = s.useState(null),
        { className: o, guild: f, hideHeading: _, hideTier0: p } = e;
    function T(e) {
        i(e);
    }
    function y() {
        i(null);
    }
    return (0, a.jsxs)('div', {
        className: o,
        children: [
            !_ &&
                (0, a.jsx)(c.Heading, {
                    className: g.heading,
                    variant: 'heading-xxl/extrabold',
                    children: m.intl.string(m.t['9GGb9v'])
                }),
            (0, a.jsxs)('div', {
                className: g.tableWrapper,
                children: [
                    null != f && (0, a.jsx)(b, { currentTier: f.premiumTier }),
                    (0, a.jsxs)('table', {
                        className: g.table,
                        cellPadding: 0,
                        cellSpacing: 0,
                        children: [
                            (0, a.jsx)('thead', {
                                children: (0, a.jsxs)('tr', {
                                    className: g.__invalid_tableRow,
                                    children: [
                                        (0, a.jsx)(v, {
                                            className: g.tableRowHeading,
                                            children: m.intl.string(m.t.F5MY0t)
                                        }),
                                        !p &&
                                            (0, a.jsx)(v, {
                                                tier: h.Eu4.NONE,
                                                children: m.intl.string(m.t.mx8j2t)
                                            }),
                                        (0, a.jsx)(v, {
                                            tier: h.Eu4.TIER_1,
                                            children: m.intl.string(m.t.nzXtaW)
                                        }),
                                        (0, a.jsx)(v, {
                                            tier: h.Eu4.TIER_2,
                                            children: m.intl.string(m.t['h33/ub'])
                                        }),
                                        (0, a.jsx)(v, {
                                            tier: h.Eu4.TIER_3,
                                            children: m.intl.string(m.t.BfF6EB)
                                        })
                                    ]
                                })
                            }),
                            (0, a.jsx)('tbody', {
                                className: g.__invalid_tableBody,
                                children: E.map((e, i) => {
                                    let s = r === i;
                                    function o() {
                                        T(i);
                                    }
                                    return void 0 === e.predicate
                                        ? (0, a.jsxs)(
                                              'tr',
                                              {
                                                  className: g.__invalid_tableRow,
                                                  children: [
                                                      (0, a.jsx)('th', {
                                                          className: l()(g.tableCell, g.tableCellWrapper),
                                                          scope: 'row',
                                                          children: (0, a.jsx)(c.Clickable, {
                                                              className: l()(g.tableRowHeading, g.tableCell, g.tableCellInner),
                                                              onFocus: o,
                                                              onBlur: y,
                                                              onMouseEnter: o,
                                                              onMouseLeave: y,
                                                              children: (0, a.jsx)(c.Popout, {
                                                                  align: 'center',
                                                                  disablePointerEvents: !0,
                                                                  nudgeAlignIntoViewport: !0,
                                                                  position: 'bottom',
                                                                  renderPopout: () =>
                                                                      (0, a.jsx)('img', {
                                                                          className: g.perkPreviewImage,
                                                                          src: (0, u.wj)(n) ? e.getPerkPreviewDarkTheme() : e.getPerkPreviewLightTheme(),
                                                                          alt: ''
                                                                      }),
                                                                  shouldShow: s,
                                                                  spacing: 16,
                                                                  children: () =>
                                                                      (0, a.jsx)(c.Text, {
                                                                          variant: 'text-md/normal',
                                                                          children: e.getPerkHeading()
                                                                      })
                                                              })
                                                          })
                                                      }),
                                                      !p &&
                                                          (0, a.jsx)(I, {
                                                              textVariant: 'text-md/normal',
                                                              value: e.getTier0Value()
                                                          }),
                                                      (0, a.jsx)(I, { value: e.getTier1Value() }),
                                                      (0, a.jsx)(I, { value: e.getTier2Value() }),
                                                      (0, a.jsx)(I, { value: e.getTier3Value() })
                                                  ]
                                              },
                                              i
                                          )
                                        : null;
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
n.Z = y;
