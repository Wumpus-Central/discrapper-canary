n.d(t, {
    $h: () => eo,
    W5: () => ef,
    af: () => ee,
    cG: () => $,
    gC: () => e_,
    kv: () => ea,
    mW: () => ei,
    pu: () => eu,
    sN: () => ec,
    tg: () => ep,
    ux: () => ed,
    w1: () => el
}),
    n(789020),
    n(47120),
    n(411104);
var r = n(990547),
    i = n(544891),
    o = n(570140),
    a = n(278323),
    s = n(668781),
    l = n(493683),
    c = n(475179),
    u = n(447543),
    d = n(904245),
    f = n(479531),
    p = n(911969),
    _ = n(46332),
    h = n(213459),
    m = n(667204),
    g = n(812236),
    E = n(812206),
    v = n(413523),
    b = n(358221),
    y = n(233764),
    O = n(375824),
    S = n(957730),
    I = n(48854),
    T = n(835873),
    N = n(973616),
    A = n(314897),
    C = n(592125),
    R = n(430824),
    P = n(496675),
    w = n(594174),
    D = n(979651),
    x = n(626135),
    L = n(585483),
    M = n(630388),
    k = n(823379),
    j = n(573261),
    U = n(595519),
    G = n(774226),
    B = n(317381),
    Z = n(882347),
    F = n(16609),
    V = n(224189),
    H = n(374065),
    W = n(917107),
    Y = n(89425),
    K = n(275920),
    z = n(701488);
n(918559);
var q = n(981631),
    Q = n(674563),
    X = n(245335),
    J = n(388032);
function $(e) {
    let t = B.ZP.getSelfEmbeddedActivityForLocation(e);
    null != t &&
        ei({
            location: t.location,
            applicationId: t.applicationId,
            showFeedback: !1
        });
}
async function ee(e) {
    var t, n;
    let { channelId: r, applicationId: i, isStart: a, analyticsLocations: s, locationObject: l, embeddedActivitiesManager: c, componentId: u, commandOrigin: d, sectionName: p, source: _, partyId: h, onExecutedCallback: m, referrerId: g, customId: E, joinUserId: v, joinSessionId: b, joinSecret: S, inviterUserId: T, isContextlessActivity: N } = e,
        A = C.Z.getChannel(r),
        R = null !== (t = null == A ? void 0 : A.getGuildId()) && void 0 !== t ? t : void 0,
        P = (0, G.sq)();
    if (!P && null == R && !(null !== (n = null == A ? void 0 : A.isPrivate()) && void 0 !== n && n)) return !1;
    let D = (0, I.r)();
    try {
        o.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_START',
            nonce: D,
            applicationId: i,
            channelId: null != r ? r : null,
            componentId: u,
            analyticsLocations: s,
            source: _,
            commandOrigin: d,
            inviterUserId: T,
            launchParams: {
                customId: E,
                referrerId: g
            }
        });
        let e = w.default.getCurrentUser();
        if (
            (null != e &&
                (0, K.Z)({
                    type: a ? q.q5t.LAUNCH : q.q5t.JOIN,
                    userId: null == e ? void 0 : e.id,
                    guildId: R,
                    channelId: r,
                    channelType: null == A ? void 0 : A.type,
                    applicationId: i,
                    locationObject: l,
                    analyticsLocations: null != s ? s : [],
                    source: _,
                    partyId: h,
                    referrerId: g,
                    inviterUserId: T
                }),
            a && null != r)
        ) {
            if (!et(i, A)) throw new y.Z(y.Z.Reasons.INVALID_CHANNEL);
            if (
                !(await en({
                    applicationId: i,
                    nonce: D,
                    channelId: r,
                    guildId: R,
                    commandOrigin: d,
                    sectionName: p,
                    source: _,
                    onExecutedCallback: m,
                    clientSupportsContextlessActivityLaunch: P
                }))
            )
                throw new y.Z(y.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
        } else {
            let e = await er({
                applicationId: i,
                channelId: r,
                embeddedActivitiesManager: c,
                isStart: a,
                guildId: R,
                joinUserId: v,
                joinSessionId: b,
                joinSecret: S,
                isContextlessActivity: N
            });
            if ((null == m || m(), 'failure' === e.result)) throw new y.Z(y.Z.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED, e.reason);
        }
        o.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_SUCCESS',
            nonce: D,
            applicationId: i,
            channelId: null != r ? r : null
        });
    } catch (e) {
        return (
            o.Z.dispatch({
                type: 'EMBEDDED_ACTIVITY_LAUNCH_FAIL',
                nonce: D,
                applicationId: i,
                channelId: null != r ? r : null,
                isStart: a,
                error: e instanceof y.Z || e instanceof f.Z || e instanceof O.Z ? e : new f.Z(e)
            }),
            !1
        );
    }
    return !0;
}
function et(e, t) {
    let n = (null == t ? void 0 : t.type) === q.d4z.GUILD_VOICE,
        r = E.Z.getApplication(e),
        i = null != r && (0, M.yE)(r.flags, q.udG.EMBEDDED),
        o = (0, U.l5)(t);
    return (n && i) || o;
}
async function en(e) {
    let { applicationId: t, nonce: n, channelId: r, guildId: i, commandOrigin: o, sectionName: a, source: s, onExecutedCallback: l, clientSupportsContextlessActivityLaunch: c } = e,
        u = null;
    try {
        u = await (0, g.ZP)(r, t);
    } catch (e) {
        if (e.message === g.sV) return !1;
        throw e;
    }
    if (!(u.handler !== p.VC.APP_HANDLER || Q.Yq.includes(t))) {
        null != r &&
            (await (0, h.FN)({
                type: 'channel',
                channelId: r
            })),
            await (0, h.FN)({ type: 'user' });
        let e = C.Z.getChannel(r);
        if (
            !(await (0, _.L)({
                applicationId: t,
                channel: e,
                commandIntegrationTypes: u.integration_types
            }))
        )
            return !1;
    }
    let d = C.Z.getChannel(r),
        E = null != i ? R.Z.getGuild(i) : null;
    return (
        null != d &&
        (await new Promise((e, p) => {
            (0, m.Z)({
                command: u,
                optionValues: {},
                context: {
                    channel: d,
                    guild: E
                },
                commandOrigin: o,
                sectionName: a,
                source: s,
                clientSupportsContextlessActivityLaunch: c,
                interactionLifecycleOptionsFactory: () => ({
                    nonce: n,
                    onSuccess: () => {
                        null == l || l(), e();
                    },
                    onFailure: (e, n, o, a) => {
                        null == l || l(),
                            x.default.track(q.rMx.ACTIVITY_INTERACTION_CALLBACK_ERROR, {
                                channel_id: r,
                                guild_id: i,
                                application_id: t,
                                channel_type: null == d ? void 0 : d.type,
                                error_code: e,
                                error_message: n,
                                error_status: o,
                                error_reason_code: a,
                                source: s
                            }),
                            null != e && null != n && null != o
                                ? p(
                                      new f.Z({
                                          status: o,
                                          body: {
                                              message: n,
                                              code: e
                                          }
                                      })
                                  )
                                : null != a && a in O.Z.ReasonCodes
                                  ? p(new O.Z(a))
                                  : p(new O.Z(O.Z.ReasonCodes.UNKNOWN));
                    }
                })
            });
        }),
        !0)
    );
}
async function er(e) {
    let t,
        { applicationId: n, channelId: i, embeddedActivitiesManager: o, isStart: l, guildId: c, joinUserId: u, joinSessionId: d, joinSecret: f, isContextlessActivity: p } = e,
        _ = A.default.getSessionId(),
        h = w.default.getCurrentUser(),
        m = n;
    if (null == m)
        return {
            result: 'failure',
            reason: 1
        };
    let g = (0, G.sq)(),
        v = await (0, V.Z)(m, i);
    if (null == h || null == v)
        return {
            result: 'failure',
            reason: 2
        };
    if (!g && null == i)
        return (
            L.S.dispatch(q.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, { applicationId: m }),
            {
                result: 'failure',
                reason: 3
            }
        );
    let b = C.Z.getChannel(i);
    if (!g && null == b)
        return {
            result: 'failure',
            reason: 3
        };
    let y = (0, H.e4)({
        channelId: i,
        ChannelStore: C.Z,
        GuildStore: R.Z,
        PermissionStore: P.Z,
        VoiceStateStore: D.Z
    });
    if (y !== H.jy.CAN_LAUNCH) {
        let e = 4;
        return (
            y === H.jy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION
                ? ((e = 5), (0, T.w)())
                : y === H.jy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS &&
                  ((e = 6),
                  s.Z.show({
                      title: J.NW.string(J.t['IOy+Iy']),
                      body: J.NW.string(J.t.UXoQTk),
                      hideActionSheet: !1
                  })),
            {
                result: 'failure',
                reason: e
            }
        );
    }
    let O = B.ZP.getCurrentEmbeddedActivity();
    if (
        ((null == O ? void 0 : O.applicationId) != null && (t = E.Z.getApplication(null == O ? void 0 : O.applicationId)),
        !(
            !l ||
            (await (0, Z.p)({
                applicationId: n,
                application: v,
                channel: b,
                currentEmbeddedApplication: t,
                embeddedActivitiesManager: o,
                user: h
            }))
        ))
    )
        return {
            result: 'failure',
            reason: 7
        };
    if (null != b) {
        let e = (0, W.Z)(b.id),
            n = z.wP.includes(b.type);
        if (e) {
            if (
                !(await (0, Y.Z)({
                    channelId: b.id,
                    bypassChangeModal: null != t
                }))
            )
                return {
                    result: 'failure',
                    reason: 8
                };
        } else if (!(0, U.WS)(b) || !n)
            return {
                result: 'failure',
                reason: 9
            };
    }
    return (null == f && null != u && null != d && !0 === p && (f = await a.Z.getJoinSecret(u, d, n)), null != i && null == f)
        ? (await j.Z.post({
              url: q.ANM.ACTIVITY_CHANNEL_LAUNCH(i, n),
              body: {
                  session_id: _,
                  guild_id: null != c ? c : void 0
              },
              trackedActionData: {
                  event: r.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
                  properties: {
                      guild_id: c,
                      channel_id: i,
                      application_id: n,
                      session_id: _
                  }
              },
              retries: 3,
              oldFormErrors: !0,
              rejectWithError: !0
          }),
          { result: 'success' })
        : null != f
          ? (await j.Z.post({
                url: q.ANM.ACTIVITY_JOIN_INSTANCE(n, f),
                body: { session_id: _ },
                trackedActionData: {
                    event: r.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
                    properties: {
                        application_id: n,
                        session_id: _
                    }
                },
                retries: 3,
                oldFormErrors: !0,
                rejectWithError: !0
            }),
            { result: 'success' })
          : {
                result: 'failure',
                reason: 0
            };
}
function ei(e) {
    let { location: t, applicationId: n, showFeedback: r = !0 } = e,
        i = B.ZP.getSelfEmbeddedActivityForLocation(t);
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
        let e = b.Z.getSelectedParticipantId(a),
            t = null === (s = w.default.getCurrentUser()) || void 0 === s ? void 0 : s.id,
            r = B.ZP.getEmbeddedActivitiesForChannel(a).find((e) => e.applicationId === n);
        if (null == r || null == t || '' === t) return;
        e ===
            (0, v.gN)({
                applicationId: n,
                instanceId: null == r ? void 0 : r.compositeInstanceId
            }) && c.Z.selectParticipant(a, null);
    }
}
async function eo() {
    try {
        o.Z.dispatch({ type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_START' });
        let e = await i.tn.get({
                url: q.ANM.APPLICATIONS_WITH_ASSETS,
                query: { with_team_applications: !0 },
                oldFormErrors: !0,
                rejectWithError: !0
            }),
            t = e.body.applications,
            n = t.map((e) => N.ZP.createFromServer(e));
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
async function ea(e, t, n) {
    try {
        o.Z.dispatch({ type: 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START' });
        let r = await i.tn.post({
            url: q.ANM.APPLICATION_UPLOAD_ATTACHMENT(e),
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
let es = (e, t, n) => {
    let { guildId: r } = n;
    (r === e || (null == r && null == e)) && t();
};
async function el(e) {
    var t, n, i, a;
    let { guildId: s, force: l = !1 } = e,
        c = B.ZP.getShelfActivities(s),
        u = c.map((e) => E.Z.getApplication(e.application_id)).filter(k.lm);
    if (!l && !B.ZP.shouldFetchShelf(s)) {
        if (null === (t = B.ZP.getShelfFetchStatus(s)) || void 0 === t ? void 0 : t.isFetching) {
            let e, t;
            let n = new Promise((t) => {
                    (e = es.bind(null, s, t)), o.Z.subscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS', e);
                }),
                r = new Promise((e) => {
                    (t = es.bind(null, s, e)), o.Z.subscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL', t);
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
                url: q.ANM.ACTIVITY_SHELF,
                query: e,
                trackedActionData: {
                    event: r.NetworkActionNames.EMBEDDED_ACTIVITIES_FETCH_SHELF,
                    properties: { guild_id: s }
                },
                retries: 3,
                oldFormErrors: !0,
                rejectWithError: !0
            }),
            l = null !== (n = t.body.activities) && void 0 !== n ? n : [],
            c = null !== (i = t.body.applications) && void 0 !== i ? i : [],
            u = null !== (a = t.body.assets) && void 0 !== a ? a : {};
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
                applications: c.map((e) => N.ZP.createFromServer(e))
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
async function ec(e) {
    let { activityChannelId: t, invitedChannelId: n, applicationId: r, location: i } = e,
        o = await u.Z.createInvite(
            t,
            {
                target_type: X.Iq.EMBEDDED_APPLICATION,
                target_application_id: r
            },
            i
        );
    null != C.Z.getChannel(n) && d.Z.sendInvite(n, o.code, i, null);
}
async function eu(e) {
    let { channelId: t, applicationId: n, userId: r, location: i, prefixedContent: o } = e,
        a = await u.Z.createInvite(
            t,
            {
                target_type: X.Iq.EMBEDDED_APPLICATION,
                target_application_id: n
            },
            i
        );
    await l.Z.ensurePrivateChannel(r).then((e) => {
        let t;
        let n = C.Z.getChannel(e);
        if (null == n) throw Error('Private channel not found');
        null != o && (t = S.ZP.parse(n, o).content), d.Z.sendInvite(e, a.code, i, null, t);
    });
}
function ed() {
    o.Z.dispatch({ type: 'EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR' });
}
async function ef(e) {
    let t = q.ANM.ACTIVITY_TEST_MODE(e);
    try {
        return (
            await i.tn.get({
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
function e_(e) {
    o.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT',
        focusedActivityLayout: e
    });
}
