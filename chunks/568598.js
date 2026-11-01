(n.d(t, { Ay: () => x, Gg: () => U, KU: () => w, Qt: () => M, r4: () => G }), n(321073));
var i,
    r = n(435558),
    a = n(350835),
    s = n(713402),
    l = n(717558),
    o = n(240583),
    d = n(933958),
    c = n(259464),
    u = n(333807),
    _ = n(159993),
    E = n(91242),
    A = n(652896),
    h = n(209932),
    f = n(312006),
    I = n(616356),
    p = n(280450),
    T = n(470710),
    m = n(734057),
    g = n(999926),
    S = n(485296),
    N = n(287809),
    C = n(803301),
    O = n(977997),
    R = n(562153),
    L = n(90575),
    y = n(806931),
    D = n(652215),
    v = n(165610),
    b = n(731854);
let P = "__EMBEDDED_ACTIVITIES__";
function M(e) {
    let { applicationId: t, instanceId: n } = e;
    return null != n ? `activity-${t}-${n}` : `activity-${t}`;
}
function U(e) {
    return M({ applicationId: e.applicationId, instanceId: e.id });
}
function w(e) {
    switch (e.type) {
        case y.lp.ACTIVITY:
            return `\x01${e.sortKey}`;
        case y.lp.HIDDEN_STREAM:
        case y.lp.STREAM:
            return `${e.userVideo ? "\x02" : "\x03"}${(0, L.A)(e.userNick, e.user)}\x03`;
        case y.lp.USER:
            let t = "\x05";
            return (
                e.voiceState?.selfVideo ? (t = "\x03") : e.voiceState?.selfStream && (t = "\x04"),
                `${t}${(0, L.A)(e.userNick, e.user)}`
            );
    }
}
var G =
    (((i = {}).VIDEO = "VIDEO"),
    (i.STREAM = "STREAM"),
    (i.FILTERED = "FILTERED"),
    (i.SPEAKING = "SPEAKING"),
    (i.ACTIVITY = "ACTIVITY"),
    (i.NOT_POPPED_OUT = "NOT_POPPED_OUT"),
    (i.STAGE_SPEAKER = "STAGE_SPEAKER"),
    i);
class x {
    channelId;
    call;
    participants = {};
    lastSpoke = {};
    poppedOutParticipants = new Set();
    stageSpeakerIds = new Set();
    participantByIndex = new s.J((e) => {
        let t = [];
        (e.type === y.lp.USER && e.speaking && t.push("SPEAKING"),
            e.type === y.lp.USER && e.voiceState?.selfVideo
                ? (t.push("VIDEO"), e.localVideoDisabled || e.isPoppedOut || t.push("FILTERED"))
                : (0, y.Ay)(e) &&
                  (t.push("STREAM"),
                  e.type === y.lp.HIDDEN_STREAM || null == e.streamId || e.isPoppedOut || t.push("FILTERED")),
            e.type === y.lp.ACTIVITY && t.push("ACTIVITY"));
        let n = "isPoppedOut" in e && e.isPoppedOut;
        return (
            n || t.push("NOT_POPPED_OUT"),
            !n && e.type !== y.lp.ACTIVITY && this.stageSpeakerIds.has(e.user.id) && t.push("STAGE_SPEAKER"),
            t
        );
    }, w);
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
        let e = m.A.getChannel(this.channelId);
        if (
            null == e ||
            e.type === D.rbe.GUILD_TEXT ||
            ((this.call = T.A.getCall(this.channelId)), e.isPrivate() && (null == this.call || this.call.unavailable))
        )
            return !1;
        let t = new Set(e.isGuildVocalOrThread() ? Object.keys(O.A.getVoiceStatesForChannel(e.id)) : e.recipients);
        return (
            t.add(p.default.getId()),
            I.A.getAllActiveStreamsForChannel(this.channelId).forEach((e) => {
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
        return this.updateParticipant(P);
    }
    hasEmbeddedActivity() {
        return this.size("ACTIVITY") > 0;
    }
    updateParticipant(e) {
        let t = this.participants[e],
            n = e === P ? this._getParticipantsForEmbeddedActivities() : this._getParticipantsForUser(e);
        return (
            (null != t || 0 !== n.length) &&
            (t?.forEach((e) => {
                this.participantByIndex.delete(e.id);
            }),
            e !== P && this.updateStageSpeaker(e),
            n.forEach((e) => {
                this.participantByIndex.set(e.id, e);
            }),
            (this.participants[e] = n),
            !0)
        );
    }
    updateStageSpeaker(e) {
        m.A.getChannel(this.channelId)?.isGuildStageVoice() && f.Ay.isSpeaker(e, this.channelId)
            ? this.stageSpeakerIds.add(e)
            : this.stageSpeakerIds.delete(e);
    }
    updateParticipantSpeaking(e) {
        return (
            this.participants[e]?.reduce((t, n) => {
                if (n.type === y.lp.USER) {
                    let i = (0, l.R)({ userId: e, checkIsMuted: !0 }),
                        r = S.A.isSoundSharing(e),
                        a = h.A.isUserPlayingSounds(e),
                        s = this.participantByIndex.get(n.id);
                    return s?.type === y.lp.USER &&
                        s.speaking === i &&
                        s.soundsharing === r &&
                        s.playingSoundboard === a
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
                    i.type === y.lp.STREAM
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
            t = d.Ay.getEmbeddedActivitiesForChannelIncludingHidden(this.channelId),
            n = d.Ay.getSelfEmbeddedActivityForChannel(this.channelId);
        e = null == n ? t : (0, r.uniqBy)([...t, n], (e) => e.compositeInstanceId);
        let { enabled: i } = o.c.getConfig({ location: "rtc_participants" });
        return N.default.getCurrentUser()?.nsfwAllowed || !i ? e : e.filter((e) => !(0, _.Q)(e.contentClassification));
    }
    _getParticipantsForEmbeddedActivities() {
        let e = this._getEmbeddedActivities(),
            t = e.map((e, t) => ({
                type: y.lp.ACTIVITY,
                id: M({ applicationId: e.applicationId, instanceId: e.compositeInstanceId }),
                applicationId: e.applicationId,
                activityType: a.$.PLAYING,
                activityUrl: e.url,
                participants: [...(e.participants ?? [])],
                guildId: m.A.getChannel(this.channelId)?.getGuildId() ?? null,
                sortKey: t.toString(),
            })),
            n = (0, v.ny)(E.A.getMainFrame());
        return (
            null != n &&
                (0, u.A)(n.applicationId) &&
                (0, v.VZ)(n) === this.channelId &&
                !e.some((e) => e.applicationId === n.applicationId) &&
                t.push({
                    type: y.lp.ACTIVITY,
                    id: U(n),
                    applicationId: n.applicationId,
                    activityType: a.$.PLAYING,
                    activityUrl: n.data.url,
                    participants: [{ userId: p.default.getId() }],
                    guildId: m.A.getChannel(this.channelId)?.getGuildId() ?? null,
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
            r = N.default.getUser(e);
        if (null == r) return i;
        let a = O.A.getVoiceStateForChannel(this.channelId, e),
            s = O.A.getVoicePlatformForChannel(this.channelId, e),
            o = m.A.getChannel(this.channelId),
            d = o?.getGuildId(),
            u = this.call?.ringing?.includes(e) ?? !1;
        (null != a || u) &&
            ((t = {
                type: y.lp.USER,
                ...C.A.getUserStreamData(e, d),
                user: r,
                id: r.id,
                voiceState: a,
                voicePlatform: s,
                speaking: (0, l.R)({ userId: e, checkIsMuted: !0 }),
                lastSpoke: this.lastSpoke[e] ?? 0,
                playingSoundboard: h.A.isUserPlayingSounds(e),
                soundsharing: S.A.isSoundSharing(e),
                ringing: u,
                userNick: R.Ay.getName(d, this.channelId, r),
                userAvatarDecoration: (0, c.U)(r, d),
                localVideoDisabled: g.Ay.isLocalVideoDisabled(r.id),
                isPoppedOut: this.poppedOutParticipants.has(r.id),
            }),
            i.push(t));
        let _ = I.A.getStreamForUser(e, d) ?? I.A.getActiveStreamForUser(e, d);
        if (g.Ay.supports(b.O5.VIDEO) && null != _ && _.channelId === this.channelId) {
            let t = (0, A._z)(_),
                s = this.getParticipant(t),
                l = _.ownerId === p.default.getId() && I.A.isSelfStreamHidden(this.channelId),
                o =
                    s?.type === y.lp.STREAM
                        ? {
                              maxResolution: null != s.maxResolution ? { ...s.maxResolution } : void 0,
                              maxFrameRate: s.maxFrameRate,
                          }
                        : null;
            ((n = {
                ...C.A.getUserStreamData(e, d, b.x.STREAM),
                ...o,
                type: l ? y.lp.HIDDEN_STREAM : y.lp.STREAM,
                id: t,
                userVideo: a?.selfVideo ?? !1,
                user: r,
                userNick: R.Ay.getName(d, this.channelId, r),
                stream: _,
                isPoppedOut: this.poppedOutParticipants.has(t),
            }),
                i.push(n));
        }
        return i;
    }
}
