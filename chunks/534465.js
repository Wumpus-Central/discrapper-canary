var l = e(477900);
e(582128);
var i = e(350835),
    a = e(192308),
    r = e(477782),
    s = e(672979),
    o = e(20805),
    c = e(409626),
    u = e(692969),
    d = e(792996);
function A(t) {
    let { user: n, activity: e, entry: l } = t;
    return null != l
        ? { applicationId: (0, o.zD)(l) ? l.extra.application_id : void 0, sourceUserId: l.author_id }
        : null != e
          ? {
                applicationId: e.type === i.$.PLAYING && null != e.application_id ? e.application_id : void 0,
                sourceUserId: n.id,
            }
          : { applicationId: void 0, sourceUserId: void 0 };
}
e.d(
    n,
    {},
    {
        Ay: function (t) {
            let { user: n, activity: e, entry: i, onAction: a, isMenuOpen: s, appContext: o } = t,
                { applicationId: f, sourceUserId: g } = A({ activity: e, entry: i, user: n }),
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
        },
        UE: A,
        gA: function (t) {
            let { activity: n, entry: i } = t,
                c = null != n && (0, s.A)(n),
                u = null != i && (0, o.zD)(i);
            return c || u
                ? (0, l.jsx)(r.Dr, {
                      id: "game-detection-report-issue",
                      label: d.intl.string(d.t.qP2cXd),
                      action: function () {
                          return (0, a.mM)(async () => {
                              let { default: t } = await Promise.all([
                                  e.e(142753),
                                  e.e(568035),
                                  e.e(268582),
                                  e.e(733771),
                                  e.e(946039),
                                  e.e(627495),
                              ]).then(e.bind(e, 651930));
                              return null != n
                                  ? (e) =>
                                        (0, l.jsx)(t, {
                                            ...e,
                                            detected: { name: n.name, applicationId: n.application_id },
                                        })
                                  : null != i && (0, o.zD)(i)
                                    ? (n) =>
                                          (0, l.jsx)(t, {
                                              ...n,
                                              detected: {
                                                  name: i.extra.game_name,
                                                  applicationId: i.extra.application_id,
                                              },
                                          })
                                    : (n) => (0, l.jsx)(t, { ...n });
                          });
                      },
                  })
                : null;
        },
    },
);
