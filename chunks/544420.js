"use strict";
n.d(t, { A: () => V });
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
    m = n(489803),
    E = n(953384),
    g = n(15285),
    A = n(773669),
    I = n(134861),
    T = n(760751),
    S = n(189081),
    y = n(194871),
    v = n(954571),
    N = n(25171),
    C = n(723702),
    b = n(499785),
    R = n(308368),
    O = n(59636),
    D = n(912851),
    L = n(652215),
    w = n(360469),
    x = n(985018);
let M = 3,
    P = new f.A("GamesActionCreators");
function k(e) {
    let {
        applicationId: t,
        secret: n,
        channelId: r,
        intent: i = w.W9.PLAY,
        embedded: s = !1,
        source: a,
        locationObject: o,
        analyticsLocations: l,
        preferDeepLink: c = !1,
    } = e;
    if (c) {
        let e = d.A.getApplication(t);
        if (e?.deepLinkUri != null) {
            let r = `${e.deepLinkUri}${L.O3O.GAME_INVITE_FRAGMENT}${n}`;
            try {
                if (r.startsWith("http")) {
                    let e = window.open(r, "_blank");
                    (null == e || e.closed || void 0 === e.closed) &&
                        (P.warn("Deep link popup was blocked by browser, trying location.href", { applicationId: t }),
                        (window.location.href = r));
                } else window.location.href = r;
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
                : N.A.waitConnected(t).then(() => Promise.race([N.A.waitSubscribed(t, L.ZE4.ACTIVITY_JOIN)])),
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
        url: L.Rsh.OAUTH2_AUTHORIZE,
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
    if (I.A.isConnected(t)) return Promise.resolve();
    let l = null;
    if (null == n) {
        let e = S.A.getActiveLibraryApplication(t);
        n = null != e ? e.branchId : t;
    }
    if (y.A.isLaunchable(t, n)) {
        let e = y.A.getState(t, n),
            r = S.A.getActiveLaunchOptionId(t, n);
        if (null == e) throw Error("Missing dispatch game when launching");
        let i = S.A.getLibraryApplication(t, n);
        if (null == i) throw Error("Missing library application when launching");
        l = G(t).then((t) => N.A.launchDispatchApplication(e, t, A.default.locale, i.getBranchName(), r));
    } else {
        let e = d.A.getApplication(t);
        l = null != e ? N.A.launch(e) : N.A.launchGame(t);
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
                  D.A.show(L.kqX.LAUNCH_GAME_FAILURE, x.intl.string(x.t.YZEBdj)),
                      u.h.dispatch({ type: "GAME_LAUNCH_FAIL", applicationId: t, error: _ });
              }))
        : (u.h.dispatch({ type: "GAME_LAUNCH_FAIL", applicationId: t, error: _ }), Promise.reject(_));
}
let V = {
    addGame(e, t) {
        u.h.dispatch({ type: "RUNNING_GAME_ADD_OVERRIDE", pid: e }),
            v.default.track(L.HAw.RUNNING_GAME_OVERRIDE_ADDED, { game_name: t });
    },
    toggleOverlay(e, t, n) {
        let r = (0, g.Zh)(e),
            i = T.A.getGameByName_DEPRECATED_DO_NOT_USE(r.name);
        if (null != i) {
            let e = S.A.getActiveLibraryApplication(i.id);
            if (null != e) {
                let r = e.getFlags(),
                    i = a.Lt(r, L.hM6.OVERLAY_DISABLED);
                t && i !== t && (r = a.PQ(r, L.hM6.OVERLAY_DISABLED));
                let s = a.Lt(r, L.hM6.OVERLAY_V3_DISABLED);
                null != n && n !== s && (r = a.PQ(r, L.hM6.OVERLAY_V3_DISABLED)), O.V(e.id, e.branchId, r);
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
    getDetectableGamesSupplemental(e) {
        let { forceFetch: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { forceFetch: !1 };
        (0, m.v)(e, { forceFetch: t });
    },
    getDetectableGames() {
        if (!T.A.canFetchDetectableGames()) return;
        let e = T.A.detectableGamesEtag;
        u.h.wait(() => {
            u.h.dispatch({ type: "GAMES_DATABASE_FETCH" }),
                b.A.get({
                    url: L.Rsh.GAMES_DETECTABLE,
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
                            ? u.h.dispatch({ type: "GAMES_DATABASE_UPDATE", games: [], etag: T.A.detectableGamesEtag })
                            : u.h.dispatch({ type: "GAMES_DATABASE_FETCH_FAIL" });
                    },
                );
        });
    },
    getDetectableBlocklist() {
        if (!T.A.canFetchExecutableBlocklist()) return;
        let e = T.A.blocklistEtag;
        u.h.dispatch({ type: "GAMES_BLOCKLIST_FETCH" }),
            o.Bo.get({
                url: L.Rsh.GAMES_BLOCKLIST,
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
                              etag: T.A.blocklistEtag,
                          })
                        : (P.error("Failed to fetch games blocklist"),
                          u.h.dispatch({ type: "GAMES_BLOCKLIST_FETCH_FAIL" }));
                },
            );
    },
    getDetectableNonGames() {
        if (!E.A.canFetch()) return;
        let e = E.A.etag;
        u.h.wait(() => {
            u.h.dispatch({ type: "NON_GAMES_DATABASE_FETCH" }),
                o.Bo.get({
                    url: L.Rsh.NON_GAMES_DETECTABLE,
                    headers: { "If-None-Match": e },
                    retries: 1,
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
                            ? u.h.dispatch({ type: "NON_GAMES_DATABASE_UPDATE", nonGames: [], etag: E.A.etag })
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
                    url: L.Rsh.UNVERIFIED_APPLICATIONS,
                    body: {
                        name: t,
                        os: (0, C.getPlatformName)(),
                        icon: n,
                        distributor_application: U(i, s),
                        executable: l,
                        publisher: r,
                        report_version: M,
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
            url: L.Rsh.UNVERIFIED_APPLICATIONS_ICONS,
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
            intent: a = w.W9.PLAY,
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
            let e = (0, C.platformPrefersDeepLink)(),
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
