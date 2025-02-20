n.d(t, { Z: () => M }), n(47120), n(301563), n(411104);
var r = n(664751),
    i = n(990547),
    o = n(243814),
    a = n(544891),
    s = n(283693),
    l = n(570140),
    c = n(638880),
    u = n(812206),
    d = n(439849),
    f = n(669764),
    p = n(706454),
    _ = n(757266),
    h = n(77498),
    m = n(283595),
    g = n(417363),
    E = n(626135),
    v = n(630388),
    b = n(877481),
    y = n(358085),
    O = n(573261),
    S = n(278323),
    I = n(58642),
    T = n(254854),
    N = n(981631),
    A = n(701488),
    C = n(388032);
let R = 3,
    P = 20;
function w(e) {
    let { applicationId: t, secret: n, channelId: r, intent: i = A.Ws.PLAY, embedded: o = !1, source: a, partyId: s, locationObject: c, analyticsLocations: u, joinUserId: d, joinSessionId: f } = e;
    L({
        applicationId: t,
        channelId: r,
        embedded: o,
        source: a,
        partyId: s,
        locationObject: c,
        analyticsLocations: u,
        joinUserId: d,
        joinSessionId: f,
        joinSecret: n
    })
        .then((e) => (0 === e ? null : b.Z.waitConnected(t).then(() => Promise.race([b.Z.waitSubscribed(t, N.zMe.ACTIVITY_JOIN)]))))
        .then(() => {
            l.Z.dispatch({
                type: 'ACTIVITY_JOIN',
                applicationId: t,
                secret: n,
                intent: i,
                embedded: o
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
function x(e) {
    return a.tn
        .post({
            url: N.ANM.OAUTH2_AUTHORIZE,
            query: {
                client_id: e,
                response_type: 'token',
                scope: [o.x.IDENTIFY].join(' ')
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
                    throw Error('OAuth2 Error: '.concat(n.error, ': ').concat(null !== (i = n.error_description) && void 0 !== i ? i : 'unknown error'));
                }
                return n.access_token;
            },
            (e) => {
                if (404 === e.status) return null;
                throw e;
            }
        );
}
async function L(e) {
    let { applicationId: t, branchId: n, channelId: r, embedded: i = !1, source: o, partyId: a, locationObject: s = {}, analyticsLocations: d = [], joinUserId: f, joinSessionId: h, joinSecret: E } = e;
    if (i)
        return (await (0, c.Z)({
            applicationId: t,
            activityChannelId: null != r ? r : void 0,
            source: o,
            partyId: a,
            locationObject: s,
            analyticsLocations: d,
            joinUserId: f,
            joinSessionId: h,
            joinSecret: E
        }))
            ? 0
            : Promise.resolve();
    if (_.Z.isConnected(t)) return Promise.resolve();
    let v = null;
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
        v = x(t).then((t) => b.Z.launchDispatchApplication(e, t, p.default.locale, i.getBranchName(), r));
    } else {
        let e = u.Z.getApplication(t);
        v = null != e ? b.Z.launch(e) : b.Z.launchGame(t);
    }
    let y = Error('game not found');
    return null != v
        ? (l.Z.dispatch({
              type: 'LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE',
              applicationId: t,
              branchId: n
          }),
          l.Z.dispatch({
              type: 'GAME_LAUNCH_START',
              applicationId: t
          }),
          v
              .then((e) => {
                  l.Z.dispatch({
                      type: 'GAME_LAUNCH_SUCCESS',
                      applicationId: t,
                      pids: e
                  });
              })
              .catch((e) => {
                  T.Z.show(N.kVF.LAUNCH_GAME_FAILURE, C.NW.string(C.t.YZEBdn)),
                      l.Z.dispatch({
                          type: 'GAME_LAUNCH_FAIL',
                          applicationId: t,
                          error: y
                      });
              }))
        : (l.Z.dispatch({
              type: 'GAME_LAUNCH_FAIL',
              applicationId: t,
              error: y
          }),
          Promise.reject(y));
}
let M = {
    addGame(e, t) {
        l.Z.dispatch({
            type: 'RUNNING_GAME_ADD_OVERRIDE',
            pid: e
        }),
            E.default.track(N.rMx.RUNNING_GAME_OVERRIDE_ADDED, { game_name: t });
    },
    toggleOverlay(e, t, n) {
        let r = h.Z.getGameByName(e.name);
        if (null != r) {
            let e = m.Z.getActiveLibraryApplication(r.id);
            if (null != e) {
                let r = e.getFlags(),
                    i = v.yE(r, N.eHb.OVERLAY_DISABLED);
                t && i !== t && (r = v.x9(r, N.eHb.OVERLAY_DISABLED));
                let o = v.yE(r, N.eHb.OVERLAY_V3_DISABLED);
                null != n && n !== o && (r = v.x9(r, N.eHb.OVERLAY_V3_DISABLED)), I.h(e.id, e.branchId, r);
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
                    if (null == t) {
                        r(Error('Game utils module not loaded'));
                        return;
                    }
                    t.identifyGame(e, (t, i) => {
                        if (0 !== t) {
                            r(Error('Error '.concat(t, ' when fetching info on ').concat(e)));
                            return;
                        }
                        if (null == i.icon || '' === i.icon || null == i.name || '' === i.name) {
                            r(Error('Did not find data on '.concat(e)));
                            return;
                        }
                        l.Z.dispatch({
                            type: 'GAME_ICON_UPDATE',
                            gameName: i.name,
                            icon: 'data:image/png;base64,'.concat(i.icon)
                        }),
                            n(i);
                    });
                })
        ),
    getDetectableGamesSupplemental(e) {
        let { forceFetch: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { forceFetch: !1 },
            n = t ? e : e.filter(f.Z.canFetch);
        if (0 === n.length) return;
        l.Z.dispatch({
            type: 'DETECTABLE_GAME_SUPPLEMENTAL_FETCH',
            applicationIds: n
        });
        let r = async (e) => {
            try {
                let t = await a.tn.get({
                    url: N.ANM.APPLICATIONS_GAMES_SUPPLEMENTAL,
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
        if (h.Z.fetching || null != h.Z.lastFetched) return;
        let e = h.Z.detectableGamesEtag;
        l.Z.wait(() => {
            l.Z.dispatch({ type: 'GAMES_DATABASE_FETCH' }),
                O.Z.get({
                    url: N.ANM.APPLICATIONS_DETECTABLE,
                    headers: { 'If-None-Match': e },
                    retries: 1,
                    oldFormErrors: !0,
                    trackedActionData: {
                        event: i.NetworkActionNames.DETECTABLE_APPLICATIONS_FETCH,
                        properties: (t) => {
                            var n;
                            return (0, s.iG)({
                                sent_etag: e,
                                received_etag: null == t ? void 0 : null === (n = t.headers) || void 0 === n ? void 0 : n.etag
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
                );
        });
    },
    reportUnverifiedGame(e) {
        let { name: t, iconHash: n, publisher: r, distributor: i, sku: o, executableName: s } = e,
            c = (0, d.F)(s);
        null != c &&
            a.tn
                .post({
                    url: N.ANM.UNVERIFIED_APPLICATIONS,
                    body: {
                        name: t,
                        os: (0, y.getPlatformName)(),
                        icon: n,
                        distributor_application: D(i, o),
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
        a.tn.post({
            url: N.ANM.UNVERIFIED_APPLICATIONS_ICONS,
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
    launch: L,
    async join(e) {
        let { userId: t, sessionId: n, applicationId: r, channelId: i, messageId: o, intent: a = A.Ws.PLAY, embedded: s = !1, source: c, partyId: u, locationObject: d, analyticsLocations: f } = e;
        if (__OVERLAY__)
            return (
                l.Z.dispatch({
                    type: 'OVERLAY_JOIN_GAME',
                    userId: t,
                    sessionId: n,
                    applicationId: r,
                    channelId: i,
                    messageId: o
                }),
                Promise.resolve(!0)
            );
        l.Z.dispatch({
            type: 'ACTIVITY_JOIN_LOADING',
            applicationId: r
        });
        try {
            let e = await S.Z.getJoinSecret(t, n, r, i, o);
            return (
                w({
                    applicationId: r,
                    secret: e,
                    channelId: i,
                    intent: a,
                    embedded: s,
                    partyId: u,
                    source: c,
                    locationObject: d,
                    analyticsLocations: f,
                    joinUserId: t,
                    joinSessionId: n
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
