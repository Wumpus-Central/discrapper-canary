n.d(t, { Z: () => m }), n(388685), n(539854);
var i = n(192379),
    s = n(442837),
    l = n(493773),
    r = n(430824),
    a = n(496675),
    o = n(771845),
    c = n(99325),
    d = n(273387),
    u = n(981631);
let m = (e, t) => {
    let [n, m] = i.useState(!1),
        x = (0, s.e7)([d.Z], () => d.Z.getAdminGuildEntryIds(t)),
        C = (0, s.Wu)(
            [o.ZP, r.Z, a.Z],
            () => {
                let t = o.ZP.getFlattenedGuildIds(),
                    n = [];
                return (
                    t.forEach((t) => {
                        let i = r.Z.getGuild(t);
                        null != i && a.Z.can(u.Plq.ADMINISTRATOR, i) && i.id !== e && n.push(i);
                    }),
                    n
                );
            },
            [e]
        );
    return (
        (0, l.ZP)(() => {
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
            availableGuilds: i.useMemo(() => C.filter((e) => !(null == x ? void 0 : x.has(e.id))), [C, x]),
            addedGuilds: i.useMemo(() => C.filter((e) => (null == x ? void 0 : x.has(e.id))), [C, x]),
            loading: n
        }
    );
};
