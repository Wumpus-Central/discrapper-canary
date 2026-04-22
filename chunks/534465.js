e.d(n, { Ay: () => f, UE: () => x, gA: () => p });
var i = e(627968);
e(64700);
var l = e(192308),
    r = e(477782),
    a = e(672979),
    s = e(20805),
    o = e(409626),
    c = e(692969),
    u = e(67518),
    d = e(652215),
    A = e(985018);
function x(t) {
    let { user: n, activity: e, entry: i } = t;
    return null != i
        ? { applicationId: (0, s.zD)(i) ? i.extra.application_id : void 0, sourceUserId: i.author_id }
        : null != e
          ? {
                applicationId: e.type === d.$pd.PLAYING && null != e.application_id ? e.application_id : void 0,
                sourceUserId: n.id,
            }
          : { applicationId: void 0, sourceUserId: void 0 };
}
function p(t) {
    let { user: n, activity: o, entry: c } = t,
        { applicationId: d } = x({ activity: o, entry: c, user: n }),
        p = (0, u.n)(d),
        f = null != o && (0, a.A)(o),
        _ = null != c && (0, s.zD)(c);
    return f || _
        ? (0, i.jsx)(r.Dr, {
              id: "game-detection-report-issue",
              label: A.intl.string(A.t.qP2cXd),
              action: () =>
                  (0, l.openModalLazy)(async () => {
                      let { default: t } = await e.e("82733").then(e.bind(e, 651930));
                      if (null != o) return (n) => (0, i.jsx)(t, { ...n, detectedActivity: o, onSubmitted: () => {} });
                      if (null != c && (0, s.zD)(c)) {
                          let n = { name: c.extra.game_name, application_id: c.extra.application_id };
                          return (e) => (0, i.jsx)(t, { ...e, detectedActivity: n, onSubmitted: () => {} });
                      }
                      return (n) => (0, i.jsx)(t, { ...n, onSubmitted: () => {} });
                  }),
          })
        : p;
}
function f(t) {
    let { user: n, activity: e, entry: l, onAction: a, isMenuOpen: s, appContext: u } = t,
        { applicationId: d, sourceUserId: p } = x({ activity: e, entry: l, user: n }),
        f = (0, c.A)({
            location: "UserProfileActivityContextMenu",
            source: o.Ob.UserProfileCardContextMenu,
            trackEntryPointImpression: s,
            applicationId: d,
            sourceUserId: p,
            appContext: u,
        });
    return null == f
        ? null
        : (0, i.jsx)(r.Dr, {
              id: "game-profile",
              label: A.intl.string(A.t.ajHoOr),
              action: (t) => {
                  a?.({ action: "PRESS_VIEW_GAME_PROFILE_MENU_ITEM" }), f(t);
              },
          });
}
