n.d(t, { A: () => s });
var i = n(136722),
    l = n(488926),
    r = n(652215);
function s(e, t) {
    let n = { [t.id]: t };
    return e.filter((e) => {
        let t = l.aH({ forceRoles: n, context: e }),
            s = r.xBc.VIEW_CHANNEL;
        return e.isGuildVocal() && (s = i.WQ(s, r.xBc.CONNECT)), i.zy(t, s) && !l.MJ(s, e);
    });
}
