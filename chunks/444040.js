(i.d(e, { default: () => S }), i(321073));
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
    k = i(976860),
    v = i(673724),
    h = i(948230),
    m = i(277977),
    A = i(759967),
    C = i(375708);
let b = " (Remix)";
async function w(t, e) {
    let i = null;
    try {
        var a;
        ((i = await (0, h.gA)({
            name: ((a = t.name), `${a.slice(0, 128 - b.length)}${b}`),
            guild_id: e,
            install_scope: t.install_scope,
            flags: (0, v.RS)((0, v.KQ)(t)),
        })),
            await (0, m.oX)(t.id, i));
    } catch (e) {
        null != i && (await (0, h.xx)(i).catch(() => void 0));
        let t = e instanceof m.Xk && 409 === e.status ? A.default.bTAItn : A.default.ekrwGo;
        return { ok: !1, message: C.intl.string(t) };
    }
    return (
        (0, m.Hc)(i), (0, m.dv)(i, C.intl.string(A.default.so1WC7), void 0, { remix: !0 }), { ok: !0, projectId: i }
    );
}
var x = i(652215),
    y = i(746080);
async function I(t, e) {
    let i = await w(t, e);
    return i.ok
        ? ((0, k.pX)(x.BVt.CHANNEL(e, y.VV.VIBEGRATIONS, i.projectId)), !0)
        : ((0, g.P0)((0, f.o)(i.message, p.Ck.FAILURE)), !1);
}
function S(t) {
    let { project: e, currentGuildId: i, transitionState: g, onClose: f } = t,
        [p, k] = l.useState(i),
        [v, h] = l.useState(!1),
        m = (0, n.bG)([u.Ay, r.A], () => {
            let t = [];
            for (let e of u.Ay.getFlattenedGuildIds()) {
                let i = r.A.getGuild(e);
                null != i && (0, c.kT)(i, "VibegrationsRemixModal") && t.push(i);
            }
            return t;
        }),
        b = l.useMemo(
            () =>
                m.map((t) => ({
                    id: t.id,
                    label: t.name,
                    value: t.id,
                    leading: (0, a.jsx)(o.Ay, { guild: t, size: o.Ay.Sizes.MINI, active: !0 }),
                })),
            [m],
        ),
        w = l.useCallback(async () => {
            if (!v) {
                if ((h(!0), await I(e, p))) return void (await f());
                h(!1);
            }
        }, [v, e, p, f]);
    return (0, a.jsx)(s.a, {
        transitionState: g,
        onClose: f,
        title: C.intl.string(A.default["V+azw/"]),
        size: "md",
        actions: [
            { text: C.intl.string(C.t["ETE/oC"]), variant: "secondary", onClick: f, disabled: v },
            { text: C.intl.string(A.default.vPI794), variant: "primary", onClick: w, loading: v },
        ],
        children: (0, a.jsx)(d.Z, {
            selectionMode: "single",
            label: C.intl.string(A.default.HQLYXD),
            options: b,
            value: p,
            onSelectionChange: k,
            disabled: v,
            fullWidth: !0,
        }),
    });
}
