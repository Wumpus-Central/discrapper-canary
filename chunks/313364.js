n.d(t, { Z: () => S });
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(399606),
    o = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(434404),
    m = n(171368),
    h = n(430824),
    g = n(893966),
    x = n(527379),
    p = n(305473),
    _ = n(113679),
    C = n(440857),
    f = n(472596),
    v = n(598948),
    N = n(428936),
    j = n(41586),
    I = n(918192),
    E = n(981631),
    b = n(388032),
    T = n(621913);
function S(e) {
    let { guildId: t } = e,
        n = (0, a.e7)([h.Z], () => h.Z.getGuild(t)),
        { analyticsLocations: l } = (0, d.ZP)(c.Z.GUILD_SETTINGS_MEMBERS_PAGE),
        S = !1 == !!(null == n ? void 0 : n.hasFeature(E.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)),
        R = (0, a.e7)([g.Z], () => g.Z.getEstimatedMemberSearchCountByGuildId(t), [t]),
        Z = r.useCallback(
            (e) => {
                null != e &&
                    (0, m.openUserProfileModal)({
                        userId: e.userId,
                        guildId: e.guildId,
                        sourceAnalyticsLocations: l,
                        analyticsLocation: { section: E.jXE.GUILD_SETTINGS_MEMBERS }
                    });
            },
            [l]
        ),
        y = r.useRef(null),
        A = r.useCallback(() => {
            var e;
            null === (e = y.current) || void 0 === e || e.resetSearchText();
        }, []);
    if (null == n) return null;
    let L = (0, f.xb)(!1, !1, R);
    return (0, i.jsx)(d.Gt, {
        value: l,
        children: (0, i.jsx)('div', {
            className: T.settingsColumn,
            children: (0, i.jsx)('div', {
                className: T.settingsContainer,
                children: (0, i.jsx)(o.w0Z, {
                    className: T.settingsScroller,
                    orientation: 'auto',
                    children: (0, i.jsx)(o.w0Z, {
                        className: T.settingsHorizontalScroller,
                        orientation: 'auto',
                        children: (0, i.jsxs)('main', {
                            className: T.settingsContent,
                            children: [
                                (0, i.jsx)(
                                    o.hjN,
                                    {
                                        className: s()(T.header),
                                        children: (0, i.jsx)(o.vwX, {
                                            tag: o.RB0.H1,
                                            children: b.intl.string(b.t['S40K6+'])
                                        })
                                    },
                                    'header'
                                ),
                                (0, i.jsx)(
                                    o.hjN,
                                    {
                                        children: (0, i.jsxs)('div', {
                                            className: s()(T.tableContainer),
                                            children: [
                                                (0, i.jsx)(_.Z, { guild: n }),
                                                (0, i.jsx)(p.Z, { guild: n }),
                                                S
                                                    ? (0, i.jsxs)('div', {
                                                          className: s()(T.mainTableContainer),
                                                          children: [
                                                              (0, i.jsx)(j.Z, {
                                                                  guild: n,
                                                                  ref: y
                                                              }),
                                                              (0, i.jsx)(v.Z, {
                                                                  guild: n,
                                                                  searchState: L,
                                                                  compact: !0,
                                                                  onSelectRow: Z,
                                                                  onResetForNewMembers: A
                                                              }),
                                                              L !== f.po.SUCCESS_STILL_INDEXING && (0, i.jsx)(N.Z, { guildId: n.id })
                                                          ]
                                                      })
                                                    : (0, i.jsx)('div', {
                                                          className: s()(T.movedTable),
                                                          children: (0, i.jsxs)('div', {
                                                              className: s()(T.noResultsContainer),
                                                              children: [
                                                                  (0, i.jsx)('div', {
                                                                      className: s()(T.__invalid_noResultsIconContainer),
                                                                      children: (0, i.jsx)(I.Z, {})
                                                                  }),
                                                                  (0, i.jsx)(o.Text, {
                                                                      variant: 'text-md/normal',
                                                                      color: 'text-muted',
                                                                      children: b.intl.format(b.t.Bf6yxM, {
                                                                          onClick: (e) => {
                                                                              null != n && (e.preventDefault(), u.Z.close(), (0, x._X)(n.id));
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
                                (0, i.jsx)(C.Z, { guildId: n.id })
                            ]
                        })
                    })
                })
            })
        })
    });
}
