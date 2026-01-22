n.d(t, {
    A: () => u,
});
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(976860),
    a = n(652793),
    s = n(652215),
    o = n(746080),
    c = n(985018);

function u(e) {
    let { guild: t, selected: n } = e;
    return (0, r.jsx)(a.G, {
        id: "home-tab-".concat(t.id),
        renderIcon: (e) =>
            (0, r.jsx)(l.Zf8, {
                size: "md",
                color: "currentColor",
                className: e,
            }),
        text: c.intl.string(c.t.VbpLyU),
        selected: n,
        onClick: function () {
            (0, i.pX)(s.BVt.CHANNEL(t.id, o.VV.GUILD_HOME));
        },
    });
}
