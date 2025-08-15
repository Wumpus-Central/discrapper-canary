n.d(t, { Z: () => V }), n(388685), n(35282), n(415506);
var r = n(664751),
    i = n(990547),
    a = n(243814),
    o = n(544891),
    s = n(283693),
    l = n(570140),
    c = n(638880),
    u = n(812206),
    d = n(439849),
    f = n(710845),
    _ = n(510839),
    p = n(813370),
    h = n(669764),
    m = n(75487),
    g = n(594190),
    E = n(706454),
    b = n(757266),
    y = n(77498),
    O = n(283595),
    v = n(417363),
    I = n(626135),
    T = n(630388),
    S = n(877481),
    A = n(358085),
    N = n(573261),
    C = n(278323),
    R = n(58642),
    P = n(254854),
    w = n(981631),
    D = n(701488),
    L = n(388032);
let x = 3,
    M = 20,
    k = new f.Z("GamesActionCreators");
function j(e) {
    let {
        applicationId: t,
        secret: n,
        channelId: r,
        intent: i = D.Ws.PLAY,
        embedded: a = !1,
        source: o,
        locationObject: s,
        analyticsLocations: c,
    } = e;
    B({
        applicationId: t,
        channelId: r,
        embedded: a,
        source: o,
        locationObject: s,
        analyticsLocations: c,
    })
        .then((e) =>
            0 === e
                ? null
                : S.Z.waitConnected(t).then(() => Promise.race([S.Z.waitSubscribed(t, w.zMe.ACTIVITY_JOIN)])),
        )
        .then(() => {
            l.Z.dispatch({
                type: "ACTIVITY_JOIN",
                applicationId: t,
                secret: n,
                intent: i,
                embedded: a,
            });
        })
        .catch(() =>
            l.Z.dispatch({
                type: "ACTIVITY_JOIN_FAILED",
                applicationId: t,
            }),
        );
}
function U(e, t) {
    return null == e || "" === e
        ? null
        : {
              distributor: e,
              sku: t,
          };
}
function G(e) {
    return o.tn
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
async function B(e) {
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
        let e = u.Z.getApplication(t);
        return null != e && (0, p.g)(e)
            ? ((0, _.s2)({ applicationId: t }), 0)
            : (await (0, c.Z)({
                    applicationId: t,
                    activityChannelId: null != r ? r : void 0,
                    source: a,
                    locationObject: o,
                    analyticsLocations: s,
                }))
              ? 0
              : Promise.resolve();
    }
    if (b.Z.isConnected(t)) return Promise.resolve();
    let d = null;
    if (null == n) {
        let e = O.Z.getActiveLibraryApplication(t);
        n = null != e ? e.branchId : t;
    }
    if (v.Z.isLaunchable(t, n)) {
        let e = v.Z.getState(t, n),
            r = O.Z.getActiveLaunchOptionId(t, n);
        if (null == e) throw Error("Missing dispatch game when launching");
        let i = O.Z.getLibraryApplication(t, n);
        if (null == i) throw Error("Missing library application when launching");
        d = G(t).then((t) => S.Z.launchDispatchApplication(e, t, E.default.locale, i.getBranchName(), r));
    } else {
        let e = u.Z.getApplication(t);
        d = null != e ? S.Z.launch(e) : S.Z.launchGame(t);
    }
    let f = Error("game not found");
    return null != d
        ? (l.Z.dispatch({
              type: "LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE",
              applicationId: t,
              branchId: n,
          }),
          l.Z.dispatch({
              type: "GAME_LAUNCH_START",
              applicationId: t,
          }),
          d
              .then((e) => {
                  l.Z.dispatch({
                      type: "GAME_LAUNCH_SUCCESS",
                      applicationId: t,
                      pids: e,
                  });
              })
              .catch((e) => {
                  P.Z.show(w.kVF.LAUNCH_GAME_FAILURE, L.intl.string(L.t.YZEBdn)),
                      l.Z.dispatch({
                          type: "GAME_LAUNCH_FAIL",
                          applicationId: t,
                          error: f,
                      });
              }))
        : (l.Z.dispatch({
              type: "GAME_LAUNCH_FAIL",
              applicationId: t,
              error: f,
          }),
          Promise.reject(f));
}
let V = {
    addGame(e, t) {
        l.Z.dispatch({
            type: "RUNNING_GAME_ADD_OVERRIDE",
            pid: e,
        }),
            I.default.track(w.rMx.RUNNING_GAME_OVERRIDE_ADDED, { game_name: t });
    },
    toggleOverlay(e, t, n) {
        let r = (0, g.ow)(e),
            i = y.Z.getGameByName(r.name);
        if (null != i) {
            let e = O.Z.getActiveLibraryApplication(i.id);
            if (null != e) {
                let r = e.getFlags(),
                    i = T.yE(r, w.eHb.OVERLAY_DISABLED);
                t && i !== t && (r = T.x9(r, w.eHb.OVERLAY_DISABLED));
                let a = T.yE(r, w.eHb.OVERLAY_V3_DISABLED);
                null != n && n !== a && (r = T.x9(r, w.eHb.OVERLAY_V3_DISABLED)), R.h(e.id, e.branchId, r);
                return;
            }
        }
        l.Z.dispatch({
            type: "RUNNING_GAME_TOGGLE_OVERLAY",
            game: r,
            newLegacyOverlayEnabledValue: t,
            newOverlayV3EnabledValue: n,
        });
    },
    toggleDetection(e) {
        l.Z.dispatch({
            type: "RUNNING_GAME_TOGGLE_DETECTION",
            game: e,
        });
    },
    editName(e, t) {
        l.Z.dispatch({
            type: "RUNNING_GAME_EDIT_NAME",
            game: e,
            newName: t,
        });
    },
    identifyGame: (e, t) =>
        (0, d.Z)().then(
            (t) =>
                new Promise((n, r) => {
                    if (null == t) return void r(Error("Game utils module not loaded"));
                    t.identifyGame(e, (t, i) =>
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
                            ? void r(Error("Error ".concat(t, " when fetching info on ").concat(e)))
                            : null == i.icon || "" === i.icon || null == i.name || "" === i.name
                              ? void r(Error("Did not find data on ".concat(e)))
                              : void (l.Z.dispatch({
                                    type: "GAME_ICON_UPDATE",
                                    gameName: i.name,
                                    icon: "data:image/png;base64,".concat(i.icon),
                                }),
                                n(i)),
                    );
                }),
        ),
    getDetectableGamesSupplemental(e) {
        let { forceFetch: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { forceFetch: !1 },
            n = t ? e : e.filter(h.Z.canFetch);
        if (0 === n.length) return;
        l.Z.dispatch({
            type: "DETECTABLE_GAME_SUPPLEMENTAL_FETCH",
            applicationIds: n,
        });
        let r = async (e) => {
            try {
                let t = await o.tn.get({
                    url: w.ANM.APPLICATIONS_GAMES_SUPPLEMENTAL,
                    query: { application_ids: e },
                    rejectWithError: !0,
                });
                l.Z.dispatch({
                    type: "DETECTABLE_GAME_SUPPLEMENTAL_FETCH_SUCCESS",
                    applicationIds: e,
                    supplementalGameData: t.body.supplemental_game_data,
                });
            } catch (t) {
                l.Z.dispatch({
                    type: "DETECTABLE_GAME_SUPPLEMENTAL_FETCH_FAILURE",
                    applicationIds: e,
                });
            }
        };
        for (; n.length > 0; ) r(n.splice(0, M));
    },
    getDetectableGames() {
        if (!y.Z.canFetchDetectableGames()) return;
        let e = m._.getConfig({ location: "GamesActionCreators.getDetectableGames" }).useCanonicalList
                ? w.ANM.GAMES_DETECTABLE
                : w.ANM.APPLICATIONS_DETECTABLE,
            t = y.Z.detectableGamesEtag;
        l.Z.wait(() => {
            l.Z.dispatch({ type: "GAMES_DATABASE_FETCH" }),
                N.Z.get({
                    url: e,
                    headers: { "If-None-Match": t },
                    retries: 1,
                    oldFormErrors: !0,
                    trackedActionData: {
                        event: i.NetworkActionNames.DETECTABLE_APPLICATIONS_FETCH,
                        properties: (e) => {
                            var n;
                            return (0, s.iG)({
                                sent_etag: t,
                                received_etag: null == e || null == (n = e.headers) ? void 0 : n.etag,
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
                        l.Z.dispatch({
                            type: "GAMES_DATABASE_UPDATE",
                            games: t,
                            etag: n,
                        });
                    },
                    (e) => {
                        let { status: t } = e;
                        304 === t
                            ? l.Z.dispatch({
                                  type: "GAMES_DATABASE_UPDATE",
                                  games: [],
                                  etag: y.Z.detectableGamesEtag,
                              })
                            : l.Z.dispatch({ type: "GAMES_DATABASE_FETCH_FAIL" });
                    },
                );
        });
    },
    reportUnverifiedGame(e) {
        let { name: t, iconHash: n, publisher: r, distributor: i, sku: a, executableName: s } = e,
            c = (0, d.F)(s);
        k.log("Reporting unverified game: ", {
            name: t,
            executableName: s,
            iconHash: n,
            publisher: r,
            distributor: i,
            sku: a,
            cleanedExecutable: c,
        }),
            null != c &&
                o.tn
                    .post({
                        url: w.ANM.UNVERIFIED_APPLICATIONS,
                        body: {
                            name: t,
                            os: (0, A.getPlatformName)(),
                            icon: n,
                            distributor_application: U(i, a),
                            executable: c,
                            publisher: r,
                            report_version: x,
                        },
                        retries: 1,
                        oldFormErrors: !0,
                        rejectWithError: !0,
                    })
                    .then((e) => {
                        let {
                            body: { name: t, hash: n, missing_data: r },
                        } = e;
                        l.Z.dispatch({
                            type: "UNVERIFIED_GAME_UPDATE",
                            name: t,
                            hash: n,
                            missingData: r,
                        });
                    });
    },
    uploadIcon(e, t, n) {
        o.tn.post({
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
        l.Z.dispatch({
            type: "RUNNING_GAME_DELETE_ENTRY",
            game: e,
        });
    },
    launch: B,
    async join(e) {
        let {
            userId: t,
            sessionId: n,
            applicationId: r,
            channelId: i,
            messageId: a,
            intent: o = D.Ws.PLAY,
            embedded: s = !1,
            source: c,
            locationObject: u,
            analyticsLocations: d,
        } = e;
        if (__OVERLAY__)
            return (
                l.Z.dispatch({
                    type: "OVERLAY_JOIN_GAME",
                    userId: t,
                    sessionId: n,
                    applicationId: r,
                    channelId: i,
                    messageId: a,
                }),
                Promise.resolve(!0)
            );
        l.Z.dispatch({
            type: "ACTIVITY_JOIN_LOADING",
            applicationId: r,
        });
        try {
            let e = await C.Z.getJoinSecret(t, n, r, i, a);
            return (
                j({
                    applicationId: r,
                    secret: e,
                    channelId: i,
                    intent: o,
                    embedded: s,
                    source: c,
                    locationObject: u,
                    analyticsLocations: d,
                }),
                !0
            );
        } catch (e) {
            return (
                l.Z.dispatch({
                    type: "ACTIVITY_JOIN_FAILED",
                    applicationId: r,
                }),
                !1
            );
        }
    },
    joinWithSecret: j,
};
