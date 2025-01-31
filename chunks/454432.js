i.d(t, { Z: () => m }), i(47120), i(653041);
var n = i(192379),
    s = i(442837),
    l = i(493773),
    a = i(430824),
    r = i(496675),
    o = i(771845),
    c = i(99325),
    d = i(273387),
    u = i(981631);
let m = (e, t) => {
    let [i, m] = n.useState(!1),
        x = (0, s.e7)([d.Z], () => d.Z.getAdminGuildEntryIds(t)),
        C = (0, s.Wu)(
            [o.ZP, a.Z, r.Z],
            () => {
                let t = o.ZP.getFlattenedGuildIds(),
                    i = [];
                return (
                    t.forEach((t) => {
                        let n = a.Z.getGuild(t);
                        null != n && r.Z.can(u.Plq.ADMINISTRATOR, n) && n.id !== e && i.push(n);
                    }),
                    i
                );
            },
            [e]
        );
    return (
        (0, l.Z)(() => {
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
            availableGuilds: n.useMemo(() => C.filter((e) => !(null == x ? void 0 : x.has(e.id))), [C, x]),
            addedGuilds: n.useMemo(() => C.filter((e) => (null == x ? void 0 : x.has(e.id))), [C, x]),
            loading: i
        }
    );
};
