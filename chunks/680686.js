n.d(t, { Z: () => l });
var r = n(626135),
    i = n(647162),
    o = n(616922),
    a = n(981631);
let s = [o.kG.USER_ACTIVITY_SYNC, o.kG.EMBED_SYNC];
function l(e, t, n, o) {
    r.default.track(a.rMx.SPOTIFY_BUTTON_CLICKED, {
        type: e,
        source: o,
        is_premium: (0, i.Wo)(),
        party_id: s.includes(e) && (null == n ? void 0 : n.party) != null ? n.party.id : null,
        other_user_id: t.id
    });
}
