n.d(t, {
    Ay: () => E,
    UE: () => m,
    gA: () => g,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(672979),
    s = n(20805),
    o = n(409626),
    l = n(692969),
    c = n(67518),
    u = n(652215),
    d = n(985018);

function f(e, t, n) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}

function _(e, t) {
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

function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function m(e) {
    let { user: t, activity: n, entry: r } = e;
    return null != r
        ? {
              applicationId: (0, s.zD)(r) ? r.extra.application_id : void 0,
              sourceUserId: r.author_id,
          }
        : null != n
          ? {
                applicationId: n.type === u.$pd.PLAYING && null != n.application_id ? n.application_id : void 0,
                sourceUserId: t.id,
            }
          : {
                applicationId: void 0,
                sourceUserId: void 0,
            };
}

function g(e) {
    let { user: t, activity: o, entry: l } = e,
        { applicationId: u } = m({
            activity: o,
            entry: l,
            user: t,
        }),
        f = (0, c.n)(u),
        _ = null != o && (0, a.A)(o),
        g = null != l && (0, s.zD)(l);
    if (_ || g) {
        let e = () =>
            (0, i.mMO)(async () => {
                let { default: e } = await Promise.all([n.e("27495"), n.e("79692")]).then(n.bind(n, 651930));
                if (null != o)
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            h(p({}, t), {
                                detectedActivity: o,
                                onSubmitted: () => {},
                            }),
                        );
                if (null != l && (0, s.zD)(l)) {
                    let t = {
                        name: l.extra.game_name,
                        application_id: l.extra.application_id,
                    };
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            h(p({}, n), {
                                detectedActivity: t,
                                onSubmitted: () => {},
                            }),
                        );
                }
                return (t) =>
                    (0, r.jsx)(
                        e,
                        h(p({}, t), {
                            onSubmitted: () => {},
                        }),
                    );
            });
        return (0, r.jsx)(i.Drp, {
            id: "game-detection-report-issue",
            label: d.intl.string(d.t.qP2cXd),
            action: e,
        });
    }
    return f;
}

function E(e) {
    let { user: t, activity: n, entry: a, onAction: s, isMenuOpen: c, appContext: u } = e,
        { applicationId: f, sourceUserId: p } = m({
            activity: n,
            entry: a,
            user: t,
        }),
        _ = (0, l.A)({
            location: "UserProfileActivityContextMenu",
            source: o.Ob.UserProfileCardContextMenu,
            trackEntryPointImpression: c,
            applicationId: f,
            sourceUserId: p,
            appContext: u,
        });
    return null == _
        ? null
        : (0, r.jsx)(i.Drp, {
              id: "game-profile",
              label: d.intl.string(d.t.ajHoOr),
              action: (e) => {
                  null == s ||
                      s({
                          action: "PRESS_VIEW_GAME_PROFILE_MENU_ITEM",
                      }),
                      _(e);
              },
          });
}
