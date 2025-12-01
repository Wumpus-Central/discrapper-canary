n.d(t, {
    C0: () => P,
    GN: () => R,
    M2: () => x,
    Nq: () => N,
    SZ: () => M,
    aC: () => j,
    lF: () => G,
    pI: () => A,
    sR: () => L,
    tt: () => U,
}),
    n(539854);
var r = n(399606),
    i = n(704215),
    a = n(367907),
    o = n(736045),
    s = n(695346),
    l = n(675478),
    c = n(581883),
    u = n(294629),
    d = n(401062),
    f = n(131704),
    p = n(496675),
    _ = n(594174),
    m = n(626135),
    h = n(74538),
    g = n(51144),
    E = n(208049),
    b = n(763296),
    y = n(697426),
    O = n(641015),
    v = n(893663),
    S = n(710111),
    I = n(981631),
    T = n(957825);
function A() {
    var e;
    let t = s.kU.getSetting();
    return null != (e = null == t ? void 0 : t.volume) ? e : 100;
}
function C(e, t) {
    return (
        (null == t ? void 0 : t.guild_id) == null ||
        p.Z.can(I.Plq.USE_EXTERNAL_SOUNDS, t) ||
        e.guildId === S.X8 ||
        e.guildId === (null == t ? void 0 : t.guild_id)
    );
}
function N(e, t, n) {
    let r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    return (
        (h.ZP.canUseSoundboardEverywhere(e) || t.guildId === (null == n ? void 0 : n.guild_id) || t.guildId === S.X8) &&
        C(t, n) &&
        (!r || t.available)
    );
}
function P(e) {
    let { mute: t, suppress: n } = (0, u.b)({ channel: e });
    return !t && !n;
}
function R(e, t, n, r) {
    (0, E.XE)(t, e, y.YQ.SOUNDBOARD), (0, d.kq)(t, e, __OVERLAY__, n, r);
}
function w(e, t) {
    (0, E.XE)(t, e, y.YQ.JOINED_VOICE_CHANNEL), (0, d.vy)(t, e, __OVERLAY__);
}
function D() {
    var e, t;
    return Object.values(null != (t = null == (e = c.Z.settings.guilds) ? void 0 : e.guilds) ? t : {}).some(
        (e) => null != e.joinSound,
    );
}
async function x(e) {
    let t = _.default.getCurrentUser(),
        n = (0, o.Z)(),
        r = (0, v.k9)(e);
    if (null == n || f.Lr.has(n.type) || null == r || !h.ZP.canUseCustomCallSounds(t) || !(0, O.D)()) return;
    await (0, E.w)();
    let i = r.guildId === S.hY ? S.X8 : r.guildId,
        a = b.Z.getSound(i, r.soundId);
    if (null != a) {
        if (!C(a, n) || !N(t, a, n, !0) || !P(n)) return null;
        w(a, n.id);
    }
}
function L(e) {
    let { isSoundboardButtonDisabled: t = !1 } = e,
        n = (0, r.e7)([_.default], () => _.default.getCurrentUser()),
        a = [];
    if (!t && !D()) {
        let e = (0, g.Fc)(n);
        (h.ZP.canUseCustomCallSounds(n) || e) && a.push(i.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL);
    }
    return a;
}
function j(e, t) {
    (0, l.PS)(
        e,
        (n) => {
            (n.joinSound = void 0),
                k({
                    guildId: e,
                    changeType: y.MW.REMOVED,
                    soundType: y.jy.ENTRY,
                    location: t,
                });
        },
        l.fy.INFREQUENT_USER_ACTION,
    );
}
function M(e, t, n) {
    (0, l.PS)(
        e,
        (r) => {
            let i = t.guildId === S.X8,
                a = i ? y.H$.DEFAULT : y.H$.CUSTOM,
                o = null != r.joinSound ? y.MW.UPDATED : y.MW.ADDED;
            (r.joinSound = {
                soundId: t.soundId,
                guildId: i ? S.hY : t.guildId,
            }),
                k({
                    guildId: e,
                    changeType: o,
                    soundSource: a,
                    soundType: y.jy.ENTRY,
                    location: n,
                });
        },
        l.fy.INFREQUENT_USER_ACTION,
    );
}
function k(e) {
    let { guildId: t, changeType: n, soundType: r, soundSource: i, location: a } = e;
    m.default.track(I.rMx.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, {
        location_stack: a,
        guild_id: "" === t ? 0 : Number(t),
        change_type: n,
        sound_type: r,
        sound_source: i,
    });
}
function U(e) {
    let { location: t } = e;
    m.default.track(I.rMx.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED, { location_stack: t });
}
function G(e) {
    let { sound: t, location: n } = e;
    a.ZP.trackWithMetadata(I.rMx.EXPRESSION_FAVORITED, {
        location: n,
        expression_type: T.X1.SOUNDBOARD,
        expression_id: t.soundId,
        expression_name: t.name,
        expression_guild_id: t.guildId,
    });
}
