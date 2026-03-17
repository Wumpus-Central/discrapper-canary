n.d(t, { A: () => y }), n(321073);
var i = n(627968),
    a = n(64700),
    r = n(311907),
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
    g = n(840065),
    p = n(962173),
    E = n(134861),
    I = n(189081),
    f = n(194871),
    C = n(954571),
    T = n(144914),
    N = n(715671),
    S = n(652215),
    x = n(985018);
let v = d.A.get(S.fg2.XBOX).name;
function y(e) {
    let { currentActivities: t } = e,
        n = t.length > 1,
        y = (function (e) {
            let { currentActivities: t } = e,
                n = (0, r.bG)([p.A], () => p.A.getAccounts().some((e) => e.type === d.A.get(S.fg2.XBOX).type)),
                a = t.some((e) => {
                    let { activity: t } = e;
                    return (0, A.A)(t);
                });
            return n || !a
                ? null
                : (0, i.jsx)(l.Drp, {
                      id: "xbox-connect",
                      action: () => (0, g.openUserSettings)(m.X.CONNECTIONS_PANEL),
                      label: x.intl.formatToPlainString(x.t.XWSHTb, { platform: v }),
                  });
        })(e),
        b = (function (e) {
            let { currentActivities: t } = e,
                n = a.useContext(C.AnalyticsContext);
            return (0, r.yK)(
                [h.Ay, I.A, _.A, f.A, E.A],
                () =>
                    t
                        .filter((e) => !(0, u.A)(e.activity))
                        .map((e) => {
                            let { activity: t, game: i } = e,
                                a = I.A.getActiveLibraryApplication(i.id);
                            return {
                                ...e,
                                libraryApplication: a,
                                canJoin: null != t && (0, c.A)(t, S.jUm.JOIN) && t.type === S.$pd.PLAYING,
                                canPlay: (0, T.A)({
                                    LibraryApplicationStore: I.A,
                                    LaunchableGameStore: _.A,
                                    DispatchApplicationStore: f.A,
                                    ConnectedAppsStore: E.A,
                                    applicationId: i.id,
                                    branchId: null != a ? a.branchId : null,
                                }),
                                isLaunching: _.A.launchingGames.has(i.id),
                                isRunning: h.Ay.getRunningVerifiedApplicationIds().includes(i.id),
                                location: n.location,
                            };
                        }),
                [n.location, t],
            );
        })(e),
        O = [];
    for (let e of b) {
        let { activity: t } = e;
        null != t &&
            null != t.type &&
            O.push(
                (function (e, t) {
                    let { canJoin: n, activity: a, activityUser: r } = e;
                    if (!n || null == a) return null;
                    async function d() {
                        if (null == a) return;
                        let e = await s.A.sendActivityInviteUser({
                            type: S.xL.JOIN_REQUEST,
                            userId: r.id,
                            activity: a,
                            location: S.ThZ.USER_ACTIVITY_ACTIONS,
                        });
                        null != e && o.default.selectPrivateChannel(e.id);
                    }
                    return (0, i.jsx)(l.Drp, {
                        id: `join-${a.session_id}`,
                        label: t
                            ? x.intl.formatToPlainString(x.t.wFAvxM, { name: r.toString() })
                            : x.intl.string(x.t.OKsSCR),
                        action: d,
                    });
                })(e, n),
                (function (e, t) {
                    let {
                        activity: n,
                        game: a,
                        libraryApplication: r,
                        location: s,
                        canPlay: o,
                        isRunning: d,
                        isLaunching: c,
                    } = e;
                    if (!o || null == n) return null;
                    let u = d
                        ? x.intl.formatToPlainString(x.t["gBme/4"], { name: a.name })
                        : c
                          ? x.intl.formatToPlainString(x.t.WtSQwG, { name: a.name })
                          : void 0;
                    return (0, i.jsx)(l.Drp, {
                        id: `play-${n.session_id}`,
                        action: function () {
                            (0, N.playApplication)(a.id, r, {
                                analyticsParams: { location: { ...s, object: S.ZSU.LIST_ITEM } },
                            });
                        },
                        label: t ? x.intl.formatToPlainString(x.t.ZDZEJN, { name: a.name }) : x.intl.string(x.t.XKUw8m),
                        subtext: u,
                    });
                })(e, n),
            );
    }
    return [y, ...O];
}
