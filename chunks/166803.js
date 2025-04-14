n.d(t, { Z: () => l });
var r = n(149765),
    i = n(700785),
    s = n(981631);
function l(e, t) {
    let n = { [t.id]: t };
    return e.filter((e) => {
        let t = i.I0({
                forceRoles: n,
                context: e
            }),
            l = s.Plq.VIEW_CHANNEL;
        return e.isGuildVocal() && (l = r.IH(l, s.Plq.CONNECT)), r.e$(t, l) && !i.Uu(l, e);
    });
}
