(i.d(e, { default: () => I }), i(321073));
var a = i(477900),
    l = i(582128),
    n = i(17928),
    s = i(189213),
    d = i(890497),
    r = i(548118),
    o = i(71393),
    u = i(711014),
    c = i(246338),
    g = i(739187),
    f = i(857250),
    p = i(97483),
    m = i(976860),
    v = i(164892),
    h = i(712808),
    k = i(371169),
    C = i(248675),
    w = i(375708);
let x = " (Remix)";
async function y(t, e) {
    let i = null;
    try {
        var a;
        ((i = await (0, k.gA)({
            name: ((a = t.name), `${a.slice(0, 128 - x.length)}${x}`),
            guild_id: e,
            install_scope: t.install_scope,
            flags: (0, v.wo)((0, v.KQ)(t)),
        })),
            await (0, h.oX)(t.id, i));
    } catch (e) {
        null != i && (await (0, k.xx)(i).catch(() => void 0));
        let t = e instanceof h.Qe && 409 === e.status ? C.default.kQerlZ : C.default.Cn8H0Y;
        return { ok: !1, message: w.intl.string(t) };
    }
    return (
        (0, h.Hc)(i), (0, h.dv)(i, w.intl.string(C.default.jviD6Y), void 0, { remix: !0 }), { ok: !0, projectId: i }
    );
}
var A = i(652215),
    b = i(746080);
async function j(t, e) {
    let i = await y(t, e);
    return i.ok
        ? ((0, m.pX)(A.BVt.CHANNEL(e, b.VV.CONJURE, i.projectId)), !0)
        : ((0, g.P)((0, f.o)(i.message, p.Ck.FAILURE)), !1);
}
function I(t) {
    let { project: e, currentGuildId: i, transitionState: g, onClose: f } = t,
        [p, m] = l.useState(i),
        [v, h] = l.useState(!1),
        k = (0, n.bG)([u.Ay, o.A], () => {
            let t = [];
            for (let e of u.Ay.getFlattenedGuildIds()) {
                let i = o.A.getGuild(e);
                null != i && (0, c.dd)(i, "VibegrationsRemixModal") && t.push(i);
            }
            return t;
        }),
        x = l.useMemo(
            () =>
                k.map((t) => ({
                    id: t.id,
                    label: t.name,
                    value: t.id,
                    leading: (0, a.jsx)(r.Ay, { guild: t, size: r.Ay.Sizes.MINI, active: !0 }),
                })),
            [k],
        ),
        y = l.useCallback(async () => {
            if (!v) {
                if ((h(!0), await j(e, p))) return void (await f());
                h(!1);
            }
        }, [v, e, p, f]);
    return (0, a.jsx)(s.a, {
        transitionState: g,
        onClose: f,
        title: w.intl.string(C.default["9wQTdG"]),
        size: "md",
        actions: [
            { text: w.intl.string(w.t["ETE/oC"]), variant: "secondary", onClick: f, disabled: v },
            { text: w.intl.string(C.default.XWgAfc), variant: "primary", onClick: y, loading: v },
        ],
        children: (0, a.jsx)(d.Z, {
            selectionMode: "single",
            label: w.intl.string(C.default["maL0+X"]),
            options: x,
            value: p,
            onSelectionChange: m,
            disabled: v,
            fullWidth: !0,
        }),
    });
}
