(i.d(e, { default: () => x }), i(321073));
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
    h = i(948230),
    v = i(277977),
    m = i(50617),
    A = i(375708);
let C = " (Remix)";
async function b(t, e) {
    let i = null;
    try {
        var a;
        ((i = await (0, h.gA)({
            name: ((a = t.name), `${a.slice(0, 128 - C.length)}${C}`),
            guild_id: e,
            install_scope: t.install_scope,
        })),
            await (0, v.oX)(t.id, i));
    } catch (e) {
        null != i && (await (0, h.xx)(i).catch(() => void 0));
        let t = e instanceof v.Xk && 409 === e.status ? m.default.bTAItn : m.default.ekrwGo;
        return { ok: !1, message: A.intl.string(t) };
    }
    return ((0, v.Hc)(i), (0, v.dv)(i, A.intl.string(m.default.so1WC7)), { ok: !0, projectId: i });
}
var w = i(652215),
    y = i(746080);
async function I(t, e) {
    let i = await b(t, e);
    return i.ok
        ? ((0, k.pX)(w.BVt.CHANNEL(e, y.VV.VIBEGRATIONS, i.projectId)), !0)
        : ((0, g.P0)((0, f.o)(i.message, p.Ck.FAILURE)), !1);
}
function x(t) {
    let { project: e, currentGuildId: i, transitionState: g, onClose: f } = t,
        [p, k] = l.useState(i),
        [h, v] = l.useState(!1),
        C = (0, n.bG)([u.Ay, r.A], () => {
            let t = [];
            for (let e of u.Ay.getFlattenedGuildIds()) {
                let i = r.A.getGuild(e);
                null != i && (0, c.kT)(i, "VibegrationsRemixModal") && t.push(i);
            }
            return t;
        }),
        b = l.useMemo(
            () =>
                C.map((t) => ({
                    id: t.id,
                    label: t.name,
                    value: t.id,
                    leading: (0, a.jsx)(o.Ay, { guild: t, size: o.Ay.Sizes.MINI, active: !0 }),
                })),
            [C],
        ),
        w = l.useCallback(async () => {
            if (!h) {
                if ((v(!0), await I(e, p))) return void (await f());
                v(!1);
            }
        }, [h, e, p, f]);
    return (0, a.jsx)(s.a, {
        transitionState: g,
        onClose: f,
        title: A.intl.string(m.default["V+azw/"]),
        size: "md",
        actions: [
            { text: A.intl.string(A.t["ETE/oC"]), variant: "secondary", onClick: f, disabled: h },
            { text: A.intl.string(m.default.vPI794), variant: "primary", onClick: w, loading: h },
        ],
        children: (0, a.jsx)(d.Z, {
            selectionMode: "single",
            label: A.intl.string(m.default.HQLYXD),
            options: b,
            value: p,
            onSelectionChange: k,
            disabled: h,
            fullWidth: !0,
        }),
    });
}
