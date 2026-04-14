"use strict";
n.d(t, { Ay: () => H, xt: () => B });
var r = n(488428),
    i = n(110259),
    s = n(179771),
    a = n(665260),
    o = n(562465),
    l = n(933681),
    u = n(73153),
    c = n(447031),
    d = n(627363),
    _ = n(587895),
    f = n(306044),
    p = n(626584),
    h = n(625180),
    m = n(207371),
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
    R = n(499785),
    O = n(308368),
    b = n(59636),
    D = n(912851),
    L = n(652215),
    w = n(360469),
    M = n(332988),
    x = n(985018);
let P = 3,
    k = new p.A("GamesActionCreators");
function U(e) {
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
        let e = _.A.getApplication(t);
        if (e?.deepLinkUri != null) {
            let r = e.deepLinkUri.replace(/\/+$/, ""),
                i = `${r}${L.O3O.GAME_INVITE_FRAGMENT}${n}`;
            try {
                if (i.startsWith("http")) {
                    let e = window.open(i, "_blank");
                    (null == e || e.closed || void 0 === e.closed) &&
                        (k.warn("Deep link popup was blocked by browser, trying location.href", { applicationId: t }),
                        (window.location.href = i));
                } else window.location.href = i;
                return Promise.resolve();
            } catch (e) {
                k.warn("Failed to open deep link, falling back to desktop launch", {
                    applicationId: t,
                    error: e.message,
                });
            }
        }
    }
    V({ applicationId: t, channelId: r, embedded: s, source: a, locationObject: o, analyticsLocations: l })
        .then(async (e) => {
            if (0 === e) return null;
            null == _.A.getApplication(t) && (await (0, d.TA)(t));
            let r = _.A.getApplication(t)?.parentId;
            return (
                null != r &&
                    N.A.waitParentConnected(r)
                        .then(() => N.A.waitParentSubscribed(r, L.ZE4.ACTIVITY_JOIN))
                        .then(() => {
                            u.h.dispatch({
                                type: "ACTIVITY_JOIN",
                                applicationId: t,
                                parentApplicationId: r,
                                secret: n,
                                intent: i,
                                embedded: s,
                            });
                        })
                        .catch(() => {}),
                N.A.waitConnected(t).then(() => N.A.waitSubscribed(t, L.ZE4.ACTIVITY_JOIN))
            );
        })
        .then(() => {
            u.h.dispatch({
                type: "ACTIVITY_JOIN",
                applicationId: t,
                parentApplicationId: null,
                secret: n,
                intent: i,
                embedded: s,
            });
        })
        .catch(() => u.h.dispatch({ type: "ACTIVITY_JOIN_FAILED", applicationId: t }));
}
function G(e, t) {
    return null == e || "" === e ? null : { distributor: e, sku: t };
}
function F(e) {
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
async function V(e) {
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
        let e = _.A.getApplication(t);
        return null != e && (0, m.x)(e)
            ? (await h.A.launchFrame({ applicationId: t }), 0)
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
        l = F(t).then((t) => N.A.launchDispatchApplication(e, t, A.default.locale, i.getBranchName(), r));
    } else {
        let e = _.A.getApplication(t);
        l = null != e ? N.A.launch(e) : N.A.launchGame(t);
    }
    let d = Error("game not found");
    return null != l
        ? (u.h.dispatch({ type: "LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE", applicationId: t, branchId: n }),
          u.h.dispatch({ type: "GAME_LAUNCH_START", applicationId: t }),
          l
              .then((e) => {
                  u.h.dispatch({ type: "GAME_LAUNCH_SUCCESS", applicationId: t, pids: e });
              })
              .catch((e) => {
                  D.A.show(L.kqX.LAUNCH_GAME_FAILURE, x.intl.string(x.t.YZEBdj)),
                      u.h.dispatch({ type: "GAME_LAUNCH_FAIL", applicationId: t, error: d });
              }))
        : (u.h.dispatch({ type: "GAME_LAUNCH_FAIL", applicationId: t, error: d }), Promise.reject(d));
}
function B(e) {
    u.h.dispatch({ type: "RUNNING_GAME_SET_DEBUG_GAME", game: e });
}
let H = {
    addGame(e, t) {
        u.h.dispatch({ type: "RUNNING_GAME_ADD_OVERRIDE", pid: e }),
            v.default.track(L.HAw.RUNNING_GAME_OVERRIDE_ADDED, { game_name: t });
    },
    toggleOverlay(e, t, n) {
        let r = (0, g.Zh)(e),
            i = T.A.findGame(r);
        if (null != i) {
            let e = S.A.getActiveLibraryApplication(i.id);
            if (null != e) {
                let r = e.getFlags(),
                    i = a.Lt(r, L.hM6.OVERLAY_DISABLED);
                t && i !== t && (r = a.PQ(r, L.hM6.OVERLAY_DISABLED));
                let s = a.Lt(r, L.hM6.OVERLAY_V3_DISABLED);
                null != n && n !== s && (r = a.PQ(r, L.hM6.OVERLAY_V3_DISABLED)), b.V(e.id, e.branchId, r);
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
        (0, f.A)().then(
            (t) =>
                new Promise((n, r) => {
                    null == t
                        ? r(Error("Game utils module not loaded"))
                        : t.identifyGame(e, (t, i) => {
                              (k.log("Identified game: ", {
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
        if (!T.A.canFetchDetectableGames()) return;
        let e = T.A.detectableGamesEtag;
        u.h.wait(() => {
            u.h.dispatch({ type: "GAMES_DATABASE_FETCH" }),
                R.A.get({
                    url: M.s,
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
                        : (k.error("Failed to fetch games blocklist"),
                          u.h.dispatch({ type: "GAMES_BLOCKLIST_FETCH_FAIL" }));
                },
            );
    },
    getDetectableNonGames() {
        if (!E.A.canFetch()) return;
        let e = E.A.etag;
        u.h.wait(() => {
            u.h.dispatch({ type: "NON_GAMES_DATABASE_FETCH" }),
                R.A.get({
                    url: M.u,
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
                            ? u.h.dispatch({ type: "NON_GAMES_DATABASE_UPDATE", nonGames: [], etag: E.A.etag })
                            : u.h.dispatch({ type: "NON_GAMES_DATABASE_FETCH_FAIL" });
                    },
                );
        });
    },
    reportUnverifiedGame(e) {
        let { name: t, iconHash: n, publisher: r, distributor: i, sku: s, executableName: a } = e,
            l = (0, f.v)(a);
        k.log("Reporting unverified game: ", {
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
                        distributor_application: G(i, s),
                        executable: l,
                        publisher: r,
                        report_version: P,
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
    launch: V,
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
                u = await O.A.getJoinSecret(t, n, r, i, s);
            return (
                null == _ &&
                    U({
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
    joinWithSecret: U,
};
