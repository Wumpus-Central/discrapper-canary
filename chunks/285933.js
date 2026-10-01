i.d(n, { A: () => s });
var r = i(174459),
    a = i(981616),
    e = i(272984),
    l = i(652215);
let u = [e.Qp.USER_ACTIVITY_SYNC, e.Qp.EMBED_SYNC];
function s(t, n, i, e) {
    r.default.track(l.HAw.SPOTIFY_BUTTON_CLICKED, {
        type: t,
        source: e,
        is_premium: (0, a.mD)(),
        party_id: u.includes(t) && i?.party != null ? i.party.id : null,
        other_user_id: n.id,
    });
}
