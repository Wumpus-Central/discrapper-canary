n.d(t, { Z: () => E });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(399606),
    o = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(434404),
    m = n(171368),
    p = n(430824),
    g = n(893966),
    h = n(527379),
    f = n(305473),
    b = n(113679),
    x = n(440857),
    j = n(472596),
    N = n(598948),
    v = n(428936),
    _ = n(41586),
    O = n(918192),
    y = n(981631),
    C = n(388032),
    I = n(200100);
function E(e) {
    let { guildId: t } = e,
        n = (0, l.e7)([p.Z], () => p.Z.getGuild(t)),
        { analyticsLocations: s } = (0, d.ZP)(c.Z.GUILD_SETTINGS_MEMBERS_PAGE),
        E = !1 == !!(null == n ? void 0 : n.hasFeature(y.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)),
        S = (0, l.e7)([g.Z], () => g.Z.getEstimatedMemberSearchCountByGuildId(t), [t]),
        T = i.useCallback(
            (e) => {
                null != e &&
                    (0, m.openUserProfileModal)({
                        userId: e.userId,
                        guildId: e.guildId,
                        sourceAnalyticsLocations: s,
                        analyticsLocation: { section: y.jXE.GUILD_SETTINGS_MEMBERS }
                    });
            },
            [s]
        ),
        P = i.useRef(null),
        w = i.useCallback(() => {
            var e;
            null === (e = P.current) || void 0 === e || e.resetSearchText();
        }, []);
    if (null == n) return null;
    let R = (0, j.xb)(!1, !1, S);
    return (0, r.jsx)(d.Gt, {
        value: s,
        children: (0, r.jsx)('div', {
            className: I.settingsColumn,
            children: (0, r.jsx)('div', {
                className: I.settingsContainer,
                children: (0, r.jsx)(o.w0Z, {
                    className: I.settingsScroller,
                    orientation: 'auto',
                    children: (0, r.jsx)(o.w0Z, {
                        className: I.settingsHorizontalScroller,
                        orientation: 'auto',
                        children: (0, r.jsxs)('main', {
                            className: I.settingsContent,
                            children: [
                                (0, r.jsx)(
                                    o.hjN,
                                    {
                                        className: a()(I.header),
                                        children: (0, r.jsx)(o.vwX, {
                                            tag: o.RB0.H1,
                                            children: C.NW.string(C.t['S40K6+'])
                                        })
                                    },
                                    'header'
                                ),
                                (0, r.jsx)(
                                    o.hjN,
                                    {
                                        children: (0, r.jsxs)('div', {
                                            className: a()(I.tableContainer),
                                            children: [
                                                (0, r.jsx)(b.Z, { guild: n }),
                                                (0, r.jsx)(f.Z, { guild: n }),
                                                E
                                                    ? (0, r.jsxs)('div', {
                                                          className: a()(I.mainTableContainer),
                                                          children: [
                                                              (0, r.jsx)(_.Z, {
                                                                  guild: n,
                                                                  ref: P
                                                              }),
                                                              (0, r.jsx)(N.Z, {
                                                                  guild: n,
                                                                  searchState: R,
                                                                  compact: !0,
                                                                  onSelectRow: T,
                                                                  onResetForNewMembers: w
                                                              }),
                                                              R !== j.po.SUCCESS_STILL_INDEXING && (0, r.jsx)(v.Z, { guildId: n.id })
                                                          ]
                                                      })
                                                    : (0, r.jsx)('div', {
                                                          className: a()(I.movedTable),
                                                          children: (0, r.jsxs)('div', {
                                                              className: a()(I.noResultsContainer),
                                                              children: [
                                                                  (0, r.jsx)('div', {
                                                                      className: a()(I.__invalid_noResultsIconContainer),
                                                                      children: (0, r.jsx)(O.Z, {})
                                                                  }),
                                                                  (0, r.jsx)(o.Text, {
                                                                      variant: 'text-md/normal',
                                                                      color: 'text-muted',
                                                                      children: C.NW.format(C.t.Bf6yxM, {
                                                                          onClick: (e) => {
                                                                              null != n && (e.preventDefault(), u.Z.close(), (0, h._X)(n.id));
                                                                          }
                                                                      })
                                                                  })
                                                              ]
                                                          })
                                                      })
                                            ]
                                        })
                                    },
                                    'body'
                                ),
                                (0, r.jsx)(x.Z, { guildId: n.id })
                            ]
                        })
                    })
                })
            })
        })
    });
}
