n.d(t, { Z: () => o });
var i = n(149765),
    l = n(700785),
    r = n(981631);
function o(e, t) {
    let n = { [t.id]: t };
    return e.filter((e) => {
        let t = l.I0({
                forceRoles: n,
                context: e,
            }),
            o = r.Plq.VIEW_CHANNEL;
        return e.isGuildVocal() && (o = i.IH(o, r.Plq.CONNECT)), i.e$(t, o) && !l.Uu(o, e);
    });
}
