n.d(t, {
    Ak: () => v,
    Au: () => L,
    Dv: () => U,
    Ir: () => R,
    ND: () => w,
    Ni: () => G,
    VE: () => b,
    fh: () => D,
    un: () => P,
    wH: () => N,
}),
    n(321073);
var i = n(702841),
    r = n(554146),
    l = n(58149),
    a = n(693806),
    s = n(253932),
    o = n(594061),
    d = n(617617),
    u = n(173660),
    c = n(258582),
    h = n(95701),
    E = n(576705),
    _ = n(287809),
    p = n(954571),
    A = n(927578),
    f = n(427262),
    g = n(796774),
    I = n(209932),
    T = n(807348),
    S = n(123973),
    m = n(984813);
n(980504);
var O = n(652215),
    C = n(698279);
function N() {
    let e = s.dG.getSetting();
    return e?.volume ?? 100;
}
function y(e, t) {
    return (
        t?.guild_id == null || E.A.can(O.xBc.USE_EXTERNAL_SOUNDS, t) || "0" === e.guildId || e.guildId === t?.guild_id
    );
}
function R(e, t, n) {
    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    return (
        (A.Ay.canUseSoundboardEverywhere(e) || t.guildId === n?.guild_id || "0" === t.guildId) &&
        y(t, n) &&
        (!i || t.available)
    );
}
function L(e) {
    let { mute: t, suppress: n } = (0, u.k)({ channel: e });
    return !t && !n;
}
function v(e, t, n, i) {
    (0, g.qP)(t, e, T.Zm.SOUNDBOARD), (0, c.Wv)(t, e, __OVERLAY__, n, i);
}
async function D(e) {
    let t = _.default.getCurrentUser(),
        n = (0, a.A)(),
        i = (0, m.z0)(e);
    if (null == n || h.Do.has(n.type) || null == i || !A.Ay.canUseCustomCallSounds(t) || !(0, S.lI)()) return;
    await (0, g.E7)();
    let r = "0" === i.guildId ? "0" : i.guildId,
        l = I.A.getSound(r, i.soundId);
    if (null != l) {
        var s;
        if (!y(l, n) || !R(t, l, n, !0) || !L(n)) return null;
        (s = n.id), (0, g.qP)(s, l, T.Zm.JOINED_VOICE_CHANNEL), (0, c.Rc)(s, l, __OVERLAY__);
    }
}
function b(e) {
    let { isSoundboardButtonDisabled: t = !1 } = e,
        n = (0, i.bG)([_.default], () => _.default.getCurrentUser()),
        l = [];
    if (!t && !Object.values(d.A.settings.guilds?.guilds ?? {}).some((e) => null != e.joinSound)) {
        let e = (0, f.G2)(n);
        (A.Ay.canUseCustomCallSounds(n) || e) && l.push(r.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL);
    }
    return l;
}
function U(e, t) {
    (0, o.TG)(
        e,
        (n) => {
            (n.joinSound = void 0), M({ guildId: e, changeType: T.Vr.REMOVED, soundType: T.ib.ENTRY, location: t });
        },
        o.Sb.INFREQUENT_USER_ACTION,
    );
}
function P(e, t, n) {
    (0, o.TG)(
        e,
        (i) => {
            let r = "0" === t.guildId,
                l = r ? T.FH.DEFAULT : T.FH.CUSTOM,
                a = null != i.joinSound ? T.Vr.UPDATED : T.Vr.ADDED;
            (i.joinSound = { soundId: t.soundId, guildId: r ? "0" : t.guildId }),
                M({ guildId: e, changeType: a, soundSource: l, soundType: T.ib.ENTRY, location: n });
        },
        o.Sb.INFREQUENT_USER_ACTION,
    );
}
function M(e) {
    let { guildId: t, changeType: n, soundType: i, soundSource: r, location: l } = e;
    p.default.track(O.HAw.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, {
        location_stack: l,
        guild_id: "" === t ? 0 : Number(t),
        change_type: n,
        sound_type: i,
        sound_source: r,
    });
}
function w(e) {
    let { location: t } = e;
    p.default.track(O.HAw.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED, { location_stack: t });
}
function G(e) {
    let { sound: t, location: n } = e;
    l.Ay.trackWithMetadata(O.HAw.EXPRESSION_FAVORITED, {
        location: n,
        expression_type: C.kx.SOUNDBOARD,
        expression_id: t.soundId,
        expression_name: t.name,
        expression_guild_id: t.guildId,
    });
}
