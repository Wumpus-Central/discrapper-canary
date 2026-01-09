n.d(t, { Z: () => Z }), n(388685), n(35282), n(415506);
var r = n(664751),
    i = n(990547),
    a = n(243814),
    o = n(95015),
    s = n(544891),
    l = n(283693),
    c = n(570140),
    u = n(638880),
    d = n(812206),
    f = n(439849),
    p = n(710845),
    _ = n(48131),
    m = n(813370),
    h = n(346951),
    g = n(569675),
    E = n(594190),
    b = n(706454),
    y = n(757266),
    O = n(77498),
    v = n(283595),
    S = n(417363),
    I = n(626135),
    T = n(877481),
    C = n(358085),
    A = n(573261),
    N = n(278323),
    P = n(58642),
    R = n(254854),
    w = n(981631),
    D = n(701488),
    x = n(388032);
let L = 3,
    j = new p.Z("GamesActionCreators");
function M(e) {
    let {
        applicationId: t,
        secret: n,
        channelId: r,
        intent: i = D.Ws.PLAY,
        embedded: a = !1,
        source: o,
        locationObject: s,
        analyticsLocations: l,
        preferDeepLink: u = !1,
    } = e;
    if (u) {
        let e = d.Z.getApplication(t);
        if ((null == e ? void 0 : e.deepLinkUri) != null) {
            let r = "".concat(e.deepLinkUri).concat(w.UWR.GAME_INVITE_FRAGMENT).concat(n);
            try {
                if (r.startsWith("http")) {
                    let e = window.open(r, "_blank");
                    (null == e || e.closed || void 0 === e.closed) &&
                        (j.warn("Deep link popup was blocked by browser, trying location.href", { applicationId: t }),
                        (window.location.href = r));
                } else window.location.href = r;
                return Promise.resolve();
            } catch (e) {
                j.warn("Failed to open deep link, falling back to desktop launch", {
                    applicationId: t,
                    error: e.message,
                });
            }
        }
    }
    G({
        applicationId: t,
        channelId: r,
        embedded: a,
        source: o,
        locationObject: s,
        analyticsLocations: l,
    })
        .then((e) =>
            0 === e
                ? null
                : T.Z.waitConnected(t).then(() => Promise.race([T.Z.waitSubscribed(t, w.zMe.ACTIVITY_JOIN)])),
        )
        .then(() => {
            c.Z.dispatch({
                type: "ACTIVITY_JOIN",
                applicationId: t,
                secret: n,
                intent: i,
                embedded: a,
            });
        })
        .catch(() =>
            c.Z.dispatch({
                type: "ACTIVITY_JOIN_FAILED",
                applicationId: t,
            }),
        );
}
function k(e, t) {
    return null == e || "" === e
        ? null
        : {
              distributor: e,
              sku: t,
          };
}
function U(e) {
    return s.tn
        .post({
            url: w.ANM.OAUTH2_AUTHORIZE,
            query: {
                client_id: e,
                response_type: "token",
                scope: [a.x.IDENTIFY].join(" "),
            },
            retries: 3,
            body: { authorize: !0 },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
        .then(
            (e) => {
                let t = e.body.location.split(/#|\?/),
                    n = r.parse(t[t.length - 1]);
                if ("invalid_request" === n.error) return null;
                if (null != n.error) {
                    var i;
                    throw Error(
                        "OAuth2 Error: "
                            .concat(n.error, ": ")
                            .concat(null != (i = n.error_description) ? i : "unknown error"),
                    );
                }
                return n.access_token;
            },
            (e) => {
                if (404 === e.status) return null;
                throw e;
            },
        );
}
async function G(e) {
    let {
        applicationId: t,
        branchId: n,
        channelId: r,
        embedded: i = !1,
        source: a,
        locationObject: o = {},
        analyticsLocations: s = [],
    } = e;
    if (i) {
        let e = d.Z.getApplication(t);
        return null != e && (0, m.g)(e)
            ? (_.Z.launchFrame({ applicationId: t }), 0)
            : (await (0, u.Z)({
                    applicationId: t,
                    activityChannelId: null != r ? r : void 0,
                    source: a,
                    locationObject: o,
                    analyticsLocations: s,
                }))
              ? 0
              : Promise.resolve();
    }
    if (y.Z.isConnected(t)) return Promise.resolve();
    let l = null;
    if (null == n) {
        let e = v.Z.getActiveLibraryApplication(t);
        n = null != e ? e.branchId : t;
    }
    if (S.Z.isLaunchable(t, n)) {
        let e = S.Z.getState(t, n),
            r = v.Z.getActiveLaunchOptionId(t, n);
        if (null == e) throw Error("Missing dispatch game when launching");
        let i = v.Z.getLibraryApplication(t, n);
        if (null == i) throw Error("Missing library application when launching");
        l = U(t).then((t) => T.Z.launchDispatchApplication(e, t, b.default.locale, i.getBranchName(), r));
    } else {
        let e = d.Z.getApplication(t);
        l = null != e ? T.Z.launch(e) : T.Z.launchGame(t);
    }
    let f = Error("game not found");
    return null != l
        ? (c.Z.dispatch({
              type: "LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE",
              applicationId: t,
              branchId: n,
          }),
          c.Z.dispatch({
              type: "GAME_LAUNCH_START",
              applicationId: t,
          }),
          l
              .then((e) => {
                  c.Z.dispatch({
                      type: "GAME_LAUNCH_SUCCESS",
                      applicationId: t,
                      pids: e,
                  });
              })
              .catch((e) => {
                  R.Z.show(w.kVF.LAUNCH_GAME_FAILURE, x.intl.string(x.t.YZEBdj)),
                      c.Z.dispatch({
                          type: "GAME_LAUNCH_FAIL",
                          applicationId: t,
                          error: f,
                      });
              }))
        : (c.Z.dispatch({
              type: "GAME_LAUNCH_FAIL",
              applicationId: t,
              error: f,
          }),
          Promise.reject(f));
}
let Z = {
    addGame(e, t) {
        c.Z.dispatch({
            type: "RUNNING_GAME_ADD_OVERRIDE",
            pid: e,
        }),
            I.default.track(w.rMx.RUNNING_GAME_OVERRIDE_ADDED, { game_name: t });
    },
    toggleOverlay(e, t, n) {
        let r = (0, E.ow)(e),
            i = O.Z.getGameByName(r.name);
        if (null != i) {
            let e = v.Z.getActiveLibraryApplication(i.id);
            if (null != e) {
                let r = e.getFlags(),
                    i = o.yE(r, w.eHb.OVERLAY_DISABLED);
                t && i !== t && (r = o.x9(r, w.eHb.OVERLAY_DISABLED));
                let a = o.yE(r, w.eHb.OVERLAY_V3_DISABLED);
                null != n && n !== a && (r = o.x9(r, w.eHb.OVERLAY_V3_DISABLED)), P.h(e.id, e.branchId, r);
                return;
            }
        }
        c.Z.dispatch({
            type: "RUNNING_GAME_TOGGLE_OVERLAY",
            game: r,
            newLegacyOverlayEnabledValue: t,
            newOverlayV3EnabledValue: n,
        });
    },
    toggleDetection(e) {
        c.Z.dispatch({
            type: "RUNNING_GAME_TOGGLE_DETECTION",
            game: e,
        });
    },
    editName(e, t) {
        c.Z.dispatch({
            type: "RUNNING_GAME_EDIT_NAME",
            game: e,
            newName: t,
        });
    },
    identifyGame: (e, t) =>
        (0, f.Z)().then(
            (t) =>
                new Promise((n, r) => {
                    if (null == t) return void r(Error("Game utils module not loaded"));
                    t.identifyGame(e, (t, i) =>
                        (j.log("Identified game: ", {
                            status: t,
                            name: i.name,
                            iconHash: i.iconHash,
                            sku: i.sku,
                            executableName: i.executableName,
                            distributor: i.distributor,
                            publisher: i.publisher,
                        }),
                        0 !== t)
                            ? void r(Error("Error ".concat(t, " when fetching info on ").concat(e)))
                            : null == i.icon || "" === i.icon || null == i.name || "" === i.name
                              ? void r(Error("Did not find data on ".concat(e)))
                              : void (c.Z.dispatch({
                                    type: "GAME_ICON_UPDATE",
                                    gameName: i.name,
                                    icon: "data:image/png;base64,".concat(i.icon),
                                }),
                                n(i)),
                    );
                }),
        ),
    getDetectableGamesSupplemental(e) {
        let { forceFetch: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { forceFetch: !1 };
        (0, h.R)(e, { forceFetch: t });
    },
    getDetectableGames() {
        if (!O.Z.canFetchDetectableGames()) return;
        let e = O.Z.detectableGamesEtag;
        c.Z.wait(() => {
            c.Z.dispatch({ type: "GAMES_DATABASE_FETCH" }),
                A.Z.get({
                    url: w.ANM.GAMES_DETECTABLE,
                    headers: { "If-None-Match": e },
                    retries: 1,
                    oldFormErrors: !0,
                    trackedActionData: {
                        event: i.NetworkActionNames.DETECTABLE_APPLICATIONS_FETCH,
                        properties: (t) => {
                            var n;
                            return (0, l.iG)({
                                sent_etag: e,
                                received_etag: null == t || null == (n = t.headers) ? void 0 : n.etag,
                            });
                        },
                    },
                    rejectWithError: !1,
                }).then(
                    (e) => {
                        let {
                            body: t,
                            headers: { etag: n },
                        } = e;
                        c.Z.dispatch({
                            type: "GAMES_DATABASE_UPDATE",
                            games: t,
                            etag: n,
                        });
                    },
                    (e) => {
                        let { status: t } = e;
                        304 === t
                            ? c.Z.dispatch({
                                  type: "GAMES_DATABASE_UPDATE",
                                  games: [],
                                  etag: O.Z.detectableGamesEtag,
                              })
                            : c.Z.dispatch({ type: "GAMES_DATABASE_FETCH_FAIL" });
                    },
                );
        });
    },
    getDetectableBlocklist() {
        O.Z.canFetchExecutableBlocklist() &&
            (c.Z.dispatch({ type: "GAMES_BLOCKLIST_FETCH" }),
            s.tn
                .get({
                    url: w.ANM.GAMES_BLOCKLIST,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                })
                .then(
                    (e) => {
                        var t, n;
                        let { body: r } = e;
                        c.Z.dispatch({
                            type: "GAMES_BLOCKLIST_UPDATE",
                            executables: null != (t = r.executables) ? t : [],
                            patterns: null != (n = r.patterns) ? n : [],
                        });
                    },
                    (e) => {
                        j.error("Failed to fetch games blocklist", e),
                            c.Z.dispatch({ type: "GAMES_BLOCKLIST_FETCH_FAIL" });
                    },
                ));
    },
    getDetectableNonGames() {
        if (!g.Z.canFetch()) return;
        let e = g.Z.etag;
        c.Z.wait(() => {
            c.Z.dispatch({ type: "NON_GAMES_DATABASE_FETCH" }),
                s.tn
                    .get({
                        url: w.ANM.NON_GAMES_DETECTABLE,
                        headers: { "If-None-Match": e },
                        retries: 1,
                        rejectWithError: !1,
                    })
                    .then(
                        (e) => {
                            let {
                                body: t,
                                headers: { etag: n },
                            } = e;
                            c.Z.dispatch({
                                type: "NON_GAMES_DATABASE_UPDATE",
                                nonGames: t,
                                etag: n,
                            });
                        },
                        (e) => {
                            let { status: t } = e;
                            304 === t
                                ? c.Z.dispatch({
                                      type: "NON_GAMES_DATABASE_UPDATE",
                                      nonGames: [],
                                      etag: g.Z.etag,
                                  })
                                : c.Z.dispatch({ type: "NON_GAMES_DATABASE_FETCH_FAIL" });
                        },
                    );
        });
    },
    reportUnverifiedGame(e) {
        let { name: t, iconHash: n, publisher: r, distributor: i, sku: a, executableName: o } = e,
            l = (0, f.F)(o);
        j.log("Reporting unverified game: ", {
            name: t,
            executableName: o,
            iconHash: n,
            publisher: r,
            distributor: i,
            sku: a,
            cleanedExecutable: l,
        }),
            null != l &&
                s.tn
                    .post({
                        url: w.ANM.UNVERIFIED_APPLICATIONS,
                        body: {
                            name: t,
                            os: (0, C.getPlatformName)(),
                            icon: n,
                            distributor_application: k(i, a),
                            executable: l,
                            publisher: r,
                            report_version: L,
                        },
                        retries: 1,
                        oldFormErrors: !0,
                        rejectWithError: !0,
                    })
                    .then((e) => {
                        let {
                            body: { name: t, hash: n, missing_data: r },
                        } = e;
                        c.Z.dispatch({
                            type: "UNVERIFIED_GAME_UPDATE",
                            name: t,
                            hash: n,
                            missingData: r,
                        });
                    });
    },
    uploadIcon(e, t, n) {
        s.tn.post({
            url: w.ANM.UNVERIFIED_APPLICATIONS_ICONS,
            body: {
                application_name: e,
                application_hash: t,
                icon: n,
            },
            retries: 1,
            oldFormErrors: !0,
            rejectWithError: !0,
        });
    },
    deleteEntry(e) {
        c.Z.dispatch({
            type: "RUNNING_GAME_DELETE_ENTRY",
            game: e,
        });
    },
    launch: G,
    async join(e) {
        let {
            userId: t,
            sessionId: n,
            applicationId: r,
            channelId: i,
            messageId: a,
            intent: o = D.Ws.PLAY,
            embedded: s = !1,
            source: l,
            locationObject: u,
            analyticsLocations: d,
            remotePartyId: f,
        } = e;
        if (__OVERLAY__)
            return (
                c.Z.dispatch({
                    type: "OVERLAY_JOIN_GAME",
                    userId: t,
                    sessionId: n,
                    applicationId: r,
                    channelId: i,
                    messageId: a,
                }),
                Promise.resolve(!0)
            );
        c.Z.dispatch({
            type: "ACTIVITY_JOIN_LOADING",
            applicationId: r,
            remotePartyId: f,
        });
        try {
            let e = (0, C.platformPrefersDeepLink)(),
                c = await N.Z.getJoinSecret(t, n, r, i, a);
            return (
                null == f &&
                    M({
                        applicationId: r,
                        secret: c,
                        channelId: i,
                        intent: o,
                        embedded: s,
                        source: l,
                        locationObject: u,
                        analyticsLocations: d,
                        preferDeepLink: e,
                    }),
                !0
            );
        } catch (e) {
            return (
                c.Z.dispatch({
                    type: "ACTIVITY_JOIN_FAILED",
                    applicationId: r,
                }),
                !1
            );
        }
    },
    joinWithSecret: M,
};
