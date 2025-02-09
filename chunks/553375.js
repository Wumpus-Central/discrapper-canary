n.d(t, {
    ZP: () => _,
    nK: () => d,
    uj: () => f
});
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(26033),
    s = n(810568),
    o = n(168524),
    l = n(858042),
    u = n(981631),
    c = n(388032);
function d(e) {
    let { user: t, activity: n, entry: i } = e;
    return null != i
        ? {
              applicationId: (0, a.dX)(i) ? i.extra.application_id : void 0,
              sourceUserId: i.author_id
          }
        : null != n
          ? {
                applicationId: n.type === u.IIU.PLAYING && null != n.application_id ? n.application_id : void 0,
                sourceUserId: t.id
            }
          : {
                applicationId: void 0,
                sourceUserId: void 0
            };
}
function f(e) {
    let { user: t, activity: n, entry: i } = e,
        { applicationId: r } = d({
            activity: n,
            entry: i,
            user: t
        });
    return (0, l.M)({
        applicationId: r,
        showOutdatedInfoOption: !1
    });
}
function _(e) {
    let { user: t, activity: n, entry: a, onAction: l, isMenuOpen: u, appContext: f } = e,
        { applicationId: _, sourceUserId: p } = d({
            activity: n,
            entry: a,
            user: t
        }),
        h = (0, o.Z)({
            location: 'UserProfileActivityContextMenu',
            source: s.m1.UserProfileCardContextMenu,
            trackEntryPointImpression: u,
            applicationId: _,
            sourceUserId: p,
            appContext: f
        });
    return null == h
        ? null
        : (0, i.jsx)(r.sNh, {
              id: 'game-profile',
              label: c.intl.string(c.t.ajHoOj),
              action: (e) => {
                  null == l || l({ action: 'PRESS_VIEW_GAME_PROFILE_MENU_ITEM' }), h(e);
              }
          });
}
