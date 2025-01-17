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
        return es;
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
        return e_;
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
var s = r(990547),
    o = r(544891),
    l = r(570140),
    u = r(278323),
    c = r(668781),
    d = r(493683),
    f = r(475179),
    _ = r(447543),
    h = r(904245),
    p = r(479531),
    m = r(911969),
    g = r(46332),
    E = r(213459),
    v = r(667204),
    I = r(812236),
    T = r(812206),
    b = r(358221),
    y = r(233764),
    S = r(375824),
    A = r(48854),
    N = r(835873),
    C = r(973616),
    R = r(314897),
    O = r(592125),
    D = r(430824),
    L = r(496675),
    x = r(594174),
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
    let { channelId: i, applicationId: a, isStart: s, analyticsLocations: o, locationObject: u, embeddedActivitiesManager: c, componentId: d, commandOrigin: f, sectionName: _, source: h, partyId: m, onExecutedCallback: g, referrerId: E, customId: v, joinUserId: I, joinSessionId: T, joinSecret: b, inviterUserId: N } = e,
        C = O.Z.getChannel(i),
        R = null !== (n = null == C ? void 0 : C.getGuildId()) && void 0 !== n ? n : void 0,
        D = (0, G.s)();
    if (!D && null == R && !(null !== (r = null == C ? void 0 : C.isPrivate()) && void 0 !== r && r)) return !1;
    let L = (0, A.r)();
    try {
        l.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_START',
            nonce: L,
            applicationId: a,
            channelId: null != i ? i : null,
            componentId: d,
            analyticsLocations: o,
            source: h,
            commandOrigin: f,
            inviterUserId: N,
            launchParams: {
                customId: v,
                referrerId: E
            }
        });
        let e = x.default.getCurrentUser();
        if (
            (null != e &&
                (0, K.Z)({
                    type: s ? q.q5t.LAUNCH : q.q5t.JOIN,
                    userId: null == e ? void 0 : e.id,
                    guildId: R,
                    channelId: i,
                    channelType: null == C ? void 0 : C.type,
                    applicationId: a,
                    locationObject: u,
                    analyticsLocations: null != o ? o : [],
                    source: h,
                    partyId: m,
                    referrerId: E,
                    inviterUserId: N
                }),
            s && null != i)
        ) {
            if (!et(a, C)) throw new y.Z(y.Z.Reasons.INVALID_CHANNEL);
            if (
                !(await en({
                    applicationId: a,
                    nonce: L,
                    channelId: i,
                    guildId: R,
                    commandOrigin: f,
                    sectionName: _,
                    source: h,
                    onExecutedCallback: g,
                    clientSupportsContextlessActivityLaunch: D
                }))
            )
                throw new y.Z(y.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
        } else {
            let e = await er({
                applicationId: a,
                channelId: i,
                embeddedActivitiesManager: c,
                isStart: s,
                guildId: R,
                joinUserId: I,
                joinSessionId: T,
                joinSecret: b
            });
            if ((null == g || g(), !e)) throw new y.Z(y.Z.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED);
        }
        l.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_SUCCESS',
            nonce: L,
            applicationId: a,
            channelId: null != i ? i : null
        });
    } catch (e) {
        return (
            l.Z.dispatch({
                type: 'EMBEDDED_ACTIVITY_LAUNCH_FAIL',
                nonce: L,
                applicationId: a,
                channelId: null != i ? i : null,
                isStart: s,
                error: e instanceof y.Z || e instanceof p.Z || e instanceof S.Z ? e : new p.Z(e)
            }),
            !1
        );
    }
    return !0;
}
function et(e, n) {
    let r = (null == n ? void 0 : n.type) === q.d4z.GUILD_VOICE,
        i = T.Z.getApplication(e),
        a = null != i && (0, M.yE)(i.flags, q.udG.EMBEDDED),
        s = (0, B.l5)(n);
    return (r && a) || s;
}
async function en(e) {
    let { applicationId: n, nonce: r, channelId: i, guildId: a, commandOrigin: s, sectionName: o, source: l, onExecutedCallback: u, clientSupportsContextlessActivityLaunch: c } = e,
        d = null;
    try {
        d = await (0, I.ZP)(i, n);
    } catch (e) {
        if (e.message === I.sV) return !1;
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
        _ = null != a ? D.Z.getGuild(a) : null;
    return (
        null != f &&
        (await new Promise((e, n) => {
            (0, v.Z)({
                command: d,
                optionValues: {},
                context: {
                    channel: f,
                    guild: _
                },
                commandOrigin: s,
                sectionName: o,
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
                                      new p.Z({
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
        { applicationId: r, channelId: i, embeddedActivitiesManager: a, isStart: o, guildId: l, joinUserId: d, joinSessionId: f, joinSecret: _ } = e,
        h = R.default.getSessionId(),
        p = x.default.getCurrentUser(),
        m = r;
    if (null == m) return !1;
    let g = (0, G.s)(),
        E = await (0, j.Z)(m, i);
    if (null == p || null == E) return !1;
    if (!g && null == i) return P.S.dispatch(q.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, { applicationId: m }), !1;
    let v = O.Z.getChannel(i);
    if (!g && null == v) return !1;
    let I = (0, H.e4)({
        channelId: i,
        ChannelStore: O.Z,
        GuildStore: D.Z,
        PermissionStore: L.Z,
        VoiceStateStore: w.Z
    });
    if (I !== H.jy.CAN_LAUNCH)
        return (
            I === H.jy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION
                ? (0, N.w)()
                : I === H.jy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS &&
                  c.Z.show({
                      title: J.intl.string(J.t['IOy+Iy']),
                      body: J.intl.string(J.t.UXoQTk),
                      hideActionSheet: !1
                  }),
            !1
        );
    let b = Z.ZP.getCurrentEmbeddedActivity();
    if (
        ((null == b ? void 0 : b.applicationId) != null && (n = T.Z.getApplication(null == b ? void 0 : b.applicationId)),
        !(
            !o ||
            (await (0, F.p)({
                applicationId: r,
                application: E,
                channel: v,
                currentEmbeddedApplication: n,
                embeddedActivitiesManager: a,
                user: p
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
    return (null == _ && null != d && null != f && null == i && (_ = await u.Z.getJoinSecret(d, f, r)), null != i && null == _)
        ? (await U.Z.post({
              url: q.ANM.ACTIVITY_CHANNEL_LAUNCH(i, r),
              body: {
                  session_id: h,
                  guild_id: null != l ? l : void 0
              },
              trackedActionData: {
                  event: s.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
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
        : null != _ &&
              (await U.Z.post({
                  url: q.ANM.ACTIVITY_JOIN_INSTANCE(r, _),
                  body: { session_id: h },
                  trackedActionData: {
                      event: s.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
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
    let s = (0, V.p)(n);
    if (null != s) {
        var o;
        let e = b.Z.getSelectedParticipantId(s),
            n = null === (o = x.default.getCurrentUser()) || void 0 === o ? void 0 : o.id;
        if (null == Z.ZP.getEmbeddedActivitiesForChannel(s).find((e) => e.applicationId === r) || null == n || '' === n) return;
        e === r && f.Z.selectParticipant(s, null);
    }
}
async function ea() {
    try {
        l.Z.dispatch({ type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_START' });
        let e = await o.tn.get({
                url: q.ANM.APPLICATIONS_WITH_ASSETS,
                query: { with_team_applications: !0 },
                oldFormErrors: !0,
                rejectWithError: !0
            }),
            n = e.body.applications,
            r = n.map((e) => C.ZP.createFromServer(e));
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
        let i = await o.tn.post({
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
        return l.Z.dispatch({ type: 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL' }), new p.Z(e);
    }
}
let eo = (e, n, r) => {
    let { guildId: i } = r;
    (i === e || (null == i && null == e)) && n();
};
async function el(e) {
    var n, r, i, a;
    let { guildId: o, force: u = !1 } = e,
        c = Z.ZP.getShelfActivities(o),
        d = c.map((e) => T.Z.getApplication(e.application_id)).filter(k.lm);
    if (!u && !Z.ZP.shouldFetchShelf(o)) {
        if (null === (n = Z.ZP.getShelfFetchStatus(o)) || void 0 === n ? void 0 : n.isFetching) {
            let e, n;
            let r = new Promise((n) => {
                    (e = eo.bind(null, o, n)), l.Z.subscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS', e);
                }),
                i = new Promise((e) => {
                    (n = eo.bind(null, o, e)), l.Z.subscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL', n);
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
            guildId: o
        });
        let e = void 0 !== o && '' !== o ? { guild_id: o } : void 0,
            n = await U.Z.get({
                url: q.ANM.ACTIVITY_SHELF,
                query: e,
                trackedActionData: {
                    event: s.NetworkActionNames.EMBEDDED_ACTIVITIES_FETCH_SHELF,
                    properties: { guild_id: o }
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
                guildId: o,
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
                applications: c.map((e) => C.ZP.createFromServer(e))
            }
        );
    } catch (e) {
        return (
            l.Z.dispatch({
                type: 'EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL',
                guildId: o
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
        s = await _.Z.createInvite(
            n,
            {
                target_type: X.Iq.EMBEDDED_APPLICATION,
                target_application_id: i
            },
            a
        );
    null != O.Z.getChannel(r) && h.Z.sendInvite(r, s.code, a, null);
}
async function ec(e) {
    let { channelId: n, applicationId: r, userId: i, location: a } = e,
        s = await _.Z.createInvite(
            n,
            {
                target_type: X.Iq.EMBEDDED_APPLICATION,
                target_application_id: r
            },
            a
        );
    d.Z.ensurePrivateChannel(i).then((e) => {
        null != O.Z.getChannel(e) && h.Z.sendInvite(e, s.code, a, null);
    });
}
function ed() {
    l.Z.dispatch({ type: 'EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR' });
}
async function ef(e) {
    let n = q.ANM.ACTIVITY_TEST_MODE(e);
    try {
        return (
            await o.tn.get({
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
function e_(e) {
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
