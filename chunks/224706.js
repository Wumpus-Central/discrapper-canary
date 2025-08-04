(n.d(t, { Z: () => j }), n(388685), n(35282), n(415506));
var r = n(664751),
    i = n(990547),
    a = n(243814),
    o = n(544891),
    s = n(283693),
    l = n(570140),
    c = n(638880),
    u = n(812206),
    d = n(439849),
    f = n(510839),
    _ = n(813370),
    p = n(669764),
    h = n(706454),
    m = n(757266),
    g = n(77498),
    E = n(283595),
    b = n(417363),
    y = n(626135),
    O = n(630388),
    v = n(877481),
    I = n(358085),
    T = n(573261),
    S = n(278323),
    A = n(58642),
    N = n(254854),
    C = n(981631),
    R = n(701488),
    P = n(388032);
let w = 3,
    D = 20;
function L(e) {
    let { applicationId: t, secret: n, channelId: r, intent: i = R.Ws.PLAY, embedded: a = !1, source: o, locationObject: s, analyticsLocations: c } = e;
    M({
        applicationId: t,
        channelId: r,
        embedded: a,
        source: o,
        locationObject: s,
        analyticsLocations: c
    })
        .then((e) => (0 === e ? null : v.Z.waitConnected(t).then(() => Promise.race([v.Z.waitSubscribed(t, C.zMe.ACTIVITY_JOIN)]))))
        .then(() => {
            l.Z.dispatch({
                type: 'ACTIVITY_JOIN',
                applicationId: t,
                secret: n,
                intent: i,
                embedded: a
            });
        })
        .catch(() =>
            l.Z.dispatch({
                type: 'ACTIVITY_JOIN_FAILED',
                applicationId: t
            })
        );
}
function x(e, t) {
    return null == e || '' === e
        ? null
        : {
              distributor: e,
              sku: t
          };
}
function k(e) {
    return o.tn
        .post({
            url: C.ANM.OAUTH2_AUTHORIZE,
            query: {
                client_id: e,
                response_type: 'token',
                scope: [a.x.IDENTIFY].join(' ')
            },
            retries: 3,
            body: { authorize: !0 },
            oldFormErrors: !0,
            rejectWithError: !1
        })
        .then(
            (e) => {
                let t = e.body.location.split(/#|\?/),
                    n = r.parse(t[t.length - 1]);
                if ('invalid_request' === n.error) return null;
                if (null != n.error) {
                    var i;
                    throw Error('OAuth2 Error: '.concat(n.error, ': ').concat(null != (i = n.error_description) ? i : 'unknown error'));
                }
                return n.access_token;
            },
            (e) => {
                if (404 === e.status) return null;
                throw e;
            }
        );
}
async function M(e) {
    let { applicationId: t, branchId: n, channelId: r, embedded: i = !1, source: a, locationObject: o = {}, analyticsLocations: s = [] } = e;
    if (i) {
        let e = u.Z.getApplication(t);
        return null != e && (0, _.g)(e)
            ? ((0, f.s2)({ applicationId: t }), 0)
            : (await (0, c.Z)({
                    applicationId: t,
                    activityChannelId: null != r ? r : void 0,
                    source: a,
                    locationObject: o,
                    analyticsLocations: s
                }))
              ? 0
              : Promise.resolve();
    }
    if (m.Z.isConnected(t)) return Promise.resolve();
    let d = null;
    if (null == n) {
        let e = E.Z.getActiveLibraryApplication(t);
        n = null != e ? e.branchId : t;
    }
    if (b.Z.isLaunchable(t, n)) {
        let e = b.Z.getState(t, n),
            r = E.Z.getActiveLaunchOptionId(t, n);
        if (null == e) throw Error('Missing dispatch game when launching');
        let i = E.Z.getLibraryApplication(t, n);
        if (null == i) throw Error('Missing library application when launching');
        d = k(t).then((t) => v.Z.launchDispatchApplication(e, t, h.default.locale, i.getBranchName(), r));
    } else {
        let e = u.Z.getApplication(t);
        d = null != e ? v.Z.launch(e) : v.Z.launchGame(t);
    }
    let p = Error('game not found');
    return null != d
        ? (l.Z.dispatch({
              type: 'LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE',
              applicationId: t,
              branchId: n
          }),
          l.Z.dispatch({
              type: 'GAME_LAUNCH_START',
              applicationId: t
          }),
          d
              .then((e) => {
                  l.Z.dispatch({
                      type: 'GAME_LAUNCH_SUCCESS',
                      applicationId: t,
                      pids: e
                  });
              })
              .catch((e) => {
                  (N.Z.show(C.kVF.LAUNCH_GAME_FAILURE, P.intl.string(P.t.YZEBdn)),
                      l.Z.dispatch({
                          type: 'GAME_LAUNCH_FAIL',
                          applicationId: t,
                          error: p
                      }));
              }))
        : (l.Z.dispatch({
              type: 'GAME_LAUNCH_FAIL',
              applicationId: t,
              error: p
          }),
          Promise.reject(p));
}
let j = {
    addGame(e, t) {
        (l.Z.dispatch({
            type: 'RUNNING_GAME_ADD_OVERRIDE',
            pid: e
        }),
            y.default.track(C.rMx.RUNNING_GAME_OVERRIDE_ADDED, { game_name: t }));
    },
    toggleOverlay(e, t, n) {
        let r = g.Z.getGameByName(e.name);
        if (null != r) {
            let e = E.Z.getActiveLibraryApplication(r.id);
            if (null != e) {
                let r = e.getFlags(),
                    i = O.yE(r, C.eHb.OVERLAY_DISABLED);
                t && i !== t && (r = O.x9(r, C.eHb.OVERLAY_DISABLED));
                let a = O.yE(r, C.eHb.OVERLAY_V3_DISABLED);
                (null != n && n !== a && (r = O.x9(r, C.eHb.OVERLAY_V3_DISABLED)), A.h(e.id, e.branchId, r));
                return;
            }
        }
        l.Z.dispatch({
            type: 'RUNNING_GAME_TOGGLE_OVERLAY',
            game: e,
            newLegacyOverlayEnabledValue: t,
            newOverlayV3EnabledValue: n
        });
    },
    toggleDetection(e) {
        l.Z.dispatch({
            type: 'RUNNING_GAME_TOGGLE_DETECTION',
            game: e
        });
    },
    editName(e, t) {
        l.Z.dispatch({
            type: 'RUNNING_GAME_EDIT_NAME',
            game: e,
            newName: t
        });
    },
    identifyGame: (e, t) =>
        (0, d.Z)().then(
            (t) =>
                new Promise((n, r) => {
                    if (null == t) return void r(Error('Game utils module not loaded'));
                    t.identifyGame(e, (t, i) =>
                        0 !== t
                            ? void r(Error('Error '.concat(t, ' when fetching info on ').concat(e)))
                            : null == i.icon || '' === i.icon || null == i.name || '' === i.name
                              ? void r(Error('Did not find data on '.concat(e)))
                              : void (l.Z.dispatch({
                                    type: 'GAME_ICON_UPDATE',
                                    gameName: i.name,
                                    icon: 'data:image/png;base64,'.concat(i.icon)
                                }),
                                n(i))
                    );
                })
        ),
    getDetectableGamesSupplemental(e) {
        let { forceFetch: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { forceFetch: !1 },
            n = t ? e : e.filter(p.Z.canFetch);
        if (0 === n.length) return;
        l.Z.dispatch({
            type: 'DETECTABLE_GAME_SUPPLEMENTAL_FETCH',
            applicationIds: n
        });
        let r = async (e) => {
            try {
                let t = await o.tn.get({
                    url: C.ANM.APPLICATIONS_GAMES_SUPPLEMENTAL,
                    query: { application_ids: e },
                    rejectWithError: !0
                });
                l.Z.dispatch({
                    type: 'DETECTABLE_GAME_SUPPLEMENTAL_FETCH_SUCCESS',
                    applicationIds: e,
                    supplementalGameData: t.body.supplemental_game_data
                });
            } catch (t) {
                l.Z.dispatch({
                    type: 'DETECTABLE_GAME_SUPPLEMENTAL_FETCH_FAILURE',
                    applicationIds: e
                });
            }
        };
        for (; n.length > 0; ) r(n.splice(0, D));
    },
    getDetectableGames() {
        if (!g.Z.canFetchDetectableGames()) return;
        let e = g.Z.detectableGamesEtag;
        l.Z.wait(() => {
            (l.Z.dispatch({ type: 'GAMES_DATABASE_FETCH' }),
                T.Z.get({
                    url: C.ANM.APPLICATIONS_DETECTABLE,
                    headers: { 'If-None-Match': e },
                    retries: 1,
                    oldFormErrors: !0,
                    trackedActionData: {
                        event: i.NetworkActionNames.DETECTABLE_APPLICATIONS_FETCH,
                        properties: (t) => {
                            var n;
                            return (0, s.iG)({
                                sent_etag: e,
                                received_etag: null == t || null == (n = t.headers) ? void 0 : n.etag
                            });
                        }
                    },
                    rejectWithError: !1
                }).then(
                    (e) => {
                        let {
                            body: t,
                            headers: { etag: n }
                        } = e;
                        l.Z.dispatch({
                            type: 'GAMES_DATABASE_UPDATE',
                            games: t,
                            etag: n
                        });
                    },
                    (e) => {
                        let { status: t } = e;
                        304 === t
                            ? l.Z.dispatch({
                                  type: 'GAMES_DATABASE_UPDATE',
                                  games: [],
                                  etag: g.Z.detectableGamesEtag
                              })
                            : l.Z.dispatch({ type: 'GAMES_DATABASE_FETCH_FAIL' });
                    }
                ));
        });
    },
    reportUnverifiedGame(e) {
        let { name: t, iconHash: n, publisher: r, distributor: i, sku: a, executableName: s } = e,
            c = (0, d.F)(s);
        null != c &&
            o.tn
                .post({
                    url: C.ANM.UNVERIFIED_APPLICATIONS,
                    body: {
                        name: t,
                        os: (0, I.getPlatformName)(),
                        icon: n,
                        distributor_application: x(i, a),
                        executable: c,
                        publisher: r,
                        report_version: w
                    },
                    retries: 1,
                    oldFormErrors: !0,
                    rejectWithError: !0
                })
                .then((e) => {
                    let {
                        body: { name: t, hash: n, missing_data: r }
                    } = e;
                    l.Z.dispatch({
                        type: 'UNVERIFIED_GAME_UPDATE',
                        name: t,
                        hash: n,
                        missingData: r
                    });
                });
    },
    uploadIcon(e, t, n) {
        o.tn.post({
            url: C.ANM.UNVERIFIED_APPLICATIONS_ICONS,
            body: {
                application_name: e,
                application_hash: t,
                icon: n
            },
            retries: 1,
            oldFormErrors: !0,
            rejectWithError: !0
        });
    },
    deleteEntry(e) {
        l.Z.dispatch({
            type: 'RUNNING_GAME_DELETE_ENTRY',
            game: e
        });
    },
    launch: M,
    async join(e) {
        let { userId: t, sessionId: n, applicationId: r, channelId: i, messageId: a, intent: o = R.Ws.PLAY, embedded: s = !1, source: c, locationObject: u, analyticsLocations: d } = e;
        if (__OVERLAY__)
            return (
                l.Z.dispatch({
                    type: 'OVERLAY_JOIN_GAME',
                    userId: t,
                    sessionId: n,
                    applicationId: r,
                    channelId: i,
                    messageId: a
                }),
                Promise.resolve(!0)
            );
        l.Z.dispatch({
            type: 'ACTIVITY_JOIN_LOADING',
            applicationId: r
        });
        try {
            let e = await S.Z.getJoinSecret(t, n, r, i, a);
            return (
                L({
                    applicationId: r,
                    secret: e,
                    channelId: i,
                    intent: o,
                    embedded: s,
                    source: c,
                    locationObject: u,
                    analyticsLocations: d
                }),
                !0
            );
        } catch (e) {
            return (
                l.Z.dispatch({
                    type: 'ACTIVITY_JOIN_FAILED',
                    applicationId: r
                }),
                !1
            );
        }
    },
    joinWithSecret: L
};
