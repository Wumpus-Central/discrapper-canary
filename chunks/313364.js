n.d(t, { Z: () => R });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(399606),
    o = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(189357),
    m = n(613464),
    g = n(434404),
    p = n(6025),
    f = n(892001),
    h = n(433355),
    x = n(430824),
    b = n(893966),
    j = n(527379),
    v = n(305473),
    _ = n(113679),
    O = n(440857),
    C = n(472596),
    y = n(598948),
    N = n(428936),
    I = n(41586),
    E = n(918192),
    S = n(981631),
    T = n(388032),
    P = n(881786),
    w = n(319586);
function R(e) {
    let { guildId: t } = e,
        n = (0, a.e7)([x.Z], () => x.Z.getGuild(t)),
        { analyticsLocations: l } = (0, d.ZP)(c.Z.GUILD_SETTINGS_MEMBERS_PAGE),
        R = (0, u.m)(t),
        Z = (0, a.e7)([h.ZP], () => h.ZP.getGuildSidebarState(t), [t]),
        D = i.useCallback(() => {
            p.Z.closeGuildSidebar(t);
        }, [t]),
        A = !1 == !!(null == n ? void 0 : n.features.has(S.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)),
        L = (0, a.e7)([b.Z], () => b.Z.getEstimatedMemberSearchCountByGuildId(t), [t]),
        k = i.useCallback(
            (e) => {
                null != e &&
                    (0, f.openUserProfileModal)({
                        userId: e.userId,
                        guildId: e.guildId,
                        sourceAnalyticsLocations: l
                    });
            },
            [l]
        ),
        M = i.useRef(null),
        G = i.useCallback(() => {
            var e;
            null == (e = M.current) || e.resetSearchText();
        }, []);
    if (null == n) return null;
    let U = (0, C.xb)(!1, !1, L);
    return (0, r.jsxs)(d.Gt, {
        value: l,
        children: [
            (0, r.jsx)('div', {
                className: s()(w.customColumn, P.override, P.settingsColumn),
                children: (0, r.jsx)('div', {
                    className: w.customContainer,
                    children: (0, r.jsx)(o.w0Z, {
                        className: w.customScroller,
                        orientation: 'auto',
                        children: (0, r.jsx)(o.w0Z, {
                            className: P.settingsHorizontalScroller,
                            orientation: 'auto',
                            children: (0, r.jsxs)('main', {
                                className: s()(w.customColumn, w.contentColumnDefault, P.override, P.settingsColumn, P.settingsContent),
                                children: [
                                    (0, r.jsx)(
                                        o.hjN,
                                        {
                                            className: P.header,
                                            children: (0, r.jsx)(o.vwX, {
                                                tag: o.RB0.H1,
                                                children: T.intl.string(T.t['S40K6+'])
                                            })
                                        },
                                        'header'
                                    ),
                                    (0, r.jsx)(
                                        o.hjN,
                                        {
                                            children: (0, r.jsxs)('div', {
                                                className: P.tableContainer,
                                                children: [
                                                    (0, r.jsx)(_.Z, { guild: n }),
                                                    (0, r.jsx)(v.Z, { guild: n }),
                                                    A
                                                        ? (0, r.jsxs)('div', {
                                                              className: P.mainTableContainer,
                                                              children: [
                                                                  (0, r.jsx)(I.Z, {
                                                                      guild: n,
                                                                      ref: M
                                                                  }),
                                                                  (0, r.jsx)(y.Z, {
                                                                      guild: n,
                                                                      searchState: U,
                                                                      compact: !0,
                                                                      onSelectRow: k,
                                                                      onResetForNewMembers: G
                                                                  }),
                                                                  U !== C.po.SUCCESS_STILL_INDEXING && (0, r.jsx)(N.Z, { guildId: n.id })
                                                              ]
                                                          })
                                                        : (0, r.jsx)('div', {
                                                              className: P.movedTable,
                                                              children: (0, r.jsxs)('div', {
                                                                  className: P.noResultsContainer,
                                                                  children: [
                                                                      (0, r.jsx)('div', { children: (0, r.jsx)(E.Z, {}) }),
                                                                      (0, r.jsx)(o.Text, {
                                                                          variant: 'text-md/normal',
                                                                          color: 'text-muted',
                                                                          children: T.intl.format(T.t.Bf6yxM, {
                                                                              onClick: (e) => {
                                                                                  null != n && (e.preventDefault(), g.Z.close(), (0, j._X)(n.id));
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
                                    (0, r.jsx)(O.Z, { guildId: n.id })
                                ]
                            })
                        })
                    })
                })
            }),
            R &&
                null != Z &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(o.ZMr, {
                            isVisible: !0,
                            onClick: D
                        }),
                        (0, r.jsx)('div', {
                            className: P.modViewSidebarContainer,
                            style: { width: S.$Y6 },
                            children: (0, r.jsx)(m.Z, {
                                userId: Z.details.userId,
                                guildId: Z.details.guildId,
                                onClose: D
                            })
                        })
                    ]
                })
        ]
    });
}
