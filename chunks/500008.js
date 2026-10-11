(i.d(e, { default: () => A }), i(321073));
var a = i(477900),
    l = i(582128),
    n = i(17928),
    s = i(189213),
    d = i(890497),
    r = i(548118),
    o = i(71393),
    u = i(711014),
    c = i(246338),
    g = i(858899),
    f = i(976860),
    p = i(591277),
    v = i(371169),
    m = i(525530),
    h = i(248675),
    k = i(660183);
let x = " (Remix)";
async function C(t, e) {
    let i = null;
    try {
        var a;
        ((i = await (0, v.gA)({
            name: ((a = t.name), `${a.slice(0, 128 - x.length)}${x}`),
            guild_id: e,
            install_scope: t.install_scope,
        })),
            await (0, m.oX)(t.id, i));
    } catch (e) {
        null != i && (await (0, v.xx)(i).catch(() => void 0));
        let t = e instanceof m.Qe && 409 === e.status ? h.default.kQerlZ : h.default.Cn8H0Y;
        return { ok: !1, message: k.intl.string(t) };
    }
    return (
        (0, p.Hc)(i), (0, p.dv)(i, k.intl.string(h.default.jviD6Y), void 0, { remix: !0 }), { ok: !0, projectId: i }
    );
}
var y = i(652215),
    b = i(746080);
async function w(t, e) {
    let i = await C(t, e);
    return i.ok
        ? ((0, f.pX)(y.BVt.CHANNEL(e, b.VV.CONJURE, i.projectId)), !0)
        : ((0, g.P0)({ text: i.message, variant: "critical" }), !1);
}
function A(t) {
    let { project: e, currentGuildId: i, transitionState: g, onClose: f } = t,
        [p, v] = l.useState(i),
        [m, x] = l.useState(!1),
        C = (0, n.bG)([u.Ay, o.A], () => {
            let t = [];
            for (let e of u.Ay.getFlattenedGuildIds()) {
                let i = o.A.getGuild(e);
                null != i && (0, c.dd)(i, "VibegrationsRemixModal") && t.push(i);
            }
            return t;
        }),
        y = l.useMemo(
            () =>
                C.map((t) => ({
                    id: t.id,
                    label: t.name,
                    value: t.id,
                    leading: (0, a.jsx)(r.Ay, { guild: t, size: r.Ay.Sizes.MINI, active: !0 }),
                })),
            [C],
        ),
        b = l.useCallback(async () => {
            if (!m) {
                if ((x(!0), await w(e, p))) return void (await f());
                x(!1);
            }
        }, [m, e, p, f]);
    return (0, a.jsx)(s.a, {
        transitionState: g,
        onClose: f,
        title: k.intl.string(h.default["9wQTdG"]),
        size: "md",
        actions: [
            { text: k.intl.string(k.t["ETE/oC"]), variant: "secondary", onClick: f, disabled: m },
            { text: k.intl.string(h.default.XWgAfc), variant: "primary", onClick: b, loading: m },
        ],
        children: (0, a.jsx)(d.Z, {
            selectionMode: "single",
            label: k.intl.string(h.default["maL0+X"]),
            options: y,
            value: p,
            onSelectionChange: v,
            disabled: m,
            fullWidth: !0,
        }),
    });
}
