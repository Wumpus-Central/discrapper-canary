(n.d(t, { Z: () => M }), n(388685), n(35282), n(415506));
var r = n(664751),
    i = n(990547),
    a = n(243814),
    o = n(544891),
    s = n(283693),
    l = n(570140),
    c = n(638880),
    u = n(812206),
    d = n(439849),
    _ = n(669764),
    f = n(706454),
    p = n(757266),
    h = n(77498),
    m = n(283595),
    g = n(417363),
    E = n(626135),
    b = n(630388),
    y = n(877481),
    O = n(358085),
    v = n(573261),
    I = n(278323),
    T = n(58642),
    S = n(254854),
    A = n(981631),
    N = n(701488),
    C = n(388032);
let R = 3,
    P = 20;
function w(e) {
    let { applicationId: t, secret: n, channelId: r, intent: i = N.Ws.PLAY, embedded: a = !1, source: o, locationObject: s, analyticsLocations: c } = e;
    x({
        applicationId: t,
        channelId: r,
        embedded: a,
        source: o,
        locationObject: s,
        analyticsLocations: c
    })
        .then((e) => (0 === e ? null : y.Z.waitConnected(t).then(() => Promise.race([y.Z.waitSubscribed(t, A.zMe.ACTIVITY_JOIN)]))))
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
function D(e, t) {
    return null == e || '' === e
        ? null
        : {
              distributor: e,
              sku: t
          };
}
function L(e) {
    return o.tn
        .post({
            url: A.ANM.OAUTH2_AUTHORIZE,
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
async function x(e) {
    let { applicationId: t, branchId: n, channelId: r, embedded: i = !1, source: a, locationObject: o = {}, analyticsLocations: s = [] } = e;
    if (i)
        return (await (0, c.Z)({
            applicationId: t,
            activityChannelId: null != r ? r : void 0,
            source: a,
            locationObject: o,
            analyticsLocations: s
        }))
            ? 0
            : Promise.resolve();
    if (p.Z.isConnected(t)) return Promise.resolve();
    let d = null;
    if (null == n) {
        let e = m.Z.getActiveLibraryApplication(t);
        n = null != e ? e.branchId : t;
    }
    if (g.Z.isLaunchable(t, n)) {
        let e = g.Z.getState(t, n),
            r = m.Z.getActiveLaunchOptionId(t, n);
        if (null == e) throw Error('Missing dispatch game when launching');
        let i = m.Z.getLibraryApplication(t, n);
        if (null == i) throw Error('Missing library application when launching');
        d = L(t).then((t) => y.Z.launchDispatchApplication(e, t, f.default.locale, i.getBranchName(), r));
    } else {
        let e = u.Z.getApplication(t);
        d = null != e ? y.Z.launch(e) : y.Z.launchGame(t);
    }
    let _ = Error('game not found');
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
                  (S.Z.show(A.kVF.LAUNCH_GAME_FAILURE, C.intl.string(C.t.YZEBdn)),
                      l.Z.dispatch({
                          type: 'GAME_LAUNCH_FAIL',
                          applicationId: t,
                          error: _
                      }));
              }))
        : (l.Z.dispatch({
              type: 'GAME_LAUNCH_FAIL',
              applicationId: t,
              error: _
          }),
          Promise.reject(_));
}
let M = {
    addGame(e, t) {
        (l.Z.dispatch({
            type: 'RUNNING_GAME_ADD_OVERRIDE',
            pid: e
        }),
            E.default.track(A.rMx.RUNNING_GAME_OVERRIDE_ADDED, { game_name: t }));
    },
    toggleOverlay(e, t, n) {
        let r = h.Z.getGameByName(e.name);
        if (null != r) {
            let e = m.Z.getActiveLibraryApplication(r.id);
            if (null != e) {
                let r = e.getFlags(),
                    i = b.yE(r, A.eHb.OVERLAY_DISABLED);
                t && i !== t && (r = b.x9(r, A.eHb.OVERLAY_DISABLED));
                let a = b.yE(r, A.eHb.OVERLAY_V3_DISABLED);
                (null != n && n !== a && (r = b.x9(r, A.eHb.OVERLAY_V3_DISABLED)), T.h(e.id, e.branchId, r));
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
            n = t ? e : e.filter(_.Z.canFetch);
        if (0 === n.length) return;
        l.Z.dispatch({
            type: 'DETECTABLE_GAME_SUPPLEMENTAL_FETCH',
            applicationIds: n
        });
        let r = async (e) => {
            try {
                let t = await o.tn.get({
                    url: A.ANM.APPLICATIONS_GAMES_SUPPLEMENTAL,
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
        for (; n.length > 0; ) r(n.splice(0, P));
    },
    getDetectableGames() {
        if (!h.Z.canFetchDetectableGames()) return;
        let e = h.Z.detectableGamesEtag;
        l.Z.wait(() => {
            (l.Z.dispatch({ type: 'GAMES_DATABASE_FETCH' }),
                v.Z.get({
                    url: A.ANM.APPLICATIONS_DETECTABLE,
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
                                  etag: h.Z.detectableGamesEtag
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
                    url: A.ANM.UNVERIFIED_APPLICATIONS,
                    body: {
                        name: t,
                        os: (0, O.getPlatformName)(),
                        icon: n,
                        distributor_application: D(i, a),
                        executable: c,
                        publisher: r,
                        report_version: R
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
            url: A.ANM.UNVERIFIED_APPLICATIONS_ICONS,
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
    launch: x,
    async join(e) {
        let { userId: t, sessionId: n, applicationId: r, channelId: i, messageId: a, intent: o = N.Ws.PLAY, embedded: s = !1, source: c, locationObject: u, analyticsLocations: d } = e;
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
            let e = await I.Z.getJoinSecret(t, n, r, i, a);
            return (
                w({
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
    joinWithSecret: w
};
