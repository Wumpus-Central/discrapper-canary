n.d(t, {
    $h: () => eo,
    G6: () => et,
    W5: () => e_,
    cG: () => ee,
    gC: () => eh,
    kv: () => es,
    mW: () => ea,
    pu: () => ed,
    sN: () => eu,
    tg: () => ep,
    ux: () => ef,
    w1: () => ec
}),
    n(997841),
    n(388685),
    n(415506);
var r = n(990547),
    i = n(252258),
    a = n(544891),
    o = n(570140),
    s = n(668781),
    l = n(493683),
    c = n(475179),
    u = n(447543),
    d = n(904245),
    f = n(479531),
    _ = n(911969),
    p = n(213459),
    h = n(667204),
    m = n(812236),
    g = n(812206),
    E = n(104919),
    b = n(413523),
    y = n(358221),
    O = n(233764),
    v = n(375824),
    I = n(957730),
    S = n(48854),
    T = n(835873),
    A = n(973616),
    N = n(314897),
    C = n(592125),
    P = n(430824),
    R = n(496675),
    w = n(594174),
    D = n(979651),
    L = n(626135),
    x = n(585483),
    k = n(630388),
    M = n(823379),
    j = n(573261),
    U = n(595519),
    G = n(317381),
    B = n(882347),
    F = n(16609),
    V = n(224189),
    Z = n(374065),
    H = n(917107),
    Y = n(89425),
    W = n(275920),
    K = n(701488);
n(918559);
var z = n(981631),
    q = n(674563),
    Q = n(245335),
    X = n(388032);
function J(e, t, n) {
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
function $(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                J(e, t, n[t]);
            });
    }
    return e;
}
function ee(e) {
    let t = G.ZP.getSelfEmbeddedActivityForLocation(e);
    null != t &&
        ea({
            location: t.location,
            applicationId: t.applicationId,
            showFeedback: !1
        });
}
async function et(e) {
    var t, n;
    let { channelId: r, applicationId: a, isStart: s, analyticsLocations: l, locationObject: c, embeddedActivitiesManager: u, componentId: d, commandOrigin: _, sectionName: p, source: h, onExecutedCallback: m, referrerId: g, customId: E, inviterUserId: b, onConfirmActivityLaunchChecksAlertOpen: y } = e,
        I = C.Z.getChannel(r),
        T = null != (t = null == I ? void 0 : I.getGuildId()) ? t : void 0;
    if (null == T && !(null != (n = null == I ? void 0 : I.isPrivate()) && n)) return !1;
    let A = (0, S.r)();
    try {
        o.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_START',
            nonce: A,
            applicationId: a,
            channelId: null != r ? r : null,
            componentId: d,
            analyticsLocations: l,
            source: h,
            commandOrigin: _,
            inviterUserId: b,
            launchParams: {
                customId: E,
                referrerId: g
            }
        });
        let e = w.default.getCurrentUser();
        if (
            (null != e &&
                (0, W.Z)({
                    type: s ? z.q5t.LAUNCH : z.q5t.JOIN,
                    userId: null == e ? void 0 : e.id,
                    guildId: T,
                    channelId: r,
                    channelType: null == I ? void 0 : I.type,
                    applicationId: a,
                    locationObject: c,
                    analyticsLocations: null != l ? l : [],
                    source: h,
                    referrerId: g,
                    inviterUserId: b
                }),
            s)
        ) {
            if (null == r || !en(a, I)) throw new O.Z(O.Z.Reasons.INVALID_CHANNEL);
            let e = await er({
                applicationId: a,
                nonce: A,
                channelId: r,
                guildId: T,
                commandOrigin: _,
                sectionName: p,
                source: h,
                onExecutedCallback: m,
                onConfirmActivityLaunchChecksAlertOpen: y,
                embeddedActivitiesManager: u
            });
            if ('failure' === e.result && 4 !== e.reason) throw new O.Z(O.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
        } else {
            let e = await ei({
                applicationId: a,
                channelId: r,
                embeddedActivitiesManager: u,
                isStart: s,
                guildId: T
            });
            if ((null == m || m(), 'failure' === e.result)) throw new O.Z(O.Z.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED, e.reason);
        }
        o.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_SUCCESS',
            nonce: A,
            applicationId: a,
            channelId: null != r ? r : null
        });
    } catch (t) {
        let e = null != T ? i.E.GUILD_CHANNEL : i.E.PRIVATE_CHANNEL;
        return (
            o.Z.dispatch({
                type: 'EMBEDDED_ACTIVITY_LAUNCH_FAIL',
                nonce: A,
                applicationId: a,
                channelId: null != r ? r : null,
                guildId: null != T ? T : null,
                isStart: s,
                error: t instanceof O.Z || t instanceof f.Z || t instanceof v.Z ? t : new f.Z(t),
                locationKind: e
            }),
            !1
        );
    }
    return !0;
}
function en(e, t) {
    let n = (null == t ? void 0 : t.type) === z.d4z.GUILD_VOICE,
        r = g.Z.getApplication(e),
        i = null != r && (0, k.yE)(r.flags, z.udG.EMBEDDED),
        a = (0, U.l5)(t);
    return (n && i) || a;
}
async function er(e) {
    let { applicationId: t, nonce: n, channelId: r, guildId: i, commandOrigin: a, sectionName: o, source: s, onExecutedCallback: l, onConfirmActivityLaunchChecksAlertOpen: c, embeddedActivitiesManager: u } = e,
        d = null;
    try {
        d = await (0, m.ZP)(r, t);
    } catch (e) {
        if (e.message === m.sV)
            return {
                result: 'failure',
                reason: 1
            };
        throw e;
    }
    let b = d.handler !== _.VC.APP_HANDLER;
    if (!(b || q.Yq.includes(t))) {
        null != r &&
            (await (0, p.FN)({
                type: 'channel',
                channelId: r
            })),
            await (0, p.FN)({ type: 'user' });
        let e = C.Z.getChannel(r),
            { isAuthorized: n } = await (0, E.L)({
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
    let y = C.Z.getChannel(r),
        O = null != i ? P.Z.getGuild(i) : null;
    if (null == y)
        return {
            result: 'failure',
            reason: 3
        };
    if (b) {
        let e,
            n = g.Z.getApplication(t),
            r = G.ZP.getCurrentEmbeddedActivity();
        (null == r ? void 0 : r.applicationId) != null && (e = g.Z.getApplication(null == r ? void 0 : r.applicationId));
        let i = w.default.getCurrentUser();
        if (
            null != i &&
            !(await (0, B.p)({
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
            (0, h.Z)({
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
                        null == l || l(), e();
                    },
                    onFailure: (e, n, a, o) => {
                        null == l || l(),
                            L.default.track(z.rMx.ACTIVITY_INTERACTION_CALLBACK_ERROR, {
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
                                      new f.Z({
                                          status: a,
                                          body: {
                                              message: n,
                                              code: e
                                          }
                                      })
                                  )
                                : null != o && o in v.Z.ReasonCodes
                                  ? c(new v.Z(o))
                                  : c(new v.Z(v.Z.ReasonCodes.UNKNOWN));
                    }
                })
            });
        }),
        { result: 'success' }
    );
}
async function ei(e) {
    let t,
        { applicationId: n, channelId: i, embeddedActivitiesManager: a, isStart: o, guildId: l } = e,
        c = N.default.getSessionId(),
        u = w.default.getCurrentUser(),
        d = n;
    if (null == d)
        return {
            result: 'failure',
            reason: 1
        };
    let f = await (0, V.Z)(d, i);
    if (null == u || null == f)
        return {
            result: 'failure',
            reason: 2
        };
    if (null == i)
        return (
            x.S.dispatch(z.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, { applicationId: d }),
            {
                result: 'failure',
                reason: 3
            }
        );
    let _ = C.Z.getChannel(i);
    if (null == _)
        return {
            result: 'failure',
            reason: 3
        };
    let p = (0, Z.e4)({
        channelId: i,
        ChannelStore: C.Z,
        GuildStore: P.Z,
        PermissionStore: R.Z,
        VoiceStateStore: D.Z
    });
    if (p !== Z.jy.CAN_LAUNCH) {
        let e = 4;
        return (
            p === Z.jy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION
                ? ((e = 5), (0, T.w)())
                : p === Z.jy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS &&
                  ((e = 6),
                  s.Z.show({
                      title: X.intl.string(X.t['IOy+Iy']),
                      body: X.intl.string(X.t.UXoQTk),
                      hideActionSheet: !1
                  })),
            {
                result: 'failure',
                reason: e
            }
        );
    }
    let h = G.ZP.getCurrentEmbeddedActivity();
    if (
        ((null == h ? void 0 : h.applicationId) != null && (t = g.Z.getApplication(null == h ? void 0 : h.applicationId)),
        !(
            !o ||
            (await (0, B.p)({
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
        let e = (0, H.Z)(_.id),
            n = K.wP.includes(_.type);
        if (e) {
            if (
                !(await (0, Y.Z)({
                    channelId: _.id,
                    bypassChangeModal: null != t
                }))
            )
                return {
                    result: 'failure',
                    reason: 8
                };
        } else if (!(0, U.WS)(_) || !n)
            return {
                result: 'failure',
                reason: 9
            };
    }
    let m = {
        trackedActionData: {
            event: r.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
            properties: {
                guild_id: l,
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
        ? (await j.Z.post(
              $(
                  {
                      url: z.ANM.ACTIVITY_CHANNEL_LAUNCH(i, n),
                      body: {
                          session_id: c,
                          guild_id: null != l ? l : void 0
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
function ea(e) {
    let { location: t, applicationId: n, showFeedback: r = !0 } = e,
        i = G.ZP.getSelfEmbeddedActivityForLocation(t);
    o.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_CLOSE',
        applicationId: n,
        location: t,
        instanceId: null == i ? void 0 : i.launchId,
        showFeedback: r
    });
    let a = (0, F.pY)(t);
    if (null != a) {
        var s;
        let e = y.Z.getSelectedParticipantId(a),
            t = null == (s = w.default.getCurrentUser()) ? void 0 : s.id,
            r = G.ZP.getEmbeddedActivitiesForChannel(a).find((e) => e.applicationId === n);
        if (null == r || null == t || '' === t) return;
        e ===
            (0, b.gN)({
                applicationId: n,
                instanceId: null == r ? void 0 : r.compositeInstanceId
            }) && c.Z.selectParticipant(a, null);
    }
}
async function eo() {
    try {
        o.Z.dispatch({ type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_START' });
        let e = await a.tn.get({
                url: z.ANM.APPLICATIONS_WITH_ASSETS,
                query: { with_team_applications: !0 },
                oldFormErrors: !0,
                rejectWithError: !0
            }),
            t = e.body.applications,
            n = t.map((e) => A.ZP.createFromServer(e));
        o.Z.dispatch({
            type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS',
            applications: n,
            assets: e.body.assets
        }),
            o.Z.dispatch({
                type: 'APPLICATIONS_FETCH_SUCCESS',
                applications: t
            });
    } catch (e) {
        o.Z.dispatch({ type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL' });
    }
}
async function es(e, t, n) {
    try {
        o.Z.dispatch({ type: 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START' });
        let r = await a.tn.post({
            url: z.ANM.APPLICATION_UPLOAD_ATTACHMENT(e),
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
            o.Z.dispatch({
                type: 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS',
                attachment: r.body.attachment
            }),
            r.body.attachment
        );
    } catch (e) {
        return o.Z.dispatch({ type: 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL' }), new f.Z(e);
    }
}
let el = (e, t, n) => {
    let { guildId: r } = n;
    (r === e || (null == r && null == e)) && t();
};
async function ec(e) {
    var t, n, i, a;
    let { guildId: s, force: l = !1 } = e,
        c = G.ZP.getShelfActivities(s),
        u = c.map((e) => g.Z.getApplication(e.application_id)).filter(M.lm);
    if (!l && !G.ZP.shouldFetchShelf(s)) {
        if (null == (t = G.ZP.getShelfFetchStatus(s)) ? void 0 : t.isFetching) {
            let e,
                t,
                n = new Promise((t) => {
                    (e = el.bind(null, s, t)), o.Z.subscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS', e);
                }),
                r = new Promise((e) => {
                    (t = el.bind(null, s, e)), o.Z.subscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL', t);
                });
            await Promise.race([n, r]), null != e && (o.Z.unsubscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS', e), (e = null)), null != t && (o.Z.unsubscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL', t), (t = null));
        }
        return {
            activityConfigs: c,
            applications: u
        };
    }
    try {
        o.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_FETCH_SHELF',
            guildId: s
        });
        let e = void 0 !== s && '' !== s ? { guild_id: s } : void 0,
            t = await j.Z.get({
                url: z.ANM.ACTIVITY_SHELF,
                query: e,
                trackedActionData: {
                    event: r.NetworkActionNames.EMBEDDED_ACTIVITIES_FETCH_SHELF,
                    properties: { guild_id: s }
                },
                retries: 0,
                oldFormErrors: !0,
                rejectWithError: !0
            }),
            l = null != (n = t.body.activities) ? n : [],
            c = null != (i = t.body.applications) ? i : [],
            u = null != (a = t.body.assets) ? a : {};
        return (
            o.Z.dispatch({
                type: 'EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS',
                guildId: s,
                activities: l,
                applications: c,
                assets: u
            }),
            c.length > 0 &&
                o.Z.dispatch({
                    type: 'APPLICATIONS_FETCH_SUCCESS',
                    applications: c
                }),
            {
                activityConfigs: l,
                applications: c.map((e) => A.ZP.createFromServer(e))
            }
        );
    } catch (e) {
        return (
            o.Z.dispatch({
                type: 'EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL',
                guildId: s
            }),
            {
                activityConfigs: c,
                applications: u
            }
        );
    }
}
async function eu(e) {
    let { activityChannelId: t, invitedChannelId: n, applicationId: r, location: i } = e,
        a = await u.ZP.createInvite(
            t,
            {
                target_type: Q.Iq.EMBEDDED_APPLICATION,
                target_application_id: r
            },
            i
        );
    null != C.Z.getChannel(n) && d.Z.sendInvite(n, a.code, i, null);
}
async function ed(e) {
    let { channelId: t, applicationId: n, userId: r, location: i, prefixedContent: a } = e,
        o = await u.ZP.createInvite(
            t,
            {
                target_type: Q.Iq.EMBEDDED_APPLICATION,
                target_application_id: n
            },
            i
        );
    await l.Z.ensurePrivateChannel(r).then((e) => {
        let t,
            n = C.Z.getChannel(e);
        if (null == n) throw Error('Private channel not found');
        null != a && (t = I.ZP.parse(n, a).content), d.Z.sendInvite(e, o.code, i, null, t);
    });
}
function ef() {
    o.Z.dispatch({ type: 'EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR' });
}
async function e_(e) {
    let t = z.ANM.ACTIVITY_TEST_MODE(e);
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
function ep(e) {
    o.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_SET_PANEL_MODE',
        activityPanelMode: e
    });
}
function eh(e) {
    o.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT',
        focusedActivityLayout: e
    });
}
