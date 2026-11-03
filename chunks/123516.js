n.d(t, { A: () => u });
var i = n(66834),
    l = n(463347),
    r = n(280450),
    s = n(71393);
let a = new Map();
async function o(e, t) {
    try {
        let t = await i.A.joinGuild(e, { lurker: !0, autoNavigate: !1 });
        if (!0 === t.body.show_verification_form) return !1;
        return (await (0, i.k)(e), !0);
    } catch {
        return !1;
    } finally {
        a.delete(t);
    }
}
function u(e) {
    if (null != s.A.getGuild(e)) return Promise.resolve(!0);
    let t = r.default.getSessionId();
    if (!(0, l.nn)(e) || null == t) return Promise.resolve(!1);
    let n = `${t}:${e}`,
        i = a.get(n);
    return (null == i && ((i = o(e, n)), a.set(n, i)), i);
}
