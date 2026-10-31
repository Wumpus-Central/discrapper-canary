n.d(t, { A: () => eI, x: () => ef });
var i = n(488428),
    r = n(562708),
    a = n(179771),
    s = n(665260),
    l = n(636537),
    o = n(933681),
    d = n(73153),
    c = n(62583),
    u = n(627363),
    _ = n(587895),
    E = n(306044),
    A = n(626584),
    h = n(953384),
    f = n(952818),
    I = n(651743),
    p = n(773669),
    T = n(134861),
    m = n(760751),
    g = n(189081),
    S = n(340829),
    N = n(174459),
    C = n(339586),
    O = n(723702),
    R = n(499785),
    L = n(144914),
    y = n(308368),
    D = n(991690),
    v = n(933958),
    b = n(734057),
    M = n(287809),
    P = n(646865),
    U = n(909206),
    w = n(795816),
    G = n(817636);
async function x(e) {
    let t;
    if (null == e.targetApplicationId) return !1;
    let n = !1;
    try {
        ((t = await (0, G.A)(e.targetApplicationId, e.channelId)), (n = (0, P.f)()));
    } catch {
        return !1;
    }
    return (0, P.w)(n, () => k({ ...e, targetApplication: t }));
}
async function k(e) {
    let {
            targetApplication: t,
            locationObject: n,
            channelId: i,
            analyticsLocations: r,
            componentId: a,
            commandOrigin: s,
            sectionName: l,
            source: o,
            onExecutedCallback: d,
            referrerId: c,
            customId: u,
            inviterUserId: _,
            onConfirmActivityLaunchChecksAlertOpen: E,
        } = e,
        A = M.default.getCurrentUser();
    return (
        null != i &&
        null != b.A.getChannel(i) &&
        null != A &&
        null != t &&
        (U.MJ(t.id),
        await (0, w.su)({
            channelId: i,
            applicationId: t.id,
            isStart: !0,
            componentId: a,
            commandOrigin: s,
            sectionName: l,
            locationObject: n,
            analyticsLocations: r,
            source: o,
            onExecutedCallback: d,
            referrerId: c,
            customId: u,
            inviterUserId: _,
            onConfirmActivityLaunchChecksAlertOpen: E,
        }))
    );
}
var F = n(969151),
    B = n(277344),
    V = n(55730),
    H = n(717971);
async function j(e) {
    if (!_.A.isHydrated(e))
        try {
            await (0, u.TA)(e);
        } catch {}
    return _.A.getApplication(e);
}
var W = n(878014),
    Y = n(568598),
    K = n(198052),
    $ = n(577483),
    z = n(625180),
    X = n(568034),
    q = n(366430),
    Z = n(290863),
    Q = n(308528),
    J = n(652215),
    ee = n(165610);
async function et(e) {
    let { userId: t, sessionId: n, applicationId: i, channelId: r, messageId: a, intent: s } = e,
        l = e.activity ?? Z.A.getApplicationActivity(t, i);
    if (!(e.embedded ?? (0, V.A)(l, J.jUm.EMBEDDED)) || !(0, q.VS)(await j(i))) return null;
    let o = v.Ay.getEmbeddedActivityForUserId(t, i, !0);
    return null != o
        ? (0, c.A)({
              applicationId: i,
              activityChannelId: (0, F.H)(o.location),
              source: e.source,
              locationObject: e.locationObject ?? {},
              analyticsLocations: e.analyticsLocations ?? [],
          })
        : (0, X.A)({
              application: { id: i },
              userId: t,
              activity: l,
              sessionId: n,
              channelId: r,
              messageId: a,
              intent: s,
          });
}
async function en(e) {
    let t = await j(e.applicationId);
    return (0, q.U4)(t) ? ei(e, t) : !(0, q.VS)(t) && (null != t && (0, W.W)(t, D.U.MAIN) ? er(e, t) : null);
}
async function ei(e, t) {
    let {
            applicationId: n,
            channelId: i,
            fromLink: r = !1,
            linkChannelId: a,
            customId: s,
            referrerId: l,
            source: o,
            inviterUserId: d,
            analyticsLocations: c = [],
        } = e,
        u = b.A.getChannel(i),
        _ = u?.getGuildId(),
        E = { isStart: !0, analyticsLocations: c, source: o, inviterUserId: d, channelId: i, guildId: _ },
        A = { customId: s, referrerId: l };
    if (r || !(0, q.It)(t).has(D.U.MAIN))
        return (0, H.y)({
            applicationId: n,
            application: t,
            analyticsContext: E,
            launch: A,
            preferAppChannel: r,
            channelId: a,
        });
    (0, $.A)(i);
    try {
        let e = await z.A.launchFrame({
            applicationId: n,
            surface: null != u && null != _ ? { type: D.U.MAIN, channelId: u.id, guildId: _ } : ee.sd,
            analyticsContext: E,
            launch: A,
        });
        if (null != u) {
            let t = (0, Y.Gg)({ applicationId: n, id: e });
            null != K.A.getParticipant(u.id, t) && (0, B.A)(u.id, t);
        }
        return !0;
    } catch {
        return !1;
    }
}
async function er(e, t) {
    let n,
        { applicationId: i, channelId: r, locationObject: a = {}, analyticsLocations: s = [] } = e,
        l = {
            locationObject: a,
            analyticsLocations: s,
            componentId: e.componentId,
            sectionName: e.sectionName,
            source: e.source,
            customId: e.customId,
            referrerId: e.referrerId,
            inviterUserId: e.inviterUserId,
        };
    if (null != r)
        return v.Ay.getEmbeddedActivitiesForChannel(r).some((e) => e.applicationId === i)
            ? (0, c.A)({ applicationId: i, activityChannelId: r, ...l })
            : x({
                  targetApplicationId: i,
                  channelId: r,
                  commandOrigin: e.commandOrigin,
                  onConfirmActivityLaunchChecksAlertOpen: e.onConfirmActivityLaunchChecksAlertOpen,
                  ...l,
              });
    let o = t.bot?.id;
    if (null == o) return !1;
    try {
        n = await Q.A.openPrivateChannel({ recipientIds: o });
    } catch {
        return !1;
    }
    return x({
        targetApplicationId: i,
        channelId: n,
        commandOrigin: e.commandOrigin,
        onConfirmActivityLaunchChecksAlertOpen: e.onConfirmActivityLaunchChecksAlertOpen,
        ...l,
    });
}
var ea = n(59636),
    es = n(912851);
let el = (0, n(403362).iT)() ? void 0 : window.GLOBAL_ENV.CDN_HOST;
function eo(e, t) {
    return null != el ? `https://${el}${e}` : t;
}
let ed = eo("/detectables/games.json", J.Rsh.GAMES_DETECTABLE),
    ec = eo("/detectables/non-games.json", J.Rsh.NON_GAMES_DETECTABLE);
var eu = n(917550),
    e_ = n(105292);
let eE = new A.A("GamesActionCreators");
function eA(e) {
    let {
        applicationId: t,
        secret: n,
        joinUrl: i,
        channelId: r,
        intent: a = eu.W.PLAY,
        embedded: s = !1,
        source: l,
        locationObject: o,
        analyticsLocations: E,
        preferDeepLink: A = !1,
    } = e;
    if (null != i) {
        try {
            if (i.startsWith("http")) {
                let e = window.open(i, "_blank");
                (null == e || e.closed || void 0 === e.closed) && (window.location.href = i);
            } else window.location.href = i;
        } catch (e) {
            (eE.warn("Failed to open join URL", { applicationId: t, error: e.message }),
                d.h.dispatch({ type: "ACTIVITY_JOIN_FAILED", applicationId: t }));
        }
        return Promise.resolve();
    }
    if (A) {
        let e = _.A.getApplication(t);
        if (e?.deepLinkUri != null) {
            let i = e.deepLinkUri.replace(/\/+$/, ""),
                r = `${i}${J.O3O.GAME_INVITE_FRAGMENT}${n}`;
            try {
                if (r.startsWith("http")) {
                    let e = window.open(r, "_blank");
                    (null == e || e.closed || void 0 === e.closed) &&
                        (eE.warn("Deep link popup was blocked by browser, trying location.href", { applicationId: t }),
                        (window.location.href = r));
                } else window.location.href = r;
                return Promise.resolve();
            } catch (e) {
                eE.warn("Failed to open deep link, falling back to desktop launch", {
                    applicationId: t,
                    error: e.message,
                });
            }
        }
    }
    (async function () {
        return s
            ? (0, c.A)({
                  applicationId: t,
                  activityChannelId: r ?? void 0,
                  source: l,
                  locationObject: o ?? {},
                  analyticsLocations: E ?? [],
              })
            : (await eh({ applicationId: t }), !1);
    })()
        .then(async (e) => {
            if (e) return null;
            null == _.A.getApplication(t) && (await (0, u.TA)(t));
            let i = _.A.getApplication(t)?.parentId;
            return (
                null != i &&
                    C.A.waitParentConnected(i)
                        .then(() => C.A.waitParentSubscribed(i, J.ZE4.ACTIVITY_JOIN))
                        .then(() => {
                            d.h.dispatch({
                                type: "ACTIVITY_JOIN",
                                applicationId: t,
                                parentApplicationId: i,
                                secret: n,
                                intent: a,
                                embedded: s,
                            });
                        })
                        .catch(() => {}),
                d.h.dispatch({ type: "ACTIVITY_JOIN_LOADING", applicationId: t }),
                C.A.waitConnected(t).then(
                    () => (
                        d.h.dispatch({ type: "ACTIVITY_JOIN_LOADING", applicationId: t }),
                        C.A.waitSubscribed(t, J.ZE4.ACTIVITY_JOIN)
                    ),
                )
            );
        })
        .then(() => {
            d.h.dispatch({
                type: "ACTIVITY_JOIN",
                applicationId: t,
                parentApplicationId: null,
                secret: n,
                intent: a,
                embedded: s,
            });
        })
        .catch(() => d.h.dispatch({ type: "ACTIVITY_JOIN_FAILED", applicationId: t }));
}
function eh(e) {
    let { applicationId: t, branchId: n } = e;
    if (T.A.isConnected(t)) return Promise.resolve();
    let r = null;
    if (null == n) {
        let e = g.A.getActiveLibraryApplication(t);
        n = null != e ? e.branchId : t;
    }
    if (S.A.isLaunchable(t, n)) {
        let e = S.A.getState(t, n),
            s = g.A.getActiveLaunchOptionId(t, n);
        if (null == e) throw Error("Missing dispatch game when launching");
        let o = g.A.getLibraryApplication(t, n);
        if (null == o) throw Error("Missing library application when launching");
        r = l.Bo.post({
            url: J.Rsh.OAUTH2_AUTHORIZE,
            query: { client_id: t, response_type: "token", scope: [a.F.IDENTIFY].join(" ") },
            retries: 3,
            body: { authorize: !0 },
            oldFormErrors: !0,
            rejectWithError: (0, l.fT)(),
        })
            .then(
                (e) => {
                    let t = e.body.location.split(/#|\?/),
                        n = i.parse(t[t.length - 1]);
                    if ("invalid_request" === n.error) return null;
                    if (null != n.error)
                        throw Error(`OAuth2 Error: ${n.error}: ${n.error_description ?? "unknown error"}`);
                    return n.access_token;
                },
                (e) => {
                    if (404 === e.status) return null;
                    throw e;
                },
            )
            .then((t) => C.A.launchDispatchApplication(e, t, p.default.locale, o.getBranchName(), s));
    } else {
        let e = _.A.getApplication(t);
        if (null != e) {
            r = C.A.launch(e);
            let n = m.A.getOfficialGame(e);
            null != n && n.id !== t && (r = r.catch(() => C.A.launch(n)));
        } else r = C.A.launchGame(t);
    }
    let s = Error("game not found");
    return null != r
        ? (d.h.dispatch({ type: "LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE", applicationId: t, branchId: n }),
          d.h.dispatch({ type: "GAME_LAUNCH_START", applicationId: t }),
          r
              .then((e) => {
                  d.h.dispatch({ type: "GAME_LAUNCH_SUCCESS", applicationId: t, pids: e });
              })
              .catch((e) => {
                  (es.A.show(J.kqX.LAUNCH_GAME_FAILURE, e_.intl.string(e_.t.YZEBdj)),
                      d.h.dispatch({ type: "GAME_LAUNCH_FAIL", applicationId: t, error: s }));
              }))
        : (d.h.dispatch({ type: "GAME_LAUNCH_FAIL", applicationId: t, error: s }), Promise.reject(s));
}
function ef(e) {
    d.h.dispatch({ type: "RUNNING_GAME_SET_DEBUG_GAME", game: e });
}
let eI = {
    addGame(e, t) {
        (d.h.dispatch({ type: "RUNNING_GAME_ADD_OVERRIDE", pid: e }),
            N.default.track(J.HAw.RUNNING_GAME_OVERRIDE_ADDED, { game_name: t }));
    },
    toggleOverlay(e, t, n) {
        let i = (0, f.Zh)(e),
            r = m.A.findGame(i);
        if (null != r) {
            let e = g.A.getActiveLibraryApplication(r.id);
            if (null != e) {
                let i = e.getFlags(),
                    r = s.Lt(i, J.hM6.OVERLAY_DISABLED);
                t && r !== t && (i = s.PQ(i, J.hM6.OVERLAY_DISABLED));
                let a = s.Lt(i, J.hM6.OVERLAY_V3_DISABLED);
                (null != n && n !== a && (i = s.PQ(i, J.hM6.OVERLAY_V3_DISABLED)), ea.V(e.id, e.branchId, i));
                return;
            }
        }
        d.h.dispatch({
            type: "RUNNING_GAME_TOGGLE_OVERLAY",
            game: i,
            newLegacyOverlayEnabledValue: t,
            newOverlayV3EnabledValue: n,
        });
    },
    toggleDetection(e) {
        d.h.dispatch({ type: "RUNNING_GAME_TOGGLE_DETECTION", game: e });
    },
    editName(e, t) {
        d.h.dispatch({ type: "RUNNING_GAME_EDIT_NAME", game: e, newName: t });
    },
    identifyGame: (e, t) =>
        (0, E.A)().then(
            (t) =>
                new Promise((n, i) => {
                    null == t
                        ? i(Error("Game utils module not loaded"))
                        : t.identifyGame(e, (t, r) => {
                              (eE.log("Identified game: ", {
                                  status: t,
                                  name: r.name,
                                  iconHash: r.iconHash,
                                  sku: r.sku,
                                  executableName: r.executableName,
                                  distributor: r.distributor,
                                  publisher: r.publisher,
                              }),
                              0 !== t)
                                  ? i(Error(`Error ${t} when fetching info on ${e}`))
                                  : null == r.icon || "" === r.icon || null == r.name || "" === r.name
                                    ? i(Error(`Did not find data on ${e}`))
                                    : n(r);
                          });
                }),
        ),
    getDetectableGames() {
        if (!m.A.canFetchDetectableGames()) return;
        let e = m.A.detectableGamesEtag;
        (d.h.dispatch({ type: "GAMES_DATABASE_FETCH" }),
            R.A.get({
                url: null != el ? `https://${el}/detectables/games-v1.json` : ed,
                headers: { "If-None-Match": e },
                retries: 1,
                oldFormErrors: !0,
                trackedActionData: {
                    event: r.NetworkActionNames.DETECTABLE_APPLICATIONS_FETCH,
                    properties: (t) => (0, o.e0)({ sent_etag: e, received_etag: t?.headers?.etag }),
                },
                rejectWithError: (0, l.fT)(),
            }).then(
                (e) => {
                    let {
                        body: t,
                        headers: { etag: n },
                    } = e;
                    d.h.dispatch({ type: "GAMES_DATABASE_UPDATE", games: t, etag: n });
                },
                (e) => {
                    let { status: t } = e;
                    304 === t
                        ? d.h.dispatch({ type: "GAMES_DATABASE_UPDATE", games: [], etag: m.A.detectableGamesEtag })
                        : d.h.dispatch({ type: "GAMES_DATABASE_FETCH_FAIL" });
                },
            ));
    },
    getDetectableBlocklist() {
        if (!m.A.canFetchExecutableBlocklist()) return;
        let e = m.A.blocklistEtag;
        (d.h.dispatch({ type: "GAMES_BLOCKLIST_FETCH" }),
            l.Bo.get({
                url: J.Rsh.GAMES_BLOCKLIST,
                headers: { "If-None-Match": e },
                oldFormErrors: !0,
                rejectWithError: (0, l.fT)(),
            }).then(
                (e) => {
                    let {
                        body: t,
                        headers: { etag: n },
                    } = e;
                    d.h.dispatch({
                        type: "GAMES_BLOCKLIST_UPDATE",
                        executables: t.executables ?? [],
                        patterns: t.patterns ?? [],
                        etag: n,
                    });
                },
                (e) => {
                    let { status: t } = e;
                    304 === t
                        ? d.h.dispatch({
                              type: "GAMES_BLOCKLIST_UPDATE",
                              executables: [],
                              patterns: [],
                              etag: m.A.blocklistEtag,
                          })
                        : (eE.error("Failed to fetch games blocklist"),
                          d.h.dispatch({ type: "GAMES_BLOCKLIST_FETCH_FAIL" }));
                },
            ));
    },
    getDetectableNonGames() {
        if (!h.A.canFetch()) return;
        let e = h.A.etag;
        (d.h.dispatch({ type: "NON_GAMES_DATABASE_FETCH" }),
            R.A.get({
                url: null != el ? `https://${el}/detectables/non-games-v1.json` : ec,
                headers: { "If-None-Match": e },
                retries: 1,
                trackedActionData: {
                    event: r.NetworkActionNames.DETECTABLE_NON_GAMES_FETCH,
                    properties: (t) => (0, o.e0)({ sent_etag: e, received_etag: t?.headers?.etag }),
                },
                rejectWithError: (0, l.fT)(),
            }).then(
                (e) => {
                    let {
                        body: t,
                        headers: { etag: n },
                    } = e;
                    d.h.dispatch({ type: "NON_GAMES_DATABASE_UPDATE", nonGames: t, etag: n });
                },
                (e) => {
                    let { status: t } = e;
                    304 === t
                        ? d.h.dispatch({ type: "NON_GAMES_DATABASE_UPDATE", nonGames: [], etag: h.A.etag })
                        : d.h.dispatch({ type: "NON_GAMES_DATABASE_FETCH_FAIL" });
                },
            ));
    },
    deleteEntry(e) {
        d.h.dispatch({ type: "RUNNING_GAME_DELETE_ENTRY", game: e });
    },
    launch: async function (e) {
        let t = await en(e);
        if (null != t) return t;
        let { applicationId: n } = e;
        return (
            !!(0, L.A)({
                LibraryApplicationStore: g.A,
                LaunchableGameStore: I.A,
                DispatchApplicationStore: S.A,
                ConnectedAppsStore: T.A,
                applicationId: n,
            }) && (await eh({ applicationId: n }), !0)
        );
    },
    launchGame: eh,
    async join(e) {
        let {
            userId: t,
            sessionId: n,
            applicationId: i,
            channelId: r,
            messageId: a,
            intent: s = eu.W.PLAY,
            embedded: l = !1,
            source: o,
            locationObject: c,
            analyticsLocations: u,
            remotePartyId: _,
        } = e;
        if (__OVERLAY__)
            return (
                d.h.dispatch({
                    type: "OVERLAY_JOIN_GAME",
                    userId: t,
                    sessionId: n,
                    applicationId: i,
                    channelId: r,
                    messageId: a,
                }),
                Promise.resolve(!0)
            );
        let E = await et(e);
        if (null != E) return E;
        d.h.dispatch({ type: "ACTIVITY_JOIN_LOADING", applicationId: i, remotePartyId: _ });
        try {
            let e = (0, O.platformPrefersDeepLink)(),
                { secret: d, joinUrl: E } = await y.A.getJoinSecret(t, n, i, r, a);
            return (
                null == _ &&
                    eA({
                        applicationId: i,
                        secret: d,
                        joinUrl: E,
                        channelId: r,
                        intent: s,
                        embedded: l,
                        source: o,
                        locationObject: c,
                        analyticsLocations: u,
                        preferDeepLink: e,
                    }),
                !0
            );
        } catch (e) {
            return (d.h.dispatch({ type: "ACTIVITY_JOIN_FAILED", applicationId: i }), !1);
        }
    },
    joinWithSecret: eA,
};
