n.d(e, { A: () => a });
var i = n(174459),
    r = n(981616),
    l = n(272984),
    o = n(652215);
let u = [l.Qp.USER_ACTIVITY_SYNC, l.Qp.EMBED_SYNC];
function a(t, e, n, l) {
    i.default.track(o.HAw.SPOTIFY_BUTTON_CLICKED, {
        type: t,
        source: l,
        is_premium: (0, r.mD)(),
        party_id: u.includes(t) && n?.party != null ? n.party.id : null,
        other_user_id: e.id,
    });
}
