n.d(e, { Ay: () => g, UE: () => A, gA: () => f });
var l = n(477900);
n(582128);
var i = n(350835),
    a = n(192308),
    r = n(477782),
    s = n(672979),
    o = n(20805),
    c = n(409626),
    u = n(692969),
    d = n(105292);
function A(t) {
    let { user: e, activity: n, entry: l } = t;
    return null != l
        ? { applicationId: (0, o.zD)(l) ? l.extra.application_id : void 0, sourceUserId: l.author_id }
        : null != n
          ? {
                applicationId: n.type === i.$.PLAYING && null != n.application_id ? n.application_id : void 0,
                sourceUserId: e.id,
            }
          : { applicationId: void 0, sourceUserId: void 0 };
}
function f(t) {
    let { activity: e, entry: i } = t,
        c = null != e && (0, s.A)(e),
        u = null != i && (0, o.zD)(i);
    return c || u
        ? (0, l.jsx)(r.Dr, {
              id: "game-detection-report-issue",
              label: d.intl.string(d.t.qP2cXd),
              action: function () {
                  return (0, a.openModalLazy)(async () => {
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
                          : null != i && (0, o.zD)(i)
                            ? (e) =>
                                  (0, l.jsx)(t, {
                                      ...e,
                                      detected: { name: i.extra.game_name, applicationId: i.extra.application_id },
                                  })
                            : (e) => (0, l.jsx)(t, { ...e });
                  });
              },
          })
        : null;
}
function g(t) {
    let { user: e, activity: n, entry: i, onAction: a, isMenuOpen: s, appContext: o } = t,
        { applicationId: f, sourceUserId: g } = A({ activity: n, entry: i, user: e }),
        m = (0, u.A)({
            location: "UserProfileActivityContextMenu",
            source: c.GameProfileSources.UserProfileCardContextMenu,
            trackEntryPointImpression: s,
            applicationId: f,
            sourceUserId: g,
            appContext: o,
        });
    return null == m
        ? null
        : (0, l.jsx)(r.Dr, {
              id: "game-profile",
              label: d.intl.string(d.t.ajHoOr),
              action: (t) => {
                  (a?.({ action: "PRESS_VIEW_GAME_PROFILE_MENU_ITEM" }), m(t));
              },
          });
}
