n.d(t, {
    A: () => a,
});
var i = n(136722),
    l = n(488926),
    r = n(652215);

function a(e, t) {
    let n = {
        [t.id]: t,
    };
    return e.filter((e) => {
        let t = l.aH({
                forceRoles: n,
                context: e,
            }),
            a = r.xBc.VIEW_CHANNEL;
        return e.isGuildVocal() && (a = i.WQ(a, r.xBc.CONNECT)), i.zy(t, a) && !l.MJ(a, e);
    });
}
