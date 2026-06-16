"use strict";
n.d(t, { A: () => a });
var i = n(788733),
    r = n(652215),
    s = n(375708);
function a(e, t) {
    switch (e.type) {
        case r.fg2.XBOX:
            return s.intl.string(s.t.Nfvo72);
        case r.fg2.PLAYSTATION:
            return s.intl.string(s.t.fFl4jo);
        case r.fg2.META_QUEST_OR_HORIZON:
            return (0, i.A)(t) ? s.intl.string(s.t.BrHQaq) : s.intl.string(s.t.p6vL0e);
        default:
            return e.name;
    }
}
