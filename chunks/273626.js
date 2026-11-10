n.d(t, { A: () => eE, x: () => e_ });
var i = n(488428),
    r = n(613412),
    a = n(179771),
    s = n(665260),
    l = n(620632),
    o = n(933681),
    d = n(73153),
    c = n(211449),
    u = n(627363),
    _ = n(587895),
    E = n(306044),
    A = n(626584),
    f = n(953384),
    h = n(397369),
    I = n(760751),
    p = n(499785),
    m = n(403362),
    T = n(652215);
let g = (0, m.iT)() ? void 0 : window.GLOBAL_ENV.CDN_HOST;
function S(e, t) {
    return null != g ? `https://${g}${e}` : t;
}
let N = S("/detectables/games.json", T.Rsh.GAMES_DETECTABLE),
    C = S("/detectables/non-games.json", T.Rsh.NON_GAMES_DETECTABLE);
var O = n(651743),
    R = n(773669),
    L = n(134861),
    y = n(189081),
    D = n(659096),
    b = n(129230),
    v = n(292702),
    P = n(723702),
    M = n(144914),
    U = n(308368),
    w = n(991690),
    G = n(933958),
    x = n(734057),
    k = n(287809),
    F = n(646865),
    B = n(909206),
    V = n(795816),
    H = n(817636);
async function j(e) {
    let t;
    if (null == e.targetApplicationId) return !1;
    let n = !1;
    try {
        ((t = await (0, H.A)(e.targetApplicationId, e.channelId)), (n = (0, F.f)()));
    } catch {
        return !1;
    }
    return (0, F.w)(n, () =>
        (async function (e) {
            let {
                    targetApplication: t,
                    locationObject: n,
                    channelId: i,
                    analyticsLocations: r,
                    componentId: a,
                    commandOrigin: s,
                    sectionName: l,
                    source: o,
                    onExecutedCallback: d,
                    referrerId: c,
                    customId: u,
                    inviterUserId: _,
                    onConfirmActivityLaunchChecksAlertOpen: E,
                } = e,
                A = k.default.getCurrentUser();
            return (
                null != i &&
                null != x.A.getChannel(i) &&
                null != A &&
                null != t &&
                (B.MJ(t.id),
                await (0, V.su)({
                    channelId: i,
                    applicationId: t.id,
                    isStart: !0,
                    componentId: a,
                    commandOrigin: s,
                    sectionName: l,
                    locationObject: n,
                    analyticsLocations: r,
                    source: o,
                    onExecutedCallback: d,
                    referrerId: c,
                    customId: u,
                    inviterUserId: _,
                    onConfirmActivityLaunchChecksAlertOpen: E,
                }))
            );
        })({ ...e, targetApplication: t }),
    );
}
var W = n(969151),
    Y = n(277344),
    K = n(55730),
    $ = n(10532);
async function X(e) {
    if (!_.A.isHydrated(e))
        try {
            await (0, u.TA)(e);
        } catch {}
    return _.A.getApplication(e);
}
var z = n(878014),
    q = n(568598),
    Q = n(628983),
    Z = n(577483),
    J = n(625180),
    ee = n(860204),
    et = n(366430),
    en = n(290863),
    ei = n(308528),
    er = n(165610),
    ea = n(59636),
    es = n(912851),
    el = n(917550),
    eo = n(792996);
let ed = new A.A("GamesActionCreators");
function ec(e) {
    let {
        applicationId: t,
        secret: n,
        joinUrl: i,
        channelId: r,
        intent: a = el.W.PLAY,
        embedded: s = !1,
        source: l,
        locationObject: o,
        analyticsLocations: E,
        preferDeepLink: A = !1,
    } = e;
    if (null != i) {
        try {
            if (i.startsWith("http")) {
                let e = window.open(i, "_blank");
                (null == e || e.closed || void 0 === e.closed) && (window.location.href = i);
            } else window.location.href = i;
        } catch (e) {
            (ed.warn("Failed to open join URL", { applicationId: t, error: e.message }),
                d.h.dispatch({ type: "ACTIVITY_JOIN_FAILED", applicationId: t }));
        }
        return Promise.resolve();
    }
    if (A) {
        let e = _.A.getApplication(t);
        if (e?.deepLinkUri != null) {
            let i = e.deepLinkUri.replace(/\/+$/, ""),
                r = `${i}${T.O3O.GAME_INVITE_FRAGMENT}${n}`;
            try {
                if (r.startsWith("http")) {
                    let e = window.open(r, "_blank");
                    (null == e || e.closed || void 0 === e.closed) &&
                        (ed.warn("Deep link popup was blocked by browser, trying location.href", { applicationId: t }),
                        (window.location.href = r));
                } else window.location.href = r;
                return Promise.resolve();
            } catch (e) {
                ed.warn("Failed to open deep link, falling back to desktop launch", {
                    applicationId: t,
                    error: e.message,
                });
            }
        }
    }
    (async function () {
        return s
            ? (0, c.A)({
                  applicationId: t,
                  activityChannelId: r ?? void 0,
                  source: l,
                  locationObject: o ?? {},
                  analyticsLocations: E ?? [],
              })
            : (await eu({ applicationId: t }), !1);
    })()
        .then(async (e) => {
            if (e) return null;
            null == _.A.getApplication(t) && (await (0, u.TA)(t));
            let i = _.A.getApplication(t)?.parentId;
            return (
                null != i &&
                    v.A.waitParentConnected(i)
                        .then(() => v.A.waitParentSubscribed(i, T.ZE4.ACTIVITY_JOIN))
                        .then(() => {
                            d.h.dispatch({
                                type: "ACTIVITY_JOIN",
                                applicationId: t,
                                parentApplicationId: i,
                                secret: n,
                                intent: a,
                                embedded: s,
                            });
                        })
                        .catch(() => {}),
                d.h.dispatch({ type: "ACTIVITY_JOIN_LOADING", applicationId: t }),
                v.A.waitConnected(t).then(
                    () => (
                        d.h.dispatch({ type: "ACTIVITY_JOIN_LOADING", applicationId: t }),
                        v.A.waitSubscribed(t, T.ZE4.ACTIVITY_JOIN)
                    ),
                )
            );
        })
        .then(() => {
            d.h.dispatch({
                type: "ACTIVITY_JOIN",
                applicationId: t,
                parentApplicationId: null,
                secret: n,
                intent: a,
                embedded: s,
            });
        })
        .catch(() => d.h.dispatch({ type: "ACTIVITY_JOIN_FAILED", applicationId: t }));
}
function eu(e) {
    let { applicationId: t, branchId: n } = e;
    if (L.A.isConnected(t)) return Promise.resolve();
    let r = null;
    if (null == n) {
        let e = y.A.getActiveLibraryApplication(t);
        n = null != e ? e.branchId : t;
    }
    if (D.A.isLaunchable(t, n)) {
        let e = D.A.getState(t, n),
            s = y.A.getActiveLaunchOptionId(t, n);
        if (null == e) throw Error("Missing dispatch game when launching");
        let o = y.A.getLibraryApplication(t, n);
        if (null == o) throw Error("Missing library application when launching");
        r = l.Bo.post({
            url: T.Rsh.OAUTH2_AUTHORIZE,
            query: { client_id: t, response_type: "token", scope: [a.F.IDENTIFY].join(" ") },
            retries: 3,
            body: { authorize: !0 },
            oldFormErrors: !0,
            rejectWithError: (0, l.fT)(),
        })
            .then(
                (e) => {
                    let t = e.body.location.split(/#|\?/),
                        n = i.qg(t[t.length - 1]);
                    if ("invalid_request" === n.error) return null;
                    if (null != n.error)
                        throw Error(`OAuth2 Error: ${n.error}: ${n.error_description ?? "unknown error"}`);
                    return n.access_token;
                },
                (e) => {
                    if (404 === e.status) return null;
                    throw e;
                },
            )
            .then((t) => v.A.launchDispatchApplication(e, t, R.default.locale, o.getBranchName(), s));
    } else {
        let e = _.A.getApplication(t);
        if (null != e) {
            r = v.A.launch(e);
            let n = I.A.getOfficialGame(e);
            null != n && n.id !== t && (r = r.catch(() => v.A.launch(n)));
        } else r = v.A.launchGame(t);
    }
    let s = Error("game not found");
    return null != r
        ? (d.h.dispatch({ type: "LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE", applicationId: t, branchId: n }),
          d.h.dispatch({ type: "GAME_LAUNCH_START", applicationId: t }),
          r
              .then((e) => {
                  d.h.dispatch({ type: "GAME_LAUNCH_SUCCESS", applicationId: t, pids: e });
              })
              .catch((e) => {
                  (es.A.show(T.kqX.LAUNCH_GAME_FAILURE, eo.intl.string(eo.t.YZEBdj)),
                      d.h.dispatch({ type: "GAME_LAUNCH_FAIL", applicationId: t, error: s }));
              }))
        : (d.h.dispatch({ type: "GAME_LAUNCH_FAIL", applicationId: t, error: s }), Promise.reject(s));
}
function e_(e) {
    d.h.dispatch({ type: "RUNNING_GAME_SET_DEBUG_GAME", game: e });
}
let eE = {
    addGame(e, t) {
        (d.h.dispatch({ type: "RUNNING_GAME_ADD_OVERRIDE", pid: e }),
            b.default.track(T.HAw.RUNNING_GAME_OVERRIDE_ADDED, { game_name: t }));
    },
    toggleOverlay(e, t, n) {
        let i = (0, h.Zh)(e),
            r = I.A.findGame(i);
        if (null != r) {
            let e = y.A.getActiveLibraryApplication(r.id);
            if (null != e) {
                let i = e.getFlags(),
                    r = s.Lt(i, T.hM6.OVERLAY_DISABLED);
                t && r !== t && (i = s.PQ(i, T.hM6.OVERLAY_DISABLED));
                let a = s.Lt(i, T.hM6.OVERLAY_V3_DISABLED);
                (null != n && n !== a && (i = s.PQ(i, T.hM6.OVERLAY_V3_DISABLED)), ea.V(e.id, e.branchId, i));
                return;
            }
        }
        d.h.dispatch({
            type: "RUNNING_GAME_TOGGLE_OVERLAY",
            game: i,
            newLegacyOverlayEnabledValue: t,
            newOverlayV3EnabledValue: n,
        });
    },
    toggleDetection(e) {
        d.h.dispatch({ type: "RUNNING_GAME_TOGGLE_DETECTION", game: e });
    },
    editName(e, t) {
        d.h.dispatch({ type: "RUNNING_GAME_EDIT_NAME", game: e, newName: t });
    },
    identifyGame: (e, t) =>
        (0, E.A)().then(
            (t) =>
                new Promise((n, i) => {
                    null == t
                        ? i(Error("Game utils module not loaded"))
                        : t.identifyGame(e, (t, r) => {
                              (ed.log("Identified game: ", {
                                  status: t,
                                  name: r.name,
                                  iconHash: r.iconHash,
                                  sku: r.sku,
                                  executableName: r.executableName,
                                  distributor: r.distributor,
                                  publisher: r.publisher,
                              }),
                              0 !== t)
                                  ? i(Error(`Error ${t} when fetching info on ${e}`))
                                  : null == r.icon || "" === r.icon || null == r.name || "" === r.name
                                    ? i(Error(`Did not find data on ${e}`))
                                    : n(r);
                          });
                }),
        ),
    getDetectableGames: () =>
        (async function () {
            let e;
            if (!I.A.canFetchDetectableGames()) return;
            let t = I.A.detectableGamesEtag;
            d.h.dispatch({ type: "GAMES_DATABASE_FETCH" });
            try {
                e = await p.A.get({
                    url: null != g ? `https://${g}/detectables/games-v1.json` : N,
                    headers: { "If-None-Match": t },
                    retries: 1,
                    oldFormErrors: !0,
                    trackedActionData: {
                        event: r.NetworkActionNames.DETECTABLE_APPLICATIONS_FETCH,
                        properties: (e) => (0, o.e0)({ sent_etag: t, received_etag: e?.headers?.etag }),
                    },
                    rejectWithError: (0, l.fT)(),
                });
            } catch (e) {
                304 === e.status
                    ? d.h.dispatch({ type: "GAMES_DATABASE_UPDATE", games: [], etag: I.A.detectableGamesEtag })
                    : d.h.dispatch({ type: "GAMES_DATABASE_FETCH_FAIL" });
                return;
            }
            d.h.dispatch({ type: "GAMES_DATABASE_UPDATE", games: e.body, etag: e.headers.etag });
        })(),
    getDetectableBlocklist() {
        if (!I.A.canFetchExecutableBlocklist()) return;
        let e = I.A.blocklistEtag;
        (d.h.dispatch({ type: "GAMES_BLOCKLIST_FETCH" }),
            l.Bo.get({
                url: T.Rsh.GAMES_BLOCKLIST,
                headers: { "If-None-Match": e },
                oldFormErrors: !0,
                rejectWithError: (0, l.fT)(),
            }).then(
                (e) => {
                    let {
                        body: t,
                        headers: { etag: n },
                    } = e;
                    d.h.dispatch({
                        type: "GAMES_BLOCKLIST_UPDATE",
                        executables: t.executables ?? [],
                        patterns: t.patterns ?? [],
                        etag: n,
                    });
                },
                (e) => {
                    let { status: t } = e;
                    304 === t
                        ? d.h.dispatch({
                              type: "GAMES_BLOCKLIST_UPDATE",
                              executables: [],
                              patterns: [],
                              etag: I.A.blocklistEtag,
                          })
                        : (ed.error("Failed to fetch games blocklist"),
                          d.h.dispatch({ type: "GAMES_BLOCKLIST_FETCH_FAIL" }));
                },
            ));
    },
    getDetectableNonGames() {
        if (!f.A.canFetch()) return;
        let e = f.A.etag;
        (d.h.dispatch({ type: "NON_GAMES_DATABASE_FETCH" }),
            p.A.get({
                url: null != g ? `https://${g}/detectables/non-games-v1.json` : C,
                headers: { "If-None-Match": e },
                retries: 1,
                trackedActionData: {
                    event: r.NetworkActionNames.DETECTABLE_NON_GAMES_FETCH,
                    properties: (t) => (0, o.e0)({ sent_etag: e, received_etag: t?.headers?.etag }),
                },
                rejectWithError: (0, l.fT)(),
            }).then(
                (e) => {
                    let {
                        body: t,
                        headers: { etag: n },
                    } = e;
                    d.h.dispatch({ type: "NON_GAMES_DATABASE_UPDATE", nonGames: t, etag: n });
                },
                (e) => {
                    let { status: t } = e;
                    304 === t
                        ? d.h.dispatch({ type: "NON_GAMES_DATABASE_UPDATE", nonGames: [], etag: f.A.etag })
                        : d.h.dispatch({ type: "NON_GAMES_DATABASE_FETCH_FAIL" });
                },
            ));
    },
    deleteEntry(e) {
        d.h.dispatch({ type: "RUNNING_GAME_DELETE_ENTRY", game: e });
    },
    launch: async function (e) {
        let t = await (async function (e) {
            let t = await X(e.applicationId);
            return (0, et.U4)(t)
                ? (async function (e, t) {
                      let {
                              applicationId: n,
                              channelId: i,
                              fromLink: r = !1,
                              linkChannelId: a,
                              customId: s,
                              referrerId: l,
                              source: o,
                              inviterUserId: d,
                              analyticsLocations: c = [],
                          } = e,
                          u = x.A.getChannel(i),
                          _ = u?.getGuildId(),
                          E = {
                              isStart: !0,
                              analyticsLocations: c,
                              source: o,
                              inviterUserId: d,
                              channelId: i,
                              guildId: _,
                          },
                          A = { customId: s, referrerId: l };
                      if (r || !(0, et.It)(t).has(w.U.MAIN))
                          return (0, $.y)({
                              applicationId: n,
                              application: t,
                              analyticsContext: E,
                              launch: A,
                              preferAppChannel: r,
                              channelId: a,
                          });
                      (0, Z.A)(i);
                      try {
                          let e = await J.A.launchFrame({
                              applicationId: n,
                              surface: null != u && null != _ ? { type: w.U.MAIN, channelId: u.id, guildId: _ } : er.sd,
                              analyticsContext: E,
                              launch: A,
                          });
                          if (null != u) {
                              let t = (0, q.Gg)({ applicationId: n, id: e });
                              null != Q.A.getParticipant(u.id, t) && (0, Y.A)(u.id, t);
                          }
                          return !0;
                      } catch {
                          return !1;
                      }
                  })(e, t)
                : !(0, et.VS)(t) &&
                      (null != t && (0, z.W)(t, w.U.MAIN)
                          ? (async function (e, t) {
                                let n,
                                    {
                                        applicationId: i,
                                        channelId: r,
                                        locationObject: a = {},
                                        analyticsLocations: s = [],
                                    } = e,
                                    l = {
                                        locationObject: a,
                                        analyticsLocations: s,
                                        componentId: e.componentId,
                                        sectionName: e.sectionName,
                                        source: e.source,
                                        customId: e.customId,
                                        referrerId: e.referrerId,
                                        inviterUserId: e.inviterUserId,
                                    };
                                if (null != r)
                                    return G.Ay.getEmbeddedActivitiesForChannel(r).some((e) => e.applicationId === i)
                                        ? (0, c.A)({ applicationId: i, activityChannelId: r, ...l })
                                        : j({
                                              targetApplicationId: i,
                                              channelId: r,
                                              commandOrigin: e.commandOrigin,
                                              onConfirmActivityLaunchChecksAlertOpen:
                                                  e.onConfirmActivityLaunchChecksAlertOpen,
                                              ...l,
                                          });
                                let o = t.bot?.id;
                                if (null == o) return !1;
                                try {
                                    n = await ei.A.openPrivateChannel({ recipientIds: o });
                                } catch {
                                    return !1;
                                }
                                return j({
                                    targetApplicationId: i,
                                    channelId: n,
                                    commandOrigin: e.commandOrigin,
                                    onConfirmActivityLaunchChecksAlertOpen: e.onConfirmActivityLaunchChecksAlertOpen,
                                    ...l,
                                });
                            })(e, t)
                          : null);
        })(e);
        if (null != t) return t;
        let { applicationId: n } = e;
        return (
            !!(0, M.A)({
                LibraryApplicationStore: y.A,
                LaunchableGameStore: O.A,
                DispatchApplicationStore: D.A,
                ConnectedAppsStore: L.A,
                applicationId: n,
            }) && (await eu({ applicationId: n }), !0)
        );
    },
    launchGame: eu,
    async join(e) {
        let {
            userId: t,
            sessionId: n,
            applicationId: i,
            channelId: r,
            messageId: a,
            intent: s = el.W.PLAY,
            embedded: l = !1,
            source: o,
            locationObject: u,
            analyticsLocations: _,
            remotePartyId: E,
        } = e;
        if (__OVERLAY__)
            return (
                d.h.dispatch({
                    type: "OVERLAY_JOIN_GAME",
                    userId: t,
                    sessionId: n,
                    applicationId: i,
                    channelId: r,
                    messageId: a,
                }),
                Promise.resolve(!0)
            );
        let A = await (async function (e) {
            let { userId: t, sessionId: n, applicationId: i, channelId: r, messageId: a, intent: s } = e,
                l = e.activity ?? en.A.getApplicationActivity(t, i);
            if (!(e.embedded ?? (0, K.A)(l, T.jUm.EMBEDDED)) || !(0, et.VS)(await X(i))) return null;
            let o = G.Ay.getEmbeddedActivityForUserId(t, i, !0);
            return null != o
                ? (0, c.A)({
                      applicationId: i,
                      activityChannelId: (0, W.H)(o.location),
                      source: e.source,
                      locationObject: e.locationObject ?? {},
                      analyticsLocations: e.analyticsLocations ?? [],
                  })
                : (0, ee.A)({
                      application: { id: i },
                      userId: t,
                      activity: l,
                      sessionId: n,
                      channelId: r,
                      messageId: a,
                      intent: s,
                  });
        })(e);
        if (null != A) return A;
        d.h.dispatch({ type: "ACTIVITY_JOIN_LOADING", applicationId: i, remotePartyId: E });
        try {
            let e = (0, P.tn)(),
                { secret: d, joinUrl: c } = await U.A.getJoinSecret(t, n, i, r, a);
            return (
                null == E &&
                    ec({
                        applicationId: i,
                        secret: d,
                        joinUrl: c,
                        channelId: r,
                        intent: s,
                        embedded: l,
                        source: o,
                        locationObject: u,
                        analyticsLocations: _,
                        preferDeepLink: e,
                    }),
                !0
            );
        } catch (e) {
            return (d.h.dispatch({ type: "ACTIVITY_JOIN_FAILED", applicationId: i }), !1);
        }
    },
    joinWithSecret: ec,
};
