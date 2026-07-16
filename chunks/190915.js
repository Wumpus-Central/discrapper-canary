e.d(l, { A: () => s });
var n = e(788733),
    r = e(652215),
    a = e(375708);
function s(t, l) {
    switch (t.type) {
        case r.fg2.XBOX:
            return a.intl.string(a.t.Nfvo72);
        case r.fg2.PLAYSTATION:
            return a.intl.string(a.t.fFl4jo);
        case r.fg2.META_QUEST_OR_HORIZON:
            return (0, n.A)(l) ? a.intl.string(a.t.BrHQaq) : a.intl.string(a.t.p6vL0e);
        default:
            return t.name;
    }
}
