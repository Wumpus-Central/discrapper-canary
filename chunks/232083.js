n.d(t, { Z: () => a });
var r = n(255367);
n(73800);
var o = n(623132),
    i = n(15322);
function a(e) {
    let { userId: t, games: n, loading: a = !1, disableInteraction: l = !1 } = e;
    return (0, r.jsx)('ul', {
        className: i.cardList,
        children: n.map((e, n) =>
            (0, r.jsx)(
                'li',
                {
                    children: (0, r.jsx)(o.Z, {
                        game: e,
                        userId: t,
                        disableInteraction: l,
                        loading: a
                    })
                },
                ''.concat(e.applicationId, '-').concat(n)
            )
        )
    });
}
