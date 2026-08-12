"use strict";
n.d(t, { Ay: () => Y, xt: () => W });
var i = n(488428),
    r = n(562708),
    a = n(179771),
    s = n(665260),
    l = n(562465),
    o = n(933681),
    d = n(228366),
    c = n(62583),
    u = n(627363),
    _ = n(587895),
    E = n(306044),
    A = n(626584),
    h = n(625180),
    I = n(207371),
    f = n(953384);
let p = (0, n(945810).mj)({
    name: "2026-06-minimal-detectable",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function T(e) {
    let { location: t } = e;
    return p.getConfig({ location: t }).enabled;
}
var m = n(952818),
    g = n(773669),
    S = n(134861),
    N = n(760751),
    C = n(189081),
    O = n(340829),
    R = n(174459),
    L = n(738533),
    D = n(723702),
    y = n(499785),
    v = n(308368),
    b = n(59636),
    M = n(912851),
    P = n(652215),
    U = n(360469),
    w = n(165610);
let G = window.GLOBAL_ENV.CDN_HOST;
function x(e, t) {
    return null != G ? `https://${G}${e}` : t;
}
let k = x("/detectables/games.json", P.Rsh.GAMES_DETECTABLE),
    F = x("/detectables/non-games.json", P.Rsh.NON_GAMES_DETECTABLE);
var V = n(375708);
let B = new A.A("GamesActionCreators");
function H(e) {
    let {
        applicationId: t,
        secret: n,
        joinUrl: i,
        channelId: r,
        intent: a = U.W9.PLAY,
        embedded: s = !1,
        source: l,
        locationObject: o,
        analyticsLocations: c,
        preferDeepLink: E = !1,
    } = e;
    if (null != i) {
        try {
            if (i.startsWith("http")) {
                let e = window.open(i, "_blank");
                (null == e || e.closed || void 0 === e.closed) && (window.location.href = i);
            } else window.location.href = i;
        } catch (e) {
            B.warn("Failed to open join URL", { applicationId: t, error: e.message }),
                d.h.dispatch({ type: "ACTIVITY_JOIN_FAILED", applicationId: t });
        }
        return Promise.resolve();
    }
    if (E) {
        let e = _.A.getApplication(t);
        if (e?.deepLinkUri != null) {
            let i = e.deepLinkUri.replace(/\/+$/, ""),
                r = `${i}${P.O3O.GAME_INVITE_FRAGMENT}${n}`;
            try {
                if (r.startsWith("http")) {
                    let e = window.open(r, "_blank");
                    (null == e || e.closed || void 0 === e.closed) &&
                        (B.warn("Deep link popup was blocked by browser, trying location.href", { applicationId: t }),
                        (window.location.href = r));
                } else window.location.href = r;
                return Promise.resolve();
            } catch (e) {
                B.warn("Failed to open deep link, falling back to desktop launch", {
                    applicationId: t,
                    error: e.message,
                });
            }
        }
    }
    j({ applicationId: t, channelId: r, embedded: s, source: l, locationObject: o, analyticsLocations: c })
        .then(async (e) => {
            if (0 === e) return null;
            null == _.A.getApplication(t) && (await (0, u.TA)(t));
            let i = _.A.getApplication(t)?.parentId;
            return (
                null != i &&
                    L.A.waitParentConnected(i)
                        .then(() => L.A.waitParentSubscribed(i, P.ZE4.ACTIVITY_JOIN))
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
                L.A.waitConnected(t).then(
                    () => (
                        d.h.dispatch({ type: "ACTIVITY_JOIN_LOADING", applicationId: t }),
                        L.A.waitSubscribed(t, P.ZE4.ACTIVITY_JOIN)
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
async function j(e) {
    let {
        applicationId: t,
        branchId: n,
        channelId: r,
        embedded: s = !1,
        source: o,
        locationObject: u = {},
        analyticsLocations: E = [],
    } = e;
    if (s) {
        let e = _.A.getApplication(t);
        return null != e && (0, I.x)(e)
            ? (await h.A.launchFrame({ applicationId: t, surface: w.sd }), 0)
            : (await (0, c.A)({
                    applicationId: t,
                    activityChannelId: r ?? void 0,
                    source: o,
                    locationObject: u,
                    analyticsLocations: E,
                }))
              ? 0
              : Promise.resolve();
    }
    if (S.A.isConnected(t)) return Promise.resolve();
    let A = null;
    if (null == n) {
        let e = C.A.getActiveLibraryApplication(t);
        n = null != e ? e.branchId : t;
    }
    if (O.A.isLaunchable(t, n)) {
        let e = O.A.getState(t, n),
            r = C.A.getActiveLaunchOptionId(t, n);
        if (null == e) throw Error("Missing dispatch game when launching");
        let s = C.A.getLibraryApplication(t, n);
        if (null == s) throw Error("Missing library application when launching");
        A = l.Bo.post({
            url: P.Rsh.OAUTH2_AUTHORIZE,
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
            .then((t) => L.A.launchDispatchApplication(e, t, g.default.locale, s.getBranchName(), r));
    } else {
        let e = _.A.getApplication(t);
        A = null != e ? L.A.launch(e) : L.A.launchGame(t);
    }
    let f = Error("game not found");
    return null != A
        ? (d.h.dispatch({ type: "LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE", applicationId: t, branchId: n }),
          d.h.dispatch({ type: "GAME_LAUNCH_START", applicationId: t }),
          A.then((e) => {
              d.h.dispatch({ type: "GAME_LAUNCH_SUCCESS", applicationId: t, pids: e });
          }).catch((e) => {
              M.A.show(P.kqX.LAUNCH_GAME_FAILURE, V.intl.string(V.t.YZEBdj)),
                  d.h.dispatch({ type: "GAME_LAUNCH_FAIL", applicationId: t, error: f });
          }))
        : (d.h.dispatch({ type: "GAME_LAUNCH_FAIL", applicationId: t, error: f }), Promise.reject(f));
}
function W(e) {
    d.h.dispatch({ type: "RUNNING_GAME_SET_DEBUG_GAME", game: e });
}
let Y = {
    addGame(e, t) {
        d.h.dispatch({ type: "RUNNING_GAME_ADD_OVERRIDE", pid: e }),
            R.default.track(P.HAw.RUNNING_GAME_OVERRIDE_ADDED, { game_name: t });
    },
    toggleOverlay(e, t, n) {
        let i = (0, m.Zh)(e),
            r = N.A.findGame(i);
        if (null != r) {
            let e = C.A.getActiveLibraryApplication(r.id);
            if (null != e) {
                let i = e.getFlags(),
                    r = s.Lt(i, P.hM6.OVERLAY_DISABLED);
                t && r !== t && (i = s.PQ(i, P.hM6.OVERLAY_DISABLED));
                let a = s.Lt(i, P.hM6.OVERLAY_V3_DISABLED);
                null != n && n !== a && (i = s.PQ(i, P.hM6.OVERLAY_V3_DISABLED)), b.V(e.id, e.branchId, i);
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
                              (B.log("Identified game: ", {
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
                                    : (d.h.dispatch({
                                          type: "GAME_ICON_UPDATE",
                                          gameName: r.name,
                                          icon: `data:image/png;base64,${r.icon}`,
                                      }),
                                      n(r));
                          });
                }),
        ),
    getDetectableGames() {
        if (!N.A.canFetchDetectableGames()) return;
        let e = T({ location: "getDetectableGames" }) && null != G ? `https://${G}/detectables/games-v1.json` : k,
            t = N.A.detectableGamesEtag;
        d.h.wait(() => {
            d.h.dispatch({ type: "GAMES_DATABASE_FETCH" }),
                y.A.get({
                    url: e,
                    headers: { "If-None-Match": t },
                    retries: 1,
                    oldFormErrors: !0,
                    trackedActionData: {
                        event: r.NetworkActionNames.DETECTABLE_APPLICATIONS_FETCH,
                        properties: (e) => (0, o.e0)({ sent_etag: t, received_etag: e?.headers?.etag }),
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
                            ? d.h.dispatch({ type: "GAMES_DATABASE_UPDATE", games: [], etag: N.A.detectableGamesEtag })
                            : d.h.dispatch({ type: "GAMES_DATABASE_FETCH_FAIL" });
                    },
                );
        });
    },
    getDetectableBlocklist() {
        if (!N.A.canFetchExecutableBlocklist()) return;
        let e = N.A.blocklistEtag;
        d.h.dispatch({ type: "GAMES_BLOCKLIST_FETCH" }),
            l.Bo.get({
                url: P.Rsh.GAMES_BLOCKLIST,
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
                              etag: N.A.blocklistEtag,
                          })
                        : (B.error("Failed to fetch games blocklist"),
                          d.h.dispatch({ type: "GAMES_BLOCKLIST_FETCH_FAIL" }));
                },
            );
    },
    getDetectableNonGames() {
        if (!f.A.canFetch()) return;
        let e =
                T({ location: "getDetectableNonGames" }) && null != G
                    ? `https://${G}/detectables/non-games-v1.json`
                    : F,
            t = f.A.etag;
        d.h.wait(() => {
            d.h.dispatch({ type: "NON_GAMES_DATABASE_FETCH" }),
                y.A.get({
                    url: e,
                    headers: { "If-None-Match": t },
                    retries: 1,
                    trackedActionData: {
                        event: r.NetworkActionNames.DETECTABLE_NON_GAMES_FETCH,
                        properties: (e) => (0, o.e0)({ sent_etag: t, received_etag: e?.headers?.etag }),
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
                            ? d.h.dispatch({ type: "NON_GAMES_DATABASE_UPDATE", nonGames: [], etag: f.A.etag })
                            : d.h.dispatch({ type: "NON_GAMES_DATABASE_FETCH_FAIL" });
                    },
                );
        });
    },
    reportUnverifiedGame(e) {
        let { name: t, iconHash: n, publisher: i, distributor: r, sku: a, executableName: s } = e,
            o = (0, E.v)(s);
        (B.log("Reporting unverified game: ", {
            name: t,
            executableName: s,
            iconHash: n,
            publisher: i,
            distributor: r,
            sku: a,
            cleanedExecutable: o,
        }),
        null != o) &&
            l.Bo.post({
                url: P.Rsh.UNVERIFIED_APPLICATIONS,
                body: {
                    name: t,
                    os: (0, D.getPlatformName)(),
                    icon: n,
                    distributor_application: null == r || "" === r ? null : { distributor: r, sku: a },
                    executable: o,
                    publisher: i,
                    report_version: 3,
                },
                retries: 1,
                oldFormErrors: !0,
                rejectWithError: !0,
            }).then((e) => {
                let {
                    body: { name: t, hash: n, missing_data: i },
                } = e;
                d.h.dispatch({ type: "UNVERIFIED_GAME_UPDATE", name: t, hash: n, missingData: i });
            });
    },
    uploadIcon(e, t, n) {
        l.Bo.post({
            url: P.Rsh.UNVERIFIED_APPLICATIONS_ICONS,
            body: { application_name: e, application_hash: t, icon: n },
            retries: 1,
            oldFormErrors: !0,
            rejectWithError: !0,
        });
    },
    deleteEntry(e) {
        d.h.dispatch({ type: "RUNNING_GAME_DELETE_ENTRY", game: e });
    },
    launch: j,
    async join(e) {
        let {
            userId: t,
            sessionId: n,
            applicationId: i,
            channelId: r,
            messageId: a,
            intent: s = U.W9.PLAY,
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
        d.h.dispatch({ type: "ACTIVITY_JOIN_LOADING", applicationId: i, remotePartyId: _ });
        try {
            let e = (0, D.platformPrefersDeepLink)(),
                { secret: d, joinUrl: E } = await v.A.getJoinSecret(t, n, i, r, a);
            return (
                null == _ &&
                    H({
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
            return d.h.dispatch({ type: "ACTIVITY_JOIN_FAILED", applicationId: i }), !1;
        }
    },
    joinWithSecret: H,
};
