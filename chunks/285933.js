i.d(n, { A: () => u });
var e = i(174459),
    l = i(981616),
    r = i(272984),
    a = i(652215);
let o = [r.Qp.USER_ACTIVITY_SYNC, r.Qp.EMBED_SYNC];
function u(t, n, i, r) {
    e.default.track(a.HAw.SPOTIFY_BUTTON_CLICKED, {
        type: t,
        source: r,
        is_premium: (0, l.mD)(),
        party_id: o.includes(t) && i?.party != null ? i.party.id : null,
        other_user_id: n.id,
    });
}
