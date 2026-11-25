var e = n(582128),
    i = n(855986),
    a = n(803306),
    u = n(587895),
    r = n(851767),
    s = n(808728),
    c = n(71393),
    o = n(576705),
    d = n(287809),
    f = n(260498),
    g = n(426035),
    A = n(733791);
n.d(
    l,
    {},
    {
        UC: function (t) {
            let l;
            ((l = (0, i.bG)(
                [f.Ay, d.default, c.A, s.A, u.A, r.A, o.A],
                () =>
                    (function (t) {
                        let l = t?.guild_id == null ? null : c.A.getGuild(t.guild_id);
                        if (
                            null == t ||
                            null == l ||
                            (0, f.PV)(t) ||
                            (t.supported_surfaces?.length ?? 0) === 0 ||
                            "in_server" === (0, g.kF)(t)
                        )
                            return null;
                        let n = (0, g.Du)(t);
                        return null != r.A.getMutualGuilds(n) ? null : (0, g.wv)(l, n) ? n : null;
                    })(null == t ? null : f.Ay.getProject(t)),
                [t],
            )),
                e.useEffect(() => {
                    null != l &&
                        (async function (t) {
                            try {
                                await (0, a.eO)(t, { withMutualGuilds: !0 });
                            } catch {}
                        })(l);
                }, [l]));
            let n = (0, A.Bs)(t);
            return (0, i.bG)(
                [f.Ay],
                () => {
                    let l = null == t ? null : f.Ay.getProject(t);
                    return null == l ? null : null != n && n.canRemoveBot && !(0, f.PV)(l) ? n : null;
                },
                [t, n],
            );
        },
    },
);
