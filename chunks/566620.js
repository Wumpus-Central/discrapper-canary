n.d(t, {
    $h: () => ea,
    G6: () => et,
    W5: () => ep,
    cG: () => ee,
    gC: () => eh,
    kv: () => es,
    mW: () => eo,
    pu: () => ed,
    sN: () => eu,
    tg: () => e_,
    ux: () => ef,
    w1: () => ec
}),
    n(789020),
    n(47120),
    n(411104);
var r = n(990547),
    i = n(544891),
    o = n(570140),
    a = n(668781),
    s = n(493683),
    l = n(475179),
    c = n(447543),
    u = n(904245),
    d = n(479531),
    f = n(911969),
    p = n(46332),
    _ = n(213459),
    h = n(667204),
    m = n(812236),
    g = n(812206),
    E = n(413523),
    v = n(358221),
    b = n(233764),
    y = n(375824),
    O = n(957730),
    S = n(48854),
    I = n(835873),
    T = n(973616),
    N = n(314897),
    A = n(592125),
    C = n(430824),
    R = n(496675),
    P = n(594174),
    D = n(979651),
    w = n(626135),
    L = n(585483),
    x = n(630388),
    M = n(823379),
    j = n(573261),
    k = n(595519),
    U = n(774226),
    G = n(317381),
    B = n(882347),
    F = n(16609),
    V = n(224189),
    Z = n(374065),
    H = n(917107),
    W = n(89425),
    Y = n(275920),
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
        eo({
            location: t.location,
            applicationId: t.applicationId,
            showFeedback: !1
        });
}
async function et(e) {
    var t, n;
    let { channelId: r, applicationId: i, isStart: a, analyticsLocations: s, locationObject: l, embeddedActivitiesManager: c, componentId: u, commandOrigin: f, sectionName: p, source: _, partyId: h, onExecutedCallback: m, referrerId: g, customId: E, joinUserId: v, joinSessionId: O, secret: I, inviterUserId: T, instanceId: N, isContextlessActivity: C } = e,
        R = A.Z.getChannel(r),
        D = null !== (t = null == R ? void 0 : R.getGuildId()) && void 0 !== t ? t : void 0,
        w = (0, U.sq)();
    if (!w && null == D && !(null !== (n = null == R ? void 0 : R.isPrivate()) && void 0 !== n && n)) return !1;
    let L = (0, S.r)();
    try {
        o.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_START',
            nonce: L,
            applicationId: i,
            channelId: null != r ? r : null,
            componentId: u,
            analyticsLocations: s,
            source: _,
            commandOrigin: f,
            inviterUserId: T,
            launchParams: {
                customId: E,
                referrerId: g
            }
        });
        let e = P.default.getCurrentUser();
        if (
            (null != e &&
                (0, Y.Z)({
                    type: a ? z.q5t.LAUNCH : z.q5t.JOIN,
                    userId: null == e ? void 0 : e.id,
                    guildId: D,
                    channelId: r,
                    channelType: null == R ? void 0 : R.type,
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
            if (!en(i, R)) throw new b.Z(b.Z.Reasons.INVALID_CHANNEL);
            if (
                !(await er({
                    applicationId: i,
                    nonce: L,
                    channelId: r,
                    guildId: D,
                    commandOrigin: f,
                    sectionName: p,
                    source: _,
                    onExecutedCallback: m,
                    clientSupportsContextlessActivityLaunch: w
                }))
            )
                throw new b.Z(b.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
        } else {
            let e = await ei({
                applicationId: i,
                channelId: r,
                embeddedActivitiesManager: c,
                isStart: a,
                guildId: D,
                joinUserId: v,
                joinSessionId: O,
                secret: I,
                instanceId: N,
                isContextlessActivity: C
            });
            if ((null == m || m(), 'failure' === e.result)) throw new b.Z(b.Z.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED, e.reason);
        }
        o.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_SUCCESS',
            nonce: L,
            applicationId: i,
            channelId: null != r ? r : null
        });
    } catch (e) {
        return (
            o.Z.dispatch({
                type: 'EMBEDDED_ACTIVITY_LAUNCH_FAIL',
                nonce: L,
                applicationId: i,
                channelId: null != r ? r : null,
                isStart: a,
                error: e instanceof b.Z || e instanceof d.Z || e instanceof y.Z ? e : new d.Z(e)
            }),
            !1
        );
    }
    return !0;
}
function en(e, t) {
    let n = (null == t ? void 0 : t.type) === z.d4z.GUILD_VOICE,
        r = g.Z.getApplication(e),
        i = null != r && (0, x.yE)(r.flags, z.udG.EMBEDDED),
        o = (0, k.l5)(t);
    return (n && i) || o;
}
async function er(e) {
    let { applicationId: t, nonce: n, channelId: r, guildId: i, commandOrigin: o, sectionName: a, source: s, onExecutedCallback: l, clientSupportsContextlessActivityLaunch: c } = e,
        u = null;
    try {
        u = await (0, m.ZP)(r, t);
    } catch (e) {
        if (e.message === m.sV) return !1;
        throw e;
    }
    if (!(u.handler !== f.VC.APP_HANDLER || q.Yq.includes(t))) {
        null != r &&
            (await (0, _.FN)({
                type: 'channel',
                channelId: r
            })),
            await (0, _.FN)({ type: 'user' });
        let e = A.Z.getChannel(r);
        if (
            !(await (0, p.L)({
                applicationId: t,
                channel: e,
                commandIntegrationTypes: u.integration_types
            }))
        )
            return !1;
    }
    let g = A.Z.getChannel(r),
        E = null != i ? C.Z.getGuild(i) : null;
    return (
        null != g &&
        (await new Promise((e, f) => {
            (0, h.Z)({
                command: u,
                optionValues: {},
                context: {
                    channel: g,
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
                            w.default.track(z.rMx.ACTIVITY_INTERACTION_CALLBACK_ERROR, {
                                channel_id: r,
                                guild_id: i,
                                application_id: t,
                                channel_type: null == g ? void 0 : g.type,
                                error_code: e,
                                error_message: n,
                                error_status: o,
                                error_reason_code: a,
                                source: s
                            }),
                            null != e && null != n && null != o
                                ? f(
                                      new d.Z({
                                          status: o,
                                          body: {
                                              message: n,
                                              code: e
                                          }
                                      })
                                  )
                                : null != a && a in y.Z.ReasonCodes
                                  ? f(new y.Z(a))
                                  : f(new y.Z(y.Z.ReasonCodes.UNKNOWN));
                    }
                })
            });
        }),
        !0)
    );
}
async function ei(e) {
    let t,
        { applicationId: n, channelId: i, embeddedActivitiesManager: o, isStart: s, guildId: l, joinUserId: c, joinSessionId: u, secret: d, instanceId: f, isContextlessActivity: p } = e,
        _ = N.default.getSessionId(),
        h = P.default.getCurrentUser(),
        m = n;
    if (null == m)
        return {
            result: 'failure',
            reason: 1
        };
    let E = (0, U.sq)(),
        v = await (0, V.Z)(m, i);
    if (null == h || null == v)
        return {
            result: 'failure',
            reason: 2
        };
    if (!E && null == i)
        return (
            L.S.dispatch(z.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, { applicationId: m }),
            {
                result: 'failure',
                reason: 3
            }
        );
    let b = A.Z.getChannel(i);
    if (!E && null == b)
        return {
            result: 'failure',
            reason: 3
        };
    let y = (0, Z.e4)({
        channelId: i,
        ChannelStore: A.Z,
        GuildStore: C.Z,
        PermissionStore: R.Z,
        VoiceStateStore: D.Z
    });
    if (y !== Z.jy.CAN_LAUNCH) {
        let e = 4;
        return (
            y === Z.jy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION
                ? ((e = 5), (0, I.w)())
                : y === Z.jy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS &&
                  ((e = 6),
                  a.Z.show({
                      title: X.NW.string(X.t['IOy+Iy']),
                      body: X.NW.string(X.t.UXoQTk),
                      hideActionSheet: !1
                  })),
            {
                result: 'failure',
                reason: e
            }
        );
    }
    let O = G.ZP.getCurrentEmbeddedActivity();
    if (
        ((null == O ? void 0 : O.applicationId) != null && (t = g.Z.getApplication(null == O ? void 0 : O.applicationId)),
        !(
            !s ||
            (await (0, B.p)({
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
        let e = (0, H.Z)(b.id),
            n = K.wP.includes(b.type);
        if (e) {
            if (
                !(await (0, W.Z)({
                    channelId: b.id,
                    bypassChangeModal: null != t
                }))
            )
                return {
                    result: 'failure',
                    reason: 8
                };
        } else if (!(0, k.WS)(b) || !n)
            return {
                result: 'failure',
                reason: 9
            };
    }
    let S = {
        trackedActionData: {
            event: r.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
            properties: {
                guild_id: l,
                channel_id: i,
                application_id: n,
                session_id: _
            }
        },
        retries: 3,
        oldFormErrors: !0,
        rejectWithError: !0
    };
    if (null != i && !p)
        return (
            await j.Z.post(
                $(
                    {
                        url: z.ANM.ACTIVITY_CHANNEL_LAUNCH(i, n),
                        body: {
                            session_id: _,
                            guild_id: null != l ? l : void 0
                        }
                    },
                    S
                )
            ),
            { result: 'success' }
        );
    if (p && null != c && null != u) {
        let e = (
            await j.Z.post(
                $(
                    {
                        url: z.ANM.JOIN_CONTEXTLESS_EMBEDDED_ACTIVITY_VIA_PRESENCE(c, u, n),
                        body: {
                            session_id: _,
                            secret: d
                        }
                    },
                    S
                )
            )
        ).body;
        return {
            result: 'success',
            data: {
                joinSecret: e.secret,
                instanceId: e.instance_id
            }
        };
    }
    return p && null != f
        ? {
              result: 'success',
              data: {
                  instanceId: (
                      await j.Z.post(
                          $(
                              {
                                  url: z.ANM.JOIN_CONTEXTLESS_EMBEDDED_ACTIVITY_VIA_INSTANCE(f, n),
                                  body: { session_id: _ }
                              },
                              S
                          )
                      )
                  ).body.instance_id
              }
          }
        : {
              result: 'failure',
              reason: 0
          };
}
function eo(e) {
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
        let e = v.Z.getSelectedParticipantId(a),
            t = null === (s = P.default.getCurrentUser()) || void 0 === s ? void 0 : s.id,
            r = G.ZP.getEmbeddedActivitiesForChannel(a).find((e) => e.applicationId === n);
        if (null == r || null == t || '' === t) return;
        e ===
            (0, E.gN)({
                applicationId: n,
                instanceId: null == r ? void 0 : r.compositeInstanceId
            }) && l.Z.selectParticipant(a, null);
    }
}
async function ea() {
    try {
        o.Z.dispatch({ type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_START' });
        let e = await i.tn.get({
                url: z.ANM.APPLICATIONS_WITH_ASSETS,
                query: { with_team_applications: !0 },
                oldFormErrors: !0,
                rejectWithError: !0
            }),
            t = e.body.applications,
            n = t.map((e) => T.ZP.createFromServer(e));
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
        let r = await i.tn.post({
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
        return o.Z.dispatch({ type: 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL' }), new d.Z(e);
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
        if (null === (t = G.ZP.getShelfFetchStatus(s)) || void 0 === t ? void 0 : t.isFetching) {
            let e, t;
            let n = new Promise((t) => {
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
                applications: c.map((e) => T.ZP.createFromServer(e))
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
        o = await c.Z.createInvite(
            t,
            {
                target_type: Q.Iq.EMBEDDED_APPLICATION,
                target_application_id: r
            },
            i
        );
    null != A.Z.getChannel(n) && u.Z.sendInvite(n, o.code, i, null);
}
async function ed(e) {
    let { channelId: t, applicationId: n, userId: r, location: i, prefixedContent: o } = e,
        a = await c.Z.createInvite(
            t,
            {
                target_type: Q.Iq.EMBEDDED_APPLICATION,
                target_application_id: n
            },
            i
        );
    await s.Z.ensurePrivateChannel(r).then((e) => {
        let t;
        let n = A.Z.getChannel(e);
        if (null == n) throw Error('Private channel not found');
        null != o && (t = O.ZP.parse(n, o).content), u.Z.sendInvite(e, a.code, i, null, t);
    });
}
function ef() {
    o.Z.dispatch({ type: 'EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR' });
}
async function ep(e) {
    let t = z.ANM.ACTIVITY_TEST_MODE(e);
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
function e_(e) {
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
