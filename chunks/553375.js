n.d(t, {
    ZP: () => _,
    nK: () => d,
    uj: () => f
});
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(26033),
    o = n(810568),
    s = n(168524),
    l = n(858042),
    c = n(981631),
    u = n(388032);
function d(e) {
    let { user: t, activity: n, entry: r } = e;
    return null != r
        ? {
              applicationId: (0, a.dX)(r) ? r.extra.application_id : void 0,
              sourceUserId: r.author_id
          }
        : null != n
          ? {
                applicationId: n.type === c.IIU.PLAYING && null != n.application_id ? n.application_id : void 0,
                sourceUserId: t.id
            }
          : {
                applicationId: void 0,
                sourceUserId: void 0
            };
}
function f(e) {
    let { user: t, activity: n, entry: r } = e,
        { applicationId: i } = d({
            activity: n,
            entry: r,
            user: t
        });
    return (0, l.M)({
        applicationId: i,
        showOutdatedInfoOption: !1
    });
}
function _(e) {
    let { user: t, activity: n, entry: a, onAction: l, isMenuOpen: c, appContext: f } = e,
        { applicationId: _, sourceUserId: p } = d({
            activity: n,
            entry: a,
            user: t
        }),
        h = (0, s.Z)({
            location: 'UserProfileActivityContextMenu',
            source: o.m1.UserProfileCardContextMenu,
            trackEntryPointImpression: c,
            applicationId: _,
            sourceUserId: p,
            appContext: f
        });
    return null == h
        ? null
        : (0, r.jsx)(i.sNh, {
              id: 'game-profile',
              label: u.NW.string(u.t.ajHoOj),
              action: (e) => {
                  null == l || l({ action: 'PRESS_VIEW_GAME_PROFILE_MENU_ITEM' }), h(e);
              }
          });
}
