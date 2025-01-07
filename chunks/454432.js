n(47120), n(653041);
var i = n(192379),
    l = n(442837),
    s = n(493773),
    a = n(430824),
    o = n(496675),
    r = n(771845),
    c = n(99325),
    d = n(273387),
    u = n(981631);
t.Z = (e, t) => {
    let [n, m] = i.useState(!1),
        C = (0, l.e7)([d.Z], () => d.Z.getAdminGuildEntryIds(t)),
        x = (0, l.Wu)(
            [r.ZP, a.Z, o.Z],
            () => {
                let t = r.ZP.getFlattenedGuildIds(),
                    n = [];
                return (
                    t.forEach((t) => {
                        let i = a.Z.getGuild(t);
                        null != i && o.Z.can(u.Plq.ADMINISTRATOR, i) && i.id !== e && n.push(i);
                    }),
                    n
                );
            },
            [e]
        );
    (0, s.Z)(() => {
        (async () => {
            m(!0),
                await c._Q(
                    t,
                    x.map((e) => e.id)
                ),
                m(!1);
        })();
    });
    let f = i.useMemo(() => x.filter((e) => !(null == C ? void 0 : C.has(e.id))), [x, C]);
    return {
        availableGuilds: f,
        addedGuilds: i.useMemo(() => x.filter((e) => (null == C ? void 0 : C.has(e.id))), [x, C]),
        loading: n
    };
};
