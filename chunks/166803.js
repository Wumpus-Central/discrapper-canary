n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(149765),
    r = n(700785),
    l = n(981631);
function a(e, t) {
    let n = { [t.id]: t };
    return e.filter((e) => {
        let t = r.I0({
                forceRoles: n,
                context: e
            }),
            a = l.Plq.VIEW_CHANNEL;
        return e.isGuildVocal() && (a = i.IH(a, l.Plq.CONNECT)), i.e$(t, a) && !r.Uu(a, e);
    });
}
