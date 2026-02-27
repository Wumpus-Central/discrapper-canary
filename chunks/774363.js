"use strict";
n.d(t, { A: () => A }), n(323874), n(14289), n(35956);
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(179771),
    o = n(571356),
    l = n(397927),
    u = n(537569),
    c = n(224750),
    d = n(20015),
    _ = n(661191),
    f = n(510783),
    p = n(647053),
    h = n(652215),
    m = n(985018),
    E = n(934715);
let g = (e) => {
    switch (e) {
        case c.yW.IP_LOCATION:
            return l.L_e;
        case c.yW.DISPLAYS_ADVERTISEMENTS:
            return l.JD7;
        default:
            return null;
    }
};
function A(e) {
    let t,
        { application: n, scopes: i, redirectUri: o, approximateGuildCount: A, isEmbeddedFlow: T, disclosures: S } = e,
        y = new Date(_.default.extractTimestamp(n.id)),
        v = (0, p.i4)(i),
        N = (0, d.n)(n, h.gfo.EMBEDDED);
    if (null != o && !N && !T)
        try {
            let e = new URL(o);
            t = null != e.host && e.host.length > 0 ? e.origin : e.href;
        } catch (e) {
            t = null;
        }
    let C = u.v.useExperiment({ location: "oauth2_authorize" });
    return (0, r.jsxs)("div", {
        className: s()(E.B_, { [E.pN]: C.enabled }),
        children: [
            null != t ? (0, r.jsx)(I, { icon: l.qYV, text: m.intl.format(m.t["5k5OKD"], { origin: t }) }) : null,
            (0, r.jsx)(I, { icon: l.XAi, text: (0, f.w)(n) }),
            (0, r.jsx)(I, { icon: l.O4, text: m.intl.formatToPlainString(m.t["+1bjc8"], { date: y }) }),
            i.includes(a.F.BOT) && null != A
                ? (0, r.jsx)(I, { icon: l.CnV, text: m.intl.formatToPlainString(m.t.UHGHSP, { guildCount: A }) })
                : null,
            (0, r.jsx)(I, { icon: l.lmn, text: v }),
            null != S
                ? S.map((e) => {
                      let t = (0, c.wI)(e),
                          n = g(e);
                      return null != n && null != t ? (0, r.jsx)(I, { icon: n, text: t }) : null;
                  })
                : null,
        ],
    });
}
function I(e) {
    let { icon: t, text: n } = e;
    return (0, r.jsxs)("div", {
        className: E.f_,
        children: [
            (0, r.jsx)(t, { className: E.u7, color: "currentColor" }),
            (0, r.jsx)(o.E, { variant: "text-xs/normal", className: E.z9, children: n }),
        ],
    });
}
