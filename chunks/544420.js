"use strict";
n.d(t, { Ay: () => B, xt: () => V });
var r = n(488428),
    i = n(110259),
    s = n(179771),
    a = n(665260),
    o = n(562465),
    l = n(933681),
    u = n(73153),
    c = n(447031),
    d = n(587895),
    _ = n(306044),
    f = n(626584),
    p = n(625180),
    h = n(207371),
    m = n(953384),
    E = n(15285),
    g = n(773669),
    A = n(134861),
    I = n(760751),
    T = n(189081),
    S = n(194871),
    y = n(954571),
    v = n(25171),
    N = n(723702),
    C = n(499785),
    R = n(308368),
    O = n(59636),
    b = n(912851),
    D = n(652215),
    L = n(360469),
    w = n(332988),
    M = n(985018);
let x = 3,
    P = new f.A("GamesActionCreators");
function k(e) {
    let {
        applicationId: t,
        secret: n,
        channelId: r,
        intent: i = L.W9.PLAY,
        embedded: s = !1,
        source: a,
        locationObject: o,
        analyticsLocations: l,
        preferDeepLink: c = !1,
    } = e;
    if (c) {
        let e = d.A.getApplication(t);
        if (e?.deepLinkUri != null) {
            let r = e.deepLinkUri.replace(/\/+$/, ""),
                i = `${r}${D.O3O.GAME_INVITE_FRAGMENT}${n}`;
            try {
                if (i.startsWith("http")) {
                    let e = window.open(i, "_blank");
                    (null == e || e.closed || void 0 === e.closed) &&
                        (P.warn("Deep link popup was blocked by browser, trying location.href", { applicationId: t }),
                        (window.location.href = i));
                } else window.location.href = i;
                return Promise.resolve();
            } catch (e) {
                P.warn("Failed to open deep link, falling back to desktop launch", {
                    applicationId: t,
                    error: e.message,
                });
            }
        }
    }
    F({ applicationId: t, channelId: r, embedded: s, source: a, locationObject: o, analyticsLocations: l })
        .then((e) =>
            0 === e
                ? null
                : v.A.waitConnected(t).then(() => Promise.race([v.A.waitSubscribed(t, D.ZE4.ACTIVITY_JOIN)])),
        )
        .then(() => {
            u.h.dispatch({ type: "ACTIVITY_JOIN", applicationId: t, secret: n, intent: i, embedded: s });
        })
        .catch(() => u.h.dispatch({ type: "ACTIVITY_JOIN_FAILED", applicationId: t }));
}
function U(e, t) {
    return null == e || "" === e ? null : { distributor: e, sku: t };
}
function G(e) {
    return o.Bo.post({
        url: D.Rsh.OAUTH2_AUTHORIZE,
        query: { client_id: e, response_type: "token", scope: [s.F.IDENTIFY].join(" ") },
        retries: 3,
        body: { authorize: !0 },
        oldFormErrors: !0,
        rejectWithError: !1,
    }).then(
        (e) => {
            let t = e.body.location.split(/#|\?/),
                n = r.parse(t[t.length - 1]);
            if ("invalid_request" === n.error) return null;
            if (null != n.error) throw Error(`OAuth2 Error: ${n.error}: ${n.error_description ?? "unknown error"}`);
            return n.access_token;
        },
        (e) => {
            if (404 === e.status) return null;
            throw e;
        },
    );
}
async function F(e) {
    let {
        applicationId: t,
        branchId: n,
        channelId: r,
        embedded: i = !1,
        source: s,
        locationObject: a = {},
        analyticsLocations: o = [],
    } = e;
    if (i) {
        let e = d.A.getApplication(t);
        return null != e && (0, h.x)(e)
            ? (await p.A.launchFrame({ applicationId: t }), 0)
            : (await (0, c.A)({
                    applicationId: t,
                    activityChannelId: r ?? void 0,
                    source: s,
                    locationObject: a,
                    analyticsLocations: o,
                }))
              ? 0
              : Promise.resolve();
    }
    if (A.A.isConnected(t)) return Promise.resolve();
    let l = null;
    if (null == n) {
        let e = T.A.getActiveLibraryApplication(t);
        n = null != e ? e.branchId : t;
    }
    if (S.A.isLaunchable(t, n)) {
        let e = S.A.getState(t, n),
            r = T.A.getActiveLaunchOptionId(t, n);
        if (null == e) throw Error("Missing dispatch game when launching");
        let i = T.A.getLibraryApplication(t, n);
        if (null == i) throw Error("Missing library application when launching");
        l = G(t).then((t) => v.A.launchDispatchApplication(e, t, g.default.locale, i.getBranchName(), r));
    } else {
        let e = d.A.getApplication(t);
        l = null != e ? v.A.launch(e) : v.A.launchGame(t);
    }
    let _ = Error("game not found");
    return null != l
        ? (u.h.dispatch({ type: "LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE", applicationId: t, branchId: n }),
          u.h.dispatch({ type: "GAME_LAUNCH_START", applicationId: t }),
          l
              .then((e) => {
                  u.h.dispatch({ type: "GAME_LAUNCH_SUCCESS", applicationId: t, pids: e });
              })
              .catch((e) => {
                  b.A.show(D.kqX.LAUNCH_GAME_FAILURE, M.intl.string(M.t.YZEBdj)),
                      u.h.dispatch({ type: "GAME_LAUNCH_FAIL", applicationId: t, error: _ });
              }))
        : (u.h.dispatch({ type: "GAME_LAUNCH_FAIL", applicationId: t, error: _ }), Promise.reject(_));
}
function V(e) {
    u.h.dispatch({ type: "RUNNING_GAME_SET_DEBUG_GAME", game: e });
}
let B = {
    addGame(e, t) {
        u.h.dispatch({ type: "RUNNING_GAME_ADD_OVERRIDE", pid: e }),
            y.default.track(D.HAw.RUNNING_GAME_OVERRIDE_ADDED, { game_name: t });
    },
    toggleOverlay(e, t, n) {
        let r = (0, E.Zh)(e),
            i = I.A.findGame(r);
        if (null != i) {
            let e = T.A.getActiveLibraryApplication(i.id);
            if (null != e) {
                let r = e.getFlags(),
                    i = a.Lt(r, D.hM6.OVERLAY_DISABLED);
                t && i !== t && (r = a.PQ(r, D.hM6.OVERLAY_DISABLED));
                let s = a.Lt(r, D.hM6.OVERLAY_V3_DISABLED);
                null != n && n !== s && (r = a.PQ(r, D.hM6.OVERLAY_V3_DISABLED)), O.V(e.id, e.branchId, r);
                return;
            }
        }
        u.h.dispatch({
            type: "RUNNING_GAME_TOGGLE_OVERLAY",
            game: r,
            newLegacyOverlayEnabledValue: t,
            newOverlayV3EnabledValue: n,
        });
    },
    toggleDetection(e) {
        u.h.dispatch({ type: "RUNNING_GAME_TOGGLE_DETECTION", game: e });
    },
    editName(e, t) {
        u.h.dispatch({ type: "RUNNING_GAME_EDIT_NAME", game: e, newName: t });
    },
    identifyGame: (e, t) =>
        (0, _.A)().then(
            (t) =>
                new Promise((n, r) => {
                    null == t
                        ? r(Error("Game utils module not loaded"))
                        : t.identifyGame(e, (t, i) => {
                              (P.log("Identified game: ", {
                                  status: t,
                                  name: i.name,
                                  iconHash: i.iconHash,
                                  sku: i.sku,
                                  executableName: i.executableName,
                                  distributor: i.distributor,
                                  publisher: i.publisher,
                              }),
                              0 !== t)
                                  ? r(Error(`Error ${t} when fetching info on ${e}`))
                                  : null == i.icon || "" === i.icon || null == i.name || "" === i.name
                                    ? r(Error(`Did not find data on ${e}`))
                                    : (u.h.dispatch({
                                          type: "GAME_ICON_UPDATE",
                                          gameName: i.name,
                                          icon: `data:image/png;base64,${i.icon}`,
                                      }),
                                      n(i));
                          });
                }),
        ),
    getDetectableGames() {
        if (!I.A.canFetchDetectableGames()) return;
        let e = I.A.detectableGamesEtag;
        u.h.wait(() => {
            u.h.dispatch({ type: "GAMES_DATABASE_FETCH" }),
                C.A.get({
                    url: w.s,
                    headers: { "If-None-Match": e },
                    retries: 1,
                    oldFormErrors: !0,
                    trackedActionData: {
                        event: i.NetworkActionNames.DETECTABLE_APPLICATIONS_FETCH,
                        properties: (t) => (0, l.e0)({ sent_etag: e, received_etag: t?.headers?.etag }),
                    },
                    rejectWithError: !1,
                }).then(
                    (e) => {
                        let {
                            body: t,
                            headers: { etag: n },
                        } = e;
                        u.h.dispatch({ type: "GAMES_DATABASE_UPDATE", games: t, etag: n });
                    },
                    (e) => {
                        let { status: t } = e;
                        304 === t
                            ? u.h.dispatch({ type: "GAMES_DATABASE_UPDATE", games: [], etag: I.A.detectableGamesEtag })
                            : u.h.dispatch({ type: "GAMES_DATABASE_FETCH_FAIL" });
                    },
                );
        });
    },
    getDetectableBlocklist() {
        if (!I.A.canFetchExecutableBlocklist()) return;
        let e = I.A.blocklistEtag;
        u.h.dispatch({ type: "GAMES_BLOCKLIST_FETCH" }),
            o.Bo.get({
                url: D.Rsh.GAMES_BLOCKLIST,
                headers: { "If-None-Match": e },
                oldFormErrors: !0,
                rejectWithError: !1,
            }).then(
                (e) => {
                    let {
                        body: t,
                        headers: { etag: n },
                    } = e;
                    u.h.dispatch({
                        type: "GAMES_BLOCKLIST_UPDATE",
                        executables: t.executables ?? [],
                        patterns: t.patterns ?? [],
                        etag: n,
                    });
                },
                (e) => {
                    let { status: t } = e;
                    304 === t
                        ? u.h.dispatch({
                              type: "GAMES_BLOCKLIST_UPDATE",
                              executables: [],
                              patterns: [],
                              etag: I.A.blocklistEtag,
                          })
                        : (P.error("Failed to fetch games blocklist"),
                          u.h.dispatch({ type: "GAMES_BLOCKLIST_FETCH_FAIL" }));
                },
            );
    },
    getDetectableNonGames() {
        if (!m.A.canFetch()) return;
        let e = m.A.etag;
        u.h.wait(() => {
            u.h.dispatch({ type: "NON_GAMES_DATABASE_FETCH" }),
                C.A.get({
                    url: w.u,
                    headers: { "If-None-Match": e },
                    retries: 1,
                    trackedActionData: {
                        event: i.NetworkActionNames.DETECTABLE_NON_GAMES_FETCH,
                        properties: (t) => (0, l.e0)({ sent_etag: e, received_etag: t?.headers?.etag }),
                    },
                    rejectWithError: !1,
                }).then(
                    (e) => {
                        let {
                            body: t,
                            headers: { etag: n },
                        } = e;
                        u.h.dispatch({ type: "NON_GAMES_DATABASE_UPDATE", nonGames: t, etag: n });
                    },
                    (e) => {
                        let { status: t } = e;
                        304 === t
                            ? u.h.dispatch({ type: "NON_GAMES_DATABASE_UPDATE", nonGames: [], etag: m.A.etag })
                            : u.h.dispatch({ type: "NON_GAMES_DATABASE_FETCH_FAIL" });
                    },
                );
        });
    },
    reportUnverifiedGame(e) {
        let { name: t, iconHash: n, publisher: r, distributor: i, sku: s, executableName: a } = e,
            l = (0, _.v)(a);
        P.log("Reporting unverified game: ", {
            name: t,
            executableName: a,
            iconHash: n,
            publisher: r,
            distributor: i,
            sku: s,
            cleanedExecutable: l,
        }),
            null != l &&
                o.Bo.post({
                    url: D.Rsh.UNVERIFIED_APPLICATIONS,
                    body: {
                        name: t,
                        os: (0, N.getPlatformName)(),
                        icon: n,
                        distributor_application: U(i, s),
                        executable: l,
                        publisher: r,
                        report_version: x,
                    },
                    retries: 1,
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }).then((e) => {
                    let {
                        body: { name: t, hash: n, missing_data: r },
                    } = e;
                    u.h.dispatch({ type: "UNVERIFIED_GAME_UPDATE", name: t, hash: n, missingData: r });
                });
    },
    uploadIcon(e, t, n) {
        o.Bo.post({
            url: D.Rsh.UNVERIFIED_APPLICATIONS_ICONS,
            body: { application_name: e, application_hash: t, icon: n },
            retries: 1,
            oldFormErrors: !0,
            rejectWithError: !0,
        });
    },
    deleteEntry(e) {
        u.h.dispatch({ type: "RUNNING_GAME_DELETE_ENTRY", game: e });
    },
    launch: F,
    async join(e) {
        let {
            userId: t,
            sessionId: n,
            applicationId: r,
            channelId: i,
            messageId: s,
            intent: a = L.W9.PLAY,
            embedded: o = !1,
            source: l,
            locationObject: c,
            analyticsLocations: d,
            remotePartyId: _,
        } = e;
        if (__OVERLAY__)
            return (
                u.h.dispatch({
                    type: "OVERLAY_JOIN_GAME",
                    userId: t,
                    sessionId: n,
                    applicationId: r,
                    channelId: i,
                    messageId: s,
                }),
                Promise.resolve(!0)
            );
        u.h.dispatch({ type: "ACTIVITY_JOIN_LOADING", applicationId: r, remotePartyId: _ });
        try {
            let e = (0, N.platformPrefersDeepLink)(),
                u = await R.A.getJoinSecret(t, n, r, i, s);
            return (
                null == _ &&
                    k({
                        applicationId: r,
                        secret: u,
                        channelId: i,
                        intent: a,
                        embedded: o,
                        source: l,
                        locationObject: c,
                        analyticsLocations: d,
                        preferDeepLink: e,
                    }),
                !0
            );
        } catch (e) {
            return u.h.dispatch({ type: "ACTIVITY_JOIN_FAILED", applicationId: r }), !1;
        }
    },
    joinWithSecret: k,
};
