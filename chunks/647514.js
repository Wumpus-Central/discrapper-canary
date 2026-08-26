n.d(t, { A: () => f });
var l = n(691540),
    a = n(857250),
    i = n(97483),
    r = n(976860),
    s = n(948230),
    o = n(18739),
    u = n(652215),
    c = n(746080),
    d = n(295813),
    m = n(375708);
let h = " (Remix)";
async function f(e, t) {
    let n = null;
    try {
        var f;
        (n = await (0, s.gA)({
            name: ((f = e.name), `${f.slice(0, 128 - h.length)}${h}`),
            guild_id: t,
            install_scope: e.install_scope,
        })),
            await (0, o.oX)(e.id, n);
    } catch (t) {
        null != n && (await (0, s.xx)(n).catch(() => void 0));
        let e = t instanceof o.Xk && 409 === t.status ? d.default.bTAItn : d.default.ekrwGo;
        (0, l.P0)((0, a.o)(m.intl.string(e), i.Ck.FAILURE));
        return;
    }
    (0, o.Hc)(n), (0, o.dv)(n, m.intl.string(d.default.so1WC7)), (0, r.pX)(u.BVt.CHANNEL(t, c.VV.VIBEGRATIONS, n));
}
