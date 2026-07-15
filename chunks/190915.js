"use strict";
n.d(t, { A: () => s });
var i = n(788733),
    r = n(652215),
    a = n(375708);
function s(e, t) {
    switch (e.type) {
        case r.fg2.XBOX:
            return a.intl.string(a.t.Nfvo72);
        case r.fg2.PLAYSTATION:
            return a.intl.string(a.t.fFl4jo);
        case r.fg2.META_QUEST_OR_HORIZON:
            return (0, i.A)(t) ? a.intl.string(a.t.BrHQaq) : a.intl.string(a.t.p6vL0e);
        default:
            return e.name;
    }
}
