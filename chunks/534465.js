"use strict";
n.d(t, { Ay: () => h, UE: () => E, gA: () => A });
var i = n(627968);
n(64700);
var r = n(192308),
    a = n(477782),
    s = n(672979),
    l = n(20805),
    o = n(409626),
    d = n(692969),
    c = n(67518),
    u = n(652215),
    _ = n(375708);
function E(e) {
    let { user: t, activity: n, entry: i } = e;
    return null != i
        ? { applicationId: (0, l.zD)(i) ? i.extra.application_id : void 0, sourceUserId: i.author_id }
        : null != n
          ? {
                applicationId: n.type === u.$pd.PLAYING && null != n.application_id ? n.application_id : void 0,
                sourceUserId: t.id,
            }
          : { applicationId: void 0, sourceUserId: void 0 };
}
function A(e) {
    let { user: t, activity: o, entry: d } = e,
        { applicationId: u } = E({ activity: o, entry: d, user: t }),
        A = (0, c.n)(u),
        h = null != o && (0, s.A)(o),
        I = null != d && (0, l.zD)(d);
    return h || I
        ? (0, i.jsx)(a.Dr, {
              id: "game-detection-report-issue",
              label: _.intl.string(_.t.qP2cXd),
              action: () =>
                  (0, r.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([
                          n.e("30593"),
                          n.e("56600"),
                          n.e("8891"),
                          n.e("33771"),
                          n.e("46039"),
                          n.e("27495"),
                      ]).then(n.bind(n, 651930));
                      if (null != o) return (t) => (0, i.jsx)(e, { ...t, detectedActivity: o, onSubmitted: () => {} });
                      if (null != d && (0, l.zD)(d)) {
                          let t = { name: d.extra.game_name, application_id: d.extra.application_id };
                          return (n) => (0, i.jsx)(e, { ...n, detectedActivity: t, onSubmitted: () => {} });
                      }
                      return (t) => (0, i.jsx)(e, { ...t, onSubmitted: () => {} });
                  }),
          })
        : A;
}
function h(e) {
    let { user: t, activity: n, entry: r, onAction: s, isMenuOpen: l, appContext: c } = e,
        { applicationId: u, sourceUserId: A } = E({ activity: n, entry: r, user: t }),
        h = (0, d.A)({
            location: "UserProfileActivityContextMenu",
            source: o.GameProfileSources.UserProfileCardContextMenu,
            trackEntryPointImpression: l,
            applicationId: u,
            sourceUserId: A,
            appContext: c,
        });
    return null == h
        ? null
        : (0, i.jsx)(a.Dr, {
              id: "game-profile",
              label: _.intl.string(_.t.ajHoOr),
              action: (e) => {
                  s?.({ action: "PRESS_VIEW_GAME_PROFILE_MENU_ITEM" }), h(e);
              },
          });
}
