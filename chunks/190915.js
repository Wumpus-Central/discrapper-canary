e.d(n, { A: () => u });
var l = e(788733),
    r = e(652215),
    s = e(375708);
function u(t, n) {
    switch (t.type) {
        case r.fg2.XBOX:
            return s.intl.string(s.t.Nfvo72);
        case r.fg2.PLAYSTATION:
            return s.intl.string(s.t.fFl4jo);
        case r.fg2.META_QUEST_OR_HORIZON:
            return (0, l.A)(n) ? s.intl.string(s.t.BrHQaq) : s.intl.string(s.t.p6vL0e);
        default:
            return t.name;
    }
}
