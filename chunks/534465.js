n.d(e, { Ay: () => p, UE: () => A, gA: () => f });
var l = n(477900);
n(582128);
var i = n(192308),
    a = n(477782),
    r = n(672979),
    s = n(20805),
    o = n(409626),
    c = n(692969),
    u = n(652215),
    d = n(375708);
function A(t) {
    let { user: e, activity: n, entry: l } = t;
    return null != l
        ? { applicationId: (0, s.zD)(l) ? l.extra.application_id : void 0, sourceUserId: l.author_id }
        : null != n
          ? {
                applicationId: n.type === u.$pd.PLAYING && null != n.application_id ? n.application_id : void 0,
                sourceUserId: e.id,
            }
          : { applicationId: void 0, sourceUserId: void 0 };
}
function f(t) {
    let { activity: e, entry: o } = t,
        c = null != e && (0, r.A)(e),
        u = null != o && (0, s.zD)(o);
    return c || u
        ? (0, l.jsx)(a.Dr, {
              id: "game-detection-report-issue",
              label: d.intl.string(d.t.qP2cXd),
              action: function () {
                  return (0, i.openModalLazy)(async () => {
                      let { default: t } = await Promise.all([
                          n.e("142753"),
                          n.e("568035"),
                          n.e("268582"),
                          n.e("733771"),
                          n.e("946039"),
                          n.e("627495"),
                      ]).then(n.bind(n, 651930));
                      return null != e
                          ? (n) => (0, l.jsx)(t, { ...n, detected: { name: e.name, applicationId: e.application_id } })
                          : null != o && (0, s.zD)(o)
                            ? (e) =>
                                  (0, l.jsx)(t, {
                                      ...e,
                                      detected: { name: o.extra.game_name, applicationId: o.extra.application_id },
                                  })
                            : (e) => (0, l.jsx)(t, { ...e });
                  });
              },
          })
        : null;
}
function p(t) {
    let { user: e, activity: n, entry: i, onAction: r, isMenuOpen: s, appContext: u } = t,
        { applicationId: f, sourceUserId: p } = A({ activity: n, entry: i, user: e }),
        g = (0, c.A)({
            location: "UserProfileActivityContextMenu",
            source: o.GameProfileSources.UserProfileCardContextMenu,
            trackEntryPointImpression: s,
            applicationId: f,
            sourceUserId: p,
            appContext: u,
        });
    return null == g
        ? null
        : (0, l.jsx)(a.Dr, {
              id: "game-profile",
              label: d.intl.string(d.t.ajHoOr),
              action: (t) => {
                  (r?.({ action: "PRESS_VIEW_GAME_PROFILE_MENU_ITEM" }), g(t));
              },
          });
}
