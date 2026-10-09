(i.d(e, { default: () => w }), i(321073));
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
    p = i(712808),
    v = i(371169),
    m = i(248675),
    h = i(660183);
let k = " (Remix)";
async function x(t, e) {
    let i = null;
    try {
        var a;
        ((i = await (0, v.gA)({
            name: ((a = t.name), `${a.slice(0, 128 - k.length)}${k}`),
            guild_id: e,
            install_scope: t.install_scope,
        })),
            await (0, p.oX)(t.id, i));
    } catch (e) {
        null != i && (await (0, v.xx)(i).catch(() => void 0));
        let t = e instanceof p.Qe && 409 === e.status ? m.default.kQerlZ : m.default.Cn8H0Y;
        return { ok: !1, message: h.intl.string(t) };
    }
    return (
        (0, p.Hc)(i), (0, p.dv)(i, h.intl.string(m.default.jviD6Y), void 0, { remix: !0 }), { ok: !0, projectId: i }
    );
}
var C = i(652215),
    y = i(746080);
async function b(t, e) {
    let i = await x(t, e);
    return i.ok
        ? ((0, f.pX)(C.BVt.CHANNEL(e, y.VV.CONJURE, i.projectId)), !0)
        : ((0, g.P0)({ text: i.message, variant: "critical" }), !1);
}
function w(t) {
    let { project: e, currentGuildId: i, transitionState: g, onClose: f } = t,
        [p, v] = l.useState(i),
        [k, x] = l.useState(!1),
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
        w = l.useCallback(async () => {
            if (!k) {
                if ((x(!0), await b(e, p))) return void (await f());
                x(!1);
            }
        }, [k, e, p, f]);
    return (0, a.jsx)(s.a, {
        transitionState: g,
        onClose: f,
        title: h.intl.string(m.default["9wQTdG"]),
        size: "md",
        actions: [
            { text: h.intl.string(h.t["ETE/oC"]), variant: "secondary", onClick: f, disabled: k },
            { text: h.intl.string(m.default.XWgAfc), variant: "primary", onClick: w, loading: k },
        ],
        children: (0, a.jsx)(d.Z, {
            selectionMode: "single",
            label: h.intl.string(m.default["maL0+X"]),
            options: y,
            value: p,
            onSelectionChange: v,
            disabled: k,
            fullWidth: !0,
        }),
    });
}
