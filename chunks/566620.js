n.d(t, {
    $h: () => el,
    G6: () => er,
    W5: () => eh,
    cG: () => et,
    gC: () => eg,
    kv: () => ec,
    mW: () => es,
    pu: () => e_,
    sN: () => ef,
    tg: () => em,
    ux: () => ep,
    w1: () => ed
}),
    n(997841),
    n(388685),
    n(415506);
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
    V = n(882347),
    F = n(16609),
    Z = n(224189),
    H = n(374065),
    Y = n(917107),
    W = n(89425),
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
        es({
            location: t.location,
            applicationId: t.applicationId,
            showFeedback: !1
        });
}
function en(e) {
    let t,
        n,
        r,
        i,
        o,
        { isContextlessActivity: a, instanceId: s, partyId: l, channelId: c } = e;
    if (a) {
        let e = null != s ? s : l,
            { channelId: t, guildId: n } =
                null != e
                    ? (0, F.dK)(e)
                    : {
                          channelId: void 0,
                          guildId: void 0
                      };
        (i = t), (o = n);
    } else {
        var u;
        (t = c), (r = null != (u = null == (n = C.Z.getChannel(t)) ? void 0 : n.getGuildId()) ? u : void 0), (i = t), (o = r);
    }
    return {
        channelIdForLaunch: t,
        channelForLaunch: n,
        guildIdForLaunch: r,
        channelIdForAnalytics: i,
        guildIdForAnalytics: o
    };
}
async function er(e) {
    let { channelId: t, applicationId: n, isStart: r, analyticsLocations: o, locationObject: s, embeddedActivitiesManager: l, componentId: c, commandOrigin: u, sectionName: d, source: _, partyId: p, onExecutedCallback: h, referrerId: m, customId: g, joinUserId: E, joinSessionId: b, secret: y, inviterUserId: I, instanceId: T, isContextlessActivity: A, onConfirmActivityLaunchChecksAlertOpen: N } = e,
        C = null != p ? p : T,
        {
            channelIdForLaunch: R,
            channelForLaunch: P,
            guildIdForLaunch: D,
            channelIdForAnalytics: L,
            guildIdForAnalytics: x
        } = en({
            isContextlessActivity: A,
            instanceId: T,
            partyId: C,
            channelId: t
        }),
        M = (0, G.sq)();
    if (!M) {
        var k;
        if (null == D && !(null != (k = null == P ? void 0 : P.isPrivate()) && k)) return !1;
    }
    let j = (0, S.r)();
    try {
        a.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_START',
            nonce: j,
            applicationId: n,
            channelId: null != R ? R : null,
            componentId: c,
            analyticsLocations: o,
            source: _,
            commandOrigin: u,
            inviterUserId: I,
            launchParams: {
                customId: g,
                referrerId: m
            }
        });
        let e = w.default.getCurrentUser();
        if (
            (null != e &&
                (0, K.Z)({
                    type: r ? q.q5t.LAUNCH : q.q5t.JOIN,
                    userId: null == e ? void 0 : e.id,
                    guildId: x,
                    channelId: L,
                    channelType: null == P ? void 0 : P.type,
                    applicationId: n,
                    locationObject: s,
                    analyticsLocations: null != o ? o : [],
                    source: _,
                    partyId: C,
                    referrerId: m,
                    inviterUserId: I
                }),
            r)
        ) {
            if (null == R || !ei(n, P)) throw new O.Z(O.Z.Reasons.INVALID_CHANNEL);
            let e = await eo({
                applicationId: n,
                nonce: j,
                channelId: R,
                guildId: D,
                commandOrigin: u,
                sectionName: d,
                source: _,
                onExecutedCallback: h,
                clientSupportsContextlessActivityLaunch: M,
                onConfirmActivityLaunchChecksAlertOpen: N,
                embeddedActivitiesManager: l,
                isContextlessActivity: A
            });
            if ('failure' === e.result && 4 !== e.reason) throw new O.Z(O.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
        } else {
            let e = await ea({
                applicationId: n,
                channelId: R,
                embeddedActivitiesManager: l,
                isStart: r,
                guildId: D,
                joinUserId: E,
                joinSessionId: b,
                secret: y,
                instanceId: T,
                isContextlessActivity: A
            });
            if ((null == h || h(), 'failure' === e.result)) throw new O.Z(O.Z.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED, e.reason);
        }
        a.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_SUCCESS',
            nonce: j,
            applicationId: n,
            channelId: null != R ? R : null
        });
    } catch (t) {
        let e = A ? i.E.CONTEXTLESS : null != D ? i.E.GUILD_CHANNEL : i.E.PRIVATE_CHANNEL;
        return (
            a.Z.dispatch({
                type: 'EMBEDDED_ACTIVITY_LAUNCH_FAIL',
                nonce: j,
                applicationId: n,
                channelId: null != L ? L : null,
                guildId: null != x ? x : null,
                isStart: r,
                error: t instanceof O.Z || t instanceof f.Z || t instanceof v.Z ? t : new f.Z(t),
                locationKind: e
            }),
            !1
        );
    }
    return !0;
}
function ei(e, t) {
    let n = (null == t ? void 0 : t.type) === q.d4z.GUILD_VOICE,
        r = g.Z.getApplication(e),
        i = null != r && (0, M.yE)(r.flags, q.udG.EMBEDDED),
        o = (0, U.l5)(t);
    return (n && i) || o;
}
async function eo(e) {
    let { applicationId: t, nonce: n, channelId: r, guildId: i, commandOrigin: o, sectionName: a, source: s, onExecutedCallback: l, clientSupportsContextlessActivityLaunch: c, onConfirmActivityLaunchChecksAlertOpen: u, embeddedActivitiesManager: d, isContextlessActivity: b } = e,
        y = null;
    try {
        y = await (0, m.ZP)(r, t);
    } catch (e) {
        if (e.message === m.sV)
            return {
                result: 'failure',
                reason: 1
            };
        throw e;
    }
    let O = y.handler !== _.VC.APP_HANDLER;
    if (!(O || Q.Yq.includes(t))) {
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
                commandIntegrationTypes: y.integration_types
            });
        if (!n)
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
    if (O) {
        let e,
            n = g.Z.getApplication(t),
            r = B.ZP.getCurrentEmbeddedActivity();
        (null == r ? void 0 : r.applicationId) != null && (e = g.Z.getApplication(null == r ? void 0 : r.applicationId));
        let i = w.default.getCurrentUser();
        if (
            null != i &&
            !(await (0, V.p)({
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
            (0, h.Z)({
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
                                : null != a && a in v.Z.ReasonCodes
                                  ? u(new v.Z(a))
                                  : u(new v.Z(v.Z.ReasonCodes.UNKNOWN));
                    }
                })
            });
        }),
        { result: 'success' }
    );
}
async function ea(e) {
    let t,
        { applicationId: n, channelId: i, embeddedActivitiesManager: o, isStart: a, guildId: l, joinUserId: c, joinSessionId: u, secret: d, instanceId: f, isContextlessActivity: _ } = e,
        p = N.default.getSessionId(),
        h = w.default.getCurrentUser(),
        m = n;
    if (null == m)
        return {
            result: 'failure',
            reason: 1
        };
    let E = (0, G.sq)(),
        b = await (0, Z.Z)(m, i);
    if (null == h || null == b)
        return {
            result: 'failure',
            reason: 2
        };
    if (!E && null == i)
        return (
            x.S.dispatch(q.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, { applicationId: m }),
            {
                result: 'failure',
                reason: 3
            }
        );
    let y = C.Z.getChannel(i);
    if (!E && null == y)
        return {
            result: 'failure',
            reason: 3
        };
    let O = (0, H.e4)({
        channelId: i,
        ChannelStore: C.Z,
        GuildStore: R.Z,
        PermissionStore: P.Z,
        VoiceStateStore: D.Z
    });
    if (O !== H.jy.CAN_LAUNCH) {
        let e = 4;
        return (
            O === H.jy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION
                ? ((e = 5), (0, T.w)())
                : O === H.jy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS &&
                  ((e = 6),
                  s.Z.show({
                      title: J.intl.string(J.t['IOy+Iy']),
                      body: J.intl.string(J.t.UXoQTk),
                      hideActionSheet: !1
                  })),
            {
                result: 'failure',
                reason: e
            }
        );
    }
    let v = B.ZP.getCurrentEmbeddedActivity();
    if (
        ((null == v ? void 0 : v.applicationId) != null && (t = g.Z.getApplication(null == v ? void 0 : v.applicationId)),
        !(
            !a ||
            (await (0, V.p)({
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
        let e = (0, Y.Z)(y.id),
            n = z.wP.includes(y.type);
        if (e) {
            if (
                !(await (0, W.Z)({
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
function es(e) {
    let { location: t, applicationId: n, showFeedback: r = !0 } = e,
        i = B.ZP.getSelfEmbeddedActivityForLocation(t);
    a.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_CLOSE',
        applicationId: n,
        location: t,
        instanceId: null == i ? void 0 : i.launchId,
        showFeedback: r
    });
    let o = (0, F.pY)(t);
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
async function el() {
    try {
        a.Z.dispatch({ type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_START' });
        let e = await o.tn.get({
                url: q.ANM.APPLICATIONS_WITH_ASSETS,
                query: { with_team_applications: !0 },
                oldFormErrors: !0,
                rejectWithError: !0
            }),
            t = e.body.applications,
            n = t.map((e) => A.ZP.createFromServer(e));
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
async function ec(e, t, n) {
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
let eu = (e, t, n) => {
    let { guildId: r } = n;
    (r === e || (null == r && null == e)) && t();
};
async function ed(e) {
    var t, n, i, o;
    let { guildId: s, force: l = !1 } = e,
        c = B.ZP.getShelfActivities(s),
        u = c.map((e) => g.Z.getApplication(e.application_id)).filter(k.lm);
    if (!l && !B.ZP.shouldFetchShelf(s)) {
        if (null == (t = B.ZP.getShelfFetchStatus(s)) ? void 0 : t.isFetching) {
            let e,
                t,
                n = new Promise((t) => {
                    (e = eu.bind(null, s, t)), a.Z.subscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS', e);
                }),
                r = new Promise((e) => {
                    (t = eu.bind(null, s, e)), a.Z.subscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL', t);
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
                applications: c.map((e) => A.ZP.createFromServer(e))
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
async function ef(e) {
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
async function e_(e) {
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
function ep() {
    a.Z.dispatch({ type: 'EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR' });
}
async function eh(e) {
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
function em(e) {
    a.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_SET_PANEL_MODE',
        activityPanelMode: e
    });
}
function eg(e) {
    a.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT',
        focusedActivityLayout: e
    });
}
