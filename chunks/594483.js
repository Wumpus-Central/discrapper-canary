n.d(t, { A: () => f });
var l = n(691540),
    a = n(857250),
    i = n(97483),
    s = n(976860),
    r = n(948230),
    o = n(18739),
    c = n(652215),
    u = n(746080),
    d = n(295813),
    h = n(375708);
let m = " (Fork)";
async function f(e, t) {
    let n = null;
    try {
        var f;
        (n = await (0, r.gA)({ name: ((f = e.name), `${f.slice(0, 128 - m.length)}${m}`), guild_id: t })),
            await (0, o.Lc)(e.id, n);
    } catch (t) {
        null != n && (await (0, r.xx)(n).catch(() => void 0));
        let e = t instanceof o.uM && 409 === t.status ? d.default.Gc6FB2 : d.default.GKiadO;
        (0, l.P0)((0, a.o)(h.intl.string(e), i.Ck.FAILURE));
        return;
    }
    (0, o.Hc)(n), (0, o.dv)(n, h.intl.string(d.default.gsSrw3)), (0, s.pX)(c.BVt.CHANNEL(t, u.VV.VIBEGRATIONS, n));
}
