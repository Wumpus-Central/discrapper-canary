"use strict";
n.d(t, {
    Ak: () => b,
    Au: () => C,
    Dv: () => w,
    Ir: () => v,
    ND: () => U,
    Ni: () => k,
    VE: () => L,
    fh: () => D,
    un: () => M,
    wH: () => O,
}),
    n(321073);
var r = n(417597),
    i = n(554146),
    s = n(58149),
    a = n(693806),
    o = n(253932),
    l = n(594061),
    u = n(617617),
    d = n(173660),
    c = n(914616),
    _ = n(95701),
    f = n(576705),
    E = n(287809),
    h = n(954571),
    p = n(927578),
    m = n(427262),
    g = n(796774),
    A = n(209932),
    I = n(807348),
    T = n(123973),
    S = n(984813);
n(980504);
var y = n(652215),
    N = n(698279);
function O() {
    let e = o.dG.getSetting();
    return e?.volume ?? 100;
}
function R(e, t) {
    return (
        t?.guild_id == null || f.A.can(y.xBc.USE_EXTERNAL_SOUNDS, t) || "0" === e.guildId || e.guildId === t?.guild_id
    );
}
function v(e, t, n) {
    let r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    return (
        (p.Ay.canUseSoundboardEverywhere(e) || t.guildId === n?.guild_id || "0" === t.guildId) &&
        R(t, n) &&
        (!r || t.available)
    );
}
function C(e) {
    let { mute: t, suppress: n } = (0, d.k)({ channel: e });
    return !t && !n;
}
function b(e, t, n, r) {
    (0, g.qP)(t, e, I.Zm.SOUNDBOARD), (0, c.Wv)(t, e, __OVERLAY__, n, r);
}
async function D(e) {
    let t = E.default.getCurrentUser(),
        n = (0, a.A)(),
        r = (0, S.z0)(e);
    if (null == n || _.Do.has(n.type) || null == r || !p.Ay.canUseCustomCallSounds(t) || !(0, T.lI)()) return;
    await (0, g.E7)();
    let i = "0" === r.guildId ? "0" : r.guildId,
        s = A.A.getSound(i, r.soundId);
    if (null != s) {
        var o;
        if (!R(s, n) || !v(t, s, n, !0) || !C(n)) return null;
        (o = n.id), (0, g.qP)(o, s, I.Zm.JOINED_VOICE_CHANNEL), (0, c.Rc)(o, s, __OVERLAY__);
    }
}
function L(e) {
    let { isSoundboardButtonDisabled: t = !1 } = e,
        n = (0, r.bG)([E.default], () => E.default.getCurrentUser()),
        s = [];
    if (!t && !Object.values(u.A.settings.guilds?.guilds ?? {}).some((e) => null != e.joinSound)) {
        let e = (0, m.G2)(n);
        (p.Ay.canUseCustomCallSounds(n) || e) && s.push(i.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL);
    }
    return s;
}
function w(e, t) {
    (0, l.TG)(
        e,
        (n) => {
            (n.joinSound = void 0), P({ guildId: e, changeType: I.Vr.REMOVED, soundType: I.ib.ENTRY, location: t });
        },
        l.Sb.INFREQUENT_USER_ACTION,
    );
}
function M(e, t, n) {
    (0, l.TG)(
        e,
        (r) => {
            let i = "0" === t.guildId,
                s = i ? I.FH.DEFAULT : I.FH.CUSTOM,
                a = null != r.joinSound ? I.Vr.UPDATED : I.Vr.ADDED;
            (r.joinSound = { soundId: t.soundId, guildId: i ? "0" : t.guildId }),
                P({ guildId: e, changeType: a, soundSource: s, soundType: I.ib.ENTRY, location: n });
        },
        l.Sb.INFREQUENT_USER_ACTION,
    );
}
function P(e) {
    let { guildId: t, changeType: n, soundType: r, soundSource: i, location: s } = e;
    h.default.track(y.HAw.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, {
        location_stack: s,
        guild_id: "" === t ? 0 : Number(t),
        change_type: n,
        sound_type: r,
        sound_source: i,
    });
}
function U(e) {
    let { location: t } = e;
    h.default.track(y.HAw.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED, { location_stack: t });
}
function k(e) {
    let { sound: t, location: n } = e;
    s.Ay.trackWithMetadata(y.HAw.EXPRESSION_FAVORITED, {
        location: n,
        expression_type: N.kx.SOUNDBOARD,
        expression_id: t.soundId,
        expression_name: t.name,
        expression_guild_id: t.guildId,
    });
}
