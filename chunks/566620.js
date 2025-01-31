n.d(t, {
    $h: () => ei,
    W5: () => ec,
    af: () => J,
    cG: () => X,
    gC: () => ef,
    kv: () => er,
    mW: () => en,
    pu: () => el,
    sN: () => eo,
    tg: () => ed,
    ux: () => eu,
    w1: () => es
}),
    n(789020),
    n(47120);
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
    b = n(375824),
    T = n(48854),
    S = n(835873),
    A = n(973616),
    N = n(314897),
    C = n(592125),
    R = n(430824),
    O = n(496675),
    D = n(594174),
    x = n(979651),
    L = n(585483),
    P = n(630388),
    w = n(823379),
    M = n(573261),
    k = n(595519),
    U = n(774226),
    G = n(317381),
    B = n(882347),
    Z = n(16609),
    F = n(224189),
    V = n(374065),
    j = n(917107),
    H = n(89425),
    Y = n(275920),
    W = n(701488);
n(918559);
var K = n(981631),
    z = n(674563),
    q = n(245335),
    Q = n(388032);
function X(e) {
    let t = G.ZP.getSelfEmbeddedActivityForLocation(e);
    null != t &&
        en({
            location: t.location,
            applicationId: t.applicationId,
            showFeedback: !1
        });
}
async function J(e) {
    var t, n;
    let { channelId: i, applicationId: r, isStart: s, analyticsLocations: o, locationObject: l, embeddedActivitiesManager: u, componentId: c, commandOrigin: d, sectionName: _, source: p, partyId: h, onExecutedCallback: m, referrerId: g, customId: E, joinUserId: v, joinSessionId: y, joinSecret: S, inviterUserId: A, isContextlessActivity: N } = e,
        R = C.Z.getChannel(i),
        O = null !== (t = null == R ? void 0 : R.getGuildId()) && void 0 !== t ? t : void 0,
        x = (0, U.sq)();
    if (!x && null == O && !(null !== (n = null == R ? void 0 : R.isPrivate()) && void 0 !== n && n)) return !1;
    let L = (0, T.r)();
    try {
        a.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_START',
            nonce: L,
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
        let e = D.default.getCurrentUser();
        if (
            (null != e &&
                (0, Y.Z)({
                    type: s ? K.q5t.LAUNCH : K.q5t.JOIN,
                    userId: null == e ? void 0 : e.id,
                    guildId: O,
                    channelId: i,
                    channelType: null == R ? void 0 : R.type,
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
            if (!$(r, R)) throw new I.Z(I.Z.Reasons.INVALID_CHANNEL);
            if (
                !(await ee({
                    applicationId: r,
                    nonce: L,
                    channelId: i,
                    guildId: O,
                    commandOrigin: d,
                    sectionName: _,
                    source: p,
                    onExecutedCallback: m,
                    clientSupportsContextlessActivityLaunch: x
                }))
            )
                throw new I.Z(I.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
        } else {
            let e = await et({
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
            if ((null == m || m(), !e)) throw new I.Z(I.Z.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED);
        }
        a.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_SUCCESS',
            nonce: L,
            applicationId: r,
            channelId: null != i ? i : null
        });
    } catch (e) {
        return (
            a.Z.dispatch({
                type: 'EMBEDDED_ACTIVITY_LAUNCH_FAIL',
                nonce: L,
                applicationId: r,
                channelId: null != i ? i : null,
                isStart: s,
                error: e instanceof I.Z || e instanceof f.Z || e instanceof b.Z ? e : new f.Z(e)
            }),
            !1
        );
    }
    return !0;
}
function $(e, t) {
    let n = (null == t ? void 0 : t.type) === K.d4z.GUILD_VOICE,
        i = E.Z.getApplication(e),
        r = null != i && (0, P.yE)(i.flags, K.udG.EMBEDDED),
        a = (0, k.l5)(t);
    return (n && r) || a;
}
async function ee(e) {
    let { applicationId: t, nonce: n, channelId: i, guildId: r, commandOrigin: a, sectionName: s, source: o, onExecutedCallback: l, clientSupportsContextlessActivityLaunch: u } = e,
        c = null;
    try {
        c = await (0, g.ZP)(i, t);
    } catch (e) {
        if (e.message === g.sV) return !1;
        throw e;
    }
    if (!(c.handler !== _.VC.APP_HANDLER || z.Yq.includes(t))) {
        null != i &&
            (await (0, h.FN)({
                type: 'channel',
                channelId: i
            })),
            await (0, h.FN)({ type: 'user' });
        let e = C.Z.getChannel(i);
        if (
            !(await (0, p.L)({
                applicationId: t,
                channel: e,
                commandIntegrationTypes: c.integration_types
            }))
        )
            return !1;
    }
    let d = C.Z.getChannel(i),
        E = null != r ? R.Z.getGuild(r) : null;
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
                                : null != r && r in b.Z.ReasonCodes
                                  ? t(new b.Z(r))
                                  : t(new b.Z(b.Z.ReasonCodes.UNKNOWN));
                    }
                })
            });
        }),
        !0)
    );
}
async function et(e) {
    let t,
        { applicationId: n, channelId: r, embeddedActivitiesManager: a, isStart: l, guildId: u, joinUserId: c, joinSessionId: d, joinSecret: f, isContextlessActivity: _ } = e,
        p = N.default.getSessionId(),
        h = D.default.getCurrentUser(),
        m = n;
    if (null == m) return !1;
    let g = (0, U.sq)(),
        v = await (0, F.Z)(m, r);
    if (null == h || null == v) return !1;
    if (!g && null == r) return L.S.dispatch(K.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, { applicationId: m }), !1;
    let y = C.Z.getChannel(r);
    if (!g && null == y) return !1;
    let I = (0, V.e4)({
        channelId: r,
        ChannelStore: C.Z,
        GuildStore: R.Z,
        PermissionStore: O.Z,
        VoiceStateStore: x.Z
    });
    if (I !== V.jy.CAN_LAUNCH)
        return (
            I === V.jy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION
                ? (0, S.w)()
                : I === V.jy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS &&
                  o.Z.show({
                      title: Q.intl.string(Q.t['IOy+Iy']),
                      body: Q.intl.string(Q.t.UXoQTk),
                      hideActionSheet: !1
                  }),
            !1
        );
    let b = G.ZP.getCurrentEmbeddedActivity();
    if (
        ((null == b ? void 0 : b.applicationId) != null && (t = E.Z.getApplication(null == b ? void 0 : b.applicationId)),
        !(
            !l ||
            (await (0, B.p)({
                applicationId: n,
                application: v,
                channel: y,
                currentEmbeddedApplication: t,
                embeddedActivitiesManager: a,
                user: h
            }))
        ))
    )
        return !1;
    if (null != y) {
        let e = (0, j.Z)(y.id),
            n = W.wP.includes(y.type);
        if (e) {
            if (
                !(await (0, H.Z)({
                    channelId: y.id,
                    bypassChangeModal: null != t
                }))
            )
                return !1;
        } else if (!(0, k.WS)(y) || !n) return !1;
    }
    return (null == f && null != c && null != d && !0 === _ && (f = await s.Z.getJoinSecret(c, d, n)), null != r && null == f)
        ? (await M.Z.post({
              url: K.ANM.ACTIVITY_CHANNEL_LAUNCH(r, n),
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
          !0)
        : null != f &&
              (await M.Z.post({
                  url: K.ANM.ACTIVITY_JOIN_INSTANCE(n, f),
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
              !0);
}
function en(e) {
    let { location: t, applicationId: n, showFeedback: i = !0 } = e,
        r = G.ZP.getSelfEmbeddedActivityForLocation(t);
    a.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_CLOSE',
        applicationId: n,
        location: t,
        instanceId: null == r ? void 0 : r.launchId,
        showFeedback: i
    });
    let s = (0, Z.p)(t);
    if (null != s) {
        var o;
        let e = y.Z.getSelectedParticipantId(s),
            t = null === (o = D.default.getCurrentUser()) || void 0 === o ? void 0 : o.id;
        if (null == G.ZP.getEmbeddedActivitiesForChannel(s).find((e) => e.applicationId === n) || null == t || '' === t) return;
        e === (0, v.oW)(n) && u.Z.selectParticipant(s, null);
    }
}
async function ei() {
    try {
        a.Z.dispatch({ type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_START' });
        let e = await r.tn.get({
                url: K.ANM.APPLICATIONS_WITH_ASSETS,
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
async function er(e, t, n) {
    try {
        a.Z.dispatch({ type: 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START' });
        let i = await r.tn.post({
            url: K.ANM.APPLICATION_UPLOAD_ATTACHMENT(e),
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
let ea = (e, t, n) => {
    let { guildId: i } = n;
    (i === e || (null == i && null == e)) && t();
};
async function es(e) {
    var t, n, r, s;
    let { guildId: o, force: l = !1 } = e,
        u = G.ZP.getShelfActivities(o),
        c = u.map((e) => E.Z.getApplication(e.application_id)).filter(w.lm);
    if (!l && !G.ZP.shouldFetchShelf(o)) {
        if (null === (t = G.ZP.getShelfFetchStatus(o)) || void 0 === t ? void 0 : t.isFetching) {
            let e, t;
            let n = new Promise((t) => {
                    (e = ea.bind(null, o, t)), a.Z.subscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS', e);
                }),
                i = new Promise((e) => {
                    (t = ea.bind(null, o, e)), a.Z.subscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL', t);
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
            t = await M.Z.get({
                url: K.ANM.ACTIVITY_SHELF,
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
                applications: u.map((e) => A.ZP.createFromServer(e))
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
async function eo(e) {
    let { activityChannelId: t, invitedChannelId: n, applicationId: i, location: r } = e,
        a = await c.Z.createInvite(
            t,
            {
                target_type: q.Iq.EMBEDDED_APPLICATION,
                target_application_id: i
            },
            r
        );
    null != C.Z.getChannel(n) && d.Z.sendInvite(n, a.code, r, null);
}
async function el(e) {
    let { channelId: t, applicationId: n, userId: i, location: r } = e,
        a = await c.Z.createInvite(
            t,
            {
                target_type: q.Iq.EMBEDDED_APPLICATION,
                target_application_id: n
            },
            r
        );
    l.Z.ensurePrivateChannel(i).then((e) => {
        null != C.Z.getChannel(e) && d.Z.sendInvite(e, a.code, r, null);
    });
}
function eu() {
    a.Z.dispatch({ type: 'EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR' });
}
async function ec(e) {
    let t = K.ANM.ACTIVITY_TEST_MODE(e);
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
function ed(e) {
    a.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_SET_PANEL_MODE',
        activityPanelMode: e
    });
}
function ef(e) {
    a.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT',
        focusedActivityLayout: e
    });
}
