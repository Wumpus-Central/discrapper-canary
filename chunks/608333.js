var i = n(343032),
    l = n(7807),
    r = n(713608),
    a = n(847696),
    s = n(532470),
    o = n(422751),
    u = n(137192),
    c = n(504336),
    d = n(696016),
    m = n(636107),
    f = n(792996);
let p = { ...(0, a.pv)(), ...(0, s.PC)(), ...(0, o.mk)(), ...(0, u.IR)() },
    h = { ...(0, a.HM)(), ...(0, s.dP)(), ...(0, o.K7)(), ...(0, u._n)() },
    g = { ...(0, a.aQ)(), ...(0, s.kv)(), ...(0, o.P3)(), ...(0, u.$l)() };
function A(e, t, n) {
    switch (t) {
        case d.Gy.LAUGHTER:
            return i.SuperReactionIcon;
        case d.Gy.SHOUTING:
            return c.A;
        case d.Gy.SOUNDBOARD:
            return l.SoundboardIcon;
        case d.Gy.GAME_EVENT: {
            let t = null != e && null != n ? p[e]?.[n] : void 0;
            return void 0 === t ? r.ModerationIcon : t;
        }
        default:
            return null;
    }
}
n.d(
    t,
    {},
    {
        $b: function (e, t, n) {
            switch (t) {
                case d.Gy.LAUGHTER:
                case d.Gy.SHOUTING:
                    return 2;
                case d.Gy.SOUNDBOARD:
                    return 1;
                case d.Gy.GAME_EVENT:
                    if (null == A(e, t, n)) return 0;
                    return 1e3 + ((null != e && null != n ? h[e]?.[n] : void 0) ?? 0);
                default:
                    return 0;
            }
        },
        PZ: function (e, t, n) {
            switch (t) {
                case d.Gy.LAUGHTER:
                    return f.intl.string(m.default.bTC23D);
                case d.Gy.SHOUTING:
                    return f.intl.string(m.default["3gqpuo"]);
                case d.Gy.GAME_EVENT: {
                    let t = null != e && null != n ? g[e]?.[n] : void 0;
                    return null != t ? f.intl.string(t) : null;
                }
                default:
                    return null;
            }
        },
        u6: A,
    },
);
