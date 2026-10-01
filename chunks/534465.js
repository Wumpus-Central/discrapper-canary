e.d(n, { Ay: () => p, UE: () => A, gA: () => x });
var l = e(477900);
e(582128);
var i = e(192308),
    r = e(477782),
    a = e(672979),
    s = e(20805),
    o = e(409626),
    c = e(692969),
    u = e(652215),
    d = e(375708);
function A(t) {
    let { user: n, activity: e, entry: l } = t;
    return null != l
        ? { applicationId: (0, s.zD)(l) ? l.extra.application_id : void 0, sourceUserId: l.author_id }
        : null != e
          ? {
                applicationId: e.type === u.$pd.PLAYING && null != e.application_id ? e.application_id : void 0,
                sourceUserId: n.id,
            }
          : { applicationId: void 0, sourceUserId: void 0 };
}
function x(t) {
    let { activity: n, entry: o } = t,
        c = null != n && (0, a.A)(n),
        u = null != o && (0, s.zD)(o);
    return c || u
        ? (0, l.jsx)(r.Dr, {
              id: "game-detection-report-issue",
              label: d.intl.string(d.t.qP2cXd),
              action: function () {
                  return (0, i.openModalLazy)(async () => {
                      let { default: t } = await Promise.all([
                          e.e("142753"),
                          e.e("568035"),
                          e.e("268582"),
                          e.e("733771"),
                          e.e("946039"),
                          e.e("627495"),
                      ]).then(e.bind(e, 651930));
                      return null != n
                          ? (e) => (0, l.jsx)(t, { ...e, detected: { name: n.name, applicationId: n.application_id } })
                          : null != o && (0, s.zD)(o)
                            ? (n) =>
                                  (0, l.jsx)(t, {
                                      ...n,
                                      detected: { name: o.extra.game_name, applicationId: o.extra.application_id },
                                  })
                            : (n) => (0, l.jsx)(t, { ...n });
                  });
              },
          })
        : null;
}
function p(t) {
    let { user: n, activity: e, entry: i, onAction: a, isMenuOpen: s, appContext: u } = t,
        { applicationId: x, sourceUserId: p } = A({ activity: e, entry: i, user: n }),
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
        : (0, l.jsx)(r.Dr, {
              id: "game-profile",
              label: d.intl.string(d.t.ajHoOr),
              action: (t) => {
                  (a?.({ action: "PRESS_VIEW_GAME_PROFILE_MENU_ITEM" }), f(t));
              },
          });
}
