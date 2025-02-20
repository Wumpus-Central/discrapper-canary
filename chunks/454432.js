n.d(t, { Z: () => m }), n(47120), n(653041);
var s = n(192379),
    i = n(442837),
    r = n(493773),
    l = n(430824),
    a = n(496675),
    o = n(771845),
    c = n(99325),
    d = n(273387),
    u = n(981631);
let m = (e, t) => {
    let [n, m] = s.useState(!1),
        x = (0, i.e7)([d.Z], () => d.Z.getAdminGuildEntryIds(t)),
        C = (0, i.Wu)(
            [o.ZP, l.Z, a.Z],
            () => {
                let t = o.ZP.getFlattenedGuildIds(),
                    n = [];
                return (
                    t.forEach((t) => {
                        let s = l.Z.getGuild(t);
                        null != s && a.Z.can(u.Plq.ADMINISTRATOR, s) && s.id !== e && n.push(s);
                    }),
                    n
                );
            },
            [e]
        );
    return (
        (0, r.ZP)(() => {
            (async () => {
                m(!0),
                    await c._Q(
                        t,
                        C.map((e) => e.id)
                    ),
                    m(!1);
            })();
        }),
        {
            availableGuilds: s.useMemo(() => C.filter((e) => !(null == x ? void 0 : x.has(e.id))), [C, x]),
            addedGuilds: s.useMemo(() => C.filter((e) => (null == x ? void 0 : x.has(e.id))), [C, x]),
            loading: n
        }
    );
};
