n.d(t, { A: () => b }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(397927),
    s = n(308368),
    o = n(956793),
    d = n(573648),
    c = n(833349),
    u = n(874546),
    A = n(765379),
    h = n(61330),
    _ = n(15285),
    m = n(651743),
    p = n(780964),
    g = n(840065),
    E = n(962173),
    I = n(134861),
    f = n(189081),
    C = n(194871),
    T = n(954571),
    N = n(144914),
    S = n(715671),
    x = n(652215),
    v = n(985018);
let y = d.A.get(x.fg2.XBOX).name;
function b(e) {
    let { currentActivities: t } = e,
        n = t.length > 1,
        b = (function (e) {
            let { currentActivities: t } = e,
                n = (0, a.bG)([E.A], () => E.A.getAccounts().some((e) => e.type === d.A.get(x.fg2.XBOX).type)),
                l = t.filter((e) => {
                    let { activity: t } = e;
                    return (0, h.A)(t);
                }),
                s = l.length > 0,
                o = l.some((e) => {
                    let { activity: t } = e;
                    return (0, u.A)(t);
                });
            return n || !s || o
                ? null
                : (0, i.jsx)(r.Drp, {
                      id: "xbox-connect",
                      action: () => (0, g.openUserSettings)(p.X.CONNECTIONS_PANEL),
                      label: v.intl.formatToPlainString(v.t.XWSHTb, { platform: y }),
                  });
        })(e),
        O = (function (e) {
            let { currentActivities: t } = e,
                n = l.useContext(T.AnalyticsContext);
            return (0, a.yK)(
                [_.Ay, f.A, m.A, C.A, I.A],
                () =>
                    t
                        .filter((e) => !(0, A.A)(e.activity))
                        .map((e) => {
                            let { activity: t, game: i } = e,
                                l = f.A.getActiveLibraryApplication(i.id);
                            return {
                                ...e,
                                libraryApplication: l,
                                canJoin: null != t && (0, c.A)(t, x.jUm.JOIN) && t.type === x.$pd.PLAYING,
                                canPlay: (0, N.A)({
                                    LibraryApplicationStore: f.A,
                                    LaunchableGameStore: m.A,
                                    DispatchApplicationStore: C.A,
                                    ConnectedAppsStore: I.A,
                                    applicationId: i.id,
                                    branchId: null != l ? l.branchId : null,
                                }),
                                isLaunching: m.A.launchingGames.has(i.id),
                                isRunning: _.Ay.getRunningVerifiedApplicationIds().includes(i.id),
                                location: n.location,
                            };
                        }),
                [n.location, t],
            );
        })(e),
        L = [];
    for (let e of O) {
        let { activity: t } = e;
        null != t &&
            null != t.type &&
            L.push(
                (function (e, t) {
                    let { canJoin: n, activity: l, activityUser: a } = e;
                    if (!n || null == l) return null;
                    async function d() {
                        if (null == l) return;
                        let e = await s.A.sendActivityInviteUser({
                            type: x.xL.JOIN_REQUEST,
                            userId: a.id,
                            activity: l,
                            location: x.ThZ.USER_ACTIVITY_ACTIONS,
                        });
                        null != e && o.default.selectPrivateChannel(e.id);
                    }
                    return (0, i.jsx)(r.Drp, {
                        id: `join-${l.session_id}`,
                        label: t
                            ? v.intl.formatToPlainString(v.t.wFAvxM, { name: a.toString() })
                            : v.intl.string(v.t.OKsSCR),
                        action: d,
                    });
                })(e, n),
                (function (e, t) {
                    let {
                        activity: n,
                        game: l,
                        libraryApplication: a,
                        location: s,
                        canPlay: o,
                        isRunning: d,
                        isLaunching: c,
                    } = e;
                    if (!o || null == n) return null;
                    let u = d
                        ? v.intl.formatToPlainString(v.t["gBme/4"], { name: l.name })
                        : c
                          ? v.intl.formatToPlainString(v.t.WtSQwG, { name: l.name })
                          : void 0;
                    return (0, i.jsx)(r.Drp, {
                        id: `play-${n.session_id}`,
                        action: function () {
                            (0, S.playApplication)(l.id, a, {
                                analyticsParams: { location: { ...s, object: x.ZSU.LIST_ITEM } },
                            });
                        },
                        label: t ? v.intl.formatToPlainString(v.t.ZDZEJN, { name: l.name }) : v.intl.string(v.t.XKUw8m),
                        subtext: u,
                    });
                })(e, n),
            );
    }
    return [...L, b];
}
