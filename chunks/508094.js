n.d(t, { A: () => p }), n(321073);
var i = n(179771),
    r = n(793574),
    a = n(796774),
    l = n(209932),
    s = n(807348),
    o = n(536432),
    d = n(123973),
    c = n(287809),
    u = n(636401),
    A = n(629471),
    h = n(693806),
    _ = n(613057),
    m = n(818348);
let p = {
    [m.e$.GET_SOUNDBOARD_SOUNDS]: {
        scope: { [_.sm.ANY]: [i.F.RPC, _.hj] },
        async handler() {
            await (0, a.E7)();
            let e = l.A.getSounds(),
                t = [];
            return e.forEach((e) => e.forEach((e) => t.push((0, s.A2)(e)))), t;
        },
    },
    [m.e$.PLAY_SOUNDBOARD_SOUND]: {
        scope: { [_.sm.ALL]: [i.F.RPC, i.F.RPC_VOICE_WRITE] },
        validation: (e) => (0, A.A)(e).required().keys({ guild_id: e.string(), sound_id: e.string() }),
        async handler(e) {
            let {
                args: { guild_id: t, sound_id: n },
            } = e;
            await (0, a.E7)();
            let i = c.default.getCurrentUser(),
                s = l.A.getSound(t, n),
                A = (0, h.A)(),
                _ = null != s && null != i && (0, o.Ir)(i, s, A);
            if (null == A) throw new u.A({ errorCode: m.Lw.INVALID_CHANNEL }, "Invalid Channel.");
            if (_)
                if ((0, d.Ay)(A)) null != s && (0, o.Ak)(s, A.id, [r.A.RPC]);
                else throw new u.A({ errorCode: m.Lw.INVALID_PERMISSIONS }, "Invalid Permissions.");
            else throw new u.A({ errorCode: m.Lw.INVALID_SOUND }, "Invalid Sound.");
        },
    },
};
