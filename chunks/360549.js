n.d(t, { A: () => h }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(111159),
    r = n(783878),
    o = n(263063),
    d = n(71393),
    u = n(711014),
    c = n(152056),
    g = n(612025),
    m = n(985018),
    _ = n(321880);
let A = { label: () => m.intl.string(m.t["32u1Dx"]), value: g.YG };
function h() {
    let { selectedGuildId: e, setSelectedGuildId: t } = (0, g.xk)(),
        n = (0, l.bG)([u.Ay], () => u.Ay.getFlattenedGuildIds()),
        m = (0, l.bG)([d.A], () => d.A.getGuilds()),
        h = n[0];
    s.useEffect(
        () =>
            c.A.subscribe(
                (e) => {
                    let { query: t } = e;
                    return t.trim();
                },
                (e, n) => {
                    let i = g.xk.getState().selectedGuildId;
                    "" === n && "" !== e && i === g.YG && null != h ? t(h) : "" === e && i !== g.YG && t(g.YG);
                },
                { equalityFn: (e, t) => e === t },
            ),
        [h, t],
    );
    let p = s.useMemo(() => {
        let e = [];
        return (
            e.push({
                ...A,
                id: A.value,
                label: A.label(),
                leading: (0, i.jsx)("div", {
                    className: _.KP,
                    children: (0, i.jsx)(a.p, { size: "sm", color: "white", "aria-hidden": !0, className: _.cl }),
                }),
            }),
            n.forEach((t) => {
                let n = m[t];
                null != n &&
                    e.push({
                        id: n.id,
                        label: n.name,
                        value: n.id,
                        leading: (0, i.jsx)(o.Ay, { className: _.cl, guild: n, size: o.Ay.Sizes.SMALLER, active: !0 }),
                    });
            }),
            e
        );
    }, [n, m]);
    return (0, i.jsx)(r.Z, {
        selectionMode: "single",
        onSelectionChange: (e) => {
            t(e);
        },
        value: e,
        options: p,
    });
}
