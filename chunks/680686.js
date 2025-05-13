n.d(t, { Z: () => l });
var r = n(626135),
    i = n(647162),
    a = n(616922),
    o = n(981631);
let s = [a.kG.USER_ACTIVITY_SYNC, a.kG.EMBED_SYNC];
function l(e, t, n, a) {
    r.default.track(o.rMx.SPOTIFY_BUTTON_CLICKED, {
        type: e,
        source: a,
        is_premium: (0, i.Wo)(),
        party_id: s.includes(e) && (null == n ? void 0 : n.party) != null ? n.party.id : null,
        other_user_id: t.id
    });
}
