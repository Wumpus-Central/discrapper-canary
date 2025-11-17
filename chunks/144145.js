n.d(t, { Z: () => P }), n(539854), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    s = n(278323),
    o = n(287734),
    c = n(726542),
    u = n(620662),
    d = n(841784),
    p = n(802856),
    f = n(594190),
    h = n(592745),
    g = n(313789),
    m = n(518596),
    _ = n(553795),
    b = n(757266),
    E = n(283595),
    O = n(417363),
    y = n(626135),
    v = n(804739),
    I = n(346329),
    C = n(981631),
    S = n(388032);
function T(e) {
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
let j = c.Z.get(C.ABu.XBOX).name;
function P(e) {
    let { currentActivities: t } = e,
        n = t.length > 1,
        P = (function (e) {
            let { currentActivities: t } = e,
                n = (0, l.e7)([_.Z], () => _.Z.getAccounts().some((e) => e.type === c.Z.get(C.ABu.XBOX).type)),
                i = t.some((e) => {
                    let { activity: t } = e;
                    return (0, p.Z)(t);
                });
            return n || !i
                ? null
                : (0, r.jsx)(a.sNh, {
                      id: "xbox-connect",
                      action: () => (0, m.openUserSettings)(g.n.CONNECTIONS_PANEL, { section: C.oAB.CONNECTIONS }),
                      label: S.intl.formatToPlainString(S.t.XWSHTb, { platform: j }),
                  });
        })(e),
        x = (function (e) {
            let { currentActivities: t } = e,
                n = i.useContext(y.AnalyticsContext);
            return (0, l.Wu)(
                [f.ZP, E.Z, h.Z, O.Z, b.Z],
                () =>
                    t
                        .filter((e) => !(0, d.Z)(e.activity))
                        .map((e) => {
                            let { activity: t, game: r } = e,
                                i = E.Z.getActiveLibraryApplication(r.id);
                            return N(T({}, e), {
                                libraryApplication: i,
                                canJoin: null != t && (0, u.Z)(t, C.xjy.JOIN) && t.type === C.IIU.PLAYING,
                                canPlay: (0, v.t)({
                                    LibraryApplicationStore: E.Z,
                                    LaunchableGameStore: h.Z,
                                    DispatchApplicationStore: O.Z,
                                    ConnectedAppsStore: b.Z,
                                    applicationId: r.id,
                                    branchId: null != i ? i.branchId : null,
                                }),
                                isLaunching: h.Z.launchingGames.has(r.id),
                                isRunning: f.ZP.getRunningVerifiedApplicationIds().includes(r.id),
                                location: n.location,
                            });
                        }),
                [n.location, t],
            );
        })(e),
        A = [];
    for (let e of x) {
        let { activity: t } = e;
        null != t &&
            null != t.type &&
            A.push(
                (function (e, t) {
                    let { canJoin: n, activity: i, activityUser: l } = e;
                    if (!n || null == i) return null;
                    async function c() {
                        if (null == i) return;
                        let e = await s.Z.sendActivityInviteUser({
                            type: C.mFx.JOIN_REQUEST,
                            userId: l.id,
                            activity: i,
                            location: C.Sbl.USER_ACTIVITY_ACTIONS,
                        });
                        null != e && o.default.selectPrivateChannel(e.id);
                    }
                    return (0, r.jsx)(a.sNh, {
                        id: "join-".concat(i.session_id),
                        label: t
                            ? S.intl.formatToPlainString(S.t.wFAvxM, { name: l.toString() })
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
                        ? S.intl.formatToPlainString(S.t["gBme/4"], { name: i.name })
                        : u
                          ? S.intl.formatToPlainString(S.t.WtSQwG, { name: i.name })
                          : void 0;
                    return (0, r.jsx)(a.sNh, {
                        id: "play-".concat(n.session_id),
                        action: function () {
                            (0, I.playApplication)(i.id, l, {
                                analyticsParams: { location: N(T({}, s), { object: C.qAy.LIST_ITEM }) },
                            });
                        },
                        label: t ? S.intl.formatToPlainString(S.t.ZDZEJN, { name: i.name }) : S.intl.string(S.t.XKUw8m),
                        subtext: d,
                    });
                })(e, n),
            );
    }
    return [P, ...A];
}
