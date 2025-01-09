n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(149765),
    r = n(700785),
    l = n(981631);
function s(e, t) {
    let n = { [t.id]: t };
    return e.filter((e) => {
        let t = r.I0({
                forceRoles: n,
                context: e
            }),
            s = l.Plq.VIEW_CHANNEL;
        return e.isGuildVocal() && (s = i.IH(s, l.Plq.CONNECT)), i.e$(t, s) && !r.Uu(s, e);
    });
}
