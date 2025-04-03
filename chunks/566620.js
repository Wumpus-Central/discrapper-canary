n.d(t, {
    $h: () => es,
    G6: () => en,
    W5: () => ep,
    cG: () => et,
    gC: () => em,
    kv: () => el,
    mW: () => ea,
    pu: () => ef,
    sN: () => ed,
    tg: () => eh,
    ux: () => e_,
    w1: () => eu
}),
    n(789020),
    n(47120),
    n(411104);
var r = n(990547),
    i = n(252258),
    o = n(544891),
    a = n(570140),
    s = n(668781),
    l = n(493683),
    c = n(475179),
    u = n(447543),
    d = n(904245),
    f = n(479531),
    _ = n(911969),
    p = n(46332),
    h = n(213459),
    m = n(667204),
    g = n(812236),
    E = n(812206),
    b = n(413523),
    y = n(358221),
    v = n(233764),
    O = n(375824),
    I = n(957730),
    S = n(48854),
    T = n(835873),
    N = n(973616),
    A = n(314897),
    C = n(592125),
    R = n(430824),
    P = n(496675),
    w = n(594174),
    D = n(979651),
    L = n(626135),
    x = n(585483),
    M = n(630388),
    k = n(823379),
    j = n(573261),
    U = n(595519),
    G = n(774226),
    B = n(317381),
    F = n(882347),
    V = n(16609),
    Z = n(224189),
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
function $(e, t, n) {
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
function ee(e) {
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
                $(e, t, n[t]);
            });
    }
    return e;
}
function et(e) {
    let t = B.ZP.getSelfEmbeddedActivityForLocation(e);
    null != t &&
        ea({
            location: t.location,
            applicationId: t.applicationId,
            showFeedback: !1
        });
}
async function en(e) {
    var t, n;
    let { channelId: r, applicationId: o, isStart: s, analyticsLocations: l, locationObject: c, embeddedActivitiesManager: u, componentId: d, commandOrigin: _, sectionName: p, source: h, partyId: m, onExecutedCallback: g, referrerId: E, customId: b, joinUserId: y, joinSessionId: I, secret: T, inviterUserId: N, instanceId: A, isContextlessActivity: R, onConfirmActivityLaunchChecksAlertOpen: P } = e,
        D = C.Z.getChannel(r),
        L = null != (t = null == D ? void 0 : D.getGuildId()) ? t : void 0,
        x = (0, G.sq)();
    if (!x && null == L && !(null != (n = null == D ? void 0 : D.isPrivate()) && n)) return !1;
    let M = (0, S.r)();
    try {
        a.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_START',
            nonce: M,
            applicationId: o,
            channelId: null != r ? r : null,
            componentId: d,
            analyticsLocations: l,
            source: h,
            commandOrigin: _,
            inviterUserId: N,
            launchParams: {
                customId: b,
                referrerId: E
            }
        });
        let e = w.default.getCurrentUser();
        if (
            (null != e &&
                (0, K.Z)({
                    type: s ? q.q5t.LAUNCH : q.q5t.JOIN,
                    userId: null == e ? void 0 : e.id,
                    guildId: L,
                    channelId: r,
                    channelType: null == D ? void 0 : D.type,
                    applicationId: o,
                    locationObject: c,
                    analyticsLocations: null != l ? l : [],
                    source: h,
                    partyId: m,
                    referrerId: E,
                    inviterUserId: N
                }),
            s && null != r)
        ) {
            if (!er(o, D)) throw new v.Z(v.Z.Reasons.INVALID_CHANNEL);
            let e = await ei({
                applicationId: o,
                nonce: M,
                channelId: r,
                guildId: L,
                commandOrigin: _,
                sectionName: p,
                source: h,
                onExecutedCallback: g,
                clientSupportsContextlessActivityLaunch: x,
                onConfirmActivityLaunchChecksAlertOpen: P,
                embeddedActivitiesManager: u,
                isContextlessActivity: R
            });
            if ('failure' === e.result && 4 !== e.reason) throw new v.Z(v.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
        } else {
            let e = await eo({
                applicationId: o,
                channelId: r,
                embeddedActivitiesManager: u,
                isStart: s,
                guildId: L,
                joinUserId: y,
                joinSessionId: I,
                secret: T,
                instanceId: A,
                isContextlessActivity: R
            });
            if ((null == g || g(), 'failure' === e.result)) throw new v.Z(v.Z.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED, e.reason);
        }
        a.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_SUCCESS',
            nonce: M,
            applicationId: o,
            channelId: null != r ? r : null
        });
    } catch (t) {
        let e = R ? i.E.CONTEXTLESS : null != L ? i.E.GUILD_CHANNEL : i.E.PRIVATE_CHANNEL;
        return (
            a.Z.dispatch({
                type: 'EMBEDDED_ACTIVITY_LAUNCH_FAIL',
                nonce: M,
                applicationId: o,
                channelId: null != r ? r : null,
                isStart: s,
                error: t instanceof v.Z || t instanceof f.Z || t instanceof O.Z ? t : new f.Z(t),
                locationKind: e
            }),
            !1
        );
    }
    return !0;
}
function er(e, t) {
    let n = (null == t ? void 0 : t.type) === q.d4z.GUILD_VOICE,
        r = E.Z.getApplication(e),
        i = null != r && (0, M.yE)(r.flags, q.udG.EMBEDDED),
        o = (0, U.l5)(t);
    return (n && i) || o;
}
async function ei(e) {
    let { applicationId: t, nonce: n, channelId: r, guildId: i, commandOrigin: o, sectionName: a, source: s, onExecutedCallback: l, clientSupportsContextlessActivityLaunch: c, onConfirmActivityLaunchChecksAlertOpen: u, embeddedActivitiesManager: d, isContextlessActivity: b } = e,
        y = null;
    try {
        y = await (0, g.ZP)(r, t);
    } catch (e) {
        if (e.message === g.sV)
            return {
                result: 'failure',
                reason: 1
            };
        throw e;
    }
    let v = y.handler !== _.VC.APP_HANDLER;
    if (!(v || Q.Yq.includes(t))) {
        null != r &&
            (await (0, h.FN)({
                type: 'channel',
                channelId: r
            })),
            await (0, h.FN)({ type: 'user' });
        let e = C.Z.getChannel(r);
        if (
            !(await (0, p.L)({
                applicationId: t,
                channel: e,
                commandIntegrationTypes: y.integration_types
            }))
        )
            return {
                result: 'failure',
                reason: 2
            };
    }
    let I = C.Z.getChannel(r),
        S = null != i ? R.Z.getGuild(i) : null;
    if (null == I)
        return {
            result: 'failure',
            reason: 3
        };
    if (v) {
        let e,
            n = E.Z.getApplication(t),
            r = B.ZP.getCurrentEmbeddedActivity();
        (null == r ? void 0 : r.applicationId) != null && (e = E.Z.getApplication(null == r ? void 0 : r.applicationId));
        let i = w.default.getCurrentUser();
        if (
            null != i &&
            !(await (0, F.p)({
                applicationId: t,
                application: n,
                channel: I,
                isContextless: null != b && b,
                currentEmbeddedApplication: e,
                embeddedActivitiesManager: d,
                user: i,
                onConfirmActivityLaunchChecksAlertOpen: u,
                shouldClosePopoutOnLeaveCurrentEmbeddedApplication: !1
            }))
        )
            return {
                result: 'failure',
                reason: 4
            };
    }
    return (
        await new Promise((e, u) => {
            (0, m.Z)({
                command: y,
                optionValues: {},
                context: {
                    channel: I,
                    guild: S
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
                            L.default.track(q.rMx.ACTIVITY_INTERACTION_CALLBACK_ERROR, {
                                channel_id: r,
                                guild_id: i,
                                application_id: t,
                                channel_type: null == I ? void 0 : I.type,
                                error_code: e,
                                error_message: n,
                                error_status: o,
                                error_reason_code: a,
                                source: s
                            }),
                            null != e && null != n && null != o
                                ? u(
                                      new f.Z({
                                          status: o,
                                          body: {
                                              message: n,
                                              code: e
                                          }
                                      })
                                  )
                                : null != a && a in O.Z.ReasonCodes
                                  ? u(new O.Z(a))
                                  : u(new O.Z(O.Z.ReasonCodes.UNKNOWN));
                    }
                })
            });
        }),
        { result: 'success' }
    );
}
async function eo(e) {
    let t,
        { applicationId: n, channelId: i, embeddedActivitiesManager: o, isStart: a, guildId: l, joinUserId: c, joinSessionId: u, secret: d, instanceId: f, isContextlessActivity: _ } = e,
        p = A.default.getSessionId(),
        h = w.default.getCurrentUser(),
        m = n;
    if (null == m)
        return {
            result: 'failure',
            reason: 1
        };
    let g = (0, G.sq)(),
        b = await (0, Z.Z)(m, i);
    if (null == h || null == b)
        return {
            result: 'failure',
            reason: 2
        };
    if (!g && null == i)
        return (
            x.S.dispatch(q.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, { applicationId: m }),
            {
                result: 'failure',
                reason: 3
            }
        );
    let y = C.Z.getChannel(i);
    if (!g && null == y)
        return {
            result: 'failure',
            reason: 3
        };
    let v = (0, H.e4)({
        channelId: i,
        ChannelStore: C.Z,
        GuildStore: R.Z,
        PermissionStore: P.Z,
        VoiceStateStore: D.Z
    });
    if (v !== H.jy.CAN_LAUNCH) {
        let e = 4;
        return (
            v === H.jy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION
                ? ((e = 5), (0, T.w)())
                : v === H.jy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS &&
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
            !a ||
            (await (0, F.p)({
                applicationId: n,
                application: b,
                channel: y,
                currentEmbeddedApplication: t,
                embeddedActivitiesManager: o,
                user: h,
                isContextless: null != _ && _
            }))
        ))
    )
        return {
            result: 'failure',
            reason: 7
        };
    if (null != y) {
        let e = (0, W.Z)(y.id),
            n = z.wP.includes(y.type);
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
    let I = {
        trackedActionData: {
            event: r.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
            properties: {
                guild_id: l,
                channel_id: i,
                application_id: n,
                session_id: p
            }
        },
        retries: 3,
        oldFormErrors: !0,
        rejectWithError: !0
    };
    if (null != i && !_)
        return (
            await j.Z.post(
                ee(
                    {
                        url: q.ANM.ACTIVITY_CHANNEL_LAUNCH(i, n),
                        body: {
                            session_id: p,
                            guild_id: null != l ? l : void 0
                        }
                    },
                    I
                )
            ),
            { result: 'success' }
        );
    if (_ && null != c && null != u) {
        let e = (
            await j.Z.post(
                ee(
                    {
                        url: q.ANM.JOIN_CONTEXTLESS_EMBEDDED_ACTIVITY_VIA_PRESENCE(c, u, n),
                        body: {
                            session_id: p,
                            secret: d
                        }
                    },
                    I
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
    return _ && null != f
        ? {
              result: 'success',
              data: {
                  instanceId: (
                      await j.Z.post(
                          ee(
                              {
                                  url: q.ANM.JOIN_CONTEXTLESS_EMBEDDED_ACTIVITY_VIA_INSTANCE(f, n),
                                  body: { session_id: p }
                              },
                              I
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
function ea(e) {
    let { location: t, applicationId: n, showFeedback: r = !0 } = e,
        i = B.ZP.getSelfEmbeddedActivityForLocation(t);
    a.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_CLOSE',
        applicationId: n,
        location: t,
        instanceId: null == i ? void 0 : i.launchId,
        showFeedback: r
    });
    let o = (0, V.pY)(t);
    if (null != o) {
        var s;
        let e = y.Z.getSelectedParticipantId(o),
            t = null == (s = w.default.getCurrentUser()) ? void 0 : s.id,
            r = B.ZP.getEmbeddedActivitiesForChannel(o).find((e) => e.applicationId === n);
        if (null == r || null == t || '' === t) return;
        e ===
            (0, b.gN)({
                applicationId: n,
                instanceId: null == r ? void 0 : r.compositeInstanceId
            }) && c.Z.selectParticipant(o, null);
    }
}
async function es() {
    try {
        a.Z.dispatch({ type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_START' });
        let e = await o.tn.get({
                url: q.ANM.APPLICATIONS_WITH_ASSETS,
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
async function el(e, t, n) {
    try {
        a.Z.dispatch({ type: 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START' });
        let r = await o.tn.post({
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
            a.Z.dispatch({
                type: 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS',
                attachment: r.body.attachment
            }),
            r.body.attachment
        );
    } catch (e) {
        return a.Z.dispatch({ type: 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL' }), new f.Z(e);
    }
}
let ec = (e, t, n) => {
    let { guildId: r } = n;
    (r === e || (null == r && null == e)) && t();
};
async function eu(e) {
    var t, n, i, o;
    let { guildId: s, force: l = !1 } = e,
        c = B.ZP.getShelfActivities(s),
        u = c.map((e) => E.Z.getApplication(e.application_id)).filter(k.lm);
    if (!l && !B.ZP.shouldFetchShelf(s)) {
        if (null == (t = B.ZP.getShelfFetchStatus(s)) ? void 0 : t.isFetching) {
            let e,
                t,
                n = new Promise((t) => {
                    (e = ec.bind(null, s, t)), a.Z.subscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS', e);
                }),
                r = new Promise((e) => {
                    (t = ec.bind(null, s, e)), a.Z.subscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL', t);
                });
            await Promise.race([n, r]), null != e && (a.Z.unsubscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS', e), (e = null)), null != t && (a.Z.unsubscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL', t), (t = null));
        }
        return {
            activityConfigs: c,
            applications: u
        };
    }
    try {
        a.Z.dispatch({
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
            l = null != (n = t.body.activities) ? n : [],
            c = null != (i = t.body.applications) ? i : [],
            u = null != (o = t.body.assets) ? o : {};
        return (
            a.Z.dispatch({
                type: 'EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS',
                guildId: s,
                activities: l,
                applications: c,
                assets: u
            }),
            c.length > 0 &&
                a.Z.dispatch({
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
            a.Z.dispatch({
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
async function ed(e) {
    let { activityChannelId: t, invitedChannelId: n, applicationId: r, location: i } = e,
        o = await u.ZP.createInvite(
            t,
            {
                target_type: X.Iq.EMBEDDED_APPLICATION,
                target_application_id: r
            },
            i
        );
    null != C.Z.getChannel(n) && d.Z.sendInvite(n, o.code, i, null);
}
async function ef(e) {
    let { channelId: t, applicationId: n, userId: r, location: i, prefixedContent: o } = e,
        a = await u.ZP.createInvite(
            t,
            {
                target_type: X.Iq.EMBEDDED_APPLICATION,
                target_application_id: n
            },
            i
        );
    await l.Z.ensurePrivateChannel(r).then((e) => {
        let t,
            n = C.Z.getChannel(e);
        if (null == n) throw Error('Private channel not found');
        null != o && (t = I.ZP.parse(n, o).content), d.Z.sendInvite(e, a.code, i, null, t);
    });
}
function e_() {
    a.Z.dispatch({ type: 'EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR' });
}
async function ep(e) {
    let t = q.ANM.ACTIVITY_TEST_MODE(e);
    try {
        return (
            await o.tn.get({
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
function eh(e) {
    a.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_SET_PANEL_MODE',
        activityPanelMode: e
    });
}
function em(e) {
    a.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT',
        focusedActivityLayout: e
    });
}
