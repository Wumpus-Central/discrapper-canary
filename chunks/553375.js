r.d(n, {
    ZP: function () {
        return h;
    },
    nK: function () {
        return f;
    },
    uj: function () {
        return p;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    o = r(26033),
    s = r(810568),
    l = r(168524),
    u = r(858042),
    c = r(981631),
    d = r(388032);
function f(e) {
    let { user: n, activity: r, entry: i } = e;
    return null != i
        ? {
              applicationId: (0, o.dX)(i) ? i.extra.application_id : void 0,
              sourceUserId: i.author_id
          }
        : null != r
          ? {
                applicationId: r.type === c.IIU.PLAYING && null != r.application_id ? r.application_id : void 0,
                sourceUserId: n.id
            }
          : {
                applicationId: void 0,
                sourceUserId: void 0
            };
}
function p(e) {
    let { user: n, activity: r, entry: i } = e,
        { applicationId: a } = f({
            activity: r,
            entry: i,
            user: n
        });
    return (0, u.M)({
        applicationId: a,
        showOutdatedInfoOption: !1
    });
}
function h(e) {
    let { user: n, activity: r, entry: o, onAction: u, isMenuOpen: c } = e,
        { applicationId: p, sourceUserId: h } = f({
            activity: r,
            entry: o,
            user: n
        }),
        _ = (0, l.Z)({
            location: 'UserProfileActivityContextMenu',
            source: s.m1.UserProfileCardContextMenu,
            trackEntryPointImpression: c,
            applicationId: p,
            sourceUserId: h
        });
    return null == _
        ? null
        : (0, i.jsx)(a.MenuItem, {
              id: 'game-profile',
              label: d.intl.string(d.t.ajHoOj),
              action: (e) => {
                  null == u || u({ action: 'PRESS_VIEW_GAME_PROFILE_MENU_ITEM' }), _(e);
              }
          });
}
