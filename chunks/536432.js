"use strict";
n.d(t, {
    Ak: () => D,
    Au: () => O,
    Dv: () => M,
    Ir: () => R,
    ND: () => G,
    Ni: () => F,
    VE: () => P,
    fh: () => x,
    un: () => k,
    wH: () => b,
}),
    n(321073);
var r = n(417597),
    i = n(554146),
    a = n(58149),
    s = n(693806),
    o = n(253932),
    l = n(594061),
    u = n(617617),
    c = n(173660),
    d = n(914616),
    _ = n(95701),
    f = n(576705),
    h = n(287809),
    p = n(954571),
    g = n(927578),
    E = n(427262),
    A = n(796774),
    I = n(209932),
    T = n(807348),
    y = n(123973),
    S = n(984813);
n(980504);
var v = n(652215),
    C = n(698279);
function b() {
    let e = o.dG.getSetting();
    return e?.volume ?? 100;
}
function N(e, t) {
    return (
        t?.guild_id == null || f.A.can(v.xBc.USE_EXTERNAL_SOUNDS, t) || "0" === e.guildId || e.guildId === t?.guild_id
    );
}
function R(e, t, n) {
    let r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    return (
        (g.Ay.canUseSoundboardEverywhere(e) || t.guildId === n?.guild_id || "0" === t.guildId) &&
        N(t, n) &&
        (!r || t.available)
    );
}
function O(e) {
    let { mute: t, suppress: n } = (0, c.k)({ channel: e });
    return !t && !n;
}
function D(e, t, n, r) {
    (0, A.qP)(t, e, T.Zm.SOUNDBOARD), (0, d.Wv)(t, e, __OVERLAY__, n, r);
}
function L(e, t) {
    (0, A.qP)(t, e, T.Zm.JOINED_VOICE_CHANNEL), (0, d.Rc)(t, e, __OVERLAY__);
}
function w() {
    return Object.values(u.A.settings.guilds?.guilds ?? {}).some((e) => null != e.joinSound);
}
async function x(e) {
    let t = h.default.getCurrentUser(),
        n = (0, s.A)(),
        r = (0, S.z0)(e);
    if (null == n || _.Do.has(n.type) || null == r || !g.Ay.canUseCustomCallSounds(t) || !(0, y.lI)()) return;
    await (0, A.E7)();
    let i = "0" === r.guildId ? "0" : r.guildId,
        a = I.A.getSound(i, r.soundId);
    if (null != a) {
        if (!N(a, n) || !R(t, a, n, !0) || !O(n)) return null;
        L(a, n.id);
    }
}
function P(e) {
    let { isSoundboardButtonDisabled: t = !1 } = e,
        n = (0, r.bG)([h.default], () => h.default.getCurrentUser()),
        a = [];
    if (!t && !w()) {
        let e = (0, E.G2)(n);
        (g.Ay.canUseCustomCallSounds(n) || e) && a.push(i.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL);
    }
    return a;
}
function M(e, t) {
    (0, l.TG)(
        e,
        (n) => {
            (n.joinSound = void 0), U({ guildId: e, changeType: T.Vr.REMOVED, soundType: T.ib.ENTRY, location: t });
        },
        l.Sb.INFREQUENT_USER_ACTION,
    );
}
function k(e, t, n) {
    (0, l.TG)(
        e,
        (r) => {
            let i = "0" === t.guildId,
                a = i ? T.FH.DEFAULT : T.FH.CUSTOM,
                s = null != r.joinSound ? T.Vr.UPDATED : T.Vr.ADDED;
            (r.joinSound = { soundId: t.soundId, guildId: i ? "0" : t.guildId }),
                U({ guildId: e, changeType: s, soundSource: a, soundType: T.ib.ENTRY, location: n });
        },
        l.Sb.INFREQUENT_USER_ACTION,
    );
}
function U(e) {
    let { guildId: t, changeType: n, soundType: r, soundSource: i, location: a } = e;
    p.default.track(v.HAw.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, {
        location_stack: a,
        guild_id: "" === t ? 0 : Number(t),
        change_type: n,
        sound_type: r,
        sound_source: i,
    });
}
function G(e) {
    let { location: t } = e;
    p.default.track(v.HAw.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED, { location_stack: t });
}
function F(e) {
    let { sound: t, location: n } = e;
    a.Ay.trackWithMetadata(v.HAw.EXPRESSION_FAVORITED, {
        location: n,
        expression_type: C.kx.SOUNDBOARD,
        expression_id: t.soundId,
        expression_name: t.name,
        expression_guild_id: t.guildId,
    });
}
