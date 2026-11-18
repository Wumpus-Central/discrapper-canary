n.d(t, { A: () => ef, x: () => eA });
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
    h = n(644727),
    I = n(760751),
    p = n(499785),
    m = n(403362),
    g = n(652215);
let T = (0, m.iT)() ? void 0 : window.GLOBAL_ENV.CDN_HOST;
function S(e, t) {
    return null != T ? `https://${T}${e}` : t;
}
let N = S("/detectables/games.json", g.Rsh.GAMES_DETECTABLE),
    C = S("/detectables/non-games.json", g.Rsh.NON_GAMES_DETECTABLE);
var O = n(651743),
    R = n(311043),
    L = n(773669),
    y = n(134861),
    D = n(189081),
    b = n(659096),
    v = n(129230),
    P = n(292702),
    M = n(723702),
    U = n(811091),
    w = n(144914),
    G = n(308368),
    x = n(991690),
    k = n(933958),
    F = n(734057),
    B = n(287809),
    V = n(646865),
    H = n(909206),
    j = n(795816),
    W = n(817636);
async function Y(e) {
    let t;
    if (null == e.targetApplicationId) return !1;
    let n = !1;
    try {
        ((t = await (0, W.A)(e.targetApplicationId, e.channelId)), (n = (0, V.f)()));
    } catch {
        return !1;
    }
    return (0, V.w)(n, () =>
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
                A = B.default.getCurrentUser();
            return (
                null != i &&
                null != F.A.getChannel(i) &&
                null != A &&
                null != t &&
                (H.MJ(t.id),
                await (0, j.su)({
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
var K = n(969151),
    $ = n(277344),
    X = n(55730),
    z = n(10532);
async function q(e) {
    if (!_.A.isHydrated(e))
        try {
            await (0, u.TA)(e);
        } catch {}
    return _.A.getApplication(e);
}
var Q = n(878014),
    J = n(568598),
    Z = n(628983),
    ee = n(577483),
    et = n(625180),
    en = n(860204),
    ei = n(366430),
    er = n(290863),
    ea = n(308528),
    es = n(165610),
    el = n(59636),
    eo = n(912851),
    ed = n(917550),
    ec = n(792996);
let eu = new A.A("GamesActionCreators");
function e_(e) {
    let {
        applicationId: t,
        secret: n,
        joinUrl: i,
        channelId: r,
        intent: a = ed.W.PLAY,
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
            (eu.warn("Failed to open join URL", { applicationId: t, error: e.message }),
                d.h.dispatch({ type: "ACTIVITY_JOIN_FAILED", applicationId: t }));
        }
        return Promise.resolve();
    }
    if (A) {
        let e = _.A.getApplication(t);
        if (e?.deepLinkUri != null) {
            let i = e.deepLinkUri.replace(/\/+$/, ""),
                r = `${i}${g.O3O.GAME_INVITE_FRAGMENT}${n}`;
            try {
                if (r.startsWith("http")) {
                    let e = window.open(r, "_blank");
                    (null == e || e.closed || void 0 === e.closed) &&
                        (eu.warn("Deep link popup was blocked by browser, trying location.href", { applicationId: t }),
                        (window.location.href = r));
                } else window.location.href = r;
                return Promise.resolve();
            } catch (e) {
                eu.warn("Failed to open deep link, falling back to desktop launch", {
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
            : (await eE({ applicationId: t }), !1);
    })()
        .then(async (e) => {
            if (e) return null;
            null == _.A.getApplication(t) && (await (0, u.TA)(t));
            let i = _.A.getApplication(t)?.parentId;
            return (
                null != i &&
                    P.A.waitParentConnected(i)
                        .then(() => P.A.waitParentSubscribed(i, g.ZE4.ACTIVITY_JOIN))
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
                P.A.waitConnected(t).then(
                    () => (
                        d.h.dispatch({ type: "ACTIVITY_JOIN_LOADING", applicationId: t }),
                        P.A.waitSubscribed(t, g.ZE4.ACTIVITY_JOIN)
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
function eE(e) {
    let { applicationId: t, branchId: n } = e;
    if (y.A.isConnected(t)) return Promise.resolve();
    let r = null;
    if (null == n) {
        let e = D.A.getActiveLibraryApplication(t);
        n = null != e ? e.branchId : t;
    }
    if (b.A.isLaunchable(t, n)) {
        let e = b.A.getState(t, n),
            s = D.A.getActiveLaunchOptionId(t, n);
        if (null == e) throw Error("Missing dispatch game when launching");
        let o = D.A.getLibraryApplication(t, n);
        if (null == o) throw Error("Missing library application when launching");
        r = l.Bo.post({
            url: g.Rsh.OAUTH2_AUTHORIZE,
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
            .then((t) => P.A.launchDispatchApplication(e, t, L.default.locale, o.getBranchName(), s));
    } else {
        let e = _.A.getApplication(t),
            n = I.A.getDetectableGame(t) ?? R.A.getGame(U.default.cast(t)) ?? e;
        if (null != n) {
            r = P.A.launch(n);
            let i = I.A.getOfficialGame(e);
            null != i && i.id !== t && (r = r.catch(() => P.A.launch(i)));
        } else r = P.A.launchGame(t);
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
                  (eo.A.show(g.kqX.LAUNCH_GAME_FAILURE, ec.intl.string(ec.t.YZEBdj)),
                      d.h.dispatch({ type: "GAME_LAUNCH_FAIL", applicationId: t, error: s }));
              }))
        : (d.h.dispatch({ type: "GAME_LAUNCH_FAIL", applicationId: t, error: s }), Promise.reject(s));
}
function eA(e) {
    d.h.dispatch({ type: "RUNNING_GAME_SET_DEBUG_GAME", game: e });
}
let ef = {
    addGame(e, t) {
        (d.h.dispatch({ type: "RUNNING_GAME_ADD_OVERRIDE", pid: e }),
            v.default.track(g.HAw.RUNNING_GAME_OVERRIDE_ADDED, { game_name: t }));
    },
    toggleOverlay(e, t, n) {
        let i = (0, h.Zh)(e),
            r = I.A.findGame(i);
        if (null != r) {
            let e = D.A.getActiveLibraryApplication(r.id);
            if (null != e) {
                let i = e.getFlags(),
                    r = s.Lt(i, g.hM6.OVERLAY_DISABLED);
                t && r !== t && (i = s.PQ(i, g.hM6.OVERLAY_DISABLED));
                let a = s.Lt(i, g.hM6.OVERLAY_V3_DISABLED);
                (null != n && n !== a && (i = s.PQ(i, g.hM6.OVERLAY_V3_DISABLED)), el.V(e.id, e.branchId, i));
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
                              (eu.log("Identified game: ", {
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
                    url: null != T ? `https://${T}/detectables/games-v1.json` : N,
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
                url: g.Rsh.GAMES_BLOCKLIST,
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
                        : (eu.error("Failed to fetch games blocklist"),
                          d.h.dispatch({ type: "GAMES_BLOCKLIST_FETCH_FAIL" }));
                },
            ));
    },
    getDetectableNonGames() {
        if (!f.A.canFetch()) return;
        let e = f.A.etag;
        (d.h.dispatch({ type: "NON_GAMES_DATABASE_FETCH" }),
            p.A.get({
                url: null != T ? `https://${T}/detectables/non-games-v1.json` : C,
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
            let t = await q(e.applicationId);
            return (0, ei.U4)(t)
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
                          u = F.A.getChannel(i),
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
                      if (r || !(0, ei.It)(t).has(x.U.MAIN))
                          return (0, z.y)({
                              applicationId: n,
                              application: t,
                              analyticsContext: E,
                              launch: A,
                              preferAppChannel: r,
                              channelId: a,
                          });
                      (0, ee.A)(i);
                      try {
                          let e = await et.A.launchFrame({
                              applicationId: n,
                              surface: null != u && null != _ ? { type: x.U.MAIN, channelId: u.id, guildId: _ } : es.sd,
                              analyticsContext: E,
                              launch: A,
                          });
                          if (null != u) {
                              let t = (0, J.Gg)({ applicationId: n, id: e });
                              null != Z.A.getParticipant(u.id, t) && (0, $.A)(u.id, t);
                          }
                          return !0;
                      } catch {
                          return !1;
                      }
                  })(e, t)
                : !(0, ei.VS)(t) &&
                      (null != t && (0, Q.W)(t, x.U.MAIN)
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
                                    return k.Ay.getEmbeddedActivitiesForChannel(r).some((e) => e.applicationId === i)
                                        ? (0, c.A)({ applicationId: i, activityChannelId: r, ...l })
                                        : Y({
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
                                    n = await ea.A.openPrivateChannel({ recipientIds: o });
                                } catch {
                                    return !1;
                                }
                                return Y({
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
            !!(0, w.A)({
                LibraryApplicationStore: D.A,
                LaunchableGameStore: O.A,
                DispatchApplicationStore: b.A,
                ConnectedAppsStore: y.A,
                applicationId: n,
            }) && (await eE({ applicationId: n }), !0)
        );
    },
    launchGame: eE,
    async join(e) {
        let {
            userId: t,
            sessionId: n,
            applicationId: i,
            channelId: r,
            messageId: a,
            intent: s = ed.W.PLAY,
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
                l = e.activity ?? er.A.getApplicationActivity(t, i);
            if (!(e.embedded ?? (0, X.A)(l, g.jUm.EMBEDDED)) || !(0, ei.VS)(await q(i))) return null;
            let o = k.Ay.getEmbeddedActivityForUserId(t, i, !0);
            return null != o
                ? (0, c.A)({
                      applicationId: i,
                      activityChannelId: (0, K.H)(o.location),
                      source: e.source,
                      locationObject: e.locationObject ?? {},
                      analyticsLocations: e.analyticsLocations ?? [],
                  })
                : (0, en.A)({
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
            let e = (0, M.tn)(),
                { secret: d, joinUrl: c } = await G.A.getJoinSecret(t, n, i, r, a);
            return (
                null == E &&
                    e_({
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
    joinWithSecret: e_,
};
