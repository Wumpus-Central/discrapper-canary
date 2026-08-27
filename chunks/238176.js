i.d(e, { default: () => y }), i(321073);
var a = i(477900),
    l = i(582128),
    n = i(17928),
    s = i(189213),
    d = i(890497),
    o = i(548118),
    r = i(71393),
    u = i(711014),
    c = i(683180),
    g = i(691540),
    f = i(857250),
    p = i(97483),
    h = i(976860),
    k = i(948230),
    v = i(18739),
    A = i(652215),
    C = i(746080),
    b = i(295813),
    m = i(375708);
let w = " (Remix)";
async function x(t, e) {
    let i = null;
    try {
        var a;
        (i = await (0, k.gA)({
            name: ((a = t.name), `${a.slice(0, 128 - w.length)}${w}`),
            guild_id: e,
            install_scope: t.install_scope,
        })),
            await (0, v.oX)(t.id, i);
    } catch (e) {
        null != i && (await (0, k.xx)(i).catch(() => void 0));
        let t = e instanceof v.Xk && 409 === e.status ? b.default.bTAItn : b.default.ekrwGo;
        return (0, g.P0)((0, f.o)(m.intl.string(t), p.Ck.FAILURE)), !1;
    }
    return (
        (0, v.Hc)(i),
        (0, v.dv)(i, m.intl.string(b.default.so1WC7)),
        (0, h.pX)(A.BVt.CHANNEL(e, C.VV.VIBEGRATIONS, i)),
        !0
    );
}
function y(t) {
    let { project: e, currentGuildId: i, transitionState: g, onClose: f } = t,
        [p, h] = l.useState(i),
        [k, v] = l.useState(!1),
        A = (0, n.bG)([u.Ay, r.A], () => {
            let t = [];
            for (let e of u.Ay.getFlattenedGuildIds()) {
                let i = r.A.getGuild(e);
                null != i && (0, c.kT)(i, "VibegrationsRemixModal") && t.push(i);
            }
            return t;
        }),
        C = l.useMemo(
            () =>
                A.map((t) => ({
                    id: t.id,
                    label: t.name,
                    value: t.id,
                    leading: (0, a.jsx)(o.Ay, { guild: t, size: o.Ay.Sizes.MINI, active: !0 }),
                })),
            [A],
        ),
        w = l.useCallback(async () => {
            if (!k) {
                if ((v(!0), await x(e, p))) return void (await f());
                v(!1);
            }
        }, [k, e, p, f]);
    return (0, a.jsx)(s.Modal, {
        transitionState: g,
        onClose: f,
        title: m.intl.string(b.default["V+azw/"]),
        size: "md",
        actions: [
            { text: m.intl.string(m.t["ETE/oC"]), variant: "secondary", onClick: f, disabled: k },
            { text: m.intl.string(b.default.vPI794), variant: "primary", onClick: w, loading: k },
        ],
        children: (0, a.jsx)(d.Z, {
            selectionMode: "single",
            label: m.intl.string(b.default.HQLYXD),
            options: C,
            value: p,
            onSelectionChange: h,
            disabled: k,
            fullWidth: !0,
        }),
    });
}
