r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(626135),
    a = r(647162),
    o = r(616922),
    s = r(981631);
let l = [o.kG.USER_ACTIVITY_SYNC, o.kG.EMBED_SYNC];
function u(e, n, r, o) {
    i.default.track(s.rMx.SPOTIFY_BUTTON_CLICKED, {
        type: e,
        source: o,
        is_premium: (0, a.Wo)(),
        party_id: l.includes(e) && (null == r ? void 0 : r.party) != null ? r.party.id : null,
        other_user_id: n.id
    });
}
