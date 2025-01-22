r.d(n, {
    $h: function () {
        return eo;
    },
    W5: function () {
        return ep;
    },
    af: function () {
        return et;
    },
    cG: function () {
        return ee;
    },
    gC: function () {
        return e_;
    },
    kv: function () {
        return es;
    },
    mW: function () {
        return ea;
    },
    pu: function () {
        return ed;
    },
    sN: function () {
        return ec;
    },
    tg: function () {
        return eh;
    },
    ux: function () {
        return ef;
    },
    w1: function () {
        return eu;
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
    I = r(413523),
    T = r(358221),
    S = r(233764),
    A = r(375824),
    C = r(48854),
    N = r(835873),
    R = r(973616),
    O = r(314897),
    D = r(592125),
    x = r(430824),
    L = r(496675),
    w = r(594174),
    P = r(979651),
    M = r(585483),
    k = r(630388),
    U = r(823379),
    B = r(573261),
    G = r(595519),
    Z = r(774226),
    F = r(317381),
    V = r(882347),
    j = r(16609),
    H = r(224189),
    Y = r(374065),
    W = r(917107),
    K = r(89425),
    z = r(275920),
    q = r(701488);
r(918559);
var Q = r(981631),
    X = r(674563),
    J = r(245335),
    $ = r(388032);
function ee(e) {
    let n = F.ZP.getSelfEmbeddedActivityForLocation(e);
    null != n &&
        ea({
            location: n.location,
            applicationId: n.applicationId,
            showFeedback: !1
        });
}
async function et(e) {
    var n, r;
    let { channelId: i, applicationId: a, isStart: o, analyticsLocations: s, locationObject: u, embeddedActivitiesManager: c, componentId: d, commandOrigin: f, sectionName: p, source: h, partyId: m, onExecutedCallback: g, referrerId: E, customId: v, joinUserId: y, joinSessionId: b, joinSecret: I, inviterUserId: T } = e,
        N = D.Z.getChannel(i),
        R = null !== (n = null == N ? void 0 : N.getGuildId()) && void 0 !== n ? n : void 0,
        O = (0, Z.s)();
    if (!O && null == R && !(null !== (r = null == N ? void 0 : N.isPrivate()) && void 0 !== r && r)) return !1;
    let x = (0, C.r)();
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
            inviterUserId: T,
            launchParams: {
                customId: v,
                referrerId: E
            }
        });
        let e = w.default.getCurrentUser();
        if (
            (null != e &&
                (0, z.Z)({
                    type: o ? Q.q5t.LAUNCH : Q.q5t.JOIN,
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
                    inviterUserId: T
                }),
            o && null != i)
        ) {
            if (!en(a, N)) throw new S.Z(S.Z.Reasons.INVALID_CHANNEL);
            if (
                !(await er({
                    applicationId: a,
                    nonce: x,
                    channelId: i,
                    guildId: R,
                    commandOrigin: f,
                    sectionName: p,
                    source: h,
                    onExecutedCallback: g,
                    clientSupportsContextlessActivityLaunch: O
                }))
            )
                throw new S.Z(S.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
        } else {
            let e = await ei({
                applicationId: a,
                channelId: i,
                embeddedActivitiesManager: c,
                isStart: o,
                guildId: R,
                joinUserId: y,
                joinSessionId: b,
                joinSecret: I
            });
            if ((null == g || g(), !e)) throw new S.Z(S.Z.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED);
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
                error: e instanceof S.Z || e instanceof _.Z || e instanceof A.Z ? e : new _.Z(e)
            }),
            !1
        );
    }
    return !0;
}
function en(e, n) {
    let r = (null == n ? void 0 : n.type) === Q.d4z.GUILD_VOICE,
        i = b.Z.getApplication(e),
        a = null != i && (0, k.yE)(i.flags, Q.udG.EMBEDDED),
        o = (0, G.l5)(n);
    return (r && a) || o;
}
async function er(e) {
    let { applicationId: n, nonce: r, channelId: i, guildId: a, commandOrigin: o, sectionName: s, source: l, onExecutedCallback: u, clientSupportsContextlessActivityLaunch: c } = e,
        d = null;
    try {
        d = await (0, y.ZP)(i, n);
    } catch (e) {
        if (e.message === y.sV) return !1;
        throw e;
    }
    if (!(d.handler !== m.VC.APP_HANDLER || X.Yq.includes(n))) {
        null != i &&
            (await (0, E.FN)({
                type: 'channel',
                channelId: i
            })),
            await (0, E.FN)({ type: 'user' });
        let e = D.Z.getChannel(i);
        if (
            !(await (0, g.L)({
                applicationId: n,
                channel: e,
                commandIntegrationTypes: d.integration_types
            }))
        )
            return !1;
    }
    let f = D.Z.getChannel(i),
        p = null != a ? x.Z.getGuild(a) : null;
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
                                : null != a && a in A.Z.ReasonCodes
                                  ? n(new A.Z(a))
                                  : n(new A.Z(A.Z.ReasonCodes.UNKNOWN));
                    }
                })
            });
        }),
        !0)
    );
}
async function ei(e) {
    let n,
        { applicationId: r, channelId: i, embeddedActivitiesManager: a, isStart: s, guildId: l, joinUserId: d, joinSessionId: f, joinSecret: p } = e,
        h = O.default.getSessionId(),
        _ = w.default.getCurrentUser(),
        m = r;
    if (null == m) return !1;
    let g = (0, Z.s)(),
        E = await (0, H.Z)(m, i);
    if (null == _ || null == E) return !1;
    if (!g && null == i) return M.S.dispatch(Q.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, { applicationId: m }), !1;
    let v = D.Z.getChannel(i);
    if (!g && null == v) return !1;
    let y = (0, Y.e4)({
        channelId: i,
        ChannelStore: D.Z,
        GuildStore: x.Z,
        PermissionStore: L.Z,
        VoiceStateStore: P.Z
    });
    if (y !== Y.jy.CAN_LAUNCH)
        return (
            y === Y.jy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION
                ? (0, N.w)()
                : y === Y.jy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS &&
                  c.Z.show({
                      title: $.intl.string($.t['IOy+Iy']),
                      body: $.intl.string($.t.UXoQTk),
                      hideActionSheet: !1
                  }),
            !1
        );
    let I = F.ZP.getCurrentEmbeddedActivity();
    if (
        ((null == I ? void 0 : I.applicationId) != null && (n = b.Z.getApplication(null == I ? void 0 : I.applicationId)),
        !(
            !s ||
            (await (0, V.p)({
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
        let e = (0, W.Z)(v.id),
            r = q.wP.includes(v.type);
        if (e) {
            if (
                !(await (0, K.Z)({
                    channelId: v.id,
                    bypassChangeModal: null != n
                }))
            )
                return !1;
        } else if (!(0, G.WS)(v) || !r) return !1;
    }
    return (null == p && null != d && null != f && null == i && (p = await u.Z.getJoinSecret(d, f, r)), null != i && null == p)
        ? (await B.Z.post({
              url: Q.ANM.ACTIVITY_CHANNEL_LAUNCH(i, r),
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
              (await B.Z.post({
                  url: Q.ANM.ACTIVITY_JOIN_INSTANCE(r, p),
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
function ea(e) {
    let { location: n, applicationId: r, showFeedback: i = !0 } = e,
        a = F.ZP.getSelfEmbeddedActivityForLocation(n);
    l.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_CLOSE',
        applicationId: r,
        location: n,
        instanceId: null == a ? void 0 : a.launchId,
        showFeedback: i
    });
    let o = (0, j.p)(n);
    if (null != o) {
        var s;
        let e = T.Z.getSelectedParticipantId(o),
            n = null === (s = w.default.getCurrentUser()) || void 0 === s ? void 0 : s.id;
        if (null == F.ZP.getEmbeddedActivitiesForChannel(o).find((e) => e.applicationId === r) || null == n || '' === n) return;
        e === (0, I.oW)(r) && f.Z.selectParticipant(o, null);
    }
}
async function eo() {
    try {
        l.Z.dispatch({ type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_START' });
        let e = await s.tn.get({
                url: Q.ANM.APPLICATIONS_WITH_ASSETS,
                query: { with_team_applications: !0 },
                oldFormErrors: !0,
                rejectWithError: !0
            }),
            n = e.body.applications,
            r = n.map((e) => R.ZP.createFromServer(e));
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
async function es(e, n, r) {
    try {
        l.Z.dispatch({ type: 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START' });
        let i = await s.tn.post({
            url: Q.ANM.APPLICATION_UPLOAD_ATTACHMENT(e),
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
let el = (e, n, r) => {
    let { guildId: i } = r;
    (i === e || (null == i && null == e)) && n();
};
async function eu(e) {
    var n, r, i, a;
    let { guildId: s, force: u = !1 } = e,
        c = F.ZP.getShelfActivities(s),
        d = c.map((e) => b.Z.getApplication(e.application_id)).filter(U.lm);
    if (!u && !F.ZP.shouldFetchShelf(s)) {
        if (null === (n = F.ZP.getShelfFetchStatus(s)) || void 0 === n ? void 0 : n.isFetching) {
            let e, n;
            let r = new Promise((n) => {
                    (e = el.bind(null, s, n)), l.Z.subscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS', e);
                }),
                i = new Promise((e) => {
                    (n = el.bind(null, s, e)), l.Z.subscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL', n);
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
            n = await B.Z.get({
                url: Q.ANM.ACTIVITY_SHELF,
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
                applications: c.map((e) => R.ZP.createFromServer(e))
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
async function ec(e) {
    let { activityChannelId: n, invitedChannelId: r, applicationId: i, location: a } = e,
        o = await p.Z.createInvite(
            n,
            {
                target_type: J.Iq.EMBEDDED_APPLICATION,
                target_application_id: i
            },
            a
        );
    null != D.Z.getChannel(r) && h.Z.sendInvite(r, o.code, a, null);
}
async function ed(e) {
    let { channelId: n, applicationId: r, userId: i, location: a } = e,
        o = await p.Z.createInvite(
            n,
            {
                target_type: J.Iq.EMBEDDED_APPLICATION,
                target_application_id: r
            },
            a
        );
    d.Z.ensurePrivateChannel(i).then((e) => {
        null != D.Z.getChannel(e) && h.Z.sendInvite(e, o.code, a, null);
    });
}
function ef() {
    l.Z.dispatch({ type: 'EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR' });
}
async function ep(e) {
    let n = Q.ANM.ACTIVITY_TEST_MODE(e);
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
function eh(e) {
    l.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_SET_PANEL_MODE',
        activityPanelMode: e
    });
}
function e_(e) {
    l.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT',
        focusedActivityLayout: e
    });
}
