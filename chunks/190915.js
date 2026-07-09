l.d(t, { A: () => i });
var n = l(788733),
    a = l(652215),
    s = l(375708);
function i(e, t) {
    switch (e.type) {
        case a.fg2.XBOX:
            return s.intl.string(s.t.Nfvo72);
        case a.fg2.PLAYSTATION:
            return s.intl.string(s.t.fFl4jo);
        case a.fg2.META_QUEST_OR_HORIZON:
            return (0, n.A)(t) ? s.intl.string(s.t.BrHQaq) : s.intl.string(s.t.p6vL0e);
        default:
            return e.name;
    }
}
