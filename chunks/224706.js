n.d(t, { Z: () => M }), n(47120), n(411104);
var i = n(664751),
    r = n(990547),
    a = n(243814),
    s = n(544891),
    o = n(283693),
    l = n(570140),
    u = n(638880),
    c = n(812206),
    d = n(439849),
    f = n(669764),
    _ = n(706454),
    p = n(757266),
    h = n(77498),
    m = n(283595),
    g = n(417363),
    E = n(626135),
    v = n(630388),
    y = n(877481),
    I = n(358085),
    b = n(573261),
    T = n(278323),
    S = n(58642),
    A = n(254854),
    N = n(981631),
    C = n(701488),
    R = n(388032);
let O = 3,
    D = 20;
function x(e) {
    let { applicationId: t, secret: n, channelId: i, intent: r = C.Ws.PLAY, embedded: a = !1, source: s, partyId: o, locationObject: u, analyticsLocations: c, joinUserId: d, joinSessionId: f } = e;
    w({
        applicationId: t,
        channelId: i,
        embedded: a,
        source: s,
        partyId: o,
        locationObject: u,
        analyticsLocations: c,
        joinUserId: d,
        joinSessionId: f,
        joinSecret: n
    })
        .then((e) => (0 === e ? null : y.Z.waitConnected(t).then(() => Promise.race([y.Z.waitSubscribed(t, N.zMe.ACTIVITY_JOIN)]))))
        .then(() => {
            l.Z.dispatch({
                type: 'ACTIVITY_JOIN',
                applicationId: t,
                secret: n,
                intent: r,
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
function L(e, t) {
    return null == e || '' === e
        ? null
        : {
              distributor: e,
              sku: t
          };
}
function P(e) {
    return s.tn
        .post({
            url: N.ANM.OAUTH2_AUTHORIZE,
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
                    n = i.parse(t[t.length - 1]);
                if ('invalid_request' === n.error) return null;
                if (null != n.error) {
                    var r;
                    throw Error('OAuth2 Error: '.concat(n.error, ': ').concat(null !== (r = n.error_description) && void 0 !== r ? r : 'unknown error'));
                }
                return n.access_token;
            },
            (e) => {
                if (404 === e.status) return null;
                throw e;
            }
        );
}
async function w(e) {
    let { applicationId: t, branchId: n, channelId: i, embedded: r = !1, source: a, partyId: s, locationObject: o = {}, analyticsLocations: d = [], joinUserId: f, joinSessionId: h, joinSecret: E } = e;
    if (r)
        return (await (0, u.Z)({
            applicationId: t,
            activityChannelId: null != i ? i : void 0,
            source: a,
            partyId: s,
            locationObject: o,
            analyticsLocations: d,
            joinUserId: f,
            joinSessionId: h,
            joinSecret: E
        }))
            ? 0
            : Promise.resolve();
    if (p.Z.isConnected(t)) return Promise.resolve();
    let v = null;
    if (null == n) {
        let e = m.Z.getActiveLibraryApplication(t);
        n = null != e ? e.branchId : t;
    }
    if (g.Z.isLaunchable(t, n)) {
        let e = g.Z.getState(t, n),
            i = m.Z.getActiveLaunchOptionId(t, n);
        if (null == e) throw Error('Missing dispatch game when launching');
        let r = m.Z.getLibraryApplication(t, n);
        if (null == r) throw Error('Missing library application when launching');
        v = P(t).then((t) => y.Z.launchDispatchApplication(e, t, _.default.locale, r.getBranchName(), i));
    } else {
        let e = c.Z.getApplication(t);
        v = null != e ? y.Z.launch(e) : y.Z.launchGame(t);
    }
    let I = Error('game not found');
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
                  A.Z.show(N.kVF.LAUNCH_GAME_FAILURE, R.intl.string(R.t.YZEBdn)),
                      l.Z.dispatch({
                          type: 'GAME_LAUNCH_FAIL',
                          applicationId: t,
                          error: I
                      });
              }))
        : (l.Z.dispatch({
              type: 'GAME_LAUNCH_FAIL',
              applicationId: t,
              error: I
          }),
          Promise.reject(I));
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
        let i = h.Z.getGameByName(e.name);
        if (null != i) {
            let e = m.Z.getActiveLibraryApplication(i.id);
            if (null != e) {
                let i = e.getFlags(),
                    r = v.yE(i, N.eHb.OVERLAY_DISABLED);
                t && r !== t && (i = v.x9(i, N.eHb.OVERLAY_DISABLED));
                let a = v.yE(i, N.eHb.OVERLAY_V3_DISABLED);
                null != n && n !== a && (i = v.x9(i, N.eHb.OVERLAY_V3_DISABLED)), S.h(e.id, e.branchId, i);
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
                new Promise((n, i) => {
                    if (null == t) {
                        i(Error('Game utils module not loaded'));
                        return;
                    }
                    t.identifyGame(e, (t, r) => {
                        if (0 !== t) {
                            i(Error('Error '.concat(t, ' when fetching info on ').concat(e)));
                            return;
                        }
                        if (null == r.icon || '' === r.icon || null == r.name || '' === r.name) {
                            i(Error('Did not find data on '.concat(e)));
                            return;
                        }
                        l.Z.dispatch({
                            type: 'GAME_ICON_UPDATE',
                            gameName: r.name,
                            icon: 'data:image/png;base64,'.concat(r.icon)
                        }),
                            n(r);
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
        let i = async (e) => {
            try {
                let t = await s.tn.get({
                    url: N.ANM.APPLICATIONS_GAMES_SUPPLEMENTAL,
                    query: { application_ids: e },
                    rejectWithError: !0
                });
                l.Z.dispatch({
                    type: 'DETECTABLE_GAME_SUPPLEMENTAL_FETCH_SUCCESS',
                    applicationIds: e,
                    supplementalGameData: t.body.supplemental_game_data
                });
            } catch {
                l.Z.dispatch({
                    type: 'DETECTABLE_GAME_SUPPLEMENTAL_FETCH_FAILURE',
                    applicationIds: e
                });
            }
        };
        for (; n.length > 0; ) i(n.splice(0, D));
    },
    getDetectableGames() {
        if (h.Z.fetching || null != h.Z.lastFetched) return;
        let e = h.Z.detectableGamesEtag;
        l.Z.wait(() => {
            l.Z.dispatch({ type: 'GAMES_DATABASE_FETCH' }),
                b.Z.get({
                    url: N.ANM.APPLICATIONS_DETECTABLE,
                    headers: { 'If-None-Match': e },
                    retries: 1,
                    oldFormErrors: !0,
                    trackedActionData: {
                        event: r.NetworkActionNames.DETECTABLE_APPLICATIONS_FETCH,
                        properties: (t) => {
                            var n;
                            return (0, o.iG)({
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
        let { name: t, iconHash: n, publisher: i, distributor: r, sku: a, executableName: o } = e,
            u = (0, d.F)(o);
        null != u &&
            s.tn
                .post({
                    url: N.ANM.UNVERIFIED_APPLICATIONS,
                    body: {
                        name: t,
                        os: (0, I.getPlatformName)(),
                        icon: n,
                        distributor_application: L(r, a),
                        executable: u,
                        publisher: i,
                        report_version: O
                    },
                    retries: 1,
                    oldFormErrors: !0,
                    rejectWithError: !0
                })
                .then((e) => {
                    let {
                        body: { name: t, hash: n, missing_data: i }
                    } = e;
                    l.Z.dispatch({
                        type: 'UNVERIFIED_GAME_UPDATE',
                        name: t,
                        hash: n,
                        missingData: i
                    });
                });
    },
    uploadIcon(e, t, n) {
        s.tn.post({
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
    launch: w,
    async join(e) {
        let { userId: t, sessionId: n, applicationId: i, channelId: r, messageId: a, intent: s = C.Ws.PLAY, embedded: o = !1, source: u, partyId: c, locationObject: d, analyticsLocations: f } = e;
        if (__OVERLAY__)
            return (
                l.Z.dispatch({
                    type: 'OVERLAY_JOIN_GAME',
                    userId: t,
                    sessionId: n,
                    applicationId: i,
                    channelId: r,
                    messageId: a
                }),
                Promise.resolve(!0)
            );
        l.Z.dispatch({
            type: 'ACTIVITY_JOIN_LOADING',
            applicationId: i
        });
        try {
            let e = await T.Z.getJoinSecret(t, n, i, r, a);
            return (
                x({
                    applicationId: i,
                    secret: e,
                    channelId: r,
                    intent: s,
                    embedded: o,
                    partyId: c,
                    source: u,
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
                    applicationId: i
                }),
                !1
            );
        }
    },
    joinWithSecret: x
};
