i.d(e, { A: () => o });
var l = i(954571),
    a = i(981616),
    n = i(272984),
    r = i(652215);
let s = [n.Qp.USER_ACTIVITY_SYNC, n.Qp.EMBED_SYNC];
function o(t, e, i, n) {
    l.default.track(r.HAw.SPOTIFY_BUTTON_CLICKED, {
        type: t,
        source: n,
        is_premium: (0, a.mD)(),
        party_id: s.includes(t) && i?.party != null ? i.party.id : null,
        other_user_id: e.id,
    });
}
