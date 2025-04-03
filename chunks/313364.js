n.d(t, { Z: () => S });
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
    g = n(430824),
    p = n(893966),
    h = n(527379),
    f = n(305473),
    b = n(113679),
    x = n(440857),
    j = n(472596),
    N = n(598948),
    _ = n(428936),
    v = n(41586),
    C = n(918192),
    O = n(981631),
    y = n(388032),
    I = n(881786),
    E = n(319586);
function S(e) {
    let { guildId: t } = e,
        n = (0, l.e7)([g.Z], () => g.Z.getGuild(t)),
        { analyticsLocations: s } = (0, d.ZP)(c.Z.GUILD_SETTINGS_MEMBERS_PAGE),
        S = !1 == !!(null == n ? void 0 : n.hasFeature(O.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)),
        T = (0, l.e7)([p.Z], () => p.Z.getEstimatedMemberSearchCountByGuildId(t), [t]),
        P = i.useCallback(
            (e) => {
                null != e &&
                    (0, m.openUserProfileModal)({
                        userId: e.userId,
                        guildId: e.guildId,
                        sourceAnalyticsLocations: s,
                        analyticsLocation: { section: O.jXE.GUILD_SETTINGS_MEMBERS }
                    });
            },
            [s]
        ),
        w = i.useRef(null),
        R = i.useCallback(() => {
            var e;
            null == (e = w.current) || e.resetSearchText();
        }, []);
    if (null == n) return null;
    let Z = (0, j.xb)(!1, !1, T);
    return (0, r.jsx)(d.Gt, {
        value: s,
        children: (0, r.jsx)('div', {
            className: a()(E.customColumn, I.override, I.settingsColumn),
            children: (0, r.jsx)('div', {
                className: E.customContainer,
                children: (0, r.jsx)(o.w0Z, {
                    className: E.customScroller,
                    orientation: 'auto',
                    children: (0, r.jsx)(o.w0Z, {
                        className: I.settingsHorizontalScroller,
                        orientation: 'auto',
                        children: (0, r.jsxs)('main', {
                            className: a()(E.customColumn, E.contentColumnDefault, I.override, I.settingsColumn, I.settingsContent),
                            children: [
                                (0, r.jsx)(
                                    o.hjN,
                                    {
                                        className: I.header,
                                        children: (0, r.jsx)(o.vwX, {
                                            tag: o.RB0.H1,
                                            children: y.NW.string(y.t['S40K6+'])
                                        })
                                    },
                                    'header'
                                ),
                                (0, r.jsx)(
                                    o.hjN,
                                    {
                                        children: (0, r.jsxs)('div', {
                                            className: I.tableContainer,
                                            children: [
                                                (0, r.jsx)(b.Z, { guild: n }),
                                                (0, r.jsx)(f.Z, { guild: n }),
                                                S
                                                    ? (0, r.jsxs)('div', {
                                                          className: I.mainTableContainer,
                                                          children: [
                                                              (0, r.jsx)(v.Z, {
                                                                  guild: n,
                                                                  ref: w
                                                              }),
                                                              (0, r.jsx)(N.Z, {
                                                                  guild: n,
                                                                  searchState: Z,
                                                                  compact: !0,
                                                                  onSelectRow: P,
                                                                  onResetForNewMembers: R
                                                              }),
                                                              Z !== j.po.SUCCESS_STILL_INDEXING && (0, r.jsx)(_.Z, { guildId: n.id })
                                                          ]
                                                      })
                                                    : (0, r.jsx)('div', {
                                                          className: I.movedTable,
                                                          children: (0, r.jsxs)('div', {
                                                              className: I.noResultsContainer,
                                                              children: [
                                                                  (0, r.jsx)('div', { children: (0, r.jsx)(C.Z, {}) }),
                                                                  (0, r.jsx)(o.Text, {
                                                                      variant: 'text-md/normal',
                                                                      color: 'text-muted',
                                                                      children: y.NW.format(y.t.Bf6yxM, {
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
