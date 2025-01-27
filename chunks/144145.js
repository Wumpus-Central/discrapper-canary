n.d(t, {
    Z: function () {
        return A;
    }
}),
    n(653041),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    s = n(278323),
    o = n(287734),
    c = n(230711),
    d = n(726542),
    u = n(620662),
    h = n(841784),
    m = n(802856),
    p = n(594190),
    g = n(592745),
    f = n(553795),
    _ = n(757266),
    E = n(283595),
    I = n(417363),
    C = n(626135),
    v = n(804739),
    N = n(346329),
    T = n(981631),
    S = n(388032);
let b = d.Z.get(T.ABu.XBOX).name;
function A(e) {
    let { currentActivities: t } = e,
        n = t.length > 1,
        A = (function (e) {
            let { currentActivities: t } = e,
                n = (0, l.e7)([f.Z], () => f.Z.getAccounts().some((e) => e.type === d.Z.get(T.ABu.XBOX).type)),
                r = t.some((e) => {
                    let { activity: t } = e;
                    return (0, m.Z)(t);
                });
            return n || !r
                ? null
                : (0, i.jsx)(a.MenuItem, {
                      id: 'xbox-connect',
                      action: () => c.Z.open(T.oAB.CONNECTIONS),
                      label: S.intl.formatToPlainString(S.t.XWSHTU, { platform: b })
                  });
        })(e),
        Z = (function (e) {
            let { currentActivities: t } = e,
                n = r.useContext(C.AnalyticsContext);
            return (0, l.Wu)(
                [p.ZP, E.Z, g.Z, I.Z, _.Z],
                () =>
                    t
                        .filter((e) => !(0, h.Z)(e.activity))
                        .map((e) => {
                            let { activity: t, game: i } = e,
                                r = E.Z.getActiveLibraryApplication(i.id);
                            return {
                                ...e,
                                libraryApplication: r,
                                canJoin: null != t && (0, u.Z)(t, T.xjy.JOIN) && t.type === T.IIU.PLAYING,
                                canPlay: (0, v.t)({
                                    LibraryApplicationStore: E.Z,
                                    LaunchableGameStore: g.Z,
                                    DispatchApplicationStore: I.Z,
                                    ConnectedAppsStore: _.Z,
                                    applicationId: i.id,
                                    branchId: null != r ? r.branchId : null
                                }),
                                isLaunching: g.Z.launchingGames.has(i.id),
                                isRunning: p.ZP.getRunningVerifiedApplicationIds().includes(i.id),
                                location: n.location
                            };
                        }),
                [n.location, t]
            );
        })(e),
        x = [];
    for (let e of Z) {
        let { activity: t } = e;
        null != t &&
            null != t.type &&
            x.push(
                (function (e, t) {
                    let { canJoin: n, activity: r, activityUser: l } = e;
                    if (!n || null == r) return null;
                    async function c() {
                        if (null == r) return;
                        let e = await s.Z.sendActivityInviteUser({
                            type: T.mFx.JOIN_REQUEST,
                            userId: l.id,
                            activity: r,
                            location: T.Sbl.PROFILE_POPOUT
                        });
                        null != e && o.default.selectPrivateChannel(e.id);
                    }
                    return (0, i.jsx)(a.MenuItem, {
                        id: 'join-'.concat(r.session_id),
                        label: t ? S.intl.formatToPlainString(S.t.wFAvxM, { name: l.toString() }) : S.intl.string(S.t.OKsSCQ),
                        action: c
                    });
                })(e, n),
                (function (e, t) {
                    let { activity: n, game: r, libraryApplication: l, location: s, canPlay: o, isRunning: c, isLaunching: d } = e;
                    if (!o || null == n) return null;
                    let u = c ? S.intl.formatToPlainString(S.t['gBme//'], { name: r.name }) : d ? S.intl.formatToPlainString(S.t.WtSQwM, { name: r.name }) : void 0;
                    return (0, i.jsx)(a.MenuItem, {
                        id: 'play-'.concat(n.session_id),
                        action: function () {
                            (0, N.playApplication)(r.id, l, {
                                analyticsParams: {
                                    location: {
                                        ...s,
                                        object: T.qAy.LIST_ITEM
                                    }
                                }
                            });
                        },
                        label: t ? S.intl.formatToPlainString(S.t.ZDZEJC, { name: r.name }) : S.intl.string(S.t.XKUw8v),
                        subtext: u
                    });
                })(e, n)
            );
    }
    return [A, ...x];
}
