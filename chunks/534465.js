"use strict";
n.d(t, { Ay: () => p, UE: () => f, gA: () => h });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(477782),
    a = n(672979),
    o = n(20805),
    l = n(409626),
    u = n(692969),
    c = n(67518),
    d = n(652215),
    _ = n(375708);
function f(e) {
    let { user: t, activity: n, entry: i } = e;
    return null != i
        ? { applicationId: (0, o.zD)(i) ? i.extra.application_id : void 0, sourceUserId: i.author_id }
        : null != n
          ? {
                applicationId: n.type === d.$pd.PLAYING && null != n.application_id ? n.application_id : void 0,
                sourceUserId: t.id,
            }
          : { applicationId: void 0, sourceUserId: void 0 };
}
function h(e) {
    let { user: t, activity: l, entry: u } = e,
        { applicationId: d } = f({ activity: l, entry: u, user: t }),
        h = (0, c.n)(d),
        p = null != l && (0, a.A)(l),
        E = null != u && (0, o.zD)(u);
    return p || E
        ? (0, i.jsx)(s.Dr, {
              id: "game-detection-report-issue",
              label: _.intl.string(_.t.qP2cXd),
              action: () =>
                  (0, r.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([
                          n.e("55567"),
                          n.e("93010"),
                          n.e("56600"),
                          n.e("34530"),
                          n.e("8891"),
                          n.e("33771"),
                          n.e("46039"),
                          n.e("27495"),
                      ]).then(n.bind(n, 651930));
                      if (null != l) return (t) => (0, i.jsx)(e, { ...t, detectedActivity: l, onSubmitted: () => {} });
                      if (null != u && (0, o.zD)(u)) {
                          let t = { name: u.extra.game_name, application_id: u.extra.application_id };
                          return (n) => (0, i.jsx)(e, { ...n, detectedActivity: t, onSubmitted: () => {} });
                      }
                      return (t) => (0, i.jsx)(e, { ...t, onSubmitted: () => {} });
                  }),
          })
        : h;
}
function p(e) {
    let { user: t, activity: n, entry: r, onAction: a, isMenuOpen: o, appContext: c } = e,
        { applicationId: d, sourceUserId: h } = f({ activity: n, entry: r, user: t }),
        p = (0, u.A)({
            location: "UserProfileActivityContextMenu",
            source: l.Ob.UserProfileCardContextMenu,
            trackEntryPointImpression: o,
            applicationId: d,
            sourceUserId: h,
            appContext: c,
        });
    return null == p
        ? null
        : (0, i.jsx)(s.Dr, {
              id: "game-profile",
              label: _.intl.string(_.t.ajHoOr),
              action: (e) => {
                  a?.({ action: "PRESS_VIEW_GAME_PROFILE_MENU_ITEM" }), p(e);
              },
          });
}
