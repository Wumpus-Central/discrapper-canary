n.d(t, { Z: () => o });
var i = n(149765),
    r = n(700785),
    l = n(981631);
function o(e, t) {
    let n = { [t.id]: t };
    return e.filter((e) => {
        let t = r.I0({
                forceRoles: n,
                context: e,
            }),
            o = l.Plq.VIEW_CHANNEL;
        return e.isGuildVocal() && (o = i.IH(o, l.Plq.CONNECT)), i.e$(t, o) && !r.Uu(o, e);
    });
}
