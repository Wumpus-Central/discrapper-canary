n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var l = n(397927),
    s = n(976860),
    a = n(652793),
    r = n(652215),
    o = n(746080),
    c = n(985018);
function d(e) {
    let { guild: t, selected: n } = e;
    return (0, i.jsx)(a.G, {
        id: `home-tab-${t.id}`,
        renderIcon: (e) => (0, i.jsx)(l.Zf8, { size: "md", color: "currentColor", className: e }),
        text: c.intl.string(c.t.VbpLyU),
        selected: n,
        onClick: function () {
            (0, s.pX)(r.BVt.CHANNEL(t.id, o.VV.GUILD_HOME));
        },
    });
}
