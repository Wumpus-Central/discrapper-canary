n.d(t, {
    $h: () => er,
    W5: () => ed,
    af: () => $,
    cG: () => J,
    gC: () => e_,
    kv: () => ea,
    mW: () => ei,
    pu: () => eu,
    sN: () => el,
    tg: () => ef,
    ux: () => ec,
    w1: () => eo
}),
    n(789020),
    n(47120),
    n(411104);
var i = n(990547),
    r = n(544891),
    a = n(570140),
    s = n(278323),
    o = n(668781),
    l = n(493683),
    u = n(475179),
    c = n(447543),
    d = n(904245),
    f = n(479531),
    _ = n(911969),
    p = n(46332),
    h = n(213459),
    m = n(667204),
    g = n(812236),
    E = n(812206),
    v = n(413523),
    y = n(358221),
    I = n(233764),
    T = n(375824),
    S = n(957730),
    b = n(48854),
    A = n(835873),
    N = n(973616),
    C = n(314897),
    R = n(592125),
    O = n(430824),
    D = n(496675),
    L = n(594174),
    x = n(979651),
    w = n(585483),
    P = n(630388),
    M = n(823379),
    k = n(573261),
    U = n(595519),
    G = n(774226),
    B = n(317381),
    Z = n(882347),
    F = n(16609),
    V = n(224189),
    j = n(374065),
    H = n(917107),
    Y = n(89425),
    W = n(275920),
    K = n(701488);
n(918559);
var z = n(981631),
    q = n(674563),
    Q = n(245335),
    X = n(388032);
function J(e) {
    let t = B.ZP.getSelfEmbeddedActivityForLocation(e);
    null != t &&
        ei({
            location: t.location,
            applicationId: t.applicationId,
            showFeedback: !1
        });
}
async function $(e) {
    var t, n;
    let { channelId: i, applicationId: r, isStart: s, analyticsLocations: o, locationObject: l, embeddedActivitiesManager: u, componentId: c, commandOrigin: d, sectionName: _, source: p, partyId: h, onExecutedCallback: m, referrerId: g, customId: E, joinUserId: v, joinSessionId: y, joinSecret: S, inviterUserId: A, isContextlessActivity: N } = e,
        C = R.Z.getChannel(i),
        O = null !== (t = null == C ? void 0 : C.getGuildId()) && void 0 !== t ? t : void 0,
        D = (0, G.sq)();
    if (!D && null == O && !(null !== (n = null == C ? void 0 : C.isPrivate()) && void 0 !== n && n)) return !1;
    let x = (0, b.r)();
    try {
        a.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_START',
            nonce: x,
            applicationId: r,
            channelId: null != i ? i : null,
            componentId: c,
            analyticsLocations: o,
            source: p,
            commandOrigin: d,
            inviterUserId: A,
            launchParams: {
                customId: E,
                referrerId: g
            }
        });
        let e = L.default.getCurrentUser();
        if (
            (null != e &&
                (0, W.Z)({
                    type: s ? z.q5t.LAUNCH : z.q5t.JOIN,
                    userId: null == e ? void 0 : e.id,
                    guildId: O,
                    channelId: i,
                    channelType: null == C ? void 0 : C.type,
                    applicationId: r,
                    locationObject: l,
                    analyticsLocations: null != o ? o : [],
                    source: p,
                    partyId: h,
                    referrerId: g,
                    inviterUserId: A
                }),
            s && null != i)
        ) {
            if (!ee(r, C)) throw new I.Z(I.Z.Reasons.INVALID_CHANNEL);
            if (
                !(await et({
                    applicationId: r,
                    nonce: x,
                    channelId: i,
                    guildId: O,
                    commandOrigin: d,
                    sectionName: _,
                    source: p,
                    onExecutedCallback: m,
                    clientSupportsContextlessActivityLaunch: D
                }))
            )
                throw new I.Z(I.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
        } else {
            let e = await en({
                applicationId: r,
                channelId: i,
                embeddedActivitiesManager: u,
                isStart: s,
                guildId: O,
                joinUserId: v,
                joinSessionId: y,
                joinSecret: S,
                isContextlessActivity: N
            });
            if ((null == m || m(), 'failure' === e.result)) throw new I.Z(I.Z.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED, e.reason);
        }
        a.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_SUCCESS',
            nonce: x,
            applicationId: r,
            channelId: null != i ? i : null
        });
    } catch (e) {
        return (
            a.Z.dispatch({
                type: 'EMBEDDED_ACTIVITY_LAUNCH_FAIL',
                nonce: x,
                applicationId: r,
                channelId: null != i ? i : null,
                isStart: s,
                error: e instanceof I.Z || e instanceof f.Z || e instanceof T.Z ? e : new f.Z(e)
            }),
            !1
        );
    }
    return !0;
}
function ee(e, t) {
    let n = (null == t ? void 0 : t.type) === z.d4z.GUILD_VOICE,
        i = E.Z.getApplication(e),
        r = null != i && (0, P.yE)(i.flags, z.udG.EMBEDDED),
        a = (0, U.l5)(t);
    return (n && r) || a;
}
async function et(e) {
    let { applicationId: t, nonce: n, channelId: i, guildId: r, commandOrigin: a, sectionName: s, source: o, onExecutedCallback: l, clientSupportsContextlessActivityLaunch: u } = e,
        c = null;
    try {
        c = await (0, g.ZP)(i, t);
    } catch (e) {
        if (e.message === g.sV) return !1;
        throw e;
    }
    if (!(c.handler !== _.VC.APP_HANDLER || q.Yq.includes(t))) {
        null != i &&
            (await (0, h.FN)({
                type: 'channel',
                channelId: i
            })),
            await (0, h.FN)({ type: 'user' });
        let e = R.Z.getChannel(i);
        if (
            !(await (0, p.L)({
                applicationId: t,
                channel: e,
                commandIntegrationTypes: c.integration_types
            }))
        )
            return !1;
    }
    let d = R.Z.getChannel(i),
        E = null != r ? O.Z.getGuild(r) : null;
    return (
        null != d &&
        (await new Promise((e, t) => {
            (0, m.Z)({
                command: c,
                optionValues: {},
                context: {
                    channel: d,
                    guild: E
                },
                commandOrigin: a,
                sectionName: s,
                source: o,
                clientSupportsContextlessActivityLaunch: u,
                interactionLifecycleOptionsFactory: () => ({
                    nonce: n,
                    onSuccess: () => {
                        null == l || l(), e();
                    },
                    onFailure: (e, n, i, r) => {
                        null == l || l(),
                            null != e && null != n && null != i
                                ? t(
                                      new f.Z({
                                          status: i,
                                          body: {
                                              message: n,
                                              code: e
                                          }
                                      })
                                  )
                                : null != r && r in T.Z.ReasonCodes
                                  ? t(new T.Z(r))
                                  : t(new T.Z(T.Z.ReasonCodes.UNKNOWN));
                    }
                })
            });
        }),
        !0)
    );
}
async function en(e) {
    let t,
        { applicationId: n, channelId: r, embeddedActivitiesManager: a, isStart: l, guildId: u, joinUserId: c, joinSessionId: d, joinSecret: f, isContextlessActivity: _ } = e,
        p = C.default.getSessionId(),
        h = L.default.getCurrentUser(),
        m = n;
    if (null == m)
        return {
            result: 'failure',
            reason: 1
        };
    let g = (0, G.sq)(),
        v = await (0, V.Z)(m, r);
    if (null == h || null == v)
        return {
            result: 'failure',
            reason: 2
        };
    if (!g && null == r)
        return (
            w.S.dispatch(z.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, { applicationId: m }),
            {
                result: 'failure',
                reason: 3
            }
        );
    let y = R.Z.getChannel(r);
    if (!g && null == y)
        return {
            result: 'failure',
            reason: 3
        };
    let I = (0, j.e4)({
        channelId: r,
        ChannelStore: R.Z,
        GuildStore: O.Z,
        PermissionStore: D.Z,
        VoiceStateStore: x.Z
    });
    if (I !== j.jy.CAN_LAUNCH) {
        let e = 4;
        return (
            I === j.jy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION
                ? ((e = 5), (0, A.w)())
                : I === j.jy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS &&
                  ((e = 6),
                  o.Z.show({
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
    let T = B.ZP.getCurrentEmbeddedActivity();
    if (
        ((null == T ? void 0 : T.applicationId) != null && (t = E.Z.getApplication(null == T ? void 0 : T.applicationId)),
        !(
            !l ||
            (await (0, Z.p)({
                applicationId: n,
                application: v,
                channel: y,
                currentEmbeddedApplication: t,
                embeddedActivitiesManager: a,
                user: h
            }))
        ))
    )
        return {
            result: 'failure',
            reason: 7
        };
    if (null != y) {
        let e = (0, H.Z)(y.id),
            n = K.wP.includes(y.type);
        if (e) {
            if (
                !(await (0, Y.Z)({
                    channelId: y.id,
                    bypassChangeModal: null != t
                }))
            )
                return {
                    result: 'failure',
                    reason: 8
                };
        } else if (!(0, U.WS)(y) || !n)
            return {
                result: 'failure',
                reason: 9
            };
    }
    return (null == f && null != c && null != d && !0 === _ && (f = await s.Z.getJoinSecret(c, d, n)), null != r && null == f)
        ? (await k.Z.post({
              url: z.ANM.ACTIVITY_CHANNEL_LAUNCH(r, n),
              body: {
                  session_id: p,
                  guild_id: null != u ? u : void 0
              },
              trackedActionData: {
                  event: i.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
                  properties: {
                      guild_id: u,
                      channel_id: r,
                      application_id: n,
                      session_id: p
                  }
              },
              retries: 3,
              oldFormErrors: !0,
              rejectWithError: !0
          }),
          { result: 'success' })
        : null != f
          ? (await k.Z.post({
                url: z.ANM.ACTIVITY_JOIN_INSTANCE(n, f),
                body: { session_id: p },
                trackedActionData: {
                    event: i.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
                    properties: {
                        application_id: n,
                        session_id: p
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
    let { location: t, applicationId: n, showFeedback: i = !0 } = e,
        r = B.ZP.getSelfEmbeddedActivityForLocation(t);
    a.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_CLOSE',
        applicationId: n,
        location: t,
        instanceId: null == r ? void 0 : r.launchId,
        showFeedback: i
    });
    let s = (0, F.pY)(t);
    if (null != s) {
        var o;
        let e = y.Z.getSelectedParticipantId(s),
            t = null === (o = L.default.getCurrentUser()) || void 0 === o ? void 0 : o.id;
        if (null == B.ZP.getEmbeddedActivitiesForChannel(s).find((e) => e.applicationId === n) || null == t || '' === t) return;
        e === (0, v.oW)(n) && u.Z.selectParticipant(s, null);
    }
}
async function er() {
    try {
        a.Z.dispatch({ type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_START' });
        let e = await r.tn.get({
                url: z.ANM.APPLICATIONS_WITH_ASSETS,
                query: { with_team_applications: !0 },
                oldFormErrors: !0,
                rejectWithError: !0
            }),
            t = e.body.applications,
            n = t.map((e) => N.ZP.createFromServer(e));
        a.Z.dispatch({
            type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS',
            applications: n,
            assets: e.body.assets
        }),
            a.Z.dispatch({
                type: 'APPLICATIONS_FETCH_SUCCESS',
                applications: t
            });
    } catch (e) {
        a.Z.dispatch({ type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL' });
    }
}
async function ea(e, t, n) {
    try {
        a.Z.dispatch({ type: 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START' });
        let i = await r.tn.post({
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
            a.Z.dispatch({
                type: 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS',
                attachment: i.body.attachment
            }),
            i.body.attachment
        );
    } catch (e) {
        return a.Z.dispatch({ type: 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL' }), new f.Z(e);
    }
}
let es = (e, t, n) => {
    let { guildId: i } = n;
    (i === e || (null == i && null == e)) && t();
};
async function eo(e) {
    var t, n, r, s;
    let { guildId: o, force: l = !1 } = e,
        u = B.ZP.getShelfActivities(o),
        c = u.map((e) => E.Z.getApplication(e.application_id)).filter(M.lm);
    if (!l && !B.ZP.shouldFetchShelf(o)) {
        if (null === (t = B.ZP.getShelfFetchStatus(o)) || void 0 === t ? void 0 : t.isFetching) {
            let e, t;
            let n = new Promise((t) => {
                    (e = es.bind(null, o, t)), a.Z.subscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS', e);
                }),
                i = new Promise((e) => {
                    (t = es.bind(null, o, e)), a.Z.subscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL', t);
                });
            await Promise.race([n, i]), null != e && (a.Z.unsubscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS', e), (e = null)), null != t && (a.Z.unsubscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL', t), (t = null));
        }
        return {
            activityConfigs: u,
            applications: c
        };
    }
    try {
        a.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_FETCH_SHELF',
            guildId: o
        });
        let e = void 0 !== o && '' !== o ? { guild_id: o } : void 0,
            t = await k.Z.get({
                url: z.ANM.ACTIVITY_SHELF,
                query: e,
                trackedActionData: {
                    event: i.NetworkActionNames.EMBEDDED_ACTIVITIES_FETCH_SHELF,
                    properties: { guild_id: o }
                },
                retries: 3,
                oldFormErrors: !0,
                rejectWithError: !0
            }),
            l = null !== (n = t.body.activities) && void 0 !== n ? n : [],
            u = null !== (r = t.body.applications) && void 0 !== r ? r : [],
            c = null !== (s = t.body.assets) && void 0 !== s ? s : {};
        return (
            a.Z.dispatch({
                type: 'EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS',
                guildId: o,
                activities: l,
                applications: u,
                assets: c
            }),
            u.length > 0 &&
                a.Z.dispatch({
                    type: 'APPLICATIONS_FETCH_SUCCESS',
                    applications: u
                }),
            {
                activityConfigs: l,
                applications: u.map((e) => N.ZP.createFromServer(e))
            }
        );
    } catch (e) {
        return (
            a.Z.dispatch({
                type: 'EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL',
                guildId: o
            }),
            {
                activityConfigs: u,
                applications: c
            }
        );
    }
}
async function el(e) {
    let { activityChannelId: t, invitedChannelId: n, applicationId: i, location: r } = e,
        a = await c.Z.createInvite(
            t,
            {
                target_type: Q.Iq.EMBEDDED_APPLICATION,
                target_application_id: i
            },
            r
        );
    null != R.Z.getChannel(n) && d.Z.sendInvite(n, a.code, r, null);
}
async function eu(e) {
    let { channelId: t, applicationId: n, userId: i, location: r, prefixedContent: a } = e,
        s = await c.Z.createInvite(
            t,
            {
                target_type: Q.Iq.EMBEDDED_APPLICATION,
                target_application_id: n
            },
            r
        );
    await l.Z.ensurePrivateChannel(i).then((e) => {
        let t;
        let n = R.Z.getChannel(e);
        if (null == n) throw Error('Private channel not found');
        null != a && (t = S.ZP.parse(n, a).content), d.Z.sendInvite(e, s.code, r, null, t);
    });
}
function ec() {
    a.Z.dispatch({ type: 'EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR' });
}
async function ed(e) {
    let t = z.ANM.ACTIVITY_TEST_MODE(e);
    try {
        return (
            await r.tn.get({
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
function ef(e) {
    a.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_SET_PANEL_MODE',
        activityPanelMode: e
    });
}
function e_(e) {
    a.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT',
        focusedActivityLayout: e
    });
}
