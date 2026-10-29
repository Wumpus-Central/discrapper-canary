(n.d(t, { Ay: () => G, Gg: () => M, KU: () => U, Qt: () => P, r4: () => w }), n(321073));
var i,
    r = n(435558),
    a = n(713402),
    s = n(717558),
    l = n(240583),
    o = n(933958),
    d = n(259464),
    c = n(333807),
    u = n(159993),
    _ = n(91242),
    E = n(652896),
    A = n(209932),
    h = n(312006),
    f = n(616356),
    I = n(280450),
    p = n(470710),
    T = n(734057),
    m = n(999926),
    g = n(485296),
    S = n(287809),
    N = n(803301),
    C = n(977997),
    O = n(562153),
    R = n(90575),
    L = n(806931),
    y = n(652215),
    D = n(165610),
    v = n(731854);
let b = "__EMBEDDED_ACTIVITIES__";
function P(e) {
    let { applicationId: t, instanceId: n } = e;
    return null != n ? `activity-${t}-${n}` : `activity-${t}`;
}
function M(e) {
    return P({ applicationId: e.applicationId, instanceId: e.id });
}
function U(e) {
    switch (e.type) {
        case L.lp.ACTIVITY:
            return `\x01${e.sortKey}`;
        case L.lp.HIDDEN_STREAM:
        case L.lp.STREAM:
            return `${e.userVideo ? "\x02" : "\x03"}${(0, R.A)(e.userNick, e.user)}\x03`;
        case L.lp.USER:
            let t = "\x05";
            return (
                e.voiceState?.selfVideo ? (t = "\x03") : e.voiceState?.selfStream && (t = "\x04"),
                `${t}${(0, R.A)(e.userNick, e.user)}`
            );
    }
}
var w =
    (((i = {}).VIDEO = "VIDEO"),
    (i.STREAM = "STREAM"),
    (i.FILTERED = "FILTERED"),
    (i.SPEAKING = "SPEAKING"),
    (i.ACTIVITY = "ACTIVITY"),
    (i.NOT_POPPED_OUT = "NOT_POPPED_OUT"),
    (i.STAGE_SPEAKER = "STAGE_SPEAKER"),
    i);
class G {
    channelId;
    call;
    participants = {};
    lastSpoke = {};
    poppedOutParticipants = new Set();
    stageSpeakerIds = new Set();
    participantByIndex = new a.J((e) => {
        let t = [];
        (e.type === L.lp.USER && e.speaking && t.push("SPEAKING"),
            e.type === L.lp.USER && e.voiceState?.selfVideo
                ? (t.push("VIDEO"), e.localVideoDisabled || e.isPoppedOut || t.push("FILTERED"))
                : (0, L.Ay)(e) &&
                  (t.push("STREAM"),
                  e.type === L.lp.HIDDEN_STREAM || null == e.streamId || e.isPoppedOut || t.push("FILTERED")),
            e.type === L.lp.ACTIVITY && t.push("ACTIVITY"));
        let n = "isPoppedOut" in e && e.isPoppedOut;
        return (
            n || t.push("NOT_POPPED_OUT"),
            !n && e.type !== L.lp.ACTIVITY && this.stageSpeakerIds.has(e.user.id) && t.push("STAGE_SPEAKER"),
            t
        );
    }, U);
    constructor(e) {
        this.channelId = e;
    }
    get version() {
        return this.participantByIndex.version;
    }
    size(e) {
        return this.participantByIndex.size(e);
    }
    toArray(e) {
        return this.participantByIndex.values(e, !0);
    }
    rebuild() {
        let e = T.A.getChannel(this.channelId);
        if (
            null == e ||
            e.type === y.rbe.GUILD_TEXT ||
            ((this.call = p.A.getCall(this.channelId)), e.isPrivate() && (null == this.call || this.call.unavailable))
        )
            return !1;
        let t = new Set(e.isGuildVocalOrThread() ? Object.keys(C.A.getVoiceStatesForChannel(e.id)) : e.recipients);
        return (
            t.add(I.default.getId()),
            f.A.getAllActiveStreamsForChannel(this.channelId).forEach((e) => {
                let { ownerId: n } = e;
                return t.add(n);
            }),
            this.participantByIndex.clear(),
            (this.participants = {}),
            this.stageSpeakerIds.clear(),
            t.forEach((e) => this.updateParticipant(e)),
            this.updateEmbeddedActivities(),
            !0
        );
    }
    getParticipant(e) {
        return this.participantByIndex.get(e) ?? null;
    }
    updateEmbeddedActivities() {
        return this.updateParticipant(b);
    }
    hasEmbeddedActivity() {
        return this.size("ACTIVITY") > 0;
    }
    updateParticipant(e) {
        let t = this.participants[e],
            n = e === b ? this._getParticipantsForEmbeddedActivities() : this._getParticipantsForUser(e);
        return (
            (null != t || 0 !== n.length) &&
            (t?.forEach((e) => {
                this.participantByIndex.delete(e.id);
            }),
            e !== b && this.updateStageSpeaker(e),
            n.forEach((e) => {
                this.participantByIndex.set(e.id, e);
            }),
            (this.participants[e] = n),
            !0)
        );
    }
    updateStageSpeaker(e) {
        T.A.getChannel(this.channelId)?.isGuildStageVoice() && h.Ay.isSpeaker(e, this.channelId)
            ? this.stageSpeakerIds.add(e)
            : this.stageSpeakerIds.delete(e);
    }
    updateParticipantSpeaking(e) {
        return (
            this.participants[e]?.reduce((t, n) => {
                if (n.type === L.lp.USER) {
                    let i = (0, s.R)({ userId: e, checkIsMuted: !0 }),
                        r = g.A.isSoundSharing(e),
                        a = A.A.isUserPlayingSounds(e),
                        l = this.participantByIndex.get(n.id);
                    return l?.type === L.lp.USER &&
                        l.speaking === i &&
                        l.soundsharing === r &&
                        l.playingSoundboard === a
                        ? t
                        : (i && (this.lastSpoke[e] = Date.now()),
                          this.participantByIndex.set(n.id, {
                              ...n,
                              speaking: i,
                              lastSpoke: this.lastSpoke[e],
                              playingSoundboard: a,
                              soundsharing: r,
                          }),
                          !0);
                }
                return t;
            }, !1) ?? !1
        );
    }
    updateParticipantQuality(e, t, n) {
        return (
            this.participants[e]?.reduce(
                (e, i) =>
                    i.type === L.lp.STREAM
                        ? (this.participantByIndex.set(i.id, { ...i, maxResolution: t, maxFrameRate: n }), !0)
                        : e,
                !1,
            ) ?? !1
        );
    }
    updateParticipantPoppedOut(e, t) {
        t ? this.poppedOutParticipants.add(e) : this.poppedOutParticipants.delete(e);
    }
    _getEmbeddedActivities() {
        let e,
            t = o.Ay.getEmbeddedActivitiesForChannelIncludingHidden(this.channelId),
            n = o.Ay.getSelfEmbeddedActivityForChannel(this.channelId);
        e = null == n ? t : (0, r.uniqBy)([...t, n], (e) => e.compositeInstanceId);
        let { enabled: i } = l.c.getConfig({ location: "rtc_participants" });
        return S.default.getCurrentUser()?.nsfwAllowed || !i ? e : e.filter((e) => !(0, u.Q)(e.contentClassification));
    }
    _getParticipantsForEmbeddedActivities() {
        let e = this._getEmbeddedActivities(),
            t = e.map((e, t) => ({
                type: L.lp.ACTIVITY,
                id: P({ applicationId: e.applicationId, instanceId: e.compositeInstanceId }),
                applicationId: e.applicationId,
                activityType: y.$pd.PLAYING,
                activityUrl: e.url,
                participants: [...(e.participants ?? [])],
                guildId: T.A.getChannel(this.channelId)?.getGuildId() ?? null,
                sortKey: t.toString(),
            })),
            n = (0, D.ny)(_.A.getMainFrame());
        return (
            null != n &&
                (0, c.A)(n.applicationId) &&
                (0, D.VZ)(n) === this.channelId &&
                !e.some((e) => e.applicationId === n.applicationId) &&
                t.push({
                    type: L.lp.ACTIVITY,
                    id: M(n),
                    applicationId: n.applicationId,
                    activityType: y.$pd.PLAYING,
                    activityUrl: n.data.url,
                    participants: [{ userId: I.default.getId() }],
                    guildId: T.A.getChannel(this.channelId)?.getGuildId() ?? null,
                    sortKey: t.length.toString(),
                    frameId: n.id,
                }),
            t
        );
    }
    _getParticipantsForUser(e) {
        let t,
            n,
            i = [],
            r = S.default.getUser(e);
        if (null == r) return i;
        let a = C.A.getVoiceStateForChannel(this.channelId, e),
            l = C.A.getVoicePlatformForChannel(this.channelId, e),
            o = T.A.getChannel(this.channelId),
            c = o?.getGuildId(),
            u = this.call?.ringing?.includes(e) ?? !1;
        (null != a || u) &&
            ((t = {
                type: L.lp.USER,
                ...N.A.getUserStreamData(e, c),
                user: r,
                id: r.id,
                voiceState: a,
                voicePlatform: l,
                speaking: (0, s.R)({ userId: e, checkIsMuted: !0 }),
                lastSpoke: this.lastSpoke[e] ?? 0,
                playingSoundboard: A.A.isUserPlayingSounds(e),
                soundsharing: g.A.isSoundSharing(e),
                ringing: u,
                userNick: O.Ay.getName(c, this.channelId, r),
                userAvatarDecoration: (0, d.U)(r, c),
                localVideoDisabled: m.Ay.isLocalVideoDisabled(r.id),
                isPoppedOut: this.poppedOutParticipants.has(r.id),
            }),
            i.push(t));
        let _ = f.A.getStreamForUser(e, c) ?? f.A.getActiveStreamForUser(e, c);
        if (m.Ay.supports(v.O5.VIDEO) && null != _ && _.channelId === this.channelId) {
            let t = (0, E._z)(_),
                s = this.getParticipant(t),
                l = _.ownerId === I.default.getId() && f.A.isSelfStreamHidden(this.channelId),
                o =
                    s?.type === L.lp.STREAM
                        ? {
                              maxResolution: null != s.maxResolution ? { ...s.maxResolution } : void 0,
                              maxFrameRate: s.maxFrameRate,
                          }
                        : null;
            ((n = {
                ...N.A.getUserStreamData(e, c, v.x.STREAM),
                ...o,
                type: l ? L.lp.HIDDEN_STREAM : L.lp.STREAM,
                id: t,
                userVideo: a?.selfVideo ?? !1,
                user: r,
                userNick: O.Ay.getName(c, this.channelId, r),
                stream: _,
                isPoppedOut: this.poppedOutParticipants.has(t),
            }),
                i.push(n));
        }
        return i;
    }
}
