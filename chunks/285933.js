var r = i(129230),
    e = i(981616),
    l = i(272984),
    a = i(652215);
let u = [l.Qp.USER_ACTIVITY_SYNC, l.Qp.EMBED_SYNC];
i.d(
    n,
    {},
    {
        A: function (t, n, i, l) {
            r.default.track(a.HAw.SPOTIFY_BUTTON_CLICKED, {
                type: t,
                source: l,
                is_premium: (0, e.mD)(),
                party_id: u.includes(t) && i?.party != null ? i.party.id : null,
                other_user_id: n.id,
            });
        },
    },
);
