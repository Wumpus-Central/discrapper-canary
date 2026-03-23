n.d(t, { A: () => A }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(263063),
    o = n(71393),
    d = n(711014),
    c = n(152056),
    u = n(612025),
    m = n(985018),
    _ = n(245425);
let g = { label: () => m.intl.string(m.t["32u1Dx"]), value: u.YG };
function A() {
    let { selectedGuildId: e, setSelectedGuildId: t } = (0, u.xk)(),
        n = (0, l.bG)([d.Ay], () => d.Ay.getFlattenedGuildIds()),
        m = (0, l.bG)([o.A], () => o.A.getGuilds()),
        A = n[0];
    s.useEffect(
        () =>
            c.A.subscribe(
                (e) => {
                    let { query: t } = e;
                    return t.trim();
                },
                (e, n) => {
                    let i = u.xk.getState().selectedGuildId;
                    "" === n && "" !== e && i === u.YG && null != A ? t(A) : "" === e && i !== u.YG && t(u.YG);
                },
                { equalityFn: (e, t) => e === t },
            ),
        [A, t],
    );
    let x = s.useMemo(() => {
        let e = [];
        return (
            e.push({
                ...g,
                id: g.value,
                label: g.label(),
                leading: (0, i.jsx)("div", {
                    className: _.KP,
                    children: (0, i.jsx)(a.pVd, { size: "sm", color: "white", "aria-hidden": !0, className: _.cl }),
                }),
            }),
            n.forEach((t) => {
                let n = m[t];
                null != n &&
                    e.push({
                        id: n.id,
                        label: n.name,
                        value: n.id,
                        leading: (0, i.jsx)(r.Ay, { className: _.cl, guild: n, size: r.Ay.Sizes.SMALLER, active: !0 }),
                    });
            }),
            e
        );
    }, [n, m]);
    return (0, i.jsx)(a.ZiE, {
        selectionMode: "single",
        onSelectionChange: (e) => {
            t(e);
        },
        value: e,
        options: x,
    });
}
