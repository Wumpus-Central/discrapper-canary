var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(780384),
    c = r(481060),
    d = r(410030),
    f = r(981631),
    p = r(474936),
    h = r(388032),
    _ = r(711458);
let m = 1048576,
    g = [
        {
            getPerkHeading: () => h.intl.string(h.t.tIiwur),
            getPerkPreviewLightTheme: () => r(414102),
            getPerkPreviewDarkTheme: () => r(614600),
            getTier0Value: () => p.HO[f.Eu4.NONE].limits.emoji,
            getTier1Value: () => p.HO[f.Eu4.TIER_1].limits.emoji,
            getTier2Value: () => p.HO[f.Eu4.TIER_2].limits.emoji,
            getTier3Value: () => p.HO[f.Eu4.TIER_3].limits.emoji
        },
        {
            getPerkHeading: () => h.intl.string(h.t['3iccen']),
            getPerkPreviewLightTheme: () => r(73541),
            getPerkPreviewDarkTheme: () => r(43735),
            getTier0Value: () => p.HO[f.Eu4.NONE].limits.stickers,
            getTier1Value: () => p.HO[f.Eu4.TIER_1].limits.stickers,
            getTier2Value: () => p.HO[f.Eu4.TIER_2].limits.stickers,
            getTier3Value: () => p.HO[f.Eu4.TIER_3].limits.stickers
        },
        {
            getPerkHeading: () => h.intl.string(h.t['+smCv7']),
            getPerkPreviewLightTheme: () => r(69098),
            getPerkPreviewDarkTheme: () => r(881755),
            getTier0Value: () => p.HO[f.Eu4.NONE].limits.soundboardSounds,
            getTier1Value: () => p.HO[f.Eu4.TIER_1].limits.soundboardSounds,
            getTier2Value: () => p.HO[f.Eu4.TIER_2].limits.soundboardSounds,
            getTier3Value: () => p.HO[f.Eu4.TIER_3].limits.soundboardSounds
        },
        {
            getPerkHeading: () => h.intl.string(h.t.SMYauL),
            getPerkPreviewLightTheme: () => r(989015),
            getPerkPreviewDarkTheme: () => r(904257),
            getTier0Value: () =>
                h.intl.formatToPlainString(h.t.zZ6Rdn, {
                    resolution: p.HO[f.Eu4.NONE].limits.screenShareQualityResolution,
                    framerate: p.HO[f.Eu4.NONE].limits.screenShareQualityFramerate
                }),
            getTier1Value: () =>
                h.intl.formatToPlainString(h.t.zZ6Rdn, {
                    resolution: p.HO[f.Eu4.TIER_1].limits.screenShareQualityResolution,
                    framerate: p.HO[f.Eu4.TIER_1].limits.screenShareQualityFramerate
                }),
            getTier2Value: () =>
                h.intl.formatToPlainString(h.t.zZ6Rdn, {
                    resolution: p.HO[f.Eu4.TIER_2].limits.screenShareQualityResolution,
                    framerate: p.HO[f.Eu4.TIER_2].limits.screenShareQualityFramerate
                }),
            getTier3Value: () =>
                h.intl.formatToPlainString(h.t.zZ6Rdn, {
                    resolution: p.HO[f.Eu4.TIER_3].limits.screenShareQualityResolution,
                    framerate: p.HO[f.Eu4.TIER_3].limits.screenShareQualityFramerate
                })
        },
        {
            getPerkHeading: () => h.intl.string(h.t['/79IDg']),
            getPerkPreviewLightTheme: () => r(222185),
            getPerkPreviewDarkTheme: () => r(415480),
            getTier0Value: () => h.intl.formatToPlainString(h.t.w1gmLi, { bitrate: p.HO[f.Eu4.NONE].limits.bitrate / 1000 }),
            getTier1Value: () => h.intl.formatToPlainString(h.t.w1gmLi, { bitrate: p.HO[f.Eu4.TIER_1].limits.bitrate / 1000 }),
            getTier2Value: () => h.intl.formatToPlainString(h.t.w1gmLi, { bitrate: p.HO[f.Eu4.TIER_2].limits.bitrate / 1000 }),
            getTier3Value: () => h.intl.formatToPlainString(h.t.w1gmLi, { bitrate: p.HO[f.Eu4.TIER_3].limits.bitrate / 1000 })
        },
        {
            getPerkHeading: () => h.intl.string(h.t.R1U2xM),
            getPerkPreviewLightTheme: () => r(825588),
            getPerkPreviewDarkTheme: () => r(954499),
            getTier0Value: () => h.intl.formatToPlainString(h.t.pIn7AQ, { size: p.HO[f.Eu4.NONE].limits.fileSize / m }),
            getTier1Value: () => h.intl.formatToPlainString(h.t.pIn7AQ, { size: p.HO[f.Eu4.TIER_1].limits.fileSize / m }),
            getTier2Value: () => h.intl.formatToPlainString(h.t.pIn7AQ, { size: p.HO[f.Eu4.TIER_2].limits.fileSize / m }),
            getTier3Value: () => h.intl.formatToPlainString(h.t.pIn7AQ, { size: p.HO[f.Eu4.TIER_3].limits.fileSize / m })
        },
        {
            getPerkHeading: () => h.intl.string(h.t.f6vfsr),
            getPerkPreviewLightTheme: () => r(241190),
            getPerkPreviewDarkTheme: () => r(879846),
            getTier0Value: () => p.HO[f.Eu4.NONE].limits.stageVideoUsers,
            getTier1Value: () => p.HO[f.Eu4.TIER_1].limits.stageVideoUsers,
            getTier2Value: () => p.HO[f.Eu4.TIER_2].limits.stageVideoUsers,
            getTier3Value: () => p.HO[f.Eu4.TIER_3].limits.stageVideoUsers
        },
        {
            getPerkHeading: () => h.intl.string(h.t.qDqUMD),
            getPerkPreviewLightTheme: () => r(499059),
            getPerkPreviewDarkTheme: () => r(488349),
            getTier0Value: () => !1,
            getTier1Value: () => !0,
            getTier2Value: () => !0,
            getTier3Value: () => !0
        },
        {
            getPerkHeading: () => h.intl.string(h.t.uwqgbm),
            getPerkPreviewLightTheme: () => r(136631),
            getPerkPreviewDarkTheme: () => r(692079),
            getTier0Value: () => !1,
            getTier1Value: () => !0,
            getTier2Value: () => !0,
            getTier3Value: () => !0
        },
        {
            getPerkHeading: () => h.intl.string(h.t.zxsDxc),
            getPerkPreviewLightTheme: () => r(277822),
            getPerkPreviewDarkTheme: () => r(866919),
            getTier0Value: () => !1,
            getTier1Value: () => !1,
            getTier2Value: () => h.intl.string(h.t['2TNS3t']),
            getTier3Value: () => h.intl.string(h.t['l+S46e'])
        },
        {
            getPerkHeading: () => h.intl.string(h.t['bHa+ER']),
            getPerkPreviewLightTheme: () => r(872259),
            getPerkPreviewDarkTheme: () => r(876049),
            getTier0Value: () => !1,
            getTier1Value: () => !1,
            getTier2Value: () => !0,
            getTier3Value: () => !0
        },
        {
            getPerkHeading: () => h.intl.string(h.t.QV6MZW),
            getPerkPreviewLightTheme: () => r(710717),
            getPerkPreviewDarkTheme: () => r(945198),
            getTier0Value: () => !1,
            getTier1Value: () => !1,
            getTier2Value: () => !1,
            getTier3Value: () => !0
        }
    ];
function E(e) {
    let { children: n, className: r, tier: i } = e,
        o = i === f.Eu4.NONE ? 'text-muted' : 'header-primary',
        s = i === f.Eu4.NONE || null == i ? 'heading-xl/normal' : 'heading-xl/bold';
    return (0, a.jsxs)('th', {
        className: l()(_.columnHeading, r),
        scope: 'col',
        children: [
            (0, a.jsx)(c.Heading, {
                color: o,
                variant: s,
                children: n
            }),
            null != i &&
                (0, a.jsx)(c.Text, {
                    color: o,
                    variant: 'text-md/normal',
                    children: h.intl.format(h.t['pob/cH'], { subscriptions: f.oCV[i] })
                })
        ]
    });
}
function v(e) {
    let n;
    let { className: r, textVariant: i = 'text-md/bold', value: o } = e;
    if ('boolean' == typeof o) {
        let e = l()(_.booleanValueIcon, { [_.booleanValueTrue]: o });
        n = o
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
            children: o
        });
    return (0, a.jsx)('td', {
        className: l()(_.tableCell, r),
        children: n
    });
}
function y(e) {
    switch (e) {
        case f.Eu4.NONE:
        case f.Eu4.TIER_1:
            return f.Eu4.TIER_2;
        case f.Eu4.TIER_2:
        case f.Eu4.TIER_3:
            return f.Eu4.TIER_3;
        default:
            return null;
    }
}
function b(e) {
    let { currentTier: n } = e,
        r = y(n);
    return null == r
        ? null
        : (0, a.jsx)('div', {
              className: l()(_.recommendedTierHighlight, {
                  [_.recommendedTierHighlightTier2]: r === f.Eu4.TIER_2,
                  [_.recommendedTierHighlightTier3]: r === f.Eu4.TIER_3
              }),
              children: (0, a.jsx)(c.Text, {
                  className: _.recommendedTierHighlightTag,
                  color: 'always-white',
                  variant: 'text-xs/bold',
                  children: n === f.Eu4.TIER_3 ? h.intl.string(h.t.d849Ul) : h.intl.string(h.t.dZeX19)
              })
          });
}
function I(e) {
    let n = (0, d.ZP)(),
        [r, i] = o.useState(null),
        { className: s, guild: p, hideHeading: m, hideTier0: y } = e;
    function I(e) {
        i(e);
    }
    function T() {
        i(null);
    }
    return (0, a.jsxs)('div', {
        className: s,
        children: [
            !m &&
                (0, a.jsx)(c.Heading, {
                    className: _.heading,
                    variant: 'heading-xxl/extrabold',
                    children: h.intl.string(h.t['9GGb9v'])
                }),
            (0, a.jsxs)('div', {
                className: _.tableWrapper,
                children: [
                    null != p && (0, a.jsx)(b, { currentTier: p.premiumTier }),
                    (0, a.jsxs)('table', {
                        className: _.table,
                        cellPadding: 0,
                        cellSpacing: 0,
                        children: [
                            (0, a.jsx)('thead', {
                                children: (0, a.jsxs)('tr', {
                                    className: _.__invalid_tableRow,
                                    children: [
                                        (0, a.jsx)(E, {
                                            className: _.tableRowHeading,
                                            children: h.intl.string(h.t.F5MY0t)
                                        }),
                                        !y &&
                                            (0, a.jsx)(E, {
                                                tier: f.Eu4.NONE,
                                                children: h.intl.string(h.t.mx8j2t)
                                            }),
                                        (0, a.jsx)(E, {
                                            tier: f.Eu4.TIER_1,
                                            children: h.intl.string(h.t.nzXtaW)
                                        }),
                                        (0, a.jsx)(E, {
                                            tier: f.Eu4.TIER_2,
                                            children: h.intl.string(h.t['h33/ub'])
                                        }),
                                        (0, a.jsx)(E, {
                                            tier: f.Eu4.TIER_3,
                                            children: h.intl.string(h.t.BfF6EB)
                                        })
                                    ]
                                })
                            }),
                            (0, a.jsx)('tbody', {
                                className: _.__invalid_tableBody,
                                children: g.map((e, i) => {
                                    let o = r === i;
                                    function s() {
                                        I(i);
                                    }
                                    return void 0 === e.predicate
                                        ? (0, a.jsxs)(
                                              'tr',
                                              {
                                                  className: _.__invalid_tableRow,
                                                  children: [
                                                      (0, a.jsx)('th', {
                                                          className: l()(_.tableCell, _.tableCellWrapper),
                                                          scope: 'row',
                                                          children: (0, a.jsx)(c.Clickable, {
                                                              className: l()(_.tableRowHeading, _.tableCell, _.tableCellInner),
                                                              onFocus: s,
                                                              onBlur: T,
                                                              onMouseEnter: s,
                                                              onMouseLeave: T,
                                                              children: (0, a.jsx)(c.Popout, {
                                                                  align: 'center',
                                                                  disablePointerEvents: !0,
                                                                  nudgeAlignIntoViewport: !0,
                                                                  position: 'bottom',
                                                                  renderPopout: () =>
                                                                      (0, a.jsx)('img', {
                                                                          className: _.perkPreviewImage,
                                                                          src: (0, u.wj)(n) ? e.getPerkPreviewDarkTheme() : e.getPerkPreviewLightTheme(),
                                                                          alt: ''
                                                                      }),
                                                                  shouldShow: o,
                                                                  spacing: 16,
                                                                  children: () =>
                                                                      (0, a.jsx)(c.Text, {
                                                                          variant: 'text-md/normal',
                                                                          children: e.getPerkHeading()
                                                                      })
                                                              })
                                                          })
                                                      }),
                                                      !y &&
                                                          (0, a.jsx)(v, {
                                                              textVariant: 'text-md/normal',
                                                              value: e.getTier0Value()
                                                          }),
                                                      (0, a.jsx)(v, { value: e.getTier1Value() }),
                                                      (0, a.jsx)(v, { value: e.getTier2Value() }),
                                                      (0, a.jsx)(v, { value: e.getTier3Value() })
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
n.Z = I;
