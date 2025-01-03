n(653041), n(47120);
var i = n(243814),
    r = n(100527),
    l = n(208049),
    a = n(763296),
    s = n(697426),
    o = n(242291),
    c = n(641015),
    d = n(594174),
    u = n(996106),
    h = n(452426),
    m = n(736045),
    p = n(186901),
    g = n(231338);
t.Z = {
    [g.Et.GET_SOUNDBOARD_SOUNDS]: {
        scope: {
            [p.Gp.ANY]: [i.x.RPC, p.lH]
        },
        async handler() {
            await (0, l.w)();
            let e = a.Z.getSounds(),
                t = [];
            return e.forEach((e) => e.forEach((e) => t.push((0, s.QL)(e)))), t;
        }
    },
    [g.Et.PLAY_SOUNDBOARD_SOUND]: {
        scope: {
            [p.Gp.ALL]: [i.x.RPC, i.x.RPC_VOICE_WRITE]
        },
        validation: (e) =>
            (0, h.Z)(e).required().keys({
                guild_id: e.string(),
                sound_id: e.string()
            }),
        async handler(e) {
            let {
                args: { guild_id: t, sound_id: n }
            } = e;
            await (0, l.w)();
            let i = d.default.getCurrentUser(),
                s = a.Z.getSound(t, n),
                h = (0, m.Z)(),
                p = null != s && null != i && (0, o.Nq)(i, s, h);
            if (null == h) throw new u.Z({ errorCode: g.lT.INVALID_CHANNEL }, 'Invalid Channel.');
            if (p) {
                if ((0, c.Z)(h)) null != s && (0, o.GN)(s, h.id, [r.Z.RPC]);
                else throw new u.Z({ errorCode: g.lT.INVALID_PERMISSIONS }, 'Invalid Permissions.');
            } else throw new u.Z({ errorCode: g.lT.INVALID_SOUND }, 'Invalid Sound.');
        }
    }
};
