"use strict";
n.d(t, { A: () => l });
var i = n(174459),
    r = n(981616),
    s = n(272984),
    a = n(652215);
let o = [s.Qp.USER_ACTIVITY_SYNC, s.Qp.EMBED_SYNC];
function l(e, t, n, s) {
    i.default.track(a.HAw.SPOTIFY_BUTTON_CLICKED, {
        type: e,
        source: s,
        is_premium: (0, r.mD)(),
        party_id: o.includes(e) && n?.party != null ? n.party.id : null,
        other_user_id: t.id,
    });
}
