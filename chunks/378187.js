n.d(t, { A: () => k });
var i = n(412703),
    r = n(902173),
    a = n(228366),
    s = n(439372),
    l = n(933958),
    o = n(91242),
    d = n(973522),
    c = n(952818),
    u = n(652896),
    _ = n(227309),
    E = n(871633),
    A = n(616356),
    h = n(760751),
    I = n(607567),
    f = n(927813),
    p = n(403362),
    T = n(396813),
    m = n(859703),
    g = n(738822),
    S = n(759366),
    N = n(590202),
    C = n(851936),
    O = n(710969),
    R = n(639214),
    L = n(792620),
    y = n(814793),
    D = n(190107),
    v = n(165610);
let b = +f.A.Millis.MINUTE,
    M = +f.A.Millis.SECOND,
    P = (0, C.L)({ location: D.rE.QUESTS_MANAGER });
function U(e) {
    return !(0, O.Ic)(e) && null != e.userStatus && null != e.userStatus.enrolledAt && null == e.userStatus.completedAt;
}
function w(e) {
    let t = S.A.getState().autoEnroll,
        n = m.A.quests;
    for (let i of (0, R.jm)(n, e))
        if (t && 1)
            return (0, T.Oy)(i.id, {
                questContent: g.uF.RUNNING_ACTIVITY,
                questContentCTA: N.Cy.START_QUEST,
                sourceQuestContent: g.uF.RUNNING_ACTIVITY,
            });
}
function G(e) {
    return null != e && e.config.features.includes(r.L.MANUAL_HEARTBEAT_INITIALIZATION);
}
class x extends s.A {
    heartbeats = {
        [i.n.PLAY_ON_DESKTOP]: new Map(),
        [i.n.STREAM_ON_DESKTOP]: new Map(),
        [i.n.PLAY_ACTIVITY]: new Map(),
    };
    calculateHeartbeatDurationMs = (e) => {
        let t = m.A.quests.get(e);
        if (null == t || null == t.config || null == t.userStatus) return b;
        let { progressSeconds: n, targetSeconds: r } = (0, L.Yh)(t, i.o.DESKTOP),
            a = Math.max(0, (r - n) * f.A.Millis.SECOND);
        return a <= b ? a + M : b;
    };
    initiateHeartbeat = (e, t, n) => {
        let r = this.heartbeats[t];
        if (r.has(e)) return void P.log(`~ initiateHeartbeat -> Heartbeat already initiated for questId: ${e}`);
        let a = () => {
            let s = this.getActivelyProgressingQuests(t);
            if (s.has(e)) {
                let l = s.get(e),
                    o = l?.applicationId ?? n?.applicationId,
                    d = l?.executableFingerprint,
                    c = l?.executablePath ?? n?.executablePath;
                if (t === i.n.STREAM_ON_DESKTOP) {
                    let n = A.A.getCurrentUserActiveStream();
                    if (null == n) {
                        P.log(
                            `~ initiateHeartbeat -> Attempted to beat for stream quest but no active stream, terminating heartbeat for questId: ${e}`,
                        ),
                            this.terminateHeartbeat(e, t);
                        return;
                    }
                    let i = (0, u._z)(n);
                    P.log(`~ initiateHeartbeat -> Sending heartbeat for questId: ${e}`),
                        (0, T.R2)({
                            questId: e,
                            streamKey: i,
                            applicationId: o,
                            executablePath: c,
                            executableFingerprint: d,
                        });
                } else
                    P.log(`~ initiateHeartbeat -> Sending heartbeat for questId: ${e}`),
                        (0, T.R2)({ questId: e, applicationId: o, executablePath: c, executableFingerprint: d });
                let _ = this.calculateHeartbeatDurationMs(e),
                    E = window.setTimeout(a, _);
                r.set(e, E);
            } else
                P.log(`~ initiateHeartbeat -> Quest ${e} is no longer actively progressing, terminating heartbeat`),
                    this.terminateHeartbeat(e, t);
        };
        P.log(`~ initiateHeartbeat -> Initiating heartbeat for Quest ${e}`), a();
    };
    terminateHeartbeat = (e, t) => {
        let n = this.heartbeats[t],
            i = m.A.quests,
            r = n.get(e);
        if (null != r) {
            P.log(`~ terminateHeartbeat -> Terminating heartbeat for questId: ${e}`),
                window.clearTimeout(r),
                n.delete(e);
            let t = i.get(e);
            null != t &&
                U(t) &&
                (P.log(`~ terminateHeartbeat -> Sending terminal heartbeat for questId: ${e}`),
                (0, T.R2)({ questId: e, terminal: !0 }));
        }
    };
    handleSendHeartbeatSuccess = (e) => {
        let { questId: t, userStatus: n } = e;
        if ((P.log(`~ handleSendHeartbeatSuccess -> Heartbeat succeeded for questId: ${t})`), null != n.completedAt))
            for (let e of (P.log(
                `~ handleSendHeartbeatSuccess -> Quest ${t} completed, terminating any heartbeats for it`,
            ),
            Object.keys(this.heartbeats)))
                this.terminateHeartbeat(t, e);
    };
    handleSendHeartbeatFailure = (e) => {
        let { questId: t } = e;
        P.log(`~ handleSendHeartbeatFailure -> Heartbeat failed for questId: ${t}`);
    };
    syncHeartbeats(e, t, n) {
        for (let i of ("VOICE_STATE_UPDATES" !== t &&
            "PASSIVE_UPDATE_V2" !== t &&
            P.log(`~ syncHeartbeats -> syncing heartbeats for taskTypes: ${e.join(", ")} (triggered by: ${t})`),
        e)) {
            let e = this.heartbeats[i],
                t = this.getActivelyProgressingQuests(i);
            for (let n of new Set(e.keys())) t.has(n) || this.terminateHeartbeat(n, i);
            for (let [r, a] of t.entries())
                !e.has(r) && (null == n || n(m.A.quests.get(r))) && this.initiateHeartbeat(r, i, a);
        }
    }
    getActivelyProgressingQuests(e) {
        switch (e) {
            case i.n.PLAY_ON_DESKTOP:
                return this.getActivelyProgressingPlayOnDesktopQuests();
            case i.n.STREAM_ON_DESKTOP:
                return this.getActivelyProgressingStreamOnDesktopQuests();
            case i.n.PLAY_ACTIVITY:
                return this.getActivelyProgressingActivityQuests();
            default:
                (0, p.xb)(e);
        }
    }
    getActivelyProgressingPlayOnDesktopQuests() {
        let e = new Map(),
            t = c.Ay.getRunningGames(),
            n = c.Ay.getRunningNonGames(),
            i = m.A.quests;
        P.log("~ getActivelyProgressingPlayOnDesktopQuestIds -> Running games: ", t, "Running non-games: ", n);
        let r = {};
        for (let e of t) {
            if (e.isLauncher) continue;
            let t = e.id;
            if (null == t) {
                let n = c.Ay.getOverrideForGame(e);
                if (null == e.distributor && null != n) continue;
                t = h.A.findGame(e)?.id;
            }
            if (null != t) for (let n of (0, R.XM)(e, t)) r[n] = e;
        }
        for (let e of n) null != e.id && (r[e.id] = e);
        for (let t of Object.keys(r)) {
            let n = r[t],
                a = (0, d.Ic)(n.exePath);
            for (let r of i.values()) {
                let i = (0, L.pU)(r);
                if (!U(r) || null == i) continue;
                let s = i.find((e) => e === t);
                if (null != s)
                    e.set(r.id, {
                        applicationId: s,
                        executablePath: a,
                        executableFingerprint: n.executableFingerprint,
                    });
                else
                    null != n &&
                        i.some((e) => e === _.a7) &&
                        (0, E.n1)(n) &&
                        e.set(r.id, {
                            applicationId: _.a7,
                            executablePath: a,
                            executableFingerprint: n.executableFingerprint,
                        });
            }
        }
        return (
            P.log(
                "~ getActivelyProgressingPlayOnDesktopQuestIds -> Actively progressing questIds: ",
                Array.from(e.keys()),
            ),
            e
        );
    }
    getActivelyProgressingStreamOnDesktopQuests() {
        let e = new Map(),
            t = A.A.getCurrentUserActiveStream();
        if (null == t || 2 > I.Ay.countVoiceStatesForChannel(t.channelId)) return e;
        let n = A.A.getStreamerActiveStreamMetadata();
        if (null == n) return e;
        P.log("~ getActivelyProgressingStreamOnDesktopQuestIds -> Active stream metadata: ", n);
        let i = n.id;
        if (null == i) return e;
        for (let t of m.A.quests.values()) {
            let n = (0, L.a2)(t);
            U(t) && null != n && n === i && e.set(t.id, { applicationId: i });
        }
        return (
            P.log(
                "~ getActivelyProgressingStreamOnDesktopQuestIds -> Actively progressing questIds: ",
                Array.from(e.keys()),
            ),
            e
        );
    }
    getActivelyProgressingActivityQuests() {
        let e = new Map(),
            t = l.Ay.getSelfEmbeddedActivities(),
            n = o.A.getMainFrame(),
            i = new Set(t.keys());
        if (
            ((0, v.x1)(n) && i.add(n.applicationId),
            P.log("~ getActivelyProgressingActivityQuestIds -> Running activity applicationIds: ", Array.from(i)),
            0 === i.size)
        )
            return e;
        let r = m.A.quests;
        for (let t of i)
            for (let n of r.values()) {
                let i = (0, L.vS)(n);
                U(n) && null != i && i === t && e.set(n.id, { applicationId: t });
            }
        for (let t of r.values()) U(t) && (0, y._e)(t) && e.set(t.id, { applicationId: D.ej });
        return (
            P.log("~ getActivelyProgressingActivityQuestIds -> Actively progressing questIds: ", Array.from(e.keys())),
            e
        );
    }
    actions = {
        QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: () =>
            this.syncHeartbeats([i.n.PLAY_ON_DESKTOP, i.n.STREAM_ON_DESKTOP], "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS"),
        QUESTS_ENROLL_SUCCESS: () =>
            this.syncHeartbeats(
                [i.n.PLAY_ON_DESKTOP, i.n.STREAM_ON_DESKTOP, i.n.PLAY_ACTIVITY],
                "QUESTS_ENROLL_SUCCESS",
                (e) => !G(e),
            ),
        QUESTS_SEND_HEARTBEAT_SUCCESS: this.handleSendHeartbeatSuccess,
        QUESTS_SEND_HEARTBEAT_FAILURE: this.handleSendHeartbeatFailure,
        QUESTS_PREVIEW_UPDATE_SUCCESS: () =>
            this.syncHeartbeats(
                [i.n.PLAY_ON_DESKTOP, i.n.STREAM_ON_DESKTOP, i.n.PLAY_ACTIVITY],
                "QUESTS_PREVIEW_UPDATE_SUCCESS",
            ),
        GAME_FETCH_SUCCESS: () =>
            a.h.wait(() => {
                this.syncHeartbeats([i.n.PLAY_ON_DESKTOP], "GAME_FETCH_SUCCESS");
            }),
        APPLICATIONS_FETCH_SUCCESS: () =>
            a.h.wait(() => {
                this.syncHeartbeats([i.n.PLAY_ON_DESKTOP], "APPLICATIONS_FETCH_SUCCESS");
            }),
        RUNNING_GAMES_CHANGE: () => this.syncHeartbeats([i.n.PLAY_ON_DESKTOP], "RUNNING_GAMES_CHANGE"),
        RUNNING_NON_GAMES_CHANGE: () => this.syncHeartbeats([i.n.PLAY_ON_DESKTOP], "RUNNING_NON_GAMES_CHANGE"),
        LOCAL_ACTIVITY_UPDATE: () =>
            a.h.wait(() => {
                this.syncHeartbeats([i.n.PLAY_ON_DESKTOP], "LOCAL_ACTIVITY_UPDATE");
            }),
        RPC_APP_DISCONNECTED: () =>
            a.h.wait(() => {
                this.syncHeartbeats([i.n.PLAY_ON_DESKTOP], "RPC_APP_DISCONNECTED");
            }),
        STREAM_START: () => this.syncHeartbeats([i.n.STREAM_ON_DESKTOP], "STREAM_START"),
        STREAM_CREATE: () => this.syncHeartbeats([i.n.STREAM_ON_DESKTOP], "STREAM_CREATE"),
        STREAM_CLOSE: () => this.syncHeartbeats([i.n.STREAM_ON_DESKTOP], "STREAM_CLOSE"),
        PASSIVE_UPDATE_V2: () => this.syncHeartbeats([i.n.STREAM_ON_DESKTOP], "PASSIVE_UPDATE_V2"),
        VOICE_STATE_UPDATES: () => this.syncHeartbeats([i.n.STREAM_ON_DESKTOP], "VOICE_STATE_UPDATES"),
        EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: (e) => {
            let { applicationId: t } = e;
            w(t);
        },
        FRAME_LAUNCH: async (e) => {
            let { applicationId: t } = e;
            await w(t), this.syncHeartbeats([i.n.PLAY_ACTIVITY], "FRAME_LAUNCH", (e) => !G(e));
        },
        FRAME_STOP: () => {
            this.syncHeartbeats([i.n.PLAY_ACTIVITY], "FRAME_STOP");
        },
        EMBEDDED_ACTIVITY_UPDATE_V2: () => {
            this.syncHeartbeats([i.n.PLAY_ACTIVITY], "EMBEDDED_ACTIVITY_UPDATE_V2", (e) => !G(e));
        },
        QUEST_APPLICATION_START_TIMER: (e) => {
            let { questId: t } = e;
            this.syncHeartbeats(
                [i.n.PLAY_ACTIVITY],
                "QUEST_APPLICATION_START_TIMER",
                (e) => null != e && e.id === t && G(e),
            );
        },
    };
}
let k = new x();
