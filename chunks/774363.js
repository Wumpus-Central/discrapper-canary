"use strict";
n.d(t, { A: () => I }), n(323874), n(14289), n(35956);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(179771),
    o = n(571356),
    l = n(397927),
    u = n(537569),
    c = n(224750),
    d = n(20015),
    _ = n(661191),
    f = n(510783),
    h = n(647053),
    p = n(652215),
    g = n(985018),
    E = n(934715);
let A = (e) => {
    switch (e) {
        case c.yW.IP_LOCATION:
            return l.L_e;
        case c.yW.DISPLAYS_ADVERTISEMENTS:
            return l.JD7;
        default:
            return null;
    }
};
function I(e) {
    let t,
        { application: n, scopes: i, redirectUri: o, approximateGuildCount: I, isEmbeddedFlow: y, disclosures: S } = e,
        v = new Date(_.default.extractTimestamp(n.id)),
        C = (0, h.i4)(i),
        b = (0, d.n)(n, p.gfo.EMBEDDED);
    if (null != o && !b && !y)
        try {
            let e = new URL(o);
            t = null != e.host && e.host.length > 0 ? e.origin : e.href;
        } catch (e) {
            t = null;
        }
    let N = u.v.useExperiment({ location: "oauth2_authorize" });
    return (0, r.jsxs)("div", {
        className: a()(E.B_, { [E.pN]: N.enabled }),
        children: [
            null != t ? (0, r.jsx)(T, { icon: l.qYV, text: g.intl.format(g.t["5k5OKD"], { origin: t }) }) : null,
            (0, r.jsx)(T, { icon: l.XAi, text: (0, f.w)(n) }),
            (0, r.jsx)(T, { icon: l.O4, text: g.intl.formatToPlainString(g.t["+1bjc8"], { date: v }) }),
            i.includes(s.F.BOT) && null != I
                ? (0, r.jsx)(T, { icon: l.CnV, text: g.intl.formatToPlainString(g.t.UHGHSP, { guildCount: I }) })
                : null,
            (0, r.jsx)(T, { icon: l.lmn, text: C }),
            null != S
                ? S.map((e) => {
                      let t = (0, c.wI)(e),
                          n = A(e);
                      return null != n && null != t ? (0, r.jsx)(T, { icon: n, text: t }) : null;
                  })
                : null,
        ],
    });
}
function T(e) {
    let { icon: t, text: n } = e;
    return (0, r.jsxs)("div", {
        className: E.f_,
        children: [
            (0, r.jsx)(t, { className: E.u7, color: "currentColor" }),
            (0, r.jsx)(o.E, { variant: "text-xs/normal", className: E.z9, children: n }),
        ],
    });
}
