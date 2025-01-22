var i,
    a = r(47120);
var o = r(411104);
var s = r(664751),
    l = r(990547),
    u = r(243814),
    c = r(544891),
    d = r(283693),
    f = r(570140),
    p = r(638880),
    h = r(812206),
    _ = r(439849),
    m = r(669764),
    g = r(706454),
    E = r(757266),
    v = r(77498),
    y = r(283595),
    b = r(417363),
    I = r(626135),
    T = r(630388),
    S = r(877481),
    A = r(358085),
    C = r(573261),
    N = r(278323),
    R = r(58642),
    O = r(254854),
    D = r(981631),
    L = r(701488),
    x = r(388032);
let w = 3,
    P = 20;
function M(e) {
    let { applicationId: n, secret: r, channelId: i, intent: a = L.Ws.PLAY, embedded: o = !1, source: s, partyId: l, locationObject: u, analyticsLocations: c, joinUserId: d, joinSessionId: p } = e;
    B({
        applicationId: n,
        channelId: i,
        embedded: o,
        source: s,
        partyId: l,
        locationObject: u,
        analyticsLocations: c,
        joinUserId: d,
        joinSessionId: p,
        joinSecret: r
    })
        .then((e) => (0 === e ? null : S.Z.waitConnected(n).then(() => Promise.race([S.Z.waitSubscribed(n, D.zMe.ACTIVITY_JOIN)]))))
        .then(() => {
            f.Z.dispatch({
                type: 'ACTIVITY_JOIN',
                applicationId: n,
                secret: r,
                intent: a,
                embedded: o
            });
        })
        .catch(() =>
            f.Z.dispatch({
                type: 'ACTIVITY_JOIN_FAILED',
                applicationId: n
            })
        );
}
function k(e, n) {
    return null == e || '' === e
        ? null
        : {
              distributor: e,
              sku: n
          };
}
function U(e) {
    return c.tn
        .post({
            url: D.ANM.OAUTH2_AUTHORIZE,
            query: {
                client_id: e,
                response_type: 'token',
                scope: [u.x.IDENTIFY].join(' ')
            },
            retries: 3,
            body: { authorize: !0 },
            oldFormErrors: !0,
            rejectWithError: !1
        })
        .then(
            (e) => {
                let n = e.body.location.split(/#|\?/),
                    r = s.parse(n[n.length - 1]);
                if ('invalid_request' === r.error) return null;
                if (null != r.error) {
                    var i;
                    throw Error('OAuth2 Error: '.concat(r.error, ': ').concat(null !== (i = r.error_description) && void 0 !== i ? i : 'unknown error'));
                }
                return r.access_token;
            },
            (e) => {
                if (404 === e.status) return null;
                throw e;
            }
        );
}
async function B(e) {
    let { applicationId: n, branchId: r, channelId: i, embedded: a = !1, source: o, partyId: s, locationObject: l = {}, analyticsLocations: u = [], joinUserId: c, joinSessionId: d, joinSecret: _ } = e;
    if (a)
        return (await (0, p.Z)({
            applicationId: n,
            activityChannelId: null != i ? i : void 0,
            source: o,
            partyId: s,
            locationObject: l,
            analyticsLocations: u,
            joinUserId: c,
            joinSessionId: d,
            joinSecret: _
        }))
            ? 0
            : Promise.resolve();
    if (E.Z.isConnected(n)) return Promise.resolve();
    let m = null;
    if (null == r) {
        let e = y.Z.getActiveLibraryApplication(n);
        r = null != e ? e.branchId : n;
    }
    if (b.Z.isLaunchable(n, r)) {
        let e = b.Z.getState(n, r),
            i = y.Z.getActiveLaunchOptionId(n, r);
        if (null == e) throw Error('Missing dispatch game when launching');
        let a = y.Z.getLibraryApplication(n, r);
        if (null == a) throw Error('Missing library application when launching');
        m = U(n).then((n) => S.Z.launchDispatchApplication(e, n, g.default.locale, a.getBranchName(), i));
    } else {
        let e = h.Z.getApplication(n);
        m = null != e ? S.Z.launch(e) : S.Z.launchGame(n);
    }
    let v = Error('game not found');
    return null != m
        ? (f.Z.dispatch({
              type: 'LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE',
              applicationId: n,
              branchId: r
          }),
          f.Z.dispatch({
              type: 'GAME_LAUNCH_START',
              applicationId: n
          }),
          m
              .then((e) => {
                  f.Z.dispatch({
                      type: 'GAME_LAUNCH_SUCCESS',
                      applicationId: n,
                      pids: e
                  });
              })
              .catch((e) => {
                  O.Z.show(D.kVF.LAUNCH_GAME_FAILURE, x.intl.string(x.t.YZEBdn)),
                      f.Z.dispatch({
                          type: 'GAME_LAUNCH_FAIL',
                          applicationId: n,
                          error: v
                      });
              }))
        : (f.Z.dispatch({
              type: 'GAME_LAUNCH_FAIL',
              applicationId: n,
              error: v
          }),
          Promise.reject(v));
}
!(function (e) {
    e[(e.LAUNCHED_EMBEDDED_ACTIVITY = 0)] = 'LAUNCHED_EMBEDDED_ACTIVITY';
})(i || (i = {})),
    (n.Z = {
        addGame(e, n) {
            f.Z.dispatch({
                type: 'RUNNING_GAME_ADD_OVERRIDE',
                pid: e
            }),
                I.default.track(D.rMx.RUNNING_GAME_OVERRIDE_ADDED, { game_name: n });
        },
        toggleOverlay(e, n) {
            let r = v.Z.getGameByName(e.name);
            if (null != r) {
                let e = y.Z.getActiveLibraryApplication(r.id);
                if (null != e) {
                    let n = T.x9(e.getFlags(), D.eHb.OVERLAY_DISABLED);
                    R.h(e.id, e.branchId, n);
                    return;
                }
            }
            f.Z.dispatch({
                type: 'RUNNING_GAME_TOGGLE_OVERLAY',
                game: e,
                newEnabledValue: n
            });
        },
        toggleDetection(e) {
            f.Z.dispatch({
                type: 'RUNNING_GAME_TOGGLE_DETECTION',
                game: e
            });
        },
        editName(e, n) {
            f.Z.dispatch({
                type: 'RUNNING_GAME_EDIT_NAME',
                game: e,
                newName: n
            });
        },
        identifyGame: (e, n) =>
            (0, _.Z)().then(
                (n) =>
                    new Promise((r, i) => {
                        if (null == n) {
                            i(Error('Game utils module not loaded'));
                            return;
                        }
                        n.identifyGame(e, (n, a) => {
                            if (0 !== n) {
                                i(Error('Error '.concat(n, ' when fetching info on ').concat(e)));
                                return;
                            }
                            if (null == a.icon || '' === a.icon || null == a.name || '' === a.name) {
                                i(Error('Did not find data on '.concat(e)));
                                return;
                            }
                            f.Z.dispatch({
                                type: 'GAME_ICON_UPDATE',
                                gameName: a.name,
                                icon: 'data:image/png;base64,'.concat(a.icon)
                            }),
                                r(a);
                        });
                    })
            ),
        getDetectableGamesSupplemental(e) {
            let { forceFetch: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { forceFetch: !1 },
                r = n ? e : e.filter(m.Z.canFetch);
            if (0 === r.length) return;
            f.Z.dispatch({
                type: 'DETECTABLE_GAME_SUPPLEMENTAL_FETCH',
                applicationIds: r
            });
            let i = async (e) => {
                try {
                    let n = await c.tn.get({
                        url: D.ANM.APPLICATIONS_GAMES_SUPPLEMENTAL,
                        query: { application_ids: e },
                        rejectWithError: !0
                    });
                    f.Z.dispatch({
                        type: 'DETECTABLE_GAME_SUPPLEMENTAL_FETCH_SUCCESS',
                        applicationIds: e,
                        supplementalGameData: n.body.supplemental_game_data
                    });
                } catch {
                    f.Z.dispatch({
                        type: 'DETECTABLE_GAME_SUPPLEMENTAL_FETCH_FAILURE',
                        applicationIds: e
                    });
                }
            };
            for (; r.length > 0; ) i(r.splice(0, P));
        },
        getDetectableGames() {
            if (v.Z.fetching || null != v.Z.lastFetched) return;
            let e = v.Z.detectableGamesEtag;
            f.Z.wait(() => {
                f.Z.dispatch({ type: 'GAMES_DATABASE_FETCH' }),
                    C.Z.get({
                        url: D.ANM.APPLICATIONS_DETECTABLE,
                        headers: { 'If-None-Match': e },
                        retries: 1,
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: l.NetworkActionNames.DETECTABLE_APPLICATIONS_FETCH,
                            properties: (n) => {
                                var r;
                                return (0, d.iG)({
                                    sent_etag: e,
                                    received_etag: null == n ? void 0 : null === (r = n.headers) || void 0 === r ? void 0 : r.etag
                                });
                            }
                        },
                        rejectWithError: !1
                    }).then(
                        (e) => {
                            let {
                                body: n,
                                headers: { etag: r }
                            } = e;
                            f.Z.dispatch({
                                type: 'GAMES_DATABASE_UPDATE',
                                games: n,
                                etag: r
                            });
                        },
                        (e) => {
                            let { status: n } = e;
                            304 === n
                                ? f.Z.dispatch({
                                      type: 'GAMES_DATABASE_UPDATE',
                                      games: [],
                                      etag: v.Z.detectableGamesEtag
                                  })
                                : f.Z.dispatch({ type: 'GAMES_DATABASE_FETCH_FAIL' });
                        }
                    );
            });
        },
        reportUnverifiedGame(e) {
            let { name: n, iconHash: r, publisher: i, distributor: a, sku: o, executableName: s } = e,
                l = (0, _.F)(s);
            if (null != l)
                c.tn
                    .post({
                        url: D.ANM.UNVERIFIED_APPLICATIONS,
                        body: {
                            name: n,
                            os: (0, A.getPlatformName)(),
                            icon: r,
                            distributor_application: k(a, o),
                            executable: l,
                            publisher: i,
                            report_version: w
                        },
                        retries: 1,
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .then((e) => {
                        let {
                            body: { name: n, hash: r, missing_data: i }
                        } = e;
                        f.Z.dispatch({
                            type: 'UNVERIFIED_GAME_UPDATE',
                            name: n,
                            hash: r,
                            missingData: i
                        });
                    });
        },
        uploadIcon(e, n, r) {
            c.tn.post({
                url: D.ANM.UNVERIFIED_APPLICATIONS_ICONS,
                body: {
                    application_name: e,
                    application_hash: n,
                    icon: r
                },
                retries: 1,
                oldFormErrors: !0,
                rejectWithError: !0
            });
        },
        deleteEntry(e) {
            f.Z.dispatch({
                type: 'RUNNING_GAME_DELETE_ENTRY',
                game: e
            });
        },
        launch: B,
        async join(e) {
            let { userId: n, sessionId: r, applicationId: i, channelId: a, messageId: o, intent: s = L.Ws.PLAY, embedded: l = !1, source: u, partyId: c, locationObject: d, analyticsLocations: p } = e;
            if (__OVERLAY__)
                return (
                    f.Z.dispatch({
                        type: 'OVERLAY_JOIN_GAME',
                        userId: n,
                        sessionId: r,
                        applicationId: i,
                        channelId: a,
                        messageId: o
                    }),
                    Promise.resolve(!0)
                );
            f.Z.dispatch({
                type: 'ACTIVITY_JOIN_LOADING',
                applicationId: i
            });
            try {
                let e = await N.Z.getJoinSecret(n, r, i, a, o);
                return (
                    M({
                        applicationId: i,
                        secret: e,
                        channelId: a,
                        intent: s,
                        embedded: l,
                        partyId: c,
                        source: u,
                        locationObject: d,
                        analyticsLocations: p,
                        joinUserId: n,
                        joinSessionId: r
                    }),
                    !0
                );
            } catch (e) {
                return (
                    f.Z.dispatch({
                        type: 'ACTIVITY_JOIN_FAILED',
                        applicationId: i
                    }),
                    !1
                );
            }
        },
        joinWithSecret: M
    });
