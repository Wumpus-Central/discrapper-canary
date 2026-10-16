(i.d(t, { default: () => A }), i(321073));
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
    f = i(723312),
    h = i(371169),
    m = i(525530),
    v = i(261425),
    C = i(105292);
let x = " (Remix)";
async function k(e, t) {
    let i,
        a = { ok: !1, message: C.intl.string(v.default.Cn8H0Y) };
    try {
        var n;
        i = await (0, h.gA)({
            name: ((n = e.name), `${n.slice(0, 128 - x.length)}${x}`),
            guild_id: t,
            install_scope: e.install_scope,
        });
    } catch {
        return a;
    }
    let l = await (0, m.Io)(e.id, i).catch(() => "rejected");
    return "accepted" !== l
        ? ("rejected" === l && (await (0, h.xx)(i).catch(() => void 0)), a)
        : ((0, f.ensureConnection)(i),
          (0, f.sendUserMessage)(i, C.intl.string(v.default.jviD6Y), void 0, { remix: !0 }),
          { ok: !0, projectId: i });
}
var y = i(652215),
    j = i(746080);
async function w(e, t) {
    let i = await k(e, t);
    return i.ok
        ? ((0, p.pX)(y.BVt.CHANNEL(t, j.VV.CONJURE, i.projectId)), !0)
        : ((0, g.P0)({ text: i.message, variant: "critical" }), !1);
}
function A(e) {
    let { project: t, currentGuildId: i, transitionState: g, onClose: p } = e,
        [f, h] = n.useState(i),
        [m, x] = n.useState(!1),
        k = (0, l.bG)([o.Ay, c.A], () => {
            let e = [];
            for (let t of o.Ay.getFlattenedGuildIds()) {
                let i = c.A.getGuild(t);
                null != i && (0, u.dd)(i, "ConjureRemixModal") && e.push(i);
            }
            return e;
        }),
        y = n.useMemo(
            () =>
                k.map((e) => ({
                    id: e.id,
                    label: e.name,
                    value: e.id,
                    leading: (0, a.jsx)(r.Ay, { guild: e, size: r.Ay.Sizes.MINI, active: !0 }),
                })),
            [k],
        ),
        j = n.useCallback(async () => {
            if (!m) {
                if ((x(!0), await w(t, f))) return void (await p());
                x(!1);
            }
        }, [m, t, f, p]);
    return (0, a.jsx)(s.a, {
        transitionState: g,
        onClose: p,
        title: C.intl.string(v.default["9wQTdG"]),
        size: "md",
        actions: [
            { text: C.intl.string(C.t["ETE/oC"]), variant: "secondary", onClick: p, disabled: m },
            { text: C.intl.string(v.default.XWgAfc), variant: "primary", onClick: j, loading: m },
        ],
        children: (0, a.jsx)(d.Z, {
            selectionMode: "single",
            label: C.intl.string(v.default["maL0+X"]),
            options: y,
            value: f,
            onSelectionChange: h,
            disabled: m,
            fullWidth: !0,
        }),
    });
}
