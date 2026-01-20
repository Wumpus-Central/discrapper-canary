n.d(t, {
    $h: () => ef,
    G6: () => es,
    Gj: () => ev,
    W5: () => eb,
    a_: () => eS,
    cG: () => eo,
    gC: () => eO,
    kv: () => ep,
    mW: () => ed,
    nJ: () => eI,
    pu: () => eg,
    sN: () => em,
    tg: () => ey,
    ux: () => eE,
    w1: () => eh,
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
    p = n(904245),
    _ = n(479531),
    h = n(911969),
    m = n(213459),
    g = n(667204),
    E = n(812236),
    b = n(812206),
    y = n(104919),
    O = n(413523),
    v = n(358221),
    S = n(605236),
    I = n(233764),
    T = n(375824),
    C = n(686440),
    A = n(957730),
    N = n(48854),
    P = n(522474),
    w = n(835873),
    R = n(973616),
    D = n(314897),
    x = n(592125),
    L = n(430824),
    j = n(496675),
    M = n(594174),
    k = n(979651),
    U = n(626135),
    G = n(823379),
    Z = n(573261),
    F = n(595519),
    B = n(317381),
    V = n(882347),
    H = n(16609),
    Y = n(224189),
    W = n(374065),
    K = n(917107),
    z = n(89425),
    q = n(275920),
    Q = n(784976),
    X = n(701488),
    J = n(918559),
    $ = n(981631),
    ee = n(674563),
    et = n(921944),
    en = n(245335),
    er = n(388032);
function ei(e, t, n) {
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
function ea(e) {
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
                ei(e, t, n[t]);
            });
    }
    return e;
}
function eo(e) {
    let t = B.ZP.getSelfEmbeddedActivityForLocation(e);
    null != t &&
        ed({
            location: t.location,
            applicationId: t.applicationId,
            showFeedback: !1,
        });
}
async function es(e) {
    var t, r;
    let {
            channelId: a,
            applicationId: o,
            isStart: s,
            analyticsLocations: c,
            locationObject: u,
            embeddedActivitiesManager: d,
            componentId: f,
            commandOrigin: p,
            sectionName: h,
            source: m,
            onExecutedCallback: g,
            referrerId: E,
            customId: y,
            inviterUserId: O,
            onConfirmActivityLaunchChecksAlertOpen: v,
        } = e,
        S = x.Z.getChannel(a),
        A = null != (t = null == S ? void 0 : S.getGuildId()) ? t : void 0;
    if (null == A && !(null != (r = null == S ? void 0 : S.isPrivate()) && r)) return !1;
    let w = b.Z.getApplication(o),
        R = null != w && (0, C.g)(w),
        D = (0, N.r)();
    try {
        if (P.Z.getWindowOpen($.KJ3.ACTIVITY_POPOUT)) {
            let { close: e } = n(788983);
            e($.KJ3.ACTIVITY_POPOUT);
        }
        if ((0, Q.R)({ applicationId: o })) return !0;
        l.Z.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_START",
            nonce: D,
            applicationId: o,
            channelId: null != a ? a : null,
            componentId: f,
            analyticsLocations: c,
            source: m,
            commandOrigin: p,
            inviterUserId: O,
            launchParams: {
                customId: y,
                referrerId: E,
            },
        });
        let e = await eS(o, null != a ? a : void 0);
        l.Z.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET",
            applicationId: o,
            channelId: null != a ? a : null,
            proxyTicket: e,
        });
        let t = M.default.getCurrentUser();
        if (
            (null != t &&
                (0, q.Z)({
                    type: s ? $.q5t.LAUNCH : $.q5t.JOIN,
                    userId: null == t ? void 0 : t.id,
                    guildId: A,
                    channelId: a,
                    channelType: null == S ? void 0 : S.type,
                    applicationId: o,
                    locationObject: u,
                    analyticsLocations: null != c ? c : [],
                    source: m,
                    referrerId: E,
                    inviterUserId: O,
                }),
            s)
        ) {
            if (null == a || !el(o, S)) throw new I.Z(I.Z.Reasons.INVALID_CHANNEL);
            let e = await ec({
                applicationId: o,
                nonce: D,
                channelId: a,
                guildId: A,
                commandOrigin: p,
                sectionName: h,
                source: m,
                onExecutedCallback: g,
                onConfirmActivityLaunchChecksAlertOpen: v,
                embeddedActivitiesManager: d,
            });
            if ("failure" === e.result)
                if (4 === e.reason)
                    return (
                        l.Z.dispatch({
                            type: "EMBEDDED_ACTIVITY_LAUNCH_CANCEL",
                            nonce: D,
                            applicationId: o,
                            channelId: null != a ? a : null,
                        }),
                        !1
                    );
                else throw new I.Z(I.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
        } else {
            let e = await eu({
                applicationId: o,
                channelId: a,
                embeddedActivitiesManager: d,
                isStart: s,
                guildId: A,
            });
            if ((null == g || g(), "failure" === e.result))
                throw new I.Z(I.Z.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED, e.reason);
        }
        l.Z.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS",
            nonce: D,
            applicationId: o,
            channelId: null != a ? a : null,
        });
    } catch (t) {
        if (R) return !1;
        let e = null != A ? i.E.GUILD_CHANNEL : i.E.PRIVATE_CHANNEL;
        return (
            l.Z.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                nonce: D,
                applicationId: o,
                channelId: null != a ? a : null,
                guildId: null != A ? A : null,
                isStart: s,
                error: t instanceof I.Z || t instanceof _.Z || t instanceof T.Z ? t : new _.Z(t),
                locationKind: e,
            }),
            !1
        );
    }
    return !0;
}
function el(e, t) {
    let n = (null == t ? void 0 : t.type) === $.d4z.GUILD_VOICE,
        r = b.Z.getApplication(e),
        i = null != r && (0, a.yE)(r.flags, $.udG.EMBEDDED),
        o = (0, F.l5)(t);
    return (n && i) || o;
}
async function ec(e) {
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
    if (!(f || ee.Yq.includes(t))) {
        null != r &&
            (await (0, m.FN)({
                type: "channel",
                channelId: r,
            })),
            await (0, m.FN)({ type: "user" });
        let e = x.Z.getChannel(r),
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
    let p = x.Z.getChannel(r),
        O = null != i ? L.Z.getGuild(i) : null;
    if (null == p)
        return {
            result: "failure",
            reason: 3,
        };
    if (f) {
        let e,
            n = b.Z.getApplication(t),
            r = B.ZP.getCurrentEmbeddedActivity();
        (null == r ? void 0 : r.applicationId) != null &&
            (e = b.Z.getApplication(null == r ? void 0 : r.applicationId));
        let i = M.default.getCurrentUser();
        if (
            null != i &&
            !(await (0, V.p)({
                applicationId: t,
                application: n,
                channel: p,
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
                    channel: p,
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
                            U.default.track($.rMx.ACTIVITY_INTERACTION_CALLBACK_ERROR, {
                                channel_id: r,
                                guild_id: i,
                                application_id: t,
                                channel_type: null == p ? void 0 : p.type,
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
async function eu(e) {
    let t,
        { applicationId: n, channelId: i, embeddedActivitiesManager: a, isStart: o, guildId: s } = e,
        l = D.default.getSessionId(),
        u = M.default.getCurrentUser(),
        d = n;
    if (null == d)
        return {
            result: "failure",
            reason: 1,
        };
    let f = await (0, Y.Z)(d, i);
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
    let p = x.Z.getChannel(i);
    if (null == p)
        return {
            result: "failure",
            reason: 3,
        };
    let _ = (0, W.e4)({
        channelId: i,
        ChannelStore: x.Z,
        GuildStore: L.Z,
        PermissionStore: j.Z,
        VoiceStateStore: k.Z,
    });
    if (_ !== W.jy.CAN_LAUNCH) {
        let e = 4;
        return (
            _ === W.jy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION
                ? ((e = 5), (0, w.w)())
                : _ === W.jy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS &&
                  ((e = 6),
                  c.Z.show({
                      title: er.intl.string(er.t["IOy+I5"]),
                      body: er.intl.string(er.t.UXoQTp),
                      hideActionSheet: !1,
                  })),
            {
                result: "failure",
                reason: e,
            }
        );
    }
    let h = B.ZP.getCurrentEmbeddedActivity();
    if (
        ((null == h ? void 0 : h.applicationId) != null &&
            (t = b.Z.getApplication(null == h ? void 0 : h.applicationId)),
        !(
            !o ||
            (await (0, V.p)({
                applicationId: n,
                application: f,
                channel: p,
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
    if (null != p) {
        let e = (0, K.Z)(p.id),
            n = X.wP.includes(p.type);
        if (e) {
            if (
                !(await (0, z.Z)({
                    channelId: p.id,
                    bypassChangeModal: null != t,
                }))
            )
                return {
                    result: "failure",
                    reason: 8,
                };
        } else if (!(0, F.WS)(p) || !n)
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
        ? (await Z.Z.post(
              ea(
                  {
                      url: $.ANM.ACTIVITY_CHANNEL_LAUNCH(i, n),
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
function ed(e) {
    let { location: t, applicationId: n, showFeedback: r = !0 } = e,
        i = B.ZP.getSelfEmbeddedActivityForLocation(t);
    l.Z.dispatch({
        type: "EMBEDDED_ACTIVITY_CLOSE",
        applicationId: n,
        location: t,
        instanceId: null == i ? void 0 : i.launchId,
        showFeedback: r,
    });
    let a = (0, H.p)(t);
    if (null != a) {
        var o;
        let e = v.Z.getSelectedParticipantId(a),
            t = null == (o = M.default.getCurrentUser()) ? void 0 : o.id,
            r = B.ZP.getEmbeddedActivitiesForChannel(a).find((e) => e.applicationId === n);
        if (null == r || null == t || "" === t) return;
        e ===
            (0, O.gN)({
                applicationId: n,
                instanceId: null == r ? void 0 : r.compositeInstanceId,
            }) && d.Z.selectParticipant(a, null);
    }
}
async function ef() {
    try {
        l.Z.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_START" });
        let e = await o.tn.get({
                url: $.ANM.APPLICATIONS_WITH_ASSETS,
                query: { with_team_applications: !0 },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            t = e.body.applications,
            n = t.map((e) => R.ZP.createFromServer(e));
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
                url: $.ANM.APPLICATION_UPLOAD_ATTACHMENT(e),
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
        return l.Z.dispatch({ type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL" }), new _.Z(e);
    }
}
let e_ = (e, t, n) => {
    let { guildId: r } = n;
    (r === e || (null == r && null == e)) && t();
};
async function eh(e) {
    var t, n, i, a;
    let { guildId: o, force: s = !1 } = e,
        c = B.ZP.getShelfActivities(o),
        u = c.map((e) => b.Z.getApplication(e.application_id)).filter(G.lm);
    if (!s && !B.ZP.shouldFetchShelf(o)) {
        if (null == (t = B.ZP.getShelfFetchStatus(o)) ? void 0 : t.isFetching) {
            let e,
                t,
                n = new Promise((t) => {
                    (e = e_.bind(null, o, t)), l.Z.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e);
                }),
                r = new Promise((e) => {
                    (t = e_.bind(null, o, e)), l.Z.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", t);
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
            t = await Z.Z.get({
                url: $.ANM.ACTIVITY_SHELF,
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
                applications: c.map((e) => R.ZP.createFromServer(e)),
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
async function em(e) {
    let { activityChannelId: t, invitedChannelId: n, applicationId: r, location: i, inviteAnalyticsMetadata: a } = e,
        o = await f.ZP.createInvite(
            t,
            {
                target_type: en.Iq.EMBEDDED_APPLICATION,
                target_application_id: r,
            },
            i,
        );
    null != x.Z.getChannel(n) && p.Z.sendInvite(n, o.code, i, a);
}
async function eg(e) {
    let { channelId: t, applicationId: n, userId: r, location: i, inviteAnalyticsMetadata: a, prefixedContent: o } = e,
        s = await f.ZP.createInvite(
            t,
            {
                target_type: en.Iq.EMBEDDED_APPLICATION,
                target_application_id: n,
            },
            i,
        );
    await u.Z.ensurePrivateChannel(r).then((e) => {
        let t,
            n = x.Z.getChannel(e);
        if (null == n) throw Error("Private channel not found");
        null != o && (t = A.ZP.parse(n, o).content), p.Z.sendInvite(e, s.code, i, a, t);
    });
}
function eE() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : et.L.INDIRECT_ACTION;
    (0, S.wH)(s.z.ACTIVITIES_VOICE_LAUNCHER_BADGE, Math.floor(new Date().getTime() / 1000), { dismissAction: e });
}
async function eb(e) {
    let t = $.ANM.ACTIVITY_TEST_MODE(e);
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
function ey(e) {
    l.Z.dispatch({
        type: "EMBEDDED_ACTIVITY_SET_PANEL_MODE",
        activityPanelMode: e,
    });
}
function eO(e) {
    l.Z.dispatch({
        type: "EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT",
        focusedActivityLayout: e,
    });
}
function ev() {
    ey(J.Ez.ACTIVITY_POPOUT_WINDOW), l.Z.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
}
async function eS(e, t) {
    let n = {};
    return (
        null != t && (n.channel_id = t),
        (
            await o.tn.post({
                url: $.ANM.APPLICATION_PROXY_TICKET(e),
                body: n,
                rejectWithError: !0,
            })
        ).body.ticket
    );
}
async function eI(e, t) {
    l.Z.dispatch({
        type: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING",
        applicationId: e,
        refreshing: !0,
    });
    try {
        let n = await eS(e, null != t ? t : void 0);
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
        let r = x.Z.getChannel(t),
            a = null != (n = null == r ? void 0 : r.guild_id) ? n : null,
            o = null != a ? i.E.GUILD_CHANNEL : i.E.PRIVATE_CHANNEL;
        return (
            l.Z.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                nonce: (0, N.r)(),
                applicationId: e,
                channelId: t,
                guildId: a,
                locationKind: o,
                error: s instanceof I.Z || s instanceof _.Z || s instanceof T.Z ? s : new _.Z(s),
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
