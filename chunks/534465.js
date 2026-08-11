e.d(n, { Ay: () => p, UE: () => A, gA: () => x });
var i = e(477900);
e(582128);
var l = e(192308),
    a = e(477782),
    r = e(672979),
    s = e(20805),
    o = e(409626),
    c = e(692969),
    u = e(652215),
    d = e(375708);
function A(t) {
    let { user: n, activity: e, entry: i } = t;
    return null != i
        ? { applicationId: (0, s.zD)(i) ? i.extra.application_id : void 0, sourceUserId: i.author_id }
        : null != e
          ? {
                applicationId: e.type === u.$pd.PLAYING && null != e.application_id ? e.application_id : void 0,
                sourceUserId: n.id,
            }
          : { applicationId: void 0, sourceUserId: void 0 };
}
function x(t) {
    let { activity: n, entry: o } = t,
        c = null != n && (0, r.A)(n),
        u = null != o && (0, s.zD)(o);
    return c || u
        ? (0, i.jsx)(a.Dr, {
              id: "game-detection-report-issue",
              label: d.intl.string(d.t.qP2cXd),
              action: function () {
                  return (0, l.openModalLazy)(async () => {
                      let { default: t } = await Promise.all([
                          e.e("98064"),
                          e.e("21072"),
                          e.e("8891"),
                          e.e("33771"),
                          e.e("46039"),
                          e.e("27495"),
                      ]).then(e.bind(e, 651930));
                      return null != n
                          ? (e) => (0, i.jsx)(t, { ...e, detected: { name: n.name, applicationId: n.application_id } })
                          : null != o && (0, s.zD)(o)
                            ? (n) =>
                                  (0, i.jsx)(t, {
                                      ...n,
                                      detected: { name: o.extra.game_name, applicationId: o.extra.application_id },
                                  })
                            : (n) => (0, i.jsx)(t, { ...n });
                  });
              },
          })
        : null;
}
function p(t) {
    let { user: n, activity: e, entry: l, onAction: r, isMenuOpen: s, appContext: u } = t,
        { applicationId: x, sourceUserId: p } = A({ activity: e, entry: l, user: n }),
        f = (0, c.A)({
            location: "UserProfileActivityContextMenu",
            source: o.GameProfileSources.UserProfileCardContextMenu,
            trackEntryPointImpression: s,
            applicationId: x,
            sourceUserId: p,
            appContext: u,
        });
    return null == f
        ? null
        : (0, i.jsx)(a.Dr, {
              id: "game-profile",
              label: d.intl.string(d.t.ajHoOr),
              action: (t) => {
                  r?.({ action: "PRESS_VIEW_GAME_PROFILE_MENU_ITEM" }), f(t);
              },
          });
}
