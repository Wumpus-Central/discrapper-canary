e.d(n, { A: () => a });
var l = e(788733),
    i = e(652215),
    r = e(375708);
function a(t, n) {
    switch (t.type) {
        case i.fg2.XBOX:
            return r.intl.string(r.t.Nfvo72);
        case i.fg2.PLAYSTATION:
            return r.intl.string(r.t.fFl4jo);
        case i.fg2.META_QUEST_OR_HORIZON:
            return (0, l.A)(n) ? r.intl.string(r.t.BrHQaq) : r.intl.string(r.t.p6vL0e);
        default:
            return t.name;
    }
}
