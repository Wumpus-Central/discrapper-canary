"use strict";
n.d(t, {
    Ak: () => O,
    Au: () => R,
    Dv: () => P,
    Ir: () => N,
    ND: () => U,
    Ni: () => G,
    VE: () => x,
    fh: () => w,
    un: () => M,
    wH: () => C,
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
    p = n(287809),
    h = n(954571),
    m = n(927578),
    g = n(427262),
    E = n(796774),
    A = n(209932),
    I = n(807348),
    T = n(123973),
    y = n(984813);
n(980504);
var S = n(652215),
    v = n(698279);
function C() {
    let e = o.dG.getSetting();
    return e?.volume ?? 100;
}
function b(e, t) {
    return (
        t?.guild_id == null || f.A.can(S.xBc.USE_EXTERNAL_SOUNDS, t) || "0" === e.guildId || e.guildId === t?.guild_id
    );
}
function N(e, t, n) {
    let r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    return (
        (m.Ay.canUseSoundboardEverywhere(e) || t.guildId === n?.guild_id || "0" === t.guildId) &&
        b(t, n) &&
        (!r || t.available)
    );
}
function R(e) {
    let { mute: t, suppress: n } = (0, c.k)({ channel: e });
    return !t && !n;
}
function O(e, t, n, r) {
    (0, E.qP)(t, e, I.Zm.SOUNDBOARD), (0, d.Wv)(t, e, __OVERLAY__, n, r);
}
function D(e, t) {
    (0, E.qP)(t, e, I.Zm.JOINED_VOICE_CHANNEL), (0, d.Rc)(t, e, __OVERLAY__);
}
function L() {
    return Object.values(u.A.settings.guilds?.guilds ?? {}).some((e) => null != e.joinSound);
}
async function w(e) {
    let t = p.default.getCurrentUser(),
        n = (0, s.A)(),
        r = (0, y.z0)(e);
    if (null == n || _.Do.has(n.type) || null == r || !m.Ay.canUseCustomCallSounds(t) || !(0, T.l)()) return;
    await (0, E.E7)();
    let i = "0" === r.guildId ? "0" : r.guildId,
        a = A.A.getSound(i, r.soundId);
    if (null != a) {
        if (!b(a, n) || !N(t, a, n, !0) || !R(n)) return null;
        D(a, n.id);
    }
}
function x(e) {
    let { isSoundboardButtonDisabled: t = !1 } = e,
        n = (0, r.bG)([p.default], () => p.default.getCurrentUser()),
        a = [];
    if (!t && !L()) {
        let e = (0, g.G2)(n);
        (m.Ay.canUseCustomCallSounds(n) || e) && a.push(i.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL);
    }
    return a;
}
function P(e, t) {
    (0, l.TG)(
        e,
        (n) => {
            (n.joinSound = void 0), k({ guildId: e, changeType: I.Vr.REMOVED, soundType: I.ib.ENTRY, location: t });
        },
        l.Sb.INFREQUENT_USER_ACTION,
    );
}
function M(e, t, n) {
    (0, l.TG)(
        e,
        (r) => {
            let i = "0" === t.guildId,
                a = i ? I.FH.DEFAULT : I.FH.CUSTOM,
                s = null != r.joinSound ? I.Vr.UPDATED : I.Vr.ADDED;
            (r.joinSound = { soundId: t.soundId, guildId: i ? "0" : t.guildId }),
                k({ guildId: e, changeType: s, soundSource: a, soundType: I.ib.ENTRY, location: n });
        },
        l.Sb.INFREQUENT_USER_ACTION,
    );
}
function k(e) {
    let { guildId: t, changeType: n, soundType: r, soundSource: i, location: a } = e;
    h.default.track(S.HAw.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, {
        location_stack: a,
        guild_id: "" === t ? 0 : Number(t),
        change_type: n,
        sound_type: r,
        sound_source: i,
    });
}
function U(e) {
    let { location: t } = e;
    h.default.track(S.HAw.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED, { location_stack: t });
}
function G(e) {
    let { sound: t, location: n } = e;
    a.Ay.trackWithMetadata(S.HAw.EXPRESSION_FAVORITED, {
        location: n,
        expression_type: v.kx.SOUNDBOARD,
        expression_id: t.soundId,
        expression_name: t.name,
        expression_guild_id: t.guildId,
    });
}
