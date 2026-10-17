(i.d(t, { default: () => b }), i(321073));
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
    h = i(382541),
    v = i(371169),
    m = i(525530),
    C = i(248675),
    x = i(105292);
let k = " (Remix)";
async function y(e, t) {
    let i,
        a = { ok: !1, message: x.intl.string(C.default.Cn8H0Y) },
        n = (0, h.g)(e.id);
    n.catch(() => void 0);
    try {
        var l;
        i = await (0, v.gA)({
            name: ((l = e.name), `${l.slice(0, 128 - k.length)}${k}`),
            guild_id: t,
            install_scope: e.install_scope,
        });
    } catch {
        return a;
    }
    let s = await (0, m.Io)(n, i).catch(() => "rejected");
    return "accepted" !== s
        ? ("rejected" === s && (await (0, v.xx)(i).catch(() => void 0)), a)
        : ((0, f.ensureConnection)(i),
          (0, f.sendUserMessage)(i, x.intl.string(C.default.jviD6Y), void 0, { remix: !0 }),
          { ok: !0, projectId: i });
}
var j = i(652215),
    w = i(746080);
async function A(e, t) {
    let i = await y(e, t);
    return i.ok
        ? ((0, p.pX)(j.BVt.CHANNEL(t, w.VV.CONJURE, i.projectId)), !0)
        : ((0, g.P0)({ text: i.message, variant: "critical" }), !1);
}
function b(e) {
    let { project: t, currentGuildId: i, transitionState: g, onClose: p } = e,
        [f, h] = n.useState(i),
        [v, m] = n.useState(!1),
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
            if (!v) {
                if ((m(!0), await A(t, f))) return void (await p());
                m(!1);
            }
        }, [v, t, f, p]);
    return (0, a.jsx)(s.a, {
        transitionState: g,
        onClose: p,
        title: x.intl.string(C.default["9wQTdG"]),
        size: "md",
        actions: [
            { text: x.intl.string(x.t["ETE/oC"]), variant: "secondary", onClick: p, disabled: v },
            { text: x.intl.string(C.default.XWgAfc), variant: "primary", onClick: j, loading: v },
        ],
        children: (0, a.jsx)(d.Z, {
            selectionMode: "single",
            label: x.intl.string(C.default["maL0+X"]),
            options: y,
            value: f,
            onSelectionChange: h,
            disabled: v,
            fullWidth: !0,
        }),
    });
}
