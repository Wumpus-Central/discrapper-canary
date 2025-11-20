n.d(t, {
    $h: () => e_,
    G6: () => el,
    Gj: () => eI,
    W5: () => ey,
    a_: () => eT,
    cG: () => es,
    gC: () => ev,
    kv: () => ep,
    mW: () => ef,
    nJ: () => eS,
    pu: () => eE,
    sN: () => eg,
    tg: () => eO,
    ux: () => eb,
    w1: () => em,
}),
    n(997841),
    n(388685),
    n(415506);
var r = n(990547),
    i = n(252258),
    a = n(95015),
    o = n(544891),
    s = n(704215),
    l = n(570140),
    c = n(668781),
    u = n(493683),
    d = n(475179),
    f = n(447543),
    _ = n(904245),
    p = n(479531),
    h = n(911969),
    m = n(213459),
    g = n(667204),
    E = n(812236),
    b = n(812206),
    y = n(104919),
    O = n(413523),
    v = n(358221),
    I = n(605236),
    T = n(233764),
    S = n(375824),
    A = n(48131),
    C = n(591472),
    N = n(957730),
    R = n(48854),
    P = n(522474),
    D = n(788983),
    w = n(835873),
    L = n(973616),
    x = n(314897),
    M = n(592125),
    k = n(430824),
    j = n(496675),
    U = n(594174),
    G = n(979651),
    B = n(626135),
    Z = n(823379),
    F = n(573261),
    V = n(595519),
    H = n(317381),
    Y = n(882347),
    W = n(16609),
    K = n(224189),
    z = n(374065),
    q = n(917107),
    X = n(89425),
    Q = n(275920),
    J = n(701488),
    $ = n(918559),
    ee = n(981631),
    et = n(674563),
    en = n(921944),
    er = n(245335),
    ei = n(388032);
function ea(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function eo(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                ea(e, t, n[t]);
            });
    }
    return e;
}
function es(e) {
    let t = H.ZP.getSelfEmbeddedActivityForLocation(e);
    null != t &&
        ef({
            location: t.location,
            applicationId: t.applicationId,
            showFeedback: !1,
        });
}
async function el(e) {
    var t, n;
    let {
            channelId: r,
            applicationId: a,
            isStart: o,
            analyticsLocations: s,
            locationObject: c,
            embeddedActivitiesManager: u,
            componentId: d,
            commandOrigin: f,
            sectionName: _,
            source: h,
            onExecutedCallback: m,
            referrerId: g,
            customId: E,
            inviterUserId: b,
            onConfirmActivityLaunchChecksAlertOpen: y,
        } = e,
        O = M.Z.getChannel(r),
        v = null != (t = null == O ? void 0 : O.getGuildId()) ? t : void 0;
    if (null == v && !(null != (n = null == O ? void 0 : O.isPrivate()) && n)) return !1;
    let I = (0, R.r)();
    try {
        P.Z.getWindowOpen(ee.KJ3.ACTIVITY_POPOUT) && (0, D.xv)(ee.KJ3.ACTIVITY_POPOUT);
        let e = C.Z.getConnectedFrame();
        null != e && A.Z.stopFrame({ applicationId: e.applicationId }),
            l.Z.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_START",
                nonce: I,
                applicationId: a,
                channelId: null != r ? r : null,
                componentId: d,
                analyticsLocations: s,
                source: h,
                commandOrigin: f,
                inviterUserId: b,
                launchParams: {
                    customId: E,
                    referrerId: g,
                },
            });
        let t = await eT(a, null != r ? r : void 0);
        l.Z.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET",
            applicationId: a,
            channelId: null != r ? r : null,
            proxyTicket: t,
        });
        let n = U.default.getCurrentUser();
        if (
            (null != n &&
                (0, Q.Z)({
                    type: o ? ee.q5t.LAUNCH : ee.q5t.JOIN,
                    userId: null == n ? void 0 : n.id,
                    guildId: v,
                    channelId: r,
                    channelType: null == O ? void 0 : O.type,
                    applicationId: a,
                    locationObject: c,
                    analyticsLocations: null != s ? s : [],
                    source: h,
                    referrerId: g,
                    inviterUserId: b,
                }),
            o)
        ) {
            if (null == r || !ec(a, O)) throw new T.Z(T.Z.Reasons.INVALID_CHANNEL);
            let e = await eu({
                applicationId: a,
                nonce: I,
                channelId: r,
                guildId: v,
                commandOrigin: f,
                sectionName: _,
                source: h,
                onExecutedCallback: m,
                onConfirmActivityLaunchChecksAlertOpen: y,
                embeddedActivitiesManager: u,
            });
            if ("failure" === e.result)
                if (4 === e.reason)
                    return (
                        l.Z.dispatch({
                            type: "EMBEDDED_ACTIVITY_LAUNCH_CANCEL",
                            nonce: I,
                            applicationId: a,
                            channelId: null != r ? r : null,
                        }),
                        !1
                    );
                else throw new T.Z(T.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
        } else {
            let e = await ed({
                applicationId: a,
                channelId: r,
                embeddedActivitiesManager: u,
                isStart: o,
                guildId: v,
            });
            if ((null == m || m(), "failure" === e.result))
                throw new T.Z(T.Z.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED, e.reason);
        }
        l.Z.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS",
            nonce: I,
            applicationId: a,
            channelId: null != r ? r : null,
        });
    } catch (t) {
        let e = null != v ? i.E.GUILD_CHANNEL : i.E.PRIVATE_CHANNEL;
        return (
            l.Z.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                nonce: I,
                applicationId: a,
                channelId: null != r ? r : null,
                guildId: null != v ? v : null,
                isStart: o,
                error: t instanceof T.Z || t instanceof p.Z || t instanceof S.Z ? t : new p.Z(t),
                locationKind: e,
            }),
            !1
        );
    }
    return !0;
}
function ec(e, t) {
    let n = (null == t ? void 0 : t.type) === ee.d4z.GUILD_VOICE,
        r = b.Z.getApplication(e),
        i = null != r && (0, a.yE)(r.flags, ee.udG.EMBEDDED),
        o = (0, V.l5)(t);
    return (n && i) || o;
}
async function eu(e) {
    let {
            applicationId: t,
            nonce: n,
            channelId: r,
            guildId: i,
            commandOrigin: a,
            sectionName: o,
            source: s,
            onExecutedCallback: l,
            onConfirmActivityLaunchChecksAlertOpen: c,
            embeddedActivitiesManager: u,
        } = e,
        d = null;
    try {
        d = await (0, E.ZP)(r, t);
    } catch (e) {
        if (e.message === E.sV)
            return {
                result: "failure",
                reason: 1,
            };
        throw e;
    }
    let f = d.handler !== h.VC.APP_HANDLER;
    if (!(f || et.Yq.includes(t))) {
        null != r &&
            (await (0, m.FN)({
                type: "channel",
                channelId: r,
            })),
            await (0, m.FN)({ type: "user" });
        let e = M.Z.getChannel(r),
            { isAuthorized: n } = await (0, y.L)({
                applicationId: t,
                channel: e,
                commandIntegrationTypes: d.integration_types,
            });
        if (!n)
            return {
                result: "failure",
                reason: 2,
            };
    }
    let _ = M.Z.getChannel(r),
        O = null != i ? k.Z.getGuild(i) : null;
    if (null == _)
        return {
            result: "failure",
            reason: 3,
        };
    if (f) {
        let e,
            n = b.Z.getApplication(t),
            r = H.ZP.getCurrentEmbeddedActivity();
        (null == r ? void 0 : r.applicationId) != null &&
            (e = b.Z.getApplication(null == r ? void 0 : r.applicationId));
        let i = U.default.getCurrentUser();
        if (
            null != i &&
            !(await (0, Y.p)({
                applicationId: t,
                application: n,
                channel: _,
                currentEmbeddedApplication: e,
                embeddedActivitiesManager: u,
                user: i,
                onConfirmActivityLaunchChecksAlertOpen: c,
                shouldClosePopoutOnLeaveCurrentEmbeddedApplication: !1,
            }))
        )
            return {
                result: "failure",
                reason: 4,
            };
    }
    return (
        await new Promise((e, c) => {
            (0, g.Z)({
                command: d,
                optionValues: {},
                context: {
                    channel: _,
                    guild: O,
                },
                commandOrigin: a,
                sectionName: o,
                source: s,
                interactionLifecycleOptionsFactory: () => ({
                    nonce: n,
                    onSuccess: () => {
                        null == l || l(), e();
                    },
                    onFailure: (e, n, a, o) => {
                        null == l || l(),
                            B.default.track(ee.rMx.ACTIVITY_INTERACTION_CALLBACK_ERROR, {
                                channel_id: r,
                                guild_id: i,
                                application_id: t,
                                channel_type: null == _ ? void 0 : _.type,
                                error_code: e,
                                error_message: n,
                                error_status: a,
                                error_reason_code: o,
                                source: s,
                            }),
                            null != e && null != n && null != a
                                ? c(
                                      new p.Z({
                                          status: a,
                                          body: {
                                              message: n,
                                              code: e,
                                          },
                                      }),
                                  )
                                : null != o && o in S.Z.ReasonCodes
                                  ? c(new S.Z(o))
                                  : c(new S.Z(S.Z.ReasonCodes.UNKNOWN));
                    },
                }),
            });
        }),
        { result: "success" }
    );
}
async function ed(e) {
    let t,
        { applicationId: n, channelId: i, embeddedActivitiesManager: a, isStart: o, guildId: s } = e,
        l = x.default.getSessionId(),
        u = U.default.getCurrentUser(),
        d = n;
    if (null == d)
        return {
            result: "failure",
            reason: 1,
        };
    let f = await (0, K.Z)(d, i);
    if (null == u || null == f)
        return {
            result: "failure",
            reason: 2,
        };
    if (null == i)
        return {
            result: "failure",
            reason: 3,
        };
    let _ = M.Z.getChannel(i);
    if (null == _)
        return {
            result: "failure",
            reason: 3,
        };
    let p = (0, z.e4)({
        channelId: i,
        ChannelStore: M.Z,
        GuildStore: k.Z,
        PermissionStore: j.Z,
        VoiceStateStore: G.Z,
    });
    if (p !== z.jy.CAN_LAUNCH) {
        let e = 4;
        return (
            p === z.jy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION
                ? ((e = 5), (0, w.w)())
                : p === z.jy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS &&
                  ((e = 6),
                  c.Z.show({
                      title: ei.intl.string(ei.t["IOy+I5"]),
                      body: ei.intl.string(ei.t.UXoQTp),
                      hideActionSheet: !1,
                  })),
            {
                result: "failure",
                reason: e,
            }
        );
    }
    let h = H.ZP.getCurrentEmbeddedActivity();
    if (
        ((null == h ? void 0 : h.applicationId) != null &&
            (t = b.Z.getApplication(null == h ? void 0 : h.applicationId)),
        !(
            !o ||
            (await (0, Y.p)({
                applicationId: n,
                application: f,
                channel: _,
                currentEmbeddedApplication: t,
                embeddedActivitiesManager: a,
                user: u,
            }))
        ))
    )
        return {
            result: "failure",
            reason: 7,
        };
    if (null != _) {
        let e = (0, q.Z)(_.id),
            n = J.wP.includes(_.type);
        if (e) {
            if (
                !(await (0, X.Z)({
                    channelId: _.id,
                    bypassChangeModal: null != t,
                }))
            )
                return {
                    result: "failure",
                    reason: 8,
                };
        } else if (!(0, V.WS)(_) || !n)
            return {
                result: "failure",
                reason: 9,
            };
    }
    let m = {
        trackedActionData: {
            event: r.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
            properties: {
                guild_id: s,
                channel_id: i,
                application_id: n,
                session_id: l,
            },
        },
        retries: 3,
        oldFormErrors: !0,
        rejectWithError: !0,
    };
    return null != i
        ? (await F.Z.post(
              eo(
                  {
                      url: ee.ANM.ACTIVITY_CHANNEL_LAUNCH(i, n),
                      body: {
                          session_id: l,
                          guild_id: null != s ? s : void 0,
                      },
                  },
                  m,
              ),
          ),
          { result: "success" })
        : {
              result: "failure",
              reason: 0,
          };
}
function ef(e) {
    let { location: t, applicationId: n, showFeedback: r = !0 } = e,
        i = H.ZP.getSelfEmbeddedActivityForLocation(t);
    l.Z.dispatch({
        type: "EMBEDDED_ACTIVITY_CLOSE",
        applicationId: n,
        location: t,
        instanceId: null == i ? void 0 : i.launchId,
        showFeedback: r,
    });
    let a = (0, W.p)(t);
    if (null != a) {
        var o;
        let e = v.Z.getSelectedParticipantId(a),
            t = null == (o = U.default.getCurrentUser()) ? void 0 : o.id,
            r = H.ZP.getEmbeddedActivitiesForChannel(a).find((e) => e.applicationId === n);
        if (null == r || null == t || "" === t) return;
        e ===
            (0, O.gN)({
                applicationId: n,
                instanceId: null == r ? void 0 : r.compositeInstanceId,
            }) && d.Z.selectParticipant(a, null);
    }
}
async function e_() {
    try {
        l.Z.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_START" });
        let e = await o.tn.get({
                url: ee.ANM.APPLICATIONS_WITH_ASSETS,
                query: { with_team_applications: !0 },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            t = e.body.applications,
            n = t.map((e) => L.ZP.createFromServer(e));
        l.Z.dispatch({
            type: "DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS",
            applications: n,
            assets: e.body.assets,
        }),
            l.Z.dispatch({
                type: "APPLICATIONS_FETCH_SUCCESS",
                applications: t,
            });
    } catch (e) {
        l.Z.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL" });
    }
}
async function ep(e, t, n) {
    try {
        l.Z.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START" });
        let r = null != t ? { channel_id: t } : void 0,
            i = await o.tn.post({
                url: ee.ANM.APPLICATION_UPLOAD_ATTACHMENT(e),
                query: r,
                attachments: [
                    {
                        name: "file",
                        file: n,
                    },
                ],
                rejectWithError: !0,
            });
        return (
            l.Z.dispatch({
                type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS",
                attachment: i.body.attachment,
            }),
            i.body.attachment
        );
    } catch (e) {
        return l.Z.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL" }), new p.Z(e);
    }
}
let eh = (e, t, n) => {
    let { guildId: r } = n;
    (r === e || (null == r && null == e)) && t();
};
async function em(e) {
    var t, n, i, a;
    let { guildId: o, force: s = !1 } = e,
        c = H.ZP.getShelfActivities(o),
        u = c.map((e) => b.Z.getApplication(e.application_id)).filter(Z.lm);
    if (!s && !H.ZP.shouldFetchShelf(o)) {
        if (null == (t = H.ZP.getShelfFetchStatus(o)) ? void 0 : t.isFetching) {
            let e,
                t,
                n = new Promise((t) => {
                    (e = eh.bind(null, o, t)), l.Z.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e);
                }),
                r = new Promise((e) => {
                    (t = eh.bind(null, o, e)), l.Z.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", t);
                });
            await Promise.race([n, r]),
                null != e && (l.Z.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e), (e = null)),
                null != t && (l.Z.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", t), (t = null));
        }
        return {
            activityConfigs: c,
            applications: u,
        };
    }
    try {
        l.Z.dispatch({
            type: "EMBEDDED_ACTIVITY_FETCH_SHELF",
            guildId: o,
        });
        let e = void 0 !== o && "" !== o ? { guild_id: o } : void 0,
            t = await F.Z.get({
                url: ee.ANM.ACTIVITY_SHELF,
                query: e,
                trackedActionData: {
                    event: r.NetworkActionNames.EMBEDDED_ACTIVITIES_FETCH_SHELF,
                    properties: { guild_id: o },
                },
                retries: 0,
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            s = null != (n = t.body.activities) ? n : [],
            c = null != (i = t.body.applications) ? i : [],
            u = null != (a = t.body.assets) ? a : {};
        return (
            l.Z.dispatch({
                type: "EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS",
                guildId: o,
                activities: s,
                applications: c,
                assets: u,
            }),
            c.length > 0 &&
                l.Z.dispatch({
                    type: "APPLICATIONS_FETCH_SUCCESS",
                    applications: c,
                }),
            {
                activityConfigs: s,
                applications: c.map((e) => L.ZP.createFromServer(e)),
            }
        );
    } catch (e) {
        return (
            l.Z.dispatch({
                type: "EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL",
                guildId: o,
            }),
            {
                activityConfigs: c,
                applications: u,
            }
        );
    }
}
async function eg(e) {
    let { activityChannelId: t, invitedChannelId: n, applicationId: r, location: i, inviteAnalyticsMetadata: a } = e,
        o = await f.ZP.createInvite(
            t,
            {
                target_type: er.Iq.EMBEDDED_APPLICATION,
                target_application_id: r,
            },
            i,
        );
    null != M.Z.getChannel(n) && _.Z.sendInvite(n, o.code, i, a);
}
async function eE(e) {
    let { channelId: t, applicationId: n, userId: r, location: i, inviteAnalyticsMetadata: a, prefixedContent: o } = e,
        s = await f.ZP.createInvite(
            t,
            {
                target_type: er.Iq.EMBEDDED_APPLICATION,
                target_application_id: n,
            },
            i,
        );
    await u.Z.ensurePrivateChannel(r).then((e) => {
        let t,
            n = M.Z.getChannel(e);
        if (null == n) throw Error("Private channel not found");
        null != o && (t = N.ZP.parse(n, o).content), _.Z.sendInvite(e, s.code, i, a, t);
    });
}
function eb() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : en.L.INDIRECT_ACTION;
    (0, I.wH)(s.z.ACTIVITIES_VOICE_LAUNCHER_BADGE, Math.floor(new Date().getTime() / 1000), { dismissAction: e });
}
async function ey(e) {
    let t = ee.ANM.ACTIVITY_TEST_MODE(e);
    try {
        return (
            await o.tn.get({
                url: t,
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            !0
        );
    } catch (e) {
        return !1;
    }
}
function eO(e) {
    l.Z.dispatch({
        type: "EMBEDDED_ACTIVITY_SET_PANEL_MODE",
        activityPanelMode: e,
    });
}
function ev(e) {
    l.Z.dispatch({
        type: "EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT",
        focusedActivityLayout: e,
    });
}
function eI() {
    eO($.Ez.ACTIVITY_POPOUT_WINDOW), l.Z.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
}
async function eT(e, t) {
    let n = {};
    return (
        null != t && (n.channel_id = t),
        (
            await o.tn.post({
                url: ee.ANM.APPLICATION_PROXY_TICKET(e),
                body: n,
                rejectWithError: !0,
            })
        ).body.ticket
    );
}
async function eS(e, t) {
    l.Z.dispatch({
        type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING",
        applicationId: e,
        refreshing: !0,
    });
    try {
        let n = await eT(e, null != t ? t : void 0);
        l.Z.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET",
            applicationId: e,
            channelId: t,
            proxyTicket: n,
        }),
            l.Z.dispatch({
                type: "EMBEDDED_ACTIVITY_UPDATE_CONNECTED_PROXY_TICKET",
                applicationId: e,
                proxyTicket: n,
            });
    } catch (s) {
        var n;
        let r = M.Z.getChannel(t),
            a = null != (n = null == r ? void 0 : r.guild_id) ? n : null,
            o = null != a ? i.E.GUILD_CHANNEL : i.E.PRIVATE_CHANNEL;
        return (
            l.Z.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                nonce: (0, R.r)(),
                applicationId: e,
                channelId: t,
                guildId: a,
                locationKind: o,
                error: s instanceof T.Z || s instanceof p.Z || s instanceof S.Z ? s : new p.Z(s),
            }),
            !1
        );
    } finally {
        l.Z.dispatch({
            type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING",
            applicationId: e,
            refreshing: !1,
        });
    }
    return !0;
}
