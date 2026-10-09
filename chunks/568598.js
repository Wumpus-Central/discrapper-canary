(n.d(t, { Ay: () => b, KU: () => D, Qt: () => y, r4: () => v }), n(321073));
var i,
    r = n(435558),
    a = n(713402),
    s = n(717558),
    l = n(240583),
    o = n(933958),
    d = n(259464),
    c = n(159993),
    u = n(652896),
    _ = n(312006),
    E = n(616356),
    A = n(280450),
    h = n(470710),
    f = n(734057),
    I = n(192820),
    p = n(485296),
    T = n(287809),
    m = n(803301),
    g = n(977997),
    S = n(562153),
    N = n(90575),
    C = n(806931),
    O = n(652215),
    R = n(731854);
let L = "__EMBEDDED_ACTIVITIES__";
function y(e) {
    let { applicationId: t, instanceId: n } = e;
    return null != n ? `activity-${t}-${n}` : `activity-${t}`;
}
function D(e) {
    switch (e.type) {
        case C.lp.ACTIVITY:
            return `\x01${e.sortKey}`;
        case C.lp.HIDDEN_STREAM:
        case C.lp.STREAM:
            return `${e.userVideo ? "\x02" : "\x03"}${(0, N.A)(e.userNick, e.user)}\x03`;
        case C.lp.USER:
            let t = "\x05";
            return (
                e.voiceState?.selfVideo ? (t = "\x03") : e.voiceState?.selfStream && (t = "\x04"),
                `${t}${(0, N.A)(e.userNick, e.user)}`
            );
    }
}
var v =
    (((i = {}).VIDEO = "VIDEO"),
    (i.STREAM = "STREAM"),
    (i.FILTERED = "FILTERED"),
    (i.SPEAKING = "SPEAKING"),
    (i.ACTIVITY = "ACTIVITY"),
    (i.NOT_POPPED_OUT = "NOT_POPPED_OUT"),
    (i.STAGE_SPEAKER = "STAGE_SPEAKER"),
    i);
class b {
    channelId;
    call;
    participants = {};
    lastSpoke = {};
    poppedOutParticipants = new Set();
    stageSpeakerIds = new Set();
    participantByIndex = new a.J((e) => {
        let t = [];
        (e.type === C.lp.USER && e.speaking && t.push("SPEAKING"),
            e.type === C.lp.USER && e.voiceState?.selfVideo
                ? (t.push("VIDEO"), e.localVideoDisabled || e.isPoppedOut || t.push("FILTERED"))
                : (0, C.Ay)(e) &&
                  (t.push("STREAM"),
                  e.type === C.lp.HIDDEN_STREAM || null == e.streamId || e.isPoppedOut || t.push("FILTERED")),
            e.type === C.lp.ACTIVITY && t.push("ACTIVITY"));
        let n = "isPoppedOut" in e && e.isPoppedOut;
        return (
            n || t.push("NOT_POPPED_OUT"),
            !n && e.type !== C.lp.ACTIVITY && this.stageSpeakerIds.has(e.user.id) && t.push("STAGE_SPEAKER"),
            t
        );
    }, D);
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
        let e = f.A.getChannel(this.channelId);
        if (
            null == e ||
            e.type === O.rbe.GUILD_TEXT ||
            ((this.call = h.A.getCall(this.channelId)), e.isPrivate() && (null == this.call || this.call.unavailable))
        )
            return !1;
        let t = new Set(e.isGuildVocalOrThread() ? Object.keys(g.A.getVoiceStatesForChannel(e.id)) : e.recipients);
        return (
            t.add(A.default.getId()),
            E.A.getAllActiveStreamsForChannel(this.channelId).forEach((e) => {
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
        return this.updateParticipant(L);
    }
    hasEmbeddedActivity() {
        return this.size("ACTIVITY") > 0;
    }
    updateParticipant(e) {
        let t = this.participants[e],
            n = e === L ? this._getParticipantsForEmbeddedActivities() : this._getParticipantsForUser(e);
        return (
            (null != t || 0 !== n.length) &&
            (t?.forEach((e) => {
                this.participantByIndex.delete(e.id);
            }),
            e !== L && this.updateStageSpeaker(e),
            n.forEach((e) => {
                this.participantByIndex.set(e.id, e);
            }),
            (this.participants[e] = n),
            !0)
        );
    }
    updateStageSpeaker(e) {
        f.A.getChannel(this.channelId)?.isGuildStageVoice() && _.Ay.isSpeaker(e, this.channelId)
            ? this.stageSpeakerIds.add(e)
            : this.stageSpeakerIds.delete(e);
    }
    updateParticipantSpeaking(e) {
        return (
            this.participants[e]?.reduce((t, n) => {
                if (n.type === C.lp.USER) {
                    let i = (0, s.R)({ userId: e, checkIsMuted: !0 }),
                        r = p.A.isSoundSharing(e),
                        a = this.participantByIndex.get(n.id);
                    return a?.type === C.lp.USER && a.speaking === i && a.soundsharing === r
                        ? t
                        : (i && (this.lastSpoke[e] = Date.now()),
                          this.participantByIndex.set(n.id, {
                              ...n,
                              speaking: i,
                              lastSpoke: this.lastSpoke[e],
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
                    i.type === C.lp.STREAM
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
        return T.default.getCurrentUser()?.nsfwAllowed || !i ? e : e.filter((e) => !(0, c.Q)(e.contentClassification));
    }
    _getParticipantsForEmbeddedActivities() {
        return this._getEmbeddedActivities().map((e, t) => ({
            type: C.lp.ACTIVITY,
            id: y({ applicationId: e.applicationId, instanceId: e.compositeInstanceId }),
            applicationId: e.applicationId,
            activityType: O.$pd.PLAYING,
            activityUrl: e.url,
            participants: [...(e.participants ?? [])],
            guildId: f.A.getChannel(this.channelId)?.getGuildId() ?? null,
            sortKey: t.toString(),
        }));
    }
    _getParticipantsForUser(e) {
        let t,
            n,
            i = [],
            r = T.default.getUser(e);
        if (null == r) return i;
        let a = g.A.getVoiceStateForChannel(this.channelId, e),
            l = g.A.getVoicePlatformForChannel(this.channelId, e),
            o = f.A.getChannel(this.channelId),
            c = o?.getGuildId(),
            _ = this.call?.ringing?.includes(e) ?? !1;
        (null != a || _) &&
            ((t = {
                type: C.lp.USER,
                ...m.A.getUserStreamData(e, c),
                user: r,
                id: r.id,
                voiceState: a,
                voicePlatform: l,
                speaking: (0, s.R)({ userId: e, checkIsMuted: !0 }),
                lastSpoke: this.lastSpoke[e] ?? 0,
                soundsharing: p.A.isSoundSharing(e),
                ringing: _,
                userNick: S.Ay.getName(c, this.channelId, r),
                userAvatarDecoration: (0, d.U)(r, c),
                localVideoDisabled: I.Ay.isLocalVideoDisabled(r.id),
                isPoppedOut: this.poppedOutParticipants.has(r.id),
            }),
            i.push(t));
        let h = E.A.getStreamForUser(e, c) ?? E.A.getActiveStreamForUser(e, c);
        if (I.Ay.supports(R.O5.VIDEO) && null != h && h.channelId === this.channelId) {
            let t = (0, u._z)(h),
                s = this.getParticipant(t),
                l = h.ownerId === A.default.getId() && E.A.isSelfStreamHidden(this.channelId),
                o =
                    s?.type === C.lp.STREAM
                        ? {
                              maxResolution: null != s.maxResolution ? { ...s.maxResolution } : void 0,
                              maxFrameRate: s.maxFrameRate,
                          }
                        : null;
            ((n = {
                ...m.A.getUserStreamData(e, c, R.x.STREAM),
                ...o,
                type: l ? C.lp.HIDDEN_STREAM : C.lp.STREAM,
                id: t,
                userVideo: a?.selfVideo ?? !1,
                user: r,
                userNick: S.Ay.getName(c, this.channelId, r),
                stream: h,
                isPoppedOut: this.poppedOutParticipants.has(t),
            }),
                i.push(n));
        }
        return i;
    }
}
