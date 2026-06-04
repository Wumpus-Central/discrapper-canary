n.d(t, { A: () => o });
var s = n(627968);
n(64700);
var e = n(17928),
    r = n(477782),
    a = n(366605),
    c = n(816662),
    d = n(543465),
    l = n(375708);
function o(i) {
    let t = (0, e.bG)([d.Ay], () => d.Ay.isMessagesFavorite(i.id));
    if (!i.isPrivate()) return null;
    let n = t ? l.intl.string(l.t.vDYmad) : l.intl.string(l.t["uKw3A+"]);
    return (0, s.jsx)(r.Dr, {
        id: "pin-dm",
        label: n,
        iconLeft: a.t,
        leadingAccessory: { type: "icon", icon: a.t },
        action: () => (0, c.xl)(i.id, !t),
    });
}
