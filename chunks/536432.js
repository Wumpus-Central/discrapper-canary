n.d(t, {
    Ak: () => v,
    Au: () => L,
    Dv: () => P,
    Ir: () => R,
    ND: () => w,
    Ni: () => G,
    VE: () => U,
    fh: () => D,
    un: () => b,
    wH: () => N,
}),
    n(321073);
var i = n(702841),
    l = n(554146),
    a = n(58149),
    r = n(693806),
    s = n(253932),
    o = n(594061),
    d = n(617617),
    u = n(173660),
    c = n(258582),
    h = n(95701),
    E = n(576705),
    A = n(287809),
    _ = n(954571),
    p = n(927578),
    g = n(427262),
    f = n(796774),
    I = n(209932),
    S = n(807348),
    T = n(123973),
    m = n(984813);
n(980504);
var C = n(652215),
    O = n(698279);
function N() {
    let e = s.dG.getSetting();
    return e?.volume ?? 100;
}
function y(e, t) {
    return (
        t?.guild_id == null || E.A.can(C.xBc.USE_EXTERNAL_SOUNDS, t) || "0" === e.guildId || e.guildId === t?.guild_id
    );
}
function R(e, t, n) {
    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    return (
        (p.Ay.canUseSoundboardEverywhere(e) || t.guildId === n?.guild_id || "0" === t.guildId) &&
        y(t, n) &&
        (!i || t.available)
    );
}
function L(e) {
    let { mute: t, suppress: n } = (0, u.k)({ channel: e });
    return !t && !n;
}
function v(e, t, n, i) {
    (0, f.qP)(t, e, S.Zm.SOUNDBOARD), (0, c.Wv)(t, e, __OVERLAY__, n, i);
}
async function D(e) {
    let t = A.default.getCurrentUser(),
        n = (0, r.A)(),
        i = (0, m.z0)(e);
    if (null == n || h.Do.has(n.type) || null == i || !p.Ay.canUseCustomCallSounds(t) || !(0, T.lI)()) return;
    await (0, f.E7)();
    let l = "0" === i.guildId ? "0" : i.guildId,
        a = I.A.getSound(l, i.soundId);
    if (null != a) {
        var s;
        if (!y(a, n) || !R(t, a, n, !0) || !L(n)) return null;
        (s = n.id), (0, f.qP)(s, a, S.Zm.JOINED_VOICE_CHANNEL), (0, c.Rc)(s, a, __OVERLAY__);
    }
}
function U(e) {
    let { isSoundboardButtonDisabled: t = !1 } = e,
        n = (0, i.bG)([A.default], () => A.default.getCurrentUser()),
        a = [];
    if (!t && !Object.values(d.A.settings.guilds?.guilds ?? {}).some((e) => null != e.joinSound)) {
        let e = (0, g.G2)(n);
        (p.Ay.canUseCustomCallSounds(n) || e) && a.push(l.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL);
    }
    return a;
}
function P(e, t) {
    (0, o.TG)(
        e,
        (n) => {
            (n.joinSound = void 0), M({ guildId: e, changeType: S.Vr.REMOVED, soundType: S.ib.ENTRY, location: t });
        },
        o.Sb.INFREQUENT_USER_ACTION,
    );
}
function b(e, t, n) {
    (0, o.TG)(
        e,
        (i) => {
            let l = "0" === t.guildId,
                a = l ? S.FH.DEFAULT : S.FH.CUSTOM,
                r = null != i.joinSound ? S.Vr.UPDATED : S.Vr.ADDED;
            (i.joinSound = { soundId: t.soundId, guildId: l ? "0" : t.guildId }),
                M({ guildId: e, changeType: r, soundSource: a, soundType: S.ib.ENTRY, location: n });
        },
        o.Sb.INFREQUENT_USER_ACTION,
    );
}
function M(e) {
    let { guildId: t, changeType: n, soundType: i, soundSource: l, location: a } = e;
    _.default.track(C.HAw.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, {
        location_stack: a,
        guild_id: "" === t ? 0 : Number(t),
        change_type: n,
        sound_type: i,
        sound_source: l,
    });
}
function w(e) {
    let { location: t } = e;
    _.default.track(C.HAw.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED, { location_stack: t });
}
function G(e) {
    let { sound: t, location: n } = e;
    a.Ay.trackWithMetadata(C.HAw.EXPRESSION_FAVORITED, {
        location: n,
        expression_type: O.kx.SOUNDBOARD,
        expression_id: t.soundId,
        expression_name: t.name,
        expression_guild_id: t.guildId,
    });
}
