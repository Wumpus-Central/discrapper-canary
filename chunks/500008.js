(i.d(e, { default: () => b }), i(321073));
var a = i(477900),
    l = i(582128),
    n = i(17928),
    s = i(189213),
    d = i(890497),
    r = i(548118),
    o = i(71393),
    u = i(711014),
    c = i(246338),
    g = i(376357),
    f = i(976860),
    p = i(712808),
    m = i(371169),
    v = i(248675),
    h = i(660183);
let k = " (Remix)";
async function C(t, e) {
    let i = null;
    try {
        var a;
        ((i = await (0, m.gA)({
            name: ((a = t.name), `${a.slice(0, 128 - k.length)}${k}`),
            guild_id: e,
            install_scope: t.install_scope,
        })),
            await (0, p.oX)(t.id, i));
    } catch (e) {
        null != i && (await (0, m.xx)(i).catch(() => void 0));
        let t = e instanceof p.Qe && 409 === e.status ? v.default.kQerlZ : v.default.Cn8H0Y;
        return { ok: !1, message: h.intl.string(t) };
    }
    return (
        (0, p.Hc)(i), (0, p.dv)(i, h.intl.string(v.default.jviD6Y), void 0, { remix: !0 }), { ok: !0, projectId: i }
    );
}
var x = i(652215),
    y = i(746080);
async function A(t, e) {
    let i = await C(t, e);
    return i.ok
        ? ((0, f.pX)(x.BVt.CHANNEL(e, y.VV.CONJURE, i.projectId)), !0)
        : ((0, g.P0)((0, g.ox)(i.message, g.Ck.FAILURE)), !1);
}
function b(t) {
    let { project: e, currentGuildId: i, transitionState: g, onClose: f } = t,
        [p, m] = l.useState(i),
        [k, C] = l.useState(!1),
        x = (0, n.bG)([u.Ay, o.A], () => {
            let t = [];
            for (let e of u.Ay.getFlattenedGuildIds()) {
                let i = o.A.getGuild(e);
                null != i && (0, c.dd)(i, "VibegrationsRemixModal") && t.push(i);
            }
            return t;
        }),
        y = l.useMemo(
            () =>
                x.map((t) => ({
                    id: t.id,
                    label: t.name,
                    value: t.id,
                    leading: (0, a.jsx)(r.Ay, { guild: t, size: r.Ay.Sizes.MINI, active: !0 }),
                })),
            [x],
        ),
        b = l.useCallback(async () => {
            if (!k) {
                if ((C(!0), await A(e, p))) return void (await f());
                C(!1);
            }
        }, [k, e, p, f]);
    return (0, a.jsx)(s.a, {
        transitionState: g,
        onClose: f,
        title: h.intl.string(v.default["9wQTdG"]),
        size: "md",
        actions: [
            { text: h.intl.string(h.t["ETE/oC"]), variant: "secondary", onClick: f, disabled: k },
            { text: h.intl.string(v.default.XWgAfc), variant: "primary", onClick: b, loading: k },
        ],
        children: (0, a.jsx)(d.Z, {
            selectionMode: "single",
            label: h.intl.string(v.default["maL0+X"]),
            options: y,
            value: p,
            onSelectionChange: m,
            disabled: k,
            fullWidth: !0,
        }),
    });
}
