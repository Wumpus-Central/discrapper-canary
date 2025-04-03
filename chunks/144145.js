n.d(t, { Z: () => P }), n(653041), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    a = n(481060),
    o = n(278323),
    s = n(287734),
    c = n(230711),
    u = n(726542),
    d = n(620662),
    p = n(841784),
    h = n(802856),
    f = n(594190),
    g = n(592745),
    m = n(553795),
    b = n(757266),
    _ = n(283595),
    E = n(417363),
    O = n(626135),
    N = n(804739),
    y = n(346329),
    I = n(981631),
    v = n(388032);
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function S(e, t) {
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
let T = u.Z.get(I.ABu.XBOX).name;
function P(e) {
    let { currentActivities: t } = e,
        n = t.length > 1,
        P = (function (e) {
            let { currentActivities: t } = e,
                n = (0, l.e7)([m.Z], () => m.Z.getAccounts().some((e) => e.type === u.Z.get(I.ABu.XBOX).type)),
                i = t.some((e) => {
                    let { activity: t } = e;
                    return (0, h.Z)(t);
                });
            return n || !i
                ? null
                : (0, r.jsx)(a.sNh, {
                      id: 'xbox-connect',
                      action: () => c.Z.open(I.oAB.CONNECTIONS),
                      label: v.NW.formatToPlainString(v.t.XWSHTU, { platform: T })
                  });
        })(e),
        j = (function (e) {
            let { currentActivities: t } = e,
                n = i.useContext(O.AnalyticsContext);
            return (0, l.Wu)(
                [f.ZP, _.Z, g.Z, E.Z, b.Z],
                () =>
                    t
                        .filter((e) => !(0, p.Z)(e.activity))
                        .map((e) => {
                            let { activity: t, game: r } = e,
                                i = _.Z.getActiveLibraryApplication(r.id);
                            return S(C({}, e), {
                                libraryApplication: i,
                                canJoin: null != t && (0, d.Z)(t, I.xjy.JOIN) && t.type === I.IIU.PLAYING,
                                canPlay: (0, N.t)({
                                    LibraryApplicationStore: _.Z,
                                    LaunchableGameStore: g.Z,
                                    DispatchApplicationStore: E.Z,
                                    ConnectedAppsStore: b.Z,
                                    applicationId: r.id,
                                    branchId: null != i ? i.branchId : null
                                }),
                                isLaunching: g.Z.launchingGames.has(r.id),
                                isRunning: f.ZP.getRunningVerifiedApplicationIds().includes(r.id),
                                location: n.location
                            });
                        }),
                [n.location, t]
            );
        })(e),
        A = [];
    for (let e of j) {
        let { activity: t } = e;
        null != t &&
            null != t.type &&
            A.push(
                (function (e, t) {
                    let { canJoin: n, activity: i, activityUser: l } = e;
                    if (!n || null == i) return null;
                    async function c() {
                        if (null == i) return;
                        let e = await o.Z.sendActivityInviteUser({
                            type: I.mFx.JOIN_REQUEST,
                            userId: l.id,
                            activity: i,
                            location: I.Sbl.PROFILE_POPOUT
                        });
                        null != e && s.default.selectPrivateChannel(e.id);
                    }
                    return (0, r.jsx)(a.sNh, {
                        id: 'join-'.concat(i.session_id),
                        label: t ? v.NW.formatToPlainString(v.t.wFAvxM, { name: l.toString() }) : v.NW.string(v.t.OKsSCQ),
                        action: c
                    });
                })(e, n),
                (function (e, t) {
                    let { activity: n, game: i, libraryApplication: l, location: o, canPlay: s, isRunning: c, isLaunching: u } = e;
                    if (!s || null == n) return null;
                    let d = c ? v.NW.formatToPlainString(v.t['gBme//'], { name: i.name }) : u ? v.NW.formatToPlainString(v.t.WtSQwM, { name: i.name }) : void 0;
                    return (0, r.jsx)(a.sNh, {
                        id: 'play-'.concat(n.session_id),
                        action: function () {
                            (0, y.playApplication)(i.id, l, { analyticsParams: { location: S(C({}, o), { object: I.qAy.LIST_ITEM }) } });
                        },
                        label: t ? v.NW.formatToPlainString(v.t.ZDZEJC, { name: i.name }) : v.NW.string(v.t.XKUw8v),
                        subtext: d
                    });
                })(e, n)
            );
    }
    return [P, ...A];
}
