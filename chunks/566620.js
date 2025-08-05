(n.d(t, {
    $h: () => ed,
    G6: () => eo,
    Gj: () => eO,
    W5: () => eE,
    cG: () => ea,
    gC: () => ey,
    kv: () => ef,
    mW: () => eu,
    pu: () => em,
    sN: () => eh,
    tg: () => eb,
    ux: () => eg,
    w1: () => ep
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
    S = n(510839),
    A = n(591472),
    N = n(957730),
    C = n(48854),
    R = n(835873),
    P = n(973616),
    w = n(314897),
    D = n(592125),
    L = n(430824),
    x = n(496675),
    M = n(594174),
    k = n(979651),
    j = n(626135),
    U = n(630388),
    G = n(823379),
    B = n(573261),
    V = n(595519),
    F = n(317381),
    Z = n(882347),
    H = n(16609),
    Y = n(224189),
    W = n(374065),
    K = n(917107),
    z = n(89425),
    q = n(275920),
    X = n(701488),
    Q = n(918559),
    J = n(981631),
    $ = n(674563),
    ee = n(921944),
    et = n(245335),
    en = n(388032);
function er(e, t, n) {
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
function ei(e) {
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
                er(e, t, n[t]);
            }));
    }
    return e;
}
function ea(e) {
    let t = F.ZP.getSelfEmbeddedActivityForLocation(e);
    null != t &&
        eu({
            location: t.location,
            applicationId: t.applicationId,
            showFeedback: !1
        });
}
async function eo(e) {
    var t, n;
    let { channelId: r, applicationId: a, isStart: o, analyticsLocations: l, locationObject: c, embeddedActivitiesManager: u, componentId: d, commandOrigin: f, sectionName: p, source: h, onExecutedCallback: m, referrerId: g, customId: E, inviterUserId: b, onConfirmActivityLaunchChecksAlertOpen: y } = e,
        O = D.Z.getChannel(r),
        v = null != (t = null == O ? void 0 : O.getGuildId()) ? t : void 0;
    if (null == v && !(null != (n = null == O ? void 0 : O.isPrivate()) && n)) return !1;
    let N = (0, C.r)();
    try {
        let e = A.Z.getConnectedFrame();
        (null != e && (0, S.xT)({ applicationId: e.applicationId }),
            s.Z.dispatch({
                type: 'EMBEDDED_ACTIVITY_LAUNCH_START',
                nonce: N,
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
            }));
        let t = M.default.getCurrentUser();
        if (
            (null != t &&
                (0, q.Z)({
                    type: o ? J.q5t.LAUNCH : J.q5t.JOIN,
                    userId: null == t ? void 0 : t.id,
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
            if (null == r || !es(a, O)) throw new I.Z(I.Z.Reasons.INVALID_CHANNEL);
            let e = await el({
                applicationId: a,
                nonce: N,
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
            let e = await ec({
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
            nonce: N,
            applicationId: a,
            channelId: null != r ? r : null
        });
    } catch (t) {
        let e = null != v ? i.E.GUILD_CHANNEL : i.E.PRIVATE_CHANNEL;
        return (
            s.Z.dispatch({
                type: 'EMBEDDED_ACTIVITY_LAUNCH_FAIL',
                nonce: N,
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
function es(e, t) {
    let n = (null == t ? void 0 : t.type) === J.d4z.GUILD_VOICE,
        r = E.Z.getApplication(e),
        i = null != r && (0, U.yE)(r.flags, J.udG.EMBEDDED),
        a = (0, V.l5)(t);
    return (n && i) || a;
}
async function el(e) {
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
    if (!(f || $.Yq.includes(t))) {
        (null != r &&
            (await (0, h.FN)({
                type: 'channel',
                channelId: r
            })),
            await (0, h.FN)({ type: 'user' }));
        let e = D.Z.getChannel(r),
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
    let y = D.Z.getChannel(r),
        O = null != i ? L.Z.getGuild(i) : null;
    if (null == y)
        return {
            result: 'failure',
            reason: 3
        };
    if (f) {
        let e,
            n = E.Z.getApplication(t),
            r = F.ZP.getCurrentEmbeddedActivity();
        (null == r ? void 0 : r.applicationId) != null && (e = E.Z.getApplication(null == r ? void 0 : r.applicationId));
        let i = M.default.getCurrentUser();
        if (
            null != i &&
            !(await (0, Z.p)({
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
                            j.default.track(J.rMx.ACTIVITY_INTERACTION_CALLBACK_ERROR, {
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
async function ec(e) {
    let t,
        { applicationId: n, channelId: i, embeddedActivitiesManager: a, isStart: o, guildId: s } = e,
        c = w.default.getSessionId(),
        u = M.default.getCurrentUser(),
        d = n;
    if (null == d)
        return {
            result: 'failure',
            reason: 1
        };
    let f = await (0, Y.Z)(d, i);
    if (null == u || null == f)
        return {
            result: 'failure',
            reason: 2
        };
    if (null == i)
        return {
            result: 'failure',
            reason: 3
        };
    let _ = D.Z.getChannel(i);
    if (null == _)
        return {
            result: 'failure',
            reason: 3
        };
    let p = (0, W.e4)({
        channelId: i,
        ChannelStore: D.Z,
        GuildStore: L.Z,
        PermissionStore: x.Z,
        VoiceStateStore: k.Z
    });
    if (p !== W.jy.CAN_LAUNCH) {
        let e = 4;
        return (
            p === W.jy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION
                ? ((e = 5), (0, R.w)())
                : p === W.jy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS &&
                  ((e = 6),
                  l.Z.show({
                      title: en.intl.string(en.t['IOy+Iy']),
                      body: en.intl.string(en.t.UXoQTk),
                      hideActionSheet: !1
                  })),
            {
                result: 'failure',
                reason: e
            }
        );
    }
    let h = F.ZP.getCurrentEmbeddedActivity();
    if (
        ((null == h ? void 0 : h.applicationId) != null && (t = E.Z.getApplication(null == h ? void 0 : h.applicationId)),
        !(
            !o ||
            (await (0, Z.p)({
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
        let e = (0, K.Z)(_.id),
            n = X.wP.includes(_.type);
        if (e) {
            if (
                !(await (0, z.Z)({
                    channelId: _.id,
                    bypassChangeModal: null != t
                }))
            )
                return {
                    result: 'failure',
                    reason: 8
                };
        } else if (!(0, V.WS)(_) || !n)
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
        ? (await B.Z.post(
              ei(
                  {
                      url: J.ANM.ACTIVITY_CHANNEL_LAUNCH(i, n),
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
function eu(e) {
    let { location: t, applicationId: n, showFeedback: r = !0 } = e,
        i = F.ZP.getSelfEmbeddedActivityForLocation(t);
    s.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_CLOSE',
        applicationId: n,
        location: t,
        instanceId: null == i ? void 0 : i.launchId,
        showFeedback: r
    });
    let a = (0, H.p)(t);
    if (null != a) {
        var o;
        let e = O.Z.getSelectedParticipantId(a),
            t = null == (o = M.default.getCurrentUser()) ? void 0 : o.id,
            r = F.ZP.getEmbeddedActivitiesForChannel(a).find((e) => e.applicationId === n);
        if (null == r || null == t || '' === t) return;
        e ===
            (0, y.gN)({
                applicationId: n,
                instanceId: null == r ? void 0 : r.compositeInstanceId
            }) && u.Z.selectParticipant(a, null);
    }
}
async function ed() {
    try {
        s.Z.dispatch({ type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_START' });
        let e = await a.tn.get({
                url: J.ANM.APPLICATIONS_WITH_ASSETS,
                query: { with_team_applications: !0 },
                oldFormErrors: !0,
                rejectWithError: !0
            }),
            t = e.body.applications,
            n = t.map((e) => P.ZP.createFromServer(e));
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
async function ef(e, t, n) {
    try {
        s.Z.dispatch({ type: 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START' });
        let r = null != t ? { channel_id: t } : void 0,
            i = await a.tn.post({
                url: J.ANM.APPLICATION_UPLOAD_ATTACHMENT(e),
                query: r,
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
                attachment: i.body.attachment
            }),
            i.body.attachment
        );
    } catch (e) {
        return (s.Z.dispatch({ type: 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL' }), new _.Z(e));
    }
}
let e_ = (e, t, n) => {
    let { guildId: r } = n;
    (r === e || (null == r && null == e)) && t();
};
async function ep(e) {
    var t, n, i, a;
    let { guildId: o, force: l = !1 } = e,
        c = F.ZP.getShelfActivities(o),
        u = c.map((e) => E.Z.getApplication(e.application_id)).filter(G.lm);
    if (!l && !F.ZP.shouldFetchShelf(o)) {
        if (null == (t = F.ZP.getShelfFetchStatus(o)) ? void 0 : t.isFetching) {
            let e,
                t,
                n = new Promise((t) => {
                    ((e = e_.bind(null, o, t)), s.Z.subscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS', e));
                }),
                r = new Promise((e) => {
                    ((t = e_.bind(null, o, e)), s.Z.subscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL', t));
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
            t = await B.Z.get({
                url: J.ANM.ACTIVITY_SHELF,
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
                applications: c.map((e) => P.ZP.createFromServer(e))
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
async function eh(e) {
    let { activityChannelId: t, invitedChannelId: n, applicationId: r, location: i } = e,
        a = await d.ZP.createInvite(
            t,
            {
                target_type: et.Iq.EMBEDDED_APPLICATION,
                target_application_id: r
            },
            i
        );
    null != D.Z.getChannel(n) && f.Z.sendInvite(n, a.code, i, null);
}
async function em(e) {
    let { channelId: t, applicationId: n, userId: r, location: i, prefixedContent: a } = e,
        o = await d.ZP.createInvite(
            t,
            {
                target_type: et.Iq.EMBEDDED_APPLICATION,
                target_application_id: n
            },
            i
        );
    await c.Z.ensurePrivateChannel(r).then((e) => {
        let t,
            n = D.Z.getChannel(e);
        if (null == n) throw Error('Private channel not found');
        (null != a && (t = N.ZP.parse(n, a).content), f.Z.sendInvite(e, o.code, i, null, t));
    });
}
function eg() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ee.L.INDIRECT_ACTION;
    (0, v.wH)(o.z.ACTIVITIES_VOICE_LAUNCHER_BADGE, Math.floor(new Date().getTime() / 1000), { dismissAction: e });
}
async function eE(e) {
    let t = J.ANM.ACTIVITY_TEST_MODE(e);
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
function eb(e) {
    s.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_SET_PANEL_MODE',
        activityPanelMode: e
    });
}
function ey(e) {
    s.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT',
        focusedActivityLayout: e
    });
}
function eO() {
    (eb(Q.Ez.ACTIVITY_POPOUT_WINDOW), s.Z.dispatch({ type: 'ACTIVITY_POPOUT_WINDOW_OPEN' }));
}
