n.d(t, { Z: () => s });
var r = n(149765),
    i = n(700785),
    l = n(981631);
function s(e, t) {
    let n = { [t.id]: t };
    return e.filter((e) => {
        let t = i.I0({
                forceRoles: n,
                context: e
            }),
            s = l.Plq.VIEW_CHANNEL;
        return e.isGuildVocal() && (s = r.IH(s, l.Plq.CONNECT)), r.e$(t, s) && !i.Uu(s, e);
    });
}
