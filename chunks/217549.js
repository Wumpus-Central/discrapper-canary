n.d(t, { A: () => y }), n(321073);
var i = n(627968),
    a = n(64700),
    l = n(311907),
    r = n(397927),
    s = n(308368),
    o = n(956793),
    d = n(573648),
    c = n(682261),
    u = n(874546),
    A = n(765379),
    h = n(61330),
    _ = n(15285),
    m = n(651743),
    p = n(780964),
    g = n(858897),
    E = n(962173),
    I = n(134861),
    f = n(189081),
    C = n(194871),
    T = n(954571),
    N = n(144914),
    S = n(715671),
    x = n(652215),
    v = n(985018);
let b = d.A.get(x.fg2.XBOX).name;
function y(e) {
    let { currentActivities: t } = e,
        n = t.length > 1,
        y = (function (e) {
            let { currentActivities: t } = e,
                n = t.some((e) => {
                    let { activity: t } = e;
                    return (0, c.A)(t);
                }),
                a = (0, l.bG)([E.A], () => E.A.getAccounts().some((e) => e.type === d.A.get(x.fg2.XBOX).type)),
                s = t.filter((e) => {
                    let { activity: t } = e;
                    return (0, h.A)(t);
                }),
                o = s.length > 0,
                A = s.some((e) => {
                    let { activity: t } = e;
                    return (0, u.A)(t);
                });
            return n || a || !o || A
                ? null
                : (0, i.jsx)(r.Drp, {
                      id: "xbox-connect",
                      action: () => (0, g.openUserSettings)(p.X.CONNECTIONS_PANEL),
                      label: v.intl.formatToPlainString(v.t.XWSHTb, { platform: b }),
                  });
        })(e),
        O = (function (e) {
            let { currentActivities: t } = e,
                n = a.useContext(T.AnalyticsContext);
            return (0, l.yK)(
                [_.Ay, f.A, m.A, C.A, I.A],
                () =>
                    t
                        .filter((e) => !(0, A.A)(e.activity))
                        .map((e) => {
                            let { activity: t, game: i } = e,
                                a = f.A.getActiveLibraryApplication(i.id);
                            return {
                                ...e,
                                libraryApplication: a,
                                canJoin: (0, u.A)(t),
                                canPlay: (0, N.A)({
                                    LibraryApplicationStore: f.A,
                                    LaunchableGameStore: m.A,
                                    DispatchApplicationStore: C.A,
                                    ConnectedAppsStore: I.A,
                                    applicationId: i.id,
                                    branchId: null != a ? a.branchId : null,
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
                    let { canJoin: n, activity: a, activityUser: l } = e;
                    if (!n || null == a) return null;
                    async function d() {
                        if (null == a) return;
                        let e = await s.A.sendActivityInviteUser({
                            type: x.xL.JOIN_REQUEST,
                            userId: l.id,
                            activity: a,
                            location: x.ThZ.USER_ACTIVITY_ACTIONS,
                        });
                        null != e && o.default.selectPrivateChannel(e.id);
                    }
                    return (0, i.jsx)(r.Drp, {
                        id: `join-${a.session_id}`,
                        label: t
                            ? v.intl.formatToPlainString(v.t.wFAvxM, { name: l.toString() })
                            : v.intl.string(v.t.OKsSCR),
                        action: d,
                    });
                })(e, n),
                (function (e, t) {
                    let {
                        activity: n,
                        game: a,
                        libraryApplication: l,
                        location: s,
                        canPlay: o,
                        isRunning: d,
                        isLaunching: c,
                    } = e;
                    if (!o || null == n) return null;
                    let u = d
                        ? v.intl.formatToPlainString(v.t["gBme/4"], { name: a.name })
                        : c
                          ? v.intl.formatToPlainString(v.t.WtSQwG, { name: a.name })
                          : void 0;
                    return (0, i.jsx)(r.Drp, {
                        id: `play-${n.session_id}`,
                        action: function () {
                            (0, S.playApplication)(a.id, l, {
                                analyticsParams: { location: { ...s, object: x.ZSU.LIST_ITEM } },
                            });
                        },
                        label: t ? v.intl.formatToPlainString(v.t.ZDZEJN, { name: a.name }) : v.intl.string(v.t.XKUw8m),
                        subtext: u,
                    });
                })(e, n),
            );
    }
    return [...L, y];
}
