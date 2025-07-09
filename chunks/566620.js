(n.d(t, {
    $h: () => eu,
    G6: () => ea,
    Gj: () => ey,
    W5: () => eg,
    cG: () => ei,
    gC: () => eb,
    kv: () => ed,
    mW: () => ec,
    pu: () => eh,
    sN: () => ep,
    tg: () => eE,
    ux: () => em,
    w1: () => e_
}),
    n(997841),
    n(388685),
    n(415506));
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
    S = n(957730),
    A = n(48854),
    N = n(835873),
    C = n(973616),
    R = n(314897),
    P = n(592125),
    w = n(430824),
    D = n(496675),
    L = n(594174),
    x = n(979651),
    M = n(626135),
    k = n(585483),
    j = n(630388),
    U = n(823379),
    G = n(573261),
    B = n(595519),
    V = n(317381),
    F = n(882347),
    Z = n(16609),
    H = n(224189),
    Y = n(374065),
    W = n(917107),
    K = n(89425),
    z = n(275920),
    q = n(701488),
    X = n(918559),
    Q = n(981631),
    J = n(674563),
    $ = n(921944),
    ee = n(245335),
    et = n(388032);
function en(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function er(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                en(e, t, n[t]);
            }));
    }
    return e;
}
function ei(e) {
    let t = V.ZP.getSelfEmbeddedActivityForLocation(e);
    null != t &&
        ec({
            location: t.location,
            applicationId: t.applicationId,
            showFeedback: !1
        });
}
async function ea(e) {
    var t, n;
    let { channelId: r, applicationId: a, isStart: o, analyticsLocations: l, locationObject: c, embeddedActivitiesManager: u, componentId: d, commandOrigin: f, sectionName: p, source: h, onExecutedCallback: m, referrerId: g, customId: E, inviterUserId: b, onConfirmActivityLaunchChecksAlertOpen: y } = e,
        O = P.Z.getChannel(r),
        v = null != (t = null == O ? void 0 : O.getGuildId()) ? t : void 0;
    if (null == v && !(null != (n = null == O ? void 0 : O.isPrivate()) && n)) return !1;
    let S = (0, A.r)();
    try {
        s.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_START',
            nonce: S,
            applicationId: a,
            channelId: null != r ? r : null,
            componentId: d,
            analyticsLocations: l,
            source: h,
            commandOrigin: f,
            inviterUserId: b,
            launchParams: {
                customId: E,
                referrerId: g
            }
        });
        let e = L.default.getCurrentUser();
        if (
            (null != e &&
                (0, z.Z)({
                    type: o ? Q.q5t.LAUNCH : Q.q5t.JOIN,
                    userId: null == e ? void 0 : e.id,
                    guildId: v,
                    channelId: r,
                    channelType: null == O ? void 0 : O.type,
                    applicationId: a,
                    locationObject: c,
                    analyticsLocations: null != l ? l : [],
                    source: h,
                    referrerId: g,
                    inviterUserId: b
                }),
            o)
        ) {
            if (null == r || !eo(a, O)) throw new I.Z(I.Z.Reasons.INVALID_CHANNEL);
            let e = await es({
                applicationId: a,
                nonce: S,
                channelId: r,
                guildId: v,
                commandOrigin: f,
                sectionName: p,
                source: h,
                onExecutedCallback: m,
                onConfirmActivityLaunchChecksAlertOpen: y,
                embeddedActivitiesManager: u
            });
            if ('failure' === e.result && 4 !== e.reason) throw new I.Z(I.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
        } else {
            let e = await el({
                applicationId: a,
                channelId: r,
                embeddedActivitiesManager: u,
                isStart: o,
                guildId: v
            });
            if ((null == m || m(), 'failure' === e.result)) throw new I.Z(I.Z.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED, e.reason);
        }
        s.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_SUCCESS',
            nonce: S,
            applicationId: a,
            channelId: null != r ? r : null
        });
    } catch (t) {
        let e = null != v ? i.E.GUILD_CHANNEL : i.E.PRIVATE_CHANNEL;
        return (
            s.Z.dispatch({
                type: 'EMBEDDED_ACTIVITY_LAUNCH_FAIL',
                nonce: S,
                applicationId: a,
                channelId: null != r ? r : null,
                guildId: null != v ? v : null,
                isStart: o,
                error: t instanceof I.Z || t instanceof _.Z || t instanceof T.Z ? t : new _.Z(t),
                locationKind: e
            }),
            !1
        );
    }
    return !0;
}
function eo(e, t) {
    let n = (null == t ? void 0 : t.type) === Q.d4z.GUILD_VOICE,
        r = E.Z.getApplication(e),
        i = null != r && (0, j.yE)(r.flags, Q.udG.EMBEDDED),
        a = (0, B.l5)(t);
    return (n && i) || a;
}
async function es(e) {
    let { applicationId: t, nonce: n, channelId: r, guildId: i, commandOrigin: a, sectionName: o, source: s, onExecutedCallback: l, onConfirmActivityLaunchChecksAlertOpen: c, embeddedActivitiesManager: u } = e,
        d = null;
    try {
        d = await (0, g.ZP)(r, t);
    } catch (e) {
        if (e.message === g.sV)
            return {
                result: 'failure',
                reason: 1
            };
        throw e;
    }
    let f = d.handler !== p.VC.APP_HANDLER;
    if (!(f || J.Yq.includes(t))) {
        (null != r &&
            (await (0, h.FN)({
                type: 'channel',
                channelId: r
            })),
            await (0, h.FN)({ type: 'user' }));
        let e = P.Z.getChannel(r),
            { isAuthorized: n } = await (0, b.L)({
                applicationId: t,
                channel: e,
                commandIntegrationTypes: d.integration_types
            });
        if (!n)
            return {
                result: 'failure',
                reason: 2
            };
    }
    let y = P.Z.getChannel(r),
        O = null != i ? w.Z.getGuild(i) : null;
    if (null == y)
        return {
            result: 'failure',
            reason: 3
        };
    if (f) {
        let e,
            n = E.Z.getApplication(t),
            r = V.ZP.getCurrentEmbeddedActivity();
        (null == r ? void 0 : r.applicationId) != null && (e = E.Z.getApplication(null == r ? void 0 : r.applicationId));
        let i = L.default.getCurrentUser();
        if (
            null != i &&
            !(await (0, F.p)({
                applicationId: t,
                application: n,
                channel: y,
                currentEmbeddedApplication: e,
                embeddedActivitiesManager: u,
                user: i,
                onConfirmActivityLaunchChecksAlertOpen: c,
                shouldClosePopoutOnLeaveCurrentEmbeddedApplication: !1
            }))
        )
            return {
                result: 'failure',
                reason: 4
            };
    }
    return (
        await new Promise((e, c) => {
            (0, m.Z)({
                command: d,
                optionValues: {},
                context: {
                    channel: y,
                    guild: O
                },
                commandOrigin: a,
                sectionName: o,
                source: s,
                interactionLifecycleOptionsFactory: () => ({
                    nonce: n,
                    onSuccess: () => {
                        (null == l || l(), e());
                    },
                    onFailure: (e, n, a, o) => {
                        (null == l || l(),
                            M.default.track(Q.rMx.ACTIVITY_INTERACTION_CALLBACK_ERROR, {
                                channel_id: r,
                                guild_id: i,
                                application_id: t,
                                channel_type: null == y ? void 0 : y.type,
                                error_code: e,
                                error_message: n,
                                error_status: a,
                                error_reason_code: o,
                                source: s
                            }),
                            null != e && null != n && null != a
                                ? c(
                                      new _.Z({
                                          status: a,
                                          body: {
                                              message: n,
                                              code: e
                                          }
                                      })
                                  )
                                : null != o && o in T.Z.ReasonCodes
                                  ? c(new T.Z(o))
                                  : c(new T.Z(T.Z.ReasonCodes.UNKNOWN)));
                    }
                })
            });
        }),
        { result: 'success' }
    );
}
async function el(e) {
    let t,
        { applicationId: n, channelId: i, embeddedActivitiesManager: a, isStart: o, guildId: s } = e,
        c = R.default.getSessionId(),
        u = L.default.getCurrentUser(),
        d = n;
    if (null == d)
        return {
            result: 'failure',
            reason: 1
        };
    let f = await (0, H.Z)(d, i);
    if (null == u || null == f)
        return {
            result: 'failure',
            reason: 2
        };
    if (null == i)
        return (
            k.S.dispatch(Q.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, { applicationId: d }),
            {
                result: 'failure',
                reason: 3
            }
        );
    let _ = P.Z.getChannel(i);
    if (null == _)
        return {
            result: 'failure',
            reason: 3
        };
    let p = (0, Y.e4)({
        channelId: i,
        ChannelStore: P.Z,
        GuildStore: w.Z,
        PermissionStore: D.Z,
        VoiceStateStore: x.Z
    });
    if (p !== Y.jy.CAN_LAUNCH) {
        let e = 4;
        return (
            p === Y.jy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION
                ? ((e = 5), (0, N.w)())
                : p === Y.jy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS &&
                  ((e = 6),
                  l.Z.show({
                      title: et.intl.string(et.t['IOy+Iy']),
                      body: et.intl.string(et.t.UXoQTk),
                      hideActionSheet: !1
                  })),
            {
                result: 'failure',
                reason: e
            }
        );
    }
    let h = V.ZP.getCurrentEmbeddedActivity();
    if (
        ((null == h ? void 0 : h.applicationId) != null && (t = E.Z.getApplication(null == h ? void 0 : h.applicationId)),
        !(
            !o ||
            (await (0, F.p)({
                applicationId: n,
                application: f,
                channel: _,
                currentEmbeddedApplication: t,
                embeddedActivitiesManager: a,
                user: u
            }))
        ))
    )
        return {
            result: 'failure',
            reason: 7
        };
    if (null != _) {
        let e = (0, W.Z)(_.id),
            n = q.wP.includes(_.type);
        if (e) {
            if (
                !(await (0, K.Z)({
                    channelId: _.id,
                    bypassChangeModal: null != t
                }))
            )
                return {
                    result: 'failure',
                    reason: 8
                };
        } else if (!(0, B.WS)(_) || !n)
            return {
                result: 'failure',
                reason: 9
            };
    }
    let m = {
        trackedActionData: {
            event: r.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
            properties: {
                guild_id: s,
                channel_id: i,
                application_id: n,
                session_id: c
            }
        },
        retries: 3,
        oldFormErrors: !0,
        rejectWithError: !0
    };
    return null != i
        ? (await G.Z.post(
              er(
                  {
                      url: Q.ANM.ACTIVITY_CHANNEL_LAUNCH(i, n),
                      body: {
                          session_id: c,
                          guild_id: null != s ? s : void 0
                      }
                  },
                  m
              )
          ),
          { result: 'success' })
        : {
              result: 'failure',
              reason: 0
          };
}
function ec(e) {
    let { location: t, applicationId: n, showFeedback: r = !0 } = e,
        i = V.ZP.getSelfEmbeddedActivityForLocation(t);
    s.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_CLOSE',
        applicationId: n,
        location: t,
        instanceId: null == i ? void 0 : i.launchId,
        showFeedback: r
    });
    let a = (0, Z.p)(t);
    if (null != a) {
        var o;
        let e = O.Z.getSelectedParticipantId(a),
            t = null == (o = L.default.getCurrentUser()) ? void 0 : o.id,
            r = V.ZP.getEmbeddedActivitiesForChannel(a).find((e) => e.applicationId === n);
        if (null == r || null == t || '' === t) return;
        e ===
            (0, y.gN)({
                applicationId: n,
                instanceId: null == r ? void 0 : r.compositeInstanceId
            }) && u.Z.selectParticipant(a, null);
    }
}
async function eu() {
    try {
        s.Z.dispatch({ type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_START' });
        let e = await a.tn.get({
                url: Q.ANM.APPLICATIONS_WITH_ASSETS,
                query: { with_team_applications: !0 },
                oldFormErrors: !0,
                rejectWithError: !0
            }),
            t = e.body.applications,
            n = t.map((e) => C.ZP.createFromServer(e));
        (s.Z.dispatch({
            type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS',
            applications: n,
            assets: e.body.assets
        }),
            s.Z.dispatch({
                type: 'APPLICATIONS_FETCH_SUCCESS',
                applications: t
            }));
    } catch (e) {
        s.Z.dispatch({ type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL' });
    }
}
async function ed(e, t, n) {
    try {
        s.Z.dispatch({ type: 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START' });
        let r = await a.tn.post({
            url: Q.ANM.APPLICATION_UPLOAD_ATTACHMENT(e),
            query: { channel_id: t },
            attachments: [
                {
                    name: 'file',
                    file: n
                }
            ],
            rejectWithError: !0
        });
        return (
            s.Z.dispatch({
                type: 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS',
                attachment: r.body.attachment
            }),
            r.body.attachment
        );
    } catch (e) {
        return (s.Z.dispatch({ type: 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL' }), new _.Z(e));
    }
}
let ef = (e, t, n) => {
    let { guildId: r } = n;
    (r === e || (null == r && null == e)) && t();
};
async function e_(e) {
    var t, n, i, a;
    let { guildId: o, force: l = !1 } = e,
        c = V.ZP.getShelfActivities(o),
        u = c.map((e) => E.Z.getApplication(e.application_id)).filter(U.lm);
    if (!l && !V.ZP.shouldFetchShelf(o)) {
        if (null == (t = V.ZP.getShelfFetchStatus(o)) ? void 0 : t.isFetching) {
            let e,
                t,
                n = new Promise((t) => {
                    ((e = ef.bind(null, o, t)), s.Z.subscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS', e));
                }),
                r = new Promise((e) => {
                    ((t = ef.bind(null, o, e)), s.Z.subscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL', t));
                });
            (await Promise.race([n, r]), null != e && (s.Z.unsubscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS', e), (e = null)), null != t && (s.Z.unsubscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL', t), (t = null)));
        }
        return {
            activityConfigs: c,
            applications: u
        };
    }
    try {
        s.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_FETCH_SHELF',
            guildId: o
        });
        let e = void 0 !== o && '' !== o ? { guild_id: o } : void 0,
            t = await G.Z.get({
                url: Q.ANM.ACTIVITY_SHELF,
                query: e,
                trackedActionData: {
                    event: r.NetworkActionNames.EMBEDDED_ACTIVITIES_FETCH_SHELF,
                    properties: { guild_id: o }
                },
                retries: 0,
                oldFormErrors: !0,
                rejectWithError: !0
            }),
            l = null != (n = t.body.activities) ? n : [],
            c = null != (i = t.body.applications) ? i : [],
            u = null != (a = t.body.assets) ? a : {};
        return (
            s.Z.dispatch({
                type: 'EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS',
                guildId: o,
                activities: l,
                applications: c,
                assets: u
            }),
            c.length > 0 &&
                s.Z.dispatch({
                    type: 'APPLICATIONS_FETCH_SUCCESS',
                    applications: c
                }),
            {
                activityConfigs: l,
                applications: c.map((e) => C.ZP.createFromServer(e))
            }
        );
    } catch (e) {
        return (
            s.Z.dispatch({
                type: 'EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL',
                guildId: o
            }),
            {
                activityConfigs: c,
                applications: u
            }
        );
    }
}
async function ep(e) {
    let { activityChannelId: t, invitedChannelId: n, applicationId: r, location: i } = e,
        a = await d.ZP.createInvite(
            t,
            {
                target_type: ee.Iq.EMBEDDED_APPLICATION,
                target_application_id: r
            },
            i
        );
    null != P.Z.getChannel(n) && f.Z.sendInvite(n, a.code, i, null);
}
async function eh(e) {
    let { channelId: t, applicationId: n, userId: r, location: i, prefixedContent: a } = e,
        o = await d.ZP.createInvite(
            t,
            {
                target_type: ee.Iq.EMBEDDED_APPLICATION,
                target_application_id: n
            },
            i
        );
    await c.Z.ensurePrivateChannel(r).then((e) => {
        let t,
            n = P.Z.getChannel(e);
        if (null == n) throw Error('Private channel not found');
        (null != a && (t = S.ZP.parse(n, a).content), f.Z.sendInvite(e, o.code, i, null, t));
    });
}
function em() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $.L.INDIRECT_ACTION;
    (0, v.wH)(o.z.ACTIVITIES_VOICE_LAUNCHER_BADGE, Math.floor(new Date().getTime() / 1000), { dismissAction: e });
}
async function eg(e) {
    let t = Q.ANM.ACTIVITY_TEST_MODE(e);
    try {
        return (
            await a.tn.get({
                url: t,
                oldFormErrors: !0,
                rejectWithError: !0
            }),
            !0
        );
    } catch (e) {
        return !1;
    }
}
function eE(e) {
    s.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_SET_PANEL_MODE',
        activityPanelMode: e
    });
}
function eb(e) {
    s.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT',
        focusedActivityLayout: e
    });
}
function ey() {
    (eE(X.Ez.ACTIVITY_POPOUT_WINDOW), s.Z.dispatch({ type: 'ACTIVITY_POPOUT_WINDOW_OPEN' }));
}
