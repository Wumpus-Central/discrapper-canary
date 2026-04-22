n.d(t, { A: () => Y }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(477782),
    r = n(308368),
    o = n(544420),
    c = n(956793),
    d = n(573648),
    u = n(933958),
    m = n(776677),
    A = n(682261),
    h = n(874546),
    x = n(765379),
    p = n(61330),
    g = n(15285),
    N = n(651743),
    f = n(780964),
    _ = n(858897),
    I = n(734057),
    v = n(962173),
    j = n(134861),
    C = n(498642),
    y = n(71393),
    S = n(189081),
    E = n(375492),
    T = n(576705),
    b = n(994500),
    P = n(309010),
    L = n(461213),
    R = n(287809),
    D = n(977997),
    O = n(689168),
    k = n(194871),
    F = n(954571),
    w = n(144914),
    G = n(715671),
    M = n(652215),
    U = n(985018);
let V = d.A.get(M.fg2.XBOX).name;
function Y(e) {
    let { currentActivities: t } = e,
        n = t.length > 1,
        Y = (function (e) {
            let { currentActivities: t } = e,
                n = t.some((e) => {
                    let { activity: t } = e;
                    return (0, A.A)(t);
                }),
                s = (0, l.bG)([v.A], () => v.A.getAccounts().some((e) => e.type === d.A.get(M.fg2.XBOX).type)),
                r = t.filter((e) => {
                    let { activity: t } = e;
                    return (0, p.A)(t);
                }),
                o = r.length > 0,
                c = r.some((e) => {
                    let { activity: t } = e;
                    return (0, h.Ay)(t);
                });
            return n || s || !o || c
                ? null
                : (0, i.jsx)(a.Dr, {
                      id: "xbox-connect",
                      action: () => (0, _.openUserSettings)(f.X.CONNECTIONS_PANEL),
                      label: U.intl.formatToPlainString(U.t.XWSHTb, { platform: V }),
                  });
        })(e),
        $ = (function (e) {
            let { currentActivities: t } = e,
                n = s.useContext(F.AnalyticsContext);
            return (0, l.yK)([
                R.default,
                S.A,
                I.A,
                y.A,
                C.A,
                b.A,
                P.A,
                D.A,
                T.A,
                E.A,
                L.A,
                u.Ay,
                N.A,
                k.A,
                j.A,
                g.Ay,
                O.A,
            ], () => {
                let e = R.default.getCurrentUser();
                return t
                    .filter((e) => !(0, x.A)(e.activity))
                    .map((t) => {
                        let { activity: i, game: s, activityUser: l } = t,
                            a = S.A.getActiveLibraryApplication(s.id);
                        return {
                            ...t,
                            libraryApplication: a,
                            activityJoinability: (0, m.A)({
                                user: l,
                                activity: i,
                                application: s,
                                channelId: null,
                                currentUser: e,
                                isEmbedded: !1,
                                ChannelStore: I.A,
                                GuildStore: y.A,
                                GuildMemberCountStore: C.A,
                                RelationshipStore: b.A,
                                SelectedChannelStore: P.A,
                                VoiceStateStore: D.A,
                                PermissionStore: T.A,
                                LocalActivityStore: E.A,
                                SelfPresenceStore: L.A,
                                EmbeddedActivitiesStore: u.Ay,
                            }),
                            canPlay: (0, w.A)({
                                LibraryApplicationStore: S.A,
                                LaunchableGameStore: N.A,
                                DispatchApplicationStore: k.A,
                                ConnectedAppsStore: j.A,
                                applicationId: s.id,
                                branchId: null != a ? a.branchId : null,
                            }),
                            isJoining: O.A.getState(s.id, M.xL.JOIN) === M.eAD.LOADING,
                            isLaunching: N.A.launchingGames.has(s.id),
                            isRunning: g.Ay.getRunningVerifiedApplicationIds().includes(s.id),
                            location: n.location,
                        };
                    });
            }, [n.location, t]);
        })(e),
        H = [];
    for (let e of $) {
        let { activity: t } = e;
        null != t &&
            null != t.type &&
            H.push(
                (function (e, t) {
                    let { activity: n, activityUser: s, game: l, activityJoinability: d, isJoining: u } = e;
                    if (null == n) return null;
                    if (d === m.o.JOINED)
                        return (0, i.jsx)(a.Dr, {
                            id: `joined-game-${n.session_id}`,
                            label: U.intl.string(U.t.KC26NR),
                            subtext: n.name,
                            disabled: !0,
                        });
                    if (d === m.o.CAN_JOIN)
                        return (0, i.jsx)(a.Dr, {
                            id: `join-game-${n.session_id}`,
                            label: u ? U.intl.string(U.t.bf6Ci7) : U.intl.string(U.t.VJlc0S),
                            subtext: n.name,
                            disabled: u,
                            action: () => {
                                o.Ay.join({
                                    userId: s.id,
                                    sessionId: n.session_id,
                                    applicationId: l.id,
                                    channelId: null,
                                    messageId: null,
                                    source: M.ThZ.USER_ACTIVITY_ACTIONS,
                                });
                            },
                        });
                    if ((0, h._C)(n)) {
                        async function A() {
                            if (null == n) return;
                            let e = await r.A.sendActivityInviteUser({
                                type: M.xL.JOIN_REQUEST,
                                userId: s.id,
                                activity: n,
                                location: M.ThZ.USER_ACTIVITY_ACTIONS,
                            });
                            null != e && c.default.selectPrivateChannel(e.id);
                        }
                        return (0, i.jsx)(a.Dr, {
                            id: `join-${n.session_id}`,
                            label: t
                                ? U.intl.formatToPlainString(U.t.wFAvxM, { name: s.toString() })
                                : U.intl.string(U.t.OKsSCR),
                            subtext: n.name,
                            action: A,
                        });
                    }
                    return null;
                })(e, n),
                (function (e, t) {
                    let {
                        activity: n,
                        game: s,
                        libraryApplication: l,
                        location: r,
                        canPlay: o,
                        isRunning: c,
                        isLaunching: d,
                    } = e;
                    if (!o || null == n) return null;
                    let u = c
                        ? U.intl.formatToPlainString(U.t["gBme/4"], { name: s.name })
                        : d
                          ? U.intl.formatToPlainString(U.t.WtSQwG, { name: s.name })
                          : void 0;
                    return (0, i.jsx)(a.Dr, {
                        id: `play-${n.session_id}`,
                        action: function () {
                            (0, G.playApplication)(s.id, l, {
                                analyticsParams: { location: { ...r, object: M.ZSU.LIST_ITEM } },
                            });
                        },
                        label: t ? U.intl.formatToPlainString(U.t.ZDZEJN, { name: s.name }) : U.intl.string(U.t.XKUw8m),
                        disabled: c || d,
                        subtext: u,
                    });
                })(e, n),
            );
    }
    return [...H, Y];
}
