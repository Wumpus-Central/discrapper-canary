n.d(t, { A: () => l });
var r = n(954571),
    i = n(981616),
    a = n(272984),
    s = n(652215);
let o = [a.Qp.USER_ACTIVITY_SYNC, a.Qp.EMBED_SYNC];
function l(e, t, n, a) {
    r.default.track(s.HAw.SPOTIFY_BUTTON_CLICKED, {
        type: e,
        source: a,
        is_premium: (0, i.mD)(),
        party_id: o.includes(e) && (null == n ? void 0 : n.party) != null ? n.party.id : null,
        other_user_id: t.id,
    });
}
