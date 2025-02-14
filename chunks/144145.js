n.d(t, { Z: () => Z }), n(653041), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
    s = n(278323),
    o = n(287734),
    d = n(230711),
    c = n(726542),
    u = n(620662),
    h = n(841784),
    m = n(802856),
    p = n(594190),
    g = n(592745),
    _ = n(553795),
    f = n(757266),
    E = n(283595),
    I = n(417363),
    C = n(626135),
    N = n(804739),
    v = n(346329),
    T = n(981631),
    S = n(388032);
let A = c.Z.get(T.ABu.XBOX).name;
function Z(e) {
    let { currentActivities: t } = e,
        n = t.length > 1,
        Z = (function (e) {
            let { currentActivities: t } = e,
                n = (0, r.e7)([_.Z], () => _.Z.getAccounts().some((e) => e.type === c.Z.get(T.ABu.XBOX).type)),
                l = t.some((e) => {
                    let { activity: t } = e;
                    return (0, m.Z)(t);
                });
            return n || !l
                ? null
                : (0, i.jsx)(a.sNh, {
                      id: 'xbox-connect',
                      action: () => d.Z.open(T.oAB.CONNECTIONS),
                      label: S.intl.formatToPlainString(S.t.XWSHTU, { platform: A })
                  });
        })(e),
        x = (function (e) {
            let { currentActivities: t } = e,
                n = l.useContext(C.AnalyticsContext);
            return (0, r.Wu)(
                [p.ZP, E.Z, g.Z, I.Z, f.Z],
                () =>
                    t
                        .filter((e) => !(0, h.Z)(e.activity))
                        .map((e) => {
                            let { activity: t, game: i } = e,
                                l = E.Z.getActiveLibraryApplication(i.id);
                            return {
                                ...e,
                                libraryApplication: l,
                                canJoin: null != t && (0, u.Z)(t, T.xjy.JOIN) && t.type === T.IIU.PLAYING,
                                canPlay: (0, N.t)({
                                    LibraryApplicationStore: E.Z,
                                    LaunchableGameStore: g.Z,
                                    DispatchApplicationStore: I.Z,
                                    ConnectedAppsStore: f.Z,
                                    applicationId: i.id,
                                    branchId: null != l ? l.branchId : null
                                }),
                                isLaunching: g.Z.launchingGames.has(i.id),
                                isRunning: p.ZP.getRunningVerifiedApplicationIds().includes(i.id),
                                location: n.location
                            };
                        }),
                [n.location, t]
            );
        })(e),
        b = [];
    for (let e of x) {
        let { activity: t } = e;
        null != t &&
            null != t.type &&
            b.push(
                (function (e, t) {
                    let { canJoin: n, activity: l, activityUser: r } = e;
                    if (!n || null == l) return null;
                    async function d() {
                        if (null == l) return;
                        let e = await s.Z.sendActivityInviteUser({
                            type: T.mFx.JOIN_REQUEST,
                            userId: r.id,
                            activity: l,
                            location: T.Sbl.PROFILE_POPOUT
                        });
                        null != e && o.default.selectPrivateChannel(e.id);
                    }
                    return (0, i.jsx)(a.sNh, {
                        id: 'join-'.concat(l.session_id),
                        label: t ? S.intl.formatToPlainString(S.t.wFAvxM, { name: r.toString() }) : S.intl.string(S.t.OKsSCQ),
                        action: d
                    });
                })(e, n),
                (function (e, t) {
                    let { activity: n, game: l, libraryApplication: r, location: s, canPlay: o, isRunning: d, isLaunching: c } = e;
                    if (!o || null == n) return null;
                    let u = d ? S.intl.formatToPlainString(S.t['gBme//'], { name: l.name }) : c ? S.intl.formatToPlainString(S.t.WtSQwM, { name: l.name }) : void 0;
                    return (0, i.jsx)(a.sNh, {
                        id: 'play-'.concat(n.session_id),
                        action: function () {
                            (0, v.playApplication)(l.id, r, {
                                analyticsParams: {
                                    location: {
                                        ...s,
                                        object: T.qAy.LIST_ITEM
                                    }
                                }
                            });
                        },
                        label: t ? S.intl.formatToPlainString(S.t.ZDZEJC, { name: l.name }) : S.intl.string(S.t.XKUw8v),
                        subtext: u
                    });
                })(e, n)
            );
    }
    return [Z, ...b];
}
