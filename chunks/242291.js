n.d(t, {
    C0: () => N,
    GN: () => C,
    M2: () => w,
    Nq: () => A,
    SZ: () => x,
    aC: () => L,
    pI: () => S,
    sR: () => D,
    tt: () => k
}),
    n(539854);
var r = n(399606),
    i = n(704215),
    a = n(736045),
    o = n(695346),
    s = n(675478),
    l = n(581883),
    c = n(294629),
    u = n(401062),
    d = n(131704),
    f = n(496675),
    _ = n(594174),
    p = n(626135),
    h = n(74538),
    m = n(51144),
    g = n(208049),
    E = n(763296),
    b = n(697426),
    y = n(641015),
    O = n(893663),
    v = n(710111),
    I = n(981631);
function S() {
    var e;
    let t = o.kU.getSetting();
    return null != (e = null == t ? void 0 : t.volume) ? e : 100;
}
function T(e, t) {
    return (null == t ? void 0 : t.guild_id) == null || f.Z.can(I.Plq.USE_EXTERNAL_SOUNDS, t) || e.guildId === v.X8 || e.guildId === (null == t ? void 0 : t.guild_id);
}
function A(e, t, n) {
    let r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    return (h.ZP.canUseSoundboardEverywhere(e) || t.guildId === (null == n ? void 0 : n.guild_id) || t.guildId === v.X8) && T(t, n) && (!r || t.available);
}
function N(e) {
    let { mute: t, suppress: n } = (0, c.b)({ channel: e });
    return !t && !n;
}
function C(e, t, n) {
    (0, g.XE)(t, e, b.YQ.SOUNDBOARD), (0, u.kq)(t, e, __OVERLAY__, n);
}
function R(e, t) {
    (0, g.XE)(t, e, b.YQ.JOINED_VOICE_CHANNEL), (0, u.vy)(t, e, __OVERLAY__);
}
function P() {
    var e, t;
    return Object.values(null != (t = null == (e = l.Z.settings.guilds) ? void 0 : e.guilds) ? t : {}).some((e) => null != e.joinSound);
}
async function w(e) {
    let t = _.default.getCurrentUser(),
        n = (0, a.Z)(),
        r = (0, O.k9)(e);
    if (null == n || d.Lr.has(n.type) || null == r || !h.ZP.canUseCustomCallSounds(t) || !(0, y.D)()) return;
    await (0, g.w)();
    let i = r.guildId === v.hY ? v.X8 : r.guildId,
        o = E.Z.getSound(i, r.soundId);
    if (null != o) {
        if (!T(o, n) || !A(t, o, n, !0) || !N(n)) return null;
        R(o, n.id);
    }
}
function D(e) {
    let { isSoundboardButtonDisabled: t = !1 } = e,
        n = (0, r.e7)([_.default], () => _.default.getCurrentUser()),
        a = [];
    if (!t && !P()) {
        a.push(i.z.CUSTOM_CALL_SOUNDS_SPARKLES);
        let e = (0, m.Fc)(n);
        (h.ZP.canUseCustomCallSounds(n) || e) && a.push(i.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL);
    }
    return a;
}
function L(e, t) {
    (0, s.PS)(
        e,
        (n) => {
            (n.joinSound = void 0),
                M({
                    guildId: e,
                    changeType: b.MW.REMOVED,
                    soundType: b.jy.ENTRY,
                    location: t
                });
        },
        s.fy.INFREQUENT_USER_ACTION
    );
}
function x(e, t, n) {
    (0, s.PS)(
        e,
        (r) => {
            let i = t.guildId === v.X8,
                a = i ? b.H$.DEFAULT : b.H$.CUSTOM,
                o = null != r.joinSound ? b.MW.UPDATED : b.MW.ADDED;
            (r.joinSound = {
                soundId: t.soundId,
                guildId: i ? v.hY : t.guildId
            }),
                M({
                    guildId: e,
                    changeType: o,
                    soundSource: a,
                    soundType: b.jy.ENTRY,
                    location: n
                });
        },
        s.fy.INFREQUENT_USER_ACTION
    );
}
function M(e) {
    let { guildId: t, changeType: n, soundType: r, soundSource: i, location: a } = e;
    p.default.track(I.rMx.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, {
        location_stack: a,
        guild_id: '' === t ? 0 : Number(t),
        change_type: n,
        sound_type: r,
        sound_source: i
    });
}
function k(e) {
    let { location: t } = e;
    p.default.track(I.rMx.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED, { location_stack: t });
}
