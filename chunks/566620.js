r.d(n, {
    $h: function () {
        return ea;
    },
    W5: function () {
        return ef;
    },
    af: function () {
        return ee;
    },
    cG: function () {
        return $;
    },
    gC: function () {
        return eh;
    },
    kv: function () {
        return eo;
    },
    mW: function () {
        return ei;
    },
    pu: function () {
        return ec;
    },
    sN: function () {
        return eu;
    },
    tg: function () {
        return ep;
    },
    ux: function () {
        return ed;
    },
    w1: function () {
        return el;
    }
});
var i = r(789020);
var a = r(47120);
var o = r(990547),
    s = r(544891),
    l = r(570140),
    u = r(278323),
    c = r(668781),
    d = r(493683),
    f = r(475179),
    p = r(447543),
    h = r(904245),
    _ = r(479531),
    m = r(911969),
    g = r(46332),
    E = r(213459),
    v = r(667204),
    y = r(812236),
    b = r(812206),
    I = r(358221),
    T = r(233764),
    S = r(375824),
    A = r(48854),
    C = r(835873),
    N = r(973616),
    R = r(314897),
    O = r(592125),
    D = r(430824),
    x = r(496675),
    L = r(594174),
    w = r(979651),
    P = r(585483),
    M = r(630388),
    k = r(823379),
    U = r(573261),
    B = r(595519),
    G = r(774226),
    Z = r(317381),
    F = r(882347),
    V = r(16609),
    j = r(224189),
    H = r(374065),
    Y = r(917107),
    W = r(89425),
    K = r(275920),
    z = r(701488);
r(918559);
var q = r(981631),
    Q = r(674563),
    X = r(245335),
    J = r(388032);
function $(e) {
    let n = Z.ZP.getSelfEmbeddedActivityForLocation(e);
    null != n &&
        ei({
            location: n.location,
            applicationId: n.applicationId,
            showFeedback: !1
        });
}
async function ee(e) {
    var n, r;
    let { channelId: i, applicationId: a, isStart: o, analyticsLocations: s, locationObject: u, embeddedActivitiesManager: c, componentId: d, commandOrigin: f, sectionName: p, source: h, partyId: m, onExecutedCallback: g, referrerId: E, customId: v, joinUserId: y, joinSessionId: b, joinSecret: I, inviterUserId: C } = e,
        N = O.Z.getChannel(i),
        R = null !== (n = null == N ? void 0 : N.getGuildId()) && void 0 !== n ? n : void 0,
        D = (0, G.s)();
    if (!D && null == R && !(null !== (r = null == N ? void 0 : N.isPrivate()) && void 0 !== r && r)) return !1;
    let x = (0, A.r)();
    try {
        l.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_START',
            nonce: x,
            applicationId: a,
            channelId: null != i ? i : null,
            componentId: d,
            analyticsLocations: s,
            source: h,
            commandOrigin: f,
            inviterUserId: C,
            launchParams: {
                customId: v,
                referrerId: E
            }
        });
        let e = L.default.getCurrentUser();
        if (
            (null != e &&
                (0, K.Z)({
                    type: o ? q.q5t.LAUNCH : q.q5t.JOIN,
                    userId: null == e ? void 0 : e.id,
                    guildId: R,
                    channelId: i,
                    channelType: null == N ? void 0 : N.type,
                    applicationId: a,
                    locationObject: u,
                    analyticsLocations: null != s ? s : [],
                    source: h,
                    partyId: m,
                    referrerId: E,
                    inviterUserId: C
                }),
            o && null != i)
        ) {
            if (!et(a, N)) throw new T.Z(T.Z.Reasons.INVALID_CHANNEL);
            if (
                !(await en({
                    applicationId: a,
                    nonce: x,
                    channelId: i,
                    guildId: R,
                    commandOrigin: f,
                    sectionName: p,
                    source: h,
                    onExecutedCallback: g,
                    clientSupportsContextlessActivityLaunch: D
                }))
            )
                throw new T.Z(T.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
        } else {
            let e = await er({
                applicationId: a,
                channelId: i,
                embeddedActivitiesManager: c,
                isStart: o,
                guildId: R,
                joinUserId: y,
                joinSessionId: b,
                joinSecret: I
            });
            if ((null == g || g(), !e)) throw new T.Z(T.Z.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED);
        }
        l.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_SUCCESS',
            nonce: x,
            applicationId: a,
            channelId: null != i ? i : null
        });
    } catch (e) {
        return (
            l.Z.dispatch({
                type: 'EMBEDDED_ACTIVITY_LAUNCH_FAIL',
                nonce: x,
                applicationId: a,
                channelId: null != i ? i : null,
                isStart: o,
                error: e instanceof T.Z || e instanceof _.Z || e instanceof S.Z ? e : new _.Z(e)
            }),
            !1
        );
    }
    return !0;
}
function et(e, n) {
    let r = (null == n ? void 0 : n.type) === q.d4z.GUILD_VOICE,
        i = b.Z.getApplication(e),
        a = null != i && (0, M.yE)(i.flags, q.udG.EMBEDDED),
        o = (0, B.l5)(n);
    return (r && a) || o;
}
async function en(e) {
    let { applicationId: n, nonce: r, channelId: i, guildId: a, commandOrigin: o, sectionName: s, source: l, onExecutedCallback: u, clientSupportsContextlessActivityLaunch: c } = e,
        d = null;
    try {
        d = await (0, y.ZP)(i, n);
    } catch (e) {
        if (e.message === y.sV) return !1;
        throw e;
    }
    if (!(d.handler !== m.VC.APP_HANDLER || Q.Yq.includes(n))) {
        null != i &&
            (await (0, E.FN)({
                type: 'channel',
                channelId: i
            })),
            await (0, E.FN)({ type: 'user' });
        let e = O.Z.getChannel(i);
        if (
            !(await (0, g.L)({
                applicationId: n,
                channel: e,
                commandIntegrationTypes: d.integration_types
            }))
        )
            return !1;
    }
    let f = O.Z.getChannel(i),
        p = null != a ? D.Z.getGuild(a) : null;
    return (
        null != f &&
        (await new Promise((e, n) => {
            (0, v.Z)({
                command: d,
                optionValues: {},
                context: {
                    channel: f,
                    guild: p
                },
                commandOrigin: o,
                sectionName: s,
                source: l,
                clientSupportsContextlessActivityLaunch: c,
                interactionLifecycleOptionsFactory: () => ({
                    nonce: r,
                    onSuccess: () => {
                        null == u || u(), e();
                    },
                    onFailure: (e, r, i, a) => {
                        null == u || u(),
                            null != e && null != r && null != i
                                ? n(
                                      new _.Z({
                                          status: i,
                                          body: {
                                              message: r,
                                              code: e
                                          }
                                      })
                                  )
                                : null != a && a in S.Z.ReasonCodes
                                  ? n(new S.Z(a))
                                  : n(new S.Z(S.Z.ReasonCodes.UNKNOWN));
                    }
                })
            });
        }),
        !0)
    );
}
async function er(e) {
    let n,
        { applicationId: r, channelId: i, embeddedActivitiesManager: a, isStart: s, guildId: l, joinUserId: d, joinSessionId: f, joinSecret: p } = e,
        h = R.default.getSessionId(),
        _ = L.default.getCurrentUser(),
        m = r;
    if (null == m) return !1;
    let g = (0, G.s)(),
        E = await (0, j.Z)(m, i);
    if (null == _ || null == E) return !1;
    if (!g && null == i) return P.S.dispatch(q.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, { applicationId: m }), !1;
    let v = O.Z.getChannel(i);
    if (!g && null == v) return !1;
    let y = (0, H.e4)({
        channelId: i,
        ChannelStore: O.Z,
        GuildStore: D.Z,
        PermissionStore: x.Z,
        VoiceStateStore: w.Z
    });
    if (y !== H.jy.CAN_LAUNCH)
        return (
            y === H.jy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION
                ? (0, C.w)()
                : y === H.jy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS &&
                  c.Z.show({
                      title: J.intl.string(J.t['IOy+Iy']),
                      body: J.intl.string(J.t.UXoQTk),
                      hideActionSheet: !1
                  }),
            !1
        );
    let I = Z.ZP.getCurrentEmbeddedActivity();
    if (
        ((null == I ? void 0 : I.applicationId) != null && (n = b.Z.getApplication(null == I ? void 0 : I.applicationId)),
        !(
            !s ||
            (await (0, F.p)({
                applicationId: r,
                application: E,
                channel: v,
                currentEmbeddedApplication: n,
                embeddedActivitiesManager: a,
                user: _
            }))
        ))
    )
        return !1;
    if (null != v) {
        let e = (0, Y.Z)(v.id),
            r = z.wP.includes(v.type);
        if (e) {
            if (
                !(await (0, W.Z)({
                    channelId: v.id,
                    bypassChangeModal: null != n
                }))
            )
                return !1;
        } else if (!(0, B.WS)(v) || !r) return !1;
    }
    return (null == p && null != d && null != f && null == i && (p = await u.Z.getJoinSecret(d, f, r)), null != i && null == p)
        ? (await U.Z.post({
              url: q.ANM.ACTIVITY_CHANNEL_LAUNCH(i, r),
              body: {
                  session_id: h,
                  guild_id: null != l ? l : void 0
              },
              trackedActionData: {
                  event: o.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
                  properties: {
                      guild_id: l,
                      channel_id: i,
                      application_id: r,
                      session_id: h
                  }
              },
              retries: 3,
              oldFormErrors: !0,
              rejectWithError: !0
          }),
          !0)
        : null != p &&
              (await U.Z.post({
                  url: q.ANM.ACTIVITY_JOIN_INSTANCE(r, p),
                  body: { session_id: h },
                  trackedActionData: {
                      event: o.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
                      properties: {
                          application_id: r,
                          session_id: h
                      }
                  },
                  retries: 3,
                  oldFormErrors: !0,
                  rejectWithError: !0
              }),
              !0);
}
function ei(e) {
    let { location: n, applicationId: r, showFeedback: i = !0 } = e,
        a = Z.ZP.getSelfEmbeddedActivityForLocation(n);
    l.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_CLOSE',
        applicationId: r,
        location: n,
        instanceId: null == a ? void 0 : a.launchId,
        showFeedback: i
    });
    let o = (0, V.p)(n);
    if (null != o) {
        var s;
        let e = I.Z.getSelectedParticipantId(o),
            n = null === (s = L.default.getCurrentUser()) || void 0 === s ? void 0 : s.id;
        if (null == Z.ZP.getEmbeddedActivitiesForChannel(o).find((e) => e.applicationId === r) || null == n || '' === n) return;
        e === r && f.Z.selectParticipant(o, null);
    }
}
async function ea() {
    try {
        l.Z.dispatch({ type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_START' });
        let e = await s.tn.get({
                url: q.ANM.APPLICATIONS_WITH_ASSETS,
                query: { with_team_applications: !0 },
                oldFormErrors: !0,
                rejectWithError: !0
            }),
            n = e.body.applications,
            r = n.map((e) => N.ZP.createFromServer(e));
        l.Z.dispatch({
            type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS',
            applications: r,
            assets: e.body.assets
        }),
            l.Z.dispatch({
                type: 'APPLICATIONS_FETCH_SUCCESS',
                applications: n
            });
    } catch (e) {
        l.Z.dispatch({ type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL' });
    }
}
async function eo(e, n, r) {
    try {
        l.Z.dispatch({ type: 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START' });
        let i = await s.tn.post({
            url: q.ANM.APPLICATION_UPLOAD_ATTACHMENT(e),
            query: { channel_id: n },
            attachments: [
                {
                    name: 'file',
                    file: r
                }
            ],
            rejectWithError: !0
        });
        return (
            l.Z.dispatch({
                type: 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS',
                attachment: i.body.attachment
            }),
            i.body.attachment
        );
    } catch (e) {
        return l.Z.dispatch({ type: 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL' }), new _.Z(e);
    }
}
let es = (e, n, r) => {
    let { guildId: i } = r;
    (i === e || (null == i && null == e)) && n();
};
async function el(e) {
    var n, r, i, a;
    let { guildId: s, force: u = !1 } = e,
        c = Z.ZP.getShelfActivities(s),
        d = c.map((e) => b.Z.getApplication(e.application_id)).filter(k.lm);
    if (!u && !Z.ZP.shouldFetchShelf(s)) {
        if (null === (n = Z.ZP.getShelfFetchStatus(s)) || void 0 === n ? void 0 : n.isFetching) {
            let e, n;
            let r = new Promise((n) => {
                    (e = es.bind(null, s, n)), l.Z.subscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS', e);
                }),
                i = new Promise((e) => {
                    (n = es.bind(null, s, e)), l.Z.subscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL', n);
                });
            await Promise.race([r, i]), null != e && (l.Z.unsubscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS', e), (e = null)), null != n && (l.Z.unsubscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL', n), (n = null));
        }
        return {
            activityConfigs: c,
            applications: d
        };
    }
    try {
        l.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_FETCH_SHELF',
            guildId: s
        });
        let e = void 0 !== s && '' !== s ? { guild_id: s } : void 0,
            n = await U.Z.get({
                url: q.ANM.ACTIVITY_SHELF,
                query: e,
                trackedActionData: {
                    event: o.NetworkActionNames.EMBEDDED_ACTIVITIES_FETCH_SHELF,
                    properties: { guild_id: s }
                },
                retries: 3,
                oldFormErrors: !0,
                rejectWithError: !0
            }),
            u = null !== (r = n.body.activities) && void 0 !== r ? r : [],
            c = null !== (i = n.body.applications) && void 0 !== i ? i : [],
            d = null !== (a = n.body.assets) && void 0 !== a ? a : {};
        return (
            l.Z.dispatch({
                type: 'EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS',
                guildId: s,
                activities: u,
                applications: c,
                assets: d
            }),
            c.length > 0 &&
                l.Z.dispatch({
                    type: 'APPLICATIONS_FETCH_SUCCESS',
                    applications: c
                }),
            {
                activityConfigs: u,
                applications: c.map((e) => N.ZP.createFromServer(e))
            }
        );
    } catch (e) {
        return (
            l.Z.dispatch({
                type: 'EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL',
                guildId: s
            }),
            {
                activityConfigs: c,
                applications: d
            }
        );
    }
}
async function eu(e) {
    let { activityChannelId: n, invitedChannelId: r, applicationId: i, location: a } = e,
        o = await p.Z.createInvite(
            n,
            {
                target_type: X.Iq.EMBEDDED_APPLICATION,
                target_application_id: i
            },
            a
        );
    null != O.Z.getChannel(r) && h.Z.sendInvite(r, o.code, a, null);
}
async function ec(e) {
    let { channelId: n, applicationId: r, userId: i, location: a } = e,
        o = await p.Z.createInvite(
            n,
            {
                target_type: X.Iq.EMBEDDED_APPLICATION,
                target_application_id: r
            },
            a
        );
    d.Z.ensurePrivateChannel(i).then((e) => {
        null != O.Z.getChannel(e) && h.Z.sendInvite(e, o.code, a, null);
    });
}
function ed() {
    l.Z.dispatch({ type: 'EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR' });
}
async function ef(e) {
    let n = q.ANM.ACTIVITY_TEST_MODE(e);
    try {
        return (
            await s.tn.get({
                url: n,
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
    l.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_SET_PANEL_MODE',
        activityPanelMode: e
    });
}
function eh(e) {
    l.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT',
        focusedActivityLayout: e
    });
}
