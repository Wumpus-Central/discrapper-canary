(i.d(e, { default: () => A }), i(321073));
var a = i(477900),
    n = i(582128),
    l = i(17928),
    s = i(189213),
    d = i(890497),
    r = i(548118),
    c = i(71393),
    o = i(711014),
    u = i(246338),
    g = i(858899),
    p = i(976860),
    f = i(591277),
    v = i(371169),
    h = i(525530),
    m = i(248675),
    x = i(660183);
let C = " (Remix)";
async function k(t, e) {
    let i,
        a = { ok: !1, message: x.intl.string(m.default.Cn8H0Y) };
    try {
        var n;
        i = await (0, v.gA)({
            name: ((n = t.name), `${n.slice(0, 128 - C.length)}${C}`),
            guild_id: e,
            install_scope: t.install_scope,
        });
    } catch {
        return a;
    }
    let l = await (0, h.Io)(t.id, i).catch(() => "rejected");
    return "accepted" !== l
        ? ("rejected" === l && (await (0, v.xx)(i).catch(() => void 0)), a)
        : ((0, f.Hc)(i),
          (0, f.dv)(i, x.intl.string(m.default.jviD6Y), void 0, { remix: !0 }),
          { ok: !0, projectId: i });
}
var y = i(652215),
    b = i(746080);
async function w(t, e) {
    let i = await k(t, e);
    return i.ok
        ? ((0, p.pX)(y.BVt.CHANNEL(e, b.VV.CONJURE, i.projectId)), !0)
        : ((0, g.P0)({ text: i.message, variant: "critical" }), !1);
}
function A(t) {
    let { project: e, currentGuildId: i, transitionState: g, onClose: p } = t,
        [f, v] = n.useState(i),
        [h, C] = n.useState(!1),
        k = (0, l.bG)([o.Ay, c.A], () => {
            let t = [];
            for (let e of o.Ay.getFlattenedGuildIds()) {
                let i = c.A.getGuild(e);
                null != i && (0, u.dd)(i, "VibegrationsRemixModal") && t.push(i);
            }
            return t;
        }),
        y = n.useMemo(
            () =>
                k.map((t) => ({
                    id: t.id,
                    label: t.name,
                    value: t.id,
                    leading: (0, a.jsx)(r.Ay, { guild: t, size: r.Ay.Sizes.MINI, active: !0 }),
                })),
            [k],
        ),
        b = n.useCallback(async () => {
            if (!h) {
                if ((C(!0), await w(e, f))) return void (await p());
                C(!1);
            }
        }, [h, e, f, p]);
    return (0, a.jsx)(s.a, {
        transitionState: g,
        onClose: p,
        title: x.intl.string(m.default["9wQTdG"]),
        size: "md",
        actions: [
            { text: x.intl.string(x.t["ETE/oC"]), variant: "secondary", onClick: p, disabled: h },
            { text: x.intl.string(m.default.XWgAfc), variant: "primary", onClick: b, loading: h },
        ],
        children: (0, a.jsx)(d.Z, {
            selectionMode: "single",
            label: x.intl.string(m.default["maL0+X"]),
            options: y,
            value: f,
            onSelectionChange: v,
            disabled: h,
            fullWidth: !0,
        }),
    });
}
