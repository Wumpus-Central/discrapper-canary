n.d(e, { A: () => r });
var l = n(788733),
    i = n(652215),
    a = n(375708);
function r(t, e) {
    switch (t.type) {
        case i.fg2.XBOX:
            return a.intl.string(a.t.Nfvo72);
        case i.fg2.PLAYSTATION:
            return a.intl.string(a.t.fFl4jo);
        case i.fg2.META_QUEST_OR_HORIZON:
            return (0, l.A)(e) ? a.intl.string(a.t.BrHQaq) : a.intl.string(a.t.p6vL0e);
        default:
            return t.name;
    }
}
