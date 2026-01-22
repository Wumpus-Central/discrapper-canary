n.d(t, {
    A: () => l,
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(994500),
    o = n(231156);

function l(e) {
    let { user: t, guildId: n, iconColor: l } = e,
        c = (0, i.bG)([s.A], () => s.A.isBlocked(t.id));
    return (0, r.jsxs)("div", {
        className: o.kL,
        children: [
            (0, r.jsx)(a.euF, {
                className: o.my,
                size: a._3J.SIZE_56,
                src: t.getAvatarURL(n, 64),
                "aria-label": t.username,
            }),
            (0, r.jsx)("div", {
                className: o.mI,
                children: c
                    ? (0, r.jsx)(a.KTN, {
                          color: l,
                      })
                    : (0, r.jsx)(a.G3N, {
                          color: l,
                      }),
            }),
        ],
    });
}
