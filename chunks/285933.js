var i = r(129230),
    a = r(981616),
    e = r(272984),
    l = r(652215);
let u = [e.Qp.USER_ACTIVITY_SYNC, e.Qp.EMBED_SYNC];
r.d(
    n,
    {},
    {
        A: function (t, n, r, e) {
            i.default.track(l.HAw.SPOTIFY_BUTTON_CLICKED, {
                type: t,
                source: e,
                is_premium: (0, a.mD)(),
                party_id: u.includes(t) && r?.party != null ? r.party.id : null,
                other_user_id: n.id,
            });
        },
    },
);
