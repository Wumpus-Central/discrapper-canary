e.d(n, { A: () => c });
var i = e(954571),
    l = e(981616),
    r = e(272984),
    a = e(652215);
let u = [r.Qp.USER_ACTIVITY_SYNC, r.Qp.EMBED_SYNC];
function c(t, n, e, r) {
    i.default.track(a.HAw.SPOTIFY_BUTTON_CLICKED, {
        type: t,
        source: r,
        is_premium: (0, l.mD)(),
        party_id: u.includes(t) && e?.party != null ? e.party.id : null,
        other_user_id: n.id,
    });
}
