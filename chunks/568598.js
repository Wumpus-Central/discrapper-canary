(n.d(t, { Ay: () => w, Gg: () => M, KU: () => P, Qt: () => b, r4: () => U }), n(321073));
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
    A = n(312006),
    h = n(616356),
    f = n(280450),
    I = n(470710),
    p = n(734057),
    T = n(192820),
    m = n(485296),
    g = n(287809),
    S = n(803301),
    N = n(977997),
    C = n(562153),
    O = n(90575),
    R = n(806931),
    L = n(652215),
    y = n(165610),
    D = n(731854);
let v = "__EMBEDDED_ACTIVITIES__";
function b(e) {
    let { applicationId: t, instanceId: n } = e;
    return null != n ? `activity-${t}-${n}` : `activity-${t}`;
}
function M(e) {
    return b({ applicationId: e.applicationId, instanceId: e.id });
}
function P(e) {
    switch (e.type) {
        case R.lp.ACTIVITY:
            return `\x01${e.sortKey}`;
        case R.lp.HIDDEN_STREAM:
        case R.lp.STREAM:
            return `${e.userVideo ? "\x02" : "\x03"}${(0, O.A)(e.userNick, e.user)}\x03`;
        case R.lp.USER:
            let t = "\x05";
            return (
                e.voiceState?.selfVideo ? (t = "\x03") : e.voiceState?.selfStream && (t = "\x04"),
                `${t}${(0, O.A)(e.userNick, e.user)}`
            );
    }
}
var U =
    (((i = {}).VIDEO = "VIDEO"),
    (i.STREAM = "STREAM"),
    (i.FILTERED = "FILTERED"),
    (i.SPEAKING = "SPEAKING"),
    (i.ACTIVITY = "ACTIVITY"),
    (i.NOT_POPPED_OUT = "NOT_POPPED_OUT"),
    (i.STAGE_SPEAKER = "STAGE_SPEAKER"),
    i);
class w {
    channelId;
    call;
    participants = {};
    lastSpoke = {};
    poppedOutParticipants = new Set();
    stageSpeakerIds = new Set();
    participantByIndex = new a.J((e) => {
        let t = [];
        (e.type === R.lp.USER && e.speaking && t.push("SPEAKING"),
            e.type === R.lp.USER && e.voiceState?.selfVideo
                ? (t.push("VIDEO"), e.localVideoDisabled || e.isPoppedOut || t.push("FILTERED"))
                : (0, R.Ay)(e) &&
                  (t.push("STREAM"),
                  e.type === R.lp.HIDDEN_STREAM || null == e.streamId || e.isPoppedOut || t.push("FILTERED")),
            e.type === R.lp.ACTIVITY && t.push("ACTIVITY"));
        let n = "isPoppedOut" in e && e.isPoppedOut;
        return (
            n || t.push("NOT_POPPED_OUT"),
            !n && e.type !== R.lp.ACTIVITY && this.stageSpeakerIds.has(e.user.id) && t.push("STAGE_SPEAKER"),
            t
        );
    }, P);
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
        let e = p.A.getChannel(this.channelId);
        if (
            null == e ||
            e.type === L.rbe.GUILD_TEXT ||
            ((this.call = I.A.getCall(this.channelId)), e.isPrivate() && (null == this.call || this.call.unavailable))
        )
            return !1;
        let t = new Set(e.isGuildVocalOrThread() ? Object.keys(N.A.getVoiceStatesForChannel(e.id)) : e.recipients);
        return (
            t.add(f.default.getId()),
            h.A.getAllActiveStreamsForChannel(this.channelId).forEach((e) => {
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
        return this.updateParticipant(v);
    }
    hasEmbeddedActivity() {
        return this.size("ACTIVITY") > 0;
    }
    updateParticipant(e) {
        let t = this.participants[e],
            n = e === v ? this._getParticipantsForEmbeddedActivities() : this._getParticipantsForUser(e);
        return (
            (null != t || 0 !== n.length) &&
            (t?.forEach((e) => {
                this.participantByIndex.delete(e.id);
            }),
            e !== v && this.updateStageSpeaker(e),
            n.forEach((e) => {
                this.participantByIndex.set(e.id, e);
            }),
            (this.participants[e] = n),
            !0)
        );
    }
    updateStageSpeaker(e) {
        p.A.getChannel(this.channelId)?.isGuildStageVoice() && A.Ay.isSpeaker(e, this.channelId)
            ? this.stageSpeakerIds.add(e)
            : this.stageSpeakerIds.delete(e);
    }
    updateParticipantSpeaking(e) {
        return (
            this.participants[e]?.reduce((t, n) => {
                if (n.type === R.lp.USER) {
                    let i = (0, s.R)({ userId: e, checkIsMuted: !0 }),
                        r = m.A.isSoundSharing(e),
                        a = this.participantByIndex.get(n.id);
                    return a?.type === R.lp.USER && a.speaking === i && a.soundsharing === r
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
                    i.type === R.lp.STREAM
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
        return g.default.getCurrentUser()?.nsfwAllowed || !i ? e : e.filter((e) => !(0, u.Q)(e.contentClassification));
    }
    _getParticipantsForEmbeddedActivities() {
        let e = this._getEmbeddedActivities(),
            t = e.map((e, t) => ({
                type: R.lp.ACTIVITY,
                id: b({ applicationId: e.applicationId, instanceId: e.compositeInstanceId }),
                applicationId: e.applicationId,
                activityType: L.$pd.PLAYING,
                activityUrl: e.url,
                participants: [...(e.participants ?? [])],
                guildId: p.A.getChannel(this.channelId)?.getGuildId() ?? null,
                sortKey: t.toString(),
            })),
            n = (0, y.ny)(_.A.getMainFrame());
        return (
            null != n &&
                (0, c.A)(n.applicationId) &&
                (0, y.VZ)(n) === this.channelId &&
                !e.some((e) => e.applicationId === n.applicationId) &&
                t.push({
                    type: R.lp.ACTIVITY,
                    id: M(n),
                    applicationId: n.applicationId,
                    activityType: L.$pd.PLAYING,
                    activityUrl: n.data.url,
                    participants: [{ userId: f.default.getId() }],
                    guildId: p.A.getChannel(this.channelId)?.getGuildId() ?? null,
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
            r = g.default.getUser(e);
        if (null == r) return i;
        let a = N.A.getVoiceStateForChannel(this.channelId, e),
            l = N.A.getVoicePlatformForChannel(this.channelId, e),
            o = p.A.getChannel(this.channelId),
            c = o?.getGuildId(),
            u = this.call?.ringing?.includes(e) ?? !1;
        (null != a || u) &&
            ((t = {
                type: R.lp.USER,
                ...S.A.getUserStreamData(e, c),
                user: r,
                id: r.id,
                voiceState: a,
                voicePlatform: l,
                speaking: (0, s.R)({ userId: e, checkIsMuted: !0 }),
                lastSpoke: this.lastSpoke[e] ?? 0,
                soundsharing: m.A.isSoundSharing(e),
                ringing: u,
                userNick: C.Ay.getName(c, this.channelId, r),
                userAvatarDecoration: (0, d.U)(r, c),
                localVideoDisabled: T.Ay.isLocalVideoDisabled(r.id),
                isPoppedOut: this.poppedOutParticipants.has(r.id),
            }),
            i.push(t));
        let _ = h.A.getStreamForUser(e, c) ?? h.A.getActiveStreamForUser(e, c);
        if (T.Ay.supports(D.O5.VIDEO) && null != _ && _.channelId === this.channelId) {
            let t = (0, E._z)(_),
                s = this.getParticipant(t),
                l = _.ownerId === f.default.getId() && h.A.isSelfStreamHidden(this.channelId),
                o =
                    s?.type === R.lp.STREAM
                        ? {
                              maxResolution: null != s.maxResolution ? { ...s.maxResolution } : void 0,
                              maxFrameRate: s.maxFrameRate,
                          }
                        : null;
            ((n = {
                ...S.A.getUserStreamData(e, c, D.x.STREAM),
                ...o,
                type: l ? R.lp.HIDDEN_STREAM : R.lp.STREAM,
                id: t,
                userVideo: a?.selfVideo ?? !1,
                user: r,
                userNick: C.Ay.getName(c, this.channelId, r),
                stream: _,
                isPoppedOut: this.poppedOutParticipants.has(t),
            }),
                i.push(n));
        }
        return i;
    }
}
