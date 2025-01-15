r.d(n, {
    C0: function () {
        return O;
    },
    GN: function () {
        return D;
    },
    M2: function () {
        return w;
    },
    Nq: function () {
        return R;
    },
    SZ: function () {
        return k;
    },
    aC: function () {
        return M;
    },
    pI: function () {
        return N;
    },
    sR: function () {
        return P;
    },
    tt: function () {
        return B;
    }
});
var i = r(653041);
var a = r(399606),
    s = r(704215),
    o = r(736045),
    l = r(695346),
    u = r(675478),
    c = r(581883),
    d = r(294629),
    f = r(401062),
    _ = r(131704),
    h = r(496675),
    p = r(594174),
    m = r(626135),
    g = r(74538),
    E = r(51144),
    v = r(208049),
    I = r(763296),
    T = r(697426),
    b = r(641015),
    y = r(893663),
    S = r(710111),
    A = r(981631);
function N() {
    var e;
    let n = l.kU.getSetting();
    return null !== (e = null == n ? void 0 : n.volume) && void 0 !== e ? e : 100;
}
function C(e, n) {
    return (null == n ? void 0 : n.guild_id) == null || h.Z.can(A.Plq.USE_EXTERNAL_SOUNDS, n) || e.guildId === S.X8 || e.guildId === (null == n ? void 0 : n.guild_id);
}
function R(e, n, r) {
    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    return (g.ZP.canUseSoundboardEverywhere(e) || n.guildId === (null == r ? void 0 : r.guild_id) || n.guildId === S.X8) && C(n, r) && (!i || n.available);
}
function O(e) {
    let { mute: n, suppress: r } = (0, d.b)({ channel: e });
    return !n && !r;
}
function D(e, n, r) {
    (0, v.XE)(n, e, T.YQ.SOUNDBOARD), (0, f.kq)(n, e, __OVERLAY__, r);
}
function L(e, n) {
    (0, v.XE)(n, e, T.YQ.JOINED_VOICE_CHANNEL), (0, f.vy)(n, e, __OVERLAY__);
}
function x() {
    var e, n;
    return Object.values(null !== (n = null === (e = c.Z.settings.guilds) || void 0 === e ? void 0 : e.guilds) && void 0 !== n ? n : {}).some((e) => null != e.joinSound);
}
async function w(e) {
    let n = p.default.getCurrentUser(),
        r = (0, o.Z)(),
        i = (0, y.k9)(e);
    if (null == r || _.Lr.has(r.type) || null == i || !g.ZP.canUseCustomCallSounds(n) || !(0, b.D)()) return;
    await (0, v.w)();
    let a = i.guildId === S.hY ? S.X8 : i.guildId,
        s = I.Z.getSound(a, i.soundId);
    if (null != s) {
        if (!C(s, r) || !R(n, s, r, !0) || !O(r)) return null;
        L(s, r.id);
    }
}
function P(e) {
    let { isSoundboardButtonDisabled: n = !1 } = e,
        r = (0, a.e7)([p.default], () => p.default.getCurrentUser()),
        i = [];
    if (!n && !x()) {
        i.push(s.z.CUSTOM_CALL_SOUNDS_SPARKLES);
        let e = (0, E.Fc)(r);
        (g.ZP.canUseCustomCallSounds(r) || e) && i.push(s.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL);
    }
    return i;
}
function M(e, n) {
    (0, u.PS)(
        e,
        (r) => {
            (r.joinSound = void 0),
                U({
                    guildId: e,
                    changeType: T.MW.REMOVED,
                    soundType: T.jy.ENTRY,
                    location: n
                });
        },
        u.fy.INFREQUENT_USER_ACTION
    );
}
function k(e, n, r) {
    (0, u.PS)(
        e,
        (i) => {
            let a = n.guildId === S.X8,
                s = a ? T.H$.DEFAULT : T.H$.CUSTOM,
                o = null != i.joinSound ? T.MW.UPDATED : T.MW.ADDED;
            (i.joinSound = {
                soundId: n.soundId,
                guildId: a ? S.hY : n.guildId
            }),
                U({
                    guildId: e,
                    changeType: o,
                    soundSource: s,
                    soundType: T.jy.ENTRY,
                    location: r
                });
        },
        u.fy.INFREQUENT_USER_ACTION
    );
}
function U(e) {
    let { guildId: n, changeType: r, soundType: i, soundSource: a, location: s } = e;
    m.default.track(A.rMx.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, {
        location_stack: s,
        guild_id: '' === n ? 0 : Number(n),
        change_type: r,
        sound_type: i,
        sound_source: a
    });
}
function B(e) {
    let { location: n } = e;
    m.default.track(A.rMx.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED, { location_stack: n });
}
