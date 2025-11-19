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
    a = n(544891),
    o = n(704215),
    s = n(570140),
    l = n(668781),
    c = n(493683),
    u = n(475179),
    d = n(447543),
    f = n(904245),
    _ = n(479531),
    p = n(911969),
    h = n(213459),
    m = n(667204),
    g = n(812236),
    E = n(812206),
    b = n(104919),
    y = n(413523),
    O = n(358221),
    v = n(605236),
    I = n(233764),
    T = n(375824),
    S = n(48131),
    A = n(591472),
    C = n(957730),
    N = n(48854),
    R = n(522474),
    P = n(788983),
    D = n(835873),
    w = n(973616),
    L = n(314897),
    x = n(592125),
    M = n(430824),
    j = n(496675),
    k = n(594174),
    U = n(979651),
    G = n(626135),
    B = n(630388),
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
            analyticsLocations: l,
            locationObject: c,
            embeddedActivitiesManager: u,
            componentId: d,
            commandOrigin: f,
            sectionName: p,
            source: h,
            onExecutedCallback: m,
            referrerId: g,
            customId: E,
            inviterUserId: b,
            onConfirmActivityLaunchChecksAlertOpen: y,
        } = e,
        O = x.Z.getChannel(r),
        v = null != (t = null == O ? void 0 : O.getGuildId()) ? t : void 0;
    if (null == v && !(null != (n = null == O ? void 0 : O.isPrivate()) && n)) return !1;
    let C = (0, N.r)();
    try {
        R.Z.getWindowOpen(ee.KJ3.ACTIVITY_POPOUT) && (0, P.xv)(ee.KJ3.ACTIVITY_POPOUT);
        let e = A.Z.getConnectedFrame();
        null != e && S.Z.stopFrame({ applicationId: e.applicationId }),
            s.Z.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_START",
                nonce: C,
                applicationId: a,
                channelId: null != r ? r : null,
                componentId: d,
                analyticsLocations: l,
                source: h,
                commandOrigin: f,
                inviterUserId: b,
                launchParams: {
                    customId: E,
                    referrerId: g,
                },
            });
        let t = await eT(a, null != r ? r : void 0);
        s.Z.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET",
            applicationId: a,
            channelId: null != r ? r : null,
            proxyTicket: t,
        });
        let n = k.default.getCurrentUser();
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
                    analyticsLocations: null != l ? l : [],
                    source: h,
                    referrerId: g,
                    inviterUserId: b,
                }),
            o)
        ) {
            if (null == r || !ec(a, O)) throw new I.Z(I.Z.Reasons.INVALID_CHANNEL);
            let e = await eu({
                applicationId: a,
                nonce: C,
                channelId: r,
                guildId: v,
                commandOrigin: f,
                sectionName: p,
                source: h,
                onExecutedCallback: m,
                onConfirmActivityLaunchChecksAlertOpen: y,
                embeddedActivitiesManager: u,
            });
            if ("failure" === e.result)
                if (4 === e.reason)
                    return (
                        s.Z.dispatch({
                            type: "EMBEDDED_ACTIVITY_LAUNCH_CANCEL",
                            nonce: C,
                            applicationId: a,
                            channelId: null != r ? r : null,
                        }),
                        !1
                    );
                else throw new I.Z(I.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
        } else {
            let e = await ed({
                applicationId: a,
                channelId: r,
                embeddedActivitiesManager: u,
                isStart: o,
                guildId: v,
            });
            if ((null == m || m(), "failure" === e.result))
                throw new I.Z(I.Z.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED, e.reason);
        }
        s.Z.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS",
            nonce: C,
            applicationId: a,
            channelId: null != r ? r : null,
        });
    } catch (t) {
        let e = null != v ? i.E.GUILD_CHANNEL : i.E.PRIVATE_CHANNEL;
        return (
            s.Z.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                nonce: C,
                applicationId: a,
                channelId: null != r ? r : null,
                guildId: null != v ? v : null,
                isStart: o,
                error: t instanceof I.Z || t instanceof _.Z || t instanceof T.Z ? t : new _.Z(t),
                locationKind: e,
            }),
            !1
        );
    }
    return !0;
}
function ec(e, t) {
    let n = (null == t ? void 0 : t.type) === ee.d4z.GUILD_VOICE,
        r = E.Z.getApplication(e),
        i = null != r && (0, B.yE)(r.flags, ee.udG.EMBEDDED),
        a = (0, V.l5)(t);
    return (n && i) || a;
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
        d = await (0, g.ZP)(r, t);
    } catch (e) {
        if (e.message === g.sV)
            return {
                result: "failure",
                reason: 1,
            };
        throw e;
    }
    let f = d.handler !== p.VC.APP_HANDLER;
    if (!(f || et.Yq.includes(t))) {
        null != r &&
            (await (0, h.FN)({
                type: "channel",
                channelId: r,
            })),
            await (0, h.FN)({ type: "user" });
        let e = x.Z.getChannel(r),
            { isAuthorized: n } = await (0, b.L)({
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
    let y = x.Z.getChannel(r),
        O = null != i ? M.Z.getGuild(i) : null;
    if (null == y)
        return {
            result: "failure",
            reason: 3,
        };
    if (f) {
        let e,
            n = E.Z.getApplication(t),
            r = H.ZP.getCurrentEmbeddedActivity();
        (null == r ? void 0 : r.applicationId) != null &&
            (e = E.Z.getApplication(null == r ? void 0 : r.applicationId));
        let i = k.default.getCurrentUser();
        if (
            null != i &&
            !(await (0, Y.p)({
                applicationId: t,
                application: n,
                channel: y,
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
            (0, m.Z)({
                command: d,
                optionValues: {},
                context: {
                    channel: y,
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
                            G.default.track(ee.rMx.ACTIVITY_INTERACTION_CALLBACK_ERROR, {
                                channel_id: r,
                                guild_id: i,
                                application_id: t,
                                channel_type: null == y ? void 0 : y.type,
                                error_code: e,
                                error_message: n,
                                error_status: a,
                                error_reason_code: o,
                                source: s,
                            }),
                            null != e && null != n && null != a
                                ? c(
                                      new _.Z({
                                          status: a,
                                          body: {
                                              message: n,
                                              code: e,
                                          },
                                      }),
                                  )
                                : null != o && o in T.Z.ReasonCodes
                                  ? c(new T.Z(o))
                                  : c(new T.Z(T.Z.ReasonCodes.UNKNOWN));
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
        c = L.default.getSessionId(),
        u = k.default.getCurrentUser(),
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
    let _ = x.Z.getChannel(i);
    if (null == _)
        return {
            result: "failure",
            reason: 3,
        };
    let p = (0, z.e4)({
        channelId: i,
        ChannelStore: x.Z,
        GuildStore: M.Z,
        PermissionStore: j.Z,
        VoiceStateStore: U.Z,
    });
    if (p !== z.jy.CAN_LAUNCH) {
        let e = 4;
        return (
            p === z.jy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION
                ? ((e = 5), (0, D.w)())
                : p === z.jy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS &&
                  ((e = 6),
                  l.Z.show({
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
            (t = E.Z.getApplication(null == h ? void 0 : h.applicationId)),
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
                session_id: c,
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
                          session_id: c,
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
    s.Z.dispatch({
        type: "EMBEDDED_ACTIVITY_CLOSE",
        applicationId: n,
        location: t,
        instanceId: null == i ? void 0 : i.launchId,
        showFeedback: r,
    });
    let a = (0, W.p)(t);
    if (null != a) {
        var o;
        let e = O.Z.getSelectedParticipantId(a),
            t = null == (o = k.default.getCurrentUser()) ? void 0 : o.id,
            r = H.ZP.getEmbeddedActivitiesForChannel(a).find((e) => e.applicationId === n);
        if (null == r || null == t || "" === t) return;
        e ===
            (0, y.gN)({
                applicationId: n,
                instanceId: null == r ? void 0 : r.compositeInstanceId,
            }) && u.Z.selectParticipant(a, null);
    }
}
async function e_() {
    try {
        s.Z.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_START" });
        let e = await a.tn.get({
                url: ee.ANM.APPLICATIONS_WITH_ASSETS,
                query: { with_team_applications: !0 },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            t = e.body.applications,
            n = t.map((e) => w.ZP.createFromServer(e));
        s.Z.dispatch({
            type: "DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS",
            applications: n,
            assets: e.body.assets,
        }),
            s.Z.dispatch({
                type: "APPLICATIONS_FETCH_SUCCESS",
                applications: t,
            });
    } catch (e) {
        s.Z.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL" });
    }
}
async function ep(e, t, n) {
    try {
        s.Z.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START" });
        let r = null != t ? { channel_id: t } : void 0,
            i = await a.tn.post({
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
            s.Z.dispatch({
                type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS",
                attachment: i.body.attachment,
            }),
            i.body.attachment
        );
    } catch (e) {
        return s.Z.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL" }), new _.Z(e);
    }
}
let eh = (e, t, n) => {
    let { guildId: r } = n;
    (r === e || (null == r && null == e)) && t();
};
async function em(e) {
    var t, n, i, a;
    let { guildId: o, force: l = !1 } = e,
        c = H.ZP.getShelfActivities(o),
        u = c.map((e) => E.Z.getApplication(e.application_id)).filter(Z.lm);
    if (!l && !H.ZP.shouldFetchShelf(o)) {
        if (null == (t = H.ZP.getShelfFetchStatus(o)) ? void 0 : t.isFetching) {
            let e,
                t,
                n = new Promise((t) => {
                    (e = eh.bind(null, o, t)), s.Z.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e);
                }),
                r = new Promise((e) => {
                    (t = eh.bind(null, o, e)), s.Z.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", t);
                });
            await Promise.race([n, r]),
                null != e && (s.Z.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e), (e = null)),
                null != t && (s.Z.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", t), (t = null));
        }
        return {
            activityConfigs: c,
            applications: u,
        };
    }
    try {
        s.Z.dispatch({
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
            l = null != (n = t.body.activities) ? n : [],
            c = null != (i = t.body.applications) ? i : [],
            u = null != (a = t.body.assets) ? a : {};
        return (
            s.Z.dispatch({
                type: "EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS",
                guildId: o,
                activities: l,
                applications: c,
                assets: u,
            }),
            c.length > 0 &&
                s.Z.dispatch({
                    type: "APPLICATIONS_FETCH_SUCCESS",
                    applications: c,
                }),
            {
                activityConfigs: l,
                applications: c.map((e) => w.ZP.createFromServer(e)),
            }
        );
    } catch (e) {
        return (
            s.Z.dispatch({
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
        o = await d.ZP.createInvite(
            t,
            {
                target_type: er.Iq.EMBEDDED_APPLICATION,
                target_application_id: r,
            },
            i,
        );
    null != x.Z.getChannel(n) && f.Z.sendInvite(n, o.code, i, a);
}
async function eE(e) {
    let { channelId: t, applicationId: n, userId: r, location: i, inviteAnalyticsMetadata: a, prefixedContent: o } = e,
        s = await d.ZP.createInvite(
            t,
            {
                target_type: er.Iq.EMBEDDED_APPLICATION,
                target_application_id: n,
            },
            i,
        );
    await c.Z.ensurePrivateChannel(r).then((e) => {
        let t,
            n = x.Z.getChannel(e);
        if (null == n) throw Error("Private channel not found");
        null != o && (t = C.ZP.parse(n, o).content), f.Z.sendInvite(e, s.code, i, a, t);
    });
}
function eb() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : en.L.INDIRECT_ACTION;
    (0, v.wH)(o.z.ACTIVITIES_VOICE_LAUNCHER_BADGE, Math.floor(new Date().getTime() / 1000), { dismissAction: e });
}
async function ey(e) {
    let t = ee.ANM.ACTIVITY_TEST_MODE(e);
    try {
        return (
            await a.tn.get({
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
    s.Z.dispatch({
        type: "EMBEDDED_ACTIVITY_SET_PANEL_MODE",
        activityPanelMode: e,
    });
}
function ev(e) {
    s.Z.dispatch({
        type: "EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT",
        focusedActivityLayout: e,
    });
}
function eI() {
    eO($.Ez.ACTIVITY_POPOUT_WINDOW), s.Z.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
}
async function eT(e, t) {
    let n = {};
    return (
        null != t && (n.channel_id = t),
        (
            await a.tn.post({
                url: ee.ANM.APPLICATION_PROXY_TICKET(e),
                body: n,
                rejectWithError: !0,
            })
        ).body.ticket
    );
}
async function eS(e, t) {
    s.Z.dispatch({
        type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING",
        applicationId: e,
        refreshing: !0,
    });
    try {
        let n = await eT(e, null != t ? t : void 0);
        s.Z.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET",
            applicationId: e,
            channelId: t,
            proxyTicket: n,
        }),
            s.Z.dispatch({
                type: "EMBEDDED_ACTIVITY_UPDATE_CONNECTED_PROXY_TICKET",
                applicationId: e,
                proxyTicket: n,
            });
    } catch (l) {
        var n;
        let r = x.Z.getChannel(t),
            a = null != (n = null == r ? void 0 : r.guild_id) ? n : null,
            o = null != a ? i.E.GUILD_CHANNEL : i.E.PRIVATE_CHANNEL;
        return (
            s.Z.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                nonce: (0, N.r)(),
                applicationId: e,
                channelId: t,
                guildId: a,
                locationKind: o,
                error: l instanceof I.Z || l instanceof _.Z || l instanceof T.Z ? l : new _.Z(l),
            }),
            !1
        );
    } finally {
        s.Z.dispatch({
            type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING",
            applicationId: e,
            refreshing: !1,
        });
    }
    return !0;
}
