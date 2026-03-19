"use strict";
n.d(t, { A: () => m }), n(323874), n(14289), n(35956);
var r = n(627968);
n(64700);
var i = n(179771),
    s = n(571356),
    a = n(397927),
    o = n(224750),
    l = n(20015),
    u = n(661191),
    c = n(510783),
    d = n(647053),
    _ = n(652215),
    f = n(985018),
    p = n(43557);
let h = (e) => {
    switch (e) {
        case o.yW.IP_LOCATION:
            return a.L_e;
        case o.yW.DISPLAYS_ADVERTISEMENTS:
            return a.JD7;
        default:
            return null;
    }
};
function m(e) {
    let t,
        { application: n, scopes: s, redirectUri: m, approximateGuildCount: g, isEmbeddedFlow: A, disclosures: I } = e,
        T = new Date(u.default.extractTimestamp(n.id)),
        S = (0, d.i4)(s),
        y = (0, l.n)(n, _.gfo.EMBEDDED);
    if (null != m && !y && !A)
        try {
            let e = new URL(m);
            t = null != e.host && e.host.length > 0 ? e.origin : e.href;
        } catch (e) {
            t = null;
        }
    return (0, r.jsxs)("div", {
        className: p.B_,
        children: [
            null != t ? (0, r.jsx)(E, { icon: a.qYV, text: f.intl.format(f.t["5k5OKD"], { origin: t }) }) : null,
            (0, r.jsx)(E, { icon: a.XAi, text: (0, c.w)(n) }),
            (0, r.jsx)(E, { icon: a.O4, text: f.intl.formatToPlainString(f.t["+1bjc8"], { date: T }) }),
            s.includes(i.F.BOT) && null != g
                ? (0, r.jsx)(E, { icon: a.CnV, text: f.intl.formatToPlainString(f.t.UHGHSP, { guildCount: g }) })
                : null,
            (0, r.jsx)(E, { icon: a.lmn, text: S }),
            null != I
                ? I.map((e) => {
                      let t = (0, o.wI)(e),
                          n = h(e);
                      return null != n && null != t ? (0, r.jsx)(E, { icon: n, text: t }) : null;
                  })
                : null,
        ],
    });
}
function E(e) {
    let { icon: t, text: n } = e;
    return (0, r.jsxs)("div", {
        className: p.f_,
        children: [
            (0, r.jsx)(t, { className: p.u7, color: "currentColor" }),
            (0, r.jsx)(s.E, { variant: "text-xs/normal", className: p.z9, children: n }),
        ],
    });
}
