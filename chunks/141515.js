"use strict";
n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(976860),
    r = n(652793),
    a = n(652215),
    o = n(746080),
    c = n(985018);
function d(e) {
    let { guild: t, selected: n } = e;
    return (0, i.jsx)(r.G, {
        id: `home-tab-${t.id}`,
        renderIcon: (e) => (0, i.jsx)(s.Zf8, { size: "md", color: "currentColor", className: e }),
        text: c.intl.string(c.t.VbpLyU),
        selected: n,
        onClick: function () {
            (0, l.pX)(a.BVt.CHANNEL(t.id, o.VV.GUILD_HOME));
        },
    });
}
