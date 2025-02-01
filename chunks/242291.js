n.d(t, {
    C0: () => C,
    GN: () => R,
    M2: () => x,
    Nq: () => N,
    SZ: () => w,
    aC: () => P,
    pI: () => S,
    sR: () => L,
    tt: () => k
}),
    n(653041);
var i = n(399606),
    r = n(704215),
    a = n(736045),
    s = n(695346),
    o = n(675478),
    l = n(581883),
    u = n(294629),
    c = n(401062),
    d = n(131704),
    f = n(496675),
    _ = n(594174),
    p = n(626135),
    h = n(74538),
    m = n(51144),
    g = n(208049),
    E = n(763296),
    v = n(697426),
    y = n(641015),
    I = n(893663),
    T = n(710111),
    b = n(981631);
function S() {
    var e;
    let t = s.kU.getSetting();
    return null !== (e = null == t ? void 0 : t.volume) && void 0 !== e ? e : 100;
}
function A(e, t) {
    return (null == t ? void 0 : t.guild_id) == null || f.Z.can(b.Plq.USE_EXTERNAL_SOUNDS, t) || e.guildId === T.X8 || e.guildId === (null == t ? void 0 : t.guild_id);
}
function N(e, t, n) {
    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    return (h.ZP.canUseSoundboardEverywhere(e) || t.guildId === (null == n ? void 0 : n.guild_id) || t.guildId === T.X8) && A(t, n) && (!i || t.available);
}
function C(e) {
    let { mute: t, suppress: n } = (0, u.b)({ channel: e });
    return !t && !n;
}
function R(e, t, n) {
    (0, g.XE)(t, e, v.YQ.SOUNDBOARD), (0, c.kq)(t, e, __OVERLAY__, n);
}
function O(e, t) {
    (0, g.XE)(t, e, v.YQ.JOINED_VOICE_CHANNEL), (0, c.vy)(t, e, __OVERLAY__);
}
function D() {
    var e, t;
    return Object.values(null !== (t = null === (e = l.Z.settings.guilds) || void 0 === e ? void 0 : e.guilds) && void 0 !== t ? t : {}).some((e) => null != e.joinSound);
}
async function x(e) {
    let t = _.default.getCurrentUser(),
        n = (0, a.Z)(),
        i = (0, I.k9)(e);
    if (null == n || d.Lr.has(n.type) || null == i || !h.ZP.canUseCustomCallSounds(t) || !(0, y.D)()) return;
    await (0, g.w)();
    let r = i.guildId === T.hY ? T.X8 : i.guildId,
        s = E.Z.getSound(r, i.soundId);
    if (null != s) {
        if (!A(s, n) || !N(t, s, n, !0) || !C(n)) return null;
        O(s, n.id);
    }
}
function L(e) {
    let { isSoundboardButtonDisabled: t = !1 } = e,
        n = (0, i.e7)([_.default], () => _.default.getCurrentUser()),
        a = [];
    if (!t && !D()) {
        a.push(r.z.CUSTOM_CALL_SOUNDS_SPARKLES);
        let e = (0, m.Fc)(n);
        (h.ZP.canUseCustomCallSounds(n) || e) && a.push(r.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL);
    }
    return a;
}
function P(e, t) {
    (0, o.PS)(
        e,
        (n) => {
            (n.joinSound = void 0),
                M({
                    guildId: e,
                    changeType: v.MW.REMOVED,
                    soundType: v.jy.ENTRY,
                    location: t
                });
        },
        o.fy.INFREQUENT_USER_ACTION
    );
}
function w(e, t, n) {
    (0, o.PS)(
        e,
        (i) => {
            let r = t.guildId === T.X8,
                a = r ? v.H$.DEFAULT : v.H$.CUSTOM,
                s = null != i.joinSound ? v.MW.UPDATED : v.MW.ADDED;
            (i.joinSound = {
                soundId: t.soundId,
                guildId: r ? T.hY : t.guildId
            }),
                M({
                    guildId: e,
                    changeType: s,
                    soundSource: a,
                    soundType: v.jy.ENTRY,
                    location: n
                });
        },
        o.fy.INFREQUENT_USER_ACTION
    );
}
function M(e) {
    let { guildId: t, changeType: n, soundType: i, soundSource: r, location: a } = e;
    p.default.track(b.rMx.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, {
        location_stack: a,
        guild_id: '' === t ? 0 : Number(t),
        change_type: n,
        sound_type: i,
        sound_source: r
    });
}
function k(e) {
    let { location: t } = e;
    p.default.track(b.rMx.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED, { location_stack: t });
}
