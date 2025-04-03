n.d(t, { Z: () => a });
var r = n(149765),
    i = n(700785),
    s = n(981631);
function a(e, t) {
    let n = { [t.id]: t };
    return e.filter((e) => {
        let t = i.I0({
                forceRoles: n,
                context: e
            }),
            a = s.Plq.VIEW_CHANNEL;
        return e.isGuildVocal() && (a = r.IH(a, s.Plq.CONNECT)), r.e$(t, a) && !i.Uu(a, e);
    });
}
