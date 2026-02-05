"use strict";
n.d(t, { A: () => A }), n(938796), n(323874), n(14289), n(35956);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(179771),
    o = n(665260),
    l = n(571356),
    u = n(397927),
    c = n(537569),
    d = n(224750),
    _ = n(661191),
    f = n(510783),
    p = n(647053),
    h = n(652215),
    m = n(985018),
    g = n(934715);
let E = (e) => {
    switch (e) {
        case d.yW.IP_LOCATION:
            return u.L_e;
        case d.yW.DISPLAYS_ADVERTISEMENTS:
            return u.JD7;
        default:
            return null;
    }
};
function A(e) {
    let t,
        { application: n, scopes: i, redirectUri: l, approximateGuildCount: A, isEmbeddedFlow: T, disclosures: y } = e,
        S = new Date(_.default.extractTimestamp(n.id)),
        v = (0, p.i4)(i),
        C = (0, o.Lt)(n.flags ?? 0, h.gfo.EMBEDDED);
    if (null != l && !C && !T)
        try {
            let e = new URL(l);
            t = null != e.host && e.host.length > 0 ? e.origin : e.href;
        } catch (e) {
            t = null;
        }
    let b = c.v.useExperiment({ location: "oauth2_authorize" });
    return (0, r.jsxs)("div", {
        className: a()(g.B_, { [g.pN]: b.enabled }),
        children: [
            null != t ? (0, r.jsx)(I, { icon: u.qYV, text: m.intl.format(m.t["5k5OKD"], { origin: t }) }) : null,
            (0, r.jsx)(I, { icon: u.XAi, text: (0, f.w)(n) }),
            (0, r.jsx)(I, { icon: u.O4, text: m.intl.formatToPlainString(m.t["+1bjc8"], { date: S }) }),
            i.includes(s.F.BOT) && null != A
                ? (0, r.jsx)(I, { icon: u.CnV, text: m.intl.formatToPlainString(m.t.UHGHSP, { guildCount: A }) })
                : null,
            (0, r.jsx)(I, { icon: u.lmn, text: v }),
            null != y
                ? y.map((e) => {
                      let t = (0, d.wI)(e),
                          n = E(e);
                      return null != n && null != t ? (0, r.jsx)(I, { icon: n, text: t }) : null;
                  })
                : null,
        ],
    });
}
function I(e) {
    let { icon: t, text: n } = e;
    return (0, r.jsxs)("div", {
        className: g.f_,
        children: [
            (0, r.jsx)(t, { className: g.u7, color: "currentColor" }),
            (0, r.jsx)(l.E, { variant: "text-xs/normal", className: g.z9, children: n }),
        ],
    });
}
