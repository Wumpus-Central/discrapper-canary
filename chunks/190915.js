e.d(n, { A: () => r });
var l = e(788733),
    i = e(652215),
    a = e(105292);
function r(t, n) {
    switch (t.type) {
        case i.fg2.XBOX:
            return a.intl.string(a.t.Nfvo72);
        case i.fg2.PLAYSTATION:
            return a.intl.string(a.t.fFl4jo);
        case i.fg2.META_QUEST_OR_HORIZON:
            return (0, l.A)(n) ? a.intl.string(a.t.BrHQaq) : a.intl.string(a.t.p6vL0e);
        default:
            return t.name;
    }
}
