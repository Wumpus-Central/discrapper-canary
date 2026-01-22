n.d(t, {
    A: () => V,
}),
    n(896048),
    n(747238),
    n(65821);
var r = n(488428),
    i = n(110259),
    a = n(179771),
    s = n(665260),
    o = n(562465),
    l = n(933681),
    c = n(73153),
    u = n(447031),
    d = n(587895),
    f = n(306044),
    p = n(626584),
    _ = n(625180),
    h = n(207371),
    m = n(489803),
    g = n(953384),
    E = n(15285),
    b = n(773669),
    y = n(134861),
    O = n(760751),
    A = n(189081),
    v = n(194871),
    S = n(954571),
    I = n(25171),
    T = n(723702),
    C = n(499785),
    N = n(308368),
    R = n(59636),
    w = n(912851),
    P = n(652215),
    D = n(360469),
    x = n(985018);
let L = 3,
    j = new p.A("GamesActionCreators");

function M(e) {
    let {
        applicationId: t,
        secret: n,
        channelId: r,
        intent: i = D.W9.PLAY,
        embedded: a = !1,
        source: s,
        locationObject: o,
        analyticsLocations: l,
        preferDeepLink: u = !1,
    } = e;
    if (u) {
        let e = d.A.getApplication(t);
        if ((null == e ? void 0 : e.deepLinkUri) != null) {
            let r = "".concat(e.deepLinkUri).concat(P.O3O.GAME_INVITE_FRAGMENT).concat(n);
            try {
                if (r.startsWith("http")) {
                    let e = window.open(r, "_blank");
                    (null == e || e.closed || void 0 === e.closed) &&
                        (j.warn("Deep link popup was blocked by browser, trying location.href", {
                            applicationId: t,
                        }),
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
        source: s,
        locationObject: o,
        analyticsLocations: l,
    })
        .then((e) =>
            0 === e
                ? null
                : I.A.waitConnected(t).then(() => Promise.race([I.A.waitSubscribed(t, P.ZE4.ACTIVITY_JOIN)])),
        )
        .then(() => {
            c.h.dispatch({
                type: "ACTIVITY_JOIN",
                applicationId: t,
                secret: n,
                intent: i,
                embedded: a,
            });
        })
        .catch(() =>
            c.h.dispatch({
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
    return o.Bo.post({
        url: P.Rsh.OAUTH2_AUTHORIZE,
        query: {
            client_id: e,
            response_type: "token",
            scope: [a.F.IDENTIFY].join(" "),
        },
        retries: 3,
        body: {
            authorize: !0,
        },
        oldFormErrors: !0,
        rejectWithError: !1,
    }).then(
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
        locationObject: s = {},
        analyticsLocations: o = [],
    } = e;
    if (i) {
        let e = d.A.getApplication(t);
        return null != e && (0, h.x)(e)
            ? (await _.A.launchFrame({
                  applicationId: t,
              }),
              0)
            : (await (0, u.A)({
                    applicationId: t,
                    activityChannelId: null != r ? r : void 0,
                    source: a,
                    locationObject: s,
                    analyticsLocations: o,
                }))
              ? 0
              : Promise.resolve();
    }
    if (y.A.isConnected(t)) return Promise.resolve();
    let l = null;
    if (null == n) {
        let e = A.A.getActiveLibraryApplication(t);
        n = null != e ? e.branchId : t;
    }
    if (v.A.isLaunchable(t, n)) {
        let e = v.A.getState(t, n),
            r = A.A.getActiveLaunchOptionId(t, n);
        if (null == e) throw Error("Missing dispatch game when launching");
        let i = A.A.getLibraryApplication(t, n);
        if (null == i) throw Error("Missing library application when launching");
        l = U(t).then((t) => I.A.launchDispatchApplication(e, t, b.default.locale, i.getBranchName(), r));
    } else {
        let e = d.A.getApplication(t);
        l = null != e ? I.A.launch(e) : I.A.launchGame(t);
    }
    let f = Error("game not found");
    return null != l
        ? (c.h.dispatch({
              type: "LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE",
              applicationId: t,
              branchId: n,
          }),
          c.h.dispatch({
              type: "GAME_LAUNCH_START",
              applicationId: t,
          }),
          l
              .then((e) => {
                  c.h.dispatch({
                      type: "GAME_LAUNCH_SUCCESS",
                      applicationId: t,
                      pids: e,
                  });
              })
              .catch((e) => {
                  w.A.show(P.kqX.LAUNCH_GAME_FAILURE, x.intl.string(x.t.YZEBdj)),
                      c.h.dispatch({
                          type: "GAME_LAUNCH_FAIL",
                          applicationId: t,
                          error: f,
                      });
              }))
        : (c.h.dispatch({
              type: "GAME_LAUNCH_FAIL",
              applicationId: t,
              error: f,
          }),
          Promise.reject(f));
}
let V = {
    addGame(e, t) {
        c.h.dispatch({
            type: "RUNNING_GAME_ADD_OVERRIDE",
            pid: e,
        }),
            S.default.track(P.HAw.RUNNING_GAME_OVERRIDE_ADDED, {
                game_name: t,
            });
    },
    toggleOverlay(e, t, n) {
        let r = (0, E.Zh)(e),
            i = O.A.getGameByName(r.name);
        if (null != i) {
            let e = A.A.getActiveLibraryApplication(i.id);
            if (null != e) {
                let r = e.getFlags(),
                    i = s.Lt(r, P.hM6.OVERLAY_DISABLED);
                t && i !== t && (r = s.PQ(r, P.hM6.OVERLAY_DISABLED));
                let a = s.Lt(r, P.hM6.OVERLAY_V3_DISABLED);
                null != n && n !== a && (r = s.PQ(r, P.hM6.OVERLAY_V3_DISABLED)), R.V(e.id, e.branchId, r);
                return;
            }
        }
        c.h.dispatch({
            type: "RUNNING_GAME_TOGGLE_OVERLAY",
            game: r,
            newLegacyOverlayEnabledValue: t,
            newOverlayV3EnabledValue: n,
        });
    },
    toggleDetection(e) {
        c.h.dispatch({
            type: "RUNNING_GAME_TOGGLE_DETECTION",
            game: e,
        });
    },
    editName(e, t) {
        c.h.dispatch({
            type: "RUNNING_GAME_EDIT_NAME",
            game: e,
            newName: t,
        });
    },
    identifyGame: (e, t) =>
        (0, f.A)().then(
            (t) =>
                new Promise((n, r) => {
                    null == t
                        ? r(Error("Game utils module not loaded"))
                        : t.identifyGame(e, (t, i) => {
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
                                  ? r(Error("Error ".concat(t, " when fetching info on ").concat(e)))
                                  : null == i.icon || "" === i.icon || null == i.name || "" === i.name
                                    ? r(Error("Did not find data on ".concat(e)))
                                    : (c.h.dispatch({
                                          type: "GAME_ICON_UPDATE",
                                          gameName: i.name,
                                          icon: "data:image/png;base64,".concat(i.icon),
                                      }),
                                      n(i));
                          });
                }),
        ),
    getDetectableGamesSupplemental(e) {
        let { forceFetch: t } =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {
                      forceFetch: !1,
                  };
        (0, m.v)(e, {
            forceFetch: t,
        });
    },
    getDetectableGames() {
        if (!O.A.canFetchDetectableGames()) return;
        let e = O.A.detectableGamesEtag;
        c.h.wait(() => {
            c.h.dispatch({
                type: "GAMES_DATABASE_FETCH",
            }),
                C.A.get({
                    url: P.Rsh.GAMES_DETECTABLE,
                    headers: {
                        "If-None-Match": e,
                    },
                    retries: 1,
                    oldFormErrors: !0,
                    trackedActionData: {
                        event: i.NetworkActionNames.DETECTABLE_APPLICATIONS_FETCH,
                        properties: (t) => {
                            var n;
                            return (0, l.e0)({
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
                        c.h.dispatch({
                            type: "GAMES_DATABASE_UPDATE",
                            games: t,
                            etag: n,
                        });
                    },
                    (e) => {
                        let { status: t } = e;
                        304 === t
                            ? c.h.dispatch({
                                  type: "GAMES_DATABASE_UPDATE",
                                  games: [],
                                  etag: O.A.detectableGamesEtag,
                              })
                            : c.h.dispatch({
                                  type: "GAMES_DATABASE_FETCH_FAIL",
                              });
                    },
                );
        });
    },
    getDetectableBlocklist() {
        if (!O.A.canFetchExecutableBlocklist()) return;
        let e = O.A.blocklistEtag;
        c.h.dispatch({
            type: "GAMES_BLOCKLIST_FETCH",
        }),
            o.Bo.get({
                url: P.Rsh.GAMES_BLOCKLIST,
                headers: {
                    "If-None-Match": e,
                },
                oldFormErrors: !0,
                rejectWithError: !1,
            }).then(
                (e) => {
                    var t, n;
                    let {
                        body: r,
                        headers: { etag: i },
                    } = e;
                    c.h.dispatch({
                        type: "GAMES_BLOCKLIST_UPDATE",
                        executables: null != (t = r.executables) ? t : [],
                        patterns: null != (n = r.patterns) ? n : [],
                        etag: i,
                    });
                },
                (e) => {
                    let { status: t } = e;
                    304 === t
                        ? c.h.dispatch({
                              type: "GAMES_BLOCKLIST_UPDATE",
                              executables: [],
                              patterns: [],
                              etag: O.A.blocklistEtag,
                          })
                        : (j.error("Failed to fetch games blocklist"),
                          c.h.dispatch({
                              type: "GAMES_BLOCKLIST_FETCH_FAIL",
                          }));
                },
            );
    },
    getDetectableNonGames() {
        if (!g.A.canFetch()) return;
        let e = g.A.etag;
        c.h.wait(() => {
            c.h.dispatch({
                type: "NON_GAMES_DATABASE_FETCH",
            }),
                o.Bo.get({
                    url: P.Rsh.NON_GAMES_DETECTABLE,
                    headers: {
                        "If-None-Match": e,
                    },
                    retries: 1,
                    rejectWithError: !1,
                }).then(
                    (e) => {
                        let {
                            body: t,
                            headers: { etag: n },
                        } = e;
                        c.h.dispatch({
                            type: "NON_GAMES_DATABASE_UPDATE",
                            nonGames: t,
                            etag: n,
                        });
                    },
                    (e) => {
                        let { status: t } = e;
                        304 === t
                            ? c.h.dispatch({
                                  type: "NON_GAMES_DATABASE_UPDATE",
                                  nonGames: [],
                                  etag: g.A.etag,
                              })
                            : c.h.dispatch({
                                  type: "NON_GAMES_DATABASE_FETCH_FAIL",
                              });
                    },
                );
        });
    },
    reportUnverifiedGame(e) {
        let { name: t, iconHash: n, publisher: r, distributor: i, sku: a, executableName: s } = e,
            l = (0, f.v)(s);
        j.log("Reporting unverified game: ", {
            name: t,
            executableName: s,
            iconHash: n,
            publisher: r,
            distributor: i,
            sku: a,
            cleanedExecutable: l,
        }),
            null != l &&
                o.Bo.post({
                    url: P.Rsh.UNVERIFIED_APPLICATIONS,
                    body: {
                        name: t,
                        os: (0, T.getPlatformName)(),
                        icon: n,
                        distributor_application: k(i, a),
                        executable: l,
                        publisher: r,
                        report_version: L,
                    },
                    retries: 1,
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }).then((e) => {
                    let {
                        body: { name: t, hash: n, missing_data: r },
                    } = e;
                    c.h.dispatch({
                        type: "UNVERIFIED_GAME_UPDATE",
                        name: t,
                        hash: n,
                        missingData: r,
                    });
                });
    },
    uploadIcon(e, t, n) {
        o.Bo.post({
            url: P.Rsh.UNVERIFIED_APPLICATIONS_ICONS,
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
        c.h.dispatch({
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
            intent: s = D.W9.PLAY,
            embedded: o = !1,
            source: l,
            locationObject: u,
            analyticsLocations: d,
            remotePartyId: f,
        } = e;
        if (__OVERLAY__)
            return (
                c.h.dispatch({
                    type: "OVERLAY_JOIN_GAME",
                    userId: t,
                    sessionId: n,
                    applicationId: r,
                    channelId: i,
                    messageId: a,
                }),
                Promise.resolve(!0)
            );
        c.h.dispatch({
            type: "ACTIVITY_JOIN_LOADING",
            applicationId: r,
            remotePartyId: f,
        });
        try {
            let e = (0, T.platformPrefersDeepLink)(),
                c = await N.A.getJoinSecret(t, n, r, i, a);
            return (
                null == f &&
                    M({
                        applicationId: r,
                        secret: c,
                        channelId: i,
                        intent: s,
                        embedded: o,
                        source: l,
                        locationObject: u,
                        analyticsLocations: d,
                        preferDeepLink: e,
                    }),
                !0
            );
        } catch (e) {
            return (
                c.h.dispatch({
                    type: "ACTIVITY_JOIN_FAILED",
                    applicationId: r,
                }),
                !1
            );
        }
    },
    joinWithSecret: M,
};
