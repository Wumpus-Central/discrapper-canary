n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(399606),
    o = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(434404),
    m = n(171368),
    h = n(430824),
    g = n(893966),
    x = n(527379),
    p = n(305473),
    f = n(113679),
    C = n(440857),
    v = n(472596),
    _ = n(598948),
    N = n(428936),
    I = n(41586),
    T = n(918192),
    j = n(981631),
    b = n(388032),
    S = n(758151);
function E(e) {
    let { guildId: t } = e,
        n = (0, s.e7)([h.Z], () => h.Z.getGuild(t)),
        { analyticsLocations: l } = (0, d.ZP)(c.Z.GUILD_SETTINGS_MEMBERS_PAGE),
        E = !1 == !!(null == n ? void 0 : n.hasFeature(j.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)),
        R = (0, s.e7)([g.Z], () => g.Z.getEstimatedMemberSearchCountByGuildId(t), [t]),
        y = r.useCallback(
            (e) => {
                if (null != e)
                    (0, m.openUserProfileModal)({
                        userId: e.userId,
                        guildId: e.guildId,
                        sourceAnalyticsLocations: l,
                        analyticsLocation: { section: j.jXE.GUILD_SETTINGS_MEMBERS }
                    });
            },
            [l]
        ),
        A = r.useRef(null),
        Z = r.useCallback(() => {
            var e;
            null === (e = A.current) || void 0 === e || e.resetSearchText();
        }, []);
    if (null == n) return null;
    let L = (0, v.xb)(!1, !1, R);
    return (0, i.jsx)(d.Gt, {
        value: l,
        children: (0, i.jsx)('div', {
            className: S.settingsColumn,
            children: (0, i.jsx)('div', {
                className: S.settingsContainer,
                children: (0, i.jsx)(o.ScrollerAuto, {
                    className: S.settingsScroller,
                    orientation: 'auto',
                    children: (0, i.jsxs)('main', {
                        className: S.settingsContent,
                        children: [
                            (0, i.jsx)(
                                o.FormSection,
                                {
                                    className: a()(S.header),
                                    children: (0, i.jsx)(o.FormTitle, {
                                        tag: o.FormTitleTags.H1,
                                        children: b.intl.string(b.t['S40K6+'])
                                    })
                                },
                                'header'
                            ),
                            (0, i.jsx)(
                                o.FormSection,
                                {
                                    children: (0, i.jsxs)('div', {
                                        className: a()(S.tableContainer),
                                        children: [
                                            (0, i.jsx)(f.Z, { guild: n }),
                                            (0, i.jsx)(p.Z, { guild: n }),
                                            E
                                                ? (0, i.jsxs)('div', {
                                                      className: a()(S.mainTableContainer),
                                                      children: [
                                                          (0, i.jsx)(I.Z, {
                                                              guild: n,
                                                              ref: A
                                                          }),
                                                          (0, i.jsx)(_.Z, {
                                                              guild: n,
                                                              searchState: L,
                                                              compact: !0,
                                                              onSelectRow: y,
                                                              onResetForNewMembers: Z
                                                          }),
                                                          L !== v.po.SUCCESS_STILL_INDEXING && (0, i.jsx)(N.Z, { guildId: n.id })
                                                      ]
                                                  })
                                                : (0, i.jsx)('div', {
                                                      className: a()(S.movedTable),
                                                      children: (0, i.jsxs)('div', {
                                                          className: a()(S.noResultsContainer),
                                                          children: [
                                                              (0, i.jsx)('div', {
                                                                  className: a()(S.__invalid_noResultsIconContainer),
                                                                  children: (0, i.jsx)(T.Z, {})
                                                              }),
                                                              (0, i.jsx)(o.Text, {
                                                                  variant: 'text-md/normal',
                                                                  color: 'text-muted',
                                                                  children: b.intl.format(b.t.Bf6yxM, {
                                                                      onClick: (e) => {
                                                                          if (null != n) e.preventDefault(), u.Z.close(), (0, x._X)(n.id);
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
    });
}
