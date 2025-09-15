n.d(t, {
    ZP: () => b,
    nK: () => g,
    uj: () => E,
});
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(833664),
    o = n(26033),
    s = n(220410),
    l = n(810568),
    c = n(168524),
    u = n(858042),
    d = n(981631),
    f = n(388032);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e) {
    let { user: t, activity: n, entry: r } = e;
    return null != r
        ? {
              applicationId: (0, o.dX)(r) ? r.extra.application_id : void 0,
              sourceUserId: r.author_id,
          }
        : null != n
          ? {
                applicationId: n.type === d.IIU.PLAYING && null != n.application_id ? n.application_id : void 0,
                sourceUserId: t.id,
            }
          : {
                applicationId: void 0,
                sourceUserId: void 0,
            };
}
function E(e) {
    let { user: t, activity: l, entry: c } = e,
        { applicationId: d } = g({
            activity: l,
            entry: c,
            user: t,
        }),
        _ = (0, s.P6)("UserProfileActivityCard"),
        h = (0, u.M)({
            applicationId: d,
            showOutdatedInfoOption: !1,
        }),
        E = _ && null != l && (0, a.Z)(l),
        b = _ && null != c && (0, o.dX)(c);
    if (E || b) {
        let e = () =>
            (0, i.ZDy)(async () => {
                let { default: e } = await n.e("82077").then(n.bind(n, 953848));
                if (null != l)
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            m(p({}, t), {
                                detectedActivity: l,
                                onSubmitted: () => {},
                            }),
                        );
                if (null != c && (0, o.dX)(c)) {
                    let t = {
                        name: c.extra.game_name,
                        application_id: c.extra.application_id,
                    };
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            m(p({}, n), {
                                detectedActivity: t,
                                onSubmitted: () => {},
                            }),
                        );
                }
                return (t) =>
                    (0, r.jsx)(
                        e,
                        m(p({}, t), {
                            onSubmitted: () => {},
                        }),
                    );
            });
        return (0, r.jsx)(i.sNh, {
            id: "game-detection-report-issue",
            label: f.intl.string(f.t.qP2cXV),
            action: e,
        });
    }
    return h;
}
function b(e) {
    let { user: t, activity: n, entry: a, onAction: o, isMenuOpen: s, appContext: u } = e,
        { applicationId: d, sourceUserId: _ } = g({
            activity: n,
            entry: a,
            user: t,
        }),
        p = (0, c.Z)({
            location: "UserProfileActivityContextMenu",
            source: l.m1.UserProfileCardContextMenu,
            trackEntryPointImpression: s,
            applicationId: d,
            sourceUserId: _,
            appContext: u,
        });
    return null == p
        ? null
        : (0, r.jsx)(i.sNh, {
              id: "game-profile",
              label: f.intl.string(f.t.ajHoOj),
              action: (e) => {
                  null == o || o({ action: "PRESS_VIEW_GAME_PROFILE_MENU_ITEM" }), p(e);
              },
          });
}
