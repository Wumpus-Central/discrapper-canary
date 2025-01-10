r.d(n, {
    $h: function () {
        return ei;
    },
    W5: function () {
        return ed;
    },
    af: function () {
        return $;
    },
    cG: function () {
        return J;
    },
    gC: function () {
        return e_;
    },
    kv: function () {
        return ea;
    },
    mW: function () {
        return er;
    },
    pu: function () {
        return eu;
    },
    sN: function () {
        return el;
    },
    tg: function () {
        return ef;
    },
    ux: function () {
        return ec;
    },
    w1: function () {
        return eo;
    }
});
var i = r(789020);
var a = r(47120);
var s = r(990547),
    o = r(544891),
    l = r(570140),
    u = r(668781),
    c = r(493683),
    d = r(475179),
    f = r(447543),
    _ = r(904245),
    h = r(479531),
    p = r(911969),
    m = r(46332),
    g = r(213459),
    E = r(667204),
    v = r(812236),
    I = r(812206),
    T = r(358221),
    b = r(233764),
    y = r(375824),
    S = r(48854),
    A = r(835873),
    N = r(973616),
    C = r(314897),
    R = r(592125),
    O = r(430824),
    D = r(496675),
    L = r(594174),
    x = r(979651),
    w = r(585483),
    P = r(630388),
    M = r(823379),
    k = r(573261),
    U = r(595519),
    B = r(317381),
    G = r(672181),
    F = r(882347),
    Z = r(16609),
    V = r(224189),
    j = r(374065),
    H = r(917107),
    Y = r(89425),
    W = r(275920),
    K = r(701488);
r(918559);
var z = r(981631),
    q = r(674563),
    Q = r(245335),
    X = r(388032);
function J(e) {
    let n = B.ZP.getSelfEmbeddedActivityForChannel(e);
    null != n &&
        er({
            location: n.location,
            applicationId: n.applicationId,
            showFeedback: !1
        }),
        (0, G.Z)(e);
}
async function $(e) {
    var n, r;
    let { channelId: i, applicationId: a, isStart: s, analyticsLocations: o, locationObject: u, embeddedActivitiesManager: c, componentId: d, commandOrigin: f, sectionName: _, source: p, partyId: m, onExecutedCallback: g, referrerId: E, customId: v } = e,
        I = R.Z.getChannel(i),
        T = null !== (n = null == I ? void 0 : I.getGuildId()) && void 0 !== n ? n : void 0;
    if (null == T && !(null !== (r = null == I ? void 0 : I.isPrivate()) && void 0 !== r && r)) return !1;
    let A = (0, S.r)();
    try {
        l.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_START',
            nonce: A,
            applicationId: a,
            channelId: i,
            componentId: d,
            analyticsLocations: o,
            source: p,
            commandOrigin: f,
            launchParams: {
                customId: v,
                referrerId: E
            }
        });
        let e = L.default.getCurrentUser();
        if (
            (null != e &&
                (0, W.Z)({
                    type: s ? z.q5t.LAUNCH : z.q5t.JOIN,
                    userId: null == e ? void 0 : e.id,
                    guildId: T,
                    channelId: i,
                    channelType: null == I ? void 0 : I.type,
                    applicationId: a,
                    locationObject: u,
                    analyticsLocations: null != o ? o : [],
                    source: p,
                    partyId: m,
                    referrerId: E
                }),
            s)
        ) {
            if (!ee(a, I)) throw new b.Z(b.Z.Reasons.INVALID_CHANNEL);
            if (
                !(await et({
                    applicationId: a,
                    nonce: A,
                    channelId: i,
                    guildId: T,
                    commandOrigin: f,
                    sectionName: _,
                    source: p,
                    onExecutedCallback: g
                }))
            )
                throw new b.Z(b.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
        } else {
            let e = await en({
                applicationId: a,
                channelId: i,
                embeddedActivitiesManager: c,
                isStart: s,
                guildId: T
            });
            if ((null == g || g(), !e)) throw new b.Z(b.Z.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED);
        }
        l.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_SUCCESS',
            nonce: A,
            applicationId: a,
            channelId: i
        });
    } catch (e) {
        return (
            l.Z.dispatch({
                type: 'EMBEDDED_ACTIVITY_LAUNCH_FAIL',
                nonce: A,
                applicationId: a,
                channelId: i,
                isStart: s,
                error: e instanceof b.Z || e instanceof h.Z || e instanceof y.Z ? e : new h.Z(e)
            }),
            !1
        );
    }
    return !0;
}
function ee(e, n) {
    let r = (null == n ? void 0 : n.type) === z.d4z.GUILD_VOICE,
        i = I.Z.getApplication(e),
        a = null != i && (0, P.yE)(i.flags, z.udG.EMBEDDED),
        s = (0, U.l5)(n);
    return (r && a) || s;
}
async function et(e) {
    let { applicationId: n, nonce: r, channelId: i, guildId: a, commandOrigin: s, sectionName: o, source: l, onExecutedCallback: u } = e,
        c = null;
    try {
        c = await (0, v.ZP)(i, n);
    } catch (e) {
        if (e.message === v.sV) return !1;
        throw e;
    }
    if (!(c.handler !== p.VC.APP_HANDLER || q.Yq.includes(n))) {
        null != i &&
            (await (0, g.FN)({
                type: 'channel',
                channelId: i
            })),
            await (0, g.FN)({ type: 'user' });
        let e = R.Z.getChannel(i);
        if (
            !(await (0, m.L)({
                applicationId: n,
                channel: e,
                commandIntegrationTypes: c.integration_types
            }))
        )
            return !1;
    }
    let d = R.Z.getChannel(i),
        f = null != a ? O.Z.getGuild(a) : null;
    return (
        null != d &&
        (await new Promise((e, n) => {
            (0, E.Z)({
                command: c,
                optionValues: {},
                context: {
                    channel: d,
                    guild: f
                },
                commandOrigin: s,
                sectionName: o,
                source: l,
                interactionLifecycleOptionsFactory: () => ({
                    nonce: r,
                    onSuccess: () => {
                        null == u || u(), e();
                    },
                    onFailure: (e, r, i, a) => {
                        null == u || u(),
                            null != e && null != r && null != i
                                ? n(
                                      new h.Z({
                                          status: i,
                                          body: {
                                              message: r,
                                              code: e
                                          }
                                      })
                                  )
                                : null != a && a in y.Z.ReasonCodes
                                  ? n(new y.Z(a))
                                  : n(new y.Z(y.Z.ReasonCodes.UNKNOWN));
                    }
                })
            });
        }),
        !0)
    );
}
async function en(e) {
    let n,
        { applicationId: r, channelId: i, embeddedActivitiesManager: a, isStart: o, guildId: l } = e,
        c = C.default.getSessionId(),
        d = L.default.getCurrentUser(),
        f = r;
    if (null == f) return !1;
    let _ = await (0, V.Z)(f, i);
    if (null == i) return w.S.dispatch(z.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, { applicationId: f }), !1;
    let h = R.Z.getChannel(i);
    if (null == h || null == d || null == _) return !1;
    let p =
        null != i
            ? (0, j.e4)({
                  channelId: i,
                  ChannelStore: R.Z,
                  GuildStore: O.Z,
                  PermissionStore: D.Z,
                  VoiceStateStore: x.Z
              })
            : j.jy.NO_CHANNEL;
    if (p !== j.jy.CAN_LAUNCH)
        return (
            p === j.jy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION
                ? (0, A.w)()
                : p === j.jy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS &&
                  u.Z.show({
                      title: X.intl.string(X.t['IOy+Iy']),
                      body: X.intl.string(X.t.UXoQTk),
                      hideActionSheet: !1
                  }),
            !1
        );
    let m = B.ZP.getCurrentEmbeddedActivity();
    if (
        ((null == m ? void 0 : m.applicationId) != null && (n = I.Z.getApplication(null == m ? void 0 : m.applicationId)),
        !(
            !o ||
            (await (0, F.p)({
                applicationId: r,
                application: _,
                channel: h,
                currentEmbeddedApplication: n,
                embeddedActivitiesManager: a,
                user: d
            }))
        ))
    )
        return !1;
    let g = (0, H.Z)(i),
        E = K.wP.includes(h.type);
    if (g) {
        if (
            !(await (0, Y.Z)({
                channelId: i,
                bypassChangeModal: null != n
            }))
        )
            return !1;
    } else if (!(0, U.WS)(h) || !E) return !1;
    return (
        await k.Z.post({
            url: z.ANM.ACTIVITY_CHANNEL_LAUNCH(i, r),
            body: {
                session_id: c,
                guild_id: null != l ? l : void 0
            },
            trackedActionData: {
                event: s.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
                properties: {
                    guild_id: l,
                    channel_id: i,
                    application_id: r,
                    session_id: c
                }
            },
            retries: 3,
            oldFormErrors: !0,
            rejectWithError: !0
        }),
        !0
    );
}
function er(e) {
    let { location: n, applicationId: r, showFeedback: i = !0 } = e,
        a = B.ZP.getSelfEmbeddedActivityForLocation(n);
    l.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_CLOSE',
        applicationId: r,
        location: n,
        instanceId: null == a ? void 0 : a.launchId,
        showFeedback: i
    });
    let s = (0, Z.p)(n);
    if (null != s) {
        var o;
        let e = T.Z.getSelectedParticipantId(s),
            n = null === (o = L.default.getCurrentUser()) || void 0 === o ? void 0 : o.id;
        if (null == B.ZP.getEmbeddedActivitiesForChannel(s).find((e) => e.applicationId === r) || null == n || '' === n) return;
        e === r && d.Z.selectParticipant(s, null);
    }
}
async function ei() {
    try {
        l.Z.dispatch({ type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_START' });
        let e = await o.tn.get({
                url: z.ANM.APPLICATIONS_WITH_ASSETS,
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
async function ea(e, n, r) {
    try {
        l.Z.dispatch({ type: 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START' });
        let i = await o.tn.post({
            url: z.ANM.APPLICATION_UPLOAD_ATTACHMENT(e),
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
        return l.Z.dispatch({ type: 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL' }), new h.Z(e);
    }
}
let es = (e, n, r) => {
    let { guildId: i } = r;
    (i === e || (null == i && null == e)) && n();
};
async function eo(e) {
    var n, r, i, a;
    let { guildId: o, force: u = !1 } = e,
        c = B.ZP.getShelfActivities(o),
        d = c.map((e) => I.Z.getApplication(e.application_id)).filter(M.lm);
    if (!u && !B.ZP.shouldFetchShelf(o)) {
        if (null === (n = B.ZP.getShelfFetchStatus(o)) || void 0 === n ? void 0 : n.isFetching) {
            let e, n;
            let r = new Promise((n) => {
                    (e = es.bind(null, o, n)), l.Z.subscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS', e);
                }),
                i = new Promise((e) => {
                    (n = es.bind(null, o, e)), l.Z.subscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL', n);
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
            n = await k.Z.get({
                url: z.ANM.ACTIVITY_SHELF,
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
                applications: c.map((e) => N.ZP.createFromServer(e))
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
async function el(e) {
    let { activityChannelId: n, invitedChannelId: r, applicationId: i, location: a } = e,
        s = await f.Z.createInvite(
            n,
            {
                target_type: Q.Iq.EMBEDDED_APPLICATION,
                target_application_id: i
            },
            a
        );
    null != R.Z.getChannel(r) && _.Z.sendInvite(r, s.code, a, null);
}
async function eu(e) {
    let { channelId: n, applicationId: r, userId: i, location: a } = e,
        s = await f.Z.createInvite(
            n,
            {
                target_type: Q.Iq.EMBEDDED_APPLICATION,
                target_application_id: r
            },
            a
        );
    c.Z.ensurePrivateChannel(i).then((e) => {
        null != R.Z.getChannel(e) && _.Z.sendInvite(e, s.code, a, null);
    });
}
function ec() {
    l.Z.dispatch({ type: 'EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR' });
}
async function ed(e) {
    let n = z.ANM.ACTIVITY_TEST_MODE(e);
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
function ef(e) {
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
