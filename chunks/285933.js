n.d(e, { A: () => u });
var i = n(174459),
    r = n(981616),
    l = n(272984),
    o = n(652215);
let a = [l.Qp.USER_ACTIVITY_SYNC, l.Qp.EMBED_SYNC];
function u(t, e, n, l) {
    i.default.track(o.HAw.SPOTIFY_BUTTON_CLICKED, {
        type: t,
        source: l,
        is_premium: (0, r.mD)(),
        party_id: a.includes(t) && n?.party != null ? n.party.id : null,
        other_user_id: e.id,
    });
}
