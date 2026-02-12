n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var r = n(975807),
    l = n(64983),
    a = n(652215),
    s = n(49999),
    o = n(985018);
function d(e) {
    let { guild: t, markAsDismissed: n } = e,
        d = t.features.has(a.GuildFeatures.VERIFIED) ? o.intl.string(o.t.uUARXe) : o.intl.string(o.t["0Dx29f"]);
    return (0, i.jsx)(l.A, {
        guild: t,
        onDismissed: () => n(s.i.USER_DISMISS),
        title: o.intl.format(o.t.Q11WTQ, { gameName: "your game" }),
        message: d,
        cta: o.intl.string(o.t["2u6ZlY"]),
        type: a.n5X.GAME_CLAIM,
        image: "",
        onClick: () => {
            (0, r.A)(a.X7G.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY), n(s.i.TAKE_ACTION);
        },
    });
}
