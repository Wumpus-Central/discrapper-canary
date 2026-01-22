n.d(t, {
    A: () => j,
}),
    n(321073),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(397927),
    s = n(308368),
    o = n(956793),
    c = n(573648),
    u = n(833349),
    d = n(765379),
    p = n(61330),
    f = n(15285),
    h = n(651743),
    A = n(780964),
    g = n(840065),
    m = n(962173),
    b = n(134861),
    _ = n(189081),
    E = n(194871),
    O = n(954571),
    y = n(144914),
    I = n(715671),
    v = n(652215),
    S = n(985018);

function C(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = c.A.get(v.fg2.XBOX).name;

function j(e) {
    let { currentActivities: t } = e,
        n = t.length > 1,
        j = (function (e) {
            let { currentActivities: t } = e,
                n = (0, l.bG)([m.A], () => m.A.getAccounts().some((e) => e.type === c.A.get(v.fg2.XBOX).type)),
                i = t.some((e) => {
                    let { activity: t } = e;
                    return (0, p.A)(t);
                });
            return n || !i
                ? null
                : (0, r.jsx)(a.Drp, {
                      id: "xbox-connect",
                      action: () =>
                          (0, g.openUserSettings)(A.X.CONNECTIONS_PANEL, {
                              section: v.nc_.CONNECTIONS,
                          }),
                      label: S.intl.formatToPlainString(S.t.XWSHTb, {
                          platform: T,
                      }),
                  });
        })(e),
        x = (function (e) {
            let { currentActivities: t } = e,
                n = i.useContext(O.AnalyticsContext);
            return (0, l.yK)(
                [f.Ay, _.A, h.A, E.A, b.A],
                () =>
                    t
                        .filter((e) => !(0, d.A)(e.activity))
                        .map((e) => {
                            let { activity: t, game: r } = e,
                                i = _.A.getActiveLibraryApplication(r.id);
                            return N(C({}, e), {
                                libraryApplication: i,
                                canJoin: null != t && (0, u.A)(t, v.jUm.JOIN) && t.type === v.$pd.PLAYING,
                                canPlay: (0, y.A)({
                                    LibraryApplicationStore: _.A,
                                    LaunchableGameStore: h.A,
                                    DispatchApplicationStore: E.A,
                                    ConnectedAppsStore: b.A,
                                    applicationId: r.id,
                                    branchId: null != i ? i.branchId : null,
                                }),
                                isLaunching: h.A.launchingGames.has(r.id),
                                isRunning: f.Ay.getRunningVerifiedApplicationIds().includes(r.id),
                                location: n.location,
                            });
                        }),
                [n.location, t],
            );
        })(e),
        P = [];
    for (let e of x) {
        let { activity: t } = e;
        null != t &&
            null != t.type &&
            P.push(
                (function (e, t) {
                    let { canJoin: n, activity: i, activityUser: l } = e;
                    if (!n || null == i) return null;
                    async function c() {
                        if (null == i) return;
                        let e = await s.A.sendActivityInviteUser({
                            type: v.xL.JOIN_REQUEST,
                            userId: l.id,
                            activity: i,
                            location: v.ThZ.USER_ACTIVITY_ACTIONS,
                        });
                        null != e && o.default.selectPrivateChannel(e.id);
                    }
                    return (0, r.jsx)(a.Drp, {
                        id: "join-".concat(i.session_id),
                        label: t
                            ? S.intl.formatToPlainString(S.t.wFAvxM, {
                                  name: l.toString(),
                              })
                            : S.intl.string(S.t.OKsSCR),
                        action: c,
                    });
                })(e, n),
                (function (e, t) {
                    let {
                        activity: n,
                        game: i,
                        libraryApplication: l,
                        location: s,
                        canPlay: o,
                        isRunning: c,
                        isLaunching: u,
                    } = e;
                    if (!o || null == n) return null;
                    let d = c
                        ? S.intl.formatToPlainString(S.t["gBme/4"], {
                              name: i.name,
                          })
                        : u
                          ? S.intl.formatToPlainString(S.t.WtSQwG, {
                                name: i.name,
                            })
                          : void 0;
                    return (0, r.jsx)(a.Drp, {
                        id: "play-".concat(n.session_id),
                        action: function () {
                            (0, I.playApplication)(i.id, l, {
                                analyticsParams: {
                                    location: N(C({}, s), {
                                        object: v.ZSU.LIST_ITEM,
                                    }),
                                },
                            });
                        },
                        label: t
                            ? S.intl.formatToPlainString(S.t.ZDZEJN, {
                                  name: i.name,
                              })
                            : S.intl.string(S.t.XKUw8m),
                        subtext: d,
                    });
                })(e, n),
            );
    }
    return [j, ...P];
}
