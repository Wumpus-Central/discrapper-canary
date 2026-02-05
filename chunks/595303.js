"use strict";
n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var s = n(417597),
    l = n(732955),
    r = n(397927),
    a = n(260509),
    o = n(71393),
    d = n(287809),
    c = n(11351),
    u = n(985018);
function m(e) {
    let { guildId: t, application: m } = e,
        g = (0, s.bG)([o.A], () => o.A.getGuild(t)),
        x = (0, s.bG)([d.default], () => d.default.getCurrentUser()),
        h = (0, c.gN)();
    if (null == g || !(0, a.bM)(g, x)) return null;
    let _ = m.team;
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(r.Text, {
                variant: "text-sm/normal",
                color: h ? "text-muted" : "text-default",
                children: null != _ ? u.intl.format(u.t.erxwWA, { teamName: _.name }) : u.intl.string(u.t.FGzLkK),
            }),
            (0, i.jsx)(r.hKd, { size: 16 }),
            (0, i.jsx)(l.$nd, {
                text: null != _ ? u.intl.string(u.t["/Fjq5P"]) : u.intl.string(u.t["6ih+b4"]),
                variant: null != _ ? "secondary" : "primary",
                onClick: () => {
                    (0, r.mMO)(async () => {
                        let { default: e } = await n.e("71678").then(n.bind(n, 180493));
                        return (t) => (0, i.jsx)(e, { ...t, application: m });
                    });
                },
                disabled: h,
            }),
        ],
    });
}
