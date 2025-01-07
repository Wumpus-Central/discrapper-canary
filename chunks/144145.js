n.d(t, {
    Z: function () {
        return b;
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
    N = n(804739),
    v = n(346329),
    S = n(981631),
    T = n(388032);
let A = d.Z.get(S.ABu.XBOX).name;
function b(e) {
    let { currentActivities: t } = e,
        n = t.length > 1,
        b = (function (e) {
            let { currentActivities: t } = e,
                n = (0, l.e7)([f.Z], () => f.Z.getAccounts().some((e) => e.type === d.Z.get(S.ABu.XBOX).type)),
                r = t.some((e) => {
                    let { activity: t } = e;
                    return (0, m.Z)(t);
                });
            return n || !r
                ? null
                : (0, i.jsx)(a.MenuItem, {
                      id: 'xbox-connect',
                      action: () => c.Z.open(S.oAB.CONNECTIONS),
                      label: T.intl.formatToPlainString(T.t.XWSHTU, { platform: A })
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
                                canJoin: null != t && (0, u.Z)(t, S.xjy.JOIN) && t.type === S.IIU.PLAYING,
                                canPlay: (0, N.t)({
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
                            type: S.mFx.JOIN_REQUEST,
                            userId: l.id,
                            activity: r,
                            location: S.Sbl.PROFILE_POPOUT
                        });
                        null != e && o.default.selectPrivateChannel(e.id);
                    }
                    return (0, i.jsx)(a.MenuItem, {
                        id: 'join-'.concat(r.session_id),
                        label: t ? T.intl.formatToPlainString(T.t.wFAvxM, { name: l.toString() }) : T.intl.string(T.t.OKsSCQ),
                        action: c
                    });
                })(e, n),
                (function (e, t) {
                    let { activity: n, game: r, libraryApplication: l, location: s, canPlay: o, isRunning: c, isLaunching: d } = e;
                    if (!o || null == n) return null;
                    let u = c ? T.intl.formatToPlainString(T.t['gBme//'], { name: r.name }) : d ? T.intl.formatToPlainString(T.t.WtSQwM, { name: r.name }) : void 0;
                    return (0, i.jsx)(a.MenuItem, {
                        id: 'play-'.concat(n.session_id),
                        action: function () {
                            (0, v.playApplication)(r.id, l, {
                                analyticsParams: {
                                    location: {
                                        ...s,
                                        object: S.qAy.LIST_ITEM
                                    }
                                }
                            });
                        },
                        label: t ? T.intl.formatToPlainString(T.t.ZDZEJC, { name: r.name }) : T.intl.string(T.t.XKUw8v),
                        subtext: u
                    });
                })(e, n)
            );
    }
    return [b, ...x];
}
