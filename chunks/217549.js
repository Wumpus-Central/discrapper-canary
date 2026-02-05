n.d(t, { A: () => b }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(311907),
    l = n(397927),
    s = n(308368),
    o = n(956793),
    d = n(573648),
    c = n(833349),
    u = n(765379),
    A = n(61330),
    h = n(15285),
    _ = n(651743),
    m = n(780964),
    p = n(840065),
    g = n(962173),
    E = n(134861),
    f = n(189081),
    I = n(194871),
    C = n(954571),
    N = n(144914),
    T = n(715671),
    S = n(652215),
    x = n(985018);
let v = d.A.get(S.fg2.XBOX).name;
function b(e) {
    let { currentActivities: t } = e,
        n = t.length > 1,
        b = (function (e) {
            let { currentActivities: t } = e,
                n = (0, a.bG)([g.A], () => g.A.getAccounts().some((e) => e.type === d.A.get(S.fg2.XBOX).type)),
                r = t.some((e) => {
                    let { activity: t } = e;
                    return (0, A.A)(t);
                });
            return n || !r
                ? null
                : (0, i.jsx)(l.Drp, {
                      id: "xbox-connect",
                      action: () => (0, p.openUserSettings)(m.X.CONNECTIONS_PANEL, { section: S.nc_.CONNECTIONS }),
                      label: x.intl.formatToPlainString(x.t.XWSHTb, { platform: v }),
                  });
        })(e),
        y = (function (e) {
            let { currentActivities: t } = e,
                n = r.useContext(C.AnalyticsContext);
            return (0, a.yK)(
                [h.Ay, f.A, _.A, I.A, E.A],
                () =>
                    t
                        .filter((e) => !(0, u.A)(e.activity))
                        .map((e) => {
                            let { activity: t, game: i } = e,
                                r = f.A.getActiveLibraryApplication(i.id);
                            return {
                                ...e,
                                libraryApplication: r,
                                canJoin: null != t && (0, c.A)(t, S.jUm.JOIN) && t.type === S.$pd.PLAYING,
                                canPlay: (0, N.A)({
                                    LibraryApplicationStore: f.A,
                                    LaunchableGameStore: _.A,
                                    DispatchApplicationStore: I.A,
                                    ConnectedAppsStore: E.A,
                                    applicationId: i.id,
                                    branchId: null != r ? r.branchId : null,
                                }),
                                isLaunching: _.A.launchingGames.has(i.id),
                                isRunning: h.Ay.getRunningVerifiedApplicationIds().includes(i.id),
                                location: n.location,
                            };
                        }),
                [n.location, t],
            );
        })(e),
        L = [];
    for (let e of y) {
        let { activity: t } = e;
        null != t &&
            null != t.type &&
            L.push(
                (function (e, t) {
                    let { canJoin: n, activity: r, activityUser: a } = e;
                    if (!n || null == r) return null;
                    async function d() {
                        if (null == r) return;
                        let e = await s.A.sendActivityInviteUser({
                            type: S.xL.JOIN_REQUEST,
                            userId: a.id,
                            activity: r,
                            location: S.ThZ.USER_ACTIVITY_ACTIONS,
                        });
                        null != e && o.default.selectPrivateChannel(e.id);
                    }
                    return (0, i.jsx)(l.Drp, {
                        id: `join-${r.session_id}`,
                        label: t
                            ? x.intl.formatToPlainString(x.t.wFAvxM, { name: a.toString() })
                            : x.intl.string(x.t.OKsSCR),
                        action: d,
                    });
                })(e, n),
                (function (e, t) {
                    let {
                        activity: n,
                        game: r,
                        libraryApplication: a,
                        location: s,
                        canPlay: o,
                        isRunning: d,
                        isLaunching: c,
                    } = e;
                    if (!o || null == n) return null;
                    let u = d
                        ? x.intl.formatToPlainString(x.t["gBme/4"], { name: r.name })
                        : c
                          ? x.intl.formatToPlainString(x.t.WtSQwG, { name: r.name })
                          : void 0;
                    return (0, i.jsx)(l.Drp, {
                        id: `play-${n.session_id}`,
                        action: function () {
                            (0, T.playApplication)(r.id, a, {
                                analyticsParams: { location: { ...s, object: S.ZSU.LIST_ITEM } },
                            });
                        },
                        label: t ? x.intl.formatToPlainString(x.t.ZDZEJN, { name: r.name }) : x.intl.string(x.t.XKUw8m),
                        subtext: u,
                    });
                })(e, n),
            );
    }
    return [b, ...L];
}
